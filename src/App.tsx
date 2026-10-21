import React, { useEffect, useMemo, useRef, useState } from 'react';
import type {
  ChapterDetail,
  ChapterSummary,
  ExifMetadata,
  HeadingBlockPayload,
  ModuleItem,
  ReaderSettings,
} from './core/types.ts';
import {
  DEFAULT_READER_SETTINGS,
  normalizeReaderSettings,
  resolveAssetUrl,
} from './core/exposure.ts';
import { BlockRenderer } from './components/BlockRenderer.tsx';
import { LightboxModal } from './components/LightboxModal.tsx';
import { SettingsMenu } from './components/SettingsMenu.tsx';

const SETTINGS_STORAGE_KEY = 'sony_a7iv_reader_settings_v1';
const COMPLETED_STORAGE_KEY = 'sony_a7iv_completed_slugs_v1';

function getCompletedOverrides(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(COMPLETED_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === 'object') {
      return parsed as Record<string, boolean>;
    }
    return {};
  } catch {
    return {};
  }
}

function saveCompletedOverride(slug: string, completed: boolean): void {
  try {
    const current = getCompletedOverrides();
    current[slug] = completed;
    localStorage.setItem(COMPLETED_STORAGE_KEY, JSON.stringify(current));
  } catch {
    // ignore storage errors
  }
}

export const App: React.FC = () => {
  const [modules, setModules] = useState<ModuleItem[]>([]);
  const [viewMode, setViewMode] = useState<'bookshelf' | 'reader'>('bookshelf');
  const [activeModuleId, setActiveModuleId] = useState<number>(1);
  const [activeChapterSlug, setActiveChapterSlug] = useState<string>('introduccion');
  const [chapterDetail, setChapterDetail] = useState<ChapterDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxAsset, setLightboxAsset] = useState<ExifMetadata | null>(null);
  const settingsContainerRef = useRef<HTMLDivElement | null>(null);

  // Close settings menu on click outside or Escape key
  useEffect(() => {
    if (!settingsOpen) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (
        settingsContainerRef.current &&
        target &&
        !settingsContainerRef.current.contains(target)
      ) {
        setSettingsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSettingsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [settingsOpen]);

  const [settings, setSettings] = useState<ReaderSettings>(() => {
    try {
      const saved = localStorage.getItem(SETTINGS_STORAGE_KEY);
      return saved ? normalizeReaderSettings(JSON.parse(saved)) : DEFAULT_READER_SETTINGS;
    } catch {
      return DEFAULT_READER_SETTINGS;
    }
  });

  // Apply theme & typography variables to document root
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', settings.theme);
    root.setAttribute('data-font', settings.fontFamily);
    root.setAttribute('data-size', settings.fontSize);
    root.setAttribute('data-spacing', settings.lineSpacing);
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch (err) {
      console.warn('Could not persist reader settings:', err);
    }
  }, [settings]);

  // Load modules list on mount (supports both local SQLite API and static GitHub Pages mirror)
  useEffect(() => {
    async function fetchModules() {
      try {
        let data: { modules: ModuleItem[] } | null = null;
        try {
          const res = await fetch('/api/modules');
          const contentType = res.headers.get('content-type') ?? '';
          if (res.ok && contentType.includes('application/json')) {
            data = (await res.json()) as { modules: ModuleItem[] };
          }
        } catch {
          // Local API unavailable (e.g., GitHub Pages); fall through to static mirror
        }

        if (!data) {
          const staticRes = await fetch(resolveAssetUrl('static-api/modules.json'));
          if (!staticRes.ok) {
            throw new Error(`HTTP ${staticRes.status}`);
          }
          data = (await staticRes.json()) as { modules: ModuleItem[] };
        }

        const overrides = getCompletedOverrides();
        const hydratedModules = data.modules.map((mod) => ({
          ...mod,
          chapters: mod.chapters.map((ch) => ({
            ...ch,
            isCompleted:
              typeof overrides[ch.slug] === 'boolean' ? overrides[ch.slug] : ch.isCompleted,
          })),
        }));

        setModules(hydratedModules);
        if (hydratedModules.length > 0) {
          setActiveModuleId(hydratedModules[0].id);
        }
      } catch (err) {
        setErrorMessage(`Error cargando módulos: ${String(err)}`);
      }
    }
    void fetchModules();
  }, []);

  // Load active chapter content (supports both local SQLite API and static GitHub Pages mirror)
  useEffect(() => {
    async function fetchChapter() {
      setLoading(true);
      setErrorMessage(null);
      try {
        let data: { chapter: ChapterDetail } | null = null;
        try {
          const res = await fetch(`/api/chapters/${activeChapterSlug}`);
          const contentType = res.headers.get('content-type') ?? '';
          if (res.ok && contentType.includes('application/json')) {
            data = (await res.json()) as { chapter: ChapterDetail };
          }
        } catch {
          // Local API unavailable; fall through to static mirror
        }

        if (!data) {
          const staticRes = await fetch(
            resolveAssetUrl(`static-api/chapters/${activeChapterSlug}.json`)
          );
          if (!staticRes.ok) {
            throw new Error(`No se pudo cargar el capítulo (${staticRes.status})`);
          }
          data = (await staticRes.json()) as { chapter: ChapterDetail };
        }

        const overrides = getCompletedOverrides();
        const hydratedChapter: ChapterDetail = {
          ...data.chapter,
          isCompleted:
            typeof overrides[data.chapter.slug] === 'boolean'
              ? overrides[data.chapter.slug]
              : data.chapter.isCompleted,
        };

        setChapterDetail(hydratedChapter);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err) {
        setErrorMessage(`Error al cargar el capítulo: ${String(err)}`);
      } finally {
        setLoading(false);
      }
    }
    void fetchChapter();
  }, [activeChapterSlug]);

  const activeModule = useMemo(
    () => modules.find((m) => m.id === activeModuleId) ?? modules[0],
    [modules, activeModuleId]
  );

  const filteredChapters = useMemo(() => {
    if (!activeModule) return [];
    const q = searchQuery.trim().toLowerCase();
    if (!q) return activeModule.chapters;
    return activeModule.chapters.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.subtitle.toLowerCase().includes(q) ||
        String(c.chapterNumber).includes(q)
    );
  }, [activeModule, searchQuery]);

  const progressStats = useMemo(() => {
    if (!activeModule) return { completed: 0, ingested: 0, total: 0, pct: 0 };
    const total = activeModule.chapters.length;
    const completed = activeModule.chapters.filter((c) => c.isCompleted).length;
    const ingested = activeModule.chapters.filter((c) => c.isIngested).length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, ingested, total, pct };
  }, [activeModule]);

  const tocHeadings = useMemo(() => {
    if (!chapterDetail) return [];
    return chapterDetail.blocks
      .filter((b) => b.blockType === 'heading')
      .map((b) => b.payload as HeadingBlockPayload);
  }, [chapterDetail]);

  const selectChapterWithTransition = (slug: string) => {
    const docWithVT = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };
    if (typeof docWithVT.startViewTransition === 'function') {
      docWithVT.startViewTransition(() => {
        setActiveChapterSlug(slug);
      });
    } else {
      setActiveChapterSlug(slug);
    }
  };

  const handleOpenModuleFromBookshelf = (mod: ModuleItem) => {
    if (!mod.isAvailable) return;
    const firstUncompleted = mod.chapters.find((c) => !c.isCompleted);
    const targetChapter = firstUncompleted ?? mod.chapters[0];
    const docWithVT = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };
    const applyState = () => {
      setActiveModuleId(mod.id);
      if (targetChapter) {
        setActiveChapterSlug(targetChapter.slug);
      }
      setViewMode('reader');
    };
    if (typeof docWithVT.startViewTransition === 'function') {
      docWithVT.startViewTransition(applyState);
    } else {
      applyState();
    }
  };

  const handleSelectModuleInSidebar = (mod: ModuleItem) => {
    if (!mod.isAvailable) return;
    setActiveModuleId(mod.id);
    if (mod.id !== activeModuleId && mod.chapters.length > 0) {
      const firstUncompleted = mod.chapters.find((c) => !c.isCompleted);
      const targetChapter = firstUncompleted ?? mod.chapters[0];
      selectChapterWithTransition(targetChapter.slug);
    }
  };

  const handleReturnToBookshelf = () => {
    const docWithVT = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };
    if (typeof docWithVT.startViewTransition === 'function') {
      docWithVT.startViewTransition(() => {
        setViewMode('bookshelf');
      });
    } else {
      setViewMode('bookshelf');
    }
  };

  const handleNavigateByChapterNumber = (chapterNumber: number) => {
    const found = activeModule?.chapters.find((c) => c.chapterNumber === chapterNumber);
    if (found) {
      selectChapterWithTransition(found.slug);
    }
  };

  const handleToggleCompleted = async (chapter: ChapterSummary) => {
    const nextState = !chapter.isCompleted;
    saveCompletedOverride(chapter.slug, nextState);

    setModules((prev) =>
      prev.map((mod) => ({
        ...mod,
        chapters: mod.chapters.map((c) =>
          c.slug === chapter.slug ? { ...c, isCompleted: nextState } : c
        ),
      }))
    );
    setChapterDetail((prev) =>
      prev && prev.slug === chapter.slug ? { ...prev, isCompleted: nextState } : prev
    );

    try {
      await fetch(`/api/chapters/${chapter.slug}/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: nextState }),
      });
    } catch {
      // Static environment (GitHub Pages): persisted via localStorage above
    }
  };

  const currentIndex =
    activeModule?.chapters.findIndex((c) => c.slug === activeChapterSlug) ?? -1;
  const prevChapter =
    currentIndex > 0 && activeModule ? activeModule.chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex >= 0 && activeModule && currentIndex < activeModule.chapters.length - 1
      ? activeModule.chapters[currentIndex + 1]
      : null;

  const isBookshelf = viewMode === 'bookshelf';

  return (
    <div
      className={`app-shell ${
        isBookshelf || !sidebarOpen ? 'sidebar-collapsed' : ''
      }`}
    >
      {/* Sidebar */}
      <aside className="sidebar" aria-label="Navegación de módulos y capítulos">
        <div
          className="sidebar-brand"
          style={{ cursor: 'pointer' }}
          onClick={handleReturnToBookshelf}
          title="Volver a la biblioteca de libros"
        >
          <div className="alpha-emblem" aria-hidden="true">
            α
          </div>
          <div className="brand-titles">
            <h1>Sony Alpha 7 IV</h1>
            <span>Academia Fotográfica Local</span>
          </div>
        </div>

        {/* Module Selector */}
        <div className="module-switcher">
          {modules.map((mod) => (
            <button
              key={mod.id}
              type="button"
              disabled={!mod.isAvailable}
              className={`module-pill ${mod.id === activeModuleId ? 'active' : ''}`}
              onClick={() => handleSelectModuleInSidebar(mod)}
            >
              <span>{mod.title}</span>
              <span className="module-badge">
                {mod.isAvailable ? `${mod.chapters.length} caps` : 'Pronto'}
              </span>
            </button>
          ))}
        </div>

        {/* Search Filter */}
        <div className="sidebar-search">
          <input
            type="search"
            placeholder="Filtrar capítulo por título o #..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Filtrar capítulos"
          />
        </div>

        {/* Progress Bar */}
        <div className="sidebar-progress">
          <div className="progress-meta">
            <span>Progreso de estudio</span>
            <span>
              {progressStats.completed}/{progressStats.total} ({progressStats.pct}%)
            </span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressStats.pct}%` }} />
          </div>
        </div>

        {/* Chapter List */}
        <nav className="chapter-list" aria-label="Índice de capítulos">
          {filteredChapters.map((ch) => {
            const isActive = ch.slug === activeChapterSlug;
            return (
              <button
                key={ch.id}
                type="button"
                className={`chapter-item ${isActive ? 'active' : ''} ${
                  ch.isCompleted ? 'completed' : ''
                } ${ch.isIngested ? '' : 'pending-ingest'}`}
                onClick={() => selectChapterWithTransition(ch.slug)}
              >
                <span className="chapter-num">
                  {ch.chapterNumber === 0 ? 'IN' : ch.chapterNumber}
                </span>
                <span className="chapter-info">
                  <span className="chapter-title">{ch.title}</span>
                  <span className="chapter-meta">
                    {ch.isIngested ? (
                      <>
                        <span className="status-dot" title="Contenido disponible" />
                        <span>{ch.estimatedReadMin} min</span>
                        <span>· págs. {ch.pdfPages}</span>
                      </>
                    ) : (
                      <span>Pendiente de volcar · págs. {ch.pdfPages}</span>
                    )}
                    {ch.isCompleted && <span>· ✓ Leído</span>}
                  </span>
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Stage */}
      <div className="main-stage">
        <header className="top-bar">
          <div className="top-bar-left">
            {isBookshelf ? (
              <div className="breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="alpha-emblem" style={{ width: '26px', height: '26px', fontSize: '0.88rem' }} aria-hidden="true">
                  α
                </span>
                <strong style={{ color: 'var(--text-primary)' }}>Sony Alpha 7 IV</strong>
                <span>·</span>
                <span>Biblioteca</span>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="icon-btn hamburger-btn"
                  onClick={() => setSidebarOpen((v) => !v)}
                  title={sidebarOpen ? 'Ocultar índice lateral' : 'Mostrar índice lateral'}
                  aria-label={sidebarOpen ? 'Ocultar índice lateral' : 'Mostrar índice lateral'}
                >
                  <span className="hamburger-bars" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={handleReturnToBookshelf}
                  title="Volver a la biblioteca de libros"
                >
                  <span>← Biblioteca</span>
                </button>
                <div className="breadcrumb">
                  <span>{activeModule?.title}</span>
                  {chapterDetail && (
                    <>
                      <span> / </span>
                      <strong>
                        {chapterDetail.chapterNumber === 0
                          ? 'Introducción'
                          : `Capítulo ${chapterDetail.chapterNumber}`}
                      </strong>
                    </>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="top-bar-actions">
            <a
              href="https://helpguide.sony.net/ilc/2110/v1/es/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              title="Abrir Guía de Ayuda Oficial Sony Alpha 7 IV"
            >
              <span>📷</span>
              <span>Manual α7 IV</span>
            </a>

            <div ref={settingsContainerRef} style={{ position: 'relative' }}>
              <button
                type="button"
                className={`icon-btn ${settingsOpen ? 'active' : ''}`}
                onClick={() => setSettingsOpen((v) => !v)}
                aria-expanded={settingsOpen}
              >
                <span>Aa</span>
                <span>Apariencia</span>
              </button>

              {settingsOpen && (
                <SettingsMenu settings={settings} onChange={setSettings} />
              )}
            </div>
          </div>
        </header>

        {isBookshelf ? (
          <main className="bookshelf-screen" aria-label="Biblioteca de libros">
            {errorMessage && (
              <div className="callout-box" role="alert">
                {errorMessage}
              </div>
            )}
            <div className="bookshelf-grid">
              {modules.map((mod) => {
                const total = mod.chapters.length;
                const completed = mod.chapters.filter((c) => c.isCompleted).length;
                const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

                return (
                  <article key={mod.id} className="book-tile">
                    <button
                      type="button"
                      className="book-cover-btn"
                      onClick={() => handleOpenModuleFromBookshelf(mod)}
                      aria-label={`Abrir ${mod.title}: ${mod.subtitle}`}
                    >
                      <img
                        src={resolveAssetUrl(mod.coverImage)}
                        alt={mod.subtitle}
                        loading="eager"
                      />
                    </button>
                    <div className="book-meta-footer">
                      <span>{pct}%</span>
                      <button
                        type="button"
                        className="book-dots-btn"
                        onClick={() => handleOpenModuleFromBookshelf(mod)}
                        title={`Abrir ${mod.title}`}
                        aria-label={`Opciones de ${mod.title}`}
                      >
                        •••
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </main>
        ) : (
          <div className="reader-workspace">
          <main className="reader-article">
            {errorMessage && (
              <div className="callout-box" role="alert">
                {errorMessage}
              </div>
            )}

            {!loading && chapterDetail && (
              <>
                <header className="chapter-hero">
                  <div className="chapter-kicker">
                    <span>
                      {chapterDetail.chapterNumber === 0
                        ? 'INTRODUCCIÓN'
                        : `CAPÍTULO ${chapterDetail.chapterNumber}`}
                    </span>
                    <span>·</span>
                    <span>LECTURA {chapterDetail.estimatedReadMin} MIN</span>
                    <span>·</span>
                    <span>PDF PÁGS. {chapterDetail.pdfPages}</span>
                  </div>
                  <h1>{chapterDetail.title}</h1>
                  <p className="chapter-subtitle">{chapterDetail.subtitle}</p>
                </header>

                {chapterDetail.isIngested ? (
                  chapterDetail.blocks.map((block) => (
                    <BlockRenderer
                      key={block.id}
                      block={block}
                      showSonyNotes={settings.showSonyNotes}
                      onInspectAsset={setLightboxAsset}
                      onNavigateChapter={handleNavigateByChapterNumber}
                    />
                  ))
                ) : (
                  <div className="sony-card">
                    <div className="sony-card-header">
                      <span className="sony-badge">Próximo Capítulo en Cola</span>
                    </div>
                    <h4>
                      Capítulo {chapterDetail.chapterNumber}: {chapterDetail.title}
                    </h4>
                    <p>
                      Este capítulo ya está indexado en la estructura de la base de datos SQLite
                      (páginas {chapterDetail.pdfPages} del libro) y listo para su extracción de
                      texto e imágenes en las siguientes iteraciones.
                    </p>
                  </div>
                )}

                <footer className="chapter-footer">
                  <div className="complete-banner">
                    <div>
                      <strong>Estado del capítulo</strong>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                        Marca este capítulo como completado cuando domines sus conceptos en tu Sony
                        Alpha 7 IV.
                      </p>
                    </div>
                    <button
                      type="button"
                      className={`icon-btn ${chapterDetail.isCompleted ? 'active' : ''}`}
                      onClick={() => void handleToggleCompleted(chapterDetail)}
                    >
                      <span>{chapterDetail.isCompleted ? '✓ Completado' : 'Marcar como leído'}</span>
                    </button>
                  </div>

                  <div className="nav-buttons">
                    <button
                      type="button"
                      className="nav-card-btn prev"
                      disabled={!prevChapter}
                      onClick={() =>
                        prevChapter && selectChapterWithTransition(prevChapter.slug)
                      }
                    >
                      <span className="nav-dir">← Capítulo Anterior</span>
                      <span className="nav-title">
                        {prevChapter ? prevChapter.title : 'Inicio del módulo'}
                      </span>
                    </button>

                    <button
                      type="button"
                      className="nav-card-btn next"
                      disabled={!nextChapter}
                      onClick={() =>
                        nextChapter && selectChapterWithTransition(nextChapter.slug)
                      }
                    >
                      <span className="nav-dir">Siguiente Capítulo →</span>
                      <span className="nav-title">
                        {nextChapter ? nextChapter.title : 'Fin del módulo'}
                      </span>
                    </button>
                  </div>
                </footer>
              </>
            )}
          </main>

          {/* Right Table of Contents */}
          <aside className="toc-aside" aria-label="Secciones de este capítulo">
            <div className="toc-title">En este capítulo</div>
            {tocHeadings.length > 0 ? (
              <ul className="toc-list">
                {tocHeadings.map((h) => (
                  <li
                    key={h.anchor}
                    style={{ paddingLeft: h.level === 3 ? '0.65rem' : '0' }}
                  >
                    <button
                      type="button"
                      className="toc-link"
                      onClick={() => {
                        const el = document.getElementById(h.anchor);
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {h.text}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Sin subsecciones indexadas.
              </p>
            )}
          </aside>
        </div>
        )}
      </div>

      {/* Lightbox Modal for high-resolution image + EXIF inspection */}
      {lightboxAsset && (
        <LightboxModal asset={lightboxAsset} onClose={() => setLightboxAsset(null)} />
      )}
    </div>
  );
};
