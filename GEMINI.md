# Project Context & Operational Guide

## 1. Descripción del Proyecto
- **Nombre:** Sony Alpha 7 IV — Plataforma de Aprendizaje Fotográfico
- **Propósito:** Aplicación web local interactiva y sofisticada para aprender fotografía aplicada a la cámara Sony Alpha 7 IV, estructurada en módulos basados en libros técnicos (comenzando con *La guía definitiva para exponer correctamente tus fotos* de PhotoPills y un segundo libro posterior).
- **Entorno de ejecución:** Local (macOS Apple Silicon).

## 2. Stack Tecnológico
- **Frontend:** React 19, TypeScript, Vite, CSS Moderno (Variables CSS nativas para temas, tipografía y animaciones fluidas).
- **Backend / API:** Servidor local ligero integrado en Vite / Node.js para servir activos y consultar la base de datos local sin autenticación.
- **Persistencia:** SQLite3 local en `./data/app.db` (para módulos, capítulos, secciones, metadatos EXIF de ejemplo y progreso/preferencias) + `localStorage` para persistencia instantánea de preferencias de lectura.
- **Testing & Linting:** Vitest, ESLint, TypeScript (`tsc`).

## 3. Comandos del Bucle de Verificación (Verification Loop)
El agente DEBE utilizar estos comandos para validar cualquier cambio antes de dar una tarea por completada:
- **Instalar dependencias:** `npm install`
- **Servidor de desarrollo:** `npm run dev`
- **Verificación de tipos (Obligatorio):** `npx tsc --noEmit`
- **Linter:** `npm run lint`
- **Tests unitarios:** `npm run test:unit`

## 4. Estructura de Directorios Clave
```text
.
├── src/
│   ├── components/    # Componentes de UI reutilizables y aislados (Sidebar, Reader, Lightbox, EXIF Badge, Settings)
│   ├── core/          # Lógica de negocio pura (formateo EXIF, calculadoras de reciprocidad/EV, gestión de módulos)
│   ├── data/          # Conexión a SQLite, esquemas (schema.sql), migraciones y scripts de ingesta por capítulo
│   └── utils/         # Funciones auxiliares puras
├── tests/             # Espejo de src/ para pruebas unitarias e integración
├── public/            # Activos estáticos e imágenes extraídas por libro/capítulo (public/images/book-1/cap-1/...)
└── data/              # Archivo de base de datos local SQLite (app.db)
```

## 5. Estado Actual y Memoria de Trabajo
- Para conocer el estado de la tarea en curso, decisiones recientes y próximos pasos, consultar siempre: `@STATE.md` (en la raíz).
- El esquema actual de datos se encuentra documentado o definido en: `@src/data/schema.sql`.
