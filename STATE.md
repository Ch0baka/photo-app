# Current Working State (Handoff)

## 1. Resumen Ejecutivo del Proyecto
- **Nombre:** Sony Alpha 7 IV — Plataforma de Aprendizaje Fotográfico
- **Módulo 1:** *La guía definitiva para exponer correctamente tus fotos ¡Siempre!* (PhotoPills / Toni Cladera) — **100% completado e integrado** (Introducción + 27 capítulos, 465 páginas, 240 imágenes).
- **Módulo 2:** *La guía definitiva sobre la profundidad de campo* (PhotoPills / Toni Cladera) — **100% completado e integrado** (Introducción + 15 capítulos, 141 páginas, 95 imágenes).
- **Módulo 3:** *Fotografía de Vía Láctea: la guía definitiva (2026)* (PhotoPills / Toni Cladera) — **100% completado e integrado** (Introducción + 12 capítulos, 132 páginas, 73 imágenes).
- **Módulo 4 (Privado Local):** *Guía Completa Sony α7 IV* (Mark Galer — eBook Patreon de 679 páginas) — **100% completado e integrado solo localmente** (Introducción + 15 capítulos, 348 diapositivas JPEG, tablas web nativas en español y enlaces directos a videotutoriales; excluido estrictamente de GitHub y GitHub Pages).
- **Módulo Reportes (Público / GitHub):** *Módulo Reportes: Investigaciones Fotográficas* (`reportes-investigaciones`, `orderIndex: 5`) — **Extensible por archivos Markdown** en `src/data/reports/*.md` (actualmente Cap. 1: *Ecosistema Mirrorless Sony Alpha: APS-C, Full-Frame y Cinema Line*); cada nuevo reporte añadido a `src/data/reports/` se ingiere automáticamente como un capítulo y se sincroniza con GitHub / GitHub Pages.
- **Dashboard de Inicio (Estilo Apple Books):** Vista de biblioteca minimalista donde se muestran las portadas en alta resolución de los módulos disponibles (4 públicos en GitHub + 1 privado local) con efecto de lomo físico, el porcentaje de avance (`XX%`) abajo a la izquierda y el botón `•••` a la derecha.
- **Estado General:** Aplicación web local interactiva y funcional con arquitectura *Zero-Bloat* (React 19 + TypeScript + Vite + SQLite3 nativo con `node:sqlite`), con persistencia local y bucle de verificación en verde (`tsc`, `lint`, `seed`).

---

## 2. Completado Recientemente (Hitos Cumplidos)

### A. Harness Operativo y Guardrails Cognitivos
- [x] Configuración de [GEMINI.md](file:///Users/rolando/Gemini_projects/app_fotografia_bases/GEMINI.md) como mapa maestro arquitectónico y operativo del proyecto.
- [x] Configuración de [.agents/rules/standards.md](file:///Users/rolando/Gemini_projects/app_fotografia_bases/.agents/rules/standards.md) (`trigger: always_on`) con principios de simplicidad, tipado estricto (cero `any`), diseño minimalista y seguridad local.
- [x] Gestión de runtime local en macOS Apple Silicon (Node.js v24 con `node:sqlite` nativo y herramientas locales `npm`/`pnpm`).

### B. Modelo y Base de Datos Local SQLite3 (`./data/app.db`)
- [x] Esquema relacional estructurado en [src/data/schema.sql](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/data/schema.sql):
  - `modules`: Soporte multi-libro con columna `cover_image` para las portadas de la biblioteca (Módulo 1 y Módulo 2 activos).
  - `chapters`: 44 capítulos totales (28 en Módulo 1 + 16 en Módulo 2) con tiempo estimado de lectura, páginas de PDF y control de progreso (`is_completed`).
  - `media_assets`: 335 activos gráficos totales (240 en Módulo 1 + 95 en Módulo 2) con metadatos EXIF enriquecidos (`camera_model`, `lens_focal`, `aperture`, `shutter_speed`, `iso`, `kelvin`, `extra_notes`).
  - `content_blocks`: Bloques modulares polimórficos (`heading`, `paragraph`, `list`, `qa_item`, `image_card`, `image_pair`, `quote`, `callout_tip`, `sony_a7iv_note`).
  - `user_notes`: Estructura para anotaciones personales del usuario.
- [x] Repositorio tipado sin dependencias externas en [src/data/repository.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/data/repository.ts).
- [x] Script de ingesta determinista [src/data/seed.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/data/seed.ts) que preserva el estado de lectura completada entre ejecuciones.

### C. Ingesta Total del Módulo 1 (*Exposición*, 465 páginas / 28 Capítulos / 240 Imágenes)
- [x] Extracción nativa de **240 activos gráficos** hacia `public/images/book-1/`.
- [x] Ingesta estructurada en [src/data/book1-content.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/data/book1-content.ts), [src/data/book1-ch3-to-5.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/data/book1-ch3-to-5.ts), [src/data/book1-ch6-to-9.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/data/book1-ch6-to-9.ts) y [src/data/book1-ch10-to-27.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/data/book1-ch10-to-27.ts).
- [x] **28 Tarjetas Prácticas Sony Alpha 7 IV** dedicadas a exposición, ISO Dual Nativo (100/800), Cebras 107+, medición y modos PSAM.

### D. Ingesta Total del Módulo 2 (*Profundidad de Campo*, 141 páginas / 16 Capítulos / 95 Imágenes)
- [x] Extracción nativa de **95 activos gráficos** (fotografías y esquemas ópticos de profundidad de campo, círculo de confusión e hiperfocal) desde `photopills-dof-es.pdf` hacia `public/images/book-2/` (`intro` + `cap-1` a `cap-15`).
- [x] Generación de portadas en alta resolución (`1224x1584`) desde la página 1 de cada PDF en `public/images/covers/book-1-cover.png`, `public/images/covers/book-2-cover.png` y `public/images/covers/book-3-cover.png`.
- [x] Ingesta estructurada en [src/data/book2-content.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/data/book2-content.ts) utilizando el parser por tamaño tipográfico real (`NSFont.pointSize`) para garantizar la continuidad perfecta de títulos multi-línea.
- [x] **16 Tarjetas Prácticas Sony Alpha 7 IV** dedicadas a profundidad de campo:
  - Mapa de Enfoque (*Focus Map* exclusivo de la α7 IV), *Focus Magnifier* + *Peaking*, Círculo de Confusión en el sensor de 33 MP ($0.029\text{ mm}$ estándar vs. $0.015\text{ mm}$ exigente), límite de difracción en $f/8 - f/11$, *Breathing Compensation*, teleconvertidores `SEL14TC`/`SEL20TC`, recorte Super 35mm (APS-C 15 MP), botón personalizado de Previsualización de Apertura (*Shot. Result Preview*) y comportamiento del bokeh con obturador electrónico de cortinilla delantera (*e-Front Curtain*).

### E. Ingesta Total del Módulo 3 (*Fotografía de Vía Láctea*, 132 páginas / 13 Capítulos / 73 Imágenes)
- [x] Extracción nativa de **73 activos gráficos** (astrofotografías de paisaje, tablas del calendario galáctico 2026, mapas de contaminación lumínica y esquemas de planificación 2D/RA) desde `photopills-milky-es.pdf` hacia `public/images/book-3/` (`intro` + `cap-1` a `cap-12`).
- [x] Ingesta estructurada en [src/data/book3-content.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/data/book3-content.ts) (765 bloques de contenido + metadatos EXIF nocturnos).
- [x] **13 Tarjetas Prácticas Sony Alpha 7 IV** dedicadas a astrofotografía de Vía Láctea:
  - Encuadre nocturno en vivo con **Atención al brillo (*Bright Monitoring*)**, segundo escalón nativo **ISO 800 / 3200** del sensor Exmor R BSI de 33 MP, cálculo de la **Regla NPF** para el *pixel pitch* de $5.12\,\mu\text{m}$, enfoque manual a estrellas con *Focus Magnifier* (`5.9x` / `11.7x`), desactivación de `SteadyShot` y `RR Exp. Larga` en panorámicas y *stacking*, intervalómetro integrado y alimentación continua por USB-C Power Delivery.

### F. Ingesta Privada del Módulo 4 (*Guía Completa Sony α7 IV — Mark Galer*, Solo Local)
- [x] **Regla de Privacidad y Aislamiento Total de GitHub:**
  - Creada la regla permanente [.agents/rules/private-content.md](file:///Users/rolando/Gemini_projects/app_fotografia_bases/.agents/rules/private-content.md) (`trigger: always_on`) que prohíbe subir o exportar archivos del Módulo 4 a GitHub o GitHub Pages.
  - Excluidos en [.gitignore](file:///Users/rolando/Gemini_projects/app_fotografia_bases/.gitignore) y protegidos mediante hook local [.git/hooks/pre-commit](file:///Users/rolando/Gemini_projects/app_fotografia_bases/.git/hooks/pre-commit): `data/app.db` (eliminado del índice Git con `git rm --cached`), `data/private/`, `src/data/private-*`, `public/images/book-4/`, `public/images/covers/book-4-cover.*` y `*.pdf`.
  - Actualizado [vite.config.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/vite.config.ts) para filtrar módulos privados (`slug.startsWith('libro-4-')`) y purgar capítulos residuales al generar `public/static-api/`.
  - Actualizado [src/data/seed.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/data/seed.ts) para cargar `data/private/book4.json` de forma condicional solo si existe en disco local, permitiendo que el CI público ejecute `npm run seed` sin errores.
- [x] **Nuevo Bloque Nativo `'table'`:** Añadida la interfaz `TableBlockPayload` en [src/core/types.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/core/types.ts), el renderizador en [src/components/BlockRenderer.tsx](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/components/BlockRenderer.tsx) y estilos responsivos `.table-block-wrapper` / `.content-table` en [src/styles/app.css](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/styles/app.css) para reemplazar tablas de datos del PDF por tablas web nativas.
- [x] **Contenido Adaptado y Activos Gráficos (348 JPEGs + Portada Vertical):**
  - Exportadas **348 diapositivas técnicas clave** (`1440x810` JPEG) en `public/images/book-4/cap-1..15/` (conservando tablas con iconos Sony, configuraciones de cámara, teoría y ejemplos con EXIF; omitiendo tarjetas repetitivas de YouTube y collages promocionales) más portada vertical (`1224x1584`) en `public/images/covers/book-4-cover.jpg`.
  - Estructurados **16 capítulos** en español (`0 = Introducción` + `1..15`) en `data/private/book4.json` con nomenclatura oficial de menús Sony α7 IV en español, tablas comparativas de vídeo 4K/S&Q/objetivos/hardware, enlaces clicables a videotutoriales de YouTube y **cero** bloques redundantes `sony_a7iv_note`.

### G. Interfaz Web Moderna, Dashboard Estilo Apple Books y Responsividad Mobile (UI/UX)
- [x] **Dashboard de Inicio Estilo Apple Books ([src/App.tsx](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/App.tsx) y [src/styles/app.css](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/styles/app.css)):**
  - Al iniciar, muestra una cuadrícula limpia centrada con las portadas de los libros, relieve de lomo tipo libro físico y pie minimalista con el porcentaje de progreso (`0%`..`100%`) a la izquierda y el icono `•••` a la derecha.
  - Al hacer clic en cualquier portada, abre directamente ese módulo en el lector (posicionándose en el primer capítulo pendiente de leer) con transición suave (`startViewTransition`).
  - Botón `← Biblioteca` en la barra superior del lector y clic en el emblema del sidebar para volver al dashboard de portadas en cualquier momento.
- [x] **Adaptación Completa a Dispositivos Móviles:**
  - Sidebar transformado en un *Drawer* táctil deslizable (`100dvh`) con cierre automático al elegir capítulo o tocar el fondo oscurecido (`sidebar-backdrop`).
  - Menú de Apariencia (`Aa Apariencia`) responsivo para pantallas estrechas y visor [LightboxModal.tsx](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/components/LightboxModal.tsx) con soporte de gestos táctiles (*pinch-to-zoom* con 2 dedos y arrastre con 1 dedo).
- [x] **Selector de Módulos Inteligente y Plegable en Sidebar ([src/App.tsx](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/App.tsx) y [src/styles/app.css](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/styles/app.css)):**
  - Lista única sin repetición de cabecera: cuando está plegado (por defecto, persistido en `localStorage`) permanece visible únicamente el módulo activo con chevron rotatorio y su badge en una línea (`white-space: nowrap`); al pulsar sobre él se despliegan los módulos inactivos con `interpolate-size: allow-keywords` (`prefers-reduced-motion`), replegándose automáticamente al cambiar de libro o volver a pulsar el activo.
- [x] **Sub-índice «En este capítulo» Integrado y Plegable en Sidebar ([src/App.tsx](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/App.tsx) y [src/styles/app.css](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/styles/app.css)):**
  - Trasladado desde la columna derecha (`.toc-aside`, eliminada para centrar la lectura en columna única) hacia un `<details className="chapter-subtoc">` anidado bajo el capítulo activo en `.chapter-list`.
  - Desplegado por defecto (persistido en `localStorage`) con navegación directa por anclas y cierre automático del *drawer* en móvil.

---

## 3. Auditoría de Seguridad y Mitigación Familia «2Shell» (Octubre 2026)

Se realizó la actualización integral del runtime local (**Node.js `v24.22.1`**), del pipeline de GitHub Actions ([.github/workflows/deploy.yml](file:///Users/rolando/Gemini_projects/app_fotografia_bases/.github/workflows/deploy.yml)), de las dependencias en [package.json](file:///Users/rolando/Gemini_projects/app_fotografia_bases/package.json) (`0 vulnerabilities` en `npm audit`) y del middleware local en [vite.config.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/vite.config.ts).

### Resumen Rápido de Impacto (Post-Actualización)

| CVE / Aviso | Nombre / Componente | ¿Afecta a GitHub Pages (Producción)? | ¿Afecta a nuestro Código / App? | Estado del Runtime Local y CI (`Node v24.22.1`) |
| :--- | :--- | :--- | :--- | :--- |
| **`CVE-2026-111497`** | **Node2Shell** — Desbordamiento en decodificador nativo **Brotli (`zlib`)** de Node.js | **No** (GitHub Pages sirve HTML/JS/JSON estático; no corre Node en producción). | **No** (el middleware en `vite.config.ts` no descomprime Brotli y ahora rechaza explícitamente `Content-Encoding` comprimido con HTTP `415`). | **Mitigado y Parcheado:** Runtime local y GitHub Actions actualizados a **Node `v24.22.1`**. |
| **`CVE-2026-105482`** | Truncamiento por byte nulo (`\0`) en `node:dns` (`c-ares`) | **No** | **No** (no se utiliza `dns.resolve*()` ni `dns.reverse()`). | **Mitigado y Parcheado:** Runtime local y CI en **Node `v24.22.1`**. |
| **`CVE-2026-105483`** y **`CVE-2026-106069`** | Bypass de validación de IP en `tls.checkServerIdentity()` (dígitos Unicode fullwidth / octales en macOS) | **No** | **No** (el servidor local no realiza conexiones TLS salientes hacia hosts dinámicos). | **Mitigado y Parcheado:** Runtime local y CI en **Node `v24.22.1`**. |
| **`CVE-2026-109618`** y **`CVE-2026-109619`** | **PHP2Shell** — Corrupción OOM y estado global en el motor de **PHP** | **No** | **No** (exclusivo de PHP `8.2–8.5`; el proyecto es 100% TypeScript/React/Node). | **No aplica (Impacto Cero).** |
| **`CVE-2025-55182`** | **React2Shell** — Deserialización insegura en React Server Components (RSC / Flight) | **No** | **No** (SPA estática sin RSC; además `react` y `react-dom` están fijados en **`^19.3.1`**). | **Parcheado (`react@19.3.1`).** |
| **`GHSA-5gmw-xhrv-c9v3`** y **`GHSA-85c8-ppgw-ccpr`** | Prototipo contaminado a RCE en `tinypool` / `vitest` (dependencia de desarrollo) | **No** | **No** (solo devDependency de test). | **Parcheado:** Actualizado a `vitest@^5.0.5` (`npm audit` = **0 vulnerabilidades**). |

---

## 4. Estado Actual de la Base de Código

| Componente / Archivo | Rol en el Proyecto | Estado |
| :--- | :--- | :--- |
| `src/main.tsx` & `src/App.tsx` | Dashboard estilo Apple Books + Lector de capítulos y navegación | Producción V2 Estable |
| `src/components/BlockRenderer.tsx` | Renderizador dinámico de los 10 tipos de bloques de contenido (incluye `'table'`) | Producción V2 Estable |
| `src/components/PhotoCard.tsx` | Componente de foto con píldoras EXIF y texto enriquecido | Producción V2 Estable |
| `src/components/LightboxModal.tsx` | Visor modal con zoom por trackpad, botones de escala y arrastre | Producción V2 Estable |
| `src/components/SettingsMenu.tsx` | Menú de preferencias (8 fuentes, 8 acentos de color, modos, tamaño, espaciado) | Producción V2 Estable |
| `src/data/book1-content.ts` (+3) | Contenido íntegro del Módulo 1 (Exposición, 28 caps, 240 imgs) | Producción V3 Estable |
| `src/data/book2-content.ts` | Contenido íntegro del Módulo 2 (Profundidad de Campo, 16 caps, 95 imgs) | Producción V3 Estable |
| `src/data/book3-content.ts` | Contenido íntegro del Módulo 3 (Vía Láctea, 13 caps, 73 imgs) | Producción V3 Estable |
| `src/data/markdownReports.ts` & `reports-content.ts` | Parser Markdown puro y cargador incremental del módulo público Reportes | Producción V5 Estable |
| `src/data/reports/01-camaras-sony-alpha-mirrorless.md` | Cap. 1 de Reportes: mapa imparcial Sony Alpha APS-C, Full-Frame y FX (2026) | Producción V5 Estable |
| `data/private/book4.json` *(ignorado)* | Contenido privado local del Módulo 4 (Mark Galer, 16 caps, 348 imgs, nunca en Git) | Producción Privada Local |
| `src/data/schema.sql` & `repository.ts` | Esquema relacional DDL y consultas con `node:sqlite` | Producción V3 Estable |
| `src/data/seed.ts` | Ingesta de módulos públicos (1, 2, 3 y Reportes) + carga condicional de Módulo 4 local | Producción V5 Estable |
| `data/app.db` *(ignorado)* | Base de datos SQLite3 poblada localmente con 5 módulos (74 capítulos, 756 imgs) | Poblada y Verificada |

---

## 5. Guía Técnica de Replicación: Menú de Apariencia (`SettingsMenu` / `Aa Apariencia`)

Esta sección documenta de forma autocontenida cómo está construido el sistema de apariencia y lectura (`Aa Apariencia`) bajo una arquitectura **Zero-Bloat** (sin librerías de UI externas, sin Context API innecesario y sin re-renderizados costosos del árbol de lectura). Puedes copiar o referenciar esta especificación directamente en cualquier otro proyecto React + TypeScript + CSS moderno para replicar exactamente el mismo comportamiento.

### 5.1. Arquitectura de 5 Capas
El sistema desacopla el **estado de preferencias** de la **aplicación visual de estilos** mediante atributos `data-*` en la raíz del documento (`<html>`) y variables CSS nativas (`CSS Custom Properties`):

1. **Carga Tipográfica (`index.html`):** Importa las fuentes web desde Google Fonts (`Inter`, `Plus Jakarta Sans`, `DM Sans` como respaldo de Antigravity, `Lora`, `Merriweather`, `Literata` y `JetBrains Mono`), combinadas con la fuente nativa de sistema macOS (`SF Pro Text` / `-apple-system`).
2. **Modelo Tipado y Normalización Defensiva (`src/core/types.ts` + `src/core/exposure.ts`):** Define los tipos estrictos (incluyendo 3 modos base, 8 colores de acento y 8 familias tipográficas) y valida cualquier JSON leído desde `localStorage` contra listas blancas (evitando que datos corruptos o versiones antiguas rompan la UI).
3. **Sincronización DOM + Persistencia + *Light-Dismiss* (`src/App.tsx`):** Dos hooks `useEffect` sincronizan el estado con `document.documentElement` (`data-theme`, `data-accent`, `data-font`, `data-size`, `data-spacing`) + `localStorage`, y cierran el popover al hacer clic fuera (`mousedown` / `touchstart`) o presionar `Escape`.
4. **Componente Controlado de UI (`src/components/SettingsMenu.tsx`):** Renderiza controles segmentados (`segmented-control`) para Tema, Tamaño e Interlineado, una paleta de 8 círculos de color (`accent-grid-control`) manteniendo **Sony Alpha (`#ea580c`)** por defecto, una cuadrícula `2×4` (`font-grid-control`) donde cada botón previsualiza su propia fuente en vivo, y un switch opcional.
5. **Sistema de Tokens CSS y Popover Responsivo (`src/styles/app.css`):** Define variables en `:root` y las sobreescribe dinámicamente mediante selectores `[data-theme]`, `[data-accent]`, `[data-font]`, `[data-size]` y `[data-spacing]`. En escritorio se muestra como popover flotante (`360px`) y en móvil (`<= 860px`) como panel fijo adaptado al viewport.

---

### 5.2. Paso 1: Fuentes en `index.html`
Incluir en el `<head>` de [index.html](file:///Users/rolando/Gemini_projects/app_fotografia_bases/index.html#L7-L12):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;0,7..72,600;1,7..72,400&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

---

### 5.3. Paso 2: Tipos y Normalización Defensiva (`types.ts` y `exposure.ts`)
Definición en [src/core/types.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/core/types.ts#L140-L169) y validador en [src/core/exposure.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/core/exposure.ts#L1-L130):

```ts
// 1. Tipos estrictos (types.ts)
export type ThemeMode = 'dark' | 'light' | 'sepia';

export type AccentColorOption =
  | 'sony'
  | 'blue'
  | 'emerald'
  | 'violet'
  | 'rose'
  | 'amber'
  | 'cyan'
  | 'slate';

export type FontFamilyOption =
  | 'sans'
  | 'serif'
  | 'mono'
  | 'jakarta'
  | 'merriweather'
  | 'literata'
  | 'macos'
  | 'antigravity';

export type FontSizeScale = 'sm' | 'md' | 'lg' | 'xl';

export interface ReaderSettings {
  theme: ThemeMode;
  accentColor: AccentColorOption;
  fontFamily: FontFamilyOption;
  fontSize: FontSizeScale;
  lineSpacing: 'compact' | 'normal' | 'relaxed';
  showSonyNotes: boolean;
}

// 2. Valores por defecto y normalizador seguro (exposure.ts)
export const DEFAULT_READER_SETTINGS: ReaderSettings = {
  theme: 'dark',
  accentColor: 'sony',
  fontFamily: 'sans',
  fontSize: 'md',
  lineSpacing: 'normal',
  showSonyNotes: true,
};
```

La función `normalizeReaderSettings(input)` valida `theme`, `accentColor` (8 opciones), `fontFamily` (8 opciones), `fontSize`, `lineSpacing` y `showSonyNotes` contra listas blancas y retorna los valores por defecto ante cualquier campo corrupto o faltante.

---

### 5.4. Paso 3: Componente `SettingsMenu.tsx`
Implementación en [src/components/SettingsMenu.tsx](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/components/SettingsMenu.tsx):

```tsx
import type {
  FontFamilyOption,
  FontSizeScale,
  ReaderSettings,
  ThemeMode,
} from '../core/types';

interface SettingsMenuProps {
  settings: ReaderSettings;
  onChange: (updated: ReaderSettings) => void;
}

const THEME_OPTIONS: { id: ThemeMode; label: string }[] = [
  { id: 'dark', label: 'Oscuro' },
  { id: 'light', label: 'Claro' },
  { id: 'sepia', label: 'Sepia' },
];

const ACCENT_OPTIONS: { id: AccentColorOption; label: string; swatch: string }[] = [
  { id: 'sony', label: 'Sony Alpha', swatch: '#ea580c' },
  { id: 'blue', label: 'Azul Técnico', swatch: '#3b82f6' },
  { id: 'emerald', label: 'Esmeralda', swatch: '#10b981' },
  { id: 'violet', label: 'Violeta', swatch: '#8b5cf6' },
  { id: 'rose', label: 'Carmesí', swatch: '#f43f5e' },
  { id: 'amber', label: 'Ámbar Dorado', swatch: '#f59e0b' },
  { id: 'cyan', label: 'Cian Óptico', swatch: '#06b6d4' },
  { id: 'slate', label: 'Grafito', swatch: '#64748b' },
];

const FONT_OPTIONS: { id: FontFamilyOption; label: string; sample: string }[] = [
  { id: 'sans', label: 'Inter', sample: 'Sans Moderna' },
  { id: 'jakarta', label: 'Plus Jakarta', sample: 'Sans Geométrica' },
  { id: 'macos', label: 'SF Pro (macOS)', sample: 'Sistema Apple' },
  { id: 'antigravity', label: 'Antigravity', sample: 'Google / DM Sans' },
  { id: 'serif', label: 'Lora', sample: 'Serif Editorial' },
  { id: 'merriweather', label: 'Merriweather', sample: 'Serif Clásica' },
  { id: 'literata', label: 'Literata', sample: 'Lectura Digital' },
  { id: 'mono', label: 'JetBrains Mono', sample: 'Técnica Mono' },
];

const SIZE_OPTIONS: { id: FontSizeScale; label: string }[] = [
  { id: 'sm', label: 'SM' },
  { id: 'md', label: 'MD' },
  { id: 'lg', label: 'LG' },
  { id: 'xl', label: 'XL' },
];

const SPACING_OPTIONS: { id: ReaderSettings['lineSpacing']; label: string }[] = [
  { id: 'compact', label: 'Compacto' },
  { id: 'normal', label: 'Normal' },
  { id: 'relaxed', label: 'Amplio' },
];

export function SettingsMenu({ settings, onChange }: SettingsMenuProps) {
  const updateField = <K extends keyof ReaderSettings>(key: K, value: ReaderSettings[K]) => {
    onChange({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="settings-popover" role="dialog" aria-label="Preferencias de lectura">
      <div className="settings-group">
        <span className="settings-label">Tema de color</span>
        <div className="segmented-control">
          {THEME_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`segment-btn ${settings.theme === option.id ? 'active' : ''}`}
              onClick={() => updateField('theme', option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="settings-group">
        <span className="settings-label">Tipografía de lectura</span>
        <div className="font-grid-control">
          {FONT_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`font-option-btn font-preview-${option.id} ${
                settings.fontFamily === option.id ? 'active' : ''
              }`}
              onClick={() => updateField('fontFamily', option.id)}
            >
              <span className="font-option-name">{option.label}</span>
              <span className="font-option-sample">{option.sample}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="settings-group">
        <span className="settings-label">Tamaño de fuente</span>
        <div className="segmented-control">
          {SIZE_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`segment-btn ${settings.fontSize === option.id ? 'active' : ''}`}
              onClick={() => updateField('fontSize', option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="settings-group">
        <span className="settings-label">Interlineado</span>
        <div className="segmented-control">
          {SPACING_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`segment-btn ${settings.lineSpacing === option.id ? 'active' : ''}`}
              onClick={() => updateField('lineSpacing', option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="settings-group settings-toggle-row">
        <label htmlFor="sony-notes-toggle" className="settings-label">
          Mostrar notas Sony α7 IV
        </label>
        <input
          id="sony-notes-toggle"
          type="checkbox"
          checked={settings.showSonyNotes}
          onChange={(e) => updateField('showSonyNotes', e.target.checked)}
        />
      </div>
    </div>
  );
}
```

---

### 5.5. Paso 4: Integración en `App.tsx` (Persistencia, Sincronización DOM y *Light-Dismiss*)
En [src/App.tsx](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/App.tsx#L35-L120) se inicializa el estado desde `localStorage`, se sincroniza hacia `document.documentElement` y se controla el cierre automático al hacer clic fuera del contenedor `.settings-container`:

```tsx
const SETTINGS_STORAGE_KEY = 'sony_a7iv_reader_settings_v1';

// 1. Estado inicial perezoso con normalización defensiva
const [settings, setSettings] = useState<ReaderSettings>(() => {
  try {
    const raw = window.localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) return DEFAULT_READER_SETTINGS;
    return normalizeReaderSettings(JSON.parse(raw));
  } catch {
    return DEFAULT_READER_SETTINGS;
  }
});
const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
const settingsContainerRef = useRef<HTMLDivElement | null>(null);

// 2. Sincronización de atributos data-* en <html> + persistencia en localStorage
useEffect(() => {
  const root = document.documentElement;
  root.setAttribute('data-theme', settings.theme);
  root.setAttribute('data-accent', settings.accentColor);
  root.setAttribute('data-font', settings.fontFamily);
  root.setAttribute('data-size', settings.fontSize);
  root.setAttribute('data-spacing', settings.lineSpacing);

  try {
    window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch (error) {
    console.warn('No se pudieron guardar las preferencias en localStorage:', error);
  }
}, [settings]);

// 3. Cierre automático (Light-Dismiss) al hacer clic/toque fuera o pulsar Escape
useEffect(() => {
  if (!settingsOpen) return;

  const handlePointerDownOutside = (event: MouseEvent | TouchEvent) => {
    const target = event.target as Node | null;
    if (
      settingsContainerRef.current &&
      target &&
      !settingsContainerRef.current.contains(target)
    ) {
      setSettingsOpen(false);
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setSettingsOpen(false);
    }
  };

  document.addEventListener('mousedown', handlePointerDownOutside);
  document.addEventListener('touchstart', handlePointerDownOutside, { passive: true });
  document.addEventListener('keydown', handleEscapeKey);

  return () => {
    document.removeEventListener('mousedown', handlePointerDownOutside);
    document.removeEventListener('touchstart', handlePointerDownOutside);
    document.removeEventListener('keydown', handleEscapeKey);
  };
}, [settingsOpen]);

// 4. JSX en la barra superior (Topbar)
<div className="settings-container" ref={settingsContainerRef}>
  <button
    type="button"
    className={`topbar-btn ${settingsOpen ? 'active' : ''}`}
    onClick={() => setSettingsOpen((prev) => !prev)}
    aria-expanded={settingsOpen}
  >
    Aa Apariencia
  </button>
  {settingsOpen && <SettingsMenu settings={settings} onChange={setSettings} />}
</div>
```

---

### 5.6. Paso 5: Tokens CSS, Selectores de Atributo y Estilos del Popover (`app.css`)
Extracto completo de [src/styles/app.css](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/styles/app.css) con las variables de tema, tipografía, escalas y diseño responsivo del popover:

```css
:root {
  /* Familias tipográficas */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-jakarta: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-macos: 'SF Pro Text', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  --font-antigravity: 'Google Sans', 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-serif: 'Lora', Georgia, 'Times New Roman', serif;
  --font-merriweather: 'Merriweather', Georgia, serif;
  --font-literata: 'Literata', Georgia, serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Menlo, monospace;

  /* Tema Oscuro (Por defecto) */
  --bg-app: #0d0f12;
  --bg-surface: #14171c;
  --bg-elevated: #1c2027;
  --text-primary: #eceff4;
  --text-secondary: #a3abb8;
  --text-muted: #6e7785;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.16);
  --accent-sony: #e85d04;
  --accent-sony-soft: rgba(232, 93, 4, 0.14);

  /* Variables dinámicas del contenedor de lectura */
  --reader-font: var(--font-sans);
  --reader-size: 1.0625rem;
  --reader-line-height: 1.75;
}

/* Sobreescritura por Tema */
[data-theme='light'] {
  --bg-app: #f7f8fa;
  --bg-surface: #ffffff;
  --bg-elevated: #eef1f5;
  --text-primary: #16191f;
  --text-secondary: #4a5260;
  --text-muted: #768091;
  --border-subtle: rgba(15, 23, 42, 0.09);
  --border-strong: rgba(15, 23, 42, 0.18);
  --accent-sony: #d44d00;
  --accent-sony-soft: rgba(212, 77, 0, 0.09);
}

[data-theme='sepia'] {
  --bg-app: #f4ecd8;
  --bg-surface: #faf4e4;
  --bg-elevated: #ede2c8;
  --text-primary: #2c241b;
  --text-secondary: #5c4f3d;
  --text-muted: #85755e;
  --border-subtle: rgba(68, 52, 31, 0.12);
  --border-strong: rgba(68, 52, 31, 0.22);
  --accent-sony: #b84400;
  --accent-sony-soft: rgba(184, 68, 0, 0.1);
}

/* Sobreescritura por Fuente, Tamaño e Interlineado */
[data-font='sans'] { --reader-font: var(--font-sans); }
[data-font='jakarta'] { --reader-font: var(--font-jakarta); }
[data-font='macos'] { --reader-font: var(--font-macos); }
[data-font='antigravity'] { --reader-font: var(--font-antigravity); }
[data-font='serif'] { --reader-font: var(--font-serif); }

/* 8 Esquemas de Color de Acento (el defecto 'sony' mantiene --accent-sony de cada tema) */
[data-accent='blue'] { --accent-sony: #3b82f6; --accent-sony-soft: color-mix(in srgb, var(--accent-sony) 14%, transparent); --accent-sony-border: color-mix(in srgb, var(--accent-sony) 35%, transparent); }
[data-accent='emerald'] { --accent-sony: #10b981; --accent-sony-soft: color-mix(in srgb, var(--accent-sony) 14%, transparent); --accent-sony-border: color-mix(in srgb, var(--accent-sony) 35%, transparent); }
[data-accent='violet'] { --accent-sony: #8b5cf6; --accent-sony-soft: color-mix(in srgb, var(--accent-sony) 14%, transparent); --accent-sony-border: color-mix(in srgb, var(--accent-sony) 35%, transparent); }
[data-accent='rose'] { --accent-sony: #f43f5e; --accent-sony-soft: color-mix(in srgb, var(--accent-sony) 14%, transparent); --accent-sony-border: color-mix(in srgb, var(--accent-sony) 35%, transparent); }
[data-accent='amber'] { --accent-sony: #f59e0b; --accent-sony-soft: color-mix(in srgb, var(--accent-sony) 14%, transparent); --accent-sony-border: color-mix(in srgb, var(--accent-sony) 35%, transparent); }
[data-accent='cyan'] { --accent-sony: #06b6d4; --accent-sony-soft: color-mix(in srgb, var(--accent-sony) 14%, transparent); --accent-sony-border: color-mix(in srgb, var(--accent-sony) 35%, transparent); }
[data-accent='slate'] { --accent-sony: #64748b; --accent-sony-soft: color-mix(in srgb, var(--accent-sony) 14%, transparent); --accent-sony-border: color-mix(in srgb, var(--accent-sony) 35%, transparent); }
[data-font='merriweather'] { --reader-font: var(--font-merriweather); }
[data-font='literata'] { --reader-font: var(--font-literata); }
[data-font='mono'] { --reader-font: var(--font-mono); }

[data-size='sm'] { --reader-size: 0.95rem; }
[data-size='md'] { --reader-size: 1.0625rem; }
[data-size='lg'] { --reader-size: 1.2rem; }
[data-size='xl'] { --reader-size: 1.35rem; }

[data-spacing='compact'] { --reader-line-height: 1.5; }
[data-spacing='normal'] { --reader-line-height: 1.78; }
[data-spacing='relaxed'] { --reader-line-height: 2.05; }

/* Aplicación en el contenedor de lectura */
.reader-article {
  font-family: var(--reader-font);
  font-size: var(--reader-size);
  line-height: var(--reader-line-height);
}

/* Estilos del Popover y Controles Internos */
.settings-container {
  position: relative;
}

.settings-popover {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 360px;
  background: var(--bg-surface);
  border: 1px solid var(--border-strong);
  border-radius: 14px;
  padding: 1.15rem;
  box-shadow: 0 24px 55px rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: fadeSlideDown 0.16s ease-out;
}

@keyframes fadeSlideDown {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.settings-group {
  display: flex;
  flex-direction: column;
  gap: 0.42rem;
}

.settings-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}

/* Cuadrícula 2x3 de fuentes con previsualización en vivo */
.font-grid-control {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;
}

.font-option-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
  padding: 0.48rem 0.65rem;
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-elevated);
  color: var(--text-secondary);
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
}

.font-option-btn:hover {
  border-color: var(--border-strong);
  color: var(--text-primary);
}

.font-option-btn.active {
  background: var(--accent-sony-soft);
  border-color: var(--accent-sony);
  color: var(--text-primary);
}

.font-option-name { font-size: 0.84rem; font-weight: 600; }
.font-option-sample { font-size: 0.68rem; color: var(--text-muted); font-family: var(--font-sans); }

.font-preview-sans .font-option-name { font-family: var(--font-sans); }
.font-preview-jakarta .font-option-name { font-family: var(--font-jakarta); }
.font-preview-serif .font-option-name { font-family: var(--font-serif); }
.font-preview-merriweather .font-option-name { font-family: var(--font-merriweather); }
.font-preview-literata .font-option-name { font-family: var(--font-literata); }
.font-preview-mono .font-option-name { font-family: var(--font-mono); }

/* Controles segmentados (Tema, Tamaño, Interlineado) */
.segmented-control {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  background: var(--bg-elevated);
  padding: 3px;
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
}

.segment-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  padding: 0.38rem 0.45rem;
  font-size: 0.76rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.segment-btn.active {
  background: var(--bg-surface);
  color: var(--text-primary);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.settings-toggle-row {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.45rem;
  border-top: 1px solid var(--border-subtle);
}

/* Adaptación Responsiva en Móvil */
@media (max-width: 860px) {
  .settings-popover {
    position: fixed;
    top: 64px;
    left: 0.75rem;
    right: 0.75rem;
    width: auto;
    max-width: 420px;
    margin: 0 auto;
    max-height: calc(100dvh - 80px);
    overflow-y: auto;
    z-index: 90;
  }
}
```

---

## 6. Comandos de Operación Rápida
- **Iniciar servidor en segundo plano (CLI):** `./start.sh` (ejecuta `seed` + Vite en [http://127.0.0.1:5173/](http://127.0.0.1:5173/), guarda PID en `.app.pid` y logs en `.app.log`)
- **Detener servidor (CLI):** `./stop.sh` (cierra el árbol de procesos y libera el puerto `5173`)
- **Iniciar servidor de desarrollo en primer plano:** `npm run dev` (abre en [http://127.0.0.1:5173/](http://127.0.0.1:5173/))
- **Regenerar base de datos SQLite:** `npm run seed`
- **Verificación de tipos TypeScript:** `npx tsc --noEmit`
- **Linter de código:** `npm run lint`
- **Auditoría de seguridad de paquetes:** `npm audit`
