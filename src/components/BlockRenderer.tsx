import React from 'react';
import type {
  CalloutTipBlockPayload,
  ContentBlock,
  ExifMetadata,
  HeadingBlockPayload,
  ImageCardBlockPayload,
  ImagePairBlockPayload,
  ListBlockPayload,
  ParagraphBlockPayload,
  QaItemBlockPayload,
  QuoteBlockPayload,
  SonyA7IVNoteBlockPayload,
} from '../core/types.ts';
import { PhotoCard, RichText } from './PhotoCard.tsx';

interface BlockRendererProps {
  block: ContentBlock;
  showSonyNotes: boolean;
  onInspectAsset: (asset: ExifMetadata) => void;
  onNavigateChapter: (chapterNumber: number) => void;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({
  block,
  showSonyNotes,
  onInspectAsset,
  onNavigateChapter,
}) => {
  switch (block.blockType) {
    case 'heading': {
      const payload = block.payload as HeadingBlockPayload;
      if (payload.level === 2) {
        return (
          <h2 id={payload.anchor} className="block-heading-2">
            {payload.text}
          </h2>
        );
      }
      return (
        <h3 id={payload.anchor} className="block-heading-3">
          {payload.text}
        </h3>
      );
    }

    case 'paragraph': {
      const payload = block.payload as ParagraphBlockPayload;
      return (
        <p className="block-paragraph">
          <RichText segments={payload.segments} onNavigateChapter={onNavigateChapter} />
        </p>
      );
    }

    case 'list': {
      const payload = block.payload as ListBlockPayload;
      return (
        <ul className="block-list">
          {payload.items.map((itemSegments, idx) => (
            <li key={idx}>
              <RichText segments={itemSegments} onNavigateChapter={onNavigateChapter} />
            </li>
          ))}
        </ul>
      );
    }

    case 'qa_item': {
      const payload = block.payload as QaItemBlockPayload;
      return (
        <section className="qa-card" aria-label={`Pregunta ${payload.questionNumber}`}>
          <div className="qa-header">
            <span className="qa-badge">#{payload.questionNumber}</span>
            <h4 className="qa-question">{payload.question}</h4>
          </div>
          <div className="qa-answer">
            {payload.answerParagraphs.map((para, idx) => (
              <p key={idx}>
                <RichText segments={para} onNavigateChapter={onNavigateChapter} />
              </p>
            ))}
          </div>
        </section>
      );
    }

    case 'image_card': {
      const payload = block.payload as ImageCardBlockPayload;
      if (!payload.asset) {
        return null;
      }
      return (
        <PhotoCard
          asset={payload.asset}
          layout={payload.layout}
          onInspect={onInspectAsset}
        />
      );
    }

    case 'image_pair': {
      const payload = block.payload as ImagePairBlockPayload;
      return (
        <div className="photo-pair-grid">
          {payload.leftAsset && (
            <PhotoCard
              asset={payload.leftAsset}
              layout="portrait"
              onInspect={onInspectAsset}
            />
          )}
          {payload.rightAsset && (
            <PhotoCard
              asset={payload.rightAsset}
              layout="portrait"
              onInspect={onInspectAsset}
            />
          )}
        </div>
      );
    }

    case 'quote': {
      const payload = block.payload as QuoteBlockPayload;
      return (
        <blockquote className="quote-block">
          <p>“{payload.quote}”</p>
          <footer className="quote-author">
            — {payload.author}
            {payload.source ? `, ${payload.source}` : ''}
          </footer>
        </blockquote>
      );
    }

    case 'callout_tip': {
      const payload = block.payload as CalloutTipBlockPayload;
      return (
        <aside className="callout-box">
          <div className="callout-title">
            <span>✦</span>
            <span>{payload.title}</span>
          </div>
          <ul className="block-list">
            {payload.items.map((itemSegments, idx) => (
              <li key={idx}>
                <RichText segments={itemSegments} onNavigateChapter={onNavigateChapter} />
              </li>
            ))}
          </ul>
        </aside>
      );
    }

    case 'sony_a7iv_note': {
      if (!showSonyNotes) {
        return null;
      }
      const payload = block.payload as SonyA7IVNoteBlockPayload;
      return (
        <aside className="sony-card" aria-label="Nota técnica Sony Alpha 7 IV">
          <div className="sony-card-header">
            <span className="sony-badge">Sony α7 IV · Aplicación Práctica</span>
          </div>
          <h4>{payload.title}</h4>
          <p>{payload.summary}</p>
          <ul>
            {payload.bulletPoints.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
          {payload.cameraPath && (
            <div className="sony-menu-path">
              <strong>Ruta en cámara:</strong> {payload.cameraPath}
            </div>
          )}
          <a
            href={payload.manualUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sony-manual-link"
          >
            <span>📖 Consultar en {payload.manualLabel}</span>
            <span>↗</span>
          </a>
        </aside>
      );
    }

    default:
      return null;
  }
};
