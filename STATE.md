# Current Working State (Handoff)

## 1. Resumen Ejecutivo del Proyecto
- **Nombre:** Sony Alpha 7 IV — Plataforma de Aprendizaje Fotográfico
- **Módulo 1:** *La guía definitiva para exponer correctamente tus fotos ¡Siempre!* (PhotoPills / Toni Cladera) — **100% completado e integrado** (Introducción + 27 capítulos, 465 páginas, 240 imágenes).
- **Módulo 2:** *La guía definitiva sobre la profundidad de campo* (PhotoPills / Toni Cladera) — **100% completado e integrado** (Introducción + 15 capítulos, 141 páginas, 95 imágenes).
- **Dashboard de Inicio (Estilo Apple Books):** Vista de biblioteca minimalista donde se muestran únicamente las portadas en alta resolución de los libros con efecto de lomo físico, el porcentaje de avance (`XX%`) abajo a la izquierda y el botón `•••` a la derecha.
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
- [x] Generación de portadas en alta resolución (`1224x1584`) desde la página 1 de cada PDF en `public/images/covers/book-1-cover.png` y `public/images/covers/book-2-cover.png`.
- [x] Ingesta estructurada en [src/data/book2-content.ts](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/data/book2-content.ts) utilizando el parser por tamaño tipográfico real (`NSFont.pointSize`) para garantizar la continuidad perfecta de títulos multi-línea.
- [x] **16 Tarjetas Prácticas Sony Alpha 7 IV** dedicadas a profundidad de campo:
  - Mapa de Enfoque (*Focus Map* exclusivo de la α7 IV), *Focus Magnifier* + *Peaking*, Círculo de Confusión en el sensor de 33 MP ($0.029\text{ mm}$ estándar vs. $0.015\text{ mm}$ exigente), límite de difracción en $f/8 - f/11$, *Breathing Compensation*, teleconvertidores `SEL14TC`/`SEL20TC`, recorte Super 35mm (APS-C 15 MP), botón personalizado de Previsualización de Apertura (*Shot. Result Preview*) y comportamiento del bokeh con obturador electrónico de cortinilla delantera (*e-Front Curtain*).

### E. Interfaz Web Moderna, Dashboard Estilo Apple Books y Responsividad Mobile (UI/UX)
- [x] **Dashboard de Inicio Estilo Apple Books ([src/App.tsx](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/App.tsx) y [src/styles/app.css](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/styles/app.css)):**
  - Al iniciar, muestra una cuadrícula limpia centrada con las portadas de los libros, relieve de lomo tipo libro físico y pie minimalista con el porcentaje de progreso (`0%`..`100%`) a la izquierda y el icono `•••` a la derecha.
  - Al hacer clic en cualquier portada, abre directamente ese módulo en el lector (posicionándose en el primer capítulo pendiente de leer) con transición suave (`startViewTransition`).
  - Botón `← Biblioteca` en la barra superior del lector y clic en el emblema del sidebar para volver al dashboard de portadas en cualquier momento.
- [x] **Adaptación Completa a Dispositivos Móviles:**
  - Sidebar transformado en un *Drawer* táctil deslizable (`100dvh`) con cierre automático al elegir capítulo o tocar el fondo oscurecido (`sidebar-backdrop`).
  - Menú de Apariencia (`Aa Apariencia`) responsivo para pantallas estrechas y visor [LightboxModal.tsx](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/components/LightboxModal.tsx) con soporte de gestos táctiles (*pinch-to-zoom* con 2 dedos y arrastre con 1 dedo).

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
| `src/components/BlockRenderer.tsx` | Renderizador dinámico de los 9 tipos de bloques de contenido | Producción V2 Estable |
| `src/components/PhotoCard.tsx` | Componente de foto con píldoras EXIF y texto enriquecido | Producción V2 Estable |
| `src/components/LightboxModal.tsx` | Visor modal con zoom por trackpad, botones de escala y arrastre | Producción V2 Estable |
| `src/components/SettingsMenu.tsx` | Menú de preferencias (6 fuentes, modos de color, tamaño, espaciado) | Producción V2 Estable |
| `src/data/book1-content.ts` (+3) | Contenido íntegro del Módulo 1 (Exposición, 28 caps, 240 imgs) | Producción V2 Estable |
| `src/data/book2-content.ts` | Contenido íntegro del Módulo 2 (Profundidad de Campo, 16 caps, 95 imgs) | Producción V2 Estable |
| `src/data/schema.sql` & `repository.ts` | Esquema relacional DDL y consultas con `node:sqlite` | Producción V2 Estable |
| `src/data/seed.ts` | Ingesta masiva de ambos módulos y sus 335 activos gráficos | Producción V2 Estable |
| `data/app.db` | Base de datos SQLite3 poblada con los 2 libros completos | Poblada y Verificada |

---

## 5. Comandos de Operación Rápida
- **Iniciar servidor de desarrollo:** `npm run dev` (abre en [http://127.0.0.1:5173/](http://127.0.0.1:5173/))
- **Regenerar base de datos SQLite:** `npm run seed`
- **Verificación de tipos TypeScript:** `npx tsc --noEmit`
- **Linter de código:** `npm run lint`
- **Auditoría de seguridad de paquetes:** `npm audit`
