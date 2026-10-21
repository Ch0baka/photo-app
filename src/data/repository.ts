import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import type {
  BlockPayload,
  BlockType,
  ChapterDetail,
  ChapterSummary,
  ContentBlock,
  ExifMetadata,
  ModuleItem,
} from '../core/types.ts';

const DB_PATH = path.join(process.cwd(), 'data', 'app.db');

interface ModuleRow {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  description: string;
  cover_image: string;
  order_index: number;
  total_chapters: number;
  is_available: number;
}

interface ChapterRow {
  id: number;
  module_id: number;
  slug: string;
  chapter_number: number;
  title: string;
  subtitle: string;
  estimated_read_min: number;
  pdf_pages: string;
  is_ingested: number;
  is_completed: number;
}

interface AssetRow {
  id: string;
  chapter_id: number;
  file_path: string;
  alt_text: string;
  caption: string | null;
  camera_model: string | null;
  lens_focal: string | null;
  aperture: string | null;
  shutter_speed: string | null;
  iso: string | null;
  kelvin: string | null;
  extra_notes: string | null;
}

interface BlockRow {
  id: number;
  chapter_id: number;
  order_index: number;
  section_anchor: string | null;
  block_type: BlockType;
  content_json: string;
}

function mapChapterRow(row: ChapterRow): ChapterSummary {
  return {
    id: row.id,
    moduleId: row.module_id,
    slug: row.slug,
    chapterNumber: row.chapter_number,
    title: row.title,
    subtitle: row.subtitle,
    estimatedReadMin: row.estimated_read_min,
    pdfPages: row.pdf_pages,
    isIngested: Boolean(row.is_ingested),
    isCompleted: Boolean(row.is_completed),
  };
}

export function getAllModulesWithChapters(dbPath = DB_PATH): ModuleItem[] {
  const db = new DatabaseSync(dbPath);
  try {
    const modules = db
      .prepare('SELECT * FROM modules ORDER BY order_index ASC')
      .all() as unknown as ModuleRow[];

    const chapters = db
      .prepare('SELECT * FROM chapters ORDER BY chapter_number ASC')
      .all() as unknown as ChapterRow[];

    return modules.map((mod) => ({
      id: mod.id,
      slug: mod.slug,
      title: mod.title,
      subtitle: mod.subtitle,
      author: mod.author,
      description: mod.description,
      coverImage: mod.cover_image,
      orderIndex: mod.order_index,
      totalChapters: mod.total_chapters,
      isAvailable: Boolean(mod.is_available),
      chapters: chapters.filter((c) => c.module_id === mod.id).map(mapChapterRow),
    }));
  } finally {
    db.close();
  }
}

export function getChapterBySlug(slug: string, dbPath = DB_PATH): ChapterDetail | null {
  if (!slug || typeof slug !== 'string') {
    throw new Error('Invalid chapter slug provided.');
  }
  const db = new DatabaseSync(dbPath);
  try {
    const chapterRow = db
      .prepare('SELECT * FROM chapters WHERE slug = ?')
      .get(slug) as unknown as ChapterRow | undefined;

    if (!chapterRow) {
      return null;
    }

    const assetRows = db
      .prepare('SELECT * FROM media_assets WHERE chapter_id = ?')
      .all(chapterRow.id) as unknown as AssetRow[];

    const assets: Record<string, ExifMetadata> = {};
    for (const a of assetRows) {
      assets[a.id] = {
        id: a.id,
        filePath: a.file_path,
        altText: a.alt_text,
        caption: a.caption ?? undefined,
        cameraModel: a.camera_model ?? undefined,
        lensFocal: a.lens_focal ?? undefined,
        aperture: a.aperture ?? undefined,
        shutterSpeed: a.shutter_speed ?? undefined,
        iso: a.iso ?? undefined,
        kelvin: a.kelvin ?? undefined,
        extraNotes: a.extra_notes ?? undefined,
      };
    }

    const blockRows = db
      .prepare('SELECT * FROM content_blocks WHERE chapter_id = ? ORDER BY order_index ASC')
      .all(chapterRow.id) as unknown as BlockRow[];

    const blocks: ContentBlock[] = blockRows.map((b) => {
      const payload = JSON.parse(b.content_json) as BlockPayload;
      if (b.block_type === 'image_card' && 'assetId' in payload) {
        payload.asset = assets[payload.assetId];
      } else if (b.block_type === 'image_pair' && 'leftAssetId' in payload) {
        payload.leftAsset = assets[payload.leftAssetId];
        payload.rightAsset = assets[payload.rightAssetId];
      }
      return {
        id: b.id,
        chapterId: b.chapter_id,
        orderIndex: b.order_index,
        sectionAnchor: b.section_anchor,
        blockType: b.block_type,
        payload,
      };
    });

    return {
      ...mapChapterRow(chapterRow),
      blocks,
      assets,
    };
  } finally {
    db.close();
  }
}

export function setChapterCompleted(
  slug: string,
  completed: boolean,
  dbPath = DB_PATH
): ChapterSummary | null {
  const db = new DatabaseSync(dbPath);
  try {
    db.prepare('UPDATE chapters SET is_completed = ? WHERE slug = ?').run(completed ? 1 : 0, slug);
    const updated = db
      .prepare('SELECT * FROM chapters WHERE slug = ?')
      .get(slug) as unknown as ChapterRow | undefined;
    return updated ? mapChapterRow(updated) : null;
  } finally {
    db.close();
  }
}
