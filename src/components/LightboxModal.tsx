import React, { useEffect, useRef, useState } from 'react';
import type { ExifMetadata } from '../core/types.ts';
import { buildExifBadges, resolveAssetUrl } from '../core/exposure.ts';

interface LightboxModalProps {
  asset: ExifMetadata;
  onClose: () => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 4.5;
const ZOOM_STEP = 0.4;

export const LightboxModal: React.FC<LightboxModalProps> = ({ asset, onClose }) => {
  const [scale, setScale] = useState<number>(1);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number; origX: number; origY: number }>({
    x: 0,
    y: 0,
    origX: 0,
    origY: 0,
  });
  const pinchStartDistRef = useRef<number | null>(null);
  const pinchStartScaleRef = useRef<number>(1);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const clampScale = (next: number) =>
    Math.min(MAX_SCALE, Math.max(MIN_SCALE, Math.round(next * 100) / 100));

  const updateZoom = (nextScale: number) => {
    const clamped = clampScale(nextScale);
    setScale(clamped);
    if (clamped <= 1) {
      setOffset({ x: 0, y: 0 });
    }
  };

  // Close on Escape or zoom with +/- keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        setScale((s) => clampScale(s + ZOOM_STEP));
      } else if (e.key === '-') {
        e.preventDefault();
        setScale((s) => {
          const next = clampScale(s - ZOOM_STEP);
          if (next <= 1) setOffset({ x: 0, y: 0 });
          return next;
        });
      } else if (e.key === '0') {
        e.preventDefault();
        setScale(1);
        setOffset({ x: 0, y: 0 });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Native non-passive wheel listener so macOS trackpad pinch (ctrlKey) & scroll zoom smoothly without zooming the browser page
  useEffect(() => {
    const stageEl = stageRef.current;
    if (!stageEl) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      // Trackpad pinch on macOS sets e.ctrlKey = true with fine deltaY; two-finger scroll also works for zooming
      const sensitivity = e.ctrlKey ? 0.015 : 0.0035;
      const delta = -e.deltaY * sensitivity;

      setScale((prev) => {
        const next = clampScale(prev + delta);
        if (next <= 1) {
          setOffset({ x: 0, y: 0 });
        }
        return next;
      });
    };

    stageEl.addEventListener('wheel', handleWheel, { passive: false });
    return () => stageEl.removeEventListener('wheel', handleWheel);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scale <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      origX: offset.x,
      origY: offset.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setOffset({
      x: dragStartRef.current.origX + dx,
      y: dragStartRef.current.origY + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchStartDistRef.current = Math.hypot(dx, dy);
      pinchStartScaleRef.current = scale;
      setIsDragging(false);
    } else if (e.touches.length === 1 && scale > 1) {
      setIsDragging(true);
      dragStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        origX: offset.x,
        origY: offset.y,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2 && pinchStartDistRef.current !== null) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const ratio = dist / Math.max(1, pinchStartDistRef.current);
      const next = clampScale(pinchStartScaleRef.current * ratio);
      setScale(next);
      if (next <= 1) {
        setOffset({ x: 0, y: 0 });
      }
    } else if (e.touches.length === 1 && isDragging) {
      const dx = e.touches[0].clientX - dragStartRef.current.x;
      const dy = e.touches[0].clientY - dragStartRef.current.y;
      setOffset({
        x: dragStartRef.current.origX + dx,
        y: dragStartRef.current.origY + dy,
      });
    }
  };

  const handleTouchEnd = () => {
    pinchStartDistRef.current = null;
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      updateZoom(1);
    } else {
      updateZoom(2.2);
    }
  };

  const badges = buildExifBadges(asset);

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={asset.altText}
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Top Floating Zoom Toolbar */}
        <div className="lightbox-toolbar">
          <div className="lightbox-zoom-controls">
            <button
              type="button"
              className="zoom-ctrl-btn"
              onClick={() => updateZoom(scale - ZOOM_STEP)}
              disabled={scale <= MIN_SCALE}
              title="Reducir zoom (-)"
              aria-label="Reducir zoom"
            >
              −
            </button>
            <span className="zoom-percentage">{Math.round(scale * 100)}%</span>
            <button
              type="button"
              className="zoom-ctrl-btn"
              onClick={() => updateZoom(scale + ZOOM_STEP)}
              disabled={scale >= MAX_SCALE}
              title="Aumentar zoom (+)"
              aria-label="Aumentar zoom"
            >
              +
            </button>
            <button
              type="button"
              className="zoom-reset-btn"
              onClick={() => updateZoom(1)}
              disabled={scale === 1 && offset.x === 0 && offset.y === 0}
              title="Restablecer tamaño original (0)"
            >
              100%
            </button>
            <button
              type="button"
              className="zoom-reset-btn"
              onClick={() => updateZoom(2)}
              title="Ampliar al 200%"
            >
              200%
            </button>
          </div>

          <span className="lightbox-gesture-hint">
            Pellizca o gira en el trackpad · Doble clic para 220% · Arrastra para mover
          </span>

          <button type="button" className="icon-btn" onClick={onClose} title="Cerrar (Esc)">
            Cerrar ✕
          </button>
        </div>

        {/* Interactive Zoom & Pan Canvas */}
        <div
          ref={stageRef}
          className={`lightbox-img-wrap ${scale > 1 ? 'zoomed' : ''} ${
            isDragging ? 'dragging' : ''
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onDoubleClick={handleDoubleClick}
        >
          <img
            src={resolveAssetUrl(asset.filePath)}
            alt={asset.altText}
            draggable={false}
            style={{
              transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})`,
            }}
          />
        </div>

        {/* Bottom EXIF & Caption Bar */}
        <div className="lightbox-bar">
          <div>
            {badges.length > 0 && (
              <div className="exif-strip" style={{ border: 'none', padding: 0 }}>
                {badges.map((b) => (
                  <span key={b.label} className={`exif-pill ${b.category}`}>
                    <span className="exif-pill-label">{b.label}</span>
                    <strong>{b.value}</strong>
                  </span>
                ))}
              </div>
            )}
            {asset.caption && (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 6 }}>
                {asset.caption}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
