import type {
  BlockPayload,
  ChapterSummary,
  ExifMetadata,
  TextSegment,
} from '../core/types.ts';

export interface SeedBlockInput {
  sectionAnchor?: string;
  blockType:
    | 'heading'
    | 'paragraph'
    | 'list'
    | 'qa_item'
    | 'image_card'
    | 'image_pair'
    | 'callout_tip'
    | 'quote'
    | 'sony_a7iv_note';
  payload: BlockPayload;
}

export const BOOK_1_CHAPTERS: Omit<ChapterSummary, 'id' | 'moduleId' | 'isCompleted'>[] = [
  {
    slug: 'introduccion',
    chapterNumber: 0,
    title: 'Introducción',
    subtitle: 'El arte de dominar la luz y la historia que quieres contar',
    estimatedReadMin: 3,
    pdfPages: '8–9',
    isIngested: true,
  },
  {
    slug: 'cap-1-15-respuestas-rapidas',
    chapterNumber: 1,
    title: '15 respuestas rápidas a 15 preguntas sobre la exposición',
    subtitle: 'Síntesis esencial del triángulo de exposición, pasos de luz, EV, rango dinámico y filtros',
    estimatedReadMin: 8,
    pdfPages: '10–14',
    isIngested: true,
  },
  {
    slug: 'cap-2-todo-empieza-con-la-luz',
    chapterNumber: 2,
    title: 'Todo empieza con la luz',
    subtitle: 'Fotones, las 4 cualidades de la luz (intensidad, dirección, calidad, color) y luz incidente vs. reflejada',
    estimatedReadMin: 15,
    pdfPages: '15–36',
    isIngested: true,
  },
  {
    slug: 'cap-3-que-es-la-exposicion',
    chapterNumber: 3,
    title: '¿Qué es la exposición?',
    subtitle: 'El viaje de la luz hasta el sensor, exposición correcta vs. creativa, clave alta y clave baja',
    estimatedReadMin: 12,
    pdfPages: '37–55',
    isIngested: true,
  },
  {
    slug: 'cap-4-exposicion-al-servicio-de-tus-ideas',
    chapterNumber: 4,
    title: '¡Ojo! La exposición está al servicio de tus ideas (no al revés)',
    subtitle: 'Efectos creativos de apertura, velocidad e ISO y razonamiento fotográfico paso a paso',
    estimatedReadMin: 14,
    pdfPages: '56–71',
    isIngested: true,
  },
  {
    slug: 'cap-5-entendiendo-el-triangulo-de-exposicion',
    chapterNumber: 5,
    title: 'Entendiendo el triángulo de exposición',
    subtitle: 'Apertura (número f y focal), velocidad de obturación, sensibilidad ISO y la analogía del cubo y el grifo',
    estimatedReadMin: 18,
    pdfPages: '72–96',
    isIngested: true,
  },
  {
    slug: 'cap-6-concepto-paso-de-luz',
    chapterNumber: 6,
    title: 'El concepto de paso de luz y sus aplicaciones prácticas',
    subtitle: 'Escalas de pasos enteros y tercios de paso en apertura, velocidad e ISO',
    estimatedReadMin: 8,
    pdfPages: '97–102',
    isIngested: true,
  },
  {
    slug: 'cap-7-ley-de-reciprocidad',
    chapterNumber: 7,
    title: 'La ley de reciprocidad y ejemplos de aplicación',
    subtitle: 'Ajustes equivalentes, el triángulo de exposición avanzado y cálculo en fotografía nocturna y filtros',
    estimatedReadMin: 14,
    pdfPages: '103–119',
    isIngested: true,
  },
  {
    slug: 'cap-8-valor-de-exposicion-ev',
    chapterNumber: 8,
    title: 'Qué es el valor de exposición (EV) y para qué sirve',
    subtitle: 'Fórmula logarítmica del EV, tablas de condiciones de luz y ajuste EV en cámara',
    estimatedReadMin: 9,
    pdfPages: '120–126',
    isIngested: true,
  },
  {
    slug: 'cap-9-rango-dinamico',
    chapterNumber: 9,
    title: 'El rango dinámico de la escena frente al de tu cámara',
    subtitle: 'Cómo medir los pasos entre luces y sombras y qué hacer cuando la escena supera al sensor',
    estimatedReadMin: 11,
    pdfPages: '127–138',
    isIngested: true,
  },
  {
    slug: 'cap-10-revisa-el-histograma',
    chapterNumber: 10,
    title: 'Comprueba la exposición, revisa el histograma',
    subtitle: 'Interpretación estadística de sombras, medios tonos y altas luces',
    estimatedReadMin: 10,
    pdfPages: '139–171',
    isIngested: true,
  },
  {
    slug: 'cap-11-exposimetro-y-fotometro',
    chapterNumber: 11,
    title: 'Tus aliados (el exposímetro y el fotómetro de mano)',
    subtitle: 'Lectura de la escala de exposición interna y medición externa',
    estimatedReadMin: 8,
    pdfPages: '172–178',
    isIngested: true,
  },
  {
    slug: 'cap-12-modos-de-medicion',
    chapterNumber: 12,
    title: 'Los modos de medición de la luz de tu cámara',
    subtitle: 'Matricial/Multi, Ponderada al centro y Puntual: cuándo elegir cada uno',
    estimatedReadMin: 10,
    pdfPages: '179–191',
    isIngested: true,
  },
  {
    slug: 'cap-13-modos-de-exposicion',
    chapterNumber: 13,
    title: 'Los modos de exposición de tu cámara',
    subtitle: 'Modos Automático (P), Prioridad a la Apertura (A), Prioridad a la Velocidad (S) y Manual (M)',
    estimatedReadMin: 10,
    pdfPages: '192–225',
    isIngested: true,
  },
  {
    slug: 'cap-14-compensar-exposicion-ev',
    chapterNumber: 14,
    title: 'Cómo y cuándo compensar la exposición (±EV)',
    subtitle: 'Dominio del dial de compensación en modos semiautomáticos y Manual con Auto ISO',
    estimatedReadMin: 9,
    pdfPages: '226–232',
    isIngested: true,
  },
  {
    slug: 'cap-15-bloquear-exposicion-ael',
    chapterNumber: 15,
    title: 'Cómo y cuándo bloquear la exposición (AEL o AE-L)',
    subtitle: 'Técnica de medición y reencuadre con el botón AEL',
    estimatedReadMin: 8,
    pdfPages: '233–238',
    isIngested: true,
  },
  {
    slug: 'cap-16-gris-18-por-ciento',
    chapterNumber: 16,
    title: 'Ten cuidado con el exposímetro (lo ve todo en gris al 18%)',
    subtitle: 'Por qué la nieve sale gris y el carbón lavado, y cómo corregirlo',
    estimatedReadMin: 9,
    pdfPages: '239–246',
    isIngested: true,
  },
  {
    slug: 'cap-17-derecheo-del-histograma-ettr',
    chapterNumber: 17,
    title: 'Exponer buscando el derecheo del histograma (ETTR)',
    subtitle: 'Maximizar la relación señal/ruido en archivos RAW sin quemar las altas luces',
    estimatedReadMin: 12,
    pdfPages: '247–268',
    isIngested: true,
  },
  {
    slug: 'cap-18-como-exponer-paso-a-paso',
    chapterNumber: 18,
    title: 'Cómo exponer paso a paso',
    subtitle: 'Flujo de trabajo completo de principio a fin en campo',
    estimatedReadMin: 12,
    pdfPages: '269–292',
    isIngested: true,
  },
  {
    slug: 'cap-19-reglas-sunny-16-looney-11',
    chapterNumber: 19,
    title: 'Cómo exponer sin exposímetro: las reglas “Sunny f/16” y “Looney f/11”',
    subtitle: 'Estimación manual de exposición diurna y lunar',
    estimatedReadMin: 8,
    pdfPages: '293–295',
    isIngested: true,
  },
  {
    slug: 'cap-20-sistema-de-zonas-ansel-adams',
    chapterNumber: 20,
    title: 'Cómo exponer con el sistema de zonas de Ansel Adams',
    subtitle: 'Las 11 zonas tonales aplicadas a la fotografía digital moderna',
    estimatedReadMin: 14,
    pdfPages: '296–304',
    isIngested: true,
  },
  {
    slug: 'cap-21-como-exponer-un-video',
    chapterNumber: 21,
    title: 'Cómo exponer un vídeo',
    subtitle: 'Regla de los 180 grados, frame rate, cebras y filtros ND en vídeo',
    estimatedReadMin: 10,
    pdfPages: '305–310',
    isIngested: true,
  },
  {
    slug: 'cap-22-alto-contraste-con-filtros',
    chapterNumber: 22,
    title: 'Captura con éxito imágenes de alto contraste con filtros',
    subtitle: 'Filtros ND, GND (degradados suaves, duros e inversos) y polarizador (CPL)',
    estimatedReadMin: 15,
    pdfPages: '311–351',
    isIngested: true,
  },
  {
    slug: 'cap-23-alto-contraste-con-horquillado',
    chapterNumber: 23,
    title: 'Captura con éxito imágenes de alto contraste con un horquillado',
    subtitle: 'Bracketing de exposición (AEB) y fusión HDR para rango dinámico extremo',
    estimatedReadMin: 12,
    pdfPages: '352–358',
    isIngested: true,
  },
  {
    slug: 'cap-24-30-ejemplos-practicos',
    chapterNumber: 24,
    title: '30 ejemplos prácticos de exposición',
    subtitle: 'Casos reales analizados: Vía Láctea, Luna, retrato, paisaje, tormentas y larga exposición',
    estimatedReadMin: 25,
    pdfPages: '359–446',
    isIngested: true,
  },
  {
    slug: 'cap-25-12-errores-al-exponer',
    chapterNumber: 25,
    title: 'Los 12 errores que debes evitar al exponer',
    subtitle: 'Fallas habituales en campo y cómo prevenirlas',
    estimatedReadMin: 10,
    pdfPages: '447–454',
    isIngested: true,
  },
  {
    slug: 'cap-26-10-fotografos-para-inspirarte',
    chapterNumber: 26,
    title: '10 fotógrafos alucinantes para inspirarte y aprender a exponer',
    subtitle: 'Referentes visuales y análisis de su dominio de la luz',
    estimatedReadMin: 8,
    pdfPages: '455–460',
    isIngested: true,
  },
  {
    slug: 'cap-27-ha-llegado-tu-momento',
    chapterNumber: 27,
    title: 'Ha llegado tu momento...',
    subtitle: 'Reflexión final y puesta en práctica',
    estimatedReadMin: 4,
    pdfPages: '461–465',
    isIngested: true,
  },
];

export const BOOK_1_ASSETS: (ExifMetadata & { chapterNumber: number })[] = [
  {
    id: 'b1-intro-p08',
    chapterNumber: 0,
    filePath: '/images/book-1/intro/p08-hvitserkur.jpg',
    altText: 'Formación rocosa Hvítserkur en Islandia reflejada en el agua con un fotógrafo caminando en la lengua de arena',
    caption: 'Hvítserkur, la roca dragón en Islandia. Dominar la exposición te permite transmitir exactamente la atmósfera que imaginas.',
    cameraModel: 'Nikon D4s',
    lensFocal: '14mm',
    aperture: 'f/10',
    shutterSpeed: '1/80s',
    iso: '100',
    kelvin: '7500K',
  },
  {
    id: 'b1-c2-p16',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p16-rayos-sol.jpg',
    altText: 'Rayos crepusculares de sol atravesando las nubes sobre la costa y el campo',
    caption: 'La luz es el alma de la fotografía. Rayos solares atravesando las nubes al atardecer.',
    cameraModel: 'Nikon D4s',
    lensFocal: '200mm macro',
    aperture: 'f/4',
    shutterSpeed: '1/200s',
    iso: '100',
    kelvin: '7900K',
  },
  {
    id: 'b1-c2-p18',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p18-luz-intensa.png',
    altText: 'Retrato en blanco y negro de una niña iluminada por una luz muy intensa con sombras oscuras y marcadas',
    caption: 'Luz muy intensa: ilumina fuertemente al sujeto y genera sombras muy oscuras y marcadas.',
    cameraModel: 'Nikon D700',
    lensFocal: '85mm',
    aperture: 'f/8',
    shutterSpeed: '1/125s',
    iso: '200',
    kelvin: '6250K',
  },
  {
    id: 'b1-c2-p19',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p19-luz-tenue.png',
    altText: 'Retrato en blanco y negro de una niña mirando un álbum con luz suave y tenue',
    caption: 'Luz poco intensa (tenue): el sujeto aparece menos iluminado, pero con sombras más suaves y menos profundas.',
    cameraModel: 'Nikon D700',
    lensFocal: '85mm',
    aperture: 'f/11',
    shutterSpeed: '1/125s',
    iso: '200',
    kelvin: '5500K',
  },
  {
    id: 'b1-c2-p20',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p20-fotometro-sekonic.jpg',
    altText: 'Fotómetro de mano externo Sekonic mostrando f/5.6 en su pantalla LCD',
    caption: 'Fotómetro de mano externo Sekonic con calota difusora blanca para medir la intensidad de la luz.',
  },
  {
    id: 'b1-c2-p21',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p21-costa-puesta-sol.jpg',
    altText: 'Paisaje costero rocoso con arco natural durante la puesta de sol con efecto seda en el mar',
    caption: 'Control de la intensidad de luz en exteriores eligiendo el momento del día (puesta de Sol y hora dorada).',
    cameraModel: 'Nikon D700',
    lensFocal: '14mm',
    aperture: 'f/13',
    shutterSpeed: '20s',
    iso: '100',
    kelvin: '5399K',
  },
  {
    id: 'b1-c2-p22',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p22-sesion-exterior-flash.jpg',
    altText: 'Sesión fotográfica en costa exterior utilizando un flash de estudio con ventana difusora octogonal',
    caption: 'Uso de elementos activos (flash) y pasivos (ventana difusora) en exterior para modificar la luz.',
    cameraModel: 'Nikon D700',
    lensFocal: '85mm',
    aperture: 'f/5.6',
    shutterSpeed: '1/500s',
    iso: '200',
    kelvin: '7050K',
  },
  {
    id: 'b1-c2-p23',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p23-luz-frontal.jpg',
    altText: 'Retrato femenino en exterior con iluminación frontal uniforme',
    caption: 'Luz frontal: ilumina todas las superficies visibles, resalta el color pero elimina sombras y resta volumen.',
    cameraModel: 'Nikon D700',
    lensFocal: '85mm',
    aperture: 'f/8',
    shutterSpeed: '1/80s',
    iso: '200',
    kelvin: '5500K',
  },
  {
    id: 'b1-c2-p24',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p24-circumpolar-lateral.jpg',
    altText: 'Fotografía nocturna de rastros de estrellas circumpolares con rocas en primer plano iluminadas lateralmente',
    caption: 'Luz lateral nocturna proporcionada por una Luna baja para esculpir volumen y textura en las rocas del primer plano.',
    cameraModel: 'Nikon D4s',
    lensFocal: '20mm',
    aperture: 'f/4',
    shutterSpeed: '1h 24min',
    iso: '1600',
    kelvin: '4000K',
    extraNotes: '168 fotos editadas en Lightroom y apiladas con StarStaX',
  },
  {
    id: 'b1-c2-p25',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p25-contraluz-costa.jpg',
    altText: 'Joven sentada sobre una roca en la costa con el sol poniéndose exactamente detrás de ella',
    caption: 'Contraluz: la fuente de luz proviene de detrás del sujeto, perfilando su figura y creando una atmósfera cálida.',
    cameraModel: 'Nikon D4s',
    lensFocal: '35mm',
    aperture: 'f/2.8',
    shutterSpeed: '1/1250s',
    iso: '100',
    kelvin: '7000K',
  },
  {
    id: 'b1-c2-p26',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p26-polaroid-cenital.png',
    altText: 'Cámara clásica Polaroid Land Camera OneStep en blanco y negro con iluminación cenital superior',
    caption: 'Luz cenital: punto de luz situado verticalmente encima del sujeto.',
    cameraModel: 'Olympus OM-D E-M1',
    lensFocal: '60mm macro',
    aperture: 'f/2.8',
    shutterSpeed: '1/8s',
    iso: '200',
    kelvin: '5500K',
  },
  {
    id: 'b1-c2-p27',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p27-matrix-nadir.jpg',
    altText: 'Retrato nocturno creativo estilo Matrix con luz contracenital o nadir proveniente desde abajo',
    caption: 'Luz contracenital o nadir: proviene desde abajo, ideal para retratos arriesgados y dramáticos.',
    cameraModel: 'Nikon D4s',
    lensFocal: '85mm',
    aperture: 'f/2.8',
    shutterSpeed: '48s',
    iso: '100',
    kelvin: '5100K',
  },
  {
    id: 'b1-c2-p28',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p28-olivos-luz-dura.jpg',
    altText: 'Campo de olivos en blanco y negro bajo luz dura del mediodía con alto contraste',
    caption: 'Luz dura: transición pronunciada y repentina entre luces y sombras.',
    cameraModel: 'Nikon D700',
    lensFocal: '85mm',
    aperture: 'f/2',
    shutterSpeed: '1/1500s',
    iso: '200',
    kelvin: '5700K',
  },
  {
    id: 'b1-c2-p29',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p29-pelota-tenis-sombra.jpg',
    altText: 'Pelota de tenis proyectando una sombra dura con bordes nítidos y bien definidos',
    caption: 'Efecto de una fuente de luz puntual/dura: la sombra proyectada presenta bordes netos y alto contraste.',
  },
  {
    id: 'b1-c2-p30',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p30-retrato-luz-suave.jpg',
    altText: 'Retrato femenino de primer plano con luz difuminada y suave sin sombras marcadas',
    caption: 'Luz suave: transición progresiva entre luces y sombras que suaviza las texturas y transmite serenidad.',
    cameraModel: 'Nikon D300',
    lensFocal: '85mm',
    aperture: 'f/1.4',
    shutterSpeed: '1/350s',
    iso: '200',
    kelvin: '5700K',
  },
  {
    id: 'b1-c2-p31-plan',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p31-app-planificador.png',
    altText: 'Captura de la herramienta Planificador de PhotoPills mostrando horarios de hora dorada y hora azul',
    caption: 'PhotoPills — Herramienta Planificador con horarios de hora azul y hora dorada.',
  },
  {
    id: 'b1-c2-p31-sol',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p31-app-sol.png',
    altText: 'Captura de la herramienta Sol de PhotoPills con horas exactas de crepúsculos y hora dorada',
    caption: 'PhotoPills — Herramienta información Sol con detalle de crepúsculos.',
  },
  {
    id: 'b1-c2-p32',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p32-playa-negra-color.jpg',
    altText: 'Paisaje de playa volcánica negra en Islandia con matices dorados sobre la vegetación al amanecer',
    caption: '“La luz es color” — Cuando la luz interactúa con la materia y se refleja hacia la cámara, percibimos su dominancia cromática.',
    cameraModel: 'Nikon D4s',
    lensFocal: '14mm',
    aperture: 'f/11',
    shutterSpeed: '0.4s',
    iso: '100',
    kelvin: '7000K',
  },
  {
    id: 'b1-c2-p33',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p33-sol-faro-calido.jpg',
    altText: 'Sol gigante poniéndose detrás de un faro lejano con intensa dominante cálida naranja y roja',
    caption: 'Dominancia de colores cálidos (amarillo, naranja, rojo) capturada con teleobjetivo extremo.',
    cameraModel: 'Nikon D300',
    lensFocal: '500mm',
    aperture: 'f/6.7',
    shutterSpeed: '1/1500s',
    iso: '200',
    kelvin: '7500K',
    extraNotes: 'Apertura en escala de 1/2 paso',
  },
  {
    id: 'b1-c2-p34',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p34-hielo-frio.jpg',
    altText: 'Bloques de hielo glacial azulado en la orilla del mar bajo tonos fríos púrpuras y azules',
    caption: 'Dominancia de colores fríos (púrpura, azul, verde) en paisaje polar costero.',
    cameraModel: 'Nikon D4s',
    lensFocal: '24mm',
    aperture: 'f/11',
    shutterSpeed: '1s',
    iso: '100',
    kelvin: '7500K',
  },
  {
    id: 'b1-c2-p36',
    chapterNumber: 2,
    filePath: '/images/book-1/cap-2/p36-esquema-incidente-reflejada.jpg',
    altText: 'Esquema comparativo entre medición de luz reflejada desde la cámara y medición de luz incidente junto al sujeto',
    caption: 'Medición de la luz reflejada (con el exposímetro integrado en la cámara) frente a la luz incidente (con fotómetro de mano junto al sujeto).',
  },
];

// Helper to create simple text segments
const t = (text: string, opts?: Omit<TextSegment, 'text'>): TextSegment => ({
  text,
  ...opts,
});

export const INTRO_BLOCKS: SeedBlockInput[] = [
  {
    sectionAnchor: 'intro-bienvenida',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-intro-p08',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'intro-bienvenida',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'Introducción',
      anchor: 'intro-bienvenida',
    },
  },
  {
    sectionAnchor: 'intro-bienvenida',
    blockType: 'paragraph',
    payload: {
      segments: [t('Admitámoslo.')],
    },
  },
  {
    sectionAnchor: 'intro-bienvenida',
    blockType: 'paragraph',
    payload: {
      segments: [t('El mundo se divide en dos categorías.')],
    },
  },
  {
    sectionAnchor: 'intro-bienvenida',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Los que saben exponer correctamente sus fotografías sin importar la escena a la que se enfrenten... y los que no.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'intro-bienvenida',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('Si perteneces a la primera categoría, ¡felicidades! Eres un genio y poco puedo hacer por ti.'),
      ],
    },
  },
  {
    sectionAnchor: 'intro-bienvenida',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Pero si eres como el resto de los mortales y quieres aprender cómo exponer fácilmente tus fotografías en infinidad de situaciones diferentes, ¡estás en el lugar adecuado!'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'intro-bienvenida',
    blockType: 'paragraph',
    payload: {
      segments: [t('Sigue leyendo.')],
    },
  },
  {
    sectionAnchor: 'intro-bienvenida',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'No sólo aprenderás a exponer fotografías de retrato, Vía Láctea, rastros de estrellas, fauna salvaje, viajes, blanco y negro, paisaje, larga exposición, Luna, salidas y puestas de Sol, de calle, light painting, macro, eclipses, barridos...'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'intro-dominar-camara',
    blockType: 'heading',
    payload: {
      level: 3,
      text: 'Dominar tu cámara y tu visión fotográfica',
      anchor: 'intro-dominar-camara',
    },
  },
  {
    sectionAnchor: 'intro-dominar-camara',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'También llegarás a dominar tu cámara de tal forma que podrás hacer realidad esas fotografías con las que sueñas, tanto desde el punto de vista de la historia que quieres contar como de la exposición.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'intro-dominar-camara',
    blockType: 'paragraph',
    payload: {
      segments: [t('Para lograrlo, te daré todo lo que necesitas.')],
    },
  },
  {
    sectionAnchor: 'intro-dominar-camara',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Los conceptos básicos (la luz, el triángulo de exposición, la ley de reciprocidad, los modos de exposición, los modos de medición de la luz, y mucho más), herramientas como '
        ),
        t('PhotoPills', { linkUrl: 'https://www.photopills.com/es' }),
        t(
          ' que te ayudarán con los cálculos de exposición, multitud de ejemplos prácticos, los errores típicos a evitar... E incluso las técnicas más avanzadas como la utilización de filtros y el horquillado.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'intro-dominar-camara',
    blockType: 'paragraph',
    payload: {
      segments: [t('¿Listo? Bienvenido al maravilloso mundo de la exposición.')],
    },
  },
  {
    sectionAnchor: 'intro-dominar-camara',
    blockType: 'quote',
    payload: {
      quote:
        'La exposición no trata tanto de hacer girar mandos y apretar botones, como de dominar la luz y saber lo que quieres de una imagen.',
      author: 'Michael Freeman',
      source: 'La exposición perfecta',
    },
  },
  {
    sectionAnchor: 'intro-dominar-camara',
    blockType: 'sony_a7iv_note',
    payload: {
      title: 'Tu Sony Alpha 7 IV (ILCE-7M4) como laboratorio de exposición',
      summary:
        'A lo largo de este módulo aplicaremos cada principio teórico de este libro directamente a la arquitectura sin espejo de tu Sony Alpha 7 IV.',
      bulletPoints: [
        'Sensor Full-Frame Exmor R CMOS retroiluminado de 33 MP con hasta 15 pasos de rango dinámico en archivos RAW.',
        'Previsualización de exposición en tiempo real en el visor OLED Quad-VGA y pantalla LCD mediante la función Live View Display (Visualización en directo).',
        'Diales físicos dedicados para Apertura, Velocidad de Obturación y Compensación de Exposición (±EV) personalizables.',
      ],
      manualUrl: 'https://helpguide.sony.net/ilc/2110/v1/es/index.html',
      manualLabel: 'Guía de ayuda oficial Sony Alpha 7 IV (ILCE-7M4)',
      cameraPath: 'MENU → Ajuste → Operación → Visualiz. en directo (Efecto de ajuste activado)',
    },
  },
];

export const CHAPTER_1_BLOCKS: SeedBlockInput[] = [
  {
    sectionAnchor: 'c1-intro',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'Preguntas fundamentales antes de entrar en materia',
      anchor: 'c1-intro',
    },
  },
  {
    sectionAnchor: 'c1-intro',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('Como ya hice en la '),
        t('guía sobre la profundidad de campo', {
          linkUrl: 'https://www.photopills.com/es/articulos/guia-profundidad-de-campo',
        }),
        t(
          ' y antes de entrar de lleno en materia, déjame avanzarte de forma resumida las respuestas a las principales preguntas sobre la exposición. ¡Vamos allá!'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c1-q1-q5',
    blockType: 'heading',
    payload: {
      level: 3,
      text: '1–5: Exposición y los tres pilares del triángulo',
      anchor: 'c1-q1-q5',
    },
  },
  {
    sectionAnchor: 'c1-q1-q5',
    blockType: 'qa_item',
    payload: {
      questionNumber: 1,
      question: '¿Qué es la exposición?',
      answerParagraphs: [
        [
          t(
            'Es la cantidad de luz que llega a un material fotosensible (es decir la película o el sensor de tu cámara) para crear una imagen.'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q1-q5',
    blockType: 'qa_item',
    payload: {
      questionNumber: 2,
      question: '¿Por qué me debería interesar?',
      answerParagraphs: [
        [
          t(
            'El dominio de la exposición te dará el control creativo sobre lo que aparece iluminado y lo que no en tus imágenes, permitiéndote contar la historia cómo tú quieras.'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q1-q5',
    blockType: 'qa_item',
    payload: {
      questionNumber: 3,
      question: '¿Qué influye en la exposición?',
      answerParagraphs: [
        [
          t('Tres parámetros influyen sobre la exposición: la '),
          t('apertura', { bold: true }),
          t(', la '),
          t('velocidad (o tiempo de exposición)', { bold: true }),
          t(' y la '),
          t('sensibilidad (o ISO)', { bold: true }),
          t('. Es lo que se llama el '),
          t('triángulo de exposición', { bold: true }),
          t('.'),
        ],
        [t('Dominando estos tres parámetros, dominarás la exposición.')],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q1-q5',
    blockType: 'qa_item',
    payload: {
      questionNumber: 4,
      question: '¿Qué es la apertura?',
      answerParagraphs: [
        [
          t(
            'La apertura del diafragma (orificio por el que pasa la luz a través del objetivo) regula la cantidad de luz que pasa a través de tu objetivo hasta el sensor de la cámara.'
          ),
        ],
        [t('A mayor apertura del diafragma más cantidad de luz recogerá el sensor.')],
        [
          t(
            'Además de la exposición, la apertura que utilices también va a influir en la profundidad de campo. Por lo que deberás elegir su valor no sólo pensando en la exposición, sino también en la '
          ),
          t('profundidad de campo', {
            linkUrl: 'https://www.photopills.com/es/articulos/guia-profundidad-de-campo',
          }),
          t(' que desees obtener en la foto.'),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q1-q5',
    blockType: 'qa_item',
    payload: {
      questionNumber: 5,
      question: '¿Qué es la velocidad de obturación (o tiempo de exposición)?',
      answerParagraphs: [
        [
          t(
            'El obturador es una especie de cortina que se encuentra en tu cámara. Te permite dejar pasar luz hasta el sensor durante un determinado periodo de tiempo. Ese periodo de tiempo en que el obturador está abierto es la velocidad de obturación.'
          ),
        ],
        [t('A más tiempo de exposición más cantidad de luz recogerá el sensor.')],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q6-q10',
    blockType: 'heading',
    payload: {
      level: 3,
      text: '6–10: Sensibilidad ISO, pasos de luz, EV y rango dinámico',
      anchor: 'c1-q6-q10',
    },
  },
  {
    sectionAnchor: 'c1-q6-q10',
    blockType: 'qa_item',
    payload: {
      questionNumber: 6,
      question: '¿Qué es la sensibilidad (o ISO)?',
      answerParagraphs: [
        [
          t(
            'La sensibilidad (o ISO) es un parámetro que te permite indicar al sensor cuánto tiene que amplificar la señal que recibe. Cuanto más alto es el ISO, más se amplificará la señal y por lo tanto, más luz parecerá que ha captado el sensor. La foto será más brillante.'
          ),
        ],
        [
          t('Por lo tanto, cuando lees en internet que '),
          t('“cuanto más alto es el ISO más luz captura el sensor”', { italic: true }),
          t(
            ', no se está refiriendo a la cantidad de luz que captura, sino a la amplificación de la señal de ésta. Por eso, cuando la señal se amplifica demasiado (ISOs altos), aparece ruido en la foto.'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q6-q10',
    blockType: 'qa_item',
    payload: {
      questionNumber: 7,
      question: '¿Dónde puedo encontrar una calculadora de exposición?',
      answerParagraphs: [
        [
          t('Lo mejor es que le eches una ojeada a '),
          t('PhotoPills', { linkUrl: 'https://www.photopills.com/es' }),
          t(
            '. No sólo incluye una calculadora de exposición súper completa sino muchas herramientas más que te ayudarán a planificar tus fotos para estar siempre en el lugar adecuado, en el momento adecuado para capturar la escena que has imaginado. Se trata de convertir tus ideas en fotos reales. :P'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q6-q10',
    blockType: 'qa_item',
    payload: {
      questionNumber: 8,
      question: '¿Qué es un paso de luz?',
      answerParagraphs: [
        [
          t(
            'Un paso de luz es una medida relativa de la cantidad de luz que llega al sensor. Imagina que llega una cantidad '
          ),
          t('x', { code: true }),
          t(' de luz al sensor. Si al hacer la siguiente foto, llega una cantidad '),
          t('2x', { code: true }),
          t(
            ' de luz, quiere decir que has incrementado la exposición en 1 paso de luz. Al contrario, si llega la mitad de luz ('
          ),
          t('x/2', { code: true }),
          t(') la exposición de tu foto ha disminuido en 1 paso de luz.'),
        ],
        [
          t(
            'Al variar los parámetros del triángulo de exposición, variará la luz que llega al sensor en un número determinado (o fracciones) de pasos de luz.'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q6-q10',
    blockType: 'qa_item',
    payload: {
      questionNumber: 9,
      question: '¿Qué es el valor de exposición (EV)?',
      answerParagraphs: [
        [
          t('El valor de exposición (en inglés '),
          t('exposure value', { italic: true }),
          t(' o '),
          t('EV', { code: true }),
          t(') es una combinación de diafragma (el número '),
          t('f', { code: true }),
          t(
            '), velocidad de obturación e ISO. Indica una determinada cantidad de luz que llega al sensor.'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q6-q10',
    blockType: 'qa_item',
    payload: {
      questionNumber: 10,
      question: '¿Qué es el rango dinámico?',
      answerParagraphs: [
        [
          t('El rango dinámico (del inglés '),
          t('dynamic range', { italic: true }),
          t(') se mide en pasos o en valores de exposición ('),
          t('EV', { code: true }),
          t(
            '). Establece la relación de intensidad de luz que existe entre las sombras más oscuras y las luces más altas.'
          ),
        ],
        [
          t(
            'Por tanto, una cámara con un gran rango dinámico es capaz de registrar simultáneamente (en la misma imagen) el detalle en zonas de la escena muy oscuras y en otras más iluminadas.'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q11-q15',
    blockType: 'heading',
    payload: {
      level: 3,
      text: '11–15: Histograma, compensación ±EV y técnicas creativas',
      anchor: 'c1-q11-q15',
    },
  },
  {
    sectionAnchor: 'c1-q11-q15',
    blockType: 'qa_item',
    payload: {
      questionNumber: 11,
      question: '¿Qué es el histograma y para qué sirve?',
      answerParagraphs: [
        [
          t(
            'El histograma es un gráfico estadístico. Es muy útil porque te da información sobre el rango de tonos o niveles de luminosidad (cuán oscuro o claro es un color) presentes en tu imagen.'
          ),
        ],
        [
          t(
            'Con la ayuda del histograma podrás saber si la foto está “correctamente” expuesta o no.'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q11-q15',
    blockType: 'qa_item',
    payload: {
      questionNumber: 12,
      question: '¿Qué es la compensación de exposición (±EV)?',
      answerParagraphs: [
        [
          t('Es un control, medido en pasos o valores de exposición ('),
          t('EV', { code: true }),
          t(
            '), que aclara u oscurece la fotografía dependiendo de si lo haces positiva o negativamente. Si usas valores positivos aclaras la imagen (la sobreexpones). A la inversa, si usas valores negativos la oscureces (la subexpones).'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q11-q15',
    blockType: 'qa_item',
    payload: {
      questionNumber: 13,
      question: '¿Cuál es la exposición correcta de una imagen?',
      answerParagraphs: [
        [
          t(
            '¡Depende! Establecer una exposición “correcta” es algo totalmente subjetivo. Puede que una fotografía tenga una exposición correcta para ti y no lo sea para otro fotógrafo. Lo importante es que consideres una exposición como correcta si consigues el efecto que deseas transmitir o el resultado que tienes en mente.'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q11-q15',
    blockType: 'qa_item',
    payload: {
      questionNumber: 14,
      question: '¿Qué es la profundidad de campo?',
      answerParagraphs: [
        [
          t(
            'La profundidad de campo (PdC) es la distancia entre el elemento más cercano y lejano de una escena que aparecen “aceptablemente enfocados” en la imagen. Si quieres leer más al respecto, échale un vistazo a la '
          ),
          t('guía definitiva sobre la profundidad de campo', {
            linkUrl: 'https://www.photopills.com/es/articulos/guia-profundidad-de-campo',
          }),
          t('.'),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q11-q15',
    blockType: 'qa_item',
    payload: {
      questionNumber: 15,
      question: '¿Qué es la fotografía de larga exposición?',
      answerParagraphs: [
        [
          t(
            'Es una técnica que consiste en dejar abierto el obturador durante un periodo de tiempo relativamente largo. Con ello obtienes sorprendentes resultados como estelas de luces de coches, personas fantasmagóricas o una foto de la costa consiguiendo el efecto seda en el agua.'
          ),
        ],
        [
          t('En la '),
          t('sección 22', { internalChapterNumber: 22 }),
          t(
            ' descubrirás cómo hacer fotografías de larga exposición con la ayuda de filtros. También aprenderás a utilizar la calculadora de exposición de '
          ),
          t('PhotoPills', { linkUrl: 'https://www.photopills.com/es' }),
          t(
            ' para determinar el tiempo de exposición que necesitas al utilizar un filtro. Pero no corramos, empecemos por el principio...'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c1-q11-q15',
    blockType: 'sony_a7iv_note',
    payload: {
      title: 'Controles rápidos de los 15 conceptos en la Sony Alpha 7 IV',
      summary:
        'Cómo localizar rápidamente en el cuerpo de tu Sony Alpha 7 IV las herramientas mencionadas en estas 15 respuestas rápidas:',
      bulletPoints: [
        'Apertura (f/) y Velocidad: Por defecto asignadas a los diales delantero y trasero en modo Manual (M).',
        'Sensibilidad ISO: Accesible presionando el lado derecho de la rueda de control trasera (ISO) o en el menú Fn.',
        'Pasos de luz: La Sony A7 IV trabaja por defecto en incrementos de 1/3 de paso EV (ajustable a 1/3 o 1/2 EV).',
        'Histograma en vivo: Pulsa el botón DISP (arriba en la rueda trasera) varias veces hasta activar el gráfico de Histograma en el visor/pantalla.',
        'Compensación de exposición (±EV): El dial superior derecho sin marcas tiene un botón central de bloqueo y puede configurarse como dial de compensación de exposición.',
      ],
      manualUrl: 'https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654657.html',
      manualLabel: 'Manual Sony A7 IV — Ajustes de Exposición y Modo de Disparo',
      cameraPath: 'MENU → Exposición/Color → Exposición → Paso de ajuste de exposición (0,3 EV / 0,5 EV)',
    },
  },
];

export const CHAPTER_2_BLOCKS: SeedBlockInput[] = [
  {
    sectionAnchor: 'c2-que-es-la-luz',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p16',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c2-que-es-la-luz',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('La luz es el alma de la fotografía. Sin luz no hay foto.', { bold: true }),
      ],
    },
  },
  {
    sectionAnchor: 'c2-que-es-la-luz',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'De modo que si quieres hacer fotografías verdaderamente legendarias, debes dominar la luz (natural y artificial).'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-que-es-la-luz',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Sin el adecuado conocimiento de la luz, no puedes exponer correctamente, ni crear el efecto deseado y, por tanto, tampoco eres capaz de hacer esa foto que tanto buscas.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-que-es-la-luz',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'En definitiva, aprender las cualidades de la luz (intensidad, dirección, calidad y color), así como la diferencia entre luz incidente y reflejada, te proporciona una sólida base para poder coger tu equipo, exponer y sacar el mayor provecho posible de las diferentes escenas a las que te enfrentes. ¡A por ello!'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-que-es-la-luz',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'Qué es la luz y qué es un fotón',
      anchor: 'c2-que-es-la-luz',
    },
  },
  {
    sectionAnchor: 'c2-que-es-la-luz',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Pidiendo perdón a todos los físicos de la sala e intentando simplificar al máximo, me atrevo a decir que la luz es la parte visible de la radiación electromagnética que genera una determinada fuente de energía (el Sol, una linterna, una bombilla de LED, un flash, un fuego, etc.).'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-que-es-la-luz',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('La forman unas partículas elementales denominadas '),
        t('fotones', {
          bold: true,
          linkUrl: 'https://es.wikipedia.org/wiki/Fot%C3%B3n',
        }),
        t('.'),
      ],
    },
  },
  {
    sectionAnchor: 'c2-que-es-la-luz',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('¿Y qué es un fotón? ', { bold: true }),
        t(
          'Pues está claro, ¿no? Una foto que te deja con la boca abierta. XD ¡Es broma! Un fotón es una partícula desprovista de masa que porta todas las formas de radiación electromagnética, incluyendo los rayos gamma, los rayos X, la luz ultravioleta, la luz visible, la luz infrarroja, las microondas e incluso las ondas de radio. Pero para que nos entendamos, un fotón es una partícula diminuta. El conjunto de muchísimas de ellas conforman la luz.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-cualidades-luz',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'Las cuatro cualidades de la luz',
      anchor: 'c2-cualidades-luz',
    },
  },
  {
    sectionAnchor: 'c2-cualidades-luz',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'La luz es la materia prima, el ingrediente esencial. Dependiendo de cómo la utilices, obtienes un resultado u otro, expresando de diferentes maneras lo que viste o sucedió. Y no me refiero sólo a la luz natural sino también a cualquier tipo de luz artificial.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-cualidades-luz',
    blockType: 'list',
    payload: {
      items: [
        [t('Intensidad: ', { bold: true }), t('alta o baja.')],
        [t('Dirección: ', { bold: true }), t('frontal, lateral, trasera (contraluz), cenital o nadir.')],
        [t('Calidad: ', { bold: true }), t('dura o suave.')],
        [t('Color: ', { bold: true }), t('cálida o fría.')],
      ],
    },
  },
  {
    sectionAnchor: 'c2-intensidad',
    blockType: 'heading',
    payload: {
      level: 3,
      text: '1. La intensidad de la luz',
      anchor: 'c2-intensidad',
    },
  },
  {
    sectionAnchor: 'c2-intensidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'La intensidad es la cantidad de luz que incide (o cae) sobre un sujeto. Determina en qué medida el sujeto está iluminado.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-intensidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Si la luz es muy intensa, ilumina mucho al sujeto y las sombras aparecen muy marcadas (muy oscuras).'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-intensidad',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p18',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c2-intensidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'En cambio, si es poco intensa (o tenue), el sujeto aparece más oscuro, menos iluminado, pero las sombras aparecen menos oscuras, menos duras.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-intensidad',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p19',
      layout: 'portrait',
    },
  },
  {
    sectionAnchor: 'c2-intensidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Dependiendo de la intensidad de luz que hay en la escena y de la(s) zona(s) que quieres resaltar, debes configurar los ajustes de tu cámara de una forma u otra al exponer tus fotografías para dejar pasar la cantidad de luz que quieras hasta el sensor.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-intensidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('¿Y cómo se mide la luz? ', { bold: true }),
        t(
          'Se mide con un fotómetro. Ya sea interno (dentro de la cámara) o externo. En la '
        ),
        t('sección 18', { internalChapterNumber: 18 }),
        t(' te explicaré con todo lujo de detalles cómo y dónde medir la luz con tu cámara.'),
      ],
    },
  },
  {
    sectionAnchor: 'c2-intensidad',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p20',
      layout: 'portrait',
    },
  },
  {
    sectionAnchor: 'c2-intensidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('¿Se puede controlar la intensidad de luz? Sí. ', { bold: true }),
        t(
          'Por ejemplo, cuando fotografías en exteriores, eligiendo el momento del día en que la luz sea menos intensa ('
        ),
        t('hora dorada, hora azul y crepúsculos', {
          linkUrl: 'https://www.photopills.com/es/articulos/entendiendo-la-hora-dorada-la-hora-azul-y-los-crepusculos',
        }),
        t(') o más intensa (resto de horas del día).'),
      ],
    },
  },
  {
    sectionAnchor: 'c2-intensidad',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p21',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c2-intensidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'O, tanto en exterior como en estudio, utilizando diferentes técnicas y aparatos de iluminación o reductores de luz. Por ejemplo, el flash, la linterna y los paneles LED son '
        ),
        t('elementos activos', { bold: true }),
        t(
          ' que producen luz por sí solos y se utilizan para añadir luminosidad a la escena. Además, los '
        ),
        t('elementos pasivos', { bold: true }),
        t(
          ' (difusores, filtros, reflectores) alteran la iluminación aunque no son productores de luz.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-intensidad',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p22',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'heading',
    payload: {
      level: 3,
      text: '2. La dirección de la luz',
      anchor: 'c2-direccion',
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'La dirección de la luz es el ángulo con el que incide sobre el sujeto y determina muchos de los efectos que capturarás con la cámara (volumen, texturas, siluetas, etc.). Al exponer la fotografía, las preguntas que debes hacerte son:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'list',
    payload: {
      items: [
        [t('¿Cómo incide la luz en el sujeto desde la posición en la que estoy (es decir, desde tu cámara)?')],
        [t('¿Cómo quiero que incida en el sujeto (o escena) según el tipo de foto que busco?')],
      ],
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• Luz Frontal: ', { bold: true }),
        t(
          'Está situada delante del sujeto por lo que le da de frente. Ilumina todas las superficies visibles del sujeto. Resalta el color pero elimina sombras, restando volumen y textura.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p23',
      layout: 'portrait',
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• Luz Lateral: ', { bold: true }),
        t(
          'Incide en ángulo sobre el sujeto con respecto a la dirección de disparo. Gracias a esta luz el espectador tiene sensación de volumen y aumenta la textura del sujeto. Por ejemplo, en fotografía nocturna, al fotografiar la '
        ),
        t('Vía Láctea', {
          linkUrl: 'https://www.photopills.com/es/articulos/guia-fotografia-via-lactea',
        }),
        t(' o los '),
        t('rastros de estrellas', {
          linkUrl: 'https://www.photopills.com/es/articulos/guia-rastros-de-estrellas',
        }),
        t(
          ', puedes aprovechar la luz lateral que proporciona una Luna baja (cuando tiene poca elevación) para capturar volumen y textura en el primer plano.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p24',
      layout: 'portrait',
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• Contraluz: ', { bold: true }),
        t(
          'Proviene de detrás del sujeto. Ayuda a destacar la silueta del sujeto, pero resta información de otros elementos como el color o la textura. El contraluz te permite hacer retratos espectaculares con sujetos perfectamente perfilados, de paisaje e incluso de espectaculares '
        ),
        t('siluetas de Luna llena', {
          linkUrl: 'https://www.photopills.com/es/articulos/7-trucos-para-hacer-videos-de-siluetas-de-la-luna-llena',
        }),
        t('.'),
      ],
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p25',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• Luz Cenital: ', { bold: true }),
        t(
          'Proviene de un único punto de luz situado verticalmente encima del sujeto. Cuando se aplica de forma controlada en estudio, se pueden crear fotos llenas de misterio.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p26',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• Luz Contracenital o Nadir: ', { bold: true }),
        t(
          'Proviene de abajo. Se da pocas veces en condiciones naturales, aunque un buen ejemplo son los reflejos de nieve y del agua. También la puedes utilizar para realizar retratos arriesgados, como el retrato de Rafael (el Bardo) en plan Matrix.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p27',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c2-direccion',
    blockType: 'callout_tip',
    payload: {
      title: 'Dos factores clave sobre la dirección de la luz',
      items: [
        [
          t(
            'La dirección de la luz casi nunca proviene exactamente de un lado u otro, sino que la mayoría de las veces es una combinación de varias direcciones.'
          ),
        ],
        [
          t(
            'La iluminación de un objeto no suele provenir de una única fuente de luz. Lo habitual es que se combinen varias. Dependiendo de la intensidad (ponderación) de cada una de ellas, la escena será diferente; aquella que tenga más intensidad será la luz principal.'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c2-calidad',
    blockType: 'heading',
    payload: {
      level: 3,
      text: '3. La calidad de la luz (Dura vs. Suave)',
      anchor: 'c2-calidad',
    },
  },
  {
    sectionAnchor: 'c2-calidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'La calidad describe la distribución de las luces y las sombras en tu escena; es decir, la transición que se produzca entre ambas. Cuando hablo de calidad de la luz, no me refiero a si es buena o mala sino a si es dura o suave:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-calidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• Luz Dura: ', { bold: true }),
        t(
          'Procede de una fuente muy concreta y produce una transición de luces a sombras pronunciada y repentina. Las sombras aparecen muy oscuras y contrastadas con bordes muy bien definidos (ej. el flash directo o el Sol durante el mediodía). Transmite una sensación de agresividad y fuerza.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-calidad',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p28',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c2-calidad',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p29',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c2-calidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• Luz Suave: ', { bold: true }),
        t(
          'Al contrario que la luz dura, la luz suave provoca una transición progresiva entre luces y sombras. Es una luz muy difuminada y tiene como efecto el desdibujar los contornos de las sombras. Suaviza las imágenes, eliminando contrastes y texturas, ayudando a transmitir sensaciones de ternura o melancolía.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-calidad',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p30',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c2-calidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Para suavizar una luz dura utiliza un difusor o un reflector. Y si hablamos de luz natural, aprovecha los momentos de luz suave del día: la '
        ),
        t('hora dorada y la hora azul', {
          linkUrl: 'https://www.photopills.com/es/articulos/entendiendo-la-hora-dorada-la-hora-azul-y-los-crepusculos',
        }),
        t('.'),
      ],
    },
  },
  {
    sectionAnchor: 'c2-calidad',
    blockType: 'image_pair',
    payload: {
      leftAssetId: 'b1-c2-p31-plan',
      rightAssetId: 'b1-c2-p31-sol',
    },
  },
  {
    sectionAnchor: 'c2-calidad',
    blockType: 'callout_tip',
    payload: {
      title: 'Tamaño aparente y distancia de la fuente de luz',
      items: [
        [
          t('Tamaño relativo: ', { bold: true }),
          t(
            'Una misma fuente de luz produce luz dura cuando el sujeto es más grande que ésta, y produce luz suave cuando el sujeto es más pequeño que la fuente.'
          ),
        ],
        [
          t('Distancia: ', { bold: true }),
          t(
            'El Sol es una fuente de luz enorme; sin embargo, al estar muy lejos de tu sujeto, se convierte en un punto en el cielo y produce sombras duras.'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c2-color',
    blockType: 'heading',
    payload: {
      level: 3,
      text: '4. El color de la luz y el Balance de Blancos',
      anchor: 'c2-color',
    },
  },
  {
    sectionAnchor: 'c2-color',
    blockType: 'quote',
    payload: {
      quote: 'La luz es color',
      author: 'J. M. W. Turner',
    },
  },
  {
    sectionAnchor: 'c2-color',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p32',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c2-color',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Cuando la luz incide sobre un cuerpo, hay una parte que se refleja, otra que se transmite a través de él y otra es absorbida. Tú sólo ves color cuando la luz reflejada llega a tus ojos. Antes de hacer una foto, si observas la escena con atención, te darás cuenta de que la luz puede tender hacia dos extremos (o dominancias):'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-color',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• Los colores cálidos (amarillo, naranja, rojo):', { bold: true }),
      ],
    },
  },
  {
    sectionAnchor: 'c2-color',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p33',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c2-color',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• Los colores fríos (púrpura, azul, verde):', { bold: true }),
      ],
    },
  },
  {
    sectionAnchor: 'c2-color',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p34',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c2-color',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'En el mundo digital disponemos de una herramienta muy poderosa: el (mal llamado) '
        ),
        t('balance de blancos', { bold: true }),
        t(' (traducción de '),
        t('white balance', { italic: true }),
        t(
          ', que en realidad significa “equilibrio de blancos”). Puedes ajustarlo directamente en la cámara (en grados Kelvin o modos predefinidos) o posteriormente en edición (disparando en RAW), para neutralizar o añadir una dominante cálida o fría a tus fotos.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-incidente-reflejada',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'Luz incidente frente a luz reflejada',
      anchor: 'c2-incidente-reflejada',
    },
  },
  {
    sectionAnchor: 'c2-incidente-reflejada',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Es importante conocer la diferencia entre luz incidente y reflejada, sobre todo porque te ayuda a entender dónde y cómo se realiza el cálculo de la exposición:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c2-incidente-reflejada',
    blockType: 'list',
    payload: {
      items: [
        [
          t('Luz incidente: ', { bold: true }),
          t(
            'Es la luz que recibe el sujeto que vas a fotografiar. Se mide con un fotómetro de mano situándolo junto al sujeto y orientándolo hacia la cámara. Da valores exactos al no estar condicionado por la reflectancia de los objetos.'
          ),
        ],
        [
          t('Luz reflejada: ', { bold: true }),
          t(
            'Es la luz que refleja el sujeto hacia la cámara. Es la que mide el exposímetro integrado en tu cámara. Puede verse influida por objetos muy blancos (nieve) o muy oscuros, requiriendo interpretación del fotógrafo.'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c2-incidente-reflejada',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c2-p36',
      layout: 'diagram',
    },
  },
  {
    sectionAnchor: 'c2-incidente-reflejada',
    blockType: 'sony_a7iv_note',
    payload: {
      title: 'Balance de Blancos Kelvin y Medición de Luz Reflejada en Sony Alpha 7 IV',
      summary:
        'En todas las fotografías de este libro verás que el autor indica la temperatura de color exacta en Kelvin (ej. 5500K, 7000K, 7900K). Tu Sony Alpha 7 IV te permite ajustar este valor con precisión quirúrgica y controlar cómo su exposímetro mide la luz reflejada:',
      bulletPoints: [
        'Ajuste directo en Kelvin (C.Temp./Filter): En el menú Fn o botón WB, desplázate hasta la opción [Temp. color/Filtro] para elegir desde 2500K hasta 9900K en pasos de 100K, viendo el cambio cromático al instante en el visor.',
        'Prioridad de AWB en luz cálida: Si usas Balance de Blancos Automático (AWB), la Sony A7 IV ofrece [Ajuste prioridad en AWB] con tres modos: Estándar, Ambiente (conserva tonos cálidos) o Blanco (neutraliza dominantes).',
        'Medición de luz reflejada en 1200 zonas: El exposímetro interno de tu Sony A7 IV mide la luz reflejada directamente en el sensor CMOS Exmor R mediante 1200 zonas evaluativas (Modos Multi, Centro, Puntual Estándar/Grande, Media de pantalla completa y Altas luces).',
      ],
      manualUrl: 'https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654695.html',
      manualLabel: 'Manual Sony A7 IV — Balance de Blancos y Temperatura de Color',
      cameraPath: 'MENU → Exposición/Color → Color/Tono → Balance de blancos → Temp. color/Filtro',
    },
  },
];
