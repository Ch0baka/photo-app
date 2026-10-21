import type { ExifMetadata, ReaderSettings } from './types.ts';

export const DEFAULT_READER_SETTINGS: ReaderSettings = {
  theme: 'dark',
  fontFamily: 'sans',
  fontSize: 'md',
  lineSpacing: 'normal',
  showSonyNotes: true,
};

export interface ExifBadgeItem {
  label: string;
  value: string;
  category: 'camera' | 'lens' | 'aperture' | 'shutter' | 'iso' | 'wb' | 'extra';
}

/**
 * Formats structured EXIF metadata into ordered badge pills for the UI.
 */
export function buildExifBadges(asset: ExifMetadata): ExifBadgeItem[] {
  const badges: ExifBadgeItem[] = [];

  if (asset.cameraModel) {
    badges.push({ label: 'Cámara', value: asset.cameraModel, category: 'camera' });
  }
  if (asset.lensFocal) {
    badges.push({ label: 'Focal', value: asset.lensFocal, category: 'lens' });
  }
  if (asset.aperture) {
    badges.push({ label: 'Apertura', value: asset.aperture, category: 'aperture' });
  }
  if (asset.shutterSpeed) {
    badges.push({ label: 'Velocidad', value: asset.shutterSpeed, category: 'shutter' });
  }
  if (asset.iso) {
    badges.push({ label: 'Sensibilidad', value: `ISO ${asset.iso.replace(/^ISO\s*/i, '')}`, category: 'iso' });
  }
  if (asset.kelvin) {
    badges.push({ label: 'Balance Blancos', value: asset.kelvin, category: 'wb' });
  }
  if (asset.extraNotes) {
    badges.push({ label: 'Técnica / Filtro', value: asset.extraNotes, category: 'extra' });
  }

  return badges;
}

/**
 * Calculates Exposure Value (EV at ISO 100 and adjusted for current ISO)
 * Formula from Book 1 Section 8: EV_ISO = log2(N^2 / t) + log2(ISO / 100)
 */
export function calculateExposureValue(
  fNumber: number,
  shutterSeconds: number,
  iso: number
): number {
  if (fNumber <= 0 || shutterSeconds <= 0 || iso <= 0) {
    throw new Error('Invalid exposure parameters: fNumber, shutterSeconds, and iso must be positive.');
  }
  const ev100 = Math.log2((fNumber * fNumber) / shutterSeconds);
  const isoShift = Math.log2(iso / 100);
  return Math.round((ev100 + isoShift) * 100) / 100;
}

/**
 * Validates and merges partial reader settings with defaults.
 */
export function normalizeReaderSettings(input: unknown): ReaderSettings {
  if (!input || typeof input !== 'object') {
    return { ...DEFAULT_READER_SETTINGS };
  }
  const record = input as Record<string, unknown>;
  const theme =
    record.theme === 'light' || record.theme === 'dark' || record.theme === 'sepia'
      ? record.theme
      : DEFAULT_READER_SETTINGS.theme;
  const VALID_FONTS = new Set([
    'sans',
    'serif',
    'mono',
    'jakarta',
    'merriweather',
    'literata',
  ]);
  const fontFamily =
    typeof record.fontFamily === 'string' && VALID_FONTS.has(record.fontFamily)
      ? (record.fontFamily as ReaderSettings['fontFamily'])
      : DEFAULT_READER_SETTINGS.fontFamily;
  const fontSize =
    record.fontSize === 'sm' ||
    record.fontSize === 'md' ||
    record.fontSize === 'lg' ||
    record.fontSize === 'xl'
      ? record.fontSize
      : DEFAULT_READER_SETTINGS.fontSize;
  const lineSpacing =
    record.lineSpacing === 'compact' ||
    record.lineSpacing === 'normal' ||
    record.lineSpacing === 'relaxed'
      ? record.lineSpacing
      : DEFAULT_READER_SETTINGS.lineSpacing;
  const showSonyNotes =
    typeof record.showSonyNotes === 'boolean'
      ? record.showSonyNotes
      : DEFAULT_READER_SETTINGS.showSonyNotes;

  return {
    theme,
    fontFamily,
    fontSize,
    lineSpacing,
    showSonyNotes,
  };
}

/**
 * Resolves a public asset path (e.g., '/images/...') against Vite's BASE_URL
 * so assets work both in root ('/') and GitHub Pages subpaths ('./' or '/photo-app/').
 */
export function resolveAssetUrl(filePath: string): string {
  if (!filePath) return '';
  if (/^(https?:|data:|blob:)/i.test(filePath)) return filePath;
  const cleanPath = filePath.replace(/^\/+/, '');
  const metaWithEnv = import.meta as ImportMeta & { env?: { BASE_URL?: string } };
  const baseUrl = metaWithEnv.env?.BASE_URL || './';
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${cleanPath}`;
}
