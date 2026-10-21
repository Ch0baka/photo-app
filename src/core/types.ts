export interface ModuleItem {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  description: string;
  coverImage: string;
  orderIndex: number;
  totalChapters: number;
  isAvailable: boolean;
  chapters: ChapterSummary[];
}

export interface ChapterSummary {
  id: number;
  moduleId: number;
  slug: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  estimatedReadMin: number;
  pdfPages: string;
  isIngested: boolean;
  isCompleted: boolean;
}

export interface ExifMetadata {
  id: string;
  filePath: string;
  altText: string;
  caption?: string;
  cameraModel?: string;
  lensFocal?: string;
  aperture?: string;
  shutterSpeed?: string;
  iso?: string;
  kelvin?: string;
  extraNotes?: string;
}

export type BlockType =
  | 'heading'
  | 'paragraph'
  | 'list'
  | 'qa_item'
  | 'image_card'
  | 'image_pair'
  | 'callout_tip'
  | 'quote'
  | 'sony_a7iv_note';

export interface HeadingBlockPayload {
  level: 2 | 3;
  text: string;
  anchor: string;
}

export interface ParagraphBlockPayload {
  segments: TextSegment[];
}

export interface TextSegment {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  linkUrl?: string;
  internalChapterNumber?: number;
}

export interface ListBlockPayload {
  items: TextSegment[][];
}

export interface QaItemBlockPayload {
  questionNumber: number;
  question: string;
  answerParagraphs: TextSegment[][];
}

export interface ImageCardBlockPayload {
  assetId: string;
  asset?: ExifMetadata;
  layout?: 'wide' | 'portrait' | 'diagram';
}

export interface ImagePairBlockPayload {
  leftAssetId: string;
  rightAssetId: string;
  leftAsset?: ExifMetadata;
  rightAsset?: ExifMetadata;
}

export interface CalloutTipBlockPayload {
  title: string;
  items: TextSegment[][];
}

export interface QuoteBlockPayload {
  quote: string;
  author: string;
  source?: string;
}

export interface SonyA7IVNoteBlockPayload {
  title: string;
  summary: string;
  bulletPoints: string[];
  manualUrl: string;
  manualLabel: string;
  cameraPath?: string;
}

export type BlockPayload =
  | HeadingBlockPayload
  | ParagraphBlockPayload
  | ListBlockPayload
  | QaItemBlockPayload
  | ImageCardBlockPayload
  | ImagePairBlockPayload
  | CalloutTipBlockPayload
  | QuoteBlockPayload
  | SonyA7IVNoteBlockPayload;

export interface ContentBlock {
  id: number;
  chapterId: number;
  orderIndex: number;
  sectionAnchor: string | null;
  blockType: BlockType;
  payload: BlockPayload;
}

export interface ChapterDetail extends ChapterSummary {
  blocks: ContentBlock[];
  assets: Record<string, ExifMetadata>;
}

export type ThemeMode = 'dark' | 'light' | 'sepia';
export type FontFamilyOption =
  | 'sans'
  | 'serif'
  | 'mono'
  | 'jakarta'
  | 'merriweather'
  | 'literata';
export type FontSizeScale = 'sm' | 'md' | 'lg' | 'xl';

export interface ReaderSettings {
  theme: ThemeMode;
  fontFamily: FontFamilyOption;
  fontSize: FontSizeScale;
  lineSpacing: 'compact' | 'normal' | 'relaxed';
  showSonyNotes: boolean;
}
