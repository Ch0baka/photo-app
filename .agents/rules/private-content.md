---
description: Política estricta de privacidad local para impedir la sincronización o publicación en GitHub de libros de pago (Módulo 4 — Mark Galer).
trigger: always_on
---

# Regla de Privacidad Local (Contenido de Pago — Módulo 4)

## 1. Prohibición Absoluta de Sincronización con GitHub
El material derivado de **`A7IV-eBook-June-2026.pdf`** (Patreon de Mark Galer) es un documento de pago de uso estrictamente local y personal. Queda **terminantemente prohibido**:
- Añadir al repositorio de Git (`git add`), hacer *commit* o subir (`git push`) el archivo PDF original, cualquier archivo fuente de datos del Módulo 4 (`src/data/private-*`), imágenes exportadas (`public/images/book-4/`, `public/images/covers/book-4-cover.*`), o la base de datos compilada (`data/app.db`).
- Exportar o incluir el Módulo 4 en el espejo estático `public/static-api/` generado por `npm run build` para GitHub Pages.
- Modificar `.gitignore` o el hook `.git/hooks/pre-commit` para relajar o desactivar estas exclusiones.

## 2. Arquitectura de Carga Condicional Segura
- Todo el contenido procesado del Módulo 4 debe residir únicamente en archivos ignorados por Git (ej. `src/data/private-book4-content.ts` o `data/private/`).
- [`src/data/seed.ts`](file:///Users/rolando/Gemini_projects/app_fotografia_bases/src/data/seed.ts) debe detectar mediante `fs.existsSync(...)` e importación dinámica si el archivo privado existe en el disco local; en entornos de CI/CD (GitHub Actions), debe continuar generando sin errores únicamente los módulos públicos (Módulos 1, 2 y 3).
- [`vite.config.ts`](file:///Users/rolando/Gemini_projects/app_fotografia_bases/vite.config.ts) debe excluir explícitamente el Módulo 4 privado al escribir `public/static-api/modules.json` y `public/static-api/chapters/*.json`.
