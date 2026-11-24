import fs from 'node:fs';
import path from 'node:path';
import type { ChapterSummary, ExifMetadata } from '../core/types.ts';
import type { SeedBlockInput } from './book1-content.ts';
import { parseReportMarkdown } from './markdownReports.ts';

export interface LoadedReportsModule {
  chapters: Omit<ChapterSummary, 'id' | 'moduleId' | 'isCompleted'>[];
  blocksByChapter: Record<number, SeedBlockInput[]>;
  assets: Array<ExifMetadata & { chapterNumber: number }>;
}

export function loadReportsModule(
  reportsDir = path.join(process.cwd(), 'src', 'data', 'reports')
): LoadedReportsModule {
  if (!fs.existsSync(reportsDir)) {
    return { chapters: [], blocksByChapter: {}, assets: [] };
  }

  const files = fs
    .readdirSync(reportsDir)
    .filter((fn) => fn.endsWith('.md'))
    .sort((a, b) => a.localeCompare(b, 'es'));

  const chapters: Omit<ChapterSummary, 'id' | 'moduleId' | 'isCompleted'>[] = [];
  const blocksByChapter: Record<number, SeedBlockInput[]> = {};
  const assets: Array<ExifMetadata & { chapterNumber: number }> = [];

  files.forEach((fileName, idx) => {
    const raw = fs.readFileSync(path.join(reportsDir, fileName), 'utf-8');
    const fallbackSlug = `rep-${fileName.replace(/\.md$/i, '')}`;
    const defaultChapterNum = idx + 1;
    const parsed = parseReportMarkdown(raw, fallbackSlug, defaultChapterNum);

    chapters.push(parsed.chapter);
    blocksByChapter[parsed.chapter.chapterNumber] = parsed.blocks;
    assets.push(...parsed.assets);
  });

  chapters.sort((a, b) => a.chapterNumber - b.chapterNumber);
  return { chapters, blocksByChapter, assets };
}
