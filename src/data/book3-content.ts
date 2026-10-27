import type { ChapterSummary, ExifMetadata } from '../core/types.ts';
import type { SeedBlockInput } from './book1-content.ts';

export const BOOK_3_CHAPTERS: Omit<ChapterSummary, 'id' | 'moduleId' | 'isCompleted'>[] = [
  {
    "slug": "b3-introduccion",
    "chapterNumber": 0,
    "title": "Introducción",
    "subtitle": "Imagina, planifica y captura fotografías legendarias de la Vía Láctea",
    "estimatedReadMin": 5,
    "pdfPages": "6–8",
    "isIngested": true
  },
  {
    "slug": "b3-cap-1-mark-gee-fotos-contagiosas",
    "chapterNumber": 1,
    "title": "Mark Gee demuestra que todo el mundo puede hacer fotos contagiosas",
    "subtitle": "La historia detrás de Guiding Light To The Stars y Full Moon Silhouettes",
    "estimatedReadMin": 6,
    "pdfPages": "9–13",
    "isIngested": true
  },
  {
    "slug": "b3-cap-2-cree-en-lo-imposible",
    "chapterNumber": 2,
    "title": "Cree en lo imposible, busca la originalidad",
    "subtitle": "Cómo superar el bloqueo creativo y encontrar ideas fotográficas únicas bajo las estrellas",
    "estimatedReadMin": 5,
    "pdfPages": "14–16",
    "isIngested": true
  },
  {
    "slug": "b3-cap-3-anade-misterio-via-lactea",
    "chapterNumber": 3,
    "title": "Añade misterio a tu composición, incluye la Vía Láctea",
    "subtitle": "El Centro Galáctico como elemento narrativo y emocional en el paisaje nocturno",
    "estimatedReadMin": 5,
    "pdfPages": "17–19",
    "isIngested": true
  },
  {
    "slug": "b3-cap-4-cuando-fotografiar-via-lactea-2026",
    "chapterNumber": 4,
    "title": "Cuándo fotografiar la Vía Láctea en 2026",
    "subtitle": "Temporada del Centro Galáctico por hemisferio, fases lunares y calendario nocturno",
    "estimatedReadMin": 8,
    "pdfPages": "20–26",
    "isIngested": true
  },
  {
    "slug": "b3-cap-5-donde-fotografiar-via-lactea",
    "chapterNumber": 5,
    "title": "Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente)",
    "subtitle": "Contaminación lumínica, escala de Bortle, orientación del sujeto y búsqueda de localizaciones",
    "estimatedReadMin": 12,
    "pdfPages": "27–39",
    "isIngested": true
  },
  {
    "slug": "b3-cap-6-tres-cosas-esenciales-planificar",
    "chapterNumber": 6,
    "title": "Las 3 cosas esenciales que deberías saber antes de empezar a planificar la Vía Láctea",
    "subtitle": "Visibilidad del Centro Galáctico, inclinación del arco y contaminación lumínica lunar",
    "estimatedReadMin": 7,
    "pdfPages": "40–44",
    "isIngested": true
  },
  {
    "slug": "b3-cap-7-como-planificar-via-lactea-paso-a-paso",
    "chapterNumber": 7,
    "title": "Cómo planificar tus fotos de la Vía Láctea paso a paso",
    "subtitle": "Uso del Planificador 2D y Realidad Aumentada Noche para clavar posición, fecha y hora",
    "estimatedReadMin": 11,
    "pdfPages": "45–55",
    "isIngested": true
  },
  {
    "slug": "b3-cap-8-equipo-para-fotografiar-via-lactea",
    "chapterNumber": 8,
    "title": "Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea",
    "subtitle": "Cámaras, objetivos luminosos, trípodes, rótulas, trackers ecuatoriales, linternas e intervalómetros",
    "estimatedReadMin": 22,
    "pdfPages": "56–92",
    "isIngested": true
  },
  {
    "slug": "b3-cap-9-como-fotografiar-via-lactea-paso-a-paso",
    "chapterNumber": 9,
    "title": "Cómo fotografiar la Vía Láctea paso a paso",
    "subtitle": "Ajustes en campo, enfoque a estrellas, Regla NPF vs Regla 500, ISO, balance de blancos y panorámicas",
    "estimatedReadMin": 18,
    "pdfPages": "93–115",
    "isIngested": true
  },
  {
    "slug": "b3-cap-10-como-procesar-via-lactea",
    "chapterNumber": 10,
    "title": "Cómo procesar la Vía Láctea",
    "subtitle": "Flujos de revelado RAW en Lightroom y Photoshop para resaltar el núcleo galáctico sin ruido",
    "estimatedReadMin": 6,
    "pdfPages": "116–119",
    "isIngested": true
  },
  {
    "slug": "b3-cap-11-diez-imagenes-via-lactea-inspiran",
    "chapterNumber": 11,
    "title": "10 imágenes de la Vía Láctea que te inspirarán",
    "subtitle": "Análisis técnico y compositivo de 10 fotografías maestras de astrofotografía de paisaje",
    "estimatedReadMin": 10,
    "pdfPages": "120–128",
    "isIngested": true
  },
  {
    "slug": "b3-cap-12-no-te-des-por-vencido",
    "chapterNumber": 12,
    "title": "¡No te des por vencido!",
    "subtitle": "Persistencia, meteorología y mentalidad para lograr la foto nocturna de tus sueños",
    "estimatedReadMin": 5,
    "pdfPages": "129–132",
    "isIngested": true
  }
];

export const BOOK_3_ASSETS: (ExifMetadata & { chapterNumber: number })[] = [
  {
    "id": "b3-c0-p6-1",
    "chapterNumber": 0,
    "filePath": "/images/book-3/intro/p006-im2.jpg",
    "altText": "Figura de la página 6 — Introducción.",
    "caption": "Figura de la página 6 — Introducción."
  },
  {
    "id": "b3-c1-p10-1",
    "chapterNumber": 1,
    "filePath": "/images/book-3/cap-1/p010-im3.jpg",
    "altText": "La imagen ganadora del Astronomy Photographer of the year 2013: 'Guiding Light To The Stars'. Canon 5D Mark III | 24mm | f/2.8 | 30s | ISO 3200 | Panorámica de 10 fotografías",
    "caption": "La imagen ganadora del Astronomy Photographer of the year 2013: 'Guiding Light To The Stars'. Canon 5D Mark III | 24mm | f/2.8 | 30s | ISO 3200 | Panorámica de 10 fotografías"
  },
  {
    "id": "b3-c1-p12-1",
    "chapterNumber": 1,
    "filePath": "/images/book-3/cap-1/p012-im4.jpg",
    "altText": "Figura de la página 12 — Mark Gee demuestra que todo el mundo puede hacer fotos contagiosas.",
    "caption": "Figura de la página 12 — Mark Gee demuestra que todo el mundo puede hacer fotos contagiosas."
  },
  {
    "id": "b3-c1-p13-1",
    "chapterNumber": 1,
    "filePath": "/images/book-3/cap-1/p013-im5.jpg",
    "altText": "Figura de la página 13 — Mark Gee demuestra que todo el mundo puede hacer fotos contagiosas.",
    "caption": "Figura de la página 13 — Mark Gee demuestra que todo el mundo puede hacer fotos contagiosas."
  },
  {
    "id": "b3-c2-p15-1",
    "chapterNumber": 2,
    "filePath": "/images/book-3/cap-2/p015-im6.jpg",
    "altText": "Figura de la página 15 — Cree en lo imposible, busca la originalidad.",
    "caption": "Figura de la página 15 — Cree en lo imposible, busca la originalidad."
  },
  {
    "id": "b3-c3-p19-1",
    "chapterNumber": 3,
    "filePath": "/images/book-3/cap-3/p019-im7-1.jpg",
    "altText": "Planificador de PhotoPills – La línea blanca del azimut muestra la dirección del Centro Galáctico el 30 de agosto de 2019 a las 23:46. La Vía Láctea está completamente vertical y alíneada con el puente natural de Es Pont d'En Gil. Realidad aumentada Noche – El punto rojo grande indica la posición del Centro Galáctico. La Vía Láctea está completamente vertical y alíneada con el puente natural.",
    "caption": "Planificador de PhotoPills – La línea blanca del azimut muestra la dirección del Centro Galáctico el 30 de agosto de 2019 a las 23:46. La Vía Láctea está completamente vertical y alíneada con el puente natural de Es Pont d'En Gil. Realidad aumentada Noche – El punto rojo grande indica la posición del Centro Galáctico. La Vía Láctea está completamente vertical y alíneada con el puente natural."
  },
  {
    "id": "b3-c3-p19-2",
    "chapterNumber": 3,
    "filePath": "/images/book-3/cap-3/p019-im8-2.jpg",
    "altText": "Planificador de PhotoPills – La línea blanca del azimut muestra la dirección del Centro Galáctico el 30 de agosto de 2019 a las 23:46. La Vía Láctea está completamente vertical y alíneada con el puente natural de Es Pont d'En Gil. Realidad aumentada Noche – El punto rojo grande indica la posición del Centro Galáctico. La Vía Láctea está completamente vertical y alíneada con el puente natural.",
    "caption": "Planificador de PhotoPills – La línea blanca del azimut muestra la dirección del Centro Galáctico el 30 de agosto de 2019 a las 23:46. La Vía Láctea está completamente vertical y alíneada con el puente natural de Es Pont d'En Gil. Realidad aumentada Noche – El punto rojo grande indica la posición del Centro Galáctico. La Vía Láctea está completamente vertical y alíneada con el puente natural."
  },
  {
    "id": "b3-c4-p22-1",
    "chapterNumber": 4,
    "filePath": "/images/book-3/cap-4/p022-im9.jpg",
    "altText": "El Centro Galáctico es visible de marzo a octubre, en cambio no es visible de noviembre a febrero.",
    "caption": "El Centro Galáctico es visible de marzo a octubre, en cambio no es visible de noviembre a febrero."
  },
  {
    "id": "b3-c4-p24-1",
    "chapterNumber": 4,
    "filePath": "/images/book-3/cap-4/p024-im10.jpg",
    "altText": "El Centro Galáctico es visible de febrero a octubre y no es visible de noviembre a enero.",
    "caption": "El Centro Galáctico es visible de febrero a octubre y no es visible de noviembre a enero."
  },
  {
    "id": "b3-c4-p25-1",
    "chapterNumber": 4,
    "filePath": "/images/book-3/cap-4/p025-im11.jpg",
    "altText": "Figura de la página 25 — Cuándo fotografiar la Vía Láctea en 2026.",
    "caption": "Figura de la página 25 — Cuándo fotografiar la Vía Láctea en 2026."
  },
  {
    "id": "b3-c5-p28-1",
    "chapterNumber": 5,
    "filePath": "/images/book-3/cap-5/p028-im12.jpg",
    "altText": "Imagen del Earth Observatory de la NASA captada por Joshua Stevens, usando los datos de Suomi NPP VIIRS facilitados por Miguel Román (NASA Goddard Space Flight Center).",
    "caption": "Imagen del Earth Observatory de la NASA captada por Joshua Stevens, usando los datos de Suomi NPP VIIRS facilitados por Miguel Román (NASA Goddard Space Flight Center)."
  },
  {
    "id": "b3-c5-p30-1",
    "chapterNumber": 5,
    "filePath": "/images/book-3/cap-5/p030-im13.jpg",
    "altText": "Figura de la página 30 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "caption": "Figura de la página 30 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente)."
  },
  {
    "id": "b3-c5-p31-1",
    "chapterNumber": 5,
    "filePath": "/images/book-3/cap-5/p031-im15-1.jpg",
    "altText": "Figura de la página 31 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "caption": "Figura de la página 31 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "cameraModel": "Nikon D4s",
    "lensFocal": "14mm",
    "aperture": "f/2.8",
    "shutterSpeed": "30s",
    "iso": "6400",
    "extraNotes": "Panorámica"
  },
  {
    "id": "b3-c5-p31-2",
    "chapterNumber": 5,
    "filePath": "/images/book-3/cap-5/p031-im14-2.jpg",
    "altText": "Figura de la página 31 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "caption": "Figura de la página 31 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente)."
  },
  {
    "id": "b3-c5-p32-1",
    "chapterNumber": 5,
    "filePath": "/images/book-3/cap-5/p032-im16.jpg",
    "altText": "Figura de la página 32 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "caption": "Figura de la página 32 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "cameraModel": "Nikon D4s",
    "lensFocal": "17mm",
    "aperture": "f/2.8",
    "shutterSpeed": "30s",
    "iso": "6400"
  },
  {
    "id": "b3-c5-p33-1",
    "chapterNumber": 5,
    "filePath": "/images/book-3/cap-5/p033-im17-1.jpg",
    "altText": "Figura de la página 33 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "caption": "Figura de la página 33 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "cameraModel": "Nikon Z6",
    "lensFocal": "18mm",
    "aperture": "f/2.8",
    "shutterSpeed": "25s",
    "iso": "6400",
    "kelvin": "3350K",
    "extraNotes": "Panorámica de 7 fotografías"
  },
  {
    "id": "b3-c5-p33-2",
    "chapterNumber": 5,
    "filePath": "/images/book-3/cap-5/p033-im18-2.jpg",
    "altText": "Figura de la página 33 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "caption": "Figura de la página 33 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente)."
  },
  {
    "id": "b3-c5-p35-1",
    "chapterNumber": 5,
    "filePath": "/images/book-3/cap-5/p035-im19.jpg",
    "altText": "Figura de la página 35 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "caption": "Figura de la página 35 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "cameraModel": "Nikon D4s",
    "lensFocal": "18mm",
    "aperture": "f/2.8",
    "shutterSpeed": "20s",
    "iso": "6400",
    "kelvin": "3700K"
  },
  {
    "id": "b3-c5-p36-1",
    "chapterNumber": 5,
    "filePath": "/images/book-3/cap-5/p036-im20.jpg",
    "altText": "Figura de la página 36 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "caption": "Figura de la página 36 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "cameraModel": "Nikon D4s",
    "lensFocal": "17mm",
    "aperture": "f/2.8",
    "shutterSpeed": "30s",
    "iso": "6400"
  },
  {
    "id": "b3-c5-p38-1",
    "chapterNumber": 5,
    "filePath": "/images/book-3/cap-5/p038-im21.jpg",
    "altText": "Figura de la página 38 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "caption": "Figura de la página 38 — Dónde fotografiar la Vía Láctea (cómo encontrar una localización potente).",
    "cameraModel": "Nikon D4s",
    "lensFocal": "35mm",
    "aperture": "f/1.8",
    "shutterSpeed": "15s (Vía Láctea y meteoro) and 25s (primer plano)",
    "iso": "1600",
    "kelvin": "3150K"
  },
  {
    "id": "b3-c6-p43-1",
    "chapterNumber": 6,
    "filePath": "/images/book-3/cap-6/p043-im22.jpg",
    "altText": "Paso 1. Encuentra el azimut en el que el Centro Galáctico está en la elevación y la orientación deseadas. Paso 2. Desplázate para encontrar el punto de disparo adecuado para la composición que quieres.",
    "caption": "Paso 1. Encuentra el azimut en el que el Centro Galáctico está en la elevación y la orientación deseadas. Paso 2. Desplázate para encontrar el punto de disparo adecuado para la composición que quieres."
  },
  {
    "id": "b3-c7-p46-1",
    "chapterNumber": 7,
    "filePath": "/images/book-3/cap-7/p046-im23.jpg",
    "altText": "Figura de la página 46 — Cómo planificar tus fotos de la Vía Láctea paso a paso.",
    "caption": "Figura de la página 46 — Cómo planificar tus fotos de la Vía Láctea paso a paso."
  },
  {
    "id": "b3-c7-p47-1",
    "chapterNumber": 7,
    "filePath": "/images/book-3/cap-7/p047-im24.jpg",
    "altText": "Figura de la página 47 — Cómo planificar tus fotos de la Vía Láctea paso a paso.",
    "caption": "Figura de la página 47 — Cómo planificar tus fotos de la Vía Láctea paso a paso."
  },
  {
    "id": "b3-c7-p49-1",
    "chapterNumber": 7,
    "filePath": "/images/book-3/cap-7/p049-im26-1.jpg",
    "altText": "Planificador de PhotoPills – En la pantalla de Configuración del mapa, pulsa el icono del ojo para activar la capa de la Vía Láctea. · Planificador de PhotoPills – Coloca el Pin Rojo en el punto de disparo. Ahora puedes ver la capa de la Vía Láctea en el mapa.",
    "caption": "Planificador de PhotoPills – En la pantalla de Configuración del mapa, pulsa el icono del ojo para activar la capa de la Vía Láctea."
  },
  {
    "id": "b3-c7-p49-2",
    "chapterNumber": 7,
    "filePath": "/images/book-3/cap-7/p049-im25-2.jpg",
    "altText": "Planificador de PhotoPills – En la pantalla de Configuración del mapa, pulsa el icono del ojo para activar la capa de la Vía Láctea. · Planificador de PhotoPills – Coloca el Pin Rojo en el punto de disparo. Ahora puedes ver la capa de la Vía Láctea en el mapa.",
    "caption": "Planificador de PhotoPills – Coloca el Pin Rojo en el punto de disparo. Ahora puedes ver la capa de la Vía Láctea en el mapa."
  },
  {
    "id": "b3-c7-p52-1",
    "chapterNumber": 7,
    "filePath": "/images/book-3/cap-7/p052-im28-1.jpg",
    "altText": "Planificador de PhotoPills – Posición de la Vía Láctea el 30 de agosto 2019 a las 21:56. Realidad aumentada Noche de PhotoPills – Posición de la Vía Láctea el 30 de agosto 2019 a las 21:56.",
    "caption": "Planificador de PhotoPills – Posición de la Vía Láctea el 30 de agosto 2019 a las 21:56. Realidad aumentada Noche de PhotoPills – Posición de la Vía Láctea el 30 de agosto 2019 a las 21:56."
  },
  {
    "id": "b3-c7-p52-2",
    "chapterNumber": 7,
    "filePath": "/images/book-3/cap-7/p052-im27-2.jpg",
    "altText": "Planificador de PhotoPills – Posición de la Vía Láctea el 30 de agosto 2019 a las 21:56. Realidad aumentada Noche de PhotoPills – Posición de la Vía Láctea el 30 de agosto 2019 a las 21:56.",
    "caption": "Planificador de PhotoPills – Posición de la Vía Láctea el 30 de agosto 2019 a las 21:56. Realidad aumentada Noche de PhotoPills – Posición de la Vía Láctea el 30 de agosto 2019 a las 21:56."
  },
  {
    "id": "b3-c7-p53-1",
    "chapterNumber": 7,
    "filePath": "/images/book-3/cap-7/p053-im7-1.jpg",
    "altText": "Planificador de PhotoPills – El 30 de agosto a las 23:46pm el núcleo de la Vía Láctea será vertical y estará alineado con el puente. Realidad aumentada Noche de PhotoPills – La Realidad aumentada Noche te permite visualizar si has conseguido la composición que estás buscando.",
    "caption": "Planificador de PhotoPills – El 30 de agosto a las 23:46pm el núcleo de la Vía Láctea será vertical y estará alineado con el puente. Realidad aumentada Noche de PhotoPills – La Realidad aumentada Noche te permite visualizar si has conseguido la composición que estás buscando."
  },
  {
    "id": "b3-c7-p53-2",
    "chapterNumber": 7,
    "filePath": "/images/book-3/cap-7/p053-im8-2.jpg",
    "altText": "Planificador de PhotoPills – El 30 de agosto a las 23:46pm el núcleo de la Vía Láctea será vertical y estará alineado con el puente. Realidad aumentada Noche de PhotoPills – La Realidad aumentada Noche te permite visualizar si has conseguido la composición que estás buscando.",
    "caption": "Planificador de PhotoPills – El 30 de agosto a las 23:46pm el núcleo de la Vía Láctea será vertical y estará alineado con el puente. Realidad aumentada Noche de PhotoPills – La Realidad aumentada Noche te permite visualizar si has conseguido la composición que estás buscando."
  },
  {
    "id": "b3-c7-p54-1",
    "chapterNumber": 7,
    "filePath": "/images/book-3/cap-7/p054-im29.jpg",
    "altText": "¡El Bardo rezando con una de las camisetas de PhotoPills!",
    "caption": "¡El Bardo rezando con una de las camisetas de PhotoPills!"
  },
  {
    "id": "b3-c7-p55-1",
    "chapterNumber": 7,
    "filePath": "/images/book-3/cap-7/p055-im30.jpg",
    "altText": "Figura de la página 55 — Cómo planificar tus fotos de la Vía Láctea paso a paso.",
    "caption": "Figura de la página 55 — Cómo planificar tus fotos de la Vía Láctea paso a paso.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "35mm",
    "aperture": "f/1.4",
    "shutterSpeed": "13s",
    "iso": "6400"
  },
  {
    "id": "b3-c8-p57-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p057-im31.jpg",
    "altText": "Figura de la página 57 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea.",
    "caption": "Figura de la página 57 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea."
  },
  {
    "id": "b3-c8-p65-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p065-im32.jpg",
    "altText": "Destello de coma meridional. Foto de Christoph Malin",
    "caption": "Destello de coma meridional. Foto de Christoph Malin"
  },
  {
    "id": "b3-c8-p66-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p066-im33.jpg",
    "altText": "Destello de coma sagital, los famosos \"peces\" que presentan los objetivos como el 24mm f/1.4 de Nikon y Canon (excepto el Nikon 14-24mm f/2.8). Foto de Christoph Malin",
    "caption": "Destello de coma sagital, los famosos \"peces\" que presentan los objetivos como el 24mm f/1.4 de Nikon y Canon (excepto el Nikon 14-24mm f/2.8). Foto de Christoph Malin"
  },
  {
    "id": "b3-c8-p68-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p068-im34.jpg",
    "altText": "Normalmente los LEDs pueden adquirirse junto con geles correctores de color.",
    "caption": "Normalmente los LEDs pueden adquirirse junto con geles correctores de color."
  },
  {
    "id": "b3-c8-p69-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p069-im35.jpg",
    "altText": "Figura de la página 69 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea.",
    "caption": "Figura de la página 69 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea."
  },
  {
    "id": "b3-c8-p70-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p070-im36.jpg",
    "altText": "Geles CTO y CTB de diferentes potencias preparados para ser utilizados en una linterna.",
    "caption": "Geles CTO y CTB de diferentes potencias preparados para ser utilizados en una linterna."
  },
  {
    "id": "b3-c8-p71-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p071-im37.jpg",
    "altText": "Geles de diferentes colores.",
    "caption": "Geles de diferentes colores."
  },
  {
    "id": "b3-c8-p75-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p075-im38.jpg",
    "altText": "Nikon AF-S 14-24mm f/2.8 G ED",
    "caption": "Nikon AF-S 14-24mm f/2.8 G ED"
  },
  {
    "id": "b3-c8-p77-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p077-im39.jpg",
    "altText": "Figura de la página 77 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea.",
    "caption": "Figura de la página 77 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea.",
    "cameraModel": "Nikon Z6",
    "lensFocal": "85mm",
    "aperture": "f/1.5",
    "shutterSpeed": "4s",
    "iso": "6400",
    "extraNotes": "3550K Uno de los retratos que hice durante el PhotoPills Camp 2019 (Modelo: Jessica Lancia)."
  },
  {
    "id": "b3-c8-p78-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p078-im40.jpg",
    "altText": "Flash con geles CTO y CTB.",
    "caption": "Flash con geles CTO y CTB."
  },
  {
    "id": "b3-c8-p80-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p080-im41.jpg",
    "altText": "El intervalómetro que utilizo: el Phottix AION.",
    "caption": "El intervalómetro que utilizo: el Phottix AION."
  },
  {
    "id": "b3-c8-p82-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p082-im42.jpg",
    "altText": "Siempre es recomendable llevar contigo varias baterías de repuesto.",
    "caption": "Siempre es recomendable llevar contigo varias baterías de repuesto."
  },
  {
    "id": "b3-c8-p84-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p084-im43.jpg",
    "altText": "Figura de la página 84 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea.",
    "caption": "Figura de la página 84 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea."
  },
  {
    "id": "b3-c8-p85-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p085-im44.jpg",
    "altText": "El sistema que utilizo: un ventilador de PC conectado a una batería portátil.",
    "caption": "El sistema que utilizo: un ventilador de PC conectado a una batería portátil."
  },
  {
    "id": "b3-c8-p86-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p086-im45.jpg",
    "altText": "El ventilador de PC y la batería enganchados al equipo.",
    "caption": "El ventilador de PC y la batería enganchados al equipo."
  },
  {
    "id": "b3-c8-p87-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p087-im46.jpg",
    "altText": "Calentador Dew-Not 3\" DN004 conectado a una batería portátil.",
    "caption": "Calentador Dew-Not 3\" DN004 conectado a una batería portátil."
  },
  {
    "id": "b3-c8-p88-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p088-im47.jpg",
    "altText": "Calentador y batería colocados en el equipo.",
    "caption": "Calentador y batería colocados en el equipo."
  },
  {
    "id": "b3-c8-p90-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p090-im49-1.jpg",
    "altText": "Figura de la página 90 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea.",
    "caption": "Figura de la página 90 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea."
  },
  {
    "id": "b3-c8-p90-2",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p090-im48-2.jpg",
    "altText": "Figura de la página 90 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea.",
    "caption": "Figura de la página 90 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea."
  },
  {
    "id": "b3-c8-p91-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p091-im51-1.jpg",
    "altText": "Figura de la página 91 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea.",
    "caption": "Figura de la página 91 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea."
  },
  {
    "id": "b3-c8-p91-2",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p091-im50-2.jpg",
    "altText": "Figura de la página 91 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea.",
    "caption": "Figura de la página 91 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea."
  },
  {
    "id": "b3-c8-p92-1",
    "chapterNumber": 8,
    "filePath": "/images/book-3/cap-8/p092-im52.jpg",
    "altText": "Figura de la página 92 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea.",
    "caption": "Figura de la página 92 — Todo el equipo que necesitas para fotografiar con éxito la Vía Láctea.",
    "cameraModel": "Nikon D700 + Nikkor 14-24mm f2.8",
    "lensFocal": "14mm",
    "aperture": "f/2.8",
    "shutterSpeed": "30s",
    "iso": "3200 - Nivel de ruido de luminancia y cromático bajo a ISO 3200. Combinación perfecta de cámara y objetivo. Nivel de detalle de las estrellas impecable."
  },
  {
    "id": "b3-c9-p94-1",
    "chapterNumber": 9,
    "filePath": "/images/book-3/cap-9/p094-im30.jpg",
    "altText": "Figura de la página 94 — Cómo fotografiar la Vía Láctea paso a paso.",
    "caption": "Figura de la página 94 — Cómo fotografiar la Vía Láctea paso a paso.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "35mm",
    "aperture": "f/1.4",
    "shutterSpeed": "13s",
    "iso": "6400"
  },
  {
    "id": "b3-c9-p95-1",
    "chapterNumber": 9,
    "filePath": "/images/book-3/cap-9/p095-im53.jpg",
    "altText": "Figura de la página 95 — Cómo fotografiar la Vía Láctea paso a paso.",
    "caption": "Figura de la página 95 — Cómo fotografiar la Vía Láctea paso a paso."
  },
  {
    "id": "b3-c9-p96-1",
    "chapterNumber": 9,
    "filePath": "/images/book-3/cap-9/p096-im54.jpg",
    "altText": "Mi Nikon D700 con el objetivo Nikon 14-24mm f/2.8.",
    "caption": "Mi Nikon D700 con el objetivo Nikon 14-24mm f/2.8."
  },
  {
    "id": "b3-c9-p101-1",
    "chapterNumber": 9,
    "filePath": "/images/book-3/cap-9/p101-im55-1.jpg",
    "altText": "Calculadora de Profundidad de campo - Muestra los valores de la profundidad de campo en una tabla para una cámara determinada, la distancia focal, la apertura y la distancia de enfoque. La distancia hiperfocal aparece en la primera fila. Calculadora de Profundidad de campo - Desliza la tabla hacia la izquierda para ver los valores de la profundidad de campo en una imagen.",
    "caption": "Calculadora de Profundidad de campo - Muestra los valores de la profundidad de campo en una tabla para una cámara determinada, la distancia focal, la apertura y la distancia de enfoque. La distancia hiperfocal aparece en la primera fila. Calculadora de Profundidad de campo - Desliza la tabla hacia la izquierda para ver los valores de la profundidad de campo en una imagen."
  },
  {
    "id": "b3-c9-p101-2",
    "chapterNumber": 9,
    "filePath": "/images/book-3/cap-9/p101-im56-2.jpg",
    "altText": "Calculadora de Profundidad de campo - Muestra los valores de la profundidad de campo en una tabla para una cámara determinada, la distancia focal, la apertura y la distancia de enfoque. La distancia hiperfocal aparece en la primera fila. Calculadora de Profundidad de campo - Desliza la tabla hacia la izquierda para ver los valores de la profundidad de campo en una imagen.",
    "caption": "Calculadora de Profundidad de campo - Muestra los valores de la profundidad de campo en una tabla para una cámara determinada, la distancia focal, la apertura y la distancia de enfoque. La distancia hiperfocal aparece en la primera fila. Calculadora de Profundidad de campo - Desliza la tabla hacia la izquierda para ver los valores de la profundidad de campo en una imagen."
  },
  {
    "id": "b3-c9-p102-1",
    "chapterNumber": 9,
    "filePath": "/images/book-3/cap-9/p102-im57.jpg",
    "altText": "Figura de la página 102 — Cómo fotografiar la Vía Láctea paso a paso.",
    "caption": "Figura de la página 102 — Cómo fotografiar la Vía Láctea paso a paso."
  },
  {
    "id": "b3-c9-p105-1",
    "chapterNumber": 9,
    "filePath": "/images/book-3/cap-9/p105-im58.jpg",
    "altText": "En esta imagen animada puede ver perfectamente que cuanto más tiempo dejes abierto el obturador (30\", 60\", 90\", 120\", 150\", 180\"), más rastros van a dejar las estrellas.",
    "caption": "En esta imagen animada puede ver perfectamente que cuanto más tiempo dejes abierto el obturador (30\", 60\", 90\", 120\", 150\", 180\"), más rastros van a dejar las estrellas."
  },
  {
    "id": "b3-c9-p109-1",
    "chapterNumber": 9,
    "filePath": "/images/book-3/cap-9/p109-im60-1.jpg",
    "altText": "Calculadora de Estrellas como puntos - Determina la cámara, focal, apertura, declinación y precisión (tolerancia) para calcular el tiempo de exposición máximo que evita rastros de estrellas. Realidad aumentada de la Calculadora de Estrellas como puntos - Pulsa el botón RA y apunta el teléfono hacia donde quieres encuadrar. PhotoPills calculará automáticamente los tiempos de exposición máximos tanto para encuadres en horizontal como en vertical.",
    "caption": "Calculadora de Estrellas como puntos - Determina la cámara, focal, apertura, declinación y precisión (tolerancia) para calcular el tiempo de exposición máximo que evita rastros de estrellas. Realidad aumentada de la Calculadora de Estrellas como puntos - Pulsa el botón RA y apunta el teléfono hacia donde quieres encuadrar. PhotoPills calculará automáticamente los tiempos de exposición máximos tanto para encuadres en horizontal como en vertical."
  },
  {
    "id": "b3-c9-p109-2",
    "chapterNumber": 9,
    "filePath": "/images/book-3/cap-9/p109-im59-2.jpg",
    "altText": "Calculadora de Estrellas como puntos - Determina la cámara, focal, apertura, declinación y precisión (tolerancia) para calcular el tiempo de exposición máximo que evita rastros de estrellas. Realidad aumentada de la Calculadora de Estrellas como puntos - Pulsa el botón RA y apunta el teléfono hacia donde quieres encuadrar. PhotoPills calculará automáticamente los tiempos de exposición máximos tanto para encuadres en horizontal como en vertical.",
    "caption": "Calculadora de Estrellas como puntos - Determina la cámara, focal, apertura, declinación y precisión (tolerancia) para calcular el tiempo de exposición máximo que evita rastros de estrellas. Realidad aumentada de la Calculadora de Estrellas como puntos - Pulsa el botón RA y apunta el teléfono hacia donde quieres encuadrar. PhotoPills calculará automáticamente los tiempos de exposición máximos tanto para encuadres en horizontal como en vertical."
  },
  {
    "id": "b3-c9-p115-1",
    "chapterNumber": 9,
    "filePath": "/images/book-3/cap-9/p115-im61.jpg",
    "altText": "Figura de la página 115 — Cómo fotografiar la Vía Láctea paso a paso.",
    "caption": "Figura de la página 115 — Cómo fotografiar la Vía Láctea paso a paso."
  },
  {
    "id": "b3-c11-p121-1",
    "chapterNumber": 11,
    "filePath": "/images/book-3/cap-11/p121-im3.jpg",
    "altText": "Figura de la página 121 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "caption": "Figura de la página 121 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "cameraModel": "Canon 5D Mark III",
    "lensFocal": "24mm",
    "aperture": "f/2.8",
    "shutterSpeed": "30s",
    "iso": "3200",
    "extraNotes": "Panorámica de 10 fotografías Foto de Mark Gee."
  },
  {
    "id": "b3-c11-p122-1",
    "chapterNumber": 11,
    "filePath": "/images/book-3/cap-11/p122-im62.jpg",
    "altText": "Fuji X-E2 | 14mm | f/8 | 30s | ISO 400 Foto de Elia Locardi.",
    "caption": "Fuji X-E2 | 14mm | f/8 | 30s | ISO 400 Foto de Elia Locardi."
  },
  {
    "id": "b3-c11-p123-1",
    "chapterNumber": 11,
    "filePath": "/images/book-3/cap-11/p123-im63.jpg",
    "altText": "Foto de Michael Shainblum.",
    "caption": "Foto de Michael Shainblum."
  },
  {
    "id": "b3-c11-p124-1",
    "chapterNumber": 11,
    "filePath": "/images/book-3/cap-11/p124-im64.jpg",
    "altText": "Figura de la página 124 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "caption": "Figura de la página 124 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "cameraModel": "Nikon D800",
    "lensFocal": "14mm",
    "aperture": "f/3.2",
    "shutterSpeed": "30s",
    "iso": "5000 Foto de Daniel Kordan."
  },
  {
    "id": "b3-c11-p125-1",
    "chapterNumber": 11,
    "filePath": "/images/book-3/cap-11/p125-im65.jpg",
    "altText": "Figura de la página 125 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "caption": "Figura de la página 125 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "cameraModel": "Canon 1D X Mark II",
    "lensFocal": "14mm",
    "aperture": "f/1.8",
    "shutterSpeed": "8s",
    "iso": "3200 Foto de Eric Paré."
  },
  {
    "id": "b3-c11-p126-1",
    "chapterNumber": 11,
    "filePath": "/images/book-3/cap-11/p126-im66.jpg",
    "altText": "Figura de la página 126 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "caption": "Figura de la página 126 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "cameraModel": "Sony a7S",
    "lensFocal": "50mm",
    "aperture": "f/4",
    "shutterSpeed": "10s",
    "iso": "12800",
    "extraNotes": "Panorámica de 12 fotografías Foto de Ian Norman."
  },
  {
    "id": "b3-c11-p127-1",
    "chapterNumber": 11,
    "filePath": "/images/book-3/cap-11/p127-im68-1.jpg",
    "altText": "Figura de la página 127 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "caption": "Figura de la página 127 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "cameraModel": "Sony A7R II",
    "lensFocal": "14mm",
    "aperture": "f/1.8",
    "shutterSpeed": "25s",
    "iso": "3200",
    "extraNotes": "Panorámica de varias fotografías Foto de Albert Dros. Canon 5D Mark III · 14mm · 15s · Panorámica de 38 fotografías Foto de José Antonio Hervás."
  },
  {
    "id": "b3-c11-p127-2",
    "chapterNumber": 11,
    "filePath": "/images/book-3/cap-11/p127-im67-2.jpg",
    "altText": "Figura de la página 127 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "caption": "Figura de la página 127 — 10 imágenes de la Vía Láctea que te inspirarán."
  },
  {
    "id": "b3-c11-p128-1",
    "chapterNumber": 11,
    "filePath": "/images/book-3/cap-11/p128-im70-1.jpg",
    "altText": "Figura de la página 128 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "caption": "Figura de la página 128 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "cameraModel": "Sony A7R III",
    "lensFocal": "16mm",
    "aperture": "f/2.8",
    "shutterSpeed": "20s",
    "iso": "2500",
    "extraNotes": "Panorámica de varias fotografías Foto de Sean Parker. Nikon D700 · 14mm · 30s (cielo) y 241s (suelo) · 13 posiciones en un Panoneed para conseguir una esfera completa Foto de Aaron D. Priest."
  },
  {
    "id": "b3-c11-p128-2",
    "chapterNumber": 11,
    "filePath": "/images/book-3/cap-11/p128-im69-2.jpg",
    "altText": "Figura de la página 128 — 10 imágenes de la Vía Láctea que te inspirarán.",
    "caption": "Figura de la página 128 — 10 imágenes de la Vía Láctea que te inspirarán."
  }
];

export const BOOK_3_BLOCKS: Record<number, SeedBlockInput[]> = {
  "0": [
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Y si te dijera que eres capaz de imaginar, planificar y hacer fotografías de la Vía Láctea que convertirán a tus seguidores en auténticas máquinas de compartir? ¿Te lo creerías?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hoy en día, casi todo el mundo puede hacer fotos de la Vía Láctea, incluso muy buenas fotos. Y es que la fotografía nocturna en general, y la fotografía de Vía Láctea en particular, se han convertido en muy populares."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Lo vemos a diario, las redes sociales se llenan de multitud de magníficas fotos de la Vía Láctea, publicadas por grandes fotógrafos que esperan que su trabajo sea compartido masivamente."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por desgracia, la triste realidad es que sólo algunos logran convertir sus imágenes en virales. ¿Por qué? Una posible respuesta es lo que se denomina la notabilidad inherente."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El experto en transmisión social, Jonah Berger, en su libro 'Contagious: why things catch on', sostiene que:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "6"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c0-p6-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"Las cosas notables proporcionan lo que se llama valor social, porque hacen que las personas que hablan de ellas parezcan, bueno, más notables [...] Compartir historias o anuncios extraordinarios, novedosos o divertidos hace que las personas parezcan más extraordinarias, novedosas y divertidas [...] No es de extrañar por tanto que las cosas notables consigan convertirse en virales más a menudo.\" Por lo tanto, ¿cómo puedes hacer fotografías que la gente quiera compartir? El mismo principio de notabilidad inherente es aplicable. Hacer fotos magníficas no es suficiente, necesitas que sean verdaderamente notables."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La intención de este artículo es ayudarte a contar mejores historias a través de tus fotos de la Vía Láctea, para que tu mensaje llegue a más gente."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En una época en que Whatsapp, las redes sociales y la televisión luchan continuamente por capturar nuestra atención –y cuando todos los días se publican más imágenes de las que podremos ver en nuestra vida– si quieres que tu trabajo salte a la luz, debes aprender a capturar fotografías realmente impresionantes que tus amigos y seguidores no puedan evitar compartir y hablar de ellas... Ellos difundirán tu historia, tu mensaje ;)"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Así que..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En esta guía, encontrarás todo lo que necesitas para convertir tus ideas fotográficas de la Vía Láctea en imágenes realmente legendarias..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Todo!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Fotos de la Vía Láctea para inspirarte, un calendario con los mejores meses de 2026 en los que puedes fotografiar la Vía Láctea y cómo usar la app PhotoPills para planificar cualquier foto de la Vía Láctea que imagines..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "O lo que es lo mismo, para encontrar el punto de disparo exacto y la fecha y hora exactas en que la escena con la Vía Láctea que imaginas sucede realmente. ¡Así podrás ir y capturarla!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además de todo el equipo que necesitas y cómo usarlo paso a paso para fotografiar la Vía Láctea."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y por supuesto, esto incluye los parámetros de cámara que debes usar."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Todo esto te quedará más claro conforme vayas leyendo este artículo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Preparado?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"No se puede enseñar nada a un hombre; sólo se le puede ayudar a encontrar la respuesta dentro de sí mismo.\" - Galileo Galilei 7"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c0-sec-1",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Por Qué tu Sony Alpha 7 IV es una Reina de la Astrofotografía de Paisaje",
        "summary": "El sensor Full-Frame Exmor R retroiluminado (BSI) de 33 MP de la Sony Alpha 7 IV está diseñado para brillar en la oscuridad extrema de la Vía Láctea:",
        "bulletPoints": [
          "Tecnología BSI (Back-Illuminated) sin filtro paso bajo agresivo: maximiza la captación de fotones débiles del Centro Galáctico.",
          "Segundo escalón de ISO Nativo en ISO 800: al disparar a ISO 800, 1600, 3200 o 6400 se activa el circuito de alta ganancia con una caída drástica del ruido de lectura en sombras nocturnas.",
          "Función exclusiva [Atención al brillo (Bright Monitoring)] para componer el paisaje y la Vía Láctea en vivo en plena noche sin hacer disparos de prueba."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654705.html",
        "manualLabel": "Manual Sony A7 IV — Atención al Brillo (Bright Monitoring) para Noche",
        "cameraPath": "MENU → Ajuste → Personal. operación → Ajuste tecla perso. → [Atención al brillo]"
      }
    }
  ],
  "1": [
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Conoces a Mark Gee? Tal vez no. Es un extraordinario fotógrafo que vive en Wellington, Nueva Zelanda."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Déjame que te cuente su asombrosa historia."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La imaginación y persistencia de Mark Gee no tiene límite. Puede que no lo creas, pero ese es motivo de que su carrera, tanto en cine como en fotografía, haya sido un éxito."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Habiendo trabajado en películas como 'El Hobbit', 'El Señor de los Anillos' o 'Avatar', el punto culminante de su carrera fotográfica ocurrió hace relativamente poco tiempo. No sólo resultó ganador en dos categorías del prestigioso concurso Astronomy Photographer of the year 2013, sino que también ganó en la categoría principal con su imagen única:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "'Guiding Light To The Stars' ('Guiando la luz hacia las estrellas')."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "'Guiding Light To The Stars' es una historia llena de fantasía."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cada vez que miro esta imagen contagiosa no puedo evitar sumergirme en un mundo imaginario..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Y si las estrellas deben toda su belleza a un pequeño faro perdido en algún lugar de Nueva Zelanda?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Crees que estoy loco? Puede que un poco... ¡No me culpes por ello!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Desde el punto de vista compositivo, la imagen es un impresionante panorama del arco de la Vía Láctea sobre la costa de la Isla Norte de Nueva Zelanda. Observa la forma en que la"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c1-p10-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Vía Láctea parece emanar del faro, uniendo las estrellas y el paisaje. En medio de la imagen puedes ver el Centro Galáctico, la parte más brillante de nuestra galaxia."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero la idea que hizo que su trabajo saltara a la fama fue su vídeo viral: 'Full Moon Silhouettes'. Mark explica así cómo sucedió:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"Quería grabar en vídeo el momento de la Luna saliendo y creando lentamente las siluetas de la gente en un mirador de Wellington, Nueva Zelanda. Todo resultó mucho más difícil de lo que pensaba en un principio, tuve un montón de intentos fallidos. Pero finalmente, después de un año intentándolo, me las arreglé para conseguir algo que superaría todas mis expectativas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Estuve despierto hasta las 3 de la madrugada para encontrar la música adecuada para el vídeo que acababa de grabar, editarlo y subirlo a Vimeo. Lo llamé 'Full Moon Silhouettes' (aunque técnicamente lo grabé un día después de la Luna Llena)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando me desperté más tarde ese día, mi bandeja de entrada estaba llena de cientos de correos electrónicos de personas de todo el mundo que me escribían dándome las gracias por haber hecho el vídeo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Había llegado a los corazones de la gente de una forma que nunca hubiera podido imaginar, y ahí estaban, compartiendo sus sensaciones conmigo. Este fue, sin lugar a dudas, uno de los mejores momentos de mi vida, nunca lo olvidaré."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si te apetece leer una explicación detallada sobre cómo Mark Gee imaginó, planificó y grabó el vídeo 'Full Moon Silhouettes', echa un vistazo al artículo \"To the Moon and Back\" (en inglés)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y si te dijera que Mark empezó su carrera fotográfica en el 2009, ¿me creerías? ¡Apuesto a que no!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pues, lo creas o no, es la verdad. Tras 4 años de carrera fotográfica, Mark Gee demostró que no es necesario ser un maestro con una dilatada experiencia para crear imágenes contagiosas. La realidad es que sólo necesitas tener una historia extraordinaria que contar... y una motivación infinita."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Así es que cree en ti mismo... ¡Tú también puedes hacerlo!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Ah! Por cierto... Si quieres aprender a fotografiar la Vía Láctea cara a cara con algunos PhotoPills Masters como Mark Gee, el equipo de PhotoPills y un grupo selecto de PhotoPillers como tú, ¡deberías apuntarte al PhotoPills Camp! ;)"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c1-p12-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c1-p13-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c1-sec-1",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Panorámicas del Arco de la Vía Láctea (Estilo Mark Gee) con tu Sony Alpha 7 IV",
        "summary": "Para capturar un arco completo de la Vía Láctea como 'Guiding Light To The Stars' uniendo múltiples tomas verticales con tu Sony Alpha 7 IV:",
        "bulletPoints": [
          "Desactiva la estabilización SteadyShot ([SteadyShot → Desactivar]) cuando la cámara esté fija sobre la rótula panorámica.",
          "Desactiva [RR Exp. Larga → Desactivar] para no esperar el doble de tiempo entre cada panel del panorama (si tardas demasiado entre foto y foto, las estrellas se desplazarán dificultando el cosido en PTGui o Lightroom).",
          "Activa el [Nivel digital] pulsando el botón DISP para nivelar perfectamente la base antes de girar."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000656436.html",
        "manualLabel": "Manual Sony A7 IV — Reducción de Ruido en Larga Exposición",
        "cameraPath": "MENU → Toma → Calidad imagen → RR Exp. Larga (Desactivar para panorámicas)"
      }
    }
  ],
  "2": [
    {
      "sectionAnchor": "b3-c2-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"La calidad de la imagen no es el producto de una máquina, sino de la persona que dirige la máquina, y no hay límites a la imaginación y expresión.\" - Ansel Adams ¡Piensa en grande!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c2-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Resulta que, si quieres que tus fotos se conviertan en virales, necesitas que la gente se vuelva loca con ellas, que se enamoren de ellas. La buena noticia es que tienes todo lo que necesitas: tu lado creativo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c2-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sí, claro que vas a necesitar dominar las técnicas fotográficas necesarios pero, como Mark Gee demostró, la creatividad marca la diferencia."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c2-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Por dónde deberías empezar? No dejes que el crítico que se esconde en tu interior, tu mente analítica, se haga con el control... Piensa en grande, céntrate y deja volar tu imaginación."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c2-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c2-p15-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b3-c2-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sumérgete en el proceso creativo, encuentra una localización especial e investiga. Averigua la historia que esconde, la emoción que evoca. Tu objetivo es hacerte con una historia única que contar, una emoción profunda que quieras evocar, un mensaje singular que tratarás de transmitir combinando una técnica, una composición y una localización potentes."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c2-sec-1",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Encuadrando en la Oscuridad Total con [Atención al brillo (Bright Monitoring)]",
        "summary": "Uno de los mayores obstáculos al buscar composiciones originales de noche es que la pantalla se ve completamente negra. En tu Sony Alpha 7 IV tienes un superpoder:",
        "bulletPoints": [
          "Asigna [Atención al brillo] a un botón personalizado (por ejemplo C1 o C3).",
          "Al pulsarlo en mitad de la noche, la cámara amplifica electrónicamente la ganancia del visor/pantalla a baja velocidad de refresco, permitiéndote ver las rocas, árboles, ermitas y la propia banda de la Vía Láctea en tiempo real mientras mueves el trípode."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654705.html",
        "manualLabel": "Manual Sony A7 IV — Uso de Atención al Brillo en Escenas Nocturnas",
        "cameraPath": "MENU → Ajuste → Personal. operación → Ajuste tecla perso. → [Atención al brillo]"
      }
    }
  ],
  "3": [
    {
      "sectionAnchor": "b3-c3-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El Sol y la Luna son elementos fotográficos muy potentes que puedes incluir en tus imágenes para transmitir mejor el mensaje, al mismo tiempo que añades interés y misterio."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c3-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero la Vía Láctea multiplica las posibilidades... ¡Aprovéchate de ella!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c3-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Al igual que las estrellas se van moviendo, la Vía Láctea se desplaza en el cielo siguiendo la rotación de la Tierra."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c3-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Esto significa que tendrás diferentes composiciones en diferentes momentos de la noche. Puedes conseguir la Vía Láctea arqueándose sobre el paisaje, perfecta para una panorámica. O puedes conseguir que la parte más brillante (Centro Galáctico) esté en vertical, diagonal u horizontal."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c3-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Seguro que se te ocurrirán un montón de ideas con diferentes composiciones."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c3-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Normalmente conoces la posición exacta que quieres que ocupe el Centro Galáctico en la imagen, pero desconoces si la escena que te imaginas es posible ni cuando sucede. No hay ningún secreto: la clave para fotografiar las estrellas es la planificación."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c3-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Gracias a la tecnología, los viejos tiempos en los que tenías que hacer todos los cálculos a mano, o repetir en innumerables ocasiones el típico prueba y error, han quedado atrás. Hoy en día cuentas con poderosas herramientas como PhotoPills que te facilitan muchísimo la planificación."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c3-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Aquí tienes 2 tutoriales completos que te ayudarán a planificar fácilmente cualquier foto de la Vía Láctea que imagines:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c3-sec-1",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Cómo planificar la Vía Láctea con el planificador 2D"
            }
          ],
          [
            {
              "text": "Cómo planificar la Vía Láctea con la Realidad aumentada ¡Ya no tienes excusas!"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c3-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Consulta la sección 6 para aprender a planificar la Vía Láctea con PhotoPills. Ahí encontrarás una explicación detallada con un ejemplo real, donde utilizo el Planificador junto con la capa de Vía Láctea y la Realidad aumentada Noche."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c3-sec-1",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b3-c3-p19-1",
        "rightAssetId": "b3-c3-p19-2"
      }
    },
    {
      "sectionAnchor": "b3-c3-sec-1",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Protege tu Visión Nocturna Ajustando el Brillo del Visor y Pantalla en la Sony Alpha 7 IV",
        "summary": "Cuando tus ojos se adaptan a la oscuridad (tardan unos 20–30 minutos), una pantalla LCD brillante arruina tu visión nocturna y te engaña haciéndote creer que la foto está más expuesta de lo que realmente está:",
        "bulletPoints": [
          "Cambia [Brillo de monitor] de [Manual ±0] a [Manual -2] antes de empezar tu sesión de Vía Láctea.",
          "Nunca confíes en el brillo visual de la pantalla en plena noche; verifica siempre el histograma en pantalla para asegurarte de que la montaña de datos no esté aplastada contra el borde izquierdo."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654803.html",
        "manualLabel": "Manual Sony A7 IV — Ajuste de Brillo del Monitor y Visor",
        "cameraPath": "MENU → Ajuste → Monitor/Visor → Brillo de monitor (Manual -2)"
      }
    }
  ],
  "4": [
    {
      "sectionAnchor": "b3-c4-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Cuándo deberías empezar a buscar el centro de la Vía Láctea? ¿Cuándo va a ser visible? O mejor aún, ¿cuándo es el mejor momento del año para fotografiar la Vía Láctea?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En realidad, la Vía Láctea es visible todos los días por la noche. Eso si no estás en una zona con mucha contaminación lumínica, claro..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sin embargo, su núcleo, la parte más brillante de la Vía Láctea, la zona más espectacular...."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En resumen, la parte de la Vía Láctea que quieres tener en tus fotos, no siempre es visible."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Así que solemos decir que ¡hay una temporada de caza para la Vía Láctea!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Durante una parte del año el centro de la Vía Láctea no es visible ya que la luz del Sol lo oculta."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Por qué sucede esto?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Porque el Centro Galáctico sólo está por encima del horizonte durante el día."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando planificas fotografiar la Vía Láctea, debes"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-1",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Averiguar el periodo del año en el que el Centro Galáctico es visible durante la noche, y luego"
            }
          ],
          [
            {
              "text": "Comprueba el calendario de Luna de PhotoPills (y las horas de salida y puesta de Luna) para elegir la fecha en la que no haya Luna por la noche. O, si quieres que la Luna te ayude a iluminar el primer plano, elige la fecha de la fase lunar que mejor se adapte a tus necesidades."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para reducir la búsqueda y obtener resultados rápidamente, necesitas saber las fechas de principio y fin de la mejor época del año para fotografiar la Vía Láctea."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Y eso cuándo es?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Hemisferio norte",
        "anchor": "b3-c4-sec-2"
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En el hemisferio norte, el Centro Galáctico el núcleo empieza a ser visible a finales de enero, aunque durante muy poco tiempo. Dependiendo de dónde estés, tendrás que esperar hasta febrero o incluso marzo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El núcleo no es visible en noviembre, diciembre y principios de enero."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Al principio de la temporada de Vía Láctea, el Centro Galáctico es visible en las horas previas al amanecer, justo antes de la salida del Sol, y se mantiene por encima del horizonte durante el día. Conforme van pasando los meses, cada vez es visible durante más tiempo cada noche, siendo junio y julio los meses con el máximo tiempo de visibilidad. Durante esta época del año, el Centro Galáctico es visible durante toda la noche."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "A partir de julio, su visibilidad empieza a disminuir y el mejor momento para observarlo es después del crepúsculo, hasta que se vuelve totalmente invisible en invierno (noviembre)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c4-p22-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ahora, presta atención. ¡Esto es importante!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como pasa con la constelación de Sagitario, el Centro Galáctico sólo es visible desde latitudes comprendidas entre +55º y -90º."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si vives en latitudes por encima de los +55º, no podrás ver el Centro Galáctico."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Eso sí, podrás ver parte del núcleo de la Vía Láctea. Los mejores momentos para verlo suceden justo antes y justo después del verano. Durante el verano, el crepúsculo astronómico nunca termina, por lo que nunca se hará completamente de noche."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Hemisferio sur",
        "anchor": "b3-c4-sec-3"
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En el hemisferio sur, el Centro Galáctico es visible también desde finales de enero a octubre."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero aquí puedes disfrutar de mejores condiciones que en el hemisferio norte. Gran parte de la temporada de Vía Láctea cae en invierno, donde las frías temperaturas te ayudarán a obtener estrellas nítidas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "De nuevo, el Centro Galáctico no es visible de noviembre a enero."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si vives en el hemisferio sur puedes disfrutar de una visibilidad mayor porque el pico se produce en invierno, cuando los días son más cortos y las noches más largas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Todas estas indicaciones sobre la visibilidad del Centro Galáctico para los hemisferios norte y sur son sólo información cualitativa, no son cifras exactas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si quieres conocer con exactitud cómo cambian a lo largo del tiempo la hora y dirección del Centro Galáctico en una localización determinada, deberías activar la capa de Vía Láctea, en el Planificador y mover el tiempo de forma contínua para ver cómo evoluciona la visibilidad. Echa un vistazo a la sección 7 para aprender cómo planificar la Vía Láctea ;)"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para entender mejor lo que quiero decir, estudia el siguiente vídeo. Verás cómo cambia el tiempo y la dirección de visibilidad del Centro Galáctico a lo largo de 2015 en Delicate Arch, en Arches National Park, Utah (EE. UU.)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Aunque los datos son de 2015, siguen siendo válidos porque el patrón es el mismo todos los"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c4-p24-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "años."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Visibilidad del Centro Galáctico en Delicate Arch en 2015 (38.743611º, -109.499444º):"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Tiempo total de visibilidad: 988,31 horas"
            }
          ],
          [
            {
              "text": "Pico de visibilidad: 5,63 horas, 27 de mayo"
            }
          ],
          [
            {
              "text": "Azimut de visibilidad mínimo: 127.8º"
            }
          ],
          [
            {
              "text": "Azimut de visibilidad máximo: 232.2º"
            }
          ],
          [
            {
              "text": "Temporada de caza: Enero 7 38 horas Febrero 44 62 horas Marzo 87 94 horas Abril 118 9 horas Mayo 159 16 horas Junio 157 63 horas continué en la próxima página"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c4-p25-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Tabla 1 – proviene de la página anterior Julio 156 64 horas Agosto 119 06 horas Septiembre 82 1 horas Octubre 47 89 horas Noviembre 6 99 horas Deciembre 0 0 horas"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c4-sec-3",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Configuración de Fecha, Hora y Zona Horaria Exacta en tu Sony Alpha 7 IV",
        "summary": "Al planificar la alineación exacta del Centro Galáctico en el calendario 2026, tus metadatos EXIF y sincronización con PhotoPills dependen del reloj interno de la cámara:",
        "bulletPoints": [
          "Verifica en [Ajuste área/fecha/hora] que el horario de verano (DST) esté correctamente configurado antes de tu salida nocturna.",
          "Puedes vincular tu Sony Alpha 7 IV por Bluetooth con la app Creators' App en tu teléfono para incrustar automáticamente las coordenadas GPS exactas de tu localización nocturna en cada archivo ARW."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654815.html",
        "manualLabel": "Manual Sony A7 IV — Vinculación de Información de Ubicación (GPS vía Smartphone)",
        "cameraPath": "MENU → Red → Conex./PC rem. → Vinc. info ubicación"
      }
    }
  ],
  "5": [
    {
      "sectionAnchor": "b3-c5-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La razón por la que la mayoría de fotógrafos mantienen sus mejores localizaciones en secreto, es que un lugar sin explotar, lleno de elementos fotogénicos, puede hacerte ganar un concurso de prestigio. Tan simple como eso."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una segunda razón es que la búsqueda de buenas localizaciones lleva mucho tiempo e incluso dinero. Llevo más de 20 años viviendo en una pequeña isla perdida en el Mar Mediterráneo y, aunque he explorado cuidadosamente la mayor parte, encontrando muchas localizaciones alucinantes en este tiempo, tengo la impresión de que la mejor localización todavía está por llegar."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Así es que, ¿cómo tiene que ser una localización perfecta para fotografiar la Vía Láctea?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "No hay contaminación lumínica",
        "anchor": "b3-c5-sec-2"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "A menos que quieras incluir en tu composición las luces artificiales de la ciudad, tendrás que investigar y averiguar dónde están las localizaciones con cielos oscuros más cercanas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Dependiendo de donde vivas, puede ser muy difícil encontrar localizaciones con poca contaminación lumínica. Estas son algunas fuentes que pueden ayudarte a encontrarlas:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-2",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Blue Marble de la NASA: Esta web utiliza la interfaz de Google Maps junto con la imagen de la Nasa Luces de la noche más reciente. Puedes navegar por el mapa a una resolución máxima de cuatro píxeles por km², así como por un mapa de luces"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c5-p28-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "nocturnas un poco más burdo, etiquetado con los nombres de las ciudades y las fronteras nacionales."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-2",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "The World At Night (TWAN): Tiene uno de los mayores archivos de imágenes de paisajes astronómicos ordenadas por regiones."
            }
          ],
          [
            {
              "text": "Localizaciones internacionales Dark Sky: Me encanta la iniciativa de esta gente. La International Dark Sky Association promueve la preservación y protección de la noche oscura en todo el planeta para que las futuras generaciones puedan disfrutar de las estrellas. Encontrarás 5 tipos de zonas en su base de datos: comunidades, parques, reservas, santuarios y localizaciones urbanas. Estas áreas albergan algunos de los cielos más oscuros del planeta."
            }
          ],
          [
            {
              "text": "Lista de observatorios de la Wikipedia: Los observatorios están ubicados en zonas con cielos sin contaminación lumínica. Merece la pena saber dónde están para encontrar cielos limpios y completamente oscuros."
            }
          ],
          [
            {
              "text": "Busca asociaciones locales de astronomía: hay aficionados a la astronomía en todas partes. Asegúrate de pedirles consejo. La mayoría de ellos estarán encantados de compartir su amor por la astronomía desvelándote dónde encontrar las mejores localizaciones de la zona."
            }
          ],
          [
            {
              "text": "Light Pollution Map (también disponible en iOS y Android) te ayuda a localizar cielos oscuros cercanos para disfrutarlos con un telescopio, observar lluvias de estrellas, o simplemente relajarte bajo las estrellas. Ofrece mapas de contaminación lumínica de todo el mundo, junto con las mejores localizaciones para la observación de las estrellas."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Quieres saber cómo es un cielo limpio y completamente oscuro?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Echa un vistazo a esta obra de arte de Christoph Malin. Descubrirás cómo se ve el cielo en el Desierto de Atacama y el Observatorio Europeo Astral... Un lugar privilegiado para la observación de las estrellas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Incluye un punto de interés",
        "anchor": "b3-c5-sec-3"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Elige una localización que tenga al menos un hito interesante que te inspire."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Incluirlo en la composición te ayudará a vincular el paisaje con el cielo de una manera creativa, lo que contribuirá a capturar la atención del espectador."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Estos son algunos de mis puntos de interés favoritos. ¡Intenta practicar con ellos!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c5-p30-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-4",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Rocas",
        "anchor": "b3-c5-sec-4"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Son uno de los elementos más impresionantes y hermosas de la naturaleza. Todo lo relacionado con las rocas transmite poder, aislamiento y desafío."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Las formaciones rocosas fueron creándose lentamente por la acción del calor, el viento, la lluvia y otras fuerzas erosivas, durante millones de años."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Puedes encontrarlas en multitud de posiciones diferentes. Personalmente, prefiero las que están aisladas porque me transmiten un mayor dramatismo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Supongo que no es difícil encontrar una roca interesante cerca de dónde vives. Si no es así, puedes probar suerte con la lista de las mejores formaciones rocosas de la Wikipedia."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-5",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Arcos y puentes naturales",
        "anchor": "b3-c5-sec-5"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Estas maravillosas estructuras de piedra, esculpidas por la naturaleza, son puertas al cielo... Y a veces pueden ser puertas al infierno."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-5",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c5-p31-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-5",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c5-p31-2",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los puentes naturales están formados por la erosión del agua en movimiento. Son mucho menos frecuentes que los arcos, que son el resultado de una combinación de otras fuerzas erosivas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si no tienes la suerte de vivir cerca de una de estas maravillas naturales, te recomiendo que te sumerjas en la red en busca de alguno que no esté demasiado lejos. Comprueba la lista de los arcos naturales que hay en la Wikipedia."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si vives en EE. UU., no te pierdas Arches National Park (Utah). Con más de 2.000 arcos clasificados, monolitos masivos y altísimos muros, es un sueño hecho realidad para los fotógrafos nocturnos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-6",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Faros",
        "anchor": "b3-c5-sec-6"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Algunos de los edificios más pintorescos son faros. Algunos de ellos han sido cruciales en muchas guerras, sufriendo las dramáticas consecuencias al estar en el campo de batalla."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si investigas su pasado encontrarás sorprendentes misterios e historias escondidas tras sus muros. Acércate a uno faro cercano y descubre sus secretos o busca un faro singular"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-6",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c5-p32-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "en la lista de faros en la Wikipedia (en inglés) y encuentra uno que te inspire."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-7",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Árboles",
        "anchor": "b3-c5-sec-7"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sólo dos palabras: organismos fascinantes. Son estructuras poderosas que añaden interés a tu imagen y dominan la escena cuando se fotografían en solitario."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Busca un árbol solitario. Te ayudará a romper el horizonte y establecer una escala en la imagen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los árboles pueden ser inusuales debido a su biología o porque los humanos los han cambiado de alguna manera. Te dejo una lista de árboles particularmente inusuales en la Wikipedia (en inglés)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-8",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Construcciones antiguas",
        "anchor": "b3-c5-sec-8"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-8",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c5-p33-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-8",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c5-p33-2",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Algunos dicen que estas viejas construcciones de piedra fueron construidas por civilizaciones antiguas. Otros, más escépticos acerca de la capacidad tecnológica de los hombres, que fueron construidas por extraterrestres."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Desconozco tu opinión sobre estas teorías, pero la verdad es que una foto de cualquiera de estas construcciones captará la atención de todos. Es como si conectaras dos mundos: las culturas antiguas y las naciones alienígenas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "De entre todos los tipos de construcciones antiguas, mis favoritas son las megalíticas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Un megalito es una gran piedra que se ha utilizado para construir una estructura o monumento, ya sea solo o junto con otras piedras. La palabra \"megalítica\" describe las estructuras hechas con piedras grandes, utilizando un sistema de enclavamiento en lugar de mortero o cemento."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Stonehenge en Reino Unido y la Naveta d'Es Tudons en nuestra preciosa isla de Menorca (España) son buenos ejemplos de construcciones megalíticas. Puedes encontrar más ejemplos en la lista de los edificios más antiguos del mundo en la Wikipedia (en inglés)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-9",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Modelos",
        "anchor": "b3-c5-sec-9"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Añadir un modelo en la mezcla puede ser un reto, pero también muy gratificante. A veces, la historia que quieres contar necesita la ayuda de una figura humana para completarla."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Estos son sólo algunos consejos para inspirarte, pero puedes usar otros elementos como los molinos de viento, lagos para crear reflejos, vehículos o máquinas abandonados..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Aprovecha lo que tengas cerca de tu casa."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-9",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c5-p35-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-10",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Encuentra una localización que esconda una historia",
        "anchor": "b3-c5-sec-10"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-10",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los cementerios, campos de batalla, pueblos fantasma, volcanes, cráteres y desiertos tienen una atmósfera hipnótica que atrae la atención de muchos fotógrafos valientes que buscan algo nuevo para estimular su creatividad fotográfica. A veces, visitar los mismos lugares o hacer el mismo tipo de fotografías puede ser muy aburrido."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-10",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Por qué no pruebas algo nuevo?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-11",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Utiliza cualquier fuente de información disponible",
        "anchor": "b3-c5-sec-11"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una de las principales tareas durante la planificación es la investigación. Eso significa que tienes que pasar el tiempo que haga falta buscando hasta que encuentres lo que necesitas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y para ello, te sugiero que uses cualquier fuente de información disponible."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-11",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Ver fotos de otros fotógrafos es la mejor fuente de inspiración. Puedes consultar Instagram, Flickr, 500px, Unsplash, Getty Images, 1x.com, Viewbug, Pexels, Youpic,"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-11",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c5-p36-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Shutterstock, Adobe Stock y Google Images."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-11",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Aprovecha localizaciones hayan descubierto y explorado otros fotógrafos. Existen comunidades, como Locationscout y ShotHotspot, en las que se comparte esta información."
            }
          ],
          [
            {
              "text": "Estudia a conciencia publicaciones como revistas de viaje (National Geographic, Condé Nast Traveler y Travel + Leisure), contenido de viajes curado (Exposure), guías de viaje (Lonely Planet) y la sección de fotografía de periódicos como The Atlantic, The Guardian y The New York Times."
            }
          ],
          [
            {
              "text": "Busca en las galerías de las páginas web de tus fotógrafos favoritos. Un buen ejemplo son las páginas web de los PhotoPills Masters que participan en el PhotoPills Camp."
            }
          ],
          [
            {
              "text": "La Wikipedia y sus listas de lugares interesantes es una fuente de información inagotable. ¿Estás buscando faros? Teclea en Google \"lista faros Wikipedia\" y analiza los resultados."
            }
          ],
          [
            {
              "text": "Pregunta a los locales, son los que mejor conocen la zona y quienes te podrán dar buenos consejos."
            }
          ],
          [
            {
              "text": "Los libros también te pueden servir de ayuda para conocer la historia local y la biodiversidad natural de una zona o de una localidad."
            }
          ],
          [
            {
              "text": "No dejes de visitar el Ayuntamiento o la oficina de turismo de esa ciudad o pueblo. Seguro que te llevas una sorpresa."
            }
          ],
          [
            {
              "text": "Comprueba los Puntos de interés (PDIs) incluidos en PhotoPills."
            }
          ],
          [
            {
              "text": "Y por último, lo más importante, lánzate a explorar el territorio. Muchas veces es el método más efectivo :) ¿A qué esperas?"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Ve y encuentra una localización inexplorada!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-12",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Añade una estrella fugaz",
        "anchor": "b3-c5-sec-12"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los meteoritos convertirán una buena imagen de la Vía Láctea en otra espectacular. Así es que, cuando se acerque una lluvia de meteoritos, asegúrate de estar listo para entrar en acción."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Echa un vistazo a nuestra guía sobre fotografía de lluvias de estrellas. Encontrarás todo lo que necesitas, desde cuándo suceden a cómo fotografiarlas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Durante una lluvia de meteoritos, observararás como éstos irradian de un solo punto del cielo. Los meteoritos son el resultado de las corrientes de desechos cósmicos entrando en la atmósfera de la Tierra a velocidades extremadamente altas. Los fragmentos más pequeños se queman en la atmósfera produciendo una \"estrella fugaz\", pero los más grandes pueden realmente producir una impresionante gran bola de fuego."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-12",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c5-p38-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Producidas por el cometa Swift-Tuttle, las Perseidas son una de las mejores lluvias de meteoritos que se pueden observar, con un máximo de 100 meteoros por hora. La lluvia sucede anualmente desde mediados de julio a finales de agosto. Pero durante el año hay muchas más lluvias de estrellas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Cuáles? De nuevo, consulta nuestra guía sobre fotografía de lluvias de estrellas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si tienes la suerte de capturar muchos meteoros puedes utilizar la técnica de procesado que aparece en esta Masterclass de lluvia de estrellas (en inglés) y conseguir un efecto espectacular."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c5-sec-12",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Balance de Blancos Manual en Kelvin (3700K – 4000K) contra la Contaminación Lumínica",
        "summary": "En localizaciones con ligera contaminación lumínica en el horizonte o resplandor atmosférico (airglow), el Balance de Blancos Automático (AWB) de la cámara suele teñir el cielo de tonos anaranjados o verdosos:",
        "bulletPoints": [
          "En tu Sony Alpha 7 IV, selecciona [Balance de blancos → Temperatura color] y ajústalo entre 3700K y 4000K para obtener un cielo nocturno azul profundo natural y resaltar los tonos cálidos del Centro Galáctico.",
          "Como disparas en RAW (ARW), este ajuste es reversible en posprocesado, pero te dará una previsualización perfecta en campo en cada toma."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000656445.html",
        "manualLabel": "Manual Sony A7 IV — Balance de Blancos por Temperatura de Color (Kelvin)",
        "cameraPath": "Botón Fn → Balance de blancos → [Temp. color] (3800K – 4000K)"
      }
    }
  ],
  "6": [
    {
      "sectionAnchor": "b3-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Digamos que después de haber visitado una infinidad de localizaciones, por fin has encontrado la que te inspira. Estás listo para dejar volar tu imaginación..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero ¡espera! No corras tanto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Antes de empezar la lluvia de ideas y de que te pongas a planificar como un loco, hay 3 cosas esenciales sobre la Vía Láctea que te ayudarán a dirigir tu creatividad hacia la dirección correcta."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Encontrarás el Centro Galáctico en los cielos del sur (1)",
        "anchor": "b3-c6-sec-2"
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Saber la dirección en la que puedes encontrar el centro de la Vía Láctea es obligatorio. No pierdas el tiempo planificando imágenes que no son posibles."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Estas son las reglas generales en función del hemisferio en el que estés:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-2",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Hemisferio norte. Mira hacia el sur para ver el Centro Galáctico. El centro comenzará a ser visible en el sureste (primavera), el sur (verano) o el suroeste (otoño)."
            }
          ],
          [
            {
              "text": "Hemisferio sur. Mira también hacia el sur. En este caso, el centro comenzará a ser visible en el suroeste (primavera) o el sureste (otoño e invierno)."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además, en el hemisferio norte, el núcleo está bastante cerca del horizonte, incluso cuando está en su máxima elevación. Y cuanto más vayas hacia el sur, más alto en el cielo lo encontrarás. Puedes tener todo el Centro Galáctico por encima del horizonte, e incluso por encima de tu cabeza."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por eso algunas de las mejores fotos de la Vía Láctea se capturan en el hemisferio sur, porque puedes idear muchas más composiciones."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por tanto no busques el centro de la Vía Láctea en el norte. Cuando estés en plena lluvia de ideas, imagina diferentes composiciones con el Centro Galáctico siempre en el sureste, sur o suroeste."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Otra forma de encontrar el centro de nuestra galaxia y la parte más brillante de la Vía Láctea es buscar la constelación de Sagitario."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Misma ubicación, misma dirección, misma altitud (2)",
        "anchor": "b3-c6-sec-3"
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"Para una ubicación y una dirección (azimut) dadas, el Centro Galáctico estará siempre en la misma altitud en el cielo.\" O lo que es lo mismo, si vas al mismo lugar en dos fechas diferentes, miras hacia la misma dirección y esperas hasta que el Centro Galáctico esté en esa dirección, te darás cuenta de que tiene la misma elevación."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "No importa la fecha, para una ubicación determinada, cuando el Centro Galáctico está en una dirección determinada, siempre tiene la misma elevación."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, dada una ubicación, el Centro Galáctico siempre sale en la misma dirección."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "También, se pone siempre en la misma dirección."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Sorprendido?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La puesta en práctica de este hecho es fácil. Por ejemplo, una vez que conozcas el azimut en que el Centro Galáctico sale, sólo tienes que elegir el punto desde donde realizar la foto, de manera que el azimut del Centro Galáctico esté dónde tu quieres en relación con el sujeto de la foto (roca, árbol, faro, costrucción, etc.) En otras palabras, cuando encuentres una localización que te guste, debes proceder de la siguiente manera:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-3",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Decide la posición del Centro Galáctico en el cielo. Lo más habitual es que el lugar inicialmente elegido como punto de disparo no sea correcto y tendrás que desplazarte."
            }
          ],
          [
            {
              "text": "Usa PhotoPills, ya sea el Planificador la Realidad aumentada Noche, para averiguar el azimut en el que el Centro Galáctico tiene la elevación y la orientación deseadas."
            }
          ],
          [
            {
              "text": "Una vez más, utiliza estas herramientas para elegir un nuevo punto de disparo que te dé la composición deseada."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-4",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Comprueba la fase lunar (3)",
        "anchor": "b3-c6-sec-4"
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Lo habitual es que busques tener la más completa oscuridad al fotografiar la Vía Láctea. Por lo tanto, al planificar, debes tener en cuenta la fase lunar. ¡No debería de haber Luna!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, cuando planifiques tus fotos de Vía Láctea deberías asegurarte que se producen durante los días de Luna Nueva, y los 4 días anteriores y posteriores."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero la presencia de una Luna Llena no siempre es perjudicial. Puedes utilizar su luz, (desde el cuarto creciente al cuarto decreciente), para fotografiar el paisaje y la Vía Láctea a la vez."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Averigua los días en que la Luna salga fuera del encuadre que quieres, preferiblemente formando un ángulo de entre 60º y 90º con la dirección en la que apuntas el objetivo. La luz bañará la escena de forma lateral, provocando que los elementos que llenan el paisaje proyecten sombras interesantes. En este caso, la iluminación lateral es ideal para sacar"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-4",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c6-p43-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "texturas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La luz directa de la Luna muestra los elementos que conforman el paisaje de forma plana, perdiendo mucha información. En cambio, la iluminación lateral crea sombras en cada pequeña roca, lo que va a dar un efecto 3D a tu fotografía."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La mejor luz se produce una o dos horas después de la salida de la Luna. Es cuando la Luna ilumina completamente el paisaje, creando bonitas sombras que dan volumen a los elementos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si necesitas ayuda con la Luna, usa el calendario de Luna que tiene PhotoPills ;)"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c6-sec-4",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Memoria Personalizada (posiciones 1, 2, 3 del dial) para Astrofotografía en la Sony Alpha 7 IV",
        "summary": "En lugar de cambiar 10 ajustes a oscuras con frío y viento en el campo, guarda tu configuración completa de Vía Láctea en el dial superior (Memoria 1, 2 o 3):",
        "bulletPoints": [
          "Configura Modo [M], 15s, f/1.4 – f/2.8, ISO 3200, Enfoque Manual [MF], Balance de Blancos 3900K, Temporizador 2s, SteadyShot OFF y formato RAW sin comprimir / comprimido sin pérdida.",
          "Regístralo en [Ajustes de memoria de cámara]: al llegar a la localización solo tendrás que girar el dial superior al número 1 y estarás listo en un segundo."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654666.html",
        "manualLabel": "Manual Sony A7 IV — Registro de Ajustes en Memoria de Cámara (MR)",
        "cameraPath": "MENU → Toma → Modo de toma → Memoria de cámara (Registrar en 1 / 2 / 3)"
      }
    }
  ],
  "7": [
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"Un objetivo sin un plan es sólo un deseo.\" - Antoine de Saint-Exupéry Me encanta el misterio que rodea a Es Pont d'En Gil, un puente natural situado en Menorca, una pequeña isla perdida en el Mediterráneo... Mi hogar."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Lo que me gusta de este puente natural, y lo hace especial, es que detrás de él, a unos 32 kilómetros de distancia, está la isla de Mallorca. Y su fuerte contaminación lumínica tiñe de rojo el arco del puente. Eso hace que mi imaginación eche a volar..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "[Peligro - modo avión activado] Imagina el puente teñido en rojo... Es como una puerta al infierno, una vez que entras ya no puedes salir, maldito para toda la eternidad... He escuchado historias que contaban los ancianos... Historias sobre marineros que partieron para no volver... Todos desaparecidos menos uno... Hubo uno que regresó... En un día de Luna Nueva... Esto dice la leyenda:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"Sólo en las noches de Luna Nueva, cuando las estrellas penetren profundamente en las entrañas del mismo infierno, sólo los valientes encontrarán el camino de"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c7-p46-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "estrellas que conduce al mundo de los humanos.\" Siempre me han fascinado las viejas historias y leyendas del mar. La verdad es que muchos marineros han sido engullidos por las profundas aguas dejando mujer e hijos detrás. Todos estos dramas de la vida, me han inspirado a buscar un motivo para la esperanza. Así es como se me ocurrió la idea de conectar el Infierno y el Cielo con una escalera de estrellas... La majestuosa Vía Láctea... En una noche de Luna Nueva."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"... Sólo cuando las estrellas penetren profundamente en las entrañas del mismo infierno...\" podría traducirse como \"... Sólo cuando la Vía Láctea caiga sobre el mismo puente\"... Me imagino la Vía Láctea completamente vertical penetrando en el puente natural... ¡Es sin duda una escena hipnótica!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "[Ahora estás a salvo - modo avión desactivado] De modo que ¿cómo calculé la fecha y la hora exactas en que la Vía Láctea estaría vertical y alineada con el puente?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sí, lo has adivinado... ¡Utilicé PhotoPills!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Gracias al siguiente vídeo aprenderás a usar PhotoPills para planificar cualquier foto de la Vía Láctea que te propongas. ¡Es muy potente!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Quieres ver más vídeos?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c7-p47-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Consulta nuestro canal de YouTube donde encontrás más ejemplos de planificación y vídeos sobre cómo dominar PhotoPills!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por ejemplo, verás a Rafa (también conocido como el Bardo) planificar una foto chulísima de la Vía Láctea con el Vingerklip, una formación rocosa alucinante en Namibia."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y exactamente así es cómo usé el Planificador de PhotoPills para planificar la foto:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Coloca el Pin Rojo en el punto de disparo",
        "anchor": "b3-c7-sec-2"
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Abre PhotoPills y pulsa Planificador (menú Píldoras)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El primer paso siempre es el mismo: coloca el Pin Rojo cerca de tu sujeto. En este caso, el puente natural de Es Pont d'En Gil en Menorca."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para ello, desplázate por el mapa o pulsa el botón Cargar y"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Usa la barra de búsqueda para encontrar una localización."
            }
          ],
          [
            {
              "text": "Carga una Planificación o un Punto de Interés que hayas guardado previamente."
            }
          ],
          [
            {
              "text": "Introduce la latitud y longitud."
            }
          ],
          [
            {
              "text": "Or usa una foto geoetiquetada. En este ejemplo, pulsa Cargar, selecciona Latitud/Longitud e introduce estas coordenadas: (40.010673ºN, 3.794610ºE)."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El Pin Rojo se colocará cerca del puente."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hay dos sitios desde donde se puede ver el horizonte a través del puente, pero sólo hay uno que es perfecto para fotografiar la Vía Láctea."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una vez que has encontrado el punto de disparo que quieres, mueve el Pin Rojo justo hasta la posición desde la que quieres hacer la foto. Después pulsa el botón de Configuración del mapa y activa la capa de la Vía Láctea."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Encontrarás el botón de Configuración del mapa en el mapa, en la esquina inferior derecha, al lado del botón (+)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Fíjate en el panel que está encima del mapa. El Panel 7 te indica que"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "El Centro Galáctico será visible a las 23:16 (el 22 de mayo) a un azimut de 128,5º cuando salga."
            }
          ],
          [
            {
              "text": "Más tarde, dejará de ser visible a las 04:29 (el 23 de mayo) cuando se ponga a un azimut de 193,9º y una elevación de 19,7º."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Fíjate en las dos líneas de azimut que hay sobre el mapa. La línea gris claro indica la dirección en la que le Centro Galáctico empezará a ser visible (a un azimut de 128,5º) y la"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b3-c7-p49-1",
        "rightAssetId": "b3-c7-p49-2"
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "gris oscuro, donde dejará de ser visible (a un azimut de 193,9º) para la fecha seleccionada."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Las circunferencias blancas son una especie de líneas de contorno que te ayudarán a visualizar la posición de la Vía Láctea en el cielo. Entenderás a qué me refiero en un segundo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Sigue leyendo!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Comprueba todas las Lunas Nuevas hasta que encuentres la fecha y hora adecuadas",
        "anchor": "b3-c7-sec-3"
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Me gustaría tener la Vía Láctea (y el Centro Galáctico) completamente vertical y alineada con el puente natural. Es hora de averiguar cuándo ocurre..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por un lado, dado un mes, cada año podrás capturar las mismas fotos. La posición de la Vía Láctea en el cielo será la misma."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Esto significa que una vez que hayas planificado una foto, podrás repetir la foto cada año a lo largo del mes (¡e incluso durante varios meses!)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y por el otro lado, necesitas tener un cielo completamente oscuro..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, para encontrar la fecha y hora en la que ocurre la foto que quieres, te recomiendo que compruebes las posibles composiciones que puedes conseguir en cada una de las Lunas Nuevas del año..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "De esta forma, sabrás en un abrir y cerrar de ojos cuáles son las posibles fotos que puedes capturar en una localización dependiendo del mes y para averiguar cuándo ocurre la foto que estás buscando."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La primera vez tardarás unos minutos en averiguarlo. La segunda vez sólo tardarás unos segundos ;)"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Así es que este es el flujo de trabajo que tienes que seguir:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Pulsa dos veces en el centro de la Barra de tiempo para fijar la fecha de hoy y la hora actual."
            }
          ],
          [
            {
              "text": "Desliza los paneles superiores que están encima del mapa hasta llegar al Panel 8 (fíjate en la captura de pantalla inferior)."
            }
          ],
          [
            {
              "text": "Pulsa la foto de la Vía Láctea en el Panel 8 para avanzar en el tiempo hasta la próxima Luna Nueva."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Finalmente, modifica el tiempo con la Barra de tiempo para ver dónde estará la Vía Láctea (y el Centro Galáctico) durante la noche."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si la foto que quieres no ocurre durante esa Luna Nueva, pulsa de nuevo en la foto de la Vía Láctea que está en el panel superior para avanzar en el tiempo hasta la próxima Luna Nueva. Si es necesario, repite el procedimiento hasta que consigues la foto que quieres."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Siguiendo estos pasos, averigüé que la foto que quiero ocurre en agosto y septiembre de 2019. Así es que vamos a comprobar la Luna Nueva de agosto (30 de agosto)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Echa un vistazo a la primera captura de pantalla. La Vía Láctea está representada sobre el mapa por un arco de puntos blancos. El punto blanco más grande representa el Centro Galáctico y coincide con el lugar dónde se cruza la línea de azimut del Centro Galáctico y el arco de la Vía Láctea. De esta manera, puedes distinguir fácilmente el Centro Galáctico sobre el arco de la Vía Láctea."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El panel superior indica que a las 21:56 el Centro Galáctico tendrá un azimut de 194,0º y una elevación de 19,7º. Cuando el arco de la Vía Láctea alcance la elevación máxima de 71,99º, el arco formará una diagonal en el cielo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Recuerda, quieres que la Vía Láctea sea vertical y esté alineada con el puente."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para averiguar cuándo ocurre, desliza el tiempo hasta que la elevación máxima de la Vía Láctea sea 90º (observa el panel superior para confirmarlo) y comprueba que la Vía Láctea esté alineada con el puente."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si no está alineada, vuelve a ajustar la posición del Pin Rojo. Además, puedes avanzar en el tiempo hasta la próxima Luna Nueva y comprobarlo de nuevo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Eso es todo!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ahora el Planificador te indica que si vas a la posición del Pin Rojo el 30 de agosto a las"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b3-c7-p52-1",
        "rightAssetId": "b3-c7-p52-2"
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "23:46, tendrás la escena que has imaginado."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ahora, después de todo el trabajo de planificación es el momento de rezar para que las condiciones metereológicas sean favorables."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Así se llama el juego al que juegan los PhotoPillers: Planifica y Reza."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-3",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b3-c7-p53-1",
        "rightAssetId": "b3-c7-p53-2"
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-4",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "La foto",
        "anchor": "b3-c7-sec-4"
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y aquí tienes la imagen resultante :) Decidí hacerla en vertical y pedirle a Germán Marqués, el desarrollador de PhotoPills, que posara bajo las estrellas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Añade interés y escala a la fotografía, ¿no te parece?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-4",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c7-p54-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Esta es sólo una breve explicación de cómo planificar la Vía Láctea utilizando PhotoPills."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si quieres una guía completa y paso a paso, echa una ojeada a este vídeo y artículos:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-4",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Vídeo: Cómo planificar la Vía Láctea con el Vingerklip, Namibia."
            }
          ],
          [
            {
              "text": "Vídeo: Masterclass de Fotografía de Vía Láctea con Antoni Cladera."
            }
          ],
          [
            {
              "text": "Vídeo: Masterclass de Revelador de Fotos de Vía Láctea con Antoni Cladera."
            }
          ],
          [
            {
              "text": "Artículo: Cómo planificar la Vía Láctea con el Planificador 2D."
            }
          ],
          [
            {
              "text": "Artículo: Cómo planificar la Vía Láctea con la Realidad aumentada."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-4",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c7-p55-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b3-c7-sec-4",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Comprobación del Encuadre Planificado con Nivel Digital de 2 Ejes en la Sony Alpha 7 IV",
        "summary": "Una vez situado sobre el pin rojo planificado en PhotoPills, clavar la inclinación y nivelación de la cámara es vital, sobre todo porque en la oscuridad no ves el horizonte real:",
        "bulletPoints": [
          "Pulsa el botón [DISP] (arriba en la rueda trasera) hasta activar la vista de [Nivel] en el monitor o visor OLED.",
          "El nivel electrónico de dos ejes de la Sony A7 IV te indica tanto el balanceo horizontal (roll) como la inclinación vertical (pitch), poniéndose en verde cuando está perfectamente nivelado."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654684.html",
        "manualLabel": "Manual Sony A7 IV — Uso del Nivel Digital en Pantalla y Visor",
        "cameraPath": "Botón DISP → Mostrar [Nivel]"
      }
    }
  ],
  "8": [
    {
      "sectionAnchor": "b3-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Siempre recomiendo a aquellos de mis alumnos que estén dispuestos a tomarse en serio la fotografía, que empiecen apostando fuerte desde el inicio y se compren el mejor equipo posible que puedan pagar, incluso acudiendo al mercado de segunda mano si es necesario, porque, al fin y al cabo, es una manera de ahorrar dinero."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si gastas tus ahorros en un equipo básico pronto descubrirás que es demasiado limitado para hacer las fotos que quieres y finalmente terminarás comprando otro mejor, gastando el doble de dinero por el camino. Además, un buen equipo te va a durar muchos años si lo tratas bien y, en caso de que decidas venderlo, siempre encontrarás un comprador en el mercado de segunda mano."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Cuál es el equipo ideal para la fotografía nocturna? En mi opinión, estas son las características generales que tu cámara (réflex o sin espejo) debería tener:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-1",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Control manual de apertura, velocidad de obturación, ISO y enfoque."
            }
          ],
          [
            {
              "text": "Sensor de formato completo (full frame). Una de las ventajas de utilizar una cámara con sensor de formato completo es que suelen tener un nivel de ruido mucho menor que las cámaras APS-C, por lo que se pueden utilizar ISOs más elevados. Esto es debido a que al ser el sensor de formato completo más grande que uno APS-C, por la misma cantidad de megapixeles, los fotositios (píxeles) serán también más grandes. Estos"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p57-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "fotositios más grandes podrán obtener más cantidad de luz por unidad de tiempo, lo que permitirá no tener que amplificar tanto la señal consiguiendo un menor ruido, un mayor rango dinámico y un menor calentamiento del sensor. En definitiva, si tienes dos sensores (uno APS-C y otro de formato completo) con la misma cantidad de megapíxeles, el de formato completo generalmente tendrá menor ruido."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-1",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Buen comportamiento frente al ruido cuando subes el ISO a 3200 o más."
            }
          ],
          [
            {
              "text": "Control manual del balance de blancos."
            }
          ],
          [
            {
              "text": "Acceso directo a la mayoría de los selectores principales (ISO, balance de blancos etc.), sin tener que acceder mediante el menú digital de la cámara."
            }
          ],
          [
            {
              "text": "Dispara en RAW."
            }
          ],
          [
            {
              "text": "Un cuerpo bien sellado, con una construcción óptima para soportar las inclemencias meteorológicas como viento, agua, lluvia, humedad, etc."
            }
          ],
          [
            {
              "text": "Un buen sistema de disipación de calor, para evitar que el sensor se caliente y produzca ruido térmico. Además del ruido, si el sensor se calienta más de la cuenta puede que el sensor empiece a viñetear con tonos magenta."
            }
          ],
          [
            {
              "text": "Un intervalómetro incorporado en la cámara. Te puede salvar de más de un imprevisto cuando se te olvide el intervalómetro externo o se quede sin batería."
            }
          ],
          [
            {
              "text": "La opción de utilizar objetivos sin CPU. En cuanto al objetivo, al fotografiar la Vía Láctea, para un tiempo de exposición determinado, necesitas que tu objetivo recoja la mayor cantidad de luz posible para capturar el máximo número de estrellas como grandes puntos brillantes."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además, tienes que asegurarte de capturar la mayor cantidad de Vía Láctea posible. En ese caso necesitas utilizar el objetivo más luminoso (número f pequeño) y más angular (distancia focal corta) que puedas permitirte para capturar la mayor cantidad de luz y área de cielo posible. Un 14mm para cámaras de formato completo o un 11mm para sensores con factor de recorte sería lo ideal."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Estas distancias focales se encuentran dentro de los objetivos denominados súper-gran angulares. Por otro lado, cuanto más angular sea un objetivo es normal que resulte más caro, dada la complejidad de su construcción."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Pros y contras del equipo del principiante... y trucos",
        "anchor": "b3-c8-sec-2"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Evidentemente no hace falta gastar una fortuna en un equipo profesional para conseguir buenas fotos de la Vía Láctea, sólo necesitas tu imaginación."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y sí, tú y yo sabemos que con un equipo básico, tus imágenes no serán tan buenas como deberían ante unos ojos bien entrenados."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero... Shhhh... Guarda el secreto..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La buena noticia es que la mayoría de tus amigos y seguidores en las redes sociales son incapaces de distinguir la diferencia entre tu imagen y otra profesional. Así que, ¿por qué no intentar fotografiar la Vía Láctea?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El equipo más común entre los principiantes se compone de:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Cámara",
        "anchor": "b3-c8-sec-3"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-3",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Con sensor APS-C: Nikon Z30; Canon 4000D, 250D, M5; Sony a6600."
            }
          ],
          [
            {
              "text": "Con sensor Micro 4/3: Olympus OM-D E-M10 Mark IV y Panasonic G90."
            }
          ],
          [
            {
              "text": "Compactas (sensor de 1\"): Sony RX100 VII. Estas cámaras permiten una exposición totalmente manual, así como el balance de blancos (o, al menos, la elección de un preajuste de balance de blancos)."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por desgracia, las cámaras réflex y sin espejo básicas se comportan mal a ISOs de 3200 y superiores y generan mucho ruido. Una posible solución ante estas limitaciones es disparar a ISO 800 y usar una herramienta de reducción de ruido en el procesado. En función de los resultados que obtengas, trata de subir el ISO algo más, a ver qué pasa."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sin embargo, ten en cuenta que la reducción de ruido suaviza el detalle de tus imágenes, perdiendo en muchos casos nitidez, lo que puede ser problemático."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Estas cámaras suelen incluir un objetivo 18-55mm básico."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-4",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Objetivo 18-55mm",
        "anchor": "b3-c8-sec-4"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El objetivo hace la imagen, la cámara la registra."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, tu objetivo es parte fundamental de tu equipo fotográfico. Lógicamente deberías invertir en objetivos de calidad."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La mayoría de las réflex, como la Nikon D3500 o la Canon 4000D, vienen en un kit básico"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "con un objetivo de 18-55mm. Estos objetivos han sido diseñados para dar resultados aceptables al hacer fotos durante el día y usando una apertura de f/8."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero, por supuesto, en condiciones de poca luz o en fotografía nocturna, no dan tan buenos resultados como los objetivos zoom profesionales (como el Nikon 14-24mm f/2.8 y el Canon 16-35mm f/2.8L III) En estas condiciones de luz debes utilizar una distancia focal de 18mm o menor (si tu objetivo es capaz) y la apertura más grande disponible, por lo general f/3.5."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ten en cuenta que como estas cámaras tienen un sensor con factor de recorte y que disparas a 18mm (lo que en 35mm sería equivalente a un 27mm en Nikon y un 28,8mm en Canon), tu tiempo de exposición tiene que ser bastante corto para evitar que aparezcan rastros de estrellas (más o menos unos 17/18 segundos dependiendo de la cámara)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Esto añadido a que como máximo podrás disparar a f/3.5 y a ISO 800, tu cámara recogerá una cantidad limitada de luz, obteniendo seguramente una fotografía subexpuesta. Por lo tanto, aparecerá ruido al procesarla."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En resumen, no es el equipo ideal. Pero si es el que tienes, exprímelo al máximo y trabaja el procesado para reducir el nivel de ruido."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si estás buscando un objetivo gran angular a un precio económico, te recomiendo el Samyang AE 14mm f/2.8 y el Irix 15mm f/2.4 Firefly."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Con este equipo básico, una alternativa es realizar exposiciones más largas (5 minutos o más dependiendo de la fase de la Luna) y utilizar el ISO nominal de la cámara (ISO 100 o 200 normalmente) para evitar la aparición de ruido. Las estrellas no quedarán como puntos, pero capturarás los rastros de estrellas de la Vía Láctea, creando una fotografía bastante impactante."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Otra forma de crear impresionantes rastros de estrellas es apliando una serie de fotografías de exposiciones más cortas con un programa como StarStaX (Mac, Windows, Linux) o Startrails (Windows). En este caso, el movimiento relativo de las estrellas crea trazos similares a los rastros de estrellas. La ventaja es que evitas que se caliente mucho el sensor..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si quieres aprenderlo todo sobre los rastros de estrellas, echa un vistazo a nuestra superguía fotográfica."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-5",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Trípode de viaje básico",
        "anchor": "b3-c8-sec-5"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La fotografía nocturna se basa en largas exposiciones."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, al elegir un trípode, el peso importa. Lo último que quieres en tus fotos es el desenfoque causado por la vibración del trípode debido al viento o al agua en movimiento."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Necesitas mantener la cámara estable e inmóvil."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo general, los trípodes básicos no pesan demasiado y son bastante inestables, por lo que es probable que tengas problemas de trepidación al disparar largas exposiciones."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además, a esto se añade el riesgo de dañar tu equipo en el caso de una caída."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para evitar vibraciones y, por lo tanto, reducir el desenfoque, puedes estabilizar el trípode añadiendo peso colgando una bolsa llena de piedras o incluso la bolsa de tu cámara."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Tampoco si tu trípode tiene una columna central, no la subas ya que lo hará más inestable."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si la subes, estás levantando el centro de gravedad del conjunto formado por trípode, rótula, cámara y objetivo, lo que se traduce en un conjunto más inestable. Cuanto más bajo sea el centro de gravedad más estable será el conjunto..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es pura física."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-6",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Linterna frontal básica",
        "anchor": "b3-c8-sec-6"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ya que vas a estar en la oscuridad, un frontal es obligatorio. Pero, no será muy útil para pintar con luz (light paiting)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si has planeado tener elementos interesantes en el primer plano, una buena linterna es imprescindible."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-7",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Disparador remoto o intervalómetro básico",
        "anchor": "b3-c8-sec-7"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El disparador remoto te permite accionar la cámara de forma remota sin necesidad de tocarla. Esto es particularmente interesante para evitar que las vibraciones acaben provocando desenfoque por movimiento en tus imágenes."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El problema de los disparadores remotos es que no son programables, por lo que no puedes disparar automáticamente a intervalos regulares. Es mucho mejor comprar un intervalómetro barato (con cable mejor). Hoy en día incluso puedes encontrar cámaras que lo incluyen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Un intervalómetro es un disparador remoto programable que puedes utilizar para ajustar el tiempo de exposición, el intervalo de tiempo entre fotos consecutivas, el número total de fotos que quiere hacer e incluso el retardo de tiempo de la primera imagen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si estás disparando en modo Bulb, podrás hacer exposiciones de más de 30 segundos. Esto es especialmente útil para timelapses y rastros de estrellas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los siguientes intervalómetros son muy buenos:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-7",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Intervalómetro pro: SMDV."
            }
          ],
          [
            {
              "text": "Si buscas un intervalómetro económico echa un vistazo a las marcas Neewer, Phottix y Vello."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-8",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Tarjetas de memoria",
        "anchor": "b3-c8-sec-8"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hay muchos tipos diferentes de tarjetas SD (Secure Digital), dependiendo de la capacidad y la velocidad de transferencia de datos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Compra varias tarjetas de memoria con una velocidad de transferencia alta de SanDisk o ProGrade (mis marcas favoritas) y cada foto que hagas se guardará más rápidamente en la tarjeta."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hoy en día el precio de las tarjetas SD ha bajado tanto y resulta tan barato comprar una tarjeta rápida que no deberías de comprar ninguna que tuviera unas prestaciones menores."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Te recomiendo que utilices varias tarjetas de pequeña capacidad en lugar de unas pocas de gran capacidad. De esta forma, si pierdes una tarjeta o se estropea, perderás un menor número de imágenes."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es cierto que todavía hay cámaras que utilizan tarjetas CompactFlash (CF) pero es un sistema que está desapareciendo poco a poco."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-9",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Equipo mínimo para una calidad de imagen aceptable (gama media)",
        "anchor": "b3-c8-sec-9"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si lo que quieres es hacer fotos de la Vía Láctea de una calidad aceptable, este es el equipo que necesitas:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-10",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Cámara",
        "anchor": "b3-c8-sec-10"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-10",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Dependiendo de tu presupuesto y los objetivos que te marques, puede interesarte dar el salto a formato completo o mantenerte con una cámara con un sensor con factor de recorte."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-10",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En ambos casos existen cámaras que se comportan muy bien frente al ruido."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-10",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Con sensor APS-C: Nikon Z50, Zfc y D7500; Canon R10, R7, 850D, 90D y 6D Mark II; Fuji X-S20 y X-T30 II; Pentax KF; Sony a6700."
            }
          ],
          [
            {
              "text": "Con sensor Micro 4/3: Olympus OM-D E-M5 Mark III y Panasonic G9 II."
            }
          ],
          [
            {
              "text": "Con sensor de formato completo: Nikon Z5 y D750; Canon RP; Sony a7C II. Si ya tienes una cámara de formato completo o quieres dar el salto, ¡enhorabuena!"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-10",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Dos de las principales ventajas de usar una cámara de formato completo es que"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-10",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "produce menos ruido en la imagen y"
            }
          ],
          [
            {
              "text": "tiene un mayor rango dinámico que un sensor APS-C con los mismo megapíxeles, lo que te permitirá trabajar a ISOs más elevados y obtener unas mejores imágenes."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-10",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Todas estas cámaras te permitirán realizar fotografías utilizando un ISO de 1600 o 3200 con niveles de ruido aceptables, pudiendo conseguir fotografías bien expuestas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Objetivos gran angulares",
        "anchor": "b3-c8-sec-11"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como estamos hablando de fotografía de Vía Láctea me voy a centrar en objetivos gran angulares y super-gran angulares, para poder capturar la máxima cantidad de estrellas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para cámaras Micro 4/3, estos objetivos son estupendos para fotografía nocturna:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Olympus M.Zuiko Digital ED 7-14 mm f/2.8"
            }
          ],
          [
            {
              "text": "Olympus M.Zuiko Digital ED 12-40mm f/2.8 PRO"
            }
          ],
          [
            {
              "text": "Olympus M.Zuiko Digital ED 12mm f/2.0 Una de las marcas de objetivos con mejor calidad-precio son los objetivos Rokinon (también conocidos como Samyang, Pro-Optic, Bower, Falcon, Wallimex, etc.). Tienen modelos disponibles tanto para sensores Full Frame como APS-C. Otras marcas como Tokina también disponen de modelos con resultados bastante buenos para fotografía nocturna."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para cámaras APS-C, me gustaría destacar los siguientes objetivos:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Rokinon 12mm f/2 o Samyang 12mm f/2"
            }
          ],
          [
            {
              "text": "Rokinon 16mm f/2.0 o Samyang 16mm f/2.0"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Tokina 11-16mm f/2.8"
            }
          ],
          [
            {
              "text": "Sigma 10-20mm f/3.5"
            }
          ],
          [
            {
              "text": "Sigma 18-35mm f/1.8 Art"
            }
          ],
          [
            {
              "text": "Sigma 17-70mm f/2.8 Macro Para cámaras de formato completo estos objetivos fijos son geniales:"
            }
          ],
          [
            {
              "text": "Rokinon 14mm f/2.8 o Samyang 14mm f/2.8"
            }
          ],
          [
            {
              "text": "Rokinon 24mm f/1.4 o Samyang 24mm f/1.4 Recuerda que estos objetivos también funcionan en APS-C pero debes tener en cuenta el factor de multiplicación. Por ejemplo, en una cámara con un factor de multiplicación de 1,5x el Rokinon 14mm sería un 21mm en una cámara de formato completo."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "A parte de destacar el precio competitivo de estos objetivos, merece la pena mencionar que, sobre todo los objetivos Rokinon/Samyang, apenas producen coma en su máxima apertura, un hecho muy a tener en cuenta en fotografía nocturna."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"Toni, ¿qué es eso del coma?\" El coma es una aberración óptica que distorsiona las estrellas en las esquinas del objetivo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En vez de aparecer como puntos, las estrellas aparecen como rayas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una explicación más compleja sería que el coma es visible en puntos de la imagen que presentan una estela hacia el exterior o hacia el centro de la imagen, como un cometa, que es de donde proviene su nombre. El coma que se extiende radialmente desde el eje óptico y que tiene forma de lágrima, se denomina destello de coma meridional. El destello de coma sagital ocurre concéntricamente, formando un destello en forma de diamante."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El coma se puede reducir cerrando un poco el diafragma."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p65-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Con la combinación de un cuerpo de cámara y un objetivo como los indicados podrás obtener buenas fotografías de Vía Láctea. Puede que tengas problemas de ruido cuando uses ISO altos a más de 3200 y ruido propio del sensor en largas exposiciones, pero lo podrás mitigar un poco activando la opción de reducción de ruido de la cámara o en el procesado."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Un apunte sobre la conservación..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Tienes que ser cuidadoso si trabajas en condiciones extremas de lluvia, arena, humedad o bajas temperaturas. El sellado de este tipo de cámara no es tan bueno como las cámaras profesionales. Deberías protegerlas lo máximo posible."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-11",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p66-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Equipo de iluminación",
        "anchor": "b3-c8-sec-12"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una buena linterna frontal de LEDs es recomendable cuando ya te tomas más en serio en la fotografía nocturna. Su luz es muy potente, y es muy útil para iluminar en la oscuridad y enfocar a la distancia hiperfocal."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando tengas tu frontal encendido, asegúrate de que no molestas a otros fotógrafos a tu alrededor. ¡Sé cuidadoso!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los frontales con luz roja de visión nocturna son los mejores: permiten evitar cualquier luz blanca que te impida tener visión nocturna. Me gustan el Petzl Tikka XP, el Pelican 2750 y el Pelican 2760."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Otros frontales LED de gran alcance son el Led Lenser SEO5, el H14R o el H7R.2."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si estás fotografiando en un día de poca luna o luna nueva, será necesario iluminar artificialmente el primer plano, ya sea el suelo, un árbol, una roca, etc. Para hacerlo es ideal acompañar el frontal con alguna linterna de LED, paneles LED o flashes."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Puedes usar una linterna como la Coast TX-10, la Led Lenser L7 o la Maglite Mini para dar volumen y textura a determinados elementos que quieres que aparezcan en la foto. La ventaja es que te permite trabajar con mucha precisión. Al igual que harías con un pincel, podrás pintar con luz las zonas concretas que te interesen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El inconveniente es que abarcan poca área."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para abarcar más área deberás utilizar los paneles LED o algún flash. Los paneles LED tienen la ventaja de dar luz continua, por lo que será más fácil de controlar que el flash."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además, suelen estar muy bien de precio."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La ventaja de los flashes es su potencia. Te permiten, por ejemplo, hacer un retrato a una persona con la Vía Láctea de fondo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p68-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Tanto los LEDs como los flashes te darán una temperatura de color de luz de día de unos 5500K, es decir, de color blanco. Para poder modificar su temperatura es muy interesante disponer de geles de colores."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"Toni, ¿qué es un gel de color?\" Un gel es un plástico tintado de un color específico que se pone delante de la fuente de luz para teñirla de color."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Lo ideal es que siempre tuvieras en tu mochila al menos un par de geles correctores de temperatura de color. En la mayoría de sesiones, un gel CTO (Color Temperature Orange) y un gel CTB (Color Temperature Blue) serán suficientes. No son caros y duran mucho tiempo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El gel CTB sirve para convertir la luz de tungsteno (3200K) en color 'luz de día' (5500K), por lo tanto lo puedes utilizar para enfriar la escena. El gel CTO sirve para el caso contrario, convierte la 'luz de día' (5500K) en luz de tungsteno (3200K), permitiendo dar un tono cálido a la escena."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p69-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hay diferentes potencias de gel: 1/4, 1/2, 3/4, etc. Cuanta menor potencia tenga el gel, menos cambiará la temperatura de color de la luz que filtre."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además de los geles correctores de temperatura, están los geles de colores. Sirven para crear efectos y dar tonalidades específicas a la escena. Hay una gran cantidad de colores disponibles de varios fabricantes: rojo, amarillo, verde, azul marino, etc."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-12",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p70-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-13",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Trípode y rótula",
        "anchor": "b3-c8-sec-13"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como he dicho en la sección del equipo básico, el peso es clave. Cuanto más peso tenga el trípode, más estabilidad tendrá. Evidentemente, deberías buscar un trípode con un peso adecuado para poderlo transportar cómodamente, sin lesionarte la espalda."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Las marcas de trípode más conocidas para fotógrafos amateurs avanzados son Gitzo, Manfrotto, Benro, Induro o Really Right Stuff."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El Manfrotto 055XPRO3 es probablemenete el trípode de gama media más vendido."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "También me gusta mucho la línea Travel de la marca Benro."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En este caso, deberías buscar un trípode de aluminio que pueda soportar el peso del equipo, del objetivo y que no se mueva fácilmente con el viento. Un trípode que aguante unos 5-7 kg sería ideal. De nuevo, no te recomiendo levantar la columna central si quieres evitar que se produzcan vibraciones."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además del trípode, tendrás que adquirir una rótula que sirva para fotografía nocturna."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-13",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p71-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Existen multitud de rótulas en el mercado. Las más comunes son las de bola y las pan/tilt."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El tipo de rótula dependerá de tus preferencias, pero asegúrate de que aguante también unos 5-7 kg de peso y que tenga zapata extraíble."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-14",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Intervalómetro",
        "anchor": "b3-c8-sec-14"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-14",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cualquier fotógrafo avanzado debería tener un intervalómetro. El disparador remoto es suficiente, pero si quieres realizar un timelapse, rastros de estrellas o, simplemente, realizar disparos continuos durante las lluvias de estrellas, tener un intervalómetro es imprescindible."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-14",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además, aunque sólo quieras fotografiar la Vía Láctea, estar disparando contínuamente incrementará la probabilidad de capturar alguna estrella fugaz, lo que añadirá interés a la imagen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-14",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los siguientes intervalómetros son muy buenos:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-14",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Intervalómetro pro: SMDV."
            }
          ],
          [
            {
              "text": "Si buscas un intervalómetro económico echa un vistazo a las marcas Neewer, Phottix y Vello."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-14",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una alternativa estupenda es un aparato que se llama CamRanger. Por ahora está disponible para cámaras Nikon, Canon, Fuji y Sony."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-14",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es un dispositivo independiente que conectas a tu cámara réflex o sin espejo mediante un cable USB. Crea una red WiFi ad hoc a la que puedes conectar tu teléfono móvil o tu tableta (iOS, Android y Windows). Gracias a la aplicación de CamRanger puedes controlar tu cámara sin necesidad de ordenador ni conexión a Internet."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-14",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y lo mejor de todo es que este aparato es autónomo. Por tanto, si el dispositivo móvil se desconecta, el CamRanger tiene memoria para seguir disparando. Imagina que estás haciendo un timelapse, tu secuencia se rompería si la cámara no sigue haciendo fotos en el intervalo que has establecido..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-14",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, el CamRanger sirve para muchos tipos de fotos: timelapses (de la Vía Láctea, de rastros de estrellas, de eclipses solares o de eclipses lunares...), horquillado (bracketing en inglés), enfoque por apilamiento (focus stacking en inglés) para macro y paisajes... ¡y mil cosas más!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-15",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Tarjetas de memoria",
        "anchor": "b3-c8-sec-15"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hay muchos tipos diferentes de tarjetas SD (Secure Digital), dependiendo de la capacidad y la velocidad de transferencia de datos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Las tarjetas SDHC y SDXC Clase 10 de SanDisk o ProGrade (mis marcas favoritas) son ideales para fotógrafos amateurs avanzados. Su velocidad de escritura es suficiente para que el intervalo de tiempo entre dos exposiciones consecutivas sea relativamente corto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Puede parecer trivial, pero es fundamental si tienes intención de hacer un timelapse nocturno o en condiciones de poca luz, porque cuantas más fotos consigas disparar durante toda la sesión mejor."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La capacidad de la tarjeta puede ser de 16GB, 32GB, 64GB o más. Si tienes la intención de hacer un timelapse, te recomiendo que compres una tarjeta de 64GB o con una capacidad superior para asegurarte de tener almacenamiento suficiente para todas las fotos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Aunque todavía hay cámaras que utilizan tarjetas CompactFlash (CF) es un sistema que está desapareciendo poco a poco."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-16",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Equipo profesional (gama alta)",
        "anchor": "b3-c8-sec-16"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El límite de la cantidad de dinero que te puedes gastar en equipo lo pones tú... Pero te aseguro que con el siguiente equipo tu fotografía tampoco tendrá límite."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-17",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Cámara",
        "anchor": "b3-c8-sec-17"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si buscas conseguir la máxima calidad en tus fotos, un cuerpo de formato completo y gama media-alta es la mejor opción (aunque no la única). Debería tener un sensor que apenas produzca ruido en condiciones de poca luz y que se caliente lo menos posible."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además, también es importante que tenga un cuerpo sellado para hacer frente a las inclemencias del tiempo, la arena, el polvo, la humedad y el agua."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Estas son fantásticas cámaras para fotógrafos profesionales nocturnos:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-17",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Con sensor APS-C: Nikon D500; Fuji XH-2S, XT-5 y X-Pro3."
            }
          ],
          [
            {
              "text": "Con sensor Micro 4/3: Olympus OM-1 y Panasonic GH6."
            }
          ],
          [
            {
              "text": "Con sensor de formato completo: Nikon Zf, Z6 II, Z7 II, Z8, Z9, D780, D850 y D6; Canon R8, R6 Mark II, R5, R3, 5D Mark IV y 1D X Mark III; Panasonic S5 II, S5 II X, S1R y S1H; Pentax K-1 Mark II; Sony a7 IV, a7 CR, a7R V, a9 III y a1."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Todas ellas producen poco ruido a ISOs altos. Además, disponen de botones dedicados para cada característica (ISO, balance de blancos, etc.), facilitando el cambio de la configuración de la cámara."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Eso sí, es indispensable que uses estos cuerpos con un muy buen objetivo si quieres sacar el máximo partido."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Objetivos gran angulares",
        "anchor": "b3-c8-sec-18"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Deberías buscar un gran angular muy nítido, luminoso y que apenas tenga coma en sus bordes ni otras aberraciones cromáticas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Uno de los mejores objetivos por su calidad y los resultados que da es el Nikon 14-24mm f/2.8."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "No sólo lo usan fotógrafos de Nikon sino también fotógrafos que usan otras marcas como Canon, por ejemplo. En este caso necesitas un anillo adaptador de mucha calidad como el Novoflex EOS NIK NT. Es un objetivo que casi no presenta coma, muy nítido y con muy poco viñeteo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si quieres saber más, puedes leer una reseña de este objetivo en la página de David Kingham (en inglés)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si no tienes problemas de presupuesto, otro objetivo que deberías tener en cuenta es el Zeiss 15mm f/2.8. Este objetivo tiene una gran nitidez y tampoco presenta coma."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero, a pesar de su excelente calidad óptica y mecánica, tiene un serio problema: excesivo contraste. No es un gran problema durante el día, pero sí por la noche."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El objetivo Zeiss no se comporta bien por la noche. Un Nikon 14-24mm f/2.8 a 15mm comparado con el Zeiss a 15mm es capaz de capturar detalle en las sombras más oscuras y en los negros. Con el Zeiss los negros están completamente empastados."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Tienes un bosque oscuro delante de la Vía Láctea? En el procesado, podrás recuperar los árboles con el Nikon pero no con el Zeiss."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si buscas un obejtivo muy nítido, prueba el Tokina 16-28mm f/2.8."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Tanto el Rokinon 14mm f/2.8 como el Samyang 14mm f/2.8 también dan resultados fantásticos. Ambos objetivos presentan poco coma."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En Canon tienes el Canon 16-35mm f/2.8L III."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p75-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Aquí tienes otros objetivos fantásticos:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-18",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Tamron 15-30mm f/2.8"
            }
          ],
          [
            {
              "text": "Canon 11-24mm f/4L"
            }
          ],
          [
            {
              "text": "Canon 14mm f/2.8L II"
            }
          ],
          [
            {
              "text": "Sigma 14mm f/1.8 Art"
            }
          ],
          [
            {
              "text": "Sigma 14-24mm f/2.8 Art"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-19",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Equipo de iluminación",
        "anchor": "b3-c8-sec-19"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es indispensable un frontal LED potente, como el Led Lenser SEO5, el H14R o el H7R.2. Son ligeros, pequeños, con mucha autonomía y te permitirán ver y enfocar en la oscuridad."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los frontales que incluyen luz roja de visión nocturna son los mejores para evitar flashes de luz durante la noche. Algunos de los que te recomiendo son el Petzl Tikka XP, el Pelican 2750 y el Pelican 2760."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además del frontal, deberías de tener al menos dos linternas de marcas reconocidas como Coast, Led lenser, Maglite o Surefire."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por un lado, necesitas una primera linterna de bastante potencia para iluminar sujetos a larga distancia, como la Coast HP7 o la Led Lenser M7."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por otro lado, necesitas una segunda de menor potencia, como la Coast TX-10, la Led Lenser L7 o la Maglite Mini para iluminar sujetos más cercanos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además de las linternas, te recomiendo tener al menos 2 paneles paneles LED. Estos paneles son esenciales ya que dan luz continua y abarcarán una gran área, permitiéndote iluminar fácilmente todo el primer plano, incluso para panorámicas. En algunas ocasiones puede que tengas que combinar la iluminación de estos LEDs con las linternas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Finalmente, es necesario disponer de flashes. Los flashes son una buena fuente de luz para hacer retratos, iluminar interiores de edificios, etc. Si tu intención es hacer retratos, es ideal también disponer de trípodes para flash y softboxes/octoboxes."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "No olvides meter algunos geles de corrección de color en tu mochila. Varios geles CTO y CTB de varias intensidades son imprescindibles. También necesitarás geles de colores si quieres crear efectos, como iluminar de color rojo o amarillo algún interior de un edificio."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-19",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p77-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-20",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Trípode y rótula",
        "anchor": "b3-c8-sec-20"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Un trípode de fibra de carbono es perfecto para aguantar el peso de tu equipo y, a la vez, lo suficientemente ligero para poder cargar con él sin problemas. Estos trípodes son robustos y aguantan mucho peso (5-25 kg) según el modelo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Lógicamente deberías elegir un trípode que pueda aguantar el peso de la rótula, la cámara y el objetivo más pesado que tengas, dejando un margen por si en un futuro compras equipo nuevo más pesado."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ten cuidado si trabajas con un trípode de fibra carbono durante una tormentas eléctrica."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Estos trípodes son conductores de la electricidad, por lo que podrían actuar como un pequeño pararrayos. En estas condiciones meteorológicos es mejor no utilizarlos y mantenerlos guardados en la mochila."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-20",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p78-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Marcas como Gitzo, Manfrotto, Benro, Induro y Really Right Stuff ofrecen trípodes de gran calidad tanto en fibra de carbono como en aluminio."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En mi opinión, el mejor amigo de un trípode es una buena rótual. Yo uso la BH-55 de Really Right Stuff. Con un límite de 23 kg, es capaz de aguantar el peso de mi equipo sin problema. Me permite trabajar cómodamente y con mucha precisión."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Otras rótulas que me gustan son la Gitzo GH1382QD, la Kirk Enterprises BH-1 y la Arca Swiss Monoball Z1 SP, todas ellas robustas y de gran aguante (mínimo 13,5 kg)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-21",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Intervalómetro",
        "anchor": "b3-c8-sec-21"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-21",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los intervalómetros de cable de los que te he hablado en la sección de equipo de gama media son sin duda alguna una gran herramienta para cualqueir fotógrafo nocturno, pero a mí me gustan los intervalómetros inalámbricos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-21",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y seguramente te estás preguntado porque tanta insistencia con este tema... Pues porque me permiten trabajar con comodidad y realizar disparos a distancia mientras estoy iluminando la escena o cuando la cámara está en un sitio poco accesible (o en un árbol)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-21",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Uso el Phottix AION, que además tiene la ventaja de poderse conectar por cable a cualquier tipo de cámara cambiando el jack del conector."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-21",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una alternativa estupenda es un aparato que se llama CamRanger. Por ahora está disponible para cámaras Nikon, Canon, Fuji y Sony."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-21",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es un dispositivo independiente que conectas a tu cámara réflex o sin espejo mediante un cable USB. Crea una red WiFi ad hoc a la que puedes conectar tu teléfono móvil o tu tableta (iOS, Android y Windows). Gracias a la aplicación de CamRanger puedes controlar tu cámara sin necesidad de ordenador ni conexión a Internet."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-21",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y lo mejor de todo es que este aparato es autónomo. Por tanto, si el dispositivo móvil se desconecta, el CamRanger tiene memoria para seguir disparando. Imagina que estás haciendo un timelapse, tu secuencia se rompería si la cámara no sigue haciendo fotos en el intervalo que has establecido..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-21",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, el CamRanger sirve para muchos tipos de fotos: timelapses (de la Vía Láctea, de rastros de estrellas, de eclipses solares o de eclipses lunares...), horquillado (bracketing en inglés), enfoque por apilamiento (focus stacking en inglés) para macro y paisajes... ¡y mil cosas más!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-21",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p80-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-22",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Tarjetas de memoria",
        "anchor": "b3-c8-sec-22"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-22",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Compra las tarjetas SD de mayor calidad posible (como las de SanDisk o ProGrade) para minimizar el riesgo de perder tus fotos y disponer de la mayor velocidad de transferencia."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-22",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Minimizar el intervalo de tiempo entre fotos es muy importante cuando haces muchas exposiciones consecutivas a alta velocidad."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-22",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Las tarjetas SDXC UHS-II Class U3 son ideales para fotógrafos profesionales. Su velocidad de escritura es excelente y tienen un intervalo de tiempo increíblemente corto entre dos exposiciones consecutivas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-22",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además, deberías utilizar tarjetas de alta capacidad (64GB, 128GB o incluso 256GB) para evitar quedarte sin espacio de almacenaje en medio de una sesión de timelapse o al disparar lluvias de estrellas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-22",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "A pesar de que todavía hay cámaras que utilizan tarjetas CompactFlash (CF), es un sistema que está desapareciendo poco a poco."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-22",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y para sustituirlo, SanDisk, Nikon y Sony lanzaron un nuevo formato de tarjeta, el XQD disponible en algunos modelos con sensor de formato completo (Nikon D4, D4s, D5 y D850; Panasonic S1 y S1R), APS-C (Nikon D500) y sin espejo (Nikon Z6, Z6 II, Z7 y Z7 II). Son tarjetas"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-22",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Con una gran capacidad de almacenaje (desde 32GB a 256GB)."
            }
          ],
          [
            {
              "text": "Cuya velocidad de lectura y de grabación es muy rápida (400MB/s frente a los 160MB/s de una tarjeta CF o los 250MB/s de una tarjeta SD)."
            }
          ],
          [
            {
              "text": "Muy seguras, resistentes y con una durabilidad increíble. Posteriormente, en 2017, CFexpress lanzó la última tarjeta de memoria estándar de la CompactFlash Association con 2 nuevos factores de forma, llamados Tipo A y Tipo C, con el factor de forma XQD existente convirtiéndose en Tipo B."
            }
          ],
          [
            {
              "text": "El Tipo A, hasta ahora, sólo ha sido adoptado por Sony en todos sus modelos más recientes."
            }
          ],
          [
            {
              "text": "El Tipo B es un formato mucho más común que ofrece un precio más bajo. Ha sido ampliamente adoptado por Nikon en su serie Z, Canon en algunos cuerpos EOS R, y Panasonic en la S1/S1R y GH6."
            }
          ],
          [
            {
              "text": "El Tipo C aún no se fabrica. Ah, y te explico un pequeño truco... ;)"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-22",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Puedes utilizar la Calculadora de timelapse de PhotoPills para calcular el espacio de memoria que vas a necesitar, así te asegurarás de llevar suficientes tarjetas de memoria."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-23",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Baterías",
        "anchor": "b3-c8-sec-23"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-23",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cargar las baterías es uno de los rituales de todo fotógrafo antes de realizar una salida fotográfica. Comprueba y carga a tope todas las baterías de tus cámaras y algunas de repuesto por si acaso. Dependiendo del tipo de cámara y de fotografía que tengas pensado hacer, el número de baterías puede variar entre 2-3 (réflex) hasta 6 o más (sin espejo)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-23",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "No obstante, ten en cuenta que con temperaturas bajas las baterías tienen una duración inferior. Por eso si tienes pensado hacer sesiones fotográficas largas a bajas temperaturas, deberías utilizar una empuñadura (grip en inglés) con baterías extra. Esto evitará que durante las noches frías, sobre todo en invierno, te quedes sin baterías en medio de la sesión."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-23",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Utilizo una Nikon D4s o una Nikon Z6. Ambas me permiten realizar sesiones largas (timelapse y lluvias de estrellas) sin problemas de batería."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-23",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p82-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-23",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si no tienes una empuñadura, pero aún así quieres pasar varias horas capturando un timelapse, tendrás que cambiar la batería lo más rápido posible."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-23",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Asegúrate de no mover la cámara en el proceso, sería una pena llegar a casa y descubrir que todo el timelapse ha salido movido. Lógicamente, un trípode robusto y una buena rótula son más importantes que nunca.... Te permitirán cambiar la batería sin mover la cámara."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-23",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Antes de salir de casa, no olvides comprobar que las baterías de las linternas, paneles LED, flashes y frontal también estén completamente cargadas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-23",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por último, tampoco está de más llevar una batería externa para cargar tu móvil o tu tableta."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-24",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Dollies y sliders (para hacer timelapses)",
        "anchor": "b3-c8-sec-24"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-24",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sólo necesitas estos accesorios para hacer un timelapse."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-24",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los dollies y sliders son estupendas herramientas que permiten dar movimiento a un timelapse, ya sea moviendo la cámara físicamente a lo largo de un raíl, rotando sobre uno o varios ejes o una combinación de estos movimientos. Así, el vídeo dispondrá de más dinamismo comparado con imágenes estáticas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-24",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Según tu presupuesto, puedes comprar sliders que permitan distintos movimientos de la cámara:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-24",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "1 eje: La cámara se desliza desde un lado del raíl y acaba al final del otro extremo."
            }
          ],
          [
            {
              "text": "2 ejes: Además de deslizarse, puedes rotar la cámara horizontalmente (barrido o \"pan\" en inglés) o verticalmente (\"tilt\" en inglés)."
            }
          ],
          [
            {
              "text": "3 ejes: El sistema permite que la cámara se deslice, haga barridos o rote verticalmente. El vídeo 'Ibiza Lights III' producido por Jose Antonio Hervás es un ejemplo perfecto de cómo puedes usar sliders para crear timelapses impresionantes. Además, incluye muchas escenas planificadas con PhotoPills."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-24",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Dynamic Perception, Syrp, PocketSlider y mSlider son muy buenas marcas que deberías tener en cuenta a la hora de comprar un slider."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Equipo antihumedad",
        "anchor": "b3-c8-sec-25"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Uno de los aspectos más molestos de la fotografía nocturna es la condensación. La humedad del aire puede condensarse en la fría superficie frontal del objetivo y estropear las fotos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Éstas son algunas de las soluciones existentes para combatir este problema."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Parasol Este es el primer elemento que deberías utilizar como protección. El parasol no sólo sirve para utilizarlo de día y evitar reflejos, también es importante para la fotografía nocturna."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El parasol te ayuda, además de proteger el objetivo de cualquier golpe o caída, a que la humedad tarde más en condensarse sobre el objetivo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p84-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ventilador Un simple ventilador de PC puede ayudarte a que el objetivo se mantenga seco y sin condensación, gracias a la corriente constante de aire que genera. Para noches que no sean muy húmedas es una solución ideal. Eso sí, necesitarás de una fuente de alimentación que tenga suficiente capacidad como para mantener el ventilador encendido durante toda la sesión nocturna y algún sistema de soporte para poder orientar el ventilador hacia el objetivo. Por suerte estos ventiladores tienen un consumo muy bajo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En mi caso, utilizo una batería pequeña portátil Li-ion recargable de 12V y 3800mAh con conectores jack de 5,5mm y USB. Sólo tuve que adaptar al cable del ventilador un conector jack de 5,5mm y añadirle un tubo flexible loc-line con una pinza para poderlo sujetar al trípode."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p85-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Calentador antirrocío (dew heater en inglés) Esta herramienta calienta el objetivo a una temperatura superior al punto de rocío, evitando en todo momento que se te empañe el objetivo. Busca un calentador que sea ligero para evitar cargar con más peso que el estrictamente necesario, ya que muchas veces llegar a puntos con poca contaminación lumínica implica realizar largas caminatas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Las soluciones comerciales existentes se componen de un calentador, una batería para alimentarla y un controlador. Puedes ir ajustando la potencia del calentador con el controlador para que su temperatura siempre esté por encima del punto de rocío Por un lado, el controlador te da la ventaja de gestionar de forma más eficiente la energía de la batería. Pero, por otro lado, es otro aparato que tienes que cargar y llevar. A veces no vale la pena llevar tantas cosas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p86-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Yo he optado por una solución más barata y más ligera: utilizar el calentador sin controlador, conectándolo directamente a una batería de petaca. Ya lo sé, no puedo regular la potencia, pero he comprobado que este sistema aguanta casi 5 horas. Si necesitas más tiempo o si las baterías tienen una duración menor porque la temperatura es muy baja, lo más sencillo es que lleves una batería de recambio."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En definitiva, lo único que necesitas es una tira calentadora, una batería de petaca y un cable para conectar el calentador a la batería."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Tira calentadora. Tal vez las dos marcas más conocidas de tiras calentadoras son Dew-Not y Kendrick. Yo uso una Dew-Not 3\" DN004, que se adapta perfectamente a mi Nikon 14-24mm f/2.8. Este modelo mide 33cm (13\"), suficiente para abarcar el diámetro del objetivo. Asegúrate de comprar una tira con una longitud suficiente para que abarque todo el diámetro del objetivo."
            }
          ],
          [
            {
              "text": "Batería. Para que la tira funcione, uso una batería de 12V y unos 3800mAh. La misma batería de petaca que utilizo para alimentar el ventilador de PC descrita en el apartado anterior sirve perfectamente. Llevar contigo una de recambio siempre es buena idea."
            }
          ],
          [
            {
              "text": "Cable conector. Como la mayoría de tiras calentadoras tienen un conector RCA macho"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p87-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "y las baterías portátiles un jack de 5,5mm, necesitas también un cable adaptador RCA/Jack 5,5mm. Construí el mío a partir de un cable RCA y otro con jack 5,5mm."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Otro calentador estupendos es el multi-bodywarmer de TheHeatCompany."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Fotógrafos, equipos de cine y deportistas de todo el mundo usan este tipo de calentadores."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Con ellos nunca tendrás problemas de batería. Simplemente los pegas en la parte inferior del objetivo y ya está."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por último, asegúrate de que también te llevas una silla cómoda, bebidas, aperitivos, tu música preferida (Pink Floyd en mi caso) y un cargador de batería portátil para mantener todos tus dispositivos electrónicos cargados, ¡incluyendo los altavoces!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Empezar una sesión de fotografía nocturna con la canción \"Shine On Crazy Diamond\" no tiene precio."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-25",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p88-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-26",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Comparando el rendimiento del equipo básico, avanzado y profesional",
        "anchor": "b3-c8-sec-26"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-26",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En los apartados anteriores, he explicado los diferentes tipos de equipo (básico, avanzado y profesional) que puedes encontrar en el mercado. Ahora, me gustaría enseñarte los diferentes resultados que puedes obtener con cada equipo al fotografiar la Vía Láctea."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-26",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Usé las siguientes cámaras y objetivos para las fotos de prueba:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-26",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Sony RX-100 III (compacta con sensor de 1\")"
            }
          ],
          [
            {
              "text": "Nikon D3000 (APS-C básica) + 18-55mm f3.5-5.6"
            }
          ],
          [
            {
              "text": "Nikon D7000 (APS-C avanzada) + Tokina 11-16mm f2.8"
            }
          ],
          [
            {
              "text": "Nikon D600 (formato completo avanzada) + Samyang 14mm f2.8"
            }
          ],
          [
            {
              "text": "Nikon D700 (formato completo profesional) + Nikkor 14-24 f2.8 Para poder comparar la calidad de estas combinaciones de cámaras y objetivos, hice las siguientes fotografías desde el mismo lugar y encuadre (aproximado)."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-26",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hice todas las fotos a una temperatura de color de 3800K o con un balance de blancos configurado en Tugsteno si no se podía configurar en manual. El revelado de todas las imágenes es exactamente el mismo. Para ello, creé un ajuste predeterminado (preset en inglés) en Lightroom."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-26",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b3-c8-p90-1",
        "rightAssetId": "b3-c8-p90-2"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-26",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b3-c8-p91-1",
        "rightAssetId": "b3-c8-p91-2"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-26",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En resumen, la mejor opción para fotografíar la Vía Láctea sin importar el equipo que tienes es la combinación de una cámara de formato completo con un objetivo gran angular (con una distancia focal de 14mm, por ejemplo) y los más luminoso posible (como un f/2.8)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-26",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c8-p92-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b3-c8-sec-26",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Objetivos Sony FE Ideales, Intervalómetro Integrado y Batería NP-FZ100 en la Sony Alpha 7 IV",
        "summary": "Cómo aprovechar el hardware nativo de tu Sony Alpha 7 IV para ahorrar peso y accesorios externos en tu mochila nocturna:",
        "bulletPoints": [
          "Objetivos estrella en montura Sony E: Sony FE 14mm f/1.8 GM, Sony FE 20mm f/1.8 G y Sony FE 24mm f/1.4 GM (mínima aberración de coma sagital en las esquinas a máxima apertura).",
          "No necesitas comprar un intervalómetro externo: la Sony A7 IV incluye [Func. toma interv.] integrada en el menú para secuencias de apilado (stacking) o time-lapses de la Vía Láctea.",
          "Alimentación continua por USB-C Power Delivery (PD): puedes conectar una batería externa (Powerbank PD) al puerto USB-C para sesiones de toda la noche a bajas temperaturas."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000656452.html",
        "manualLabel": "Manual Sony A7 IV — Función de Toma con Intervalo (Intervalómetro Integrado)",
        "cameraPath": "MENU → Toma → Modo manejo → Func. toma interv."
      }
    }
  ],
  "9": [
    {
      "sectionAnchor": "b3-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Tuviste una idea."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La planificaste, tal vez hace ya unos meses."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y, por fin, te encuentras en un lugar precioso y al aire libre con un cielo oscuro y completamente limpio, preparado para hacer la foto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Puede que prefieras disfrutar de la escena solo, pero ¿por qué no compartir la experiencia con los colegas para variar?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Creo profundamente en el asociacionismo como forma de ayudar a los demás y compartir conocimientos, enriqueciendo la fotografía de cada uno por el camino. Mis alumnos hacen las salidas más interesantes y desafiantes."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En este caso, ¡llegar al lugar exacto de disparo con suficiente antelación es clave!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c9-p94-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Veamos cómo tienes que preparar la sesión fotográfica, paso a paso."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Llega con tiempo a la localización",
        "anchor": "b3-c9-sec-2"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Puedes usar la Realidad aumentada Noche de PhotoPills para comprobar que estás en el lugar correcto y que tendrás la Vía Láctea en la posición que quieres."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Coloca el trípode, la rótula, la cámara y el objetivo",
        "anchor": "b3-c9-sec-3"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Coloca el trípode sobre una superficie sólida justo en el punto de disparo que has planeado con tanto esmero."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "A continuación, asegúrate de que el trípode está estable y pon el objetivo más rápido y angular que tengas a tu cámara. Lo que necesitas básicamente es un objetivo gran angular para maximizar el tiempo de exposición y con una gran apertura para capturar la mayor cantidad de luz posible."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para fotografiar la Vía Láctea y el puente natural, usé mi Nikon D700 de formato completo y un objetivo Nikon 14-24mm f/2.8 en mi trípode A4580T de Benro junto con una rótula Kirk Enterprises BH-1."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c9-p95-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-4",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Quita el filtro UV",
        "anchor": "b3-c9-sec-4"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si eres de los que utiliza un filtro ultravioleta (UV) para proteger tu objetivo, quítalo en cuanto empieces a montar el equipo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "No soy partidario de añadir un cristal adicional al objetivo si no es con la intención de controlar mejor la luz."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En fotografía nocturna, un filtro ultravioleta (UV) puede incluso estropear tus fotos. Este tipo de filtro reduce ligeramente la nitidez y el contraste de sus imágenes. Pero también puede provocar reflejos, halos y destellos (flare en inglés)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-4",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c9-p96-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-5",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Usa un filtro contra la contaminación lumínica (opcional)",
        "anchor": "b3-c9-sec-5"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si hay contaminación lumínica en tu escena debido a fuentes de luz de vapor de sodio, usa un filtro contra la contaminación lumínica para quitar en cámara el brillo amarillento que suelen producir."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-6",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Desactiva el sistema de estabilización del objetivo",
        "anchor": "b3-c9-sec-6"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hay objetivos que llevan lo que se denomina estabilizador de vibraciones. Canon lo llama Image Stabilization (IS), mientras que Nikon lo denomina Vibration Reduction (VR) y Sigma, Optical Stabilizer (OS). Otras marcas como Sony, Olympus o Pentax se han centrado en sistemas integrados en la cámara."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El sistema de estabilización del objetivo te permite disparar a pulso en condiciones de escasa luz a velocidades de obturación más lentas de lo normal sin que la imagen quede movida. Esto es posible porque el objetivo intenta compensar las vibraciones que produces."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando uses un trípode, deberías desactivar esta función. Incluso sin tener movimiento, los elementos mecánicos destinados a reducir las vibraciones (pequeños giroscopios) podrían intentar corregir movimientos inexistentes, provocando vibraciones y afectando a la nitidez de la imagen, sobre todo a velocidades entre 1/15s y 1s."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por este motivo y por precaución, te recomiendo que desactives el sistema de estabilización del objetivo cuando uses el trípode."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Reducción de ruido en largas exposiciones ¿sí o no?",
        "anchor": "b3-c9-sec-7"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El ruido es el mayor enemigo de la fotografía nocturna."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sea cual sea la cámara que utilices tendrás problemas de ruido en las zonas de sombras, sobre todo utilizando ISOs altos o con temperaturas cálidas. Intenta comprar la cámara con mejor comportamiento ante el ruido que te puedas permitir."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Estos son diferentes tipos de ruido que puedes ver en una larga exposición:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Ruido de luminancia. Se produce debido a la falta de llegada de luz al sensor. Su patrón es fijo y aparece o es más facil de observar en las zonas oscuras."
            }
          ],
          [
            {
              "text": "Ruido cromático. Este tipo de ruido altera el color de los píxeles pero no su luminancia. De ahí su nombre. La culpa es de la temperatura del sensor. Este tipo de"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "ruido se extiende por toda la imagen, no sólo en las sombras como ocurre con el ruido de luminancia."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Ruido térmico. Aparece en exposiciones muy largas por calentamiento del sensor, pudiendo provocar bandeado (banding en inglés) y viñeteo de color magenta, verde o incluso azul en las esquinas del fotograma. La única manera de poder evitar este ruido es componiendo más escena, reencuadrando y añadiendo a la foto las zonas afectadas por el bandeado. Posteriormente, puedes recortarla en el procesado. También puede reducirlo enfriando el sensor (por ejemplo, dejando reposar la cámara durante unos minutos) o limitando el tiempo de exposición."
            }
          ],
          [
            {
              "text": "Hot pixels. Son una serie de puntos de color rojo, azul o verde que aparecen debido al sobrecalentamiento del sensor. La ventaja es que siempre aparecen en la misma posición y en cada fotograma mantendrán su posición, haciendo que sea fácil su localización y eliminación posterior mediante un programa como Lightroom o Photoshop."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Casi todas las cámaras disponen de una opción de configuración que habilita la reducción de ruido en largas exposiciones. Este sistema está basado en el concepto de que dos exposiciones consecutivas con los mismos parámetros (velocidad de obturación, ISO y temperatura del sensor) presentarán prácticamente el mismo ruido."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si activas esta función, después de hacer tu larga exposición, la cámara hace automáticamente una segunda foto con los mismos parámetros pero sin dejar que la luz llegue al sensor. De esta manera lo único que captura es el ruido. Por último, la cámara detecta dónde está el ruido de esta segunda foto y lo elimina de la primera."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Uno de los principales problemas de este método es que, al tenerlo activado, tardarás el doble de tiempo para hacer una sola fotografía. Es decir, si estás haciendo una exposición de 30 segundos, la cámara tardará otros 30 segundos en eliminar el ruido."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Así es que si quieres hacer el mayor número de fotos posible, como por ejemplo durante un timelapse, lluvias de estrellas o rastros de estrellas, desactívalo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Yo nunca lo uso."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Prefiero echar un vistazo a mi pantalla LCD para comprobar si la Vía Láctea ha quedado lo suficientemente brillante, si la iluminación del primer plano es correcta o si la foto está perfectamente enfocada y poder corregir lo que haga falta. No me gusta tener que esperar otros 30 segundos, prefiero hacer otra foto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Posteriormente, si hace falta, elimino los hot pixels y el ruido en el procesado."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por último, tienes la alternativa de activarlo sólo cuando vayas a hacer la foto definitiva. Es decir, deberías trabajar sin esta opción mientras se haces las fotos de prueba y activarlo"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "cuando hayas conseguido una expuesta correctamente."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "También te recomiendo activarlo si tu cámara produce bastante ruido. Es una manera de intentar sacar la mejor imagen de la cámara antes de procesarla."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-8",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Dispara en RAW",
        "anchor": "b3-c9-sec-8"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los archivos RAW contienen todos los datos de las imágenes que ha capturado el sensor."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por tanto, este formato de imagen te permite producir imágenes de mejor calidad y corregir en el procesado problemas que serían imposibles de corregir si disparases en formato JPEG. Esto se debe a que cuando se dispara en JPEG, mucha de la información de la imagen se comprime y se pierde."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hay que tener en cuenta que la imagen que ves en el LCD es una copia en JPG del archivo RAW, por lo que el histograma que estás viendo en la cámara no es exactamente el del archivo RAW."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-9",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Usa la distancia focal más corta posible",
        "anchor": "b3-c9-sec-9"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Selecciona la distancia focal más corta posible (14mm, 18mm, 24mm, etc.) Trata de mantenerla por debajo de 35mm por dos motivos:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-9",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Para maximizar el campo de visión y capturar la mayor cantidad de cielo posible."
            }
          ],
          [
            {
              "text": "Para maximizar el tiempo de exposición (establecer la velocidad de obturación más baja posible) para capturar tanta luz como sea posible y, eventualmente, conseguir estrellas como grandes puntos brillantes."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Lo explicaré mejor en la siguiente sección, cuando profundice en la velocidad del obturador (tiempo de exposición)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-10",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Pon la cámara en modo Manual (M)",
        "anchor": "b3-c9-sec-10"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-10",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si utilizas el modo automático de disparo de la cámara, no podrás capturar la Vía Láctea."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-10",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El modo de disparo Manual (M) te da control total sobre la exposición al poder seleccionar la apertura, la velocidad de obturación, ISO y el balance de blancos que quieras. Tendrás que usarlo para recoger tanta luz como sea posible y así capturar estrellas como grandes puntos brillantes mientras consigues una foto correctamente expuesta."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-11",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Usa la apertura más grande que puedas",
        "anchor": "b3-c9-sec-11"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Abre el obturador todo lo que puedas para capturar la mayor cantidad de luz posible. Ajusta el objetivo a su apertura más grande (el menor número f), por ejemplo f/1.4, f/2.8 o f/3.5, dependiendo de tu objetivo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-12",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Enfoca",
        "anchor": "b3-c9-sec-12"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando se trata de enfocar, tienes dos opciones:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-12",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Enfocar a la distancia hiperfocal."
            }
          ],
          [
            {
              "text": "Enfocar a una estrella. Elige uno u otro método dependiendo del que más te guste."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Enfoca a la distancia hiperfocal",
        "anchor": "b3-c9-sec-13"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Al fotografiar la Vía Láctea, quieres que te quede enfocada toda la imagen, desde el primer plano hasta las estrellas. Sabiendo que cuando enfocas tu cámara a la distancia hiperfocal, te aseguras tener enfocado desde la mitad de esta distancia hasta el infinito, olvídate de otros métodos manuales como \"el ajuste de enfoque a infinito con Live View\" o \"girar el anillo de enfoque hasta infinito\". Sólo necesitas calcular la distancia hiperfocal para la distancia focal y la apertura que desees utilizar."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero hay un problema..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Hacer los cálculos!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si te gusta la fotografía, pero odias las matemáticas, eres como yo. Sólo tienes que seleccionar tu cámara, la distancia focal y la apertura en la calculadora de Profundidad de campo de PhotoPills para conseguir automáticamente la distancia hiperfocal."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una vez calculada la distancia hiperfocal, sólo tienes que enfocar ahí."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como es imposible enfocar exactamente a la hiperfocal, asegúrate siempre de que te pasas un poquito (enfocas más lejos). Así te aseguras de que las estrellas te queden perfectamente enfocadas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Puedes aprender todo lo que necesitas saber de la distancia hiperfocal en nuestra detallada guía de profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b3-c9-p101-1",
        "rightAssetId": "b3-c9-p101-2"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En el siguiente vídeo te enseño cómo enfocar a la hiperfocal paso a paso:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Volviendo a mi imagen de la Vía Láctea, la hice con mi Nikon D700 utilizando una distancia focal de 14mm y una apertura de f/2.8. Por tanto, según la calculadora de Profundidad de campo de PhotoPills mi distancia hiperfocal era de 2,32m."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Lo siguiente que hay que hacer es utilizar una linterna para iluminar algo que esté a la distancia hiperfocal (en este caso a 2,32m o a una distacia ligeramente superior. Después, utiliza el sistema de enfoque automático de la cámara para enfocar. Por último, pon el enfoque en manual para que no cambie nada."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Coloca la cámara en el trípode y ten cuidado de no cambiar el enfoque sin querer."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si tu objetivo tiene la escala de distancias incorporada puedes hacerle una marca de enfoque. Calcula la distancia hiperfocal, elige la máxima apertura de tu objetivo, enfoca a esa distancia y haz una marca en el objetivo. De esta manera no tendrás que enfocar antes de hacer la fotos, bastará con hacer coincidir la marca."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Permíteme que insista. Enfocar exactamente a la distancia hiperfocal es muy difícil. Por tanto, es mucho mejor pasarse de esta distancia que no quedarse corto. Si te quedas corto el plano lejano de enfoque deja de estar al infinito y las estrellas saldrán borrosas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En cambio, si te pasas un poco, retrasas un poco el plano cercano de enfoque, pero las estrellas estarán totalmente enfocadas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c9-p102-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si vas a hacer un timelapse, no te olvides de comprobar que la cámara está enfocada antes de empezar a disparar. Una vez toqué accidentalmente el objetivo y después de estar 3 horas aguantando el frío, me di cuenta que todas las fotos estaban desenfocadas... ¡No me hizo ninguna gracia!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pues esto es todo. Con este método sencillo conseguirás maximizar la profundidad de campo, asegurándote de obtener una imagen perfectamente enfocada y con más detalle."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"Espera un minuto Toni... si tengo un sujeto de primer plano, por ejemplo un roca, que está más cerca de mi cámara que el plano cercano de la hiperfocal (a la mitad de la distancia hiperfocal). ¿Qué pasa si quiero que también quede enfocado?\" En términos generales, cuando enfocas a la distancia hiperfocal, el plano cercano de profundidad de campo está a la mitad de esta distancia. Esto quiere decir que todo lo que esté entre tu cámara y la mitad de la distancia hiperfocal estará desenfocado."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por ejemplo, si la distancia hiperfocal está a 2,32m, quiere decir que todo lo que esté entre mi cámara y 1,16m, como la roca que mencionas, quedará borroso. En cambio, todo lo que está a partir de 1,16m hasta infinito estará perfectamente enfocado: en este caso el paisaje y las estrellas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La solución a este problema es hacer una doble exposición y hacer un apilado de enfoque (focus stacking) en el procesado."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En la primera imagen, enfoca a la distancia hiperfocal para enfocar todo lo que está entre la mitad de la distancia hiperfocal y el infinito. En la segunda imagen, enfoca al primer plano, la roca de este ejemplo, para hacer una segunda exposición. Luego, en el procesado, fusiona estas dos imágenes utilizando máscaras de capa, seleccionando las zonas enfocadas de cada foto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si quieres aprender más sobre el apilado de enfoque (focus stacking), echa un vistazo a este tutorial de Antonio Prado."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-14",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "Enfoca a una estrella",
        "anchor": "b3-c9-sec-14"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-14",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si quieres que las estrellas estén bien enfocadas, pero no te importa perder un poco de nitidez en el sujeto, enfoca a una estrella."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-14",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pon la cámara y el objetivo en enfoque manual."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-14",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ahora, busca una estrella y haz zoom para ampliarla (o usa la opción del Ampliador de Enfoque). Después, gira el anillo de enfoque para enfocarla. Gíralo hasta que veas la estrella como un pequeño punto (en realidad, el punto más pequeño posible)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-15",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Enfoca de noche subiendo el ISO",
        "anchor": "b3-c9-sec-15"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Al principio de la sesión de fotos has hecho el trabajo más difícil: encontrar el punto exacto de disparo. Ya sabes la foto que quieres, desde dónde disparar y la posición de la Vía Láctea que vas a tener."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sin embargo, ahora necesitas afinar su composición y conseguir el encuadre que quieres. Y tienes que hacerlo aunque esté completamente oscuro...."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para ello, tienes que usar el ISO más alto que te permita tu cámara (25600, 12800, 6400, 3200)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Por qué?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Porque quieres que la cámara haga la foto lo más rápido posible. Estás trabajando en tu composición, así que el ruido no tiene importancia. No creo que quieras esperar 20 o 30 segundos entre cada foto de prueba para ajustar tu encuadre, ¿verdad?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una vez que la cámara esté sujeta al trípode, haz tantas fotos de prueba como necesites para comprober que consigues el encuadre que quieres y ve ajustando si es necesario."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Genial!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ahora que todo está listo y todos los elementos están en la posición correcta en tu encuadre, asegúrate de que todo tu equipo está estable y tu cámara está fuertemente sujeta a la rótula del trípode."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Ajusta la velocidad de obturación y evita los rastros de estrellas con la regla 500 o con la regla NPF",
        "anchor": "b3-c9-sec-16"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuanto más tiempo mantengas el obturador abierto mejor. Sólo tienes una limitación: los rastros de estrellas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Necesitas capturar la mayor cantidad de luz posible para conseguir estrellas como grandes puntos brillantes. Pero no quieres que las estrellas aparezcan como líneas blancas en la imagen debido a la rotación de la Tierra. En otras palabras, no quieres capturar los rastros que dejan las estrellas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Así es que ¿cuánto tiempo puedes mantener el obturador abierto y evitar los rastros de estrellas?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La forma más sencilla de estimar la máxima velocidad de obturación (el tiempo de exposición máximo) para evitarlos es utilizar la llamada regla de los 500."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Básicamente, para determinar el tiempo óptimo de exposición, usa 500 como referencia y divídelo por la distancia focal efectiva del objetivo:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "tiempo de exposición = 500/(factor de multiplicación × distancia focal) Por lo tanto, a menor distancia focal más largo es el tiempo de exposición, permitiéndote obtener mejores imágenes."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por desgracia, se ha demostrado que la regla de los 500 no sirve en la mayoría de los casos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Por qué? Porque te da un tiempo de exposición más largo (una velocidad de obturación demasiado lenta) del que necesitas. Y acabas con rastros de estrellas en tus fotos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Así es que hemos implementado una fórmula más precisa en la calculadora de Estrellas como puntos de PhotoPills: la regla NPF."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Déjame saciar tu curiosidad:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "N es el símbolo de la apertura."
            }
          ],
          [
            {
              "text": "P es el fotosito del sensor de tu cámara (del inglés photosite)."
            }
          ],
          [
            {
              "text": "F es la distancia focal."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c9-p105-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero antes de contarte más al respecto... ¡Tengo que darle las gracias a Aaron Priest por descubrirnos esta nueva fórmula!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Desarrollada por Frédéric Michaud y La Société Astronomique du Havre, la regla NPF tiene en cuenta tres nuevas variables además de la distancia focal:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "La apertura."
            }
          ],
          [
            {
              "text": "La distancia entre los píxeles de tu cámara."
            }
          ],
          [
            {
              "text": "Y la declinación mínima de las estrellas que se capturan en el encuadre. Veamos por qué estas variables son importantes y por qué debes tenerlas en cuenta."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por un lado, si te gusta la astronomía y la fotografía de rastros de estrellas, sabrás que, con un mismo tiempo de exposición, los arco trazados por las estrellas cerca del ecuador celeste son más largos que los trazados por las estrellas cerca de la Estrella Polar."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y la declinación es la variable que te dice cuán lejos está una estrella del ecuador celeste."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una estrella en el ecuador celeste tiene 0º de declinación (se mueve más rápido), y una estrella cerca del polo norte celeste, como la Estrella Polar por ejemplo, tiene 90º de declinación (no se mueve)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, dependiendo de la zona del cielo que estés fotografiando (cerca o lejos del ecuador celeste), podrás usar un tiempo de exposición más corto o más largo (velocidad de obturación más rápida o más lenta) para evitar los rastros."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por otro lado, cuanto menor sea la distancia entre los píxeles de tu cámara, menor será el tiempo de exposición para evitar los rastros. Esto se debe a que cuanto mayor es la resolución del sensor, más detalle capta en la foto y, por lo tanto, el movimiento de las estrellas es más perceptible. La distancia entre los píxeles depende del tamaño del sensor y de los megapíxeles de la cámara."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por último, la apertura también es importante."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En el modo Preciso (valor de precisión) y al calcular el tiempo de exposición, la regla NPF permite a la estrella mover su radio sobre la imagen final. Esto asegurará que las estrellas se siguen viendo como un círculo (la relación entre la longitud y la altura es inferior a 1,5)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ten en cuenta que este es un enfoque muy restrictivo que te dará tiempos de exposición muy cortos (velocidades de obturación rápida). ¡Utilízalo solamente para impresiones grandes!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"Genial Toni ... ¿Pero cómo afecta la apertura al tiempo de exposición (o velocidad de obturación)?\""
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Bueno, el tamaño de las estrellas depende, entre otros factores, de la apertura."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuanto mayor sea la apertura, menor será la estrella. Por el contrario, cuanto más pequeña sea la apertura, más grande será la estrella. Por lo tanto, si el diámetro de una estrella aumenta, la estrella puede moverse a lo largo de una distancia más larga antes de que el rastro sea perceptible, y el tiempo de exposición puede ser más largo (velocidad de obturación más lenta)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En el modo Estándar (valor de precisión), la regla NPF permite que la estrella mueva su diámetro. Si decides utilizar este modo, obtendrás tiempos de exposición más largos. Este es el modo que suelo usar, ¡y estoy muy contento con los valores que obtengo!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Alerta matemática!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La difracción aumenta a medida que la apertura se hace más pequeña, por lo que el disco de Airy se hace más grande. Por lo tanto, la estrella se vuelve más grande al cerrar la apertura."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En definitiva, si quieres evitar a toda costa los rastros de estrellas en tus fotos, ten en cuenta la apertura, la distancia entre píxeles y la declinación mínima para calcular el tiempo de exposición."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Sigues ahí?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡No te asustes! PhotoPills hace todos los cálculos por ti."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Veamos cómo hacerlo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Abre PhotoPills, pulsa Estrellas como puntos (menú Píldoras) y luego:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "1. Elige tu cámara. La calculadora tendrá en cuenta el tamaño del sensor y los megapíxeles para calcular la distancia entre los píxeles."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "2. Establece la distancia focal y la apertura."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "3. Si conoces la declinación mínima de la estrella que vas a capturar en tu encuadre, establécela."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si no sabes cuál es la declinación o tienes dudas, fija la declinación de las estrellas a 0º. Ese es el peor escenario (es decir, el ecuador celeste entra en tu encuadre), por lo que el tiempo de exposición funcionará sin importar la dirección de disparo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "También puedes usar el botón RA (abajo) para calcularlo. Apunta el móvil hacia donde quieras encuadrar la toma, y la declinación y el tiempo máximo de exposición se calcularán automáticamente."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "4. Elige la precisión. El valor Estándar es el valor recomendado para la mayoría de los casos, y te permite usar tiempos de exposición más largos (velocidades de obturación"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "más lentas). Esto te permitirá mantener el ISO relativamente bajo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sin embargo, si quieres imprimir en un formato muy grande, define este valor usando la opción Preciso. Obtendrás un tiempo de exposición muy corto (velocidad de obturación rápida). Ten en cuenta que esto te obligará a subir el ISO para conseguir la exposición adecuada, obteniendo imágenes con mucho ruido en la mayoría de las cámaras. Por eso te sugiero que uses el valor Estándar siempre que sea posible."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "5. A pesar de que la aplicación te mostrará los resultados tanto de la regla de los 500 y como de la regla NPF, usa el tiempo de exposición (velocidad de obturación) que te da la regla NPF en la tabla de resultados. Utiliza este valor como punto de partida, haz una foto de prueba y ajusta los parámetros en consecuencia."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Echa un vistazo a las siguientes capturas de pantalla de PhotoPills."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La primera muestra la pantalla principal de la calculadora de Estrellas como puntos. Y la segunda, el modo de Realidad Aumentada."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además de la calculadora de la regla NPF, hay otra gran calculadora que puedes utilizar para evaluar el tiempo de exposición que necesitas: La calculadora de exposición avanzada de Ian Norman (en inglés)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es muy chula. ¡Deberías echarle un vistazo!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "A la hora de calcular el tiempo de exposición, Ian ha diseñado un sistema muy inteligente que te permite establecer la tolerancia de píxeles que estás dispuesto a aceptar."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b3-c9-p109-1",
        "rightAssetId": "b3-c9-p109-2"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Qué es la tolerancia de píxeles? El número de píxeles que una estrella puede cubrir antes de dejar un rastro."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por ejemplo, una tolerancia de píxeles de 7 píxeles significa que permites que las estrellas de tu encuadre se muevan a lo largo de una distancia máxima de 7 píxeles durante la velocidad de obturación recomendada (tiempo de exposición)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ten en cuenta que el uso de una tolerancia de 7 píxeles en la fórmula de Ian es bastante similar a usar el modo de precisión Estándar en la regla NPF."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y con una tolerancia de 3 píxeles, obtendrás un resultado muy similar al modo Preciso."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Antes de pasar a la siguiente sección, me gustaría hacer una última puntualización sobre el hecho de fotografiar la Vía Láctea utilizando distancias focales mayores (como 50mm o 85mm)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es bastante complicado porque el campo de visión tan estrecho del objetivo te obligará a utilizar tiempos de exposición más cortos para evitar rastros de estrellas causados por la rotación de la Tierra. Y si quieres evitarlos, deberás usar ISOs extremadamente altos, por lo que tendrás problemas de ruido en la imagen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La solución es usar una montura ecuatorial, que te permite compensar la rotación de la Tierra. En este caso, si quieres incluir el paisaje, tendrás que hacer una doble exposición, una para el cielo y otra para el paisaje."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sin embargo, una montura ecuatorial tiene muchas más ventajas. Así es como Christoph Malin experto en fotografía de estrellas, describe el efecto positivo de estas monturas en la fotografía de Vía Láctea:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"Utilizar una montura ecuatorial, como la Vixen Polarie, al fotografiar la Vía Láctea tiene muchas ventajas. Todos hemos visto muchas fotografías de la Vía Láctea o de constelaciones de estrellas a las que les falla el rango dinámico, los colores y el contraste."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando no utilizamos exposiciones lo suficientemente largas (proporcionadas por una montura ecuatorial), nos vemos forzados a aumentar el ISO y a ampliar la apertura empeorando la calidad de la imagen. El resultado es que, tras el procesado de estas imágenes, muchas estrellas acaban saturadas en blanco por haber usado un ISO tan alto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por eso muchas de estas fotografías tienen muchas estrellas blancas y con el mismo brillo, convirtiéndolas por desgracia en imágenes poco naturales. La realidad es que las estrellas tienen diferentes niveles de brillo y color."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Mi D700 ha sido capaz de demostrar esto hasta cierto punto, así como la D3s, debido al gran diodo del sensor. Por desgracia, normalmente no puedo utilizar"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "una montura ecuatorial para mis timelapses, pero si puedo hacerlo, lo hago. Las imágenes de la Vía Láctea quedan mucho mejor con una montura ecuatorial y una exposición de 1 minuto o incluso un poco más.\""
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-17",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Afina el ISO",
        "anchor": "b3-c9-sec-17"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Recuerda que has estado utilizando un ISO extremadamente alto para hacer tus fotos de prueba."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es momento de ajustarlo teniendo en cuenta:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-17",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "El triángulo de exposición."
            }
          ],
          [
            {
              "text": "Cuánto ruido produce tu cámara. Quieres conseguir la exposición correcta y ya has ajustado la apertura y la velocidad de obturación. Por lo tanto, sólo necesitas ajustar el ISO de acuerdo con los otros dos ajustes."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"Pero, ¿cuánto?\" Me encanta esta pregunta. ¡Gracias por hacerla! :D De nuevo, la velocidad del obturador (o tiempo de exposición) tiene que ser limitada para evitar rastros de estrellas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, para evitar una imagen subexpuesta, no te queda más remedio que subir el ISO. Cuanto más alto sea el ISO, más brillante será la Vía Láctea."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Subir el ISO amplifica la señal en los fotositos (píxeles) del sensor. En otras palabras, estás aumentando la sensibilidad del sensor. La cantidad de luz recogida será la misma pero se amplificará aumentando la exposición. Así que lleva tu cámara al límite."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ahora, es momento de afinar el ISO."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La ISO que utilizarás en la foto final depende en gran medida del comportamiento de tu cámara ante el ruido."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Empieza por un ISO relativamente alto (por ejemplo 6400, 3200, 1600) y sigue haciendo fotos de prueba. Después de cada foto de prueba (o mientras la haces, si tienes la opción de histograma en vivo), comprueba concienzudamente el histograma y amplía la imagen de tu pantalla LCD para comprobar cuánto ruido ha producido tu cámara. A continuación, ajuste el ISO en consecuencia."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Es el juego de prueba y error, pero se vuelve más fácil con un poco de práctica! ;)"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una cosa, si tu cámara tiene estas opciones, evita siempre usar ISOs que son amplificaciones por software en lugar de hardware, como los niveles H1 y H2."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hay muchas técnicas para reducir el ruido en el procesado, así que no tengas miedo de usar un ISO alto. Pero, al mismo tiempo, ten en cuenta que al reducir el ruido en el procesado suavizarás tu imagen y reducirás la nitidez. Necesitarás encontrar el equilibrio entre una imagen limpia y una imagen nítida. Por eso lo primero que necesitas es capturarlo correctamente en cámara."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-18",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Usa el balance de blancos en modo manual",
        "anchor": "b3-c9-sec-18"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo que respecta al balance de blancos, el objetivo es utilizar la temperatura de color adecuada para capturar una imagen realista de la Vía Láctea, enseñando la belleza de la naturaleza del modo más puro posible."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"¿Cuál es la temperatura de color de la Vía Láctea?\" Para muchos fotógrafos es alrededor de 4840K (amarillo pálido). Aunque en realidad depende de varios factores, así que juega con el balance de blancos hasta obtener una Vía Láctea más natural."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La contaminación lumínica o la luz de la luna, influirán seguramente cuando elijas el balance de blancos. Pero no te preocupes demasiado, porque como estás disparando en RAW, podrás ajustar el balance de blancos más tarde en el procesado."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Un truco que aprendí de Christoph Malin, y que puede ayudarte a conseguir el color correcto de la Vía Láctea, es usar estrellas notables como referencia. Asegúrate de que los colores que capturas coincidan con su rango de temperatura individual. Por ejemplo, si capturas superestrellas gigantes como Antares o Marte y aparencen azules en la foto, deberás ajustar el balance de blancos hasta que tengan su color natural: rojo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Volviendo a mi imagen de la Vía Láctea y el puente natural..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Había una fuerte contaminación lumínica en la escena, que venía de la parte de atrás del puente natural. Así es que decidí usar una temperatura de color de 3400K para conseguir las estrellas saliesen blancas y la contaminación lumínica en un tono rojizo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por regla general utilizo un balance de blancos entre 3400K-3900K y ajusto si es necesario."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si estás haciendo un timelapse, no uses el balance de blancos en automático. Si disparas con el balance de blancos en automático es posible que la cámara vaya cambiando la"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "temperatura de color de un fotograma a otro, modificándo la tonalidad de la imagen. Esto producirá un parpadeo muy molesto en el vídeo final."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para evitarlo, selecciona el modo de disparo Manual (M). Ajusta manualmente el balancce de blancos a 3900K o selecciona el modo predefinido de Tungsteno (unos 3200K). así te aseguras que se mantendrá uniforme la temperatura de color durante toda la secuencia."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-19",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Pinta el paisaje con luz (opcional)",
        "anchor": "b3-c9-sec-19"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si quieres dar a tus imágenes de Vía Láctea más volumen, añadir profundidad y sombras, necesitas iluminar el primer plano. Para que las imágenes te queden naturales, asegúrate de que la luz que añadas sea sutil y de baja intensidad."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por el contrario, cuando la fase de la Luna se esté aproximando a la Luna Llena, la luz de la Luna podría ser incluso suficiente para iluminar el paisaje por sí sola."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo general, la iluminación lateral proporciona sombras duras y con contraste. Para aclararlas y reducir el contraste, puedes utilizar luz de relleno con flashes, linternas, LEDs o lo que creas más conveniente."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "\"Toni ¿cómo hiciste para pintar el puente natural?\" ¡Fue gracias a un gran trabajo de equipo!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Así es como lo hicimos:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-19",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Equipo. Usamos un panel LED con un gel CTO."
            }
          ],
          [
            {
              "text": "Iluminación. Germán (también conocido como el Desarrollador) cogió el panel LED y se alejó del punto de disparo. La idea era iluminar el puente de forma lateral, añadiendo sombras y volumen."
            }
          ],
          [
            {
              "text": "LED en movimiento. If you keep the LED still you'll overexpose one portion of the landscape. Si dejas de mover el LED vas a sobreexponer una parte del paisaje."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Personalmente mantengo el LED en movimiento a lo largo de la escena. Muévelo más lentamente cuando apliques luz a elementos más lejanos y acelerar al pintar los más cercanos. Ten en cuenta la ley de la inversa del cuadrado de la luz."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-19",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Tiempo de iluminación. Después varias \"prueba y error\", averiguamos que el tiempo de iluminación necesario para conseguir la exposición correcta era de 10 segundos."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El método de prueba y error lleva tiempo y consume batería. Así que, cada vez que hagas una prueba, asegúrate de contar los segundos para poder ajustar el tiempo en consecuencia."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-20",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Revisa el histograma y ajusta la exposición",
        "anchor": "b3-c9-sec-20"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una última cosa antes de empezar a hacer fotos como si no hubiera mañana: comprueba el histograma."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El histograma te permite analizar la exposición de la imagen en la pantalla LCD de la cámara, y hacer los ajustes necesarios para lograr una exposición correcta sobre el terreno."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como sabes, el lado izquierdo del histograma representa los tonos más oscuros que tu cámara puede registrar y el lado derecho representa los valores más claros. En cualquiera de los dos extremos del histograma la luz no proporciona detalle, ya que es totalmente negra o totalmente blanca."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para entenderlo mejor, echa un vistazo a estos ejemplos de exposiciones según el histograma:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-20",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Subexpuesto. El histograma muestra el pico tocando el lado izquierdo del gráfico. Estás capturando sólo tonos oscuros. Puedes corregirlo incrementando la apertura, alargando el tiempo de exposición o subiendo el ISO."
            }
          ],
          [
            {
              "text": "Expuesto a la izquierda. El histograma muestra el pico cerca de la parte izquierda del gráfico y toca ligeramente el borde izquierdo. Los resultados pueden ser aceptables, pero tendrás problemas con el ruido en el procesado. Una vez más, trata de incrementar la apertura, alargar el tiempo de exposición o subir el ISO."
            }
          ],
          [
            {
              "text": "Exposición neutra. El histograma muestra picos hacia el centro del gráfico de izquierda a derecha y toca ambos bordes del gráfico. La mayoría de los píxeles de la imagen tiene tonos medios, y una pequeña parte tiene tonos oscuros o blancos. Es un gran histograma, no necesitas ajustar la configuración de la cámara."
            }
          ],
          [
            {
              "text": "Expuesto a la derecha. El histograma muestra el pico cerca de la parte derecha del gráfico y toca ligeramente el borde derecho. Trabajar con este histograma significa que aumentar la exposición de la imagen para recoger la máxima cantidad de luz y así conseguir el rendimiento óptimo del sensor. Te ayudará a reducir el ruido, pero ten cuidado de no sobreexponer. No utilices un ISO demasiado alto para conseguir este histograma, porque vas a terminar generando ruido y reduciendo la calidad de la imagen."
            }
          ],
          [
            {
              "text": "Sobreexpuesto. El histograma muestra el pico tocando el lado derecho del gráfico. Estás capturando sólo los tonos claros. Puede que tengas que bajar el ISO para obtener una imagen correctamente expuesta."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo general, querrás un histograma que muestre picos hacia el centro del gráfico de izquierda a derecha, con ambos extremos tocando los bordes del gráfico."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero esto evidentemente depende por completo de las tonalidades de tu escena."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Este es el histograma de mi imagen de la Vía Láctea:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Lo normal en fotografía nocturna es tener un histograma de medios tonos y oscuros, con pocos tonos claros..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡No esperes una campana de Gauss!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-20",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c9-p115-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c9-sec-20",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Paso a Paso en tu Sony Alpha 7 IV: Enfoque a Estrellas, Regla NPF (5,12 µm) e ISO 800/3200",
        "summary": "Guía exacta de campo para ejecutar los pasos de este capítulo central con tu Sony Alpha 7 IV:",
        "bulletPoints": [
          "1. Tamaño de píxel para la Regla NPF: El sensor de 33 MP de la A7 IV tiene un pixel pitch de 5,12 µm. Con un 14mm f/1.8, la regla NPF (precisión máxima) te dará ~10s, y con un 24mm f/1.4 te dará ~6s–8s para estrellas 100% puntuales al ampliar al 100%.",
          "2. Enfoque exacto en una estrella brillante: Pon la cámara en [MF], apunta a una estrella brillante (o Júpiter/Vega), pulsa el botón de [Ampliar enfoque] (5.9x y luego 11.7x) y gira el anillo suavemente hasta que el punto luminoso sea lo más diminuto posible.",
          "3. Evita el 'Star Eater': Dispara siempre en modo de obturador mecánico (no electrónico silencioso) en bulb/largas exposiciones y en formato RAW [Sin comprimir] o [Comprimido sin pérdida (L)]."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654620.html",
        "manualLabel": "Manual Sony A7 IV — Ampliador de Enfoque en Modo Manual (MF)",
        "cameraPath": "MENU → Enfoque → Asistente de enfoque → Ampliar enfoque (5.9x / 11.7x)"
      }
    }
  ],
  "10": [
    {
      "sectionAnchor": "b3-c10-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Por qué crees que Henri-Cartier Bresson nunca procesó ni reveló sus negativos? Pagaba a alguien para que hiciera ese trabajo por él."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La razón es muy sencilla. Esto le permitió pasar menos tiempo en el cuarto oscuro y más tiempo fotografiando."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Tengo la impresión de que hoy en día los fotógrafos estamos demasiado preocupados por el procesado de nuestras imágenes cuando lo que deberíamos es centrar nuestra atención en conseguir que la imagen salga bien en cámara. Si tu foto es mala, no pienses que Lightroom o Photoshop van a conseguir mágicamente que se convierta en una imagen alucinante."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En mi opinión, el mejor procesado es el que no tienes que hacer. Por lo tanto, asegúrate de obtener la imagen correctamente expuesta y no tendrás que invertir mucho tiempo delante del ordenador."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además, forzar demasiado la exposición en el procesado aumenta el ruido y reduce la calidad de la imagen. Trata de exponer correctamente en la cámara en primer lugar."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Dicho esto, he de reconocer que el procesado siempre formará parte de nuestro flujo de trabajo. Incluso los puristas lo usan para eliminar imperfecciones fotográficas como el polvo en el sensor, rasguños, etc. Por supuesto, siempre habrá alguien que argumente que el proceso creativo no se detiene cuando se pulsa el obturador, que es sólo el inicio."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Bueno, ahí reside la belleza del arte, las reglas son sólo reglas, nada más."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Estudia estos 5 fantásticos tutoriales y aprende de los mejores",
        "anchor": "b3-c10-sec-2"
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como todo en la vida, aprender de los mejores es clave, así que permíteme que te sugiera que veas estos cinco video-tutoriales gratuitos creados por varios Maestros de la Vía Láctea. Con ellos aprenderás cómo sacar el máximo partido a tus RAW (algunos en inglés):"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-2",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Masterclass de Fotografía de Vía Láctea con Antoni Cladera"
            }
          ],
          [
            {
              "text": "Masterclass de Revelado de Fotos de Vía Láctea con Antoni Cladera"
            }
          ],
          [
            {
              "text": "Masterclass de Panorámicas de la Vía Láctea con Antoni Cladera"
            }
          ],
          [
            {
              "text": "How to Photograph the Milky Way in Really Heavy Light Pollution Using ETTR (Expose to the Right) by Ian Norman"
            }
          ],
          [
            {
              "text": "How to process the Milky Way – Adobe Lightroom CC tutorial by Michael Shainblum"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si estás buscando algo más avanzado y estás dispuesto a invertir un poco de dinero, te recomiendo estas fantásticas formaciones y libros (en inglés):"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-2",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Vídeo tutorial de Michael Shainblum: Premium Night Sky, Milky Way Tutorial"
            }
          ],
          [
            {
              "text": "Vídeo tutorial de Adam Woodworth: Milky Way Master Class"
            }
          ],
          [
            {
              "text": "Vídeo tutorial de Nick Page: Astrophotography Post Processing Course"
            }
          ],
          [
            {
              "text": "Ebook de Dave Morrow: Photograph the Night Sky"
            }
          ],
          [
            {
              "text": "Ebook de David Kingham: Nightscape Recuerda que, al editar, debes asegurarte de que los colores de las estrellas notables y cuerpos celestes que captures (Antares, Marte, etc.) coincidan con sus respectivos rangos de temperatura."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "La importancia de reducir el ruido",
        "anchor": "b3-c10-sec-3"
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como ya he dicho, yo no uso el modo de reducción de ruido de la cámara. Prefiero poder tener la vista previa de la imagen de inmediato en lugar de esperar otros 30s."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para quitar los hot pixels (píxeles calientes) se puede utilizar la herramienta de clonación de Lightroom o Photoshop. Pero en mi caso, prefiero utilizar el siguiente flujo de trabajo en Photoshop:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-3",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Utiliza la herramienta lazo para seleccionar los hot pixels."
            }
          ],
          [
            {
              "text": "Ve a Editar > Rellenar..."
            }
          ],
          [
            {
              "text": "Selecciona \"Según el contenido\" en el campo \"Usar\"."
            }
          ],
          [
            {
              "text": "Pulsa OK. Si creas una acción personalizada en Photoshop junto con un atajo de teclado, puedes quitar los hot pixels muy rápidamente."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Existen diferentes técnicas para reducir el nivel de ruido."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los típicos programas de edición como Lightroom y Photoshop incluyen herramientas para eliminar el ruido cromático y la luminancia."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero ten cuidado porque el uso excesivo de la opción de reducción de ruido ablandará la imagen y reducirá la nitidez. Es más, en fotografía nocturna, puede eliminar las estrellas de la imagen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además, hay otro tipo de programas especializados en reducción de ruido que dan mejores resultados. Photo Ninja (la herramienta de reducción de ruido se llama Noise Ninja), Dfine de Nik Collection (DxO), y Noiseware son fantásticas herramientas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Yo uso Define de Nik Collection (DxO), pero no demasiado. Prefiero tener un poco de ruido y más estrellas en lugar de perder nitidez y estrellas. Después aplico una máscara de capa para restaurar las áreas donde el programa ha eliminado ruido innecesariamente."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Otro método que puedes utilizar es el apilado y promediado de imágenes en Photoshop."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es una gran manera de controlar el ruido en imágenes con ISOs altos. Aquí un fantástico vídeo tutorial de Ian Norman (en inglés)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c10-sec-3",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Invariancia ISO y Rango Dinámico de los Archivos ARW de 14 bits de la Sony Alpha 7 IV",
        "summary": "A la hora de revelar tus archivos RAW (.ARW) de la Vía Láctea en Lightroom, Camera Raw o Sequator:",
        "bulletPoints": [
          "A partir de ISO 800 (segundo circuito base del sensor Dual Gain), el sensor de la Sony A7 IV es prácticamente 'ISO invariante': una foto tomada a ISO 800 y levantada +2 EV en Lightroom tiene casi el mismo nivel de ruido en sombras que una tomada a ISO 3200 en cámara, pero conservando 2 pasos extra de rango dinámico para no quemar el núcleo de las estrellas más brillantes.",
          "Asegúrate de tener configurado [Tipo archivo RAW → Comprim. sin pérdida (L)] o [Sin comprimir] para conservar los 14 bits reales de profundidad tonal al estirar curvas."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000656431.html",
        "manualLabel": "Manual Sony A7 IV — Selección del Tipo de Archivo RAW (Comprimido sin Pérdida)",
        "cameraPath": "MENU → Toma → Calidad imagen → Tipo archivo RAW → Comprim. sin pérdida (L)"
      }
    }
  ],
  "11": [
    {
      "sectionAnchor": "b3-c11-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Volvamos la finalidad de este artículo. Así es que abre tu mente, ínspirate y deja volar la imaginación hasta encontrar una imagen de la Vía Láctea impresionante."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c11-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Seguro que encontrarás inspiración en la imagen ganadora de Mark Gee, 'Guiding Light to The Stars'. Al igual que ella, estoy seguro de que las siguientes fotos estimularán tu creatividad."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c11-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c11-p121-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c11-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c11-p122-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b3-c11-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c11-p123-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c11-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c11-p124-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c11-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c11-p125-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c11-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c11-p126-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c11-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c11-p127-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c11-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c11-p127-2",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c11-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c11-p128-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c11-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b3-c11-p128-2",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b3-c11-sec-1",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Técnica de Doble Exposición (Suelo en Hora Azul + Cielo con Vía Láctea) con la Sony Alpha 7 IV",
        "summary": "Muchas de las 10 fotografías maestras de este capítulo combinan un primer plano ultra-limpio con un cielo estrellado:",
        "bulletPoints": [
          "Toma 1 (Suelo): Dispara en el mismo encuadre fijo con trípode durante el final de la Hora Azul a ISO 100, f/8 y varios segundos de exposición (máxima nitidez y cero ruido con el primer circuito nativo de la A7 IV).",
          "Toma 2 (Cielo): Sin mover el trípode, espera a la noche astronómica y dispara al cielo a ISO 3200, f/1.4–f/2.8 y el tiempo de la Regla NPF, enfocando a las estrellas."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654659.html",
        "manualLabel": "Manual Sony A7 IV — Exposición Manual (M) y Modo BULB",
        "cameraPath": "Dial de modo en [M] — Combinación ISO 100 (Suelo) + ISO 3200 (Cielo)"
      }
    }
  ],
  "12": [
    {
      "sectionAnchor": "b3-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "A veces me siento como un Goonie."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Comparto el mismo espíritu, la misma necesidad de explorar lo desconocido, en busca de una auténtica aventura. Siento la necesidad de vivir el desafío de perseguir una escena soñada."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Nadie dijo que fuera fácil!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si quieres ser uno de los nuestros tendrás que luchar contra el mal tiempo, las caídas y los fallos del equipo entre otros obstáculos que, seguramente, estropearán tus imágenes. Pero no te rindas y persigue tus sueños con todas tus fuerzas. Tarde o temprano, empezarás a capturar fotos contagiosas de la Vía Láctea."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Recuerda... Los PhotoPillers nunca se rinden... Y, sin duda alguna, soy uno de ellos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Y tú?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Imagina. Planifica. ¡Dispara!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Antoni Cladera es un fotógrafo de naturaleza comprometido con el medio ambiente."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Artista de la Confederación Española de Fotografía y miembro de la Asociación Española de Fotógrafos de Naturaleza (AEFONA). Forma parte del equipo de PhotoPills."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Queremos dar las gracias a nuestros amigos Mark Gee, Elia Locardi, Michael Shainblum, Daniel Kordan, Eric Paré, Ian Norman, Albert Dros, José Antonio Hervás, Sean Parker, Aaron D. Priest y Christoph Malin por dejarnos publicar sus increíbles fotografías de la Vía Láctea."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Nota: Algunos enlaces de este artículo son enlaces de afiliados. ¿Qué quiere decir esto? Que si compras mediante estos enlaces nos estás ayudando económicamente sin que eso suponga ningún gasto adicional para ti. Gracias por tu apoyo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "www.photopills.com"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b3-c12-sec-1",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Tu Trilogía Fotográfica Completa en la Sony Alpha 7 IV",
        "summary": "¡Enhorabuena! Con este tercer módulo has completado la trilogía fundamental: Exposición (Módulo 1), Profundidad de Campo (Módulo 2) y Astrofotografía de Vía Láctea (Módulo 3).",
        "bulletPoints": [
          "En fotografía nocturna de Vía Láctea confluyen los tres libros: necesitas exponer al límite del ruido (Módulo 1), calcular la hiperfocal y apertura máxima sin coma (Módulo 2) y planificar la posición galáctica con la Regla NPF (Módulo 3)."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/index.html",
        "manualLabel": "Guía de Ayuda Oficial Sony Alpha 7 IV — Índice Completo",
        "cameraPath": "Sony Alpha 7 IV — Academia Fotográfica Completa (3 Módulos)"
      }
    }
  ]
};
