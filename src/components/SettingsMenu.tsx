import React from 'react';
import type { FontFamilyOption, ReaderSettings } from '../core/types.ts';

interface SettingsMenuProps {
  settings: ReaderSettings;
  onChange: (updated: ReaderSettings) => void;
}

const FONT_OPTIONS: Array<{ id: FontFamilyOption; label: string; sample: string }> = [
  { id: 'sans', label: 'Inter', sample: 'Sans Moderna' },
  { id: 'jakarta', label: 'Plus Jakarta', sample: 'Sans Geométrica' },
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
        <span className="settings-label">Familia tipográfica (6 estilos)</span>
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
