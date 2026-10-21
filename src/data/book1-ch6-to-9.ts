import type { ExifMetadata, TextSegment } from '../core/types.ts';
import type { SeedBlockInput } from './book1-content.ts';

const t = (text: string, opts?: Omit<TextSegment, 'text'>): TextSegment => ({
  text,
  ...opts,
});

export const BOOK_1_ASSETS_CH6_TO_9: (ExifMetadata & { chapterNumber: number })[] = [
  // =========================================================================
  // CAPÍTULO 6: El concepto de paso de luz (Páginas 97–102)
  // =========================================================================
  {
    id: 'b1-c6-p99',
    chapterNumber: 6,
    filePath: '/images/book-1/cap-6/p99-iglesia-reikiavik-pasos.jpg',
    altText: 'Comparativa de tres fotografías de la iglesia Hallgrímskirkja en Reikiavik con variaciones de 1 paso de luz entre ellas',
    caption: 'Variación de 1 paso de luz entre tomas consecutivas: cada salto hacia la derecha duplica la luz capturada por el sensor (y hacia la izquierda la divide a la mitad).',
  },

  // =========================================================================
  // CAPÍTULO 7: La ley de reciprocidad y ejemplos (Páginas 103–119)
  // =========================================================================
  {
    id: 'b1-c7-p106',
    chapterNumber: 7,
    filePath: '/images/book-1/cap-7/p106-retrato-f8-1-250s.jpg',
    altText: 'Retrato femenino en carretera tomado a f/8, 1/250s e ISO 800 con mayor profundidad de campo en el fondo',
    caption: 'Toma inicial con mayor profundidad de campo (f/8, 1/250s, ISO 800): las piedras y arbustos de la carretera siguen siendo reconocibles.',
    cameraModel: 'Nikon D4s',
    lensFocal: '130mm',
    aperture: 'f/8',
    shutterSpeed: '1/250s',
    iso: '800',
    kelvin: '4800K',
  },
  {
    id: 'b1-c7-p107',
    chapterNumber: 7,
    filePath: '/images/book-1/cap-7/p107-retrato-f28-1-2000s.jpg',
    altText: 'Retrato femenino equivalente tomado a f/2.8, 1/2000s e ISO 800 con fondo completamente desenfocado manteniendo idéntica exposición',
    caption: 'Aplicación de la Ley de Reciprocidad: abrimos 3 pasos el diafragma (f/8 → f/2.8) para desenfocar el fondo y compensamos restando 3 pasos a la velocidad (1/250s → 1/2000s). La exposición es idéntica.',
    cameraModel: 'Nikon D4s',
    lensFocal: '130mm',
    aperture: 'f/2.8',
    shutterSpeed: '1/2000s',
    iso: '800',
    kelvin: '4800K',
  },
  {
    id: 'b1-c7-p109',
    chapterNumber: 7,
    filePath: '/images/book-1/cap-7/p109-triangulo-exposicion-avanzado.jpg',
    altText: 'Infografía del Triángulo de Exposición Avanzado integrando luz, profundidad de campo, movimiento y ruido',
    caption: 'El Triángulo de Exposición Avanzado: relaciona cada parámetro con su efecto técnico (luz) y su efecto creativo/estético (PdC, Movimiento y Ruido).',
  },
  {
    id: 'b1-c7-p111',
    chapterNumber: 7,
    filePath: '/images/book-1/cap-7/p111-rastros-estrellas-10min.jpg',
    altText: 'Fotografía nocturna de rastros de estrellas sobre la costa en una sola exposición de 10 minutos y 11 segundos a ISO 200',
    caption: 'Rastros de estrellas en una sola exposición de 10min 11s a ISO 200 y f/2.8 calculada a partir de una foto de prueba rápida a ISO elevado.',
    cameraModel: 'Nikon D700',
    lensFocal: '14mm',
    aperture: 'f/2.8',
    shutterSpeed: '10min 11s',
    iso: '200',
    kelvin: '3400K',
    extraNotes: 'Exposición única calculada por reciprocidad',
  },
  {
    id: 'b1-c7-p114-16m',
    chapterNumber: 7,
    filePath: '/images/book-1/cap-7/p114-app-reciprocidad-16min.png',
    altText: 'Calculadora de exposición PhotoPills pasando de f/2.8, 30s, ISO 3200 a f/2.8, ISO 100 = 16 minutos',
    caption: 'Cálculo en PhotoPills: de foto de prueba (f/2.8, 30s, ISO 3200) a foto final limpia (f/2.8, ISO 100) = 16 min.',
  },
  {
    id: 'b1-c7-p114-32m',
    chapterNumber: 7,
    filePath: '/images/book-1/cap-7/p114-app-reciprocidad-32min.png',
    altText: 'Calculadora de exposición PhotoPills cerrando además un paso a f/4 e ISO 100 = 32 minutos',
    caption: 'Cerrando un paso adicional la apertura (f/4, ISO 100), el tiempo equivalente se duplica a 32 min.',
  },
  {
    id: 'b1-c7-p115',
    chapterNumber: 7,
    filePath: '/images/book-1/cap-7/p115-retrato-aina-f14.jpg',
    altText: 'Retrato de Aina sobre rocas desenfocadas tomado a 35mm f/1.4, 1/500s e ISO 160',
    caption: 'Retrato de Aina: tras probar a f/5.6 y 1/30s, se abrió 4 pasos a f/1.4 y se compensó a 1/500s para fundir las rocas del fondo.',
    cameraModel: 'Nikon D4s',
    lensFocal: '35mm',
    aperture: 'f/1.4',
    shutterSpeed: '1/500s',
    iso: '160',
    kelvin: '7500K',
  },
  {
    id: 'b1-c7-p116',
    chapterNumber: 7,
    filePath: '/images/book-1/cap-7/p116-na-joanassa-filtro-nd.jpg',
    altText: 'Formación rocosa Na Joanassa en Menorca bajo tormenta con larga exposición de 1min 30s usando filtro ND de 6 pasos',
    caption: 'Na Joanassa (Menorca): de 1,3s sin filtro a 1min 30s tras colocar un filtro ND64 (6 pasos) y ajustar el balance de blancos a 9000K.',
    cameraModel: 'Nikon D4s',
    lensFocal: '15mm',
    aperture: 'f/11',
    shutterSpeed: '1min 30s',
    iso: '100',
    kelvin: '9000K',
    extraNotes: 'Filtro ND64 (6 pasos)',
  },
  {
    id: 'b1-c7-p119-test',
    chapterNumber: 7,
    filePath: '/images/book-1/cap-7/p119-app-nd-prueba.png',
    altText: 'Calculadora PhotoPills con los ajustes de prueba sin filtro (f/11, 1.3s, ISO 100)',
    caption: 'Ajustes de la foto de prueba sin filtro: f/11 | 1.3s | ISO 100 (+6.51 EV).',
  },
  {
    id: 'b1-c7-p119-nd6',
    chapterNumber: 7,
    filePath: '/images/book-1/cap-7/p119-app-nd-6pasos.png',
    altText: 'Calculadora PhotoPills aplicando un filtro ND de 6 pasos para obtener 1min 30s',
    caption: 'Cálculo automático con filtro ND de 6 pasos (ND64): nueva velocidad de obturación = 1min 30s.',
  },

  // =========================================================================
  // CAPÍTULO 8: Qué es el valor de exposición (EV) (Páginas 120–126)
  // =========================================================================
  {
    id: 'b1-c8-p122-menu',
    chapterNumber: 8,
    filePath: '/images/book-1/cap-8/p122-app-menu-herramientas.png',
    altText: 'Menú principal de herramientas fotográficas de PhotoPills mostrando la calculadora de Exposición',
    caption: 'Menú de píldoras de PhotoPills con acceso directo a la calculadora de Exposición.',
  },
  {
    id: 'b1-c8-p122-ev8',
    chapterNumber: 8,
    filePath: '/images/book-1/cap-8/p122-app-calculo-ev8.png',
    altText: 'Calculadora de exposición PhotoPills mostrando el resultado de +8 EV para f/8, 1/4s e ISO 100',
    caption: 'Cálculo del Valor de Exposición para f/8, 1/4s e ISO 100: el resultado exacto es +8 EV.',
  },
  {
    id: 'b1-c8-p124-dia',
    chapterNumber: 8,
    filePath: '/images/book-1/cap-8/p124-app-tabla-ev-dia.png',
    altText: 'Tabla de valores de exposición EV100 para condiciones de luz de día (arena/nieve 16 EV, nublado 12 EV, arcoíris 15 EV)',
    caption: 'Tabla de referencia de valores EV (a ISO 100) para escenas diurnas.',
  },
  {
    id: 'b1-c8-p124-aire',
    chapterNumber: 8,
    filePath: '/images/book-1/cap-8/p124-app-tabla-ev-aire-libre.png',
    altText: 'Tabla de valores EV100 para arcoíris, puestas de sol y fases de la Luna',
    caption: 'Tabla de valores EV (a ISO 100) para puestas de sol y fotografía lunar.',
  },
  {
    id: 'b1-c8-p125-f8',
    chapterNumber: 8,
    filePath: '/images/book-1/cap-8/p125-app-arcoiris-f8.png',
    altText: 'Parámetros sugeridos para Arcoíris (+15 EV): f/8.0, 1/500s, ISO 100',
    caption: 'Punto de partida para +15 EV (Arcoíris): f/8.0 | 1/500s | ISO 100.',
  },
  {
    id: 'b1-c8-p125-f10',
    chapterNumber: 8,
    filePath: '/images/book-1/cap-8/p125-app-arcoiris-f10.png',
    altText: 'Parámetros equivalentes cerrando a f/10: 1/320s e ISO 100 manteniendo +15 EV',
    caption: 'Ajuste equivalente para +15 EV cerrando a f/10: velocidad de 1/320s a ISO 100.',
  },

  // =========================================================================
  // CAPÍTULO 9: El rango dinámico de la escena frente al de tu cámara (Págs 127–138)
  // =========================================================================
  {
    id: 'b1-c9-p129',
    chapterNumber: 9,
    filePath: '/images/book-1/cap-9/p129-cueva-silueta-atardecer.jpg',
    altText: 'Silueta de una persona sentada en la abertura de una cueva frente a la puesta de sol en el mar',
    caption: 'Escena de alto rango dinámico en una cueva al atardecer: exponiendo para las luces del cielo y dejando el interior de la cueva en silueta.',
    cameraModel: 'Nikon D4s',
    lensFocal: '18mm',
    aperture: 'f/8',
    shutterSpeed: '1/40s',
    iso: '400',
    kelvin: '5800K',
  },
  {
    id: 'b1-c9-p131',
    chapterNumber: 9,
    filePath: '/images/book-1/cap-9/p131-cueva-medicion-luces.jpg',
    altText: 'Punto de medición puntual en las altas luces del cielo a través de la cueva (f/8, 1/160s, ISO 400)',
    caption: 'Paso 1 para medir el rango dinámico de la escena: medición puntual en las luces más brillantes del cielo (f/8 | 1/160s | ISO 400 = +11 1/3 EV).',
    cameraModel: 'Nikon D4s',
    lensFocal: '18mm',
    aperture: 'f/8',
    shutterSpeed: '1/160s',
    iso: '400',
    kelvin: '5800K',
  },
  {
    id: 'b1-c9-p132-luces',
    chapterNumber: 9,
    filePath: '/images/book-1/cap-9/p132-app-ev-luces.png',
    altText: 'Cálculo del EV de las altas luces en PhotoPills (+11 1/3 EV)',
    caption: 'EV de las altas luces (f/8, 1/160s, ISO 400) = +11 1/3 EV.',
  },
  {
    id: 'b1-c9-p132-sombras',
    chapterNumber: 9,
    filePath: '/images/book-1/cap-9/p132-app-ev-sombras.png',
    altText: 'Cálculo del EV de las sombras profundas en PhotoPills (-3 2/3 EV)',
    caption: 'EV de las sombras más oscuras (f/8, 3min 12s, ISO 400) = -3 2/3 EV.',
  },
  {
    id: 'b1-c9-p133',
    chapterNumber: 9,
    filePath: '/images/book-1/cap-9/p133-cueva-medicion-sombras.jpg',
    altText: 'Exposición de 3min 12s para revelar el detalle de las rocas oscuras del interior de la cueva quemando el exterior',
    caption: 'Paso 2: exponiendo para las sombras del interior de la cueva (3min 12s a f/8 e ISO 400). La diferencia entre ambas tomas es de 15 pasos (+15 EV).',
    cameraModel: 'Nikon D4s',
    lensFocal: '18mm',
    aperture: 'f/8',
    shutterSpeed: '3min 12s',
    iso: '400',
    kelvin: '5800K',
  },
  {
    id: 'b1-c9-p135',
    chapterNumber: 9,
    filePath: '/images/book-1/cap-9/p135-silueta-brazos-sol.jpg',
    altText: 'Silueta dramática de una persona levantando los brazos frente a un cielo intensamente naranja al atardecer',
    caption: 'Escena de alto rango dinámico a contraluz resuelta creativamente mediante una silueta.',
    cameraModel: 'Nikon D4s',
    lensFocal: '200mm',
    aperture: 'f/4',
    shutterSpeed: '1/200s',
    iso: '100',
    kelvin: '7280K',
  },
  {
    id: 'b1-c9-p136',
    chapterNumber: 9,
    filePath: '/images/book-1/cap-9/p136-paisaje-hora-dorada-bajo-rd.jpg',
    altText: 'Paisaje suave de colinas y nubes pastel durante la hora dorada/azul con bajo rango dinámico',
    caption: 'Escena de bajo rango dinámico durante la hora dorada/azul: toda la información de luces y sombras cabe holgadamente en una sola toma.',
    cameraModel: 'Olympus OM-D E-M1',
    lensFocal: '105mm macro',
    aperture: 'f/4',
    shutterSpeed: '1/125s',
    iso: '200',
    kelvin: '6700K',
  },
];

// ============================================================================
// BLOQUES DEL CAPÍTULO 6: El concepto de paso de luz y sus aplicaciones
// ============================================================================
export const CHAPTER_6_BLOCKS: SeedBlockInput[] = [
  {
    sectionAnchor: 'c6-que-es-paso',
    blockType: 'heading',
    payload: {
      level: 2,
      text: '¿Qué es un paso de luz y para qué se utiliza?',
      anchor: 'c6-que-es-paso',
    },
  },
  {
    sectionAnchor: 'c6-que-es-paso',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('Modificar la exposición en '),
        t('un paso de luz', { bold: true }),
        t(
          ' significa doblar (o reducir a la mitad) la cantidad de luz capturada por el sensor al hacer una foto. Si modificas la apertura, la velocidad o el ISO para capturar el doble de luz, has aumentado la exposición en '
        ),
        t('+1 paso', { code: true }),
        t('; si obtienes la mitad de luz, la has disminuido en '),
        t('-1 paso', { code: true }),
        t('.'),
      ],
    },
  },
  {
    sectionAnchor: 'c6-que-es-paso',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c6-p99',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c6-que-es-paso',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Para hacer ajustes mucho más precisos, la escala de pasos de luz se divide en mitades de paso (1/2) o en '
        ),
        t('tercios de paso (1/3)', { bold: true }),
        t(
          ', siendo la escala de tercios de paso la más habitual y recomendada en las cámaras modernas.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c6-escalas-tercios',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'Las escalas de pasos enteros y tercios de paso',
      anchor: 'c6-escalas-tercios',
    },
  },
  {
    sectionAnchor: 'c6-escalas-tercios',
    blockType: 'callout_tip',
    payload: {
      title: '1. Escala de pasos en la Apertura (en negrita los pasos enteros)',
      items: [
        [
          t('Pasos completos: ', { bold: true }),
          t('f/1 · f/1.4 · f/2 · f/2.8 · f/4 · f/5.6 · f/8 · f/11 · f/16 · f/22 · f/32', {
            code: true,
          }),
        ],
        [
          t('Escala en tercios de paso (1/3 EV): ', { bold: true }),
          t('1', { bold: true }),
          t(', 1.1, 1.2, '),
          t('1.4', { bold: true }),
          t(', 1.6, 1.8, '),
          t('2', { bold: true }),
          t(', 2.2, 2.5, '),
          t('2.8', { bold: true }),
          t(', 3.2, 3.5, '),
          t('4', { bold: true }),
          t(', 4.5, 5.0, '),
          t('5.6', { bold: true }),
          t(', 6.3, 7.1, '),
          t('8', { bold: true }),
          t(', 9, 10, '),
          t('11', { bold: true }),
          t(', 13, 14, '),
          t('16', { bold: true }),
          t('... (Cada valor deja pasar 1/3 menos de luz que el anterior).'),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c6-escalas-tercios',
    blockType: 'callout_tip',
    payload: {
      title: '2. Escala de pasos en la Velocidad de Obturación (en segundos)',
      items: [
        [
          t('Pasos completos: ', { bold: true }),
          t('1s · 1/2s · 1/4s · 1/8s · 1/15s · 1/30s · 1/60s · 1/125s · 1/250s · 1/500s...', {
            code: true,
          }),
        ],
        [
          t('Escala en tercios de paso (1/3 EV): ', { bold: true }),
          t('1', { bold: true }),
          t(', 1/1.3, 1/1.6, '),
          t('1/2', { bold: true }),
          t(', 1/2.5, 1/3, '),
          t('1/4', { bold: true }),
          t(', 1/5, 1/6, '),
          t('1/8', { bold: true }),
          t(', 1/10, 1/13, '),
          t('1/15', { bold: true }),
          t(', 1/20, 1/25, '),
          t('1/30', { bold: true }),
          t(', 1/40, 1/50, '),
          t('1/60', { bold: true }),
          t(', 1/80, 1/100, '),
          t('1/125', { bold: true }),
          t('...'),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c6-escalas-tercios',
    blockType: 'callout_tip',
    payload: {
      title: '3. Escala de pasos en la Sensibilidad (ISO)',
      items: [
        [
          t('Pasos completos: ', { bold: true }),
          t('100 · 200 · 400 · 800 · 1600 · 3200 · 6400 · 12800 · 25600...', { code: true }),
        ],
        [
          t('Escala en tercios de paso (1/3 EV): ', { bold: true }),
          t('100', { bold: true }),
          t(', 125, 160, '),
          t('200', { bold: true }),
          t(', 250, 320, '),
          t('400', { bold: true }),
          t(', 500, 640, '),
          t('800', { bold: true }),
          t(', 1000, 1250, '),
          t('1600', { bold: true }),
          t('...'),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c6-escalas-tercios',
    blockType: 'sony_a7iv_note',
    payload: {
      title: 'Configuración de tercios de paso (0,3 EV) en tu Sony Alpha 7 IV',
      summary:
        'En tu Sony Alpha 7 IV cada clic de los diales delantero, trasero o de la rueda de control equivale por defecto a 1/3 de paso de luz (0,3 EV):',
      bulletPoints: [
        '3 clics de dial = 1 paso completo de luz (duplicar o dividir por dos la luz).',
        'Puedes verificar o alternar entre incrementos de 0,3 EV (tercios de paso) y 0,5 EV (medios pasos) en el menú de exposición.',
        'Mantenerlo en [0,3 EV] te da la máxima precisión y coincide exactamente con las escalas de tercios de este libro.',
      ],
      manualUrl: 'https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654682.html',
      manualLabel: 'Manual Sony A7 IV — Paso de ajuste de exposición (0,3 EV / 0,5 EV)',
      cameraPath: 'MENU → Exposición/Color → Exposición → Paso de ajuste de exposición → 0,3 EV',
    },
  },
];

// ============================================================================
// BLOQUES DEL CAPÍTULO 7: La ley de reciprocidad y ejemplos de aplicación
// ============================================================================
export const CHAPTER_7_BLOCKS: SeedBlockInput[] = [
  {
    sectionAnchor: 'c7-que-es-reciprocidad',
    blockType: 'heading',
    payload: {
      level: 2,
      text: '¿Qué es la ley de reciprocidad y para qué sirve?',
      anchor: 'c7-que-es-reciprocidad',
    },
  },
  {
    sectionAnchor: 'c7-que-es-reciprocidad',
    blockType: 'quote',
    payload: {
      quote:
        'Si mantienes la proporción entre apertura, velocidad e ISO, obtienes exactamente la misma exposición (capturas la misma cantidad de luz).',
      author: 'Ley de Reciprocidad Fotográfica',
    },
  },
  {
    sectionAnchor: 'c7-que-es-reciprocidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Una vez has conseguido una exposición correcta, la ley de reciprocidad te permite modificar la apertura, la velocidad y/o el ISO para cambiar el efecto creativo (por ejemplo, desenfocar más el fondo o conseguir efecto seda), manteniendo la misma exposición.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c7-ejemplo-retrato-carretera',
    blockType: 'heading',
    payload: {
      level: 3,
      text: 'Ejemplo directo: aislar al sujeto abriendo 3 pasos el diafragma',
      anchor: 'c7-ejemplo-retrato-carretera',
    },
  },
  {
    sectionAnchor: 'c7-ejemplo-retrato-carretera',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('Partimos de una foto correctamente expuesta con '),
        t('f/8 · 1/250s · ISO 800', { code: true }),
        t(
          '. Al querer separar a la modelo del fondo, abrimos la apertura 3 pasos completos ('
        ),
        t('f/8 → f/5.6 → f/4 → f/2.8', { code: true }),
        t(
          '), dejando entrar 3 veces el doble de luz. Para mantener la misma exposición sin tocar el ISO, reducimos el tiempo de exposición en 3 pasos ('
        ),
        t('1/250s → 1/500s → 1/1000s → 1/2000s', { code: true }),
        t('):'),
      ],
    },
  },
  {
    sectionAnchor: 'c7-ejemplo-retrato-carretera',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c7-p106',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c7-ejemplo-retrato-carretera',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c7-p107',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c7-triangulo-avanzado',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'El triángulo de exposición avanzado',
      anchor: 'c7-triangulo-avanzado',
    },
  },
  {
    sectionAnchor: 'c7-triangulo-avanzado',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Dos combinaciones equivalentes en luz no son equivalentes desde el punto de vista estético. Aquí tienes el triángulo de exposición completo con sus efectos sobre la Profundidad de Campo, el Movimiento y el Ruido:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c7-triangulo-avanzado',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c7-p109',
      layout: 'diagram',
    },
  },
  {
    sectionAnchor: 'c7-casos-practicos',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'Tres casos prácticos de reciprocidad en campo',
      anchor: 'c7-casos-practicos',
    },
  },
  {
    sectionAnchor: 'c7-casos-practicos',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('1. Rastros de estrellas en una sola exposición (ahorro de tiempo en pruebas): ', {
          bold: true,
        }),
        t(
          'En lugar de esperar 16 o 30 minutos para saber si tu foto nocturna está bien expuesta, haces una foto de prueba rápida a '
        ),
        t('f/2.8 · 30s · ISO 3200', { code: true }),
        t(
          '. Una vez clavada la exposición, bajas 5 pasos de ISO hasta '
        ),
        t('ISO 100', { code: true }),
        t(' para eliminar el ruido y multiplicas el tiempo por '),
        t('2^5 = 32', { code: true }),
        t(': '),
        t('30s × 32 = 960s = 16 minutos', { code: true }),
        t(' (o 32 minutos si cierras a f/4):'),
      ],
    },
  },
  {
    sectionAnchor: 'c7-casos-practicos',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c7-p111',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c7-casos-practicos',
    blockType: 'image_pair',
    payload: {
      leftAssetId: 'b1-c7-p114-16m',
      rightAssetId: 'b1-c7-p114-32m',
    },
  },
  {
    sectionAnchor: 'c7-casos-practicos',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('2. Retrato de Aina (control del bokeh): ', { bold: true }),
        t('La primera toma a '),
        t('f/5.6 · 1/30s · ISO 160', { code: true }),
        t(
          ' mostraba demasiado detalle en las rocas traseras. Abriendo 4 pasos de luz hasta '
        ),
        t('f/1.4', { code: true }),
        t(' y restando 4 pasos al tiempo hasta '),
        t('1/500s', { code: true }),
        t(', el fondo se funde suavemente conservando la misma luz en el rostro:'),
      ],
    },
  },
  {
    sectionAnchor: 'c7-casos-practicos',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c7-p115',
      layout: 'portrait',
    },
  },
  {
    sectionAnchor: 'c7-casos-practicos',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('3. Larga exposición diurna con filtro ND de 6 pasos (Na Joanassa, Menorca): ', {
          bold: true,
        }),
        t('Sin filtro, la exposición correcta es '),
        t('f/11 · 1,3s · ISO 100', { code: true }),
        t(
          '. Al colocar un filtro ND64 (que resta 6 pasos de luz), aplicamos la ley de reciprocidad alargando 6 pasos la velocidad hasta '
        ),
        t('1min 30s', { code: true }),
        t(' para lograr el efecto seda dramático en el mar y las nubes:'),
      ],
    },
  },
  {
    sectionAnchor: 'c7-casos-practicos',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c7-p116',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c7-casos-practicos',
    blockType: 'image_pair',
    payload: {
      leftAssetId: 'b1-c7-p119-test',
      rightAssetId: 'b1-c7-p119-nd6',
    },
  },
  {
    sectionAnchor: 'c7-casos-practicos',
    blockType: 'sony_a7iv_note',
    payload: {
      title: 'Modo BULB y Exposiciones Mayores a 30 Segundos en la Sony Alpha 7 IV',
      summary:
        'Como viste en los ejemplos de rastros de estrellas (16 min) y filtros ND (1min 30s), el límite estándar de velocidad en cámara es de 30 segundos (30"). Para tiempos superiores en tu Sony Alpha 7 IV:',
      bulletPoints: [
        'Activar el modo BULB: En modo Manual (M), gira el dial de velocidad de obturación hacia la izquierda más allá de [30"] hasta que aparezca [BULB] en pantalla.',
        'Control sin tocar la cámara: En modo BULB el obturador permanece abierto mientras se mantiene pulsado el disparador. Usa la app oficial Sony Creators\' App / Imaging Edge Mobile por Bluetooth/Wi-Fi, el mando inalámbrico RMT-P1BT o un intervalómetro externo por USB-C.',
        'Reducción de ruido en larga exposición: En exposiciones de varios minutos puedes activar o desactivar [RR larga exp.] (realiza una toma en negro del mismo tiempo para restar píxeles calientes).',
      ],
      manualUrl: 'https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654666.html',
      manualLabel: 'Manual Sony A7 IV — Fotografía de Larga Exposición (BULB)',
      cameraPath: 'Modo M → Girar dial de velocidad más allá de 30" hasta [BULB]',
    },
  },
];

// ============================================================================
// BLOQUES DEL CAPÍTULO 8: Qué es el valor de exposición (EV) y para qué sirve
// ============================================================================
export const CHAPTER_8_BLOCKS: SeedBlockInput[] = [
  {
    sectionAnchor: 'c8-que-es-ev',
    blockType: 'heading',
    payload: {
      level: 2,
      text: '¿Qué es el valor de exposición (EV) y cómo se calcula?',
      anchor: 'c8-que-es-ev',
    },
  },
  {
    sectionAnchor: 'c8-que-es-ev',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('El '),
        t('valor de exposición (EV)', { bold: true }),
        t(
          ' es un número único que representa todas las combinaciones equivalentes de apertura, velocidad e ISO que capturan la misma cantidad de luz. Por definición, '
        ),
        t('0 EV', { code: true }),
        t(' corresponde a '),
        t('f/1.0 · 1 segundo · ISO 100', { code: true }),
        t(
          '. Cada vez que aumentas la exposición en un paso, el EV sube en 1 unidad.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c8-que-es-ev',
    blockType: 'callout_tip',
    payload: {
      title: 'Fórmula Matemática del Valor de Exposición (EV)',
      items: [
        [
          t('Fórmula general: ', { bold: true }),
          t('EV_ISO = log₂(N² / t) + log₂(ISO / 100)', { code: true }),
          t(' donde '),
          t('N', { code: true }),
          t(' es el número f y '),
          t('t', { code: true }),
          t(' es el tiempo en segundos.'),
        ],
        [
          t('Ejemplo para f/8, 1/4s (0,25s) e ISO 100: ', { bold: true }),
          t('EV = log₂(8² / 0,25) + log₂(100 / 100) = log₂(256) + 0 = +8 EV', {
            code: true,
          }),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c8-que-es-ev',
    blockType: 'image_pair',
    payload: {
      leftAssetId: 'b1-c8-p122-menu',
      rightAssetId: 'b1-c8-p122-ev8',
    },
  },
  {
    sectionAnchor: 'c8-para-que-sirve-ev',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'Tablas EV por condición de luz y ajuste EV en cámara',
      anchor: 'c8-para-que-sirve-ev',
    },
  },
  {
    sectionAnchor: 'c8-para-que-sirve-ev',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'El EV sirve como punto de partida rápido para reducir el “prueba y error” según la luminosidad típica de la escena (por ejemplo, nieve o arena al sol = '
        ),
        t('+16 EV', { code: true }),
        t(', un arcoíris en cielo despejado o la Luna llena = '),
        t('+15 EV', { code: true }),
        t(', puesta de sol = '),
        t('+12 a +14 EV', { code: true }),
        t('):'),
      ],
    },
  },
  {
    sectionAnchor: 'c8-para-que-sirve-ev',
    blockType: 'image_pair',
    payload: {
      leftAssetId: 'b1-c8-p124-dia',
      rightAssetId: 'b1-c8-p124-aire',
    },
  },
  {
    sectionAnchor: 'c8-para-que-sirve-ev',
    blockType: 'image_pair',
    payload: {
      leftAssetId: 'b1-c8-p125-f8',
      rightAssetId: 'b1-c8-p125-f10',
    },
  },
  {
    sectionAnchor: 'c8-para-que-sirve-ev',
    blockType: 'sony_a7iv_note',
    payload: {
      title: 'Dial superior de Compensación de Exposición (±EV) en la Sony Alpha 7 IV',
      summary:
        'Tal como adelanta la página 126 del libro, tu Sony Alpha 7 IV cuenta con un dial superior derecho personalizable con botón central de bloqueo para compensar el EV:',
      bulletPoints: [
        'Cuándo actúa la compensación ±EV: Funciona en los modos P, Prioridad a la Apertura (A), Prioridad a la Velocidad (S) y también en modo Manual (M) cuando tienes activado [ISO AUTO].',
        'Botón de bloqueo central: El dial superior derecho de la A7 IV tiene un botón en el centro; al pulsarlo se bloquea o libera el giro para evitar cambios accidentales de ±EV al sacar la cámara de la mochila.',
      ],
      manualUrl: 'https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654680.html',
      manualLabel: 'Manual Sony A7 IV — Compensación de Exposición (±EV)',
      cameraPath: 'MENU → Exposición/Color → Exposición → Comp. exposición',
    },
  },
];

// ============================================================================
// BLOQUES DEL CAPÍTULO 9: El rango dinámico de la escena frente al de tu cámara
// ============================================================================
export const CHAPTER_9_BLOCKS: SeedBlockInput[] = [
  {
    sectionAnchor: 'c9-que-es-rango-dinamico',
    blockType: 'heading',
    payload: {
      level: 2,
      text: '¿Qué es el rango dinámico?',
      anchor: 'c9-que-es-rango-dinamico',
    },
  },
  {
    sectionAnchor: 'c9-que-es-rango-dinamico',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('El '),
        t('rango dinámico', { bold: true }),
        t(
          ' se mide en pasos de luz o valores de exposición (EV) e indica la diferencia de intensidad de luz que existe entre las sombras más oscuras y las luces más altas (claras). Para exponer con éxito debes comparar siempre dos rangos dinámicos: el '
        ),
        t('rango dinámico de la escena', { bold: true }),
        t(' frente al '),
        t('rango dinámico de tu cámara', { bold: true }),
        t('.'),
      ],
    },
  },
  {
    sectionAnchor: 'c9-calculo-rd-escena',
    blockType: 'heading',
    payload: {
      level: 2,
      text: '1. Cómo medir y calcular el rango dinámico de la escena',
      anchor: 'c9-calculo-rd-escena',
    },
  },
  {
    sectionAnchor: 'c9-calculo-rd-escena',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Observa esta escena al atardecer desde el interior de una cueva. Para saber cuántos pasos de luz hay entre el cielo brillante y las rocas oscuras de la cueva, usamos el '
        ),
        t('modo de medición puntual', { bold: true }),
        t(':'),
      ],
    },
  },
  {
    sectionAnchor: 'c9-calculo-rd-escena',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c9-p129',
      layout: 'portrait',
    },
  },
  {
    sectionAnchor: 'c9-calculo-rd-escena',
    blockType: 'list',
    payload: {
      items: [
        [
          t('Paso 1 — Medir en las luces más brillantes: ', { bold: true }),
          t('Apuntamos con medición puntual al cielo junto al Sol y obtenemos '),
          t('f/8 · 1/160s · ISO 400', { code: true }),
          t(', lo que equivale a '),
          t('+11 1/3 EV', { code: true }),
          t('.'),
        ],
        [
          t('Paso 2 — Medir en las sombras más oscuras: ', { bold: true }),
          t('Apuntamos a las rocas en sombra dentro de la cueva y obtenemos '),
          t('f/8 · 3min 12s · ISO 400', { code: true }),
          t(', que equivale a '),
          t('-3 2/3 EV', { code: true }),
          t('.'),
        ],
        [
          t('Paso 3 — Restar ambos valores EV: ', { bold: true }),
          t('11 1/3 EV - (-3 2/3 EV) = +15 EV (15 pasos de luz de diferencia).', {
            code: true,
          }),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c9-calculo-rd-escena',
    blockType: 'image_pair',
    payload: {
      leftAssetId: 'b1-c9-p131',
      rightAssetId: 'b1-c9-p133',
    },
  },
  {
    sectionAnchor: 'c9-calculo-rd-escena',
    blockType: 'image_pair',
    payload: {
      leftAssetId: 'b1-c9-p132-luces',
      rightAssetId: 'b1-c9-p132-sombras',
    },
  },
  {
    sectionAnchor: 'c9-rd-camara-soluciones',
    blockType: 'heading',
    payload: {
      level: 2,
      text: '2. El rango dinámico de la cámara y qué hacer cuando la escena lo supera',
      anchor: 'c9-rd-camara-soluciones',
    },
  },
  {
    sectionAnchor: 'c9-rd-camara-soluciones',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Mientras el rango dinámico de la escena (ej. un paisaje suave durante la hora dorada o azul de unos 7–9 pasos) quepa dentro del rango dinámico del sensor de tu cámara, podrás capturar todo el detalle de luces y sombras en una sola toma:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c9-rd-camara-soluciones',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c9-p136',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c9-rd-camara-soluciones',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'En cambio, cuando el rango dinámico de la escena supera al de la cámara, tienes 4 alternativas:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c9-rd-camara-soluciones',
    blockType: 'list',
    payload: {
      items: [
        [
          t('1. Subexponer las sombras (crear una silueta): ', { bold: true }),
          t('Exponer para las altas luces del cielo y dejar el sujeto en negro puro a contraluz.'),
        ],
        [
          t('2. Sobreexponer las luces (clave alta): ', { bold: true }),
          t('Exponer para el sujeto en sombra asumiendo que el fondo brillante se quemará.'),
        ],
        [
          t('3. Utilizar filtros degradados (GND): ', { bold: true }),
          t('Oscurecer físicamente el cielo para comprimir el rango dinámico de la escena ('),
          t('sección 22', { internalChapterNumber: 22 }),
          t(').'),
        ],
        [
          t('4. Realizar un horquillado (Bracketing / HDR): ', { bold: true }),
          t('Tomar varias fotos a distinta exposición para cubrir los 15+ pasos y fusionarlas en edición ('),
          t('sección 23', { internalChapterNumber: 23 }),
          t(').'),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c9-rd-camara-soluciones',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c9-p135',
      layout: 'portrait',
    },
  },
  {
    sectionAnchor: 'c9-rd-camara-soluciones',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          '“¿Y cómo puedo saber yo en el campo si el rango dinámico de la escena cabe dentro del de mi cámara?” ',
          { italic: true }
        ),
        t('¡Muy fácil! Consultando el '),
        t('histograma', { bold: true }),
        t(', que analizaremos a fondo en el '),
        t('Capítulo 10', { internalChapterNumber: 10 }),
        t('.'),
      ],
    },
  },
  {
    sectionAnchor: 'c9-rd-camara-soluciones',
    blockType: 'sony_a7iv_note',
    payload: {
      title: 'Los ~15 Pasos de Rango Dinámico, RAW Sin Pérdida y D-Range Optimizer en la Sony Alpha 7 IV',
      summary:
        'Mientras que cámaras de generaciones anteriores tenían unos 10–12 pasos de rango dinámico, el sensor retroiluminado de 33 MP de tu Sony Alpha 7 IV alcanza cerca de 15 pasos reales a ISO 100:',
      bulletPoints: [
        'Dispara siempre en RAW (Compresión sin pérdida o Sin comprimir): Los archivos ARW de 14 bits de la Sony A7 IV te permiten recuperar enorme detalle en sombras sin levantar bandeado.',
        'Optimizador de Rango Dinámico (D-Range Optimizer / DRO): Si disparas en JPEG o HEIF, el modo [Optimizador de gama din.] analiza la escena en tiempo real y levanta las sombras conservando las altas luces.',
        'Medición Puntual vinculada al Punto de Enfoque: Para medir el rango dinámico como enseña este capítulo, configura en tu A7 IV [Punto de medición puntual] en [Vinc. punto enfoque] para medir exactamente donde sitúes el cuadro de AF.',
      ],
      manualUrl: 'https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654692.html',
      manualLabel: 'Manual Sony A7 IV — Optimizador de Rango Dinámico (DRO) y Formato RAW',
      cameraPath: 'MENU → Exposición/Color → Color/Tono → Optimizador de gama din. (DRO)',
    },
  },
];
