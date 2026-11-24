import { describe, expect, it } from 'vitest';
import { DEFAULT_READER_SETTINGS, normalizeReaderSettings } from '../../src/core/exposure.ts';

describe('normalizeReaderSettings', () => {
  it('returns defaults for null or invalid inputs', () => {
    expect(normalizeReaderSettings(null)).toEqual(DEFAULT_READER_SETTINGS);
    expect(normalizeReaderSettings('invalid')).toEqual(DEFAULT_READER_SETTINGS);
    expect(
      normalizeReaderSettings({
        theme: 'neon',
        accentColor: 'magenta',
        fontFamily: 'comic-sans',
        fontSize: 'xxl',
        lineSpacing: 'huge',
        showSonyNotes: 'yes',
      }),
    ).toEqual(DEFAULT_READER_SETTINGS);
  });

  it('preserves valid accent colors and new font families', () => {
    const result = normalizeReaderSettings({
      theme: 'light',
      accentColor: 'emerald',
      fontFamily: 'macos',
      fontSize: 'lg',
      lineSpacing: 'relaxed',
      showSonyNotes: false,
    });

    expect(result).toEqual({
      theme: 'light',
      accentColor: 'emerald',
      fontFamily: 'macos',
      fontSize: 'lg',
      lineSpacing: 'relaxed',
      showSonyNotes: false,
    });

    expect(normalizeReaderSettings({ fontFamily: 'antigravity', accentColor: 'cyan' })).toEqual({
      ...DEFAULT_READER_SETTINGS,
      fontFamily: 'antigravity',
      accentColor: 'cyan',
    });
  });
});
