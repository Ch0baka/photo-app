import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import {
  BOOK_1_ASSETS,
  BOOK_1_CHAPTERS,
  CHAPTER_1_BLOCKS,
  CHAPTER_2_BLOCKS,
  INTRO_BLOCKS,
  type SeedBlockInput,
} from './book1-content.ts';
import {
  BOOK_1_ASSETS_CH3_TO_5,
  CHAPTER_3_BLOCKS,
  CHAPTER_4_BLOCKS,
  CHAPTER_5_BLOCKS,
} from './book1-ch3-to-5.ts';
import {
  BOOK_1_ASSETS_CH6_TO_9,
  CHAPTER_6_BLOCKS,
  CHAPTER_7_BLOCKS,
  CHAPTER_8_BLOCKS,
  CHAPTER_9_BLOCKS,
} from './book1-ch6-to-9.ts';
import {
  BOOK_1_ASSETS_CH10_TO_27,
  CHAPTERS_10_TO_27_BLOCKS,
} from './book1-ch10-to-27.ts';
import {
  BOOK_2_ASSETS,
  BOOK_2_BLOCKS,
  BOOK_2_CHAPTERS,
} from './book2-content.ts';

const ROOT_DIR = process.cwd();
const DATA_DIR = path.join(ROOT_DIR, 'data');
const DB_PATH = path.join(DATA_DIR, 'app.db');
const SCHEMA_PATH = path.join(ROOT_DIR, 'src', 'data', 'schema.sql');

export function seedDatabase(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    const db = new DatabaseSync(DB_PATH);
    const schemaSql = fs.readFileSync(SCHEMA_PATH, 'utf-8');
    db.exec(schemaSql);

    // Ensure cover_image column exists if migrating an older DB
    const tableInfo = db.prepare('PRAGMA table_info(modules)').all() as Array<{ name: string }>;
    if (!tableInfo.some((col) => col.name === 'cover_image')) {
      db.exec("ALTER TABLE modules ADD COLUMN cover_image TEXT NOT NULL DEFAULT '';");
    }

    // Preserve user completion state across seeds
    const completedRows = db
      .prepare('SELECT slug, is_completed FROM chapters WHERE is_completed = 1')
      .all() as Array<{ slug: string; is_completed: number }>;
    const completedSlugs = new Set(completedRows.map((r) => r.slug));

    db.exec('DELETE FROM content_blocks;');
    db.exec('DELETE FROM media_assets;');
    db.exec('DELETE FROM chapters;');
    db.exec('DELETE FROM modules;');

    const insertModule = db.prepare(`
      INSERT INTO modules (slug, title, subtitle, author, description, cover_image, order_index, total_chapters, is_available)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const mod1Result = insertModule.run(
      'libro-1-exposicion-photopills',
      'Módulo 1: La Guía Definitiva de Exposición',
      'La guía definitiva para exponer correctamente tus fotos ¡Siempre!',
      'Antoni Cladera — PhotoPills',
      'Domina la luz, el triángulo de exposición, el histograma, los filtros y el rango dinámico con tu Sony Alpha 7 IV.',
      '/images/covers/book-1-cover.png',
      1,
      28,
      1
    );
    const mod1Id = Number(mod1Result.lastInsertRowid);

    const mod2Result = insertModule.run(
      'libro-2-profundidad-de-campo-photopills',
      'Módulo 2: La Guía Definitiva de Profundidad de Campo',
      'La guía definitiva sobre la profundidad de campo',
      'Antoni Cladera & Germán Marquès — PhotoPills',
      'Domina la distancia hiperfocal, el círculo de confusión, la difracción, la macrofotografía y el bokeh con tu Sony Alpha 7 IV.',
      '/images/covers/book-2-cover.png',
      2,
      16,
      1
    );
    const mod2Id = Number(mod2Result.lastInsertRowid);

    const insertChapter = db.prepare(`
      INSERT INTO chapters (module_id, slug, chapter_number, title, subtitle, estimated_read_min, pdf_pages, is_ingested, is_completed)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const mod1ChapterIdByNum = new Map<number, number>();
    for (const ch of BOOK_1_CHAPTERS) {
      const isCompleted = completedSlugs.has(ch.slug) ? 1 : 0;
      const result = insertChapter.run(
        mod1Id,
        ch.slug,
        ch.chapterNumber,
        ch.title,
        ch.subtitle,
        ch.estimatedReadMin,
        ch.pdfPages,
        ch.isIngested ? 1 : 0,
        isCompleted
      );
      mod1ChapterIdByNum.set(ch.chapterNumber, Number(result.lastInsertRowid));
    }

    const mod2ChapterIdByNum = new Map<number, number>();
    for (const ch of BOOK_2_CHAPTERS) {
      const isCompleted = completedSlugs.has(ch.slug) ? 1 : 0;
      const result = insertChapter.run(
        mod2Id,
        ch.slug,
        ch.chapterNumber,
        ch.title,
        ch.subtitle,
        ch.estimatedReadMin,
        ch.pdfPages,
        ch.isIngested ? 1 : 0,
        isCompleted
      );
      mod2ChapterIdByNum.set(ch.chapterNumber, Number(result.lastInsertRowid));
    }

    const insertAsset = db.prepare(`
      INSERT INTO media_assets (id, chapter_id, file_path, alt_text, caption, camera_model, lens_focal, aperture, shutter_speed, iso, kelvin, extra_notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const allBook1Assets = [
      ...BOOK_1_ASSETS,
      ...BOOK_1_ASSETS_CH3_TO_5,
      ...BOOK_1_ASSETS_CH6_TO_9,
      ...BOOK_1_ASSETS_CH10_TO_27,
    ];

    for (const asset of allBook1Assets) {
      const chId = mod1ChapterIdByNum.get(asset.chapterNumber);
      if (!chId) continue;
      insertAsset.run(
        asset.id,
        chId,
        asset.filePath,
        asset.altText,
        asset.caption ?? null,
        asset.cameraModel ?? null,
        asset.lensFocal ?? null,
        asset.aperture ?? null,
        asset.shutterSpeed ?? null,
        asset.iso ?? null,
        asset.kelvin ?? null,
        asset.extraNotes ?? null
      );
    }

    for (const asset of BOOK_2_ASSETS) {
      const chId = mod2ChapterIdByNum.get(asset.chapterNumber);
      if (!chId) continue;
      insertAsset.run(
        asset.id,
        chId,
        asset.filePath,
        asset.altText,
        asset.caption ?? null,
        asset.cameraModel ?? null,
        asset.lensFocal ?? null,
        asset.aperture ?? null,
        asset.shutterSpeed ?? null,
        asset.iso ?? null,
        asset.kelvin ?? null,
        asset.extraNotes ?? null
      );
    }

    const insertBlock = db.prepare(`
      INSERT INTO content_blocks (chapter_id, order_index, section_anchor, block_type, content_json)
      VALUES (?, ?, ?, ?, ?)
    `);

    const insertBlocksForMap = (
      map: Map<number, number>,
      chapterNum: number,
      blocks: SeedBlockInput[]
    ) => {
      const chId = map.get(chapterNum);
      if (!chId) {
        throw new Error(`Chapter number ${chapterNum} not found in seeded chapters.`);
      }
      blocks.forEach((b, idx) => {
        insertBlock.run(
          chId,
          idx + 1,
          b.sectionAnchor ?? null,
          b.blockType,
          JSON.stringify(b.payload)
        );
      });
    };

    // Seed Book 1 blocks
    insertBlocksForMap(mod1ChapterIdByNum, 0, INTRO_BLOCKS);
    insertBlocksForMap(mod1ChapterIdByNum, 1, CHAPTER_1_BLOCKS);
    insertBlocksForMap(mod1ChapterIdByNum, 2, CHAPTER_2_BLOCKS);
    insertBlocksForMap(mod1ChapterIdByNum, 3, CHAPTER_3_BLOCKS);
    insertBlocksForMap(mod1ChapterIdByNum, 4, CHAPTER_4_BLOCKS);
    insertBlocksForMap(mod1ChapterIdByNum, 5, CHAPTER_5_BLOCKS);
    insertBlocksForMap(mod1ChapterIdByNum, 6, CHAPTER_6_BLOCKS);
    insertBlocksForMap(mod1ChapterIdByNum, 7, CHAPTER_7_BLOCKS);
    insertBlocksForMap(mod1ChapterIdByNum, 8, CHAPTER_8_BLOCKS);
    insertBlocksForMap(mod1ChapterIdByNum, 9, CHAPTER_9_BLOCKS);

    for (let chNum = 10; chNum <= 27; chNum++) {
      const chBlocks = CHAPTERS_10_TO_27_BLOCKS[chNum];
      if (chBlocks) {
        insertBlocksForMap(mod1ChapterIdByNum, chNum, chBlocks);
      }
    }

    // Seed Book 2 blocks
    for (let chNum = 0; chNum <= 15; chNum++) {
      const chBlocks = BOOK_2_BLOCKS[chNum];
      if (chBlocks) {
        insertBlocksForMap(mod2ChapterIdByNum, chNum, chBlocks);
      }
    }

    db.close();
    console.log(
      `[SQLite Seed] Base de datos inicializada en ${DB_PATH}: Módulo 1 (28 caps, ${allBook1Assets.length} imgs) + Módulo 2 (16 caps, ${BOOK_2_ASSETS.length} imgs).`
    );
  } catch (err) {
    console.error('[SQLite Seed Error]:', err);
    throw err;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase();
}
