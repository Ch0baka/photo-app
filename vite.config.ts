import fs from 'node:fs';
import path from 'node:path';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { seedDatabase } from './src/data/seed.ts';
import {
  getAllModulesWithChapters,
  getChapterBySlug,
  setChapterCompleted,
} from './src/data/repository.ts';

function localSqliteApiPlugin(): Plugin {
  return {
    name: 'local-sqlite-api',
    buildStart() {
      const dbPath = path.join(process.cwd(), 'data', 'app.db');
      if (!fs.existsSync(dbPath)) {
        seedDatabase();
      }

      // Export static JSON mirror inside public/static-api for static hosts like GitHub Pages
      const staticApiDir = path.join(process.cwd(), 'public', 'static-api');
      const chaptersDir = path.join(staticApiDir, 'chapters');
      fs.mkdirSync(chaptersDir, { recursive: true });

      const modules = getAllModulesWithChapters(dbPath);
      fs.writeFileSync(
        path.join(staticApiDir, 'modules.json'),
        JSON.stringify({ modules })
      );

      for (const mod of modules) {
        for (const ch of mod.chapters) {
          const detail = getChapterBySlug(ch.slug, dbPath);
          if (detail) {
            fs.writeFileSync(
              path.join(chaptersDir, `${ch.slug}.json`),
              JSON.stringify({ chapter: detail })
            );
          }
        }
      }
    },
    configureServer(server) {
      const dbPath = path.join(process.cwd(), 'data', 'app.db');
      if (!fs.existsSync(dbPath)) {
        seedDatabase();
      }

      server.middlewares.use(
        (req: IncomingMessage, res: ServerResponse, next: () => void) => {
          const url = req.url ?? '';
          if (!url.startsWith('/api/')) {
            next();
            return;
          }

          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.setHeader('X-Content-Type-Options', 'nosniff');

          // Reject compressed request bodies (Defense-in-depth against CVE-2026-111497 / Node2Shell Brotli RCE)
          const contentEncoding = (req.headers['content-encoding'] ?? '').toString().toLowerCase();
          if (contentEncoding && contentEncoding !== 'identity') {
            res.statusCode = 415;
            res.end(
              JSON.stringify({
                error: 'Compressed request payloads (Content-Encoding) are not permitted.',
              })
            );
            return;
          }

          try {
            if (req.method === 'GET' && url === '/api/modules') {
              const modules = getAllModulesWithChapters(dbPath);
              res.statusCode = 200;
              res.end(JSON.stringify({ modules }));
              return;
            }

            const chapterMatch = url.match(/^\/api\/chapters\/([a-zA-Z0-9_-]+)$/);
            if (req.method === 'GET' && chapterMatch) {
              const slug = chapterMatch[1];
              const chapter = getChapterBySlug(slug, dbPath);
              if (!chapter) {
                res.statusCode = 404;
                res.end(JSON.stringify({ error: `Capítulo "${slug}" no encontrado.` }));
                return;
              }
              res.statusCode = 200;
              res.end(JSON.stringify({ chapter }));
              return;
            }

            const completeMatch = url.match(/^\/api\/chapters\/([a-zA-Z0-9_-]+)\/complete$/);
            if (req.method === 'POST' && completeMatch) {
              const slug = completeMatch[1];
              const MAX_BODY_BYTES = 1024;
              let body = '';
              let bodyBytes = 0;
              let aborted = false;

              req.on('data', (chunk: Buffer) => {
                if (aborted) return;
                bodyBytes += chunk.length;
                if (bodyBytes > MAX_BODY_BYTES) {
                  aborted = true;
                  res.statusCode = 413;
                  res.end(JSON.stringify({ error: 'Payload demasiado grande' }));
                  req.destroy();
                  return;
                }
                body += chunk.toString('utf-8');
              });
              req.on('end', () => {
                if (aborted) return;
                try {
                  const parsed = JSON.parse(body || '{}') as Record<string, unknown>;
                  const completed =
                    Object.prototype.hasOwnProperty.call(parsed, 'completed') &&
                    parsed.completed === true;
                  const updated = setChapterCompleted(slug, completed, dbPath);
                  if (!updated) {
                    res.statusCode = 404;
                    res.end(JSON.stringify({ error: 'Capítulo no encontrado' }));
                    return;
                  }
                  res.statusCode = 200;
                  res.end(JSON.stringify({ chapter: updated }));
                } catch (err) {
                  res.statusCode = 400;
                  res.end(JSON.stringify({ error: String(err) }));
                }
              });
              return;
            }

            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Endpoint no encontrado' }));
          } catch (err) {
            console.error('[API Error]:', err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Error interno en la base de datos local' }));
          }
        }
      );
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), localSqliteApiPlugin()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
});
