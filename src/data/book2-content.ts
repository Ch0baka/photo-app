import type { ChapterSummary, ExifMetadata } from '../core/types.ts';
import type { SeedBlockInput } from './book1-content.ts';

export const BOOK_2_CHAPTERS: Omit<ChapterSummary, 'id' | 'moduleId' | 'isCompleted'>[] = [
  {
    "slug": "b2-introduccion",
    "chapterNumber": 0,
    "title": "Introducción",
    "subtitle": "Domina la profundidad de campo y transforma tus fotografías",
    "estimatedReadMin": 5,
    "pdfPages": "6–9",
    "isIngested": true
  },
  {
    "slug": "b2-cap-1-respuestas-rapidas-pdc",
    "chapterNumber": 1,
    "title": "Respuestas rápidas a preguntas sobre la profundidad de campo",
    "subtitle": "Las preguntas esenciales sobre PdC, hiperfocal, difracción, macro y bokeh",
    "estimatedReadMin": 8,
    "pdfPages": "10–15",
    "isIngested": true
  },
  {
    "slug": "b2-cap-2-ejemplos-que-inspiran",
    "chapterNumber": 2,
    "title": "Ejemplos que inspiran",
    "subtitle": "20 fotografías reales analizadas con sus valores exactos de profundidad de campo",
    "estimatedReadMin": 15,
    "pdfPages": "16–37",
    "isIngested": true
  },
  {
    "slug": "b2-cap-3-que-es-la-profundidad-de-campo",
    "chapterNumber": 3,
    "title": "¿Qué es la profundidad de campo?",
    "subtitle": "Definición óptica, límites cercano y lejano y distribución delante y detrás del punto de enfoque",
    "estimatedReadMin": 9,
    "pdfPages": "38–46",
    "isIngested": true
  },
  {
    "slug": "b2-cap-4-distancia-hiperfocal",
    "chapterNumber": 4,
    "title": "Entendiendo la distancia hiperfocal",
    "subtitle": "La herramienta clave para maximizar la nitidez desde el primer plano hasta el infinito",
    "estimatedReadMin": 10,
    "pdfPages": "47–54",
    "isIngested": true
  },
  {
    "slug": "b2-cap-5-circulo-de-confusion",
    "chapterNumber": 5,
    "title": "¿Qué es el Círculo de Confusión?",
    "subtitle": "Agudeza visual, distancia de visualización, tamaño de copia y nitidez aceptable",
    "estimatedReadMin": 14,
    "pdfPages": "55–68",
    "isIngested": true
  },
  {
    "slug": "b2-cap-6-pdc-vs-apertura",
    "chapterNumber": 6,
    "title": "Profundidad de campo vs apertura",
    "subtitle": "Cómo el número f controla la zona enfocada y la distancia hiperfocal",
    "estimatedReadMin": 10,
    "pdfPages": "69–78",
    "isIngested": true
  },
  {
    "slug": "b2-cap-7-pdc-vs-difraccion",
    "chapterNumber": 7,
    "title": "Profundidad de campo vs difracción",
    "subtitle": "El límite físico de los diafragmas muy cerrados (discos de Airy) y cómo evitar perder nitidez",
    "estimatedReadMin": 8,
    "pdfPages": "79–84",
    "isIngested": true
  },
  {
    "slug": "b2-cap-8-pdc-vs-distancia-sujeto",
    "chapterNumber": 8,
    "title": "Profundidad de campo vs distancia al sujeto",
    "subtitle": "Cómo varía la zona enfocada y su proporción al acercarte o alejarte del motivo",
    "estimatedReadMin": 8,
    "pdfPages": "85–91",
    "isIngested": true
  },
  {
    "slug": "b2-cap-9-pdc-vs-focal",
    "chapterNumber": 9,
    "title": "Profundidad de campo vs focal",
    "subtitle": "Impacto de los objetivos angulares frente a los teleobjetivos y el mito de la equivalencia",
    "estimatedReadMin": 9,
    "pdfPages": "92–98",
    "isIngested": true
  },
  {
    "slug": "b2-cap-10-pdc-vs-teleconvertidor",
    "chapterNumber": 10,
    "title": "Profundidad de campo vs teleconvertidor",
    "subtitle": "Efecto real de los multiplicadores 1.4x y 2x sobre la apertura efectiva y la PdC",
    "estimatedReadMin": 6,
    "pdfPages": "99–103",
    "isIngested": true
  },
  {
    "slug": "b2-cap-11-pdc-vs-tamano-sensor",
    "chapterNumber": 11,
    "title": "Profundidad de campo vs tamaño del sensor",
    "subtitle": "Full-Frame vs APS-C y Micro 4/3: factor de recorte, círculo de confusión y PdC equivalente",
    "estimatedReadMin": 11,
    "pdfPages": "104–113",
    "isIngested": true
  },
  {
    "slug": "b2-cap-12-boton-previsualizacion-pdc",
    "chapterNumber": 12,
    "title": "El botón de previsualización de la profundidad de campo",
    "subtitle": "Cómo comprobar la zona enfocada cerrando el diafragma antes de disparar",
    "estimatedReadMin": 5,
    "pdfPages": "114–116",
    "isIngested": true
  },
  {
    "slug": "b2-cap-13-macrofotografia-y-pdc",
    "chapterNumber": 13,
    "title": "Macrofotografía y profundidad de campo",
    "subtitle": "Relación de magnificación 1:1, pupila de entrada/salida y apilamiento de enfoque",
    "estimatedReadMin": 10,
    "pdfPages": "117–124",
    "isIngested": true
  },
  {
    "slug": "b2-cap-14-bokeh-vs-pdc",
    "chapterNumber": 14,
    "title": "Bokeh vs profundidad de campo",
    "subtitle": "Calidad estética del desenfoque, palas del diafragma, aberración esférica y recetas para un gran bokeh",
    "estimatedReadMin": 11,
    "pdfPages": "125–135",
    "isIngested": true
  },
  {
    "slug": "b2-cap-15-el-secreto-para-mejorar",
    "chapterNumber": 15,
    "title": "El secreto para mejorar",
    "subtitle": "Planificación, práctica deliberada y dominio técnico en el campo",
    "estimatedReadMin": 6,
    "pdfPages": "136–141",
    "isIngested": true
  }
];

export const BOOK_2_ASSETS: (ExifMetadata & { chapterNumber: number })[] = [
  {
    "id": "b2-c0-p7-1",
    "chapterNumber": 0,
    "filePath": "/images/book-2/intro/p007-im0-1.jpg",
    "altText": "Calculadora de profundidad de campo de PhotoPills - resultados en formato tabla. Calculadora de profundidad de campo de PhotoPills - resultados en realidad aumentada.",
    "caption": "Calculadora de profundidad de campo de PhotoPills - resultados en formato tabla. Calculadora de profundidad de campo de PhotoPills - resultados en realidad aumentada."
  },
  {
    "id": "b2-c0-p7-2",
    "chapterNumber": 0,
    "filePath": "/images/book-2/intro/p007-im1-2.jpg",
    "altText": "Calculadora de profundidad de campo de PhotoPills - resultados en formato tabla. Calculadora de profundidad de campo de PhotoPills - resultados en realidad aumentada.",
    "caption": "Calculadora de profundidad de campo de PhotoPills - resultados en formato tabla. Calculadora de profundidad de campo de PhotoPills - resultados en realidad aumentada."
  },
  {
    "id": "b2-c2-p17-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p017-im0.jpg",
    "altText": "Figura de la página 17 — Ejemplos que inspiran.",
    "caption": "Figura de la página 17 — Ejemplos que inspiran."
  },
  {
    "id": "b2-c2-p19-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p019-im0.jpg",
    "altText": "Figura de la página 19 — Ejemplos que inspiran.",
    "caption": "Figura de la página 19 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "14mm",
    "aperture": "f/2.8",
    "shutterSpeed": "30s",
    "iso": "3200",
    "kelvin": "3500K",
    "extraNotes": "Enfocando a la hiperfocal: 2,32m · Enfocado de 1,16m a Infinito · Pdc Total: Infinito · PdC delante: 1,16m · PdC detrás: Infinito"
  },
  {
    "id": "b2-c2-p20-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p020-im0.jpg",
    "altText": "Figura de la página 20 — Ejemplos que inspiran.",
    "caption": "Figura de la página 20 — Ejemplos que inspiran.",
    "cameraModel": "Fujifilm X100",
    "lensFocal": "23mm",
    "aperture": "f/11",
    "shutterSpeed": "1/80s",
    "iso": "200",
    "kelvin": "3500K",
    "extraNotes": "Enfocando a la hiperfocal: 2,36m · Enfocado de 1,18m a Infinito · PdC Total: Infinito · PdC delante: 1,18m · PdC detrás: Infinito"
  },
  {
    "id": "b2-c2-p21-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p021-im0.jpg",
    "altText": "Figura de la página 21 — Ejemplos que inspiran.",
    "caption": "Figura de la página 21 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "35mm",
    "aperture": "f/8",
    "shutterSpeed": "110s",
    "iso": "200",
    "kelvin": "5000K",
    "extraNotes": "Enfocando a la roca central: 20m · Enfocado de 4,07m a Infinito · PdC Total: Infinito · PdC delante: 15,93m · PdC detrás: Infinito"
  },
  {
    "id": "b2-c2-p22-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p022-im0.jpg",
    "altText": "Figura de la página 22 — Ejemplos que inspiran.",
    "caption": "Figura de la página 22 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "85mm",
    "aperture": "f/13",
    "shutterSpeed": "30s",
    "iso": "200",
    "kelvin": "3550K",
    "extraNotes": "Enfocando a la hiperfocal: 19,05m · Enfocado de 9,52m a Infinito · PdC Total: Infinito · PdC delante: 9,52m · PdC detrás: Infinito"
  },
  {
    "id": "b2-c2-p23-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p023-im0.jpg",
    "altText": "Figura de la página 23 — Ejemplos que inspiran.",
    "caption": "Figura de la página 23 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "24mm",
    "aperture": "f/11",
    "shutterSpeed": "1/125s",
    "iso": "200",
    "kelvin": "4600K",
    "extraNotes": "Enfocando a la hiperfocal: 1,72m · Enfocado de 0,86m a Infinito · PdC Total: Infinito · PdC delante: 0,86m · PdC detrás: Infinito"
  },
  {
    "id": "b2-c2-p24-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p024-im0.jpg",
    "altText": "Figura de la página 24 — Ejemplos que inspiran.",
    "caption": "Figura de la página 24 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "14mm",
    "aperture": "f/2.8",
    "shutterSpeed": "30s",
    "iso": "3200",
    "kelvin": "3050K",
    "extraNotes": "Enfocando a la hiperfocal: 2,32 m · Enfocado de 1,16m a Infinito · PdC Total: Infinito · PdC delante: 1,16m · PdC detrás: Infinito"
  },
  {
    "id": "b2-c2-p25-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p025-im0.jpg",
    "altText": "Figura de la página 25 — Ejemplos que inspiran.",
    "caption": "Figura de la página 25 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "85mm",
    "aperture": "f/1.4",
    "shutterSpeed": "1/350s",
    "iso": "200",
    "kelvin": "4113K",
    "extraNotes": "Enfocando al ojo izquierdo de Júlia: 2m · Enfocado de 1,98m a 2,02m · PdC Total: 0,04m · PdC delante: 50% (0,02m) · PdC detrás: 50% (0,02m)"
  },
  {
    "id": "b2-c2-p26-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p026-im0.jpg",
    "altText": "Figura de la página 26 — Ejemplos que inspiran.",
    "caption": "Figura de la página 26 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "85mm",
    "aperture": "f/1.4",
    "shutterSpeed": "1/125s",
    "iso": "1250",
    "kelvin": "3000K",
    "extraNotes": "Enfocando el pecho de Anna: 8m · Enfocado de 7,64m a 8,39m · PdC Total: 0,75m · PdC delante: 47.68% (0,36m) · PdC detrás: 52.32% (0,39m)"
  },
  {
    "id": "b2-c2-p27-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p027-im0.jpg",
    "altText": "Figura de la página 27 — Ejemplos que inspiran.",
    "caption": "Figura de la página 27 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "85mm",
    "aperture": "f/2",
    "shutterSpeed": "1/10s",
    "iso": "400",
    "kelvin": "5627K",
    "extraNotes": "Enfocando a una persona del medio del grupo: 8m · Enfocado de 7,51m a 8,56m · PdC Total: 1,06m · PdC delante: 47% (0,49m) · PdC detrás: 53% (0,56m)"
  },
  {
    "id": "b2-c2-p28-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p028-im0.jpg",
    "altText": "Figura de la página 28 — Ejemplos que inspiran.",
    "caption": "Figura de la página 28 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "500mm",
    "aperture": "f/8",
    "shutterSpeed": "1/500s",
    "iso": "200",
    "kelvin": "5700K",
    "extraNotes": "Enfocando al ojo del abejaruco: 10m · Enfocado de 9,91m a 10,09m · PdC Total: 0,18m · PdC delante: 50% (0,09m) · PdC detrás: 50% (0,09m)"
  },
  {
    "id": "b2-c2-p29-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p029-im0.jpg",
    "altText": "Figura de la página 29 — Ejemplos que inspiran.",
    "caption": "Figura de la página 29 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "500mm",
    "aperture": "f/5.6",
    "shutterSpeed": "1/1500s",
    "iso": "800",
    "kelvin": "5700K",
    "extraNotes": "Enfocando al ojo del ratonero común: 20m · Enfocado de 19,74m a 20,27m · PdC Total: 0,53m · PdC delante: 49.34% (0,26m) · PdC detrás: 50.66% (0,27m)"
  },
  {
    "id": "b2-c2-p30-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p030-im0.jpg",
    "altText": "Figura de la página 30 — Ejemplos que inspiran.",
    "caption": "Figura de la página 30 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D7100",
    "lensFocal": "500mm",
    "aperture": "f/8",
    "shutterSpeed": "1/40s",
    "iso": "200",
    "kelvin": "6850K",
    "extraNotes": "Panorama de 11 fotos en vertical. En cada foto, la lente fue enfocada en las rocas para tenerlas perfectamente nítidas."
  },
  {
    "id": "b2-c2-p31-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p031-im0.jpg",
    "altText": "Figura de la página 31 — Ejemplos que inspiran.",
    "caption": "Figura de la página 31 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "85mm",
    "aperture": "f/1.4",
    "shutterSpeed": "1/125s",
    "iso": "200",
    "kelvin": "5000K",
    "extraNotes": "Enfocando a los ojos de Aina: 4m · Enfocado de 3,91m a 4,09m · PdC Total: 0,18m · PdC delante: 50% (0,09m) · PdC detrás: 50% (0,09m)"
  },
  {
    "id": "b2-c2-p32-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p032-im0.jpg",
    "altText": "Figura de la página 32 — Ejemplos que inspiran.",
    "caption": "Figura de la página 32 — Ejemplos que inspiran.",
    "cameraModel": "Nikon Fm2n",
    "lensFocal": "85mm",
    "aperture": "f/2",
    "shutterSpeed": "1/350s",
    "iso": "400",
    "extraNotes": "Kodak Tri-X 400 film · Enfocando a la cabeza de Aina: 3m · Enfocado de 2,925m a 3,075m · PdC Total: 0,15m · PdC delante: 50% (0,075m) · PdC detrás: 50% ( 0,075m)"
  },
  {
    "id": "b2-c2-p33-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p033-im0.jpg",
    "altText": "Figura de la página 33 — Ejemplos que inspiran.",
    "caption": "Figura de la página 33 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "85mm",
    "aperture": "f/2.0",
    "shutterSpeed": "1/500s",
    "iso": "200",
    "kelvin": "5700K",
    "extraNotes": "Enfocando a la botella: 4m · Enfocado de 3,87m a 4,13m · PdC total: 0,26m · PdC delante: 48.37% ( 0,13m) · PdC detrás: 56.31% (0.13m)"
  },
  {
    "id": "b2-c2-p34-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p034-im0.jpg",
    "altText": "Figura de la página 34 — Ejemplos que inspiran.",
    "caption": "Figura de la página 34 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "500mm",
    "aperture": "f/5.6",
    "shutterSpeed": "1/10s",
    "iso": "400",
    "kelvin": "5600K",
    "extraNotes": "Enfocando a la cabeza del primer caballo: 135m · Enfocado de 127,71m a 148,56m · PdC Total: 24,86m · PdC delante: 45% (11,29m) · PdC detrás: 54% (13,56m)"
  },
  {
    "id": "b2-c2-p35-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p035-im0.png",
    "altText": "Figura de la página 35 — Ejemplos que inspiran.",
    "caption": "Figura de la página 35 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D300s",
    "lensFocal": "200mm",
    "aperture": "f/4.0",
    "shutterSpeed": "1/500s",
    "iso": "200",
    "kelvin": "6600K",
    "extraNotes": "Enfocando al adorno: 15 m · Enfocado de 14,57m a 15,46m · PdC Total: 0,89m · PdC delante: 48.53% (0,43m) · PdC detrás: 51.47% (0,46m)"
  },
  {
    "id": "b2-c2-p36-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p036-im0.jpg",
    "altText": "Figura de la página 36 — Ejemplos que inspiran.",
    "caption": "Figura de la página 36 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "105mm",
    "aperture": "f/4.0",
    "shutterSpeed": "1/500s",
    "iso": "800",
    "kelvin": "5500K",
    "extraNotes": "Anillos de extensión 20mm + 36mm · Enfocando a los ojos de la culebra de agua: 4m"
  },
  {
    "id": "b2-c2-p37-1",
    "chapterNumber": 2,
    "filePath": "/images/book-2/cap-2/p037-im0.jpg",
    "altText": "Figura de la página 37 — Ejemplos que inspiran.",
    "caption": "Figura de la página 37 — Ejemplos que inspiran.",
    "cameraModel": "Nikon D700",
    "lensFocal": "24mm invertido",
    "aperture": "f/8.0",
    "shutterSpeed": "1/20s",
    "iso": "400",
    "kelvin": "5500K",
    "extraNotes": "Enfocando al estambre de la derecha"
  },
  {
    "id": "b2-c3-p39-1",
    "chapterNumber": 3,
    "filePath": "/images/book-2/cap-3/p039-im0.jpg",
    "altText": "Figura de la página 39 — ¿Qué es la profundidad de campo?.",
    "caption": "Figura de la página 39 — ¿Qué es la profundidad de campo?.",
    "cameraModel": "Nikon D300s",
    "lensFocal": "105mm",
    "aperture": "f/3",
    "shutterSpeed": "1/6000s",
    "iso": "200",
    "kelvin": "4700K",
    "extraNotes": "Enfocando a los ojos de la abeja: 0,30 m"
  },
  {
    "id": "b2-c3-p40-1",
    "chapterNumber": 3,
    "filePath": "/images/book-2/cap-3/p040-im0.jpg",
    "altText": "Figura de la página 40 — ¿Qué es la profundidad de campo?.",
    "caption": "Figura de la página 40 — ¿Qué es la profundidad de campo?."
  },
  {
    "id": "b2-c3-p41-1",
    "chapterNumber": 3,
    "filePath": "/images/book-2/cap-3/p041-im0.jpg",
    "altText": "Figura de la página 41 — ¿Qué es la profundidad de campo?.",
    "caption": "Figura de la página 41 — ¿Qué es la profundidad de campo?."
  },
  {
    "id": "b2-c3-p42-1",
    "chapterNumber": 3,
    "filePath": "/images/book-2/cap-3/p042-im0.jpg",
    "altText": "Figura de la página 42 — ¿Qué es la profundidad de campo?.",
    "caption": "Figura de la página 42 — ¿Qué es la profundidad de campo?."
  },
  {
    "id": "b2-c3-p43-1",
    "chapterNumber": 3,
    "filePath": "/images/book-2/cap-3/p043-im0.jpg",
    "altText": "Figura de la página 43 — ¿Qué es la profundidad de campo?.",
    "caption": "Figura de la página 43 — ¿Qué es la profundidad de campo?.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "85mm",
    "aperture": "f/1.4",
    "shutterSpeed": "1/500s",
    "iso": "320",
    "kelvin": "3951K",
    "extraNotes": "Enfocando a los ojos de María: 1,5m · Enfocado de 1,49m a 1,52m · PdC Total: 0,02m · PdC delante: 49% (0,01m) · PdC detrás: 50% ( 0,01m)"
  },
  {
    "id": "b2-c3-p44-1",
    "chapterNumber": 3,
    "filePath": "/images/book-2/cap-3/p044-im0.jpg",
    "altText": "El plano de enfoque es perpendicular a la dirección de disparo. Aprovéchalo de forma creativa.",
    "caption": "El plano de enfoque es perpendicular a la dirección de disparo. Aprovéchalo de forma creativa."
  },
  {
    "id": "b2-c4-p48-1",
    "chapterNumber": 4,
    "filePath": "/images/book-2/cap-4/p048-im0.jpg",
    "altText": "Figura de la página 48 — Entendiendo la distancia hiperfocal.",
    "caption": "Figura de la página 48 — Entendiendo la distancia hiperfocal.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "24mm",
    "aperture": "f/2.8",
    "shutterSpeed": "20s",
    "iso": "6400",
    "kelvin": "3050 K",
    "extraNotes": "Panorama de 9 fotos · Enfocando a la hiperfocal: 6,81m · Enfocado de 3,41m a Infinito · PdC Total: Infinito · PdC delante: 3,41m · PdC detrás: Infinito"
  },
  {
    "id": "b2-c4-p49-1",
    "chapterNumber": 4,
    "filePath": "/images/book-2/cap-4/p049-im0.jpg",
    "altText": "Figura de la página 49 — Entendiendo la distancia hiperfocal.",
    "caption": "Figura de la página 49 — Entendiendo la distancia hiperfocal."
  },
  {
    "id": "b2-c4-p52-1",
    "chapterNumber": 4,
    "filePath": "/images/book-2/cap-4/p052-im0.jpg",
    "altText": "Cómo enfocar a la distancia hiperfocal: simplemente asegúrate de que enfocas a una distancia ligeramente mayor.",
    "caption": "Cómo enfocar a la distancia hiperfocal: simplemente asegúrate de que enfocas a una distancia ligeramente mayor."
  },
  {
    "id": "b2-c4-p53-1",
    "chapterNumber": 4,
    "filePath": "/images/book-2/cap-4/p053-im0.jpg",
    "altText": "Figura de la página 53 — Entendiendo la distancia hiperfocal.",
    "caption": "Figura de la página 53 — Entendiendo la distancia hiperfocal."
  },
  {
    "id": "b2-c4-p54-1",
    "chapterNumber": 4,
    "filePath": "/images/book-2/cap-4/p054-im0.jpg",
    "altText": "Figura de la página 54 — Entendiendo la distancia hiperfocal.",
    "caption": "Figura de la página 54 — Entendiendo la distancia hiperfocal.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "22mm",
    "aperture": "f/11",
    "shutterSpeed": "1/216s",
    "iso": "100",
    "kelvin": "8046K",
    "extraNotes": "Enfocando un poco más lejos que la hiperfocal: 1,60m · Enfocado de 0,76m a Infinito · PdC Total: Infinito · PdC delante: 0,76m · PdC detrás: Infinito"
  },
  {
    "id": "b2-c5-p56-1",
    "chapterNumber": 5,
    "filePath": "/images/book-2/cap-5/p056-im0.jpg",
    "altText": "Figura de la página 56 — ¿Qué es el Círculo de Confusión?.",
    "caption": "Figura de la página 56 — ¿Qué es el Círculo de Confusión?."
  },
  {
    "id": "b2-c5-p57-1",
    "chapterNumber": 5,
    "filePath": "/images/book-2/cap-5/p057-im0.jpg",
    "altText": "El círculo verde representa el Círculo de Confusión (CoC). Esto es el tamaño máximo que un punto desenfocado en la imagen del sensor aparecerá enfocado en la imagen final. Todos los puntos borrosos con tamaño superior al CoC aparecerán desenfocados.",
    "caption": "El círculo verde representa el Círculo de Confusión (CoC). Esto es el tamaño máximo que un punto desenfocado en la imagen del sensor aparecerá enfocado en la imagen final. Todos los puntos borrosos con tamaño superior al CoC aparecerán desenfocados."
  },
  {
    "id": "b2-c5-p58-1",
    "chapterNumber": 5,
    "filePath": "/images/book-2/cap-5/p058-im0.jpg",
    "altText": "Figura de la página 58 — ¿Qué es el Círculo de Confusión?.",
    "caption": "Figura de la página 58 — ¿Qué es el Círculo de Confusión?."
  },
  {
    "id": "b2-c5-p60-1",
    "chapterNumber": 5,
    "filePath": "/images/book-2/cap-5/p060-im0.jpg",
    "altText": "Figura de la página 60 — ¿Qué es el Círculo de Confusión?.",
    "caption": "Figura de la página 60 — ¿Qué es el Círculo de Confusión?."
  },
  {
    "id": "b2-c5-p61-1",
    "chapterNumber": 5,
    "filePath": "/images/book-2/cap-5/p061-im0.jpg",
    "altText": "Marcas de profundidad de campo del objetivo Zuiko 50mm f/1.8",
    "caption": "Marcas de profundidad de campo del objetivo Zuiko 50mm f/1.8"
  },
  {
    "id": "b2-c5-p63-1",
    "chapterNumber": 5,
    "filePath": "/images/book-2/cap-5/p063-im0.jpg",
    "altText": "Figura de la página 63 — ¿Qué es el Círculo de Confusión?.",
    "caption": "Figura de la página 63 — ¿Qué es el Círculo de Confusión?."
  },
  {
    "id": "b2-c5-p65-1",
    "chapterNumber": 5,
    "filePath": "/images/book-2/cap-5/p065-im0-1.jpg",
    "altText": "Calculadora avanzada de PdC de PhotoPills - calculando el círculo de confusión. Calculadora avanzada de PdC de PhotoPills - resultados de profundidad de campo en formato tabla.",
    "caption": "Calculadora avanzada de PdC de PhotoPills - calculando el círculo de confusión. Calculadora avanzada de PdC de PhotoPills - resultados de profundidad de campo en formato tabla."
  },
  {
    "id": "b2-c5-p65-2",
    "chapterNumber": 5,
    "filePath": "/images/book-2/cap-5/p065-im1-2.jpg",
    "altText": "Calculadora avanzada de PdC de PhotoPills - calculando el círculo de confusión. Calculadora avanzada de PdC de PhotoPills - resultados de profundidad de campo en formato tabla.",
    "caption": "Calculadora avanzada de PdC de PhotoPills - calculando el círculo de confusión. Calculadora avanzada de PdC de PhotoPills - resultados de profundidad de campo en formato tabla."
  },
  {
    "id": "b2-c6-p70-1",
    "chapterNumber": 6,
    "filePath": "/images/book-2/cap-6/p070-im0.jpg",
    "altText": "Figura de la página 70 — Profundidad de campo vs apertura.",
    "caption": "Figura de la página 70 — Profundidad de campo vs apertura."
  },
  {
    "id": "b2-c6-p71-1",
    "chapterNumber": 6,
    "filePath": "/images/book-2/cap-6/p071-im0.jpg",
    "altText": "Cuanto más pequeña sea la apertura, mayor será el número de puntos borrosos menores que el CoC y, por lo tanto, mayor será la profundidad de campo.",
    "caption": "Cuanto más pequeña sea la apertura, mayor será el número de puntos borrosos menores que el CoC y, por lo tanto, mayor será la profundidad de campo."
  },
  {
    "id": "b2-c6-p72-1",
    "chapterNumber": 6,
    "filePath": "/images/book-2/cap-6/p072-im0-1.jpg",
    "altText": "Figura de la página 72 — Profundidad de campo vs apertura.",
    "caption": "Figura de la página 72 — Profundidad de campo vs apertura."
  },
  {
    "id": "b2-c6-p72-2",
    "chapterNumber": 6,
    "filePath": "/images/book-2/cap-6/p072-im1-2.jpg",
    "altText": "Figura de la página 72 — Profundidad de campo vs apertura.",
    "caption": "Figura de la página 72 — Profundidad de campo vs apertura."
  },
  {
    "id": "b2-c6-p73-1",
    "chapterNumber": 6,
    "filePath": "/images/book-2/cap-6/p073-im0.jpg",
    "altText": "Nikon D4s",
    "caption": "Nikon D4s"
  },
  {
    "id": "b2-c6-p76-1",
    "chapterNumber": 6,
    "filePath": "/images/book-2/cap-6/p076-im0.jpg",
    "altText": "El Bardo",
    "caption": "El Bardo"
  },
  {
    "id": "b2-c7-p80-1",
    "chapterNumber": 7,
    "filePath": "/images/book-2/cap-7/p080-im0.jpg",
    "altText": "Figura de la página 80 — Profundidad de campo vs difracción.",
    "caption": "Figura de la página 80 — Profundidad de campo vs difracción."
  },
  {
    "id": "b2-c7-p81-1",
    "chapterNumber": 7,
    "filePath": "/images/book-2/cap-7/p081-im0.jpg",
    "altText": "Disco de Airy generado al pasar un rayo laser por un agujero muy pequeño (fuente: wikipedia)",
    "caption": "Disco de Airy generado al pasar un rayo laser por un agujero muy pequeño (fuente: wikipedia)"
  },
  {
    "id": "b2-c7-p82-1",
    "chapterNumber": 7,
    "filePath": "/images/book-2/cap-7/p082-im0.jpg",
    "altText": "Los efectos de la difracción son muy suaves en este caso. Los verás mucho mejor en el siguiente GiF animado realizado a partir de los recortes marcados con el cuadro negro en las imágenes.",
    "caption": "Los efectos de la difracción son muy suaves en este caso. Los verás mucho mejor en el siguiente GiF animado realizado a partir de los recortes marcados con el cuadro negro en las imágenes."
  },
  {
    "id": "b2-c7-p83-1",
    "chapterNumber": 7,
    "filePath": "/images/book-2/cap-7/p083-im0.jpg",
    "altText": "Figura de la página 83 — Profundidad de campo vs difracción.",
    "caption": "Figura de la página 83 — Profundidad de campo vs difracción."
  },
  {
    "id": "b2-c7-p84-1",
    "chapterNumber": 7,
    "filePath": "/images/book-2/cap-7/p084-im0.jpg",
    "altText": "Figura de la página 84 — Profundidad de campo vs difracción.",
    "caption": "Figura de la página 84 — Profundidad de campo vs difracción."
  },
  {
    "id": "b2-c8-p86-1",
    "chapterNumber": 8,
    "filePath": "/images/book-2/cap-8/p086-im0.jpg",
    "altText": "Figura de la página 86 — Profundidad de campo vs distancia al sujeto.",
    "caption": "Figura de la página 86 — Profundidad de campo vs distancia al sujeto."
  },
  {
    "id": "b2-c8-p87-1",
    "chapterNumber": 8,
    "filePath": "/images/book-2/cap-8/p087-im0-1.jpg",
    "altText": "Valores de la profundidad de campo con una Nikon D4s (1.0x), 85mm a f/2 y distancia de enfoque 2m. Valores de la profundidad de campo con una Nikon D4s (1.0x), 85mm a f/2 y distancia de enfoque 10m.",
    "caption": "Valores de la profundidad de campo con una Nikon D4s (1.0x), 85mm a f/2 y distancia de enfoque 2m. Valores de la profundidad de campo con una Nikon D4s (1.0x), 85mm a f/2 y distancia de enfoque 10m."
  },
  {
    "id": "b2-c8-p87-2",
    "chapterNumber": 8,
    "filePath": "/images/book-2/cap-8/p087-im1-2.jpg",
    "altText": "Valores de la profundidad de campo con una Nikon D4s (1.0x), 85mm a f/2 y distancia de enfoque 2m. Valores de la profundidad de campo con una Nikon D4s (1.0x), 85mm a f/2 y distancia de enfoque 10m.",
    "caption": "Valores de la profundidad de campo con una Nikon D4s (1.0x), 85mm a f/2 y distancia de enfoque 2m. Valores de la profundidad de campo con una Nikon D4s (1.0x), 85mm a f/2 y distancia de enfoque 10m."
  },
  {
    "id": "b2-c8-p89-1",
    "chapterNumber": 8,
    "filePath": "/images/book-2/cap-8/p089-im0.jpg",
    "altText": "Figura de la página 89 — Profundidad de campo vs distancia al sujeto.",
    "caption": "Figura de la página 89 — Profundidad de campo vs distancia al sujeto.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "85mm",
    "aperture": "f/2",
    "shutterSpeed": "1/640s",
    "iso": "800",
    "kelvin": "5650K",
    "extraNotes": "Enfocando a la cabaña: 2m · Enfocado de 1,97m a 2,03m · PdC Total: 0,06m · PdC delante: 50% (0,03m) · PdC detrás: 50% (0,03m)"
  },
  {
    "id": "b2-c8-p90-1",
    "chapterNumber": 8,
    "filePath": "/images/book-2/cap-8/p090-im0.jpg",
    "altText": "Figura de la página 90 — Profundidad de campo vs distancia al sujeto.",
    "caption": "Figura de la página 90 — Profundidad de campo vs distancia al sujeto.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "85mm",
    "aperture": "f/2",
    "shutterSpeed": "1/640s",
    "iso": "800",
    "kelvin": "5650K",
    "extraNotes": "Enfocando a la cabaña: 10m · Enfocado de 9,24m a 10,90m · PdC Tota: 1,66m · PdC delante: 45,88 % (0,76m) · PdC detrás: 54,12% (0,90m)"
  },
  {
    "id": "b2-c9-p93-1",
    "chapterNumber": 9,
    "filePath": "/images/book-2/cap-9/p093-im0.jpg",
    "altText": "Figura de la página 93 — Profundidad de campo vs focal.",
    "caption": "Figura de la página 93 — Profundidad de campo vs focal."
  },
  {
    "id": "b2-c9-p94-1",
    "chapterNumber": 9,
    "filePath": "/images/book-2/cap-9/p094-im0.jpg",
    "altText": "Figura de la página 94 — Profundidad de campo vs focal.",
    "caption": "Figura de la página 94 — Profundidad de campo vs focal.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "100mm",
    "aperture": "f/8",
    "shutterSpeed": "1/320s",
    "iso": "800",
    "kelvin": "5650K",
    "extraNotes": "Enfocando a la cabaña: 6m · Enfocado de 5,26m a 6,99m · PdC Total: 1,73m · PdC delante: 42,92 % (0,74m) · PdC detrás: 57,08% (0,99m)"
  },
  {
    "id": "b2-c9-p95-1",
    "chapterNumber": 9,
    "filePath": "/images/book-2/cap-9/p095-im0.jpg",
    "altText": "Figura de la página 95 — Profundidad de campo vs focal.",
    "caption": "Figura de la página 95 — Profundidad de campo vs focal.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "24mm",
    "aperture": "f/8",
    "shutterSpeed": "1/320s",
    "iso": "800",
    "kelvin": "5650K",
    "extraNotes": "Enfocando a la cabaña: 6m · Enfocado de 1,72m a infinito · PdC total: infinito · PdC delante: 4,28m · PdC detrás: infinito"
  },
  {
    "id": "b2-c10-p100-1",
    "chapterNumber": 10,
    "filePath": "/images/book-2/cap-10/p100-im0.jpg",
    "altText": "Figura de la página 100 — Profundidad de campo vs teleconvertidor.",
    "caption": "Figura de la página 100 — Profundidad de campo vs teleconvertidor."
  },
  {
    "id": "b2-c10-p101-1",
    "chapterNumber": 10,
    "filePath": "/images/book-2/cap-10/p101-im0.jpg",
    "altText": "Figura de la página 101 — Profundidad de campo vs teleconvertidor.",
    "caption": "Figura de la página 101 — Profundidad de campo vs teleconvertidor.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "100mm",
    "extraNotes": "Nikon Tc-2x duplicador · Enfocando a 25m · Enfocado de 20,65m a 31,66m · PdC Total: 11,01m · PdC delante: 39,48% (4,35m) · PdC detrás: 60,52% (6,66m)",
    "aperture": "f/5.6",
    "shutterSpeed": "1/800s",
    "iso": "320",
    "kelvin": "5650K"
  },
  {
    "id": "b2-c10-p102-1",
    "chapterNumber": 10,
    "filePath": "/images/book-2/cap-10/p102-im0.jpg",
    "altText": "Figura de la página 102 — Profundidad de campo vs teleconvertidor.",
    "caption": "Figura de la página 102 — Profundidad de campo vs teleconvertidor.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "200mm",
    "aperture": "f/11",
    "shutterSpeed": "1/800s",
    "iso": "250",
    "kelvin": "5650K",
    "extraNotes": "Sin duplicador · Enfocando a 25m · Enfocado de 20,65m a 31,66m · PdC Total: 11,01m · PdC delante: 39,48% (4,35m) · PdC detrás: 60,52% (6,66m)"
  },
  {
    "id": "b2-c10-p103-1",
    "chapterNumber": 10,
    "filePath": "/images/book-2/cap-10/p103-im0-1.jpg",
    "altText": "Profundidad de campo usando un duplicador (2x) sobre una focal de 100mm y una apertura de f/5.6 en una Nikon D4s (1x). Profundidad de campo usando una focal de 200mm y una apertura de f/11 en una Nikon D4s (1x).",
    "caption": "Profundidad de campo usando un duplicador (2x) sobre una focal de 100mm y una apertura de f/5.6 en una Nikon D4s (1x). Profundidad de campo usando una focal de 200mm y una apertura de f/11 en una Nikon D4s (1x)."
  },
  {
    "id": "b2-c10-p103-2",
    "chapterNumber": 10,
    "filePath": "/images/book-2/cap-10/p103-im1-2.jpg",
    "altText": "Profundidad de campo usando un duplicador (2x) sobre una focal de 100mm y una apertura de f/5.6 en una Nikon D4s (1x). Profundidad de campo usando una focal de 200mm y una apertura de f/11 en una Nikon D4s (1x).",
    "caption": "Profundidad de campo usando un duplicador (2x) sobre una focal de 100mm y una apertura de f/5.6 en una Nikon D4s (1x). Profundidad de campo usando una focal de 200mm y una apertura de f/11 en una Nikon D4s (1x)."
  },
  {
    "id": "b2-c11-p105-1",
    "chapterNumber": 11,
    "filePath": "/images/book-2/cap-11/p105-im0.jpg",
    "altText": "Figura de la página 105 — Profundidad de campo vs tamaño del sensor.",
    "caption": "Figura de la página 105 — Profundidad de campo vs tamaño del sensor."
  },
  {
    "id": "b2-c11-p107-1",
    "chapterNumber": 11,
    "filePath": "/images/book-2/cap-11/p107-im0.jpg",
    "altText": "Figura de la página 107 — Profundidad de campo vs tamaño del sensor.",
    "caption": "Figura de la página 107 — Profundidad de campo vs tamaño del sensor.",
    "cameraModel": "Nikon D7100",
    "lensFocal": "35mm",
    "aperture": "f/1.8",
    "shutterSpeed": "1/400s",
    "iso": "100",
    "kelvin": "5650K",
    "extraNotes": "Enfocando a 3m"
  },
  {
    "id": "b2-c11-p108-1",
    "chapterNumber": 11,
    "filePath": "/images/book-2/cap-11/p108-im0.jpg",
    "altText": "Figura de la página 108 — Profundidad de campo vs tamaño del sensor.",
    "caption": "Figura de la página 108 — Profundidad de campo vs tamaño del sensor.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "50mm",
    "aperture": "f/1.8",
    "shutterSpeed": "1/1000s",
    "iso": "100",
    "kelvin": "5650K",
    "extraNotes": "Enfocando a 3m"
  },
  {
    "id": "b2-c11-p109-1",
    "chapterNumber": 11,
    "filePath": "/images/book-2/cap-11/p109-im0-1.jpg",
    "altText": "Valores de la profundidad de campo usando una focal de 35mm a f/1.8 en una Nikon D7100 (1.5x) enfocando a 3m. Valores de la profundidad de campo usando una focal efectiva de 50mm a f/1.8 en una Nikon D4s (1.0x) enfocando a 3m.",
    "caption": "Valores de la profundidad de campo usando una focal de 35mm a f/1.8 en una Nikon D7100 (1.5x) enfocando a 3m. Valores de la profundidad de campo usando una focal efectiva de 50mm a f/1.8 en una Nikon D4s (1.0x) enfocando a 3m."
  },
  {
    "id": "b2-c11-p109-2",
    "chapterNumber": 11,
    "filePath": "/images/book-2/cap-11/p109-im1-2.jpg",
    "altText": "Valores de la profundidad de campo usando una focal de 35mm a f/1.8 en una Nikon D7100 (1.5x) enfocando a 3m. Valores de la profundidad de campo usando una focal efectiva de 50mm a f/1.8 en una Nikon D4s (1.0x) enfocando a 3m.",
    "caption": "Valores de la profundidad de campo usando una focal de 35mm a f/1.8 en una Nikon D7100 (1.5x) enfocando a 3m. Valores de la profundidad de campo usando una focal efectiva de 50mm a f/1.8 en una Nikon D4s (1.0x) enfocando a 3m."
  },
  {
    "id": "b2-c11-p110-1",
    "chapterNumber": 11,
    "filePath": "/images/book-2/cap-11/p110-im0-1.jpg",
    "altText": "Figura de la página 110 — Profundidad de campo vs tamaño del sensor.",
    "caption": "Figura de la página 110 — Profundidad de campo vs tamaño del sensor."
  },
  {
    "id": "b2-c11-p110-2",
    "chapterNumber": 11,
    "filePath": "/images/book-2/cap-11/p110-im1-2.jpg",
    "altText": "Figura de la página 110 — Profundidad de campo vs tamaño del sensor.",
    "caption": "Figura de la página 110 — Profundidad de campo vs tamaño del sensor."
  },
  {
    "id": "b2-c11-p111-1",
    "chapterNumber": 11,
    "filePath": "/images/book-2/cap-11/p111-im0-1.jpg",
    "altText": "Profundidad de campo utilizando una focal de 85mm a f/2 en una Nikon D7100 (1.5x) enfocando a 3m. Profundidad de campo utilizando una focal de 85mm a f/2 en una Nikon D4s (1.0x) enfocando a 3m.",
    "caption": "Profundidad de campo utilizando una focal de 85mm a f/2 en una Nikon D7100 (1.5x) enfocando a 3m. Profundidad de campo utilizando una focal de 85mm a f/2 en una Nikon D4s (1.0x) enfocando a 3m."
  },
  {
    "id": "b2-c11-p111-2",
    "chapterNumber": 11,
    "filePath": "/images/book-2/cap-11/p111-im1-2.jpg",
    "altText": "Profundidad de campo utilizando una focal de 85mm a f/2 en una Nikon D7100 (1.5x) enfocando a 3m. Profundidad de campo utilizando una focal de 85mm a f/2 en una Nikon D4s (1.0x) enfocando a 3m.",
    "caption": "Profundidad de campo utilizando una focal de 85mm a f/2 en una Nikon D7100 (1.5x) enfocando a 3m. Profundidad de campo utilizando una focal de 85mm a f/2 en una Nikon D4s (1.0x) enfocando a 3m."
  },
  {
    "id": "b2-c11-p113-1",
    "chapterNumber": 11,
    "filePath": "/images/book-2/cap-11/p113-im0-1.jpg",
    "altText": "Figura de la página 113 — Profundidad de campo vs tamaño del sensor.",
    "caption": "Figura de la página 113 — Profundidad de campo vs tamaño del sensor."
  },
  {
    "id": "b2-c11-p113-2",
    "chapterNumber": 11,
    "filePath": "/images/book-2/cap-11/p113-im1-2.jpg",
    "altText": "Figura de la página 113 — Profundidad de campo vs tamaño del sensor.",
    "caption": "Figura de la página 113 — Profundidad de campo vs tamaño del sensor."
  },
  {
    "id": "b2-c12-p115-1",
    "chapterNumber": 12,
    "filePath": "/images/book-2/cap-12/p115-im0.jpg",
    "altText": "Figura de la página 115 — El botón de previsualización de la profundidad de campo.",
    "caption": "Figura de la página 115 — El botón de previsualización de la profundidad de campo."
  },
  {
    "id": "b2-c13-p118-1",
    "chapterNumber": 13,
    "filePath": "/images/book-2/cap-13/p118-im0.jpg",
    "altText": "Figura de la página 118 — Macrofotografía y profundidad de campo.",
    "caption": "Figura de la página 118 — Macrofotografía y profundidad de campo.",
    "cameraModel": "Nikon D7100",
    "lensFocal": "105mm",
    "aperture": "Macro f/4",
    "shutterSpeed": "1/400s",
    "iso": "100",
    "kelvin": "5850K"
  },
  {
    "id": "b2-c13-p119-1",
    "chapterNumber": 13,
    "filePath": "/images/book-2/cap-13/p119-im0.jpg",
    "altText": "Figura de la página 119 — Macrofotografía y profundidad de campo.",
    "caption": "Figura de la página 119 — Macrofotografía y profundidad de campo."
  },
  {
    "id": "b2-c13-p122-1",
    "chapterNumber": 13,
    "filePath": "/images/book-2/cap-13/p122-im0.jpg",
    "altText": "Figura de la página 122 — Macrofotografía y profundidad de campo.",
    "caption": "Figura de la página 122 — Macrofotografía y profundidad de campo.",
    "cameraModel": "Nikon D700",
    "lensFocal": "105mm",
    "aperture": "Macro f/8",
    "shutterSpeed": "1/180s",
    "iso": "400",
    "kelvin": "7500K"
  },
  {
    "id": "b2-c13-p123-1",
    "chapterNumber": 13,
    "filePath": "/images/book-2/cap-13/p123-im0.jpg",
    "altText": "Figura de la página 123 — Macrofotografía y profundidad de campo.",
    "caption": "Figura de la página 123 — Macrofotografía y profundidad de campo.",
    "cameraModel": "Nikon D300s",
    "lensFocal": "105mm macro",
    "aperture": "f/6",
    "shutterSpeed": "1/125s",
    "iso": "200",
    "kelvin": "6600K"
  },
  {
    "id": "b2-c13-p124-1",
    "chapterNumber": 13,
    "filePath": "/images/book-2/cap-13/p124-im0.jpg",
    "altText": "Una orquídea de encinar, Epipactis Microphylla. La imagen es el resultado de juntar 6 tomas. Nikon D700 | 105mm | f/8 | 1/30s | ISO 200 | 5000K con anillos de extensión de 12 y 20mm",
    "caption": "Una orquídea de encinar, Epipactis Microphylla. La imagen es el resultado de juntar 6 tomas. Nikon D700 | 105mm | f/8 | 1/30s | ISO 200 | 5000K con anillos de extensión de 12 y 20mm"
  },
  {
    "id": "b2-c14-p126-1",
    "chapterNumber": 14,
    "filePath": "/images/book-2/cap-14/p126-im0.jpg",
    "altText": "Figura de la página 126 — Bokeh vs profundidad de campo.",
    "caption": "Figura de la página 126 — Bokeh vs profundidad de campo.",
    "cameraModel": "Nikon D300s",
    "lensFocal": "125mm",
    "aperture": "f/2.8",
    "shutterSpeed": "1/180”",
    "iso": "3200",
    "kelvin": "3650K"
  },
  {
    "id": "b2-c14-p127-1",
    "chapterNumber": 14,
    "filePath": "/images/book-2/cap-14/p127-im0-1.jpg",
    "altText": "Mal bokeh con el objetivo zoom Nikon 18-105mm f/3.5-f/5.6. Buen bokeh con el objetivo Nikon 85mm f/1.4.",
    "caption": "Mal bokeh con el objetivo zoom Nikon 18-105mm f/3.5-f/5.6. Buen bokeh con el objetivo Nikon 85mm f/1.4."
  },
  {
    "id": "b2-c14-p127-2",
    "chapterNumber": 14,
    "filePath": "/images/book-2/cap-14/p127-im1-2.jpg",
    "altText": "Mal bokeh con el objetivo zoom Nikon 18-105mm f/3.5-f/5.6. Buen bokeh con el objetivo Nikon 85mm f/1.4.",
    "caption": "Mal bokeh con el objetivo zoom Nikon 18-105mm f/3.5-f/5.6. Buen bokeh con el objetivo Nikon 85mm f/1.4."
  },
  {
    "id": "b2-c14-p129-1",
    "chapterNumber": 14,
    "filePath": "/images/book-2/cap-14/p129-im0.jpg",
    "altText": "Figura de la página 129 — Bokeh vs profundidad de campo.",
    "caption": "Figura de la página 129 — Bokeh vs profundidad de campo."
  },
  {
    "id": "b2-c14-p131-1",
    "chapterNumber": 14,
    "filePath": "/images/book-2/cap-14/p131-im0.jpg",
    "altText": "Figura de la página 131 — Bokeh vs profundidad de campo.",
    "caption": "Figura de la página 131 — Bokeh vs profundidad de campo.",
    "cameraModel": "Nikon D7100",
    "lensFocal": "85mm",
    "aperture": "f/1.4",
    "shutterSpeed": "1/100s",
    "iso": "800",
    "kelvin": "3700K"
  },
  {
    "id": "b2-c14-p132-1",
    "chapterNumber": 14,
    "filePath": "/images/book-2/cap-14/p132-im0-1.jpg",
    "altText": "Figura de la página 132 — Bokeh vs profundidad de campo.",
    "caption": "Figura de la página 132 — Bokeh vs profundidad de campo.",
    "cameraModel": "Nikon D4s",
    "lensFocal": "125mm",
    "aperture": "f/1.4",
    "shutterSpeed": "1/6400s",
    "iso": "100",
    "extraNotes": "3700K Nikon D4s · 200mm · 1/640s",
    "kelvin": "5650K"
  },
  {
    "id": "b2-c14-p132-2",
    "chapterNumber": 14,
    "filePath": "/images/book-2/cap-14/p132-im1-2.jpg",
    "altText": "Figura de la página 132 — Bokeh vs profundidad de campo.",
    "caption": "Figura de la página 132 — Bokeh vs profundidad de campo."
  },
  {
    "id": "b2-c14-p133-1",
    "chapterNumber": 14,
    "filePath": "/images/book-2/cap-14/p133-im0.jpg",
    "altText": "Figura de la página 133 — Bokeh vs profundidad de campo.",
    "caption": "Figura de la página 133 — Bokeh vs profundidad de campo.",
    "cameraModel": "Nikon D700",
    "lensFocal": "500mm",
    "aperture": "f/5.6",
    "shutterSpeed": "1/190s",
    "iso": "400",
    "kelvin": "5300K"
  },
  {
    "id": "b2-c14-p134-1",
    "chapterNumber": 14,
    "filePath": "/images/book-2/cap-14/p134-im0.jpg",
    "altText": "Figura de la página 134 — Bokeh vs profundidad de campo.",
    "caption": "Figura de la página 134 — Bokeh vs profundidad de campo."
  },
  {
    "id": "b2-c14-p135-1",
    "chapterNumber": 14,
    "filePath": "/images/book-2/cap-14/p135-im0-1.jpg",
    "altText": "Kit de figuras para bokeh.",
    "caption": "Kit de figuras para bokeh."
  },
  {
    "id": "b2-c14-p135-2",
    "chapterNumber": 14,
    "filePath": "/images/book-2/cap-14/p135-im1-2.jpg",
    "altText": "Kit de figuras para bokeh.",
    "caption": "Kit de figuras para bokeh."
  },
  {
    "id": "b2-c15-p138-1",
    "chapterNumber": 15,
    "filePath": "/images/book-2/cap-15/p138-im0.jpg",
    "altText": "El Bardo en plan Morfeo, The Matrix.",
    "caption": "El Bardo en plan Morfeo, The Matrix."
  },
  {
    "id": "b2-c15-p139-1",
    "chapterNumber": 15,
    "filePath": "/images/book-2/cap-15/p139-im0.jpg",
    "altText": "El making of: pintura con luz con Germán (el Desarrollador), Rafael (el Bardo) y yo mismo (el Fotógrafo).",
    "caption": "El making of: pintura con luz con Germán (el Desarrollador), Rafael (el Bardo) y yo mismo (el Fotógrafo)."
  }
];

export const BOOK_2_BLOCKS: Record<number, SeedBlockInput[]> = {
  "0": [
    {
      "sectionAnchor": "b2-c0-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Introducción",
        "anchor": "b2-c0-sec-2"
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Lo habrás escuchado un millón de veces:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“Domina la profundidad de campo, y tus fotos van a mejorar como por arte de magia.”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sólo para poner un ejemplo. El gran maestro y autor, José B. Ruíz, en su fantástico libro, El Fotógrafo en la Naturaleza, también se refiere a la profundidad de campo:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "“Maximizar la profundidad de campo pasa por elegir cuidadosamente el punto de enfoque. Del lugar del encuadre que hayamos enfocado dependerá que quizás estemos desaprovechando parte de la profundidad de campo disponible en el plano más cercano o hacia el infinito.”",
        "anchor": "b2-c0-sec-3"
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y es verdad - el saber utilizar la profundidad de campo del modo correcto te da mucho poder. Puede transformar una buena foto en otra capaz de ganarse el corazón de la gente."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Dicho así, parece sencillo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿El único problema?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "No estás seguro de cómo realmente utilizar la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Cómo puedes obtener poca profundidad de campo? ¿O mucha? ¿Cuándo debes utilizar mucha o poca? ¿Dónde deberías enfocar? ¿Qué parámetros de cámara debes utilizar?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Mientras muchos expertos nos bombardean con las bondades y virtudes de saber utilizar la profundidad de campo, muy pocos nos cuentan cómo realmente pasar a la acción."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo que resulta que muchos fotógrafos bien intencionados se pasan horas y horas tratando de aplicar la profundidad de campo sin realmente entender completamente el concepto y sin saber utilizarlo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si este es tu caso, no te preocupes. ¡No eres el único!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En mis cursos, me gusta introducir la profundidad de campo junto a la apertura, justo después del triángulo de exposición (apertura, velocidad de obturación e ISO). Durante"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "las clases teóricas me apoyo en múltiples ejemplos y herramientas disponibles online, incluida la calculadora de profundidad de campo de PhotoPills, para ayudar a mis alumnos a visualizar qué parámetros influyen en la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Uno de los momentos en los que consigo sorprender a mis alumnos es cuando cojo mi iPhone y uso la realidad aumentada de la calculadora de profundidad de campo de PhotoPills para responder a una de las preguntas que más me hacen:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“Antoni, esto de la hiperfocal está muy bien... pero, ¿dónde debo enfocar exactamente?”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b2-c0-p7-1",
        "rightAssetId": "b2-c0-p7-2"
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sorprendentemente, no me hacen muchas preguntas durante las clases teóricas. Parece que todo el mundo ha asimilado el concepto rápidamente. Desgraciadamente, esto se aleja por completo de la realidad."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "No es hasta el día siguiente, durante la clase práctica, cuando surgen los problemas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En el ambiente se percibe la frustración y desesperación de la gente, recordándome exactamente lo que sentí la primera vez que intenté aplicar el concepto de profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La mayoría de mis alumnos ven cómo su incapacidad de captar el nivel deseado de profundidad de campo limita su creatividad. Principalmente, esto se debe a dos hechos:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "No han asumido correctamente el concepto. Necesitan practicar."
            }
          ],
          [
            {
              "text": "Las limitaciones de sus equipos, en muchos casos una cámara digital reflex básica con una lente 18-55mm f/3.5-5.6."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los problemas que aparecen con más frecuencia son:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "En fotografía de retrato, la mayoría no consigue separar el fondo del sujeto. No saben cómo desenfocar los elementos del fondo y primer plano para así conseguir el nivel de profundidad de campo deseado."
            }
          ],
          [
            {
              "text": "En fotografía de paisaje, el problema típico consiste en no poder maximizar la profundidad de campo. “Antoni, ¿Porqué las estrellas me quedan borrosas?” - me preguntan. Muchos, no se atreven a utilizar la distancia hiperfocal, por lo que eligen aperturas muy cerradas (f/16, f/22) para maximizar la profundidad de campo."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Obviando que, cuando se dispara con focales cortas (10mm-35mm), enfocar a la distancia hiperfocal es la manera más sencilla y rápida de maximizar la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Por otro lado, la mayoría de estudiantes no sabe cómo enfocar a la distancia hiperfocal. Tratan de enfocar la lente a exactamente al número que obtienen de las tablas de hiperfocales, quedándose cortos la mayoría de veces. ¿La solución?, nunca te quedes corto al enfocar a la distancia hiperfocal. Si te quedas corto todo lo que esté en el horizonte te quedará desenfocado. Debes asegurarte de que enfocas a una distancia mayor a la hiperfocal. Pásate de medio metro o un metro. Esto te permitirá"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "mantener el plano lejano de profundidad de campo en el infinito. Así captarás todos los elementos del horizonte (las estrellas por ejemplo) perfectamente enfocados."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Los equipos básicos limitan la creatividad, impidiendo transformar tus ideas en fotos reales."
            }
          ],
          [
            {
              "text": "Algunos alumnos simplemente demuestran que no entendieron el concepto. Mezclan la profundidad de campo con la distancia focal, o incluso en la mínima distancia de enfoque. Otros mezclan la distancia al sujeto con la hiperfocal. ¡todo un lío!"
            }
          ],
          [
            {
              "text": "A un nivel más avanzado, los problemas surgen al explicar el concepto de Círculo de Confusión (CoC). Muchas veces no se entiende su aplicación práctica."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pues bien, mi objetivo con este tutorial es ayudarte a superar todas las dificultades cuando intentes captar una determinada profundidad de campo, independientemente de tu nivel de conocimientos (principiante, avanzado o profesional). Después de leer esta guía, serás capaz de controlar lo que queda enfocado y desenfocado en tus fotos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para conseguirlo, te daré todo lo que necesitas. Desde la teoría (profundidad de campo, hiperfocal, Círculo de Confusión, etc) a herramientas útiles como PhotoPills y sus calculadoras online gratuitas, junto a un largo número de imágenes y ejemplos para inspirarte."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En otras palabras, estás a punto de poder decidir cuánta profundidad de campo quieres y dónde la quieres. De este modo, alcanzarás el máximo nivel de expresión personal a través de la fotografía. O como los Maestros dicen… tus fotos empezarán a tener una gran profundidad de sentimiento."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“Mira y piensa antes de abrir el obturador. El corazón y la mente son el verdadero lente de tu cámara.”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Yousuf Karsh"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b2-c0-sec-3",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "El Mapa de Enfoque (Focus Map) Exclusivo de la Sony Alpha 7 IV",
        "summary": "Tu Sony Alpha 7 IV es una de las primeras cámaras Full-Frame de Sony en incorporar la función [Mapa de enfoque (Focus Map)], diseñada específicamente para visualizar la profundidad de campo en tiempo real en el visor:",
        "bulletPoints": [
          "Visualización cromática de la Profundidad de Campo: Superpone un código de colores en pantalla donde las zonas delante del plano enfocado se ven en naranja, las zonas detrás del área enfocada se ven en azul, y toda la región dentro de la Profundidad de Campo (enfocada) se ve limpia y nítida.",
          "Cambia en tiempo real al girar el anillo de enfoque o al cerrar la apertura de f/1.4 a f/16."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000658487.html",
        "manualLabel": "Manual Sony A7 IV — Mapa de Enfoque (Visualización de la Profundidad de Campo)",
        "cameraPath": "MENU → Enfoque → Asistente de enfoque → Mapa de enfoque (Activar)"
      }
    }
  ],
  "1": [
    {
      "sectionAnchor": "b2-c1-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Antes de entrar en detalle en el concepto de profundidad de campo, pensé que, para los que estéis buscando respuestas rápidas, sería interesante empezar con esta serie de preguntas y respuestas:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Qué es la profundidad de campo?",
        "anchor": "b2-c1-sec-2"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La profundidad de campo (PdC) es la distancia entre el elemento más cercano y lejano de una escena que aparecen “aceptablemente enfocados” en la imagen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Porqué me debería interesar?",
        "anchor": "b2-c1-sec-3"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El dominio de la profundidad de campo te dará el control creativo sobre lo que aparece enfocado y desenfocado en tus imágenes, convirtiéndote en todo un contador de histórias."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-4",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Recomiéndame algunos fotógrafos que puedan inspirarme.",
        "anchor": "b2-c1-sec-4"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Me encanta el trabajo de: Bill Gekas, Utah Barth, Clyde Butcher y Jose B. Ruíz."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-5",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Qué afecta a la profundidad de campo?",
        "anchor": "b2-c1-sec-5"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La profundidad de campo depende de la apertura, distancia de enfoque, distancia focal y Círculo de Confusión. Este último, el CoC, depende del sensor de la cámara, el tamaño de impresión de la foto, la distancia de visionado de la foto y la agudeza visual del observador."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Produce más profundidad de campo: aperturas cerradas (f/8-f/22), focales cortas (10- 35mm), distancias de enfoque más grandes y sensores de cámara más pequeños (con factor de recorte)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Produce menos profundidad de campo: aperturas abiertas (f/1.4-f/5.6), focales largas (70-600mm), distancias de enfoque más pequeñas y sensores de cámara más grandes (formato completo)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-6",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Dónde puedo encontrar una calculadora de profundidad de campo?",
        "anchor": "b2-c1-sec-6"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Puedes utilizar las calculadoras online de PhotoPills. Y si buscas una app que te proporcione todo lo que necesitas, echa una ojeada a PhotoPills."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-7",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Qué es el Círculo de Confusión (CoC)?",
        "anchor": "b2-c1-sec-7"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es una convención utilizada para establecer lo que se considera que está aceptablemente enfocado en una imagen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Se define como el máximo diámetro (mm) que un punto desenfocado en la imagen captada por el sensor de la cámara se verá como un punto (enfocado) en la imagen impresa."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Necesitas decidir el valor del Círculo de Confusión para poder calcular los valores de la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-8",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Qué es la distancia hiperfocal?",
        "anchor": "b2-c1-sec-8"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando enfocas a la distancia hiperfocal, todo lo que cae entre la mitad de esta distancia e infinito estará enfocado. Depende de la apertura, la focal y el Círculo de Confusión. No depende de la distancia al sujeto o de enfoque."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-9",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Cuál es la utilidad práctica de la distancia hiperfocal?",
        "anchor": "b2-c1-sec-9"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La distancia hiperfocal se utiliza habitualmente en fotografía de paisaje y nocturna para maximizar la profundidad de campo cuando se usan focales cortas (10-35mm)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El valor de la hiperfocal para focales más largas es tan grande que imposibilita utilizarla como método de enfoque."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-10",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Cómo enfocar a la distancia hiperfocal?",
        "anchor": "b2-c1-sec-10"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-10",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Enfocar la lente a exactamente la distancia hiperfocal que resulta de tabla de hiperfocales es muy difícil. De hecho, no es necesario."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-10",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una vez que la hayas calculado, simplemente asegúrate de que enfocas la lente a una distancia ligeramente superior (0,5-1m). Si te quedas corto, y enfocas a una distancia menor a la hiperfocal, incluso aunque sea por 1 cm, todo lo que esté en el horizonte (por ejemplo, las estrellas) quedarán desenfocadas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-10",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Pásate siempre!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-11",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Cual es el parámetro que se utiliza normalmente para controlar la profundidad de campo?",
        "anchor": "b2-c1-sec-11"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡La apertura! ¿Porqué? Pues, porque es el más sencillo de manejar para conseguir la profundidad de campo que deseas. Utiliza aperturas grandes para reducir la profundidad de campo y más pequeñas para aumentarla. Pero no siempre es posible escoger la apertura en base al criterio de profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-11",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Dependiendo de la foto, puede haber otros factores que condicionen el valor de la apertura a escoger. Por ejemplo, en fotografía de fauna salvaje, cuando intentas fotografiar a un animal en movimiento, deberás tener en cuenta la velocidad de obturación y el ISO, si quieres congelar el movimiento y tener una imagen correctamente expuesta al mismo tiempo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-12",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Cómo conseguir mucha profundidad de campo con focales cortas (10-35mm)?",
        "anchor": "b2-c1-sec-12"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una vez que hayas decidido la focal y la apertura, enfoca la lente a la distancia hiperfocal."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Asegúrate siempre de no quedarte corto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es mejor pasarse un poquito, enfocando a una distancia un poco mayor a la hiperfocal."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-12",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Con ello te aseguras de que todo lo que quede en el horizonte también está enfocado. Si te quedas corto, elementos como las montañas y las estrellas te quedarán desenfocados."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-13",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Cómo conseguir mucha profundidad de campo con focales largas (70mm o superior)?",
        "anchor": "b2-c1-sec-13"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-13",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sitúate más lejos del sujeto, utiliza aperturas pequeñas (f/8, f/11, f/16) y enfoca la lente a un tercio del encuadre (o la escena) empezando desde la parte inferior."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-14",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Cómo conseguir poca profundidad de campo?",
        "anchor": "b2-c1-sec-14"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-14",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Decide la profundidad de campo que necesitas y acércate al sujeto. Usa aperturas grandes (f/1.4 a f/5.6) y focales largars (70mm o superiores). Finalmente enfoca la lente en la parte del sujeto a la que quieras dirigir la atención."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-14",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además, si utilizas una cámara con sensor de formato completo vas a conseguir menor profundidad de campo que con una de sensor con factor de recorte."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-15",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Debería utilizar siempre aperturas pequeñas (f/11-f/22) para maximizar la profundidad de campo?",
        "anchor": "b2-c1-sec-15"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-15",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡NO! Porque los efectos negativos de la difracción reducirán la resolución de tu fotos y, por lo tanto, te quedarán menos nítidas. La difracción limita o condiciona la apertura a elegir."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-16",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Qué es la difracción?",
        "anchor": "b2-c1-sec-16"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La difracción es el resultado de la dispersión de la luz causada por los bordes de las palas del diafragma en el objetivo. Cuanto menor es la apertura, más se dispersan los rayos de luz y más negativo será el efecto sobre la foto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-16",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Este es el motivo por el que no siempre se pueden usar aperturas muy cerradas para aumentar la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-17",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Qué es el botón de previsualización de la profundidad de campo de la cámara?",
        "anchor": "b2-c1-sec-17"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es el botón que cierra la apertura hasta un punto concreto seleccionado en la cámara que te permite tener una previsualización de la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-17",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Con mi cámara digital, lo utilizo muy poco ya que es más fácil tomar una fotografía de prueba y ver qué profundidad de campo tengo. En cambio, resulta de utilidad cuando trabajo con mi cámara analógica, por el alto coste que tiene malgastar una foto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-18",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Puedo utilizar la clásica calculadora de profundidad de campo en macrofotografía?",
        "anchor": "b2-c1-sec-18"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-18",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡No! Debes tener en cuenta la magnificación. Utiliza nuestra calculadora macro de profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-19",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Qué objetivos me recomiendas para macrofotografía?",
        "anchor": "b2-c1-sec-19"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-19",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los siguientes objetivos son fantásticos: Nikon Micro-60mm f/2.8G, Tamron Macro 90mm f/2.8, Canon Macro 100m f/2.8L, Olympus Macro 60mm f/2.8, Nikon Micro 105mm f/2.8G, Sigma Macro 150mm f/2.8 y Nikon Micro 200mm f/4D."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-20",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Qué es el bokeh?",
        "anchor": "b2-c1-sec-20"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El Bokeh es el término en Japonés para “desenfoque”. En fotografía, se utiliza para describir la calidad de las partes que quedan desenfocadas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-20",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los términos “bokeh” y “poca profundidad de campo” no son lo mismo. Ya que el primero define si las partes desenfocadas de la imagen quedan bien o no, y el segundo define qué partes de la imagen quedan aceptablemente enfocadas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-21",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Qué objetivos me van a proporcionar un buen bokeh?",
        "anchor": "b2-c1-sec-21"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-21",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Objetivos que producen muy buen bokeh: Nikon 85mm f/1.4, Canon 24-70mm f/2.8, Nikon 28-70mm f/2.8, Nikon 24-70mm f/2.8, Nikon 135mm f/2 DC, Nikon 200mm f/2 VR y el Canon 200mm f/2 IS."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-21",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Objetivos que te van a dar un mal bokeh: Nikon 50mm f/1.4 AF-D, Canon 50mm f/1.4, Nikon 18-105mm f/3.5-f/5.6 y el Canon 24-105mm f/4."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-22",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "¿Cómo consigo captar un buen bokeh?",
        "anchor": "b2-c1-sec-22"
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-22",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Utiliza una focal larga (50mm o más). Selecciona una apertura abierta (f/1.4, f/1.8 o f/2.8). Acércate al sujeto. Enfoca la lente al sujeto que quieras que quede enfocado."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-22",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Coloca el sujeto lejos del fondo que quieres dejar desenfocado. Asegúrate de que en el fondo desenfocado haya pequeños puntos de luz, como pueden ser reflejos o fuentes de luz (artificial o natural)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-22",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si no has encontrado las respuestas que estabas buscando, seguro que las encontrarás en en los siguientes apartados. Y si todavía tienes más preguntas, utiliza la sección de “Comentarios” al final de este artículo y te responderemos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c1-sec-22",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Sensor Full-Frame 33 MP y Controles de Enfoque en tu Sony Alpha 7 IV",
        "summary": "Cómo se traducen las respuestas rápidas de este capítulo a las especificaciones ópticas de tu Sony Alpha 7 IV:",
        "bulletPoints": [
          "Círculo de Confusión en la Sony A7 IV: Al tener un sensor Full-Frame (35,9 × 23,9 mm) de 33 MP, en las calculadoras como PhotoPills selecciona el modelo exacto [Sony A7 IV] (CoC estándar de 0,030 mm o de alta exigencia según resolución).",
          "Asistencia para clavar la hiperfocal: Combina [Ampliar enfoque] con [Visualización Peaking] en color Rojo o Amarillo."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654634.html",
        "manualLabel": "Manual Sony A7 IV — Visualización de Peaking y Ampliación de Enfoque",
        "cameraPath": "MENU → Enfoque → Peaking → Visualización Peaking (Activar)"
      }
    }
  ],
  "2": [
    {
      "sectionAnchor": "b2-c2-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p17-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“¿De qué sirve tener una gran profundidad de campo, si no hay una adecuada profundidad de los sentimientos?” - William Eugene Smith ¡Se trata de conseguir profundidad en los sentimientos!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "William Eugene Smith sabiamente nos recuerda que la profundidad de campo, por sí sola, es simplemente una herramienta más a nuestro servicio."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sin embargo, puede ser una herramienta bastante inútil si no sabes cómo utilizarla en pro de la creatividad. Admitámoslo, al fin y al cabo, lo que hace que tus fotos realmente sobresalgan de las demás es tu mente creativa: la idea, el mensaje, la historia que deseas transmitir."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, la profundidad de campo es una gran herramienta que puedes utilizar para convertir tus ideas en imágenes espectaculares. Internaliza el concepto, apréndelo y te prometo que cuando controles qué áreas de tu imagen quedan enfocadas, te habrás convertido en un gran contador de histórias y, por lo tanto, en un mejor comunicador."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero, antes de que nos sumerjamos dentro del excitante universo de la profundidad de campo, deja que comparta unos ejemplos contigo… buscando la inspiración."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si los analizas con cariño, empezarás a hacerte a la idea de “dónde enfocar” y “qué parámetros utilizar” para poder hacer cualquier fotografía que tengas en mente."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Ejemplos con mucha profundidad de campo",
        "anchor": "b2-c2-sec-2"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "A veces, querrás maximizar la profundidad de campo para que todo quede perfectamente enfocado en la foto. Un ejemplo clásico es cuando estás fotografiando la Vía Láctea."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En este caso, normalmente buscas captar detalle desde el primer plano hasta el infinito, mientras que las estrellas salen como grandes puntos brillantes. Al igual que en la fotografía de paisaje, la tendencia es buscar grandes profundidades de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La buena noticia es que cuando estés disparando con focales cortas (10-35mm), todo lo que necesitas hacer es enfocar a la distancia hiperfocal para maximizar la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por el contrario, cuando quieras utilizar focales más largas (200mm, 300mm, 500mm), la hiperfocal va a ser tan grande que no podrás enfocar a ella."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En este caso, si utilizas aperturas pequeñas (f/11, f/16, etc) para maximizar la profundidad de campo, la regla a seguir es la de enfocar alrededor de un tercio dentro del encuadre (o de la escena) empezando por la parte inferior."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Este truco funciona porque, cuando utilizas aperturas tan pequeñas junto con focales tan largas, la profundidad de campo se distribuye 1/3 (33,33%) delante del punto de enfoque y2/3 (66,66%) detrás."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Eso sí, asegúrate de no enfocar al infinito si no quieres que el primer plano te quede borroso."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p19-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para hacer esta foto me inspiré en las leyendas de marineros. Traté de conectar el Cielo y el Infierno con una escalera hecha de estrellas. Enfocar a la distancia hiperfocal fue clave para maximizar la profundidad de campo. Si quieres averiguar cómo la tomé exactamente, consulta el artículo “Cómo hacer fotos contagiosas de la Vía Láctea”."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Permíteme que insista. Voy a repetirlo muchas veces a lo largo del artículo. Al enfocar a una distancia ligeramente superior a la hiperfocal nos aseguramos que el límite lejano de profundidad de campo permanezca en el infinito. Por lo tanto, todos los elementos del horizonte quedarán perfectamente enfocados."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En 2012, un fenómeno muy extraño sucedió en Menorca: ¡nevó! Esta foto enseña el paisaje blanco por la nieve y, al fondo, El Toro, nuestra colina más alta."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p20-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Tomé esta foto durante una jornada fotográfica con mi amigo y maestro José B. Ruíz."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Veinte minutos antes de la toma, el cielo estaba libre de nubes. Nada hacía presagiar el crepúsculo y los colores que íbamos a disfrutar unos minutos más tarde. Una vez más, Ansel Adams estuvo de nuestra parte."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El motivo por el que no enfoqué a la distancia hiperfocal es que no tenía ningún elemento interesante ni en el primer plano ni en el fondo. Además, la roca estaba a una distancia (20m) mayor que la hiperfocal (5,14m). Lo más fácil en este caso fue enfocar a la gran roca."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p21-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ciutadella de Menorca, el pueblo en el que vivo, es pura magia. Las luces de la calle, los faros, la luna y, al horizonte, Mallorca, la isla más grande del archipiélago balear, completando una gran escena durante la hora azul."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p22-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El tejado de la Catedral de Ciutadella proporciona unas vistas únicas. Y también es único vivir una puesta de sol desde las alturas. Una vez más, enfocar a la hiperfocal me permitió captar todos los elementos perfectamente nítidos, desde el adorno del tejado hasta el último edificio."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p23-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Después de una escapada fotográfica con el equipo de PhotoPills, siempre es una buena idea tomar una foto de los PhotoPillers: Germán (el Arquitecto), Joan (la Estrella de Rock), Rafael (el Bardo) y yo mismo con la gloriosa Vía Láctea cruzando el cielo. Por razones obvias, la foto fué hecha después de una sesión tributo a Star Wars."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Ejemplos con poca profundidad de campo",
        "anchor": "b2-c2-sec-3"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Otras veces, prefieres tener poca profundidad de campo para dirigir la atención a un punto en concreto o para separar el sujeto de las distracciones de la foto. El ejemplo típico es la fotografía de retrato. Pero también resulta muy útil en la fotografía de paisaje, de viaje, de producto, de eventos y en la macrofotografía."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para tener poca profundidad de campo, como norma general, deberás acercarte al sujeto, enfocar a la parte del sujeto que quieras perfectamente enfocada y utilizar focales largas (70mm o más) con aperturas abiertas (f/1.4-f/5.6)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p24-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Tomé esta fotografía en el exterior, reforzando la iluminación únicamente con un reflector dorado. Enfoqué al ojo izquierdo (a mi derecha) de Júlia con la intención de captar la atención. Centré el ojo enfocado en el fotograma, huyendo de reglas, pero cuidando la proporción del horizonte en relación a la línea de los ojos, situándola en el tercio superior de la imagen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p25-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ambos, la felicidad y el bonito bokeh del fondo, parecen sostener a Anna en el aire. El bosque nos da inumerables oportunidades para el retrato, ¡aprovéchalo!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p26-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Un bosque lluviosos y mis valientes alumnos. ¿Qué más se puede pedir?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p27-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Esta imagen es el resultado de una gran sesión fotográfica con el abejaruco (Merops apiaster) en una de las colonias de cría en la isla de Menorca. El enfoque en este tipo de fotografía tiene que ser muy preciso ya que la profundidad de campo es muy pequeña por la focal utilizada. Utilicé un escondite (hide). La belleza y cromatismo del plumaje de estas aves convierten la fotografía en puro arte."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pude cerrar la apertura porque el abejaruco se mantuvo quieto, lo que me permitió tenerlo completamente enfocado."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p28-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como contraposición al ejemplo anterior, esta fotografía fue tomada mientras el ratonero común (Buteo buteo) estaba en pleno vuelo. Tuve que abrir el diafragma para poder reducir la velocidad de obturación y, así, congelar el movimiento. Unos minutos antes, estaba disparando con mi Nikon D300s con un teleconvertidor 1.4x junto con mi 500mm. Cuando vi que la rapaz se acercaba, decidí cambiar a mi Nikon D700 y objetivo 500mm. No tuve ni que recortar la foto. Cambiar el equipo fue la decisión correcta. Tuve mucha suerte."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p29-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Juntando 11 fotografías con muy poca profundidad de campo se pueden crear panoramas con apariencia de gran profundidad de campo. Esta técnica nos da otra opción para poder controlar las zonas que aparecen enfocadas y desenfocadas en la imagen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p30-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Deberías probar el método Brenizer (Ryan Brenizer). Te permite crear retratos por medio de diferentes fotos con la misma profundidad de campo. Las tomas con un teleobjetivo para finalmente construir un panorama."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando miras la foto, tienes la impresión que la imagen fue tomada con un gran angular pero con poca profundidad de campo. Esta foto es el resultado de 57 fotogramas fusionados con el software PTGui Pro. La peor parte del trabajo fue para mi hija Aina, que tuvo que estar totalmente quieta durante toda la sesión."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p31-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "De vez en cuando, para desintoxicarme del sistema digital, salgo con mis cámaras de carrete. Todavía conservo en perfectas condiciones mi primera Olympus OM-10, una Yashica mat 124-G, unas cuantas Polaroid Land y mi querida Fm2n. Todas ellas todavía funcionan a la perfección."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En la foto, se ve a mi hija Aina sentada en una silla esperando a que su madre termine de comprar. Sin duda, el grano argéntico de las analógicas es artísticamente insuperable."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p32-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Esta fotografía le tomé en la tradicional matanza del cerdo en un pequeño pueblo de Mallorca. Un rabioso contraluz del sol naciente incidía en la escena del matarife. En un abrir y cerrar de ojos encuadré la botella de bebida típica mallorquina, dejando al protagonista de esta tradición desenfocado y recortado por la luz solar."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p33-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "San Juan es una de las mejores fiestas de pueblo del mundo. Se celebra en Ciutadella de Menorca el 23 y 24 de junio. Es famosa por sus carreras de caballos a través de la multitud. Los jinetes y caballos galopan abriéndose paso entre el gentío. Es un momento increíblemente peligroso para todos los participantes. Agité la cámara para incrementar la sensación de velocidad. Puedes aprender más acerca de este gran festival leyendo “Soñando con Sant Joan”."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p34-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Dos edificios emblemáticos de mi ciudad me dieron la oportunidad de jugar con el 80- 200mm. La fachada del ayuntamiento aparece desdibujada por la distancia a la que está del motivo principal: el bello pórtico de entrada a la plaza del Borne de la casa señorial Torre-Saura. Los dos detalles se funden en el fotograma."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p35-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "A veces, donde menos te lo esperas aparece la foto. Esta culebra de agua estaba tranquilamente descansando en uno de los bebederos de reses de un encinar. Después de 10 minutos de “tanteo” se dejó hacer algunas fotografías."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p36-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La macrofotografía con objetivos invertidos puede llegar a convertirse en una pasión."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Abstraer para crear arte. En este caso, pude llegar hasta un ratio de magnificación de 4:1 utilizando el gran angular de Cosina con un anillo inversor."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por supuesto, estos sólo son algunos ejemplos prácticos de utilización de la profundidad de campo. Cada uno puede aplicar la técnica como más le interese, ¡simplemente intenta ser lo más creativo posible!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ahora que tienes una idea de los resultados que puedes conseguir aplicando el concepto de profundidad de campo, es la hora de profundizar en el concepto en sí mismo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Agárrate que vienen curvas!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c2-p37-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b2-c2-sec-3",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Cómo Replicar los 20 Ejemplos Inspiradores con tu Sony Alpha 7 IV",
        "summary": "Para lograr la precisión de foco de estos 20 ejemplos (desde retratos a f/1.4 hasta paisajes nocturnos a la hiperfocal) con tu Sony Alpha 7 IV:",
        "bulletPoints": [
          "En retratos de poca PdC: Usa [Punto flexible: S] con [AF cara/ojos] activado para que el plano focal caiga exactamente sobre la pupila más cercana.",
          "En paisaje y astrofotografía: Pasa a enfoque manual (MF) o DMF, activa [Ampliar enfoque] sobre una estrella brillante o elemento situado a la distancia hiperfocal y ajusta el anillo del objetivo."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654621.html",
        "manualLabel": "Manual Sony A7 IV — Área de Enfoque y Modo DMF",
        "cameraPath": "Botón Fn → Modo de enfoque (AF-S / DMF / MF) y Área de enfoque"
      }
    }
  ],
  "3": [
    {
      "sectionAnchor": "b2-c3-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Debido a que la cámara puede enfocar la lente a tan sólo una distancia y no varias, la nitidez va disminuyendo gradualmente así como nos alejamos de la distancia de enfoque o, si lo prefieres, del plano de enfoque (PdE)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Definición de profundidad de campo",
        "anchor": "b2-c3-sec-2"
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como resultado de lo anterior, la profundidad de campo (PdC) es la distancia entre el elemento más cercano y más lejano de la escena que aparecen estar “aceptablemente nítidos” en la imagen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c3-p39-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La distancia entre la cámara y el primer elemento que aparece aceptablemente nítido en la imagen se llama límite cercano de PdC. Del mismo modo, la distancia entre la cámara y el elemento más lejano que aparece aceptablemente nítido se denomina límite lejano de PdC."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Observa que los límites de profundidad de campo no son fronteras rígidas entre lo que se ve enfocado y desenfocado en la imagen, sino que son graduales. La nitidez se pierde de forma gradual conforme nos separamos del plano de enfoque."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Normalmente, la profundidad de campo no se distribuye de forma equitativa alrededor del plano de enfoque. Lo más habitual es tener más PdC detrás que delante."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para una determinada focal y apertura, cuanto más cerca se enfoque, más equitativa es la distribución de la profundidad de campo (50%-50%) alrededor del plano de enfoque."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por el contrario, cuanto más lejos se enfoque, más aumenta la profundidad de campo en la parte posterior."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c3-p40-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "De forma similar, para una distancia de enfoque y una apertura dadas, un teleobjetivo te proporcionará una distribución más equitativa de la PdC que un gran angular."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Dependiendo de los ajustes que utilices para la foto, el área que se considera estar aceptablemente nítida en la imagen puede oscilar entre menos de un milímetro (macrofotografía) y varios kilómetros, e incluso puede ser infinito (fotografía de paisaje o astrofotografía)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Conseguirás que la profundidad de campo sea infinita cuando enfoques a lo que se llama la distancia hiperfocal o a cualquier distancia superior."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En el apartado 4, explicaré con todo lujo de detalles el concepto de distancia hiperfocal y sus aplicaciones prácticas. Aprenderás que calcular la hiperfocal para los ajustes utilizados te va a ayudar a maximizar la profundidad de campo cuando utilices focales cortas (10-35mm)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c3-p41-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Un hecho interesante sobre la profundidad de campo",
        "anchor": "b2-c3-sec-3"
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hay un hecho en relación a la profundidad de campo al que quiero que prestes atención."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Creo que te va a ayudar a entender mejor el concepto y sus aplicaciones creativas:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“El plano de enfoque es perpendicular a la dirección de disparo”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Vale, vale… Lo sé, parece obvio, pero merece la pena profundizar en cómo podemos sacarle el jugo de manera creativa."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Observa el siguiente retrato. Pertenece a uno de mis proyectos personales llamado “Mujer, Emociones Mezcladas”."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c3-p42-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El proyecto intenta alejarse de cualquier momento histórico, cualquier punto geográfico y cualquier papel que la sociedad haya atribuido a la mujer. El observador es conducido a través de un camino íntimo para finalmente descubrir las más profundas emociones que habitan en la mujer."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Esta fotografía representa el inicio de una terrible enfermedad: el cáncer. En ella, se ve el momento en el que María, hoy totalmente recuperada, observando su pelo caído, se dió cuenta de que su vida iba a convertirse en una auténtica pesadilla. Estaba sufriendo pero también juntando todas su fuerzas y energías para luchar contra la enfermedad."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c3-p43-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para contar la historia de María, el reto fue captar su cara y sus manos completamente enfocadas mientras que su cuerpo enfermo, donde el cáncer se estaba desarrollando, permanecía borroso."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Cómo lo hice?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Primero, para minimizar la profundidad de campo, decidí utilizar una distancia de enfoque de 1,5m, una focal de 85mm y una apertura de f/1.4."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Después, le pedí a María que separara las manos del cuerpo. Me subí a una escalera y enfoqué en sus ojos. Finalmente, disparé la foto de manera perpendicular al plano que formaban su cara y sus manos, obteniendo ambas enfocadas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El siguiente dibujo es una ilustración de cómo conseguí que la profundidad de campo funcionara creativamente ese día."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c3-p44-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Con este ejemplo, también quiero señalar una cosa:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“La foto está donde está, no donde tú estás”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, muévete, busca y encuentra el punto exacto de disparo. Cuando estás en el sitio correcto, de repente, todo tiene sentido, todos los elementos se juntan en una gran imagen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Sigamos!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-4",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "La calculadora de profundidad de campo",
        "anchor": "b2-c3-sec-4"
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La profundidad de campo depende del tipo de cámara (tamaño del sensor), apertura, distancia de enfoque, focal y las asunciones subjetivas que se esconden detrás lo que consideramos que está aceptablemente nítido en la imagen final."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Estas asunciones o hipótesis se traducen en lo que se denomina el Círculo de Confusión (CoC), que te explicaré en el apartado 5. Dependiendo de los parámetros utilizados obtendrás una profundidad de campo u otra."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por su sencillez, la apertura es el parámetro típicamente utilizado por los principiantes para controlar la profundidad de campo. Cuanto más abierto el diafragma (números f menores: f/1.4-f/4), menor profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por el otro lado, cuanto más cerrada la apertura (números f mayores: f/11-f/22), mayor será la profundidad de campo. Sin embargo, como aprenderás en este artículo, las otras variables también te permiten sacar partido a la profundidad de campo, dependiendo de la situación a la que te enfrentes."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Finalmente, antes de entrar en detalle en cómo cada uno de estos parámetros influye en la profundidad de campo y cómo puedes aprovecharte de ello, deja que te regale la calculadora de profundidad de campo de PhotoPills. Te ayudará a estimar los parámetros que necesitas utilizar par alcanzar un deseado nivel de profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Nota: Esta calculadora de profundidad de campo considera las siguientes hipótesis para definir lo que se percibe como aceptablemente nítido en la imagen: para un tamaño de sensor dado, el Círculo de Confusión se calcula asumiendo un tamaño de impresión de la foto de 20cm × 25cm, una distancia de visionado de 25cm y la agudeza visual aceptada por los fabricantes de cámaras y objetivos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "PhotoPills además incluye una tabla de profundidad de campo y una calculadora avanzada de PdC dónde puedes cambiar estas hipótesis para ajustar el Círculo de Confusión según tus necesidades."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si prefieres trabajar con una tabla, puedes utilizar la tabla de profundidad de campo de PhotoPills."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-5",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "TRUCOS",
        "anchor": "b2-c3-sec-5"
      }
    },
    {
      "sectionAnchor": "b2-c3-sec-5",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Previsualización Continua de Apertura en el Visor de la Sony Alpha 7 IV",
        "summary": "En tu Sony Alpha 7 IV puedes elegir cómo se comporta el diafragma mientras encuadras para evaluar la profundidad de campo en vivo:",
        "bulletPoints": [
          "Ajuste [Accionam. apertura en AF]: En modo [Estándar], el diafragma se cierra al valor f seleccionado (hasta f/8 o f/11), permitiéndote ver en directo en el visor OLED la profundidad de campo real entre el límite cercano y el lejano.",
          "Si necesitas enfocar en condiciones de oscuridad extrema, puedes cambiarlo a [Priorid. enfoque] para que el objetivo abra al máximo mientras enfoca."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000656422.html",
        "manualLabel": "Manual Sony A7 IV — Accionamiento de Apertura en AF",
        "cameraPath": "MENU → Enfoque → AF/MF → Accionam. apertura en AF"
      }
    }
  ],
  "4": [
    {
      "sectionAnchor": "b2-c4-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "No importa el tipo de fotografía que hagas (paisaje, nocturna, arquitectura, bodas, etc), cuando tu objetivo sea maximizar la profundidad de campo usando focales cortas (10- 35mm), sólo necesitas hacer tres cosas:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-1",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Calcular la hiperfocal con la calculadora de profundidad de campo."
            }
          ],
          [
            {
              "text": "Usa el modo de enfoque automático para hacer foco a un objeto situado a la distáncia hiperfocal. Para asegurarte, enfoca un poco más lejos que la hiperfocal. No te quedes corto."
            }
          ],
          [
            {
              "text": "Fija el modo de enfoque a manual para mantener el enfoque, apuntar y disparar, ¡así de sencillo!"
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Definición de distancia hiperfocal",
        "anchor": "b2-c4-sec-2"
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En otras palabras, cuando enfocas la lente a la distancia hiperfocal, todo lo que cae entre la mitad de esta distancia y el infinito quedará enfocado. Ésta es la máxima profundidad de campo que puedes conseguir. Por lo tanto, muchas veces, en fotografía de paisaje y nocturna, calcular la hiperfocal se convierte en una necesidad."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c4-p48-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Ojo! Debes saber que si enfocas a una distancia menor a la hiperfocal, aunque sea una diferencia de pocos centímetros, el límite lejano de profundidad de campo no estará en el infinito. Esto provocará que los elementos del horizonte (montañas, estrellas) queden desenfocados en la foto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En la práctica, como explico en el artículo “Cómo hacer fotos contagiosas de la Vía Láctea”, enfocar exactamente a la hiperfocal es muy difícil. Por lo que deberás asegurarte de que estás enfocando a una distancia algo mayor. De hecho, no tienes que pasarte demasiado, medio metro o un metro es suficiente. Sólo asegúrate de que te pasas. Si te quedas corto, todo lo que esté en el horizonte se verá borroso."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por ejemplo, en fotografía nocturna, si enfocas a una distancia menor que la hiperfocal, el límite lejano de profundidad de campo no estará en el infinito, quedándote las estrellas borrosas en al foto. En cambio, si enfocas a una distancia algo mayor, entonces el límite lejano se mantendrá en el infinito y las estrellas quedarán perfectamente enfocadas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Esto también es aplicable en paisaje diurno. Enfocar a la hiperfocal siempre te asegura que los elementos lejanos queden perfectamente enfocados."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c4-p49-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Tabla hiperfocal: calculando la distancia hiperfocal",
        "anchor": "b2-c4-sec-3"
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La distancia hiperfocal depende de la apertura, la focal, el tamaño del sensor de la cámara y el Círculo de Confusión, o las hipótesis para establecer lo que se considera “aceptablemente nítido” en la imagen (ver apartado 5)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“Oye Antoni, eso es fabuloso, pero ¿cómo demonios calculamos la distancia hiperfocal?”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "No te preocupes por los cálculos, no tienes que hacer los números con las ecuaciones matemáticas, simplemente usa PhotoPills o la siguiente tabla de hiperfocales que funciona para Nikon, Canon y qualquier otra marca (35mm y sensores con factor de recorte)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Nota: Esta calculadora considera las siguientes hipótesis para definir lo que se percibe como aceptablemente nítido en la imagen: para un tamaño de sensor dado, el Círculo de Confusión se calcula asumiendo un tamaño de impresión de la foto de 20cm × 25cm, una distancia de visionado de 25cm y la agudeza visual aceptada por los fabricantes de cámaras y objetivos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Con un simple vistazo a la tabla hiperfocal se puede deducir lo siguiente:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-3",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "A menor distancia focal, menor hiperfocal y, por lo tanto, mayor profundidad de campo."
            }
          ],
          [
            {
              "text": "A mayor distancia focal, mayor hiperfocal y, por lo tanto, menor profundidad de campo."
            }
          ],
          [
            {
              "text": "A menor apertura (más cerrada), menor hiperfocal y, por lo tanto, mayor profundidad de campo."
            }
          ],
          [
            {
              "text": "A mayor apertura (más abierta), mayor hiperfocal y, por lo tanto, menor profundidad de campo."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Cómo enfocar a la distancia hiperfocal",
        "anchor": "b2-c4-sec-4"
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una de las preguntas que me hacen más a menudo cuando estamos fotografiando la Vía Láctea es:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“Antoni, ¿Cómo lo hago para enfocar a la distancia hiperfocal? En mi caso, la hiperfocal es 2,32m."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Creo que lo estoy haciendo bien, pero no consigo que las estrellas queden enfocadas. ¿Qué estoy haciendo mal?”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Parece que los fotógrafos saben calcular la hiperfocal utilizando las calculadoras y tablas, pero cuando llega el momento de ponerla en práctica, no consiguen que los elementos en el horizonte queden enfocados."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si esto te sucede a ti también, seguramente estás enfocando a una distancia algo menor que la hiperfocal."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Los número no mienten!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para una cámara de formato completo, focal 14 mm y apertura f/2.8, la hiperfocal es 2,32m. Veamos lo que sucede con la profundidad de campo cuando enfocas a una distancia algo menor (2,17m), exactamente a la hiperfocal (2,32m) y a una distancia algo mayor (2,47m). Introduce los números en la calculadora de PdC y obtendrás los siguientes valores:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los número de la tabla anterior nos dice que si te quedas corto al enfocar a la hiperfocal, incluso por unos pocos centímetros, el plano lejano de profundidad de campo no estará en el infinito. Estará situado mucho más cerca, por lo que elementos como las estrellas te quedarán borrosos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando enfocas a 2,17m, unos centímetros menos que la hiperfocal, el límite lejano de PdC se queda a 32,57m de la cámara. Todo lo que esté por detrás de esta distancia quedará desenfocado en la foto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por el contrario, si enfocas a una distancia algo mayor que la hiperfocal (2,47m), el"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "límite lejano de PdC permanece en el infinito. Consiguiendo que todos los elementos del horizonte queden perfectamente enfocados."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando estás fotografiando en exteriores, enfocar exactamente a la distancia hiperfocal es muy difícil. Normalmente no vamos midiendo las distancias con una regla. ¡No debes hacerlo!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por tanto, si te equivocas al enfocar a la hiperfocal, asegúrate de que te equivocas en exceso. Nunca te quedes corto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c4-p52-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Echa un vistazo al siguiente vídeo en el que te enseñamos, paso a paso, cómo enfocamos a la hiperfocal."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-5",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Un ejemplo: practicando con la distancia hiperfocal",
        "anchor": "b2-c4-sec-5"
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Fijate en la siguiente fotografía. La tomé utilizando una focal de 22mm, una apertura de f/11 y mi Nikon D4s (formato completo). Al enfocar, utilicé la calculadora de profundidad de campo para calcular la distancia hiperfocal, que resultó ser 1,45m."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Entonces, fijé el modo de enfoque automático para enfocar a una distancia algo superior (1,60m). Finalmente, volví a establecer el modo de enfoque manual, para mantener el enfoque, apunté y disparé."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-5",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c4-p53-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Aquí, la realidad aumentada de la calculadora de profundidad de campo de PhotoPills viene muy bien para visualizar donde se sitúa exactamente la hiperfocal."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-6",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "TIPS",
        "anchor": "b2-c4-sec-6"
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-6",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c4-p54-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c4-sec-6",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Clavando la Distancia Hiperfocal con DMF y Lupa en la Sony Alpha 7 IV",
        "summary": "Muchos objetivos Sony FE modernos son de enfoque electrónico ('focus-by-wire') sin escala física de metros grabada en el barril. ¿Cómo enfocar exactamente a la distancia hiperfocal con tu Sony Alpha 7 IV?",
        "bulletPoints": [
          "1. Calcula la distancia hiperfocal en PhotoPills (ej. 1,85 m a 16mm f/8) e identifica una roca o planta situada a unos 2 metros (un poquito más allá de la hiperfocal).",
          "2. Usa el modo [DMF] (Enfoque manual directo): enfoca con AF sobre esa roca y gira un milímetro el anillo con [Ampliar enfoque] activo para verificar que tanto la roca como el horizonte están nítidos.",
          "3. En objetivos Sony G / GM con respuesta lineal (Linear Response MF), el giro del anillo es 100% repetible."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654620.html",
        "manualLabel": "Manual Sony A7 IV — Enfoque Manual Directo (DMF) y Ampliar Enfoque",
        "cameraPath": "MENU → Enfoque → Asistente de enfoque → Ampliar enfoque"
      }
    }
  ],
  "5": [
    {
      "sectionAnchor": "b2-c5-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“Si te portas mal, el Círculo de Confusión vendrá a por ti”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando se está aprendiendo a manejar el concepto de profundidad de campo, el Círculo de Confusión (CoC) puede llegar a convertirse en una de las peores pesadillas para el fotógrafo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como sucede con el “Hombre del Saco”, el CoC parece no tener forma tangible alguna."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es una especie de concepto abstracto que cambia de forma según quien sea el fotógrafo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero la verdad es que no hay motivo para temer al Círculo de Confusión."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Definición de Círculo de Confusión",
        "anchor": "b2-c5-sec-2"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El CoC es simplemente el tamaño máximo que un punto borroso, en la imagen captada por el sensor, se verá como un punto enfocado en la imagen final, dadas unas ciertas condiciones de visionado (tamaño de impresión, distancia de visionado y agudeza visual del observador)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c5-p56-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En otras palabras, el Círculo de Confusión es el diámetro del punto borroso más grande captado por el sensor que es indistinguible de un punto en la imagen final. Es el parámetro que define lo que se considera aceptablemente enfocado en la foto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como es lógico, sin determinar el valor del Círculo de Confusión (lo que se considera aceptablemente enfocado), no puedes calcular los valores de la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, cuando te pongas a calcular la profundidad de campo, necesitarás haber fijado préviamente el valor del Círculo de Confusión."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Normalmente, la mayoría de las calculadoras de profundidad de campo utilizan el Círculo de Confusión que resulta de considerar un tamaño de impresión de 20cm x 25cm, una distancia de visionado de 25cm y la agudeza visual utilizada por los fabricantes de cámaras y objetivos. Por este motivo no necesitas introducir el valor del"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c5-p57-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Círculo de Confusión al realizar los cálculos con la clásica calculadora de PdC."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo general, estas hipótesis funcionan muy bien. Pero si en algún momento quieres cambiarlas, al realizar los cálculos de profundidad de campo, deberás utilizar un Círculo de Confusión ajustado consecuentemente. El típico ejemplo se produce cuando deseas tomar una fotografía para imprimirla a gran formato."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Otra manera de entender el Círculo de Confusión: la pintura",
        "anchor": "b2-c5-sec-3"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Déjame que te dé un ejemplo distinto. Asumiré que tienes una buena agudeza visual, o sea, que ves bastante bien. Ahora dirígete a una galería de arte y observa detenidamente uno de los cuadros."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Fíjate en la siguiente obra de arte del pintor Carles Gomila: Kitsune."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c5-p58-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si lo observas desde cierta distancia, el cuadro aparece perfectamente nítido. Pero, a medida que te vas acercando, la imagen se vuelve borrosa. Y si te acercas lo suficiente, incluso podrás ver el detalle de los trazos o puntos borrosos que forman la pintura."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Imagina que el diámetro de los puntos borrosos que forman el cuadro es de 1mm."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ahora, ve alejándote del cuadro lentamente. Habrá una distancia desde la que empezarás a ver la pintura perfectamente enfocada, sin distinguir los trazos. Asumamos que esto sucede cuando estás a 5m del cuadro."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Entonces, puedo decir, que para estas condiciones de visionado (distancia 5m, tamaño del cuadro y tu agudeza visual), el Círculo de Confusión de la pintura es 1mm, porque verías cualquier trazo mayor como borroso."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, si quieres ver la pintura perfectamente enfocada desde menor distancia, necesitas que los trazos o los puntos borrosos que la forman sean menores. Lo que significa que necesitas que el Círculo de Confusión sea más pequeño."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En fotografía, los puntos desenfocados que observas en una imagen son una ampliación de los puntos borrosos captados por el sensor de la cámara. Esta ampliación viene fijada por la proporción entre el tamaño del sensor y el tamaño de la imagen final. El término CoC se refiere al tamaño del los puntos borrosos en el sensor, no en la imagen final."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por consiguiente, es importante indicar que, a partir de este momento, cada vez que utilice el término “Círculo de Confusión”, me estaré refiriendo al tamaño de un punto borroso captado por el sensor de la cámara, no a un punto de la imagen finalmente impresa."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-4",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Un tercer modo de explicar el Círculo de Confusión",
        "anchor": "b2-c5-sec-4"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Veámoslo de otra manera."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sabes perfectamente que tan sólo los puntos situados en el plano de enfoque se reproducirán como puntos en el sensor."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Así, conforme te vas alejando del plano de enfoque, cualquier punto aparecerá desenfocado, produciendo un punto borroso en el sensor. Además, el diámetro de este punto borroso aumenta con la distancia al plano de enfoque. Cuanto más lejos, mayor es el punto borroso."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para un determinado tamaño de sensor e hipótesis de visionado (tamaño de impresión, distancia de visionado, agudeza visual), cuando estos puntos borroso captados por el sensor son suficientemente pequeños, los veremos como puntos enfocados en la imagen final. Por eso decimos que aparecen aceptablemente nítidos o enfocados."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por el contrario, cuando estos puntos borroso superan un determinado tamaño, aparecen desenfocados en la imagen final. El tamaño límite o frontera que separa un punto de estar enfocado o desenfocado en la foto se denomina Círculo de Confusión."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Normalmente, el Círculo de Confusión se calcula asumiendo un tamaño de impresión de 20cm × 25cm, una distancia de visionado de 25cm y la agudeza visual estándar aceptada por los fabricantes de cámaras y objetivos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Todo punto borroso captado por el sensor mayor al Círculo de Confusión será percibido como desenfocado en la foto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por supuesto, hablar de círculos es una simplificación. En realidad, el Círculo de Confusión no es un círculo, tiene una forma poligonal a causa de que las palas que forman el diafragma son incapaces de formar un círculo perfecto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-4",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c5-p60-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-5",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Factores que influyen en el Círculo de Confusión",
        "anchor": "b2-c5-sec-5"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El Círculo de Confusión depende del tamaño del sensor, la agudeza visual del observador, la distancia de visionado y el tamaño de impresión."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Los fabricantes de cámaras asumen un Círculo de Confusión de diámetro 0,254mm cuando realizan las marcas de profundidad de campo. En la fotografía se observan las marcas del objetivo Zuiko 50mm f/1.8."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero, la realidad es que una persona con agudeza visual 20/20 puede distinguir objetos de hasta 1/3 este tamaño y, por lo tanto, el Círculo de Confusión debe ser incluso más pequeño para conseguir los niveles de nitidez deseados. Cuanta mejor sea tu agudeza visual, más pequeño tiene que ser el Círculo de Confusión."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-5",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c5-p61-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por otro lado, a medida que vas incrementado la distancia de visionado de la foto, vas perdiendo detalle. Por lo que el Círculo de Confusión podría ser mayor y todavía verías la imagen perfectamente enfocada."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Finalmente, cuando el tamaño de impresión aumenta, el Círculo de Confusión debe ser más pequeño para mantener el mismo nivel de nitidez."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, el Círculo de Confusión es tan sólo una variable que utilizamos para llegar a un consenso sobre lo que se considera enfocado o desenfocado en una foto. Su valor no es un dogma, sino simplemente una convención."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-6",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Calculadora del Círculo de Confusión",
        "anchor": "b2-c5-sec-6"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Cómo calculamos el Círculo de Confusión?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Esta calculadora te ayudará con las matemáticas para cualquier combinación de tamaño de sensor, agudeza visual, distancia de visionado y tamaño de impresión."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La siguiente tabla, puede resultarte útil para visualizar cómo influyen el tamaño de impresión y la distancia de visionado en el valor del Círculo de Confusión. He realizado los cálculos considerando una cámara Nikon D4s (formato completo, 36×24mm) y una agudeza visual standard (fabricantes)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "De la tabla anterior se deduce que:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-6",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Dada una distancia de visionado, cuanto mayor sea el tamaño de impresión, más pequeño tiene que ser el CoC para mantener el mismo nivel de profundidad de campo."
            }
          ],
          [
            {
              "text": "Dado un tamaño de impresión, cuanto más cerca se mire la foto, menor tiene que ser el CoC para mantener el mismo nivel de profundidad de campo. Al estar más cerca, se percibe más detalle."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Resumiendo, primero debes decidir cuales van a ser las condiciones de visionado y calcular el Círculo de Confusión. Después, a partir de los parámetros de disparo que decidas (apertura, focal, distancia de enfoque), junto con el valor del Círculo de Confusión, podrás calcular la profundidad de campo. O, por ejemplo, la distancia hiperfocal qué necesitas para maximizar la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-7",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Calculando el Círculo de Confusión",
        "anchor": "b2-c5-sec-7"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Veamos un ejemplo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Imaginemos que se acerca el cumpleaños de tu madre y quieres sorprenderla regalándole una impresión a gran formato de una fotografía de su lugar favorito. Sabes que le encanta una pequeña cabaña en la bahía de Fornells (Menorca). Y piensas que una impresión de unos 70×150cm sería un regalo fantástico."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-7",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c5-p63-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Tu madre ve perfectamente bien, se conserva en forma. Por lo que quieres que la cabaña te quede perfectamente enfocada, incluso cuando la foto se esté contemplando a tan sólo 25cm."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Consideras que dado el paisaje, es suficiente enfocar a la cabaña. Ésta tiene una anchura de 5m, así que vas a necesitar que la profundidad de campo total sea superior a 5m."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Cual es el Círculo de Confusión que necesitas utilizar cuando hagas los cálculos de la profundidad de campo antes de disparar, si vas a utilizar una cámara de formato completo (una Nikon D700 en mi caso)?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Introduciendo todos los parámetros en la calculadora del Círculo de Confusión, obtendrás el valor de 0,005mm. O sea, que sólo los puntos borrosos, en la imagen captada por el sensor, con diámetro menor a 0,005mm quedarán enfocados en la imagen impresa."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ahora sólo tienes que utilizar este valor del Círculo de Confusión para calcular la profundidad de campo que vas a tener en la imagen. Para ello vamos a usar la calculadora avanzada de profundidad de campo de PhotoPills."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Has decidido tomar la foto con tu Nikon D700, enfocando a la cabaña desde 150m de distancia, usando una focal de 200mm y una apertura de f/2.8."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-7",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b2-c5-p65-1",
        "rightAssetId": "b2-c5-p65-2"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si introducimos los valores en la calculadora obtenemos que la profundidad de campo total es de 15,93m, suficiente para cubrir los 5 m de la cabaña. Por lo tanto, después de estos cálculos, sabemos que los parámetros que vas a utilizar para tomar la foto te van van a dar la profundidad de campo deseada."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-7",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "De forma similar, si lo que quieres es maximizar la profundidad de campo para unas condiciones determinadas de tamaño de impresión, distancia de visionado y agudeza visual, deberás ajustar el Círculo de Confusión antes de calcular la distancia hiperfocal necesaria. Si utilizas un valor del CoC equivocado, puede que la imagen que obtengas te quede borrosa."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-8",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Círculo de Confusión vs profundidad de campo",
        "anchor": "b2-c5-sec-8"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Cómo influye el Círculo de Confusión en la profundidad de campo?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Estudia los números de la siguiente tabla. Los he calculado cambiando solamente el Círculo de Confusión, dejando todos los otros parámetros constantes (distancia de enfoque 3m, focal 85mm y apertura f/1.4).)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ya sé que parece una obviedad. Tiene su lógica deducir que, si consideramos puntos más grandes como aceptablemente enfocados (CoC mayor), veremos mayor profundidad de campo en la imagen simplemente porque un mayor número de puntos de la imagen nos parecerán enfocados."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-8",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“A mayor Círculo de Confusión aceptado, mayor profundidad de campo”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-9",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Una pregunta que tiene truco",
        "anchor": "b2-c5-sec-9"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Finalmente, para terminar esta odisea de la confusión, me gustaría que respondieras a la siguiente pregunta, simplemente para asegurarme de que realmente entendiste el significado del Círculo de Confusión:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“¿Cuál es el Círculo de Confusión óptimo en fotografía?”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La respuesta es: ¡depende!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "No existe lo que se llama un CoC bueno o malo en general. Todo depende del tamaño del sensor de tu cámara, el tamaño de impresión que quieras utilizar, la distancia desde la que la gente va a contemplar tu fotografía y su agudeza visual."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Dependiendo de estos parámetros de salida, necesitarás que los puntos desenfocados que forman la imagen sean menores o, por el contrario, podrás aceptar que tengan un tamaño mayor."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Así que, cuando vuestro profesor de fotografía os pregunte “¿Es un Círculo de Confusión de 0,025mm adecuado para tener una fotografía enfocada?”, la respuesta debe ser:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-9",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“¡Depende señor! ¿Cuál es el tamaño del sensor? ¿Cuál es el tamaño de impresión de la fotografía final? ¿Desde qué distancia podrá la gente observar la fotografía? ¿Cuál es su agudeza visual?”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-10",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "TRUCOS",
        "anchor": "b2-c5-sec-10"
      }
    },
    {
      "sectionAnchor": "b2-c5-sec-10",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "El Círculo de Confusión y los 33 Megapíxeles (7008 × 4672 px) de la Sony Alpha 7 IV",
        "summary": "El sensor Exmor R de tu Sony Alpha 7 IV tiene una resolución de 7008 × 4672 píxeles con un tamaño de píxel (pixel pitch) de 5,12 micrómetros (µm):",
        "bulletPoints": [
          "Círculo de Confusión clásico (35mm Full-Frame): 0,030 mm (basado en impresión de 20×25 cm vista a 25 cm).",
          "Si vas a realizar impresiones gigantes de exposición o recortar agresivamente tus archivos de 33 MP, puedes reducir el Círculo de Confusión en la calculadora avanzada a ~0,015 mm – 0,020 mm para exigir nitidez a nivel de píxel al 100%."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000656431.html",
        "manualLabel": "Manual Sony A7 IV — Tamaño de Imagen y Resolución RAW/JPEG",
        "cameraPath": "MENU → Toma → Calidad imagen → Ajustes calidad imagen"
      }
    }
  ],
  "6": [
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“Para un determinado encuadre y distancia de enfoque, la profundidad de campo es controlada por la apertura: a menor apertura (números f mayores), mayor profundidad de campo.”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Debido a lo fácil que resulta, muchos fotógrafos utilizan la apertura para conseguir la profundidad de campo deseada mientras que la distancia al sujeto (o de enfoque) y la focal son utilizados para conseguir la composición de la imagen buscada."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando disminuyes la apertura (f/11-f/22) estás obligando a los rayos de luz a pasar por un agujero más pequeño, estrechando el haz de luz. Esto incrementa la distancia entre los dos últimos puntos que están aceptablemente enfocados delante y detrás del plano de enfoque, lo que permite obtener una mayor profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c6-p70-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por el otro lado, a mayor apertura (f/1.4, f/2.8, etc.), menor profundidad de campo, consiguiendo que una menor parte de la imagen quede enfocada."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Fíjate en las dos fotografías siguientes tomadas con una cámara con sensor de formato completo (Nikon D4s). La distancia de enfoque se mantiene a 2,5m y la focal a 85mm, mientras que la apertura cambia de f/1.4 a f/16. Observa como aumenta la profundidad de campo al cerrar la apertura."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c6-p71-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b2-c6-p72-1",
        "rightAssetId": "b2-c6-p72-2"
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Del mismo modo, el siguiente GIF animado nos enseña como la profundidad de campo aumenta cuando la apertura va disminuyendo progresivamente. Para tomarlas utilicé mi"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": ", una distancia de enfoque de 2,5m y una focal de 85mm."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pasemos a los números. Veamos la relación entre la profundidad de campo y la apertura de forma numérica. Si utilizas la calculadora de profundidad de campo de Photopills para las diferentes aperturas del cuadro siguiente, los valores resultantes indicarán claramente que la profundidad de campo aumenta al disminuir la apertura."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c6-p73-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Fíjate también que, al cerrar la apertura, el porcentaje de profundidad de campo delante del plano de enfoque disminuye, aumentando detrás."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Mis alumnos, sabiendo que al usar aperturas pequeñas se aumenta la profundidad de campo, una de las preguntas que me suelen hacer es:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“¿Puedo utilizar siempre la apertura más pequeña para obtener la máxima profundidad de campo posible?”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La respuesta es NO. Dos hechos prácticos limitan la elección de la apertura."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La primera limitación la introduce el propio triángulo de exposición. En el momento de decidir qué apertura utilizar, debes tener en cuenta la velocidad de obturación y el ISO para obtener una fotografía correctamente expuesta."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pequeñas aperturas reducen la cantidad de luz captada por el sensor. En consecuencia, necesitas reducir la velocidad de obturación (aumentar el tiempo de exposición) para mantener una exposición consistente, debiendo usar un trípode para evitar"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "que la imagen quede borrosa a causa del movimiento. En este caso, otra solución es incrementar el ISO en lugar de reducir la velocidad de exposición. Pero ten cuidado con el ruido que pueda generar tu cámara."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La segunda limitación es la difracción. A medida que vas cerrando el diafragma, la luz que pasa por la lente tiende a difractar cada vez más, reduciendo la resolución y nitidez en tus fotos. Hablaré detenidamente sobre la difracción en el"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "TIPS Apertura en macrofotografía",
        "anchor": "b2-c6-sec-2"
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En macrofotografía, la elección de la apertura está condicionada por la distancia al sujeto y la focal."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En primer lugar, vas a estar disparando a muy poca distancia del sujeto, desde unos pocos centímetros hasta unos 30-50cm dependiendo de la focal que utilices. Y en segundo lugar, vas a utilizar una objetivo macro y focales largas (50-60mm, 90-105mm, 150-200mm). Ambos ajustes te van a proporcionar muy poca profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, en este caso, el utilizar aperturas pequeñas como f/11, f/14, f/16 y f/22 es una gran opción para aumentar la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Apertura en fotografía de retrato",
        "anchor": "b2-c6-sec-3"
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En fotografía de retrato, la elección de la apertura va a depender del nivel de profundidad de campo que desees teniendo en cuenta la focal que quieras utilizar (normalmente mayor que 70mm)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si quieres poca profundidad de campo, aperturas grandes como f/2.8 y f/4, son estupendas. Te ayudarán a tener tu sujeto completamente enfocado mientras que los elementos del fondo quedarán borrosos, eliminando distracciones."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por el contrario, si deseas aumentar la profundidad de campo para incluir algún elemento interesante que se encuentre justo detrás del sujeto, una apertura de f/8 puede funcionar bastante bien."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Finalmente, si buscas profundidades de campo mayores, utiliza aperturas pequeñas como f/11, f/16 o incluso menores, pero siempre controlando la difracción."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En cambio, si usas grandes angulares (8-35mm), conseguirás maximizar la profundidad de campo simplemente enfocando a la distancia hiperfocal."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Sin embargo, en muchos casos, estas focales no son una buena elección para el retrato, ya que su gran campo de visión te obligará a acercarte mucho al sujeto, lo que puede acabar por deformarlo. Por ejemplo, si el sujeto llena el encuadre, la nariz y la frente pueden aparecer desproporcionadas e irreales."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c6-p76-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-4",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Apertura en fotografía de fauna salvaje",
        "anchor": "b2-c6-sec-4"
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Acercarse a la fauna es muy difícil. Los fotógrafos de fauna salvaje normalmente utilizan teleobjetivos (300-600mm), obteniendo profundidades de campo muy pequeñas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Al tratar de aumentar la profundidad de campo para captar, por ejemplo, todo el animal enfocado, puedes estar tentado de utilizar aperturas cerradas del tipo f/8-f/11. En la práctica, la elección de la apertura va a depender de si el animal se está moviendo o permanece quieto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Las aperturas pequeñas pueden funcionar cuando los animales están inmóviles. Cuando un animal no se mueve, puedes reducir la velocidad de obturación (aumentar el tiempo de exposición) para obtener una exposición correcta, y captarlo perfectamente en la foto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero cuando los animales están en movimiento, necesitarás utilizar velocidades de obturación muy grandes (con tiempos de exposición por debajo de 1/1000s) para congelar el movimiento y evitar que te queden borrosos. Como consecuencia, te verás forzado a utilizar la apertura más grande posible disponible en tu objetivo si quieres tener una exposición correcta."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, debes encontrar el equilibrio entre apertura (criterio de profundidad de campo) y la velocidad de obturación (habilidad de congelar movimiento)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una posible alternativa es subir el ISO. Dependiendo de la cámara que tengas, puede ser buena idea disparar con el ajuste de ISO en modo automático. Por ejemplo, el disparar a 1/1000s, f/8 y el ISO en automático entre 400 y 12800 va a funcionar perfectamente en muchos casos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-5",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Apertura y fotografía de paisaje",
        "anchor": "b2-c6-sec-5"
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una vez que hayas decidido la focal que vas a utilizar y la composición que deseas, selecciona la apertura que te dé el nivel deseado de profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Normalmente, tu objetivo es maximizar la profundidad de campo para tener todos los elementos del horizonte enfocados."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si utilizas focales cortas (14-35mm), enfocar a la distancia hiperfocal va a maximizar la profundidad de campo independientemente de la apertura que utilices. En este caso, dependiendo del efecto que quieras crear, la elección de la apertura dependerá de la velocidad de obturación."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por ejemplo, puede que te interese utilizar velocidades de obturación lentas (largas exposiciones) para captar el movimiento del agua. Esto te va a obligar a cerrar la apertura, reduciendo la cantidad de luz captada, para así obtener la exposición correcta."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-5",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por otro lado, si utilizas focales largas (por encima de 70mm) y sigues queriendo maximizar la profundidad de campo, deberás utilizar aperturas más pequeñas (f/11, f/16) y enfocar a 1/3 de la escena midiendo desde la parte inferior del encuadre."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-6",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Apertura en astrofotografía",
        "anchor": "b2-c6-sec-6"
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Normalmente querrás maximizar la profundidad de campo para captar las estrellas perfectamente enfocadas. Pero también vas a querer captar el mayor número de estrellas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En esta situación, la elección de la apertura no se realiza en función del criterio de profundidad de campo. Deberás utilizar la mayor apertura posible de tu objetivo (f/1.4, f/2.8, etc) y el mayor tiempo de exposición posible para que el sensor capte la mayor cantidad de luz y el mayor número de estrellas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Entonces, la cuestión es: ¿Dónde enfoco?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-6",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una vez más, cómo vas a estar disparando con un gran angular (14-35mm), simplemente enfoca a la distancia hiperfocal para maximizar la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c6-sec-6",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Control de Apertura por Anillo Físico o Dial en Objetivos Sony FE",
        "summary": "En tu Sony Alpha 7 IV puedes controlar la apertura (y por tanto la profundidad de campo) de dos formas:",
        "bulletPoints": [
          "Desde el dial en el cuerpo de la cámara (asignable al dial delantero o trasero en [Personal. diales]).",
          "Desde el anillo físico de apertura en objetivos Sony G y G Master (con interruptor Click ON/OFF para pasos de 1/3 EV en fotografía o giro continuo silencioso en vídeo)."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654771.html",
        "manualLabel": "Manual Sony A7 IV — Personalización de Diales (Mis Diales)",
        "cameraPath": "MENU → Ajuste → Personal. operación → Ajustes de Mi dial"
      }
    }
  ],
  "7": [
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La difracción es el resultado de la dispersión de la luz causada por los bordes de las palas que forman el diafragma en el objetivo. Esta dispersión provoca que las imágenes aparezcan menos nítidas, con menos detalle."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Con aperturas grandes, sólo un pequeño porcentaje de la luz se dispersa. Pero a medida que vamos cerrando el diafragma, este porcentaje aumenta provocando que los efectos de la difracción sean más perceptibles. Este efecto se acentúa cuando el tamaño de la apertura es comparable a la longitud de onda de la luz, incrementando así el número de rayos de luz que se dispersan."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando las ondas de luz se dispersan, empiezan a interactuar entre ellas, sumándose en algunos sitios y cancelándose en otros. Las nuevas ondas de luz forman un patrón de difracción conocido como el disco de Airy."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c7-p80-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El diámetro del disco de Airy determina el punto más pequeño en el que el objetivo puede enfocar un haz de luz, estableciendo así la resolución máxima teórica de un objetivo. Cuando el disco de Airy es mayor que el Círculo de Confusión o 2,5 veces el tamaño del pixel de la cámara, la imagen empezará a sufrir los efectos de la difracción."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“¡Espera un minuto Antoni! Todo esto está muy bien, pero ¿qué pinta tiene la difracción?”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Fíjate en las siguientes fotografías tomadas con una Nikon D4s y aperturas f/8-f/32. ¿Ves los efectos de la difracción? No es tan fácil, ¿verdad?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c7-p81-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En el siguiente GiF animado, puedes observar los efectos de la difracción que se producen dentro de los recuadros dibujados en las fotografías anteriores. Efectivamente, la foto tomada con una apertura de f/32 parece menos nítida."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c7-p82-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Tener un poco de difracción no siempre es malo. En macrofotografía, la difracción se puede utilizar de manera positiva para crear bonitas formas y crear así fondos diferentes y auténticos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c7-p83-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En la práctica, es importante que te quedes con las siguientes ideas:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "No es posible eliminar completamente la difracción. Incluso la resolución de la mejor lente va a estar limitada por la difracción. De hecho, las lentes de muy alta calidad que sólo sufren por los efectos de la difracción se denominan “lentes limitadas por difracción”."
            }
          ],
          [
            {
              "text": "Debes probar tus objetivos con tu cámara para encontrar la apertura a partir de la cual se empiezan a notar los efectos de la difracción. Para realizar las pruebas, simplemente toma fotografías a diferentes aperturas y revisa los resultados detenidamente con un programa de edición haciendo zoom al 100% o más (píxeles reales)."
            }
          ],
          [
            {
              "text": "Tu elección de la apertura sólo debería estar limitada por la difracción cuando sus efectos realmente estropeen la imagen. Tener un poco de difracción en la imagen es perfectamente aceptable cuando se intenta maximizar la profundidad de campo."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Finalmente, puedes utilizar nuestra calculadora de Difracción para estimar la apertura a partir de las fotografías se van a ver afectadas por la difracción."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c7-p84-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c7-sec-1",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "El Punto Dulce y el Límite de Difracción en el Sensor de 33 MP de la Sony Alpha 7 IV",
        "summary": "Con el tamaño de píxel de 5,12 µm de la Sony Alpha 7 IV, ¿a partir de qué número f empieza a notarse la pérdida de micro-contraste por difracción?",
        "bulletPoints": [
          "Punto dulce de nitidez máxima en objetivos Sony FE: Suele situarse entre f/4 y f/8.",
          "Inicio técnico de la difracción a nivel de píxel (100% zoom): Alrededor de f/8 – f/11.",
          "En fotografía de paisaje, usar f/8 o f/11 ofrece el equilibrio óptimo entre gran profundidad de campo y máxima nitidez; evita cerrar a f/16 o f/22 salvo que busques el efecto estrella solar (Sunstar) o alargar el tiempo de exposición sin filtros."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654660.html",
        "manualLabel": "Manual Sony A7 IV — Modo Prioridad a la Apertura (A)",
        "cameraPath": "Dial de Modo en [A] → Seleccionar f/5.6 – f/11 para máxima nitidez en paisaje"
      }
    }
  ],
  "8": [
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La distancia al sujeto enfocado, o sea, la distancia a la que enfocamos la lente, tiene un gran impacto en la profundidad de campo. Cuanto más lejos se enfoque, más profundidad de campo. Por el contrario, cuanto más cerca se enfoque, menos profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, una manera de reducir la profundidad de campo es acercándote al sujeto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es lo que normalmente hacemos al realizar retratos. Ya que quieres que el sujeto quede enfocado mientras que las distracciones del fondo queden desenfocadas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Veamos los números. Fíjate en las siguientes capturas de la calculadora de profundidad de campo de PhotoPills. En ambos casos, estoy utilizando una focal de 85mm con una apertura de f/2 en una Nikon D4s."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En la primera captura, estoy enfocando a 2m, obteniendo una PdC Total de 0,06m."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Mientras que en la segunda captura estoy enfocando a 10m, consiguiendo una PdC Total de 1,66m. Enfocar más lejos implica más profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c8-p86-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b2-c8-p87-1",
        "rightAssetId": "b2-c8-p87-2"
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ahora, utilizando la misma cámara (Nikon D4s), la misma focal (85mm) y la misma apertura (f/2), pero cambiando la distancia de enfoque, obtenemos la siguiente tabla de profundidad de campo:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una vez más, de la tabla podemos deducir que cuanto más cerca esté del sujeto enfocado, menor va a ser la profundidad de campo y viceversa."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además, cuanto te acercas al sujeto, la profundidad de campo se distribuye de forma más equitativa entre la parte anterior y posterior del plano de enfoque. Mientras que si te alejas, la profundidad de campo se reduce en la parte anterior y crece en la parte posterior."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Fíjate que la distancia hiperfocal no depende de la distancia de enfoque. Cuando cambias la distancia al sujeto en la calculadora de profundidad de campo, la hiperfocal no cambia. De hecho, la hiperfocal sólo depende de la apertura, la focal, el sensor de la cámara y el Círculo de Confusión aceptado."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Compara la profundidad de campo de las siguientes imágenes. ¿Ves cómo aumenta al alejarme del sujeto enfocado?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c8-p89-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En la práctica, normalmente la distancia a la que te colocas del sujeto no sólo depende de la profundidad de campo deseada. Según el tipo de fotografía, esta elección también depende de otras decisiones fotográficas. Como por ejemplo, decidir qué elementos quieres en el encuadre al componer la imagen. O si es posible acercarse o no al sujeto, como sería el caso de la fotografía de fauna salvaje."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Otro ejemplo es la macrofotografía, donde debes acercarte mucho al sujeto. La distancia de enfoque puede ir de unos pocos centímetros hasta 30-50cm dependiendo de tu objetivo macro."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En fotografía de retrato, donde estás fotografiando sujetos estáticos, te podrás acercar bastante (3-6m). En fotografía de fauna salvaje, deberías acercarte lo máximo posible, pero en este caso, puedes imaginar que un teleobjetivo es obligatorio."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Finalmente, en fotografía de paisaje, normalmente estarás utilizando focales cortas enfocadas a la distancia hiperfocal. En este caso, va a ser la composición la que va a determinar tu posición con respecto al sujeto, no la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c8-p90-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "TRUCOS",
        "anchor": "b2-c8-sec-2"
      }
    },
    {
      "sectionAnchor": "b2-c8-sec-2",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Distancia Mínima de Enfoque y Seguimiento AF al Acercarte con la Sony Alpha 7 IV",
        "summary": "Como demuestra el libro, cuando te acercas mucho al sujeto la profundidad de campo se vuelve milimétrica y se reparte al 50% delante y 50% detrás:",
        "bulletPoints": [
          "Cuando trabajes a distancias cortas a pulso con tu Sony A7 IV, cualquier oscilación de tu cuerpo de 1 cm hacia adelante o atrás sacará el ojo de foco si usas AF-S (enfoque sencillo).",
          "Usa siempre [AF-C] (Enfoque continuo) incluso para sujetos estáticos a corta distancia: la A7 IV corregirá tu propio balanceo corporal en tiempo real."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654617.html",
        "manualLabel": "Manual Sony A7 IV — Selección del Modo de Enfoque (AF-C)",
        "cameraPath": "Botón Fn → Modo de enfoque → AF-C (AF continuo)"
      }
    }
  ],
  "9": [
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Manteniendo todos los demás parámetros iguales (distancia de enfoque, apertura, tamaño de sensor y Círculo de Confusión), a mayor focal, menor profundidad de campo. Y a menor focal, mayor profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Veamos un ejemplo, un 100mm enfocado a 6m tendrá mucha menos profundidad de campo que un 24mm enfocado a 6m. Observa las siguientes imágenes y compara."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c9-p93-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c9-p94-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una vez más, veamos qué dicen los números. Manteniendo constante todo lo demás (Nikon D4s, f/8, distancia de enfoque 6m), la siguiente tabla prueba que distancias focales más largas produce menor profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c9-p95-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Observa que la distancia hiperfocal aumenta muchísimo cuando aumenta la focal. Lo que se traduce en la imposibilidad de enfocar con precisión a distancias tan largas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Esta es la razón por la que no decimos que enfocamos a la hiperfocal cuando utilizamos focales largas y queremos maximizar la profundidad de campo. La hiperfocal es demasiado grande."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ahora, si me lo permites, me gustaría explicar un detalle importante en relación a la focal. Me refiero a cuando la lente se enfoca a distancias que son mucho menores que la hiperfocal, pero mayores que las distancias utilizadas en macrofotografía."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Dado que una focal diferente produce un encuadre diferente y, por lo tanto, una imagen distinta, nos podríamos preguntar:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“¿Qué sucede con la profundidad de campo cuando el sujeto ocupa la misma proporción en el encuadre?”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En otras palabras, ¿qué sucede con la profundidad de campo cuando tomas la misma imagen (mismo encuadre o campo de visión) pero con distinta focal?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando ajustamos la distancia de enfoque para tener el mismo campo de visión, la profundidad de campo total es virtualmente la misma independientemente de si usas un gran angular o un teleobjetivo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El siguiente cuadro lo demuestra (Nikon D4s, apertura f/2.8):"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ya lo sé, hay una pequeña diferencia cuando comparas las focales más cortas. Pero creo que es tan poca la desviación que puede ser ignorada comparado con los efectos de la apertura o la distancia de enfoque."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Sucede lo mismo con la distribución de la profundidad de campo alrededor del plano de enfoque?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La respuesta es NO."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La distancia focal tiene un impacto en el porcentaje de PdC delante y detrás del plano de enfoque. Grandes focales producen una distribución más equitativa que las focales más cortas. Fíjate en la siguiente tabla (Nikon D4s, apertura f/2.8):"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En resumen, lo que realmente tienes que llevarte de este apartado es que para la misma distancia de enfoque y apertura, a mayor focal, menor profundidad de campo y vice versa."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "TRUCOS",
        "anchor": "b2-c9-sec-2"
      }
    },
    {
      "sectionAnchor": "b2-c9-sec-2",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Compensación de Respiración de Enfoque (Focus Breathing) en la Sony Alpha 7 IV",
        "summary": "Al cambiar la distancia de enfoque en ciertas focales, muchos objetivos varían ligeramente su ángulo de visión efectivo (respiración de enfoque). Tu Sony Alpha 7 IV incluye una función exclusiva heredada de la línea Cinema Line:",
        "bulletPoints": [
          "[Compens. respiración (Breathing Compensation)]: Mantiene constante el ángulo de visión y la distancia focal efectiva al cambiar el foco con objetivos Sony compatibles."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000656426.html",
        "manualLabel": "Manual Sony A7 IV — Compensación de Respiración (Focus Breathing)",
        "cameraPath": "MENU → Toma → Calidad imagen → Comp. óptica → Compens. respiración"
      }
    }
  ],
  "10": [
    {
      "sectionAnchor": "b2-c10-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Un teleconvertidor es una lente secundaria que se monta entre la cámara y el objetivo. Su función es aumentar la focal. Desgraciadamente, también reduce la cantidad de luz que llega al sensor."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c10-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En cuanto a la profundidad de campo, su efecto es el mismo que si estuvieras utilizando la focal equivalente resultante de la combinación de la focal del objetivo y del teleconvertidor."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c10-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En otras palabras, si usaras un teleconvertidor 2x (duplicador) aplicado a una focal de 100mm a f/5.6, la profundidad de campo sería la misma que si utilizaras una focal de 200mm a f/11."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c10-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Un duplicador (2x) multiplica por dos la focal, pero también reduce en 2 pasos la luz captada por el sensor. Por ejemplo, con una apertura de f/5.6 y un duplicador, el sensor captaría la misma luz que si estuvieras disparando con el doble de la focal y una apertura de f/11, dos pasos más cerrada. En ambos casos obtendrías la misma profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c10-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c10-p100-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b2-c10-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c10-p101-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c10-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si introduces los parámetros en la calculadora de profundidad de campo de PhotoPills, comprobarás que la profundidad de campo es la misma."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c10-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c10-p102-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c10-sec-1",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b2-c10-p103-1",
        "rightAssetId": "b2-c10-p103-2"
      }
    },
    {
      "sectionAnchor": "b2-c10-sec-1",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Uso de Teleconvertidores Sony SEL14TC (1.4x) y SEL20TC (2.0x) en la Sony Alpha 7 IV",
        "summary": "Tu Sony Alpha 7 IV es totalmente compatible con los teleconvertidores oficiales Sony E-Mount 1.4x y 2.0x (para lentes como el FE 70-200mm GM, 100-400mm GM o 200-600mm G):",
        "bulletPoints": [
          "Con el SEL14TC (1.4x): Pierdes 1 paso de luz (un f/2.8 pasa a f/4) y la profundidad de campo disminuye al aumentar la focal.",
          "Con el SEL20TC (2.0x): Pierdes 2 pasos de luz (un f/2.8 pasa a f/5.6).",
          "El sistema AF por detección de fases de la Sony A7 IV sigue enfocando automáticamente incluso a aperturas efectivas de f/8 y f/11."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654615.html",
        "manualLabel": "Manual Sony A7 IV — Enfoque Automático y Objetivos Compatibles",
        "cameraPath": "Montura Sony E — Comunicación electrónica automática de focal y apertura efectiva EXIF"
      }
    }
  ],
  "11": [
    {
      "sectionAnchor": "b2-c11-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Empezaré explicando dos conceptos clave para entender la relación entre tamaño de sensor y profundidad de campo: el factor de recorte y la distancia focal efectiva."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Factor de recorte",
        "anchor": "b2-c11-sec-2"
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El factor de recorte de una cámara digital es el ratio entre la diagonal de una película de 35mm y la diagonal del sensor de la cámara. Recuerda que un fotograma de 35mm tiene un tamaño de 36×24mm, resultando una diagonal de 43,3mm."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En la siguiente imagen se representan los dos encuadres que obtendrías con los diferentes sensores. Si la cámara digital tiene un sensor de tamaño 23,5×15,6mm, su diagonal será 28,21mm. Por lo que el factor de recorte es:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Diagonal 35mm / Diagonal Sensor = 43,3mm/28,21mm = 1.5x"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-2",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c11-p105-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Distancia focal efectiva",
        "anchor": "b2-c11-sec-3"
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para un determinado tamaño de sensor y distancia focal, la distancia focal efectiva (conocida también como la focal equivalente en un 35mm) es la distancia focal que produciría el mismo campo de visión en una cámara de formato completo (35mm)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Su valor se calcula multiplicando la distancia focal por el factor de recorte del sensor:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Distancia focal efectiva = Distancia focal × Factor de recorte Imaginemos que estamos disparando con una Nikon D7100 (1.5x), usando una distancia focal de 35mm, una apertura de f/1.8 y enfocando a 3m."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Teniendo en cuenta que esta cámara tiene un factor de recorte de 1.5x, la distancia focal efectiva es 50mm (1.5×35mm)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En otras palabras, una distancia focal de 50mm en una cámara de formato completo producirá el mismo campo de visión que una focal de 35mm en la cámara con factor de recorte 1.5x."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Las siguientes fotografías tienen el mismo campo de visión. La primera fue tomada con una Nikon D7100 (1.5x) y una focal de 35mm. La segunda con una Nikon D4s (1.0x) y focal 50mm."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-3",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c11-p107-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Sensor vs PdC",
        "anchor": "b2-c11-sec-4"
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En cuanto a la relación existente entre el tamaño del sensor y la profundidad de campo, la regla es:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“Dada una apertura y distancia focal efectiva, a mayor sensor, menor profundidad de campo.”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo tanto, las cámaras de formato completo producen menor profundidad de campo que las cámaras con factor de recorte para una misma distancia focal efectiva (mismo encuadre) y apertura."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hacer retratos con una cámara de formato completo produce imágenes más agradables, por el simple hecho de que tienes más control sobre la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Introduzcamos los valores en la calculadora de profundidad de campo de PhotoPills y comparemos los resultados. Efectivamente, la Nikon D4s produce una profundidad de campo menor."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c11-p108-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b2-c11-p109-1",
        "rightAssetId": "b2-c11-p109-2"
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero, si mantienes la misma apertura, distancia de enfoque y distancia focal (nominal, no efectiva), la profundidad de campo no se verá significativamente afectada. Veamos un ejemplo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Observa las siguientes fotografías. Usé una focal de 85m (no efectiva) a f/2 en ambas, una Nikon D7100 (1.5x) y una Nikon D4s (1.0x). La distancia de enfoque es 3m."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Puedes apreciar alguna diferencia significativa en cuanto a la profundidad de campo?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "No, ¿verdad?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b2-c11-p110-1",
        "rightAssetId": "b2-c11-p110-2"
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Lo que ves en la imagen es el efecto del recorte. Coloca el trípode en un determinado lugar y toma una foto con una cámara con factor de recorte con el sujeto llenado el encuadre. Después, toma la misma foto desde la misma posición con una cámara de formato completo. Tendrás más espacio libre alrededor del sujeto, pero la diferencia de profundidad de campo es despreciable."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una vez más, si introduces los parámetros en PhotoPills, los números te van a indicar que hay muy poca diferencia entre ambos sensores."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b2-c11-p111-1",
        "rightAssetId": "b2-c11-p111-2"
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por otro lado, si deseas conseguir la misma fotografía con ambas cámaras, tendrás que utilizar una focal más larga (focal efectiva) en la cámara de formato completo, o acercarte al sujeto. Cualquiera de las dos opciones afectará la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por lo que los cambios en la profundidad de campo se deben a los diferentes campos de visión que proporcionan los diferentes tamaños de sensor."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando el sensor aumenta, necesitas acercarte al sujeto (cambiando la perspectiva) o usar una focal más larga (efectiva) para llenar el encuadre con el sujeto. Por lo tanto, si quieres mantener la misma profundidad de campo en ambos tamaños de sensor, tendrás que utilizar aperturas menores en la cámara de mayor sensor. Así, aumentarás la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Veámoslo!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Imagina que has tomado un retrato usando una focal de 85mm a f/2 en una Nikon D7100 (1.5x). Y que quieres calcular la apertura y la focal que necesitas usar en una cámara de formato completo (Nikon D4s) para tener el mismo campo de visión y la misma profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¿Cómo lo calcularías?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Fácil, utiliza la calculadora de equivalencia de focal de PhotoPills:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Esta calculadora te está diciendo que, cuando dispares con un cámara de formato completo, necesitarás usar una focal de 130mm y una apertura de f/3.2 para tener el mismo campo de visión y la misma profundidad de campo. Por lo tanto, necesitas aumentar la focal y cerrar un poco el diafragma."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "image_pair",
      "payload": {
        "leftAssetId": "b2-c11-p113-1",
        "rightAssetId": "b2-c11-p113-2"
      }
    },
    {
      "sectionAnchor": "b2-c11-sec-4",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Modo Full-Frame (33 MP) vs. ModoRecorte APS-C / Super 35mm (14 MP) en tu Sony Alpha 7 IV",
        "summary": "Tu Sony Alpha 7 IV reúne literalmente dos tamaños de sensor en una sola cámara gracias al selector [APS-C S35 Disparo]:",
        "bulletPoints": [
          "Modo Full-Frame (35,9 × 23,9 mm): Aprovecha los 33 MP completos y te da la menor profundidad de campo y el máximo desenfoque.",
          "Modo APS-C / Super 35mm (Factor de recorte 1.5x — 14 MP): Puedes asignarlo a un botón personalizado para multiplicar por 1.5x el alcance de tu objetivo al instante, aplicando exactamente las leyes de factor de recorte explicadas en este capítulo."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000656433.html",
        "manualLabel": "Manual Sony A7 IV — Toma en Modo APS-C / Super 35mm",
        "cameraPath": "MENU → Toma → Calidad imagen → APS-C S35 (Auto / Activado / Desactivado)"
      }
    }
  ],
  "12": [
    {
      "sectionAnchor": "b2-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hoy en día, las cámaras digitales nos permiten tomar una fotografía de prueba para comprobar rápidamente la profundidad de campo directamente sobre la imagen."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Esta es la principal razón por la que no utilizo el botón de previsualización de la profundidad de campo con mis cámaras digitales. Pero no podía escribir un artículo sobre profundidad de campo sin mencionar este botón. Sobre todo, porque sí es útil con las cámaras analógicas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando miras a través del visor de tu cámara, estás mirando a través del objetivo a su máxima apertura, no a la apertura que has fijado para tomar la foto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La apertura seleccionada sólo se utiliza en el momento justo de tomar la foto. Como consecuencia, la profundidad de campo que ves al mirar por el visor es menor que la que captarás en la foto, a no ser que la apertura que hayas fijado sea la máxima que permita el objetivo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c12-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c12-p115-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b2-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Las cámaras mantienen la apertura más grande hasta el último momento para ayudarte a enfocar y encuadrar la foto. Cuanto mayor sea la apertura, mayor es la luz que entra en la cámara y mejor ves a través del visor."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para ayudarte a estimar la profundidad de campo que tendrás en la imagen, la mayoría de cámaras digitales incluyen lo que se llama el botón de previsualización de la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Este botón reduce la apertura de la lente a la que tú has establecido para el disparo, proporcionándote una previsualización de las partes enfocadas y desenfocadas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "De esta manera puedes reducir el típico “prueba y error” al ajustar la apertura a la profundidad de campo que deseas. Esto es bastante útil cuando se dispara con cámaras analógicas, por el alto coste de la película."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si pulsas el botón de previsualización de la profundidad de campo y miras a través del visor, verás que la PdC ha aumentado. Sin embargo, también notarás que ves menos, todo está más oscuro, lo que no hace nada fácil analizar la profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Esto sucede porque al cerrar el diafragma, estás reduciendo la cantidad de luz que entra en el sistema. Este es uno de los motivos principales por el que muchos fotógrafos no utilizan este botón."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c12-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero si quieres utilizarlo, céntrate en las zonas desenfocadas de la imagen. Va a ser en ellas dónde verás los cambios más grandes al ir variando la apertura."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c12-sec-1",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Asignar el Botón de Previsualización de Profundidad de Campo ([Previs. toma]) en la Sony Alpha 7 IV",
        "summary": "Aunque la Sony Alpha 7 IV no trae un botón físico rotulado 'DoF Preview' de fábrica, puedes asignar esa función exacta a cualquiera de sus botones personalizables (por ejemplo al botón C1, C2 o al botón junto a la montura):",
        "bulletPoints": [
          "Función [Previs. toma (Shot. Result Preview)] o [Previs. apertura (Aperture Preview)]: Mientras mantienes pulsado el botón asignado, la cámara cierra las palas del diafragma al número f configurado para que inspecciones la profundidad de campo exacta y el bokeh real antes de disparar."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654767.html",
        "manualLabel": "Manual Sony A7 IV — Previsualización de Apertura / Resultado de Toma en Tecla Personalizada",
        "cameraPath": "MENU → Ajuste → Personal. operación → Ajuste tecla perso. → [Previs. apertura] / [Previs. toma]"
      }
    }
  ],
  "13": [
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En macrofotografía se fotografían los sujetos a distancias muy pequeñas, captándolos de tal forma que su imagen en el sensor es igual o mayor que los propios sujetos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El término “Macro” se refiere a la magnificación de la imagen del sujeto en el sensor."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por ejemplo, un ratio 1:1 de magnificación significa que la imagen del sujeto en el sensor tiene el mismo tamaño que el sujeto. Otro ejemplo, si la imagen del sujeto en el sensor es 5 veces su tamaño real, entonces la magnificación es 5:1."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c13-p118-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El ratio entre el tamaño real del sujeto y su tamaño en la imagen del sensor se llama ratio de reproducción (1:1, 2:1, 3:1, etc). Los objetivos capaces de proporcionar ratios de reproducción de 1:1 o superiores se denominan objetivos macro."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por consiguiente, tendrás que acercarte mucho al sujeto, desde unos pocos milímetros a unos 30-50cm dependiendo del objetivo macro que utilices."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Un buen objetivo macro es clave en macrofotografía porque es capaz de enfocar a distancias muy cortas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Otra manera de realizar una fotografía con una magnificación grande es utilizar un objetivo invertido, mediante un anillo adaptador. Teniendo en cuenta que un objetivo está diseñado para trabajar con un elemento grande a un lado de la lente, proyectando una imagen pequeña sobre el sensor con el otro lado de la lente, invirtiendo una lente de, por ejemplo 50mm, tendremos un factor de ampliación de 1:1. Cuanto más angular sea la lente utilizada mayor será la magnificación resultante."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c13-p119-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Normalmente, la gente que empieza en la macrofotografía suelen utilizar objetivos macro 50-60mm. A un nivel más avanzado se utilizan los 90-105mm y los profesionales apuestan por los 150-200mm, lo que les permite disparar cómodamente desde distancias más grandes (30-50cm o incluso mayores)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si estás buscando un objetivo para macrofotografía, los siguientes son fantásticos:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Nikon Micro-60mm f/2.8G, Tamron Macro 90mm f/2.8, Canon Macro 100m f/2.8L, Olympus Macro 60mm f/2.8, Nikon Micro 105mm f/2.8G, Sigma Macro 150mm f/2.8 y Nikon Micro 200mm f/4D."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Es importante señalar que todos los objetivos macro (50-60mm, 90-105mm y 150- 200mm) tienen el mismo ratio de reproducción 1:1. Lo que cambia es la distancia de trabajo. A mayor focal, mayor distancia de trabajo y mayor comodidad. Como te habrás imaginado ya, su precio también es mayor."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La combinación de distancias de enfoque pequeñas y focales largas van a proporcionar muy poca profundidad de campo. Por lo tanto, las aperturas f/11, f/16, f/22 e incluso f/32 te pueden ayudar a maximizar la profundidad de campo, teniendo en cuenta el poco margen de maniobra que queda."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En macrofotografía, la profundidad de campo depende de una nueva variable: la magnificación. A medida que vas ampliado el sujeto, la profundidad de campo se reduce (incluso puede ser inferior a 1mm), lo que hace que controlar las partes que quedan enfocadas sea todo un reto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Otra nueva variable que afecta a la profundidad de campo es la magnificación de pupila."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ésta resulta de dividir el diámetro de salida de pupila de la lente por el diámetro de pupila de entrada."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Calculating macro depth of field",
        "anchor": "b2-c13-sec-2"
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Cuando la distancia al sujeto es tan pequeña que su valor se acerca a la distancia focal, por ejemplo al utilizar un 100mm macro a 10cm de distancia, la clásica calculadora de profundidad de campo proporciona valores erróneos. Esto se debe a que hay que tener en cuenta el valor de la magnificación y la magnificación de pupila al realizar los cálculos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-2",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si quieres una aproximación aceptable de la profundidad de campo en una foto macro, puedes utilizar la calculadora macro de profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-3",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "TRUCOS Apertura límite de difracción en macrofotografía",
        "anchor": "b2-c13-sec-3"
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como estarás utilizando aperturas pequeñas para intentar incrementar la profundidad de camo (f/16, f/22, f/32), es probable que el efecto de la difracción reduzca la resolución de tus fotos. En este caso, deberás buscar el equilibrio entre apertura y difracción."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La apertura que provoca que los efectos de la difracción se empiecen a notar en la imagen se denomina apertura límite de difracción. Esto sí, debes de tener en mente que no hablamos de barreras rígidas. La apertura límite de difracción te proporciona un orden de magnitud, una aproximación. No significa que aperturas mayores estén libres de difracción o que las menores la vayan a producir. Tendrás que probar qué apertura produce un efecto poco estético en la foto."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Además, tener un poco de difracción no es siempre malo. No sacrifiques una buena idea por culpa de la difracción. La idea, la historia que quieras contar puede ser más importante que los efectos negativos de la difracción. Por lo tanto, no tengas miedo a utilizar aperturas muy pequeñas."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-3",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Nuestra calculadora macro de difracción te va a ayudar a calcular la magnificación y la apertura límite de difracción."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "heading",
      "payload": {
        "level": 2,
        "text": "Trucos para sacar partido a la profundidad de campo en macrofotografía",
        "anchor": "b2-c13-sec-4"
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Observa la fotografía siguiente. Fíjate que sólo el ojo y parte de una pata de la mantis religiosa están enfocados, dejando otras partes interesantes del insecto desenfocadas (antenas, cuerpo, etc)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En esta ocasión enfoqué justo al ojo de la mantis, una muy buena opción cuando fotografiamos insectos (y personas)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como puedes ver, la mayor parte de la mantis quedó desenfocada. Esto no es causa de un error al enfocar sino que se debe a la poquísima profundidad de campo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero, ¿cómo podríamos captar el insecto completamente enfocado?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una opción es ignorar la profundidad de campo y cambiar la perspectiva. Si disparas al sujeto en una dirección con la que las partes interesantes del sujeto estén en el plano de enfoque, entonces, puedes llegar a tener todo lo que te interesa enfocado."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En el caso de la siguiente foto de la abeja, me aseguré que el perfil de su cuerpo fuese paralelo al plano de enfoque."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c13-p122-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Otra opción es la técnica llamada “focus stacking”, útil especialmente si no quieres cambiar la perspectiva."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Consiste en tomar una serie de fotografías con idéntica composición, cada una enfocada en un plano de diferente profundidad a lo largo del cuerpo del sujeto. El objetivo es conseguir que todo el sujeto esté perfectamente enfocado en la imagen que construiremos juntado todas las fotografías."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Para sacar las fotos, vas a necesitar un rail de enfoque, aunque sea manual, para ir moviendo la cámara después de cada fotografía o bien ir girando lentamente el anillo de enfoque manual."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Como alternativa, si estás a un nivel más avanzado, te recomiendo un rail automático como podría ser el StakShot."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Una vez en casa, puedes utilizar un software como el Helicon Focus o la herramienta de focus stacking de PhotoShop (apilamiento de capas) para seleccionar automáticamente las partes enfocadas de cada fotografía y juntarlas para construir la imagen final."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En la siguiente fotografía, la orquídea aparece completamente enfocada gracias a esta técnica."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c13-p123-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c13-p124-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c13-sec-4",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Macrofotografía y Apilamiento con Peaking y Mapa de Enfoque en la Sony Alpha 7 IV",
        "summary": "En macrofotografía (relación 1:1 con objetivos como el Sony FE 90mm f/2.8 Macro G OSS), la profundidad de campo es inferior a 1 milímetro:",
        "bulletPoints": [
          "Usa la pantalla abatible multiángulo de la A7 IV con [Ampliar enfoque] (5.9x o 11.7x) sobre trípode.",
          "Para realizar apilamiento de enfoque (Focus Stacking), realiza micro-pasos con el anillo de enfoque guiándote por el desplazamiento de la franja de [Mapa de enfoque] o de [Peaking] desde el borde delantero hasta el trasero del insecto o flor."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000658487.html",
        "manualLabel": "Manual Sony A7 IV — Asistencia de Enfoque y Mapa de Enfoque en Macro",
        "cameraPath": "MENU → Enfoque → Asistente de enfoque → Ampliar enfoque / Mapa de enfoque"
      }
    }
  ],
  "14": [
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Bokeh es la palabra japonesa para “desenfoque”. En fotografía, se usa este término para describir la calidad de las partes desenfocadas de una imagen. Pero no confundas el bokeh con poca profundidad de campo, no son lo mismo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "En otras palabras, mientras que la profundidad de campo se refiere a las partes aceptablemente enfocadas de una fotografía, el bokeh se refiere a la calidad del desenfoque de los elementos del primer plano y del fondo. O sea, estamos analizando si el desenfoque es suave y bonito o duro y feo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Dependiendo del diseño de los objetivos, las partes desenfocadas pueden aparecer suaves y agradables o duras y feas, pudiendo distraer la atención. Esta es la diferencia entre un buen o mal bokeh."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por ejemplo, compara el fondo desenfocado de estos dos recortes. ¿Ves la diferencia en la calidad del bokeh?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c14-p126-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c14-p127-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c14-p127-2",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El objetivo zoom Nikon 18-105mm f/3.5-f/5.6 produce un bokeh bastante malo, en cambio el objetivo Nikon 85mm f/1.4 produce un muy buen bokeh."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Me encanta utilizar un buen bokeh para crear fondos más interesantes. Cuando disparas con poca profundidad de campo, tener un buen bokeh es importante para que el sujeto aparezca sobre un fondo desenfocado pero agradable a vista."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Al escoger un objetivo en busca de un buen bokeh, presta atención a su diseño. Busca objetivos que hayan sido compensados contra aberraciones ópticas. Y fíjate que los bordes de las palas que forman la apertura sean curvos. Esto hará que la apertura sea más similar a una circunferencia y no a un polígono."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Las palas van a definir la forma y tamaño de tu bokeh. A mayor apertura, más grande va a ser el bokeh. Y cuantas más palas tenga el objetivo para formar la apertura mucho mejor. Las lentes más caras tienen al menos 8 palas, mientras que las baratas solamente 5, motivo por el cual producen un bokeh más pobre."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "El siguiente GIF animado permite observar cómo cambia el bokeh a medida que vamos cerrando el diafragma."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c14-p129-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si buscas objetivos con buen bokeh, fíjate en los Nikon 85mm f/1.4, Canon 24-70mm f/2.8, Nikon 28-70mm f/2.8 y Nikon 24-70mm f/2.8. Pero si quieres un bokeh fabuloso, te recomiendo los objetivos Nikon 135mm f/2 DC, Nikon 200mm f/2 VR y el Canon 200mm f/2 IS."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Por otro lado, olvídate de los Nikon 50mm f/1.4 AF-D, Canon 50mm f/1.4, Nikon 18- 105mm f/3.5-f/5.6 y el Canon 24-105mm f/4, producen un bokeh bastante malo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Ahora que ya tienes un objetivo que produce un estupendo bokeh, aquí tienes unos cuantos trucos para conseguir que tus fondos desenfocados reluzcan en tus fotografías:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Elige una distancia focal de 50mm o mayor para conseguir muy poca profundidad de campo."
            }
          ],
          [
            {
              "text": "Selecciona una apertura abierta (f/1.4, f/1.8, f/2.8)."
            }
          ],
          [
            {
              "text": "Acércate al sujeto (3-5m)."
            }
          ],
          [
            {
              "text": "Enfoca en la parte del sujeto que quieras que esté perfectamente enfocada."
            }
          ],
          [
            {
              "text": "Coloca el sujeto de forma que quede separado del fondo que quieres que te quede desenfocado."
            }
          ],
          [
            {
              "text": "El bokeh es más visible alrededor de puntos de luz, como pueden ser reflejos o luces naturales (estrellas) o artificiales."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Observa las siguientes fotos. ¿Qué te parece su bokeh?"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c14-p131-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c14-p132-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c14-p132-2",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c14-p133-1",
        "layout": "portrait"
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Finalmente, no podía terminar este apartado sin mencionar la manera de crear bokeh con formas personalizadas. En el siguiente vídeo, Germán realiza algunos moldes para crear un bokeh muy PhotoPiller."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Así es! Puedes crear efectos divertidos utilizando un patrón con diferentes formas sobre tu objetivo. Para crear tus propias figuras, todo lo que tienes que hacer es:"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "list",
      "payload": {
        "items": [
          [
            {
              "text": "Coge un lápiz y dibuja el perímetro de tu objetivo sobre una cartulina. Coloca el objetivo sobre la cartulina y traza una circunferencia siguiendo su perímetro."
            }
          ],
          [
            {
              "text": "En el centro del círculo, dibuja la forma o figura que te interese. Su tamaño tiene que ser bastante pequeño (15-20mm)."
            }
          ],
          [
            {
              "text": "Usa un cutter para recortar la figura. Asegúrate de recortar el patrón siguiendo un círculo mayor que el objetivo, para que luego se pueda ajustar bien al objetivo."
            }
          ],
          [
            {
              "text": "Utiliza una goma elástica para acoplar el patrón al objetivo."
            }
          ],
          [
            {
              "text": "Cuando dispares, asegúrate que tienes puntos de luz en el fondo desenfocado: velas, luces de navidad, farolas, fuegos artificiales, estrellas, etc."
            }
          ]
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Si no quieres fabricarlos tú mismo, otra alternativa es comprar los patrones ya hechos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c14-p134-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Os dejo con un par de locos. Reproduce este vídeo sobre cómo realizar figuras divertidas para bokeh (en inglés). Es un poco loco, pero muy divertido."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c14-p135-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c14-p135-2",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c14-sec-1",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Cómo Obtener el Máximo Bokeh en la Sony Alpha 7 IV (Ajuste de e-Front Curtain)",
        "summary": "Un detalle técnico crucial de las cámaras sin espejo Sony al disparar con objetivos muy luminosos (f/1.2, f/1.4, f/1.8) a velocidades muy rápidas (1/2000s a 1/8000s) buscando un gran bokeh:",
        "bulletPoints": [
          "Desactiva la cortinilla delantera electrónica [Obt. cortinilla del. elect. → Desactivar] cuando dispares a más de 1/2000s con diafragmas muy abiertos: a velocidades extremas, la cortinilla electrónica puede recortar la parte inferior de los círculos de bokeh (efecto ojo de gato). Usando el obturador 100% mecánico en tu A7 IV, las esferas de bokeh se mantienen perfectamente redondas y cremosas."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000656456.html",
        "manualLabel": "Manual Sony A7 IV — Obturador de Cortinilla Delantera Electrónica y Bokeh",
        "cameraPath": "MENU → Toma → Obturador/Silencioso → Obt. cortinilla del. elect. (Desactivar para f/1.4 a >1/2000s)"
      }
    }
  ],
  "15": [
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“Existe una diferencia entre conocer el camino y andar el camino”. - Morfeo, The Matrix (1999)."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Hey PhotoPiller, ¡felicidades!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Lo has conseguido... ¡Eres un superhéroe!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Lo creas o no, acabas de sobrevivir a más de 18.000 palabras sobre la profundidad de campo. Una materia que podría acabar con el mismo Superman, mucho peor que la kryptonita. Pero mírate, aquí estás, sano y salvo, ¡Increíble!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "La buena noticia es que ahora sabes y conoces todo lo que necesitas para poner la profundidad de campo al servicio de tu creatividad. Eres más que capaz de hacer fotos que sorprendan al mundo, que pongan la piel de gallina."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Conoces el camino. Ahora, sólo tienes que dejar volar tu imaginación."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Pero, conocer el camino nunca es suficiente. No te ayudará a mejorar tu fotografía. El secreto es empezar a andar por él."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Yo solía ser de los que creen que el conocimiento es poder. Creía que si dominaba la teoría, conseguiría mis objetivos en la vida. Qué equivocado estaba..."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Con el tiempo, la vida me ha enseñado que la única manera de mejorar es poniendo en práctica la teoría. Hay que pasar a la acción, ponerse a andar el camino. Sólo cuando te sumerges en el mundo real te das cuenta que no sabes como aplicar lo que sabes."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Estabas convencido de que lo tenías todo perfectamente claro, pero sólo era una ilusión."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Tan pronto como sientas este momento de frustración, respira hondo, toma aire, saca pecho y piensa: “Lo voy a conseguir, no importa lo que me cueste. No voy a tirar la toalla”."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y ¿sabes qué? No estás solo. Nosotros estamos aquí para ir por el camino contigo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Siempre que nos necesites, nos tendrás."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Simplemente deja tu pregunta en la zona de comentarios de abajo o mándanos un correo electrónico a info@photopills.com. Tus comentarios, preguntas y opiniones nos ayudarán a mejorar a todos."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Y como la vida es demasiado corta para tomársela demasiado en serio. Una pizca de locura es siempre bienvenida. Así que, me despido y os dejo con el Bardo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c15-p138-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "“Esta es tu última oportunidad. Después, ya no podrás echarte atrás. Si tomas la pastilla azul - fin de la historia, despertarás en tu cama y creerás lo que quieras creerte. Si tomas PhotoPills - te quedas en el País de las Maravillas y te enseñaremos hasta dónde llega la madriguera de conejos. Recuerda, lo único que te ofrecemos son fotos legendarias y piel de gallina, nada más.”"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Deja volar tu imaginación!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "¡Feliz profundidad de campo!"
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "image_card",
      "payload": {
        "assetId": "b2-c15-p139-1",
        "layout": "wide"
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Antoni Cladera es un fotógrafo de naturaleza comprometido con el medio ambiente. Artista de la Confederación Española de Fotografía y miembro de la Asociación Española de Fotógrafos de Naturaleza (AEFONA). Forma parte del equipo de PhotoPills."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Agradecemos especialmente a Sandra Vallaure, gran fotógrafa y amiga, por compartir su sabiduría con nosotros y ayudarnos a hacer posible este artículo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-1",
      "blockType": "paragraph",
      "payload": {
        "segments": [
          {
            "text": "Nota: Algunos enlaces de este artículo son enlaces de afiliados. ¿Qué quiere decir esto? Que si compras mediante estos enlaces nos estás ayudando económicamente sin costarte nada extra. Gracias por tu apoyo."
          }
        ]
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-2",
      "blockType": "heading",
      "payload": {
        "level": 3,
        "text": "www.photopills.com",
        "anchor": "b2-c15-sec-2"
      }
    },
    {
      "sectionAnchor": "b2-c15-sec-2",
      "blockType": "sony_a7iv_note",
      "payload": {
        "title": "Sinergia Total entre el Módulo 1 (Exposición) y el Módulo 2 (Profundidad de Campo)",
        "summary": "Con ambos libros integrados en tu plataforma local para la Sony Alpha 7 IV, dominas tanto la luz (Triángulo de Exposición, Histograma, Rango Dinámico) como el espacio enfocado (Apertura, Hiperfocal, Círculo de Confusión y Bokeh).",
        "bulletPoints": [
          "Practica primero la elección de apertura y punto de enfoque (Hiperfocal o Eye AF) según tu intención narrativa, y luego equilibra velocidad e ISO siguiendo las reglas del Módulo 1."
        ],
        "manualUrl": "https://helpguide.sony.net/ilc/2110/v1/es/index.html",
        "manualLabel": "Guía de Ayuda Oficial Sony Alpha 7 IV — Portal Completo",
        "cameraPath": "Sony Alpha 7 IV — Dominio Integral de Luz y Profundidad de Campo"
      }
    }
  ]
};
