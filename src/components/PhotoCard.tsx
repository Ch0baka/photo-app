import React from 'react';
import type { ExifMetadata, TextSegment } from '../core/types.ts';
import { buildExifBadges, resolveAssetUrl } from '../core/exposure.ts';

interface PhotoCardProps {
  asset: ExifMetadata;
  layout?: 'wide' | 'portrait' | 'diagram';
  onInspect: (asset: ExifMetadata) => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ asset, layout = 'wide', onInspect }) => {
  const badges = buildExifBadges(asset);

  return (
    <figure className={`photo-figure ${layout}`}>
      <div
        className="photo-frame"
        onClick={() => onInspect(asset)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onInspect(asset);
          }
        }}
        aria-label={`Ampliar imagen: ${asset.altText}`}
      >
        <img src={resolveAssetUrl(asset.filePath)} alt={asset.altText} loading="lazy" />
        <span className="zoom-hint">Ampliar ⤢</span>
      </div>

      {badges.length > 0 && (
        <div className="exif-strip" aria-label="Metadatos EXIF de la fotografía">
          {badges.map((b) => (
            <span key={`${asset.id}-${b.label}`} className={`exif-pill ${b.category}`}>
              <span className="exif-pill-label">{b.label}</span>
              <strong>{b.value}</strong>
            </span>
          ))}
        </div>
      )}

      {asset.caption && <figcaption className="photo-caption">{asset.caption}</figcaption>}
    </figure>
  );
};

interface RichTextProps {
  segments: TextSegment[];
  onNavigateChapter: (chapterNum: number) => void;
}

export const RichText: React.FC<RichTextProps> = ({ segments, onNavigateChapter }) => {
  return (
    <>
      {segments.map((seg, i) => {
        let content: React.ReactNode = seg.text;

        if (seg.code) {
          content = <code className="inline-code">{content}</code>;
        }
        if (seg.bold) {
          content = <strong>{content}</strong>;
        }
        if (seg.italic) {
          content = <em>{content}</em>;
        }
        if (typeof seg.internalChapterNumber === 'number') {
          const targetNum = seg.internalChapterNumber;
          content = (
            <button
              type="button"
              className="inline-link"
              onClick={() => onNavigateChapter(targetNum)}
              title={`Ir al Capítulo ${targetNum}`}
            >
              {content} ↗
            </button>
          );
        } else if (seg.linkUrl) {
          content = (
            <a
              href={seg.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              {content}
            </a>
          );
        }

        return <React.Fragment key={i}>{content}</React.Fragment>;
      })}
    </>
  );
};
