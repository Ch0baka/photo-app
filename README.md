# Photo-App — Aprende Fotografía con tu Propia Cámara

> **Demo en vivo:** [https://ch0baka.github.io/photo-app/](https://ch0baka.github.io/photo-app/)

¡Bienvenido/a! Si acabas de dar el salto a tu primera cámara (o si por fin decidiste salir del modo `AUTO` para tomar el control creativo de tus fotos), este proyecto fue creado pensando en ti.

**Photo-App** es una plataforma interactiva de lectura y estudio diseñada específicamente para **principiantes en fotografía**. Su objetivo es transformar la teoría fotográfica clásica —que a veces puede sentirse abstracta o intimidante— en una guía práctica, visual y aterrizada directamente a los botones, diales y menús de tu cámara.

---

## 1. Reconocimiento Especial y Créditos de Autor

Todo el corazón teórico, los esquemas ópticos y las fotografías de ejemplo que dan vida a los módulos de esta aplicación provienen de las extraordinarias guías formativas de **[PhotoPills](https://www.photopills.com/es)** (escritas por **Toni Cladera** y el equipo de PhotoPills):

1. **Módulo 1:** *La guía definitiva para exponer correctamente tus fotos ¡Siempre!*
2. **Módulo 2:** *La guía definitiva sobre la profundidad de campo*
3. **Módulo 3:** *Fotografía de Vía Láctea: la guía definitiva (2026)*

Todo el mérito pedagógico, las imágenes y las explicaciones fotográficas pertenecen a **PhotoPills**. Si aún no conoces su web, sus guías gratuitas o su aplicación móvil para planificar Sol, Luna y Vía Láctea, te recomendamos visitarlos y apoyar su trabajo en [photopills.com](https://www.photopills.com/es). Este repositorio tiene fines estrictamente educativos y de estudio personal.

---

## 2. El verdadero propósito de este repositorio: ¡Hazlo tuyo con tu propia cámara!

En la versión que ves publicada hoy, cada capítulo incluye **tarjetas prácticas y rutas de menú para la Sony Alpha 7 IV**, porque esa es la cámara con la que nació este entorno de estudio.

Pero **la magia de este proyecto es que está pensado como una plantilla viva para que tú incorpores tu propia cámara** (ya sea una Canon EOS R50, Nikon Z50, Fujifilm X-T30, Sony a6400 o cualquier otra).

### Cómo adaptarlo a tu cámara en minutos usando IA

No necesitas saber programar para personalizar esta plataforma con tu equipo fotográfico:

1. **Descarga o clona este repositorio** en tu computador.
2. **Abre la carpeta con tu asistente de IA favorito** (Gemini, Claude Code, Cursor, Antigravity, Windsurf, etc.).
3. **Pídele a la IA algo como esto:**
   > *"Hola, acabo de descargar este proyecto de estudio fotográfico. Lee el archivo `@STATE.md` y `@GEMINI.md`. Mi cámara es una **[Escribe aquí la marca y modelo de tu cámara]** y aquí tienes el enlace a su manual oficial web: **[URL del manual de tu cámara]**. Por favor, reemplaza las notas y rutas de menú de la Sony Alpha 7 IV en los capítulos por los ajustes equivalentes, diales y menús reales de mi cámara."*
4. ¡Listo! Tendrás tu propia academia interactiva local hablando el idioma exacto de la cámara que tienes en tus manos. ¡Mucho ánimo! Entender cómo responde tu propio equipo capítulo a capítulo acelera el aprendizaje de una manera increíble.

---

## 3. La tecnología ayuda, pero la fotografía se vive en equipo

Por muy cómoda que sea esta aplicación y por mucho que nos apoyemos en inteligencia artificial para organizar el estudio, **ninguna pantalla reemplaza la experiencia de salir a hacer fotos con otras personas**.

- Sal a caminar con amigos o únete a un club o grupo fotográfico local.
- Conversa con fotógrafos con más experiencia, mira cómo resuelven problemas de luz en terreno y comparte tus dudas sin miedo.
- **No dejemos de socializar:** en la fotografía (como en casi todo en la vida), cuando más se aprende, más se disfruta y mejores resultados se logran es **cuando hacemos equipo**. Usa esta app en casa para estudiar la teoría, y luego sal a la calle o a la montaña a compartirla.

---

## 4. Más contenido en camino (o créalo tú mismo con `@STATE.md`)

Este proyecto seguirá creciendo con nuevos módulos y libros técnicos en el futuro. 

Sin embargo, si no quieres esperar y tienes un nuevo libro o guía en PDF que quieras estudiar con este mismo formato:
- El repositorio incluye un archivo de memoria y traspaso llamado [`STATE.md`](./STATE.md) junto con las reglas de ingeniería en [`.agents/rules/standards.md`](./.agents/rules/standards.md).
- Cualquier agente de IA local que lea `STATE.md` entenderá al instante cómo está estructurada la base de datos, cómo se extraen las imágenes y cómo generar un **Módulo 3** o **Módulo 4** asociando cada concepto técnico a la cámara que tú elijas.

---

## 5. Apartado para «los más técnicos» (Sí, miramos debajo del capó)

Si eres de las personas que antes de leer el capítulo 1 del triángulo de exposición ya estaba abriendo el `package.json` para juzgar las dependencias... **bienvenido/a a tu rincón:**

- **Filosofía *Zero-Bloat* (Cero grasa añadida):** Aquí no encontrarás 847 paquetes de npm para renderizar un botón ni tres gestores de estado peleándose entre sí. Usamos **React 19 + TypeScript estricto (cero `any`, palabra de honor) + Vite + CSS moderno con variables nativas**.
- **SQLite nativo sin compilaciones dolorosas:** En local usamos el módulo nativo `node:sqlite` de **Node.js 24**. Nada de compilar binarios en C++ que fallan cuando actualizas macOS cinco minutos antes de salir a fotografiar el atardecer.
- **Doble personalidad (Local + GitHub Pages):**
  - Cuando corres `npm run dev` en tu máquina, Vite levanta un middleware REST conectado en vivo a `./data/app.db` (SQLite3).
  - Cuando haces `npm run build`, el plugin exporta automáticamente un espejo JSON estático desde SQLite hacia `dist/static-api/` y el frontend conmuta de forma transparente a modo estático + `localStorage`. Así GitHub Pages sirve todo a velocidad de cohete sin necesitar un backend Node corriendo 24/7.
- **Visor con zoom de verdad:** El Lightbox tiene listeners no pasivos para que el *pinch-to-zoom* del trackpad amplíe solo la fotografía y sus metadatos EXIF, sin deformar toda la interfaz del navegador como si estuviéramos en 2009.

### Comandos rápidos para levantar el laboratorio local

```bash
# 1. Instalar dependencias (rápido e indoloro)
npm install

# 2. Poblar/actualizar la base de datos SQLite local
npm run seed

# 3. Levantar el servidor de desarrollo en http://localhost:5173
npm run dev

# 4. Bucle de verificación (TypeScript + ESLint + Build estático)
npx tsc --noEmit && npm run lint && npm run build
```

---

¡Que tengas buena luz, disfruta el proceso de aprender y nos vemos haciendo fotos!
