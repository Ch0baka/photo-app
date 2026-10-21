-- =============================================================================
-- Sony Alpha 7 IV — Plataforma de Aprendizaje Fotográfico
-- Esquema de Base de Datos Local (SQLite3)
-- =============================================================================

PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS modules (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    author TEXT NOT NULL,
    description TEXT NOT NULL,
    cover_image TEXT NOT NULL DEFAULT '',
    order_index INTEGER NOT NULL,
    total_chapters INTEGER NOT NULL DEFAULT 0,
    is_available INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS chapters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    module_id INTEGER NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    chapter_number INTEGER NOT NULL, -- 0 para Introducción, 1..27 para capítulos
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    estimated_read_min INTEGER NOT NULL DEFAULT 5,
    pdf_pages TEXT NOT NULL,
    is_ingested INTEGER NOT NULL DEFAULT 0,
    is_completed INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS media_assets (
    id TEXT PRIMARY KEY, -- ej. 'b1-intro-p8', 'b1-c2-p16'
    chapter_id INTEGER NOT NULL,
    file_path TEXT NOT NULL,
    alt_text TEXT NOT NULL,
    caption TEXT,
    camera_model TEXT,
    lens_focal TEXT,
    aperture TEXT,
    shutter_speed TEXT,
    iso TEXT,
    kelvin TEXT,
    extra_notes TEXT,
    FOREIGN KEY (chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS content_blocks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    order_index INTEGER NOT NULL,
    section_anchor TEXT,
    block_type TEXT NOT NULL, -- 'heading', 'paragraph', 'list', 'qa_item', 'image_card', 'callout_tip', 'quote', 'sony_a7iv_note'
    content_json TEXT NOT NULL,
    FOREIGN KEY (chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    block_id INTEGER,
    note_text TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);
