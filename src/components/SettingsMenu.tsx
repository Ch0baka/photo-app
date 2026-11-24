import React from 'react';
import type { AccentColorOption, FontFamilyOption, ReaderSettings } from '../core/types.ts';

interface SettingsMenuProps {
  settings: ReaderSettings;
  onChange: (updated: ReaderSettings) => void;
}

const ACCENT_OPTIONS: Array<{ id: AccentColorOption; label: string; swatch: string }> = [
  { id: 'sony', label: 'Sony Alpha', swatch: '#ea580c' },
  { id: 'blue', label: 'Azul Técnico', swatch: '#3b82f6' },
  { id: 'emerald', label: 'Esmeralda', swatch: '#10b981' },
  { id: 'violet', label: 'Violeta', swatch: '#8b5cf6' },
  { id: 'rose', label: 'Carmesí', swatch: '#f43f5e' },
  { id: 'amber', label: 'Ámbar Dorado', swatch: '#f59e0b' },
  { id: 'cyan', label: 'Cian Óptico', swatch: '#06b6d4' },
  { id: 'slate', label: 'Grafito', swatch: '#64748b' },
];

const FONT_OPTIONS: Array<{ id: FontFamilyOption; label: string; sample: string }> = [
  { id: 'sans', label: 'Inter', sample: 'Sans Moderna' },
  { id: 'jakarta', label: 'Plus Jakarta', sample: 'Sans Geométrica' },
  { id: 'macos', label: 'SF Pro (macOS)', sample: 'Sistema Apple' },
  { id: 'antigravity', label: 'Antigravity', sample: 'Google / DM Sans' },
  { id: 'serif', label: 'Lora', sample: 'Serif Editorial' },
  { id: 'merriweather', label: 'Merriweather', sample: 'Serif Clásica' },
  { id: 'literata', label: 'Literata', sample: 'Lectura Digital' },
  { id: 'mono', label: 'JetBrains Mono', sample: 'Técnica Mono' },
];

export const SettingsMenu: React.FC<SettingsMenuProps> = ({ settings, onChange }) => {
  return (
    <div className="settings-popover" role="dialog" aria-label="Preferencias de lectura">
      <div className="settings-group">
        <span className="settings-label">Modo de color</span>
        <div className="segmented-control">
          <button
            type="button"
            className={`segment-btn ${settings.theme === 'dark' ? 'active' : ''}`}
            onClick={() => onChange({ ...settings, theme: 'dark' })}
          >
            Oscuro
          </button>
          <button
            type="button"
            className={`segment-btn ${settings.theme === 'light' ? 'active' : ''}`}
            onClick={() => onChange({ ...settings, theme: 'light' })}
          >
            Claro
          </button>
          <button
            type="button"
            className={`segment-btn ${settings.theme === 'sepia' ? 'active' : ''}`}
            onClick={() => onChange({ ...settings, theme: 'sepia' })}
          >
            Sepia
          </button>
        </div>
      </div>

      <div className="settings-group">
        <span className="settings-label">Esquema de color (8 acentos)</span>
        <div className="accent-grid-control" role="radiogroup" aria-label="Color de acento">
          {ACCENT_OPTIONS.map((accent) => (
            <button
              key={accent.id}
              type="button"
              role="radio"
              aria-checked={settings.accentColor === accent.id}
              aria-label={accent.label}
              title={accent.label}
              className={`accent-swatch-btn ${settings.accentColor === accent.id ? 'active' : ''}`}
              style={{ '--swatch-color': accent.swatch } as React.CSSProperties}
              onClick={() => onChange({ ...settings, accentColor: accent.id })}
            >
              <span className="accent-swatch-dot" />
            </button>
          ))}
        </div>
      </div>

      <div className="settings-group">
        <span className="settings-label">Familia tipográfica (8 estilos)</span>
        <div className="font-grid-control">
          {FONT_OPTIONS.map((font) => (
            <button
              key={font.id}
              type="button"
              className={`font-option-btn font-preview-${font.id} ${
                settings.fontFamily === font.id ? 'active' : ''
              }`}
              onClick={() => onChange({ ...settings, fontFamily: font.id })}
            >
              <span className="font-option-name">{font.label}</span>
              <span className="font-option-sub">{font.sample}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="settings-group">
        <span className="settings-label">Tamaño de letra</span>
        <div className="segmented-control">
          {(['sm', 'md', 'lg', 'xl'] as const).map((sz) => (
            <button
              key={sz}
              type="button"
              className={`segment-btn ${settings.fontSize === sz ? 'active' : ''}`}
              onClick={() => onChange({ ...settings, fontSize: sz })}
            >
              {sz.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="settings-group">
        <span className="settings-label">Interlineado</span>
        <div className="segmented-control">
          <button
            type="button"
            className={`segment-btn ${settings.lineSpacing === 'compact' ? 'active' : ''}`}
            onClick={() => onChange({ ...settings, lineSpacing: 'compact' })}
          >
            Compacto
          </button>
          <button
            type="button"
            className={`segment-btn ${settings.lineSpacing === 'normal' ? 'active' : ''}`}
            onClick={() => onChange({ ...settings, lineSpacing: 'normal' })}
          >
            Normal
          </button>
          <button
            type="button"
            className={`segment-btn ${settings.lineSpacing === 'relaxed' ? 'active' : ''}`}
            onClick={() => onChange({ ...settings, lineSpacing: 'relaxed' })}
          >
            Amplio
          </button>
        </div>
      </div>

      <div className="toggle-row">
        <span>Mostrar notas Sony α7 IV</span>
        <input
          type="checkbox"
          checked={settings.showSonyNotes}
          onChange={(e) => onChange({ ...settings, showSonyNotes: e.target.checked })}
        />
      </div>
    </div>
  );
};
