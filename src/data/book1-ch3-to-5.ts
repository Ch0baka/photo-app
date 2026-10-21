import type { ExifMetadata, TextSegment } from '../core/types.ts';
import type { SeedBlockInput } from './book1-content.ts';

const t = (text: string, opts?: Omit<TextSegment, 'text'>): TextSegment => ({
  text,
  ...opts,
});

export const BOOK_1_ASSETS_CH3_TO_5: (ExifMetadata & { chapterNumber: number })[] = [
  // =========================================================================
  // CAPÍTULO 3: ¿Qué es la exposición? (Páginas 37–55)
  // =========================================================================
  {
    id: 'b1-c3-p38',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p38-rayos-luz-objetivo.jpg',
    altText: 'Esquema óptico de los rayos de luz desde el objeto atravesando el objetivo hasta formar la imagen en el sensor',
    caption: 'Formación de la imagen: los rayos de luz del objeto atraviesan el objetivo por el eje óptico e impactan en el sensor.',
  },
  {
    id: 'b1-c3-p39',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p39-flores-exposicion.jpg',
    altText: 'Comparativa de tres fotografías macro de orquídeas silvestres tomadas a 1/400s, 1/200s y 1/100s mostrando el cambio de claridad',
    caption: 'Cómo afecta la exposición: a medida que duplicamos el tiempo de exposición (1/400s → 1/200s → 1/100s), llega más luz al sensor y la imagen resulta más clara.',
    cameraModel: 'Nikon D4s',
    lensFocal: '200mm macro',
    aperture: 'f/8',
    shutterSpeed: '1/400s, 1/200s, 1/100s',
    iso: '400',
    kelvin: '6250K',
  },
  {
    id: 'b1-c3-p40',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p40-recorrido-luz-camara.jpg',
    altText: 'Esquema del recorrido de la luz a través del objetivo, diafragma, espejo, obturador y sensor',
    caption: 'Recorrido de la luz desde que entra por el objetivo y el diafragma hasta que atraviesa el obturador y llega al sensor (en tu Sony Alpha 7 IV sin espejo no hay espejo ni pentaprisma: la luz va directo al sensor).',
  },
  {
    id: 'b1-c3-p41',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p41-diafragma-abierto.jpg',
    altText: 'Detalle de las laminillas del diafragma de un objetivo dejando un orificio amplio',
    caption: 'El diafragma abierto dentro del objetivo permite el paso de un gran caudal de luz hacia el sensor.',
  },
  {
    id: 'b1-c3-p42',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p42-diafragma-cerrado.jpg',
    altText: 'Detalle de las laminillas del diafragma cerradas formando un orificio pequeño',
    caption: 'Al cerrar las laminillas del diafragma (aperturas menores), se restringe el paso de luz hacia el sensor.',
  },
  {
    id: 'b1-c3-p43',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p43-cortinilla-obturador.jpg',
    altText: 'Detalle de las cortinillas mecánicas del obturador plano focal cerradas delante del sensor',
    caption: 'El obturador mecánico de cortinilla: permanece cerrado impidiendo el paso de la luz y se abre únicamente durante el tiempo de exposición.',
  },
  {
    id: 'b1-c3-p44',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p44-escala-velocidad-tiempo.jpg',
    altText: 'Gráfico comparativo entre Tiempo de Exposición y Velocidad de Obturación desde 1/4000s hasta 30s y Bulb',
    caption: 'Relación entre Tiempo de Exposición y Velocidad de Obturación: de 1/4000s (mayor velocidad / menor tiempo) hasta 30" y Bulb (menor velocidad / mayor tiempo).',
  },
  {
    id: 'b1-c3-p45',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p45-sensor-digital.jpg',
    altText: 'Fotografía macro del sensor digital CMOS de una cámara con su matriz electrónica',
    caption: 'El sensor digital: compuesto por millones de fotositos o semiconductores sensibles a la luz donde se captura y amplifica la señal.',
  },
  {
    id: 'b1-c3-p48',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p48-rocas-tres-exposiciones.jpg',
    altText: 'Secuencia de tres fotografías de formaciones rocosas estratificadas con distinta exposición',
    caption: 'Diferentes niveles de exposición sobre una misma pared rocosa: subexpuesta, equilibrada y derecheada.',
  },
  {
    id: 'b1-c3-p49',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p49-bosque-helechos-tres-exposiciones.jpg',
    altText: 'Tríptico vertical de un bosque con helechos y flores amarillas mostrando subexposición, exposición media y sobreexposición',
    caption: 'Escena de alto contraste en bosque: elegir si preservar las altas luces del cielo entre las ramas o el detalle en las sombras de los helechos.',
  },
  {
    id: 'b1-c3-p50',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p50-clave-alta-musicos.jpg',
    altText: 'Fotografía en clave alta de tres músicos con instrumentos de viento en la playa',
    caption: 'Fotografía en Clave Alta: sobreexposición intencionada del fondo de la playa para integrar a los músicos y centrar la atención en sus rostros e instrumentos.',
    cameraModel: 'Nikon D4s',
    lensFocal: '85mm',
    aperture: 'f/2.8',
    shutterSpeed: '1/160s',
    iso: '100',
    kelvin: '5650K',
  },
  {
    id: 'b1-c3-p51',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p51-clave-baja-retrato.jpg',
    altText: 'Retrato femenino en blanco y negro en clave baja con fondo negro profundo',
    caption: 'Fotografía en Clave Baja: subexposición creativa para fundir las sombras y resaltar la mirada y el rostro de la modelo.',
    cameraModel: 'Nikon D4s',
    lensFocal: '85mm',
    aperture: 'f/2',
    shutterSpeed: '1/200s',
    iso: '400',
    kelvin: '6250K',
  },
  {
    id: 'b1-c3-p52',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p52-siluetas-luna-llena.jpg',
    altText: 'Siluetas de cinco personas recortadas contra una gigantesca Luna llena anaranjada en el horizonte',
    caption: 'Siluetas contra la Luna llena: subexponiendo totalmente el primer plano terrestre y exponiendo para el disco lunar.',
    cameraModel: 'Nikon D4s',
    lensFocal: '500mm',
    aperture: 'f/8',
    shutterSpeed: '1/50s',
    iso: '100',
    kelvin: '2849K',
    extraNotes: 'Multiplicador 1,4x (700mm efectivos)',
  },
  {
    id: 'b1-c3-p53',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p53-contraluz-retrato-calido.jpg',
    altText: 'Retrato femenino a contraluz con destello solar dorado y suave',
    caption: 'Contraluz cálido: dominando el triángulo de exposición para capturar atmósfera y detalle en el rostro sin perder la magia del destello.',
    cameraModel: 'Nikon D700',
    lensFocal: '85mm',
    aperture: 'f/2',
    shutterSpeed: '1/1500s',
    iso: '200',
    kelvin: '6500K',
  },
  {
    id: 'b1-c3-p54',
    chapterNumber: 3,
    filePath: '/images/book-1/cap-3/p54-subexpuesta-costa.jpg',
    altText: 'Paisaje marino al atardecer con el primer plano rocoso excesivamente oscuro y subexpuesto',
    caption: 'Ejemplo de exposición incorrecta cuando las sombras del primer plano quedan empastadas sin reflejar la idea original del fotógrafo.',
    cameraModel: 'Nikon D4s',
    lensFocal: '19mm',
    aperture: 'f/5.6',
    shutterSpeed: '1/2.3s',
    iso: '100',
    kelvin: '9100K',
  },

  // =========================================================================
  // CAPÍTULO 4: ¡Ojo! La exposición está al servicio de tus ideas (Páginas 56–71)
  // =========================================================================
  {
    id: 'b1-c4-p58',
    chapterNumber: 4,
    filePath: '/images/book-1/cap-4/p58-comparativa-pdc-pacman.jpg',
    altText: 'Mosaico de 8 fotografías desde f/1.4 hasta f/16 mostrando cómo aumenta la profundidad de campo sobre dibujos de Pac-Man en el suelo',
    caption: 'Variación de la profundidad de campo con objetivo de 85mm desde f/1.4 (foco selectivo extremo en el primer plano) hasta f/16 (todos los fantasmas enfocados).',
    lensFocal: '85mm',
    aperture: 'f/1.4 → f/16',
  },
  {
    id: 'b1-c4-p59',
    chapterNumber: 4,
    filePath: '/images/book-1/cap-4/p59-efecto-estrella-sol.jpg',
    altText: 'Paisaje de viñedos con el Sol mostrando un marcado efecto estrella de múltiples puntas gracias a f/16',
    caption: 'Efecto estrella (Sunstar): conseguido cerrando el diafragma a f/16 para que la luz se difracte en las laminillas del objetivo.',
    cameraModel: 'Nikon D4s',
    lensFocal: '18mm',
    aperture: 'f/16',
    shutterSpeed: '5s',
    iso: '100',
    kelvin: '5850K',
  },
  {
    id: 'b1-c4-p60',
    chapterNumber: 4,
    filePath: '/images/book-1/cap-4/p60-faro-via-lactea.jpg',
    altText: 'Faro iluminado junto al centro galáctico de la Vía Láctea y una figura humana sobre las rocas',
    caption: 'Capturar más estrellas en astrofotografía utilizando una gran apertura f/1.4 para recoger el máximo de fotones en pocos segundos.',
    cameraModel: 'Nikon D4s',
    lensFocal: '35mm',
    aperture: 'f/1.4',
    shutterSpeed: '4s',
    iso: '6400',
    kelvin: '3550K',
  },
  {
    id: 'b1-c4-p61',
    chapterNumber: 4,
    filePath: '/images/book-1/cap-4/p61-ave-vuelo-congelado.jpg',
    altText: 'Ave marina en pleno vuelo perfectamente congelada sobre el mar desenfocado',
    caption: 'Congelar el movimiento rápido de un ave en vuelo mediante una velocidad de obturación de 1/1800s.',
    cameraModel: 'Nikon D4s',
    lensFocal: '200mm',
    aperture: 'f/5.6',
    shutterSpeed: '1/1800s',
    iso: '1600',
    kelvin: '6250K',
  },
  {
    id: 'b1-c4-p62',
    chapterNumber: 4,
    filePath: '/images/book-1/cap-4/p62-olas-movimiento-costa.jpg',
    altText: 'Fotógrafo con trípode en un acantilado frente a grandes olas mostrando estelas dinámicas de movimiento',
    caption: 'Enseñar el movimiento del mar embravecido con un tiempo de exposición de 0,7 segundos sobre trípode.',
    cameraModel: 'Nikon D700',
    lensFocal: '200mm',
    aperture: 'f/6.7',
    shutterSpeed: '0.7s',
    iso: '200',
    kelvin: '6700K',
  },
  {
    id: 'b1-c4-p64',
    chapterNumber: 4,
    filePath: '/images/book-1/cap-4/p64-perseidas-iso-alto.jpg',
    altText: 'Lluvia de meteoros sobre el mar nocturno capturada a ISO 8000',
    caption: 'Uso de sensibilidad extrema (ISO 8000) combinada con f/2.8 para registrar meteoros débiles de una lluvia de estrellas.',
    cameraModel: 'Nikon D4s',
    lensFocal: '14mm',
    aperture: 'f/2.8',
    shutterSpeed: '15s',
    iso: '8000',
    kelvin: '3300K',
  },
  {
    id: 'b1-c4-p65',
    chapterNumber: 4,
    filePath: '/images/book-1/cap-4/p65-chuleta-efectos-triangulo.jpg',
    altText: 'Infografía resumen de los efectos visuales de Apertura (profundidad de campo), Velocidad (movimiento) e ISO (ruido)',
    caption: 'Chuleta visual de los efectos creativos y técnicos de la Apertura (f/1.4 a f/32), Velocidad de obturación (1/1000s a 1/2s) e ISO (100 a 51200).',
  },
  {
    id: 'b1-c4-p66',
    chapterNumber: 4,
    filePath: '/images/book-1/cap-4/p66-retrato-estudio-ojos.png',
    altText: 'Retrato en blanco y negro de primer plano de una joven con capucha blanca mirando fijamente a cámara',
    caption: 'Caso práctico 1 (Retrato): 85mm a f/8 en estudio con fondo negro para garantizar nitidez rabiosa en ambos ojos y las manos.',
    cameraModel: 'Nikon D4s',
    lensFocal: '85mm',
    aperture: 'f/8',
    shutterSpeed: '1/160s',
    iso: '100',
    kelvin: '5600K',
  },
  {
    id: 'b1-c4-p67-f8',
    chapterNumber: 4,
    filePath: '/images/book-1/cap-4/p67-app-pdc-f8.png',
    altText: 'Calculadora de Profundidad de Campo de PhotoPills mostrando 0,59m de PdC a 85mm f/8 y 3m de distancia',
    caption: 'Calculadora PdC a 85mm | f/8 | 3m: Profundidad de campo total de 0,59m.',
  },
  {
    id: 'b1-c4-p67-f28',
    chapterNumber: 4,
    filePath: '/images/book-1/cap-4/p67-app-pdc-f28.png',
    altText: 'Calculadora de Profundidad de Campo de PhotoPills mostrando 0,21m de PdC a 85mm f/2.8 y 3m de distancia',
    caption: 'Calculadora PdC a 85mm | f/2.8 | 3m: La profundidad de campo se reduce a sólo 0,21m.',
  },
  {
    id: 'b1-c4-p69',
    chapterNumber: 4,
    filePath: '/images/book-1/cap-4/p69-viaje-islandia-grupo.png',
    altText: 'Grupo de fotógrafos caminando por una calle de Reikiavik en blanco y negro separados del fondo',
    caption: 'Caso práctico 2 (Viaje): Teleobjetivo 200mm a f/2.8 para aislar al grupo del fondo urbano y 1/500s para congelar el paso.',
    cameraModel: 'Nikon D4s',
    lensFocal: '200mm',
    aperture: 'f/2.8',
    shutterSpeed: '1/500s',
    iso: '100',
    kelvin: '5600K',
  },
  {
    id: 'b1-c4-p70',
    chapterNumber: 4,
    filePath: '/images/book-1/cap-4/p70-puesta-sol-arco-filtros.jpg',
    altText: 'Puesta de sol sobre un arco natural costero con mar sedoso y rocas enfocadas desde el primer plano',
    caption: 'Caso práctico 3 (Puesta de Sol): Enfoque a la distancia hiperfocal con 14mm f/13 y larga exposición de 20s usando filtros ND y GND.',
    cameraModel: 'Nikon D4s',
    lensFocal: '14mm',
    aperture: 'f/13',
    shutterSpeed: '20s',
    iso: '100',
    kelvin: '5399K',
    extraNotes: 'Filtro ND64 (6 pasos) + GND 0.6 inverso (2 pasos)',
  },

  // =========================================================================
  // CAPÍTULO 5: Entendiendo el triángulo de exposición (Páginas 72–96)
  // =========================================================================
  {
    id: 'b1-c5-p73',
    chapterNumber: 5,
    filePath: '/images/book-1/cap-5/p73-triangulo-exposicion-basico.jpg',
    altText: 'Diagrama del Triángulo de Exposición formado por Velocidad de Obturación, Apertura e ISO',
    caption: 'Los tres lados del Triángulo de Exposición: Apertura, Velocidad de Obturación e ISO.',
  },
  {
    id: 'b1-c5-p75',
    chapterNumber: 5,
    filePath: '/images/book-1/cap-5/p75-equilibrio-triangulo.jpg',
    altText: 'Esquema de cómo se deforma y reequilibra el triángulo de exposición al variar uno de sus parámetros',
    caption: 'Equilibrio del triángulo: si modificas un parámetro, debes compensar al menos uno de los otros dos para mantener la misma exposición.',
  },
  {
    id: 'b1-c5-p76',
    chapterNumber: 5,
    filePath: '/images/book-1/cap-5/p76-aperturas-objetivo.jpg',
    altText: 'Fotografías reales del orificio del diafragma de un objetivo desde f/1.4 hasta f/16',
    caption: 'Tamaño real del orificio del diafragma para cada número f estándar: f/1.4, f/2, f/2.8, f/4, f/5.6, f/8, f/11 y f/16.',
  },
  {
    id: 'b1-c5-p77',
    chapterNumber: 5,
    filePath: '/images/book-1/cap-5/p77-esquema-distancia-focal.jpg',
    altText: 'Esquema técnico de la distancia focal en milímetros entre el centro óptico del objetivo y el sensor (plano focal)',
    caption: 'Definición física de la distancia focal (mm): la distancia desde el centro óptico de la lente hasta el plano focal del sensor.',
  },
  {
    id: 'b1-c5-p78',
    chapterNumber: 5,
    filePath: '/images/book-1/cap-5/p78-angulos-vision-focales.jpg',
    altText: 'Diagrama de ángulos de visión desde 8mm (180º Ojo de Pez) hasta 500mm (5º Super Teleobjetivo)',
    caption: 'Relación entre distancia focal y ángulo de visión: desde 8mm (180°) hasta 500mm (5°).',
  },
  {
    id: 'b1-c5-p79',
    chapterNumber: 5,
    filePath: '/images/book-1/cap-5/p79-hvitserkur-14mm.jpg',
    altText: 'Paisaje amplio en Islandia tomado con gran angular de 14mm',
    caption: 'Focal corta (14mm): gran ángulo de visión para abarcar el paisaje completo y el reflejo en el agua.',
    cameraModel: 'Nikon D4s',
    lensFocal: '14mm',
    aperture: 'f/10',
    shutterSpeed: '1/80s',
    iso: '100',
    kelvin: '7500K',
  },
  {
    id: 'b1-c5-p80',
    chapterNumber: 5,
    filePath: '/images/book-1/cap-5/p80-luna-420mm.jpg',
    altText: 'Luna llena gigante sobre un monumento histórico de piedra tomada con super teleobjetivo de 420mm',
    caption: 'Focal larga (420mm): ángulo de visión estrecho que comprime la perspectiva y magnifica la Luna llena respecto al edificio.',
    cameraModel: 'Olympus OM-D E-M1',
    lensFocal: '420mm',
    aperture: 'f/8',
    shutterSpeed: '1/13s',
    iso: '200',
    kelvin: '4200K',
  },
  {
    id: 'b1-c5-p82',
    chapterNumber: 5,
    filePath: '/images/book-1/cap-5/p82-circulos-escala-f.jpg',
    altText: 'Proporción del área de los círculos en la escala estándar de números f desde f/1 hasta f/32',
    caption: 'Escala estándar de números f: cada paso hacia la derecha divide exactamente por dos el área del orificio (la mitad de luz).',
  },
  {
    id: 'b1-c5-p88',
    chapterNumber: 5,
    filePath: '/images/book-1/cap-5/p88-comparativa-ruido-iso.jpg',
    altText: 'Comparativa en 8 recortes desde ISO 200 hasta ISO 25600 mostrando la aparición progresiva de grano y ruido digital',
    caption: 'Progresión del ruido digital desde ISO 200 hasta ISO 25600: a medida que se amplifica la señal, el grano y la pérdida de detalle se hacen evidentes.',
    iso: '200 → 25600',
  },
  {
    id: 'b1-c5-p91',
    chapterNumber: 5,
    filePath: '/images/book-1/cap-5/p91-roca-mar-seda-iso200.jpg',
    altText: 'Formación rocosa marina al amanecer con larga exposición de 1min 50s a ISO 200 sin ruido en las sombras',
    caption: 'Paisaje con poca luz resuelto sobre trípode manteniendo ISO 200 y alargando la exposición a 1min 50s para obtener sombras limpias y efecto seda.',
    cameraModel: 'Nikon D700',
    lensFocal: '35mm',
    aperture: 'f/8',
    shutterSpeed: '1min 50s',
    iso: '200',
    kelvin: '5000K',
  },
  {
    id: 'b1-c5-p92',
    chapterNumber: 5,
    filePath: '/images/book-1/cap-5/p92-via-lactea-arco-iso3200.jpg',
    altText: 'Arco de la Vía Láctea sobre acantilado costero tomada a 14mm f/2.8, 30s e ISO 3200',
    caption: 'Fotografía nocturna de Vía Láctea: limitados por f/2.8 y 30s máximos para evitar trazas en las estrellas, subimos a ISO 3200 para lograr la exposición.',
    cameraModel: 'Nikon D700',
    lensFocal: '14mm',
    aperture: 'f/2.8',
    shutterSpeed: '30s',
    iso: '3200',
    kelvin: '3500K',
  },
  {
    id: 'b1-c5-p95',
    chapterNumber: 5,
    filePath: '/images/book-1/cap-5/p95-analogia-cubo-grifo.jpg',
    altText: 'Ilustración de la analogía del grifo y el cubo de agua para explicar Apertura, Velocidad, Intensidad e ISO',
    caption: 'Exposición para novatos (Analogía del cubo y el grifo): el caudal del grifo es la Apertura, el tiempo abierto es la Velocidad y el tamaño del vaso/cubo es el ISO.',
  },
];

// ============================================================================
// BLOQUES DEL CAPÍTULO 3: ¿Qué es la exposición?
// ============================================================================
export const CHAPTER_3_BLOCKS: SeedBlockInput[] = [
  {
    sectionAnchor: 'c3-definicion',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'La exposición es una cantidad de luz',
      anchor: 'c3-definicion',
    },
  },
  {
    sectionAnchor: 'c3-definicion',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Es la cantidad de luz que llega a un material fotosensible (la película o el sensor de tu cámara) para crear una imagen.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c3-definicion',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c3-p38',
      layout: 'diagram',
    },
  },
  {
    sectionAnchor: 'c3-definicion',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          '“Genial Toni, la exposición es una cantidad de luz. Pero ¿cuánta luz me hace falta para exponer correctamente una foto?”',
          { italic: true }
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c3-definicion',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Eso, amigo mío, depende de la escena a la que te enfrentes y del resultado que quieras obtener. Depende de si quieres capturar más o menos detalle en los tonos oscuros o en los claros. En definitiva, depende de la historia que quieras contar.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c3-como-afecta',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'Cómo afecta la exposición a tus fotos',
      anchor: 'c3-como-afecta',
    },
  },
  {
    sectionAnchor: 'c3-como-afecta',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'La exposición (la cantidad de luz que has dejado que llegue al sensor) determina cómo de clara u oscura queda tu foto. Dicho de otro modo, cuanta más luz llega más clara es tu imagen. Y al revés, cuanta menos luz, más oscura.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c3-como-afecta',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c3-p39',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c3-como-afecta',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Si llega más luz, puedes capturar más detalle en los tonos oscuros aunque es posible que pierdas detalle en los claros, y viceversa. Tu meta es obtener en la foto el nivel de claridad/oscuridad que deseas y que te permita enseñar la escena como tú la ves o quieres transmitirla.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c3-recorrido-luz',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'Cómo controlar la exposición: el viaje de la luz',
      anchor: 'c3-recorrido-luz',
    },
  },
  {
    sectionAnchor: 'c3-recorrido-luz',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Durante el recorrido que sigue desde su origen hasta llegar al sensor de tu cámara, la luz atraviesa una serie de elementos físicos: el '
        ),
        t('objetivo (diafragma)', { bold: true }),
        t(' y el '),
        t('obturador', { bold: true }),
        t(', hasta impactar en el '),
        t('sensor', { bold: true }),
        t('.'),
      ],
    },
  },
  {
    sectionAnchor: 'c3-recorrido-luz',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c3-p40',
      layout: 'diagram',
    },
  },
  {
    sectionAnchor: 'c3-objetivo-diafragma',
    blockType: 'heading',
    payload: {
      level: 3,
      text: '1. El objetivo y el diafragma (Apertura)',
      anchor: 'c3-objetivo-diafragma',
    },
  },
  {
    sectionAnchor: 'c3-objetivo-diafragma',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'La luz llega primero al objetivo de tu cámara (salvo que uses filtros delante del objetivo, como veremos en la '
        ),
        t('sección 22', { internalChapterNumber: 22 }),
        t(
          '). Una vez dentro del objetivo, el haz de luz pasa por el diafragma. Éste deja pasar más o menos luz dependiendo de la '
        ),
        t('apertura', { bold: true }),
        t(' que tengas seleccionada: a mayor apertura, más luz llega al sensor; si cierras el diafragma, pasa menos luz.'),
      ],
    },
  },
  {
    sectionAnchor: 'c3-objetivo-diafragma',
    blockType: 'image_pair',
    payload: {
      leftAssetId: 'b1-c3-p41',
      rightAssetId: 'b1-c3-p42',
    },
  },
  {
    sectionAnchor: 'c3-obturador',
    blockType: 'heading',
    payload: {
      level: 3,
      text: '2. El obturador (Velocidad o Tiempo de exposición)',
      anchor: 'c3-obturador',
    },
  },
  {
    sectionAnchor: 'c3-obturador',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Una vez atravesado el diafragma, el haz de luz llega al obturador: una cortina que permite la llegada de luz al sensor cuando está abierto o la impide cuando está cerrado. El tiempo durante el cual permanece abierto se denomina '
        ),
        t('velocidad de obturación o tiempo de exposición', { bold: true }),
        t('.'),
      ],
    },
  },
  {
    sectionAnchor: 'c3-obturador',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c3-p43',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c3-obturador',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Ten en cuenta que a mayor velocidad de obturación (ej. 1/4000s), menor tiempo de exposición y menos luz llega al sensor. Y al revés, a menor velocidad de obturación (ej. 15" o 30"), mayor tiempo de exposición y más luz impacta en el sensor.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c3-obturador',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c3-p44',
      layout: 'diagram',
    },
  },
  {
    sectionAnchor: 'c3-sensor',
    blockType: 'heading',
    payload: {
      level: 3,
      text: '3. El sensor (Sensibilidad ISO)',
      anchor: 'c3-sensor',
    },
  },
  {
    sectionAnchor: 'c3-sensor',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'El sensor es el lugar donde se forma la imagen en la cámara. Está compuesto por millones de fotositos o semiconductores sensibles a la luz. Cuando los fotones impactan sobre los fotositos, son captados y procesados, generándose la imagen digital.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c3-sensor',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c3-p45',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c3-sensor',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'El sensor tiene la capacidad de amplificar digitalmente la señal captada según la sensibilidad ('
        ),
        t('ISO', { code: true }),
        t(
          ') seleccionada. Conjuntamente, la apertura, la velocidad de obturación y el ISO forman el conocido '
        ),
        t('triángulo de exposición', { bold: true }),
        t('.'),
      ],
    },
  },
  {
    sectionAnchor: 'c3-exposicion-correcta',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'La exposición “correcta” frente a la exposición “incorrecta”',
      anchor: 'c3-exposicion-correcta',
    },
  },
  {
    sectionAnchor: 'c3-exposicion-correcta',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Definir una exposición como “la correcta” es algo subjetivo: todo depende de si consigues o no el efecto que deseas transmitir. Desde un punto de vista estrictamente técnico, suele decirse que:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c3-exposicion-correcta',
    blockType: 'quote',
    payload: {
      quote:
        'La exposición técnicamente correcta es aquella que aprovecha toda la capacidad del sensor sin perder información ni en las sombras ni en las altas luces.',
      author: 'Consenso técnico fotográfico',
    },
  },
  {
    sectionAnchor: 'c3-exposicion-correcta',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c3-p48',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c3-exposicion-correcta',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Sin embargo, el sensor de tu cámara no siempre es capaz de captar el mismo rango de brillo que tus ojos. Ante escenas de alto contraste deberás decidir qué hacer:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c3-exposicion-correcta',
    blockType: 'list',
    payload: {
      items: [
        [
          t('Perder información en las sombras ', { bold: true }),
          t('(zonas negras) → obtendrás una fotografía '),
          t('subexpuesta', { bold: true }),
          t('.'),
        ],
        [
          t('Perder información en las altas luces ', { bold: true }),
          t('(zonas blancas quemadas) → conseguirás una fotografía '),
          t('sobreexpuesta', { bold: true }),
          t('.'),
        ],
        [
          t('Utilizar otras técnicas ', { bold: true }),
          t('como el uso de filtros ('),
          t('sección 22', { internalChapterNumber: 22 }),
          t('), la fusión de varias tomas / horquillado ('),
          t('sección 23', { internalChapterNumber: 23 }),
          t(') o añadir luz artificial a la escena.'),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c3-exposicion-correcta',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c3-p49',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c3-clave-alta-baja',
    blockType: 'heading',
    payload: {
      level: 3,
      text: 'Clave alta, clave baja, siluetas y contraluces',
      anchor: 'c3-clave-alta-baja',
    },
  },
  {
    sectionAnchor: 'c3-clave-alta-baja',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Muchas veces querrás usar la sobreexposición o la subexposición a tu favor. En la siguiente fotografía realicé una '
        ),
        t('clave alta', { bold: true }),
        t(
          ', sobreexponiendo gran parte del fondo de la playa para centrar toda la atención en los rostros de los músicos y sus instrumentos:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c3-clave-alta-baja',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c3-p50',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c3-clave-alta-baja',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Por el contrario, en la siguiente toma decidí subexponer utilizando una '
        ),
        t('clave baja', { bold: true }),
        t(' para resaltar la belleza en los ojos y el rostro de la modelo:'),
      ],
    },
  },
  {
    sectionAnchor: 'c3-clave-alta-baja',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c3-p51',
      layout: 'portrait',
    },
  },
  {
    sectionAnchor: 'c3-clave-alta-baja',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Otro ejemplo claro son las espectaculares siluetas de Luna llena subexponiendo totalmente el primer plano, o los contraluces cálidos:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c3-clave-alta-baja',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c3-p52',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c3-clave-alta-baja',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c3-p53',
      layout: 'portrait',
    },
  },
  {
    sectionAnchor: 'c3-clave-alta-baja',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('¡Lo que sí existe es la exposición incorrecta! ', { bold: true }),
        t(
          'Es la que obtienes cuando, por limitaciones del equipo o falta de control del triángulo de exposición, la imagen final te queda mucho más oscura o más clara con respecto a tu idea original:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c3-clave-alta-baja',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c3-p54',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c3-clave-alta-baja',
    blockType: 'callout_tip',
    payload: {
      title: 'TRUCOS: La idea va siempre antes que la exposición',
      items: [
        [
          t(
            'Lo que determina en primera instancia el valor de apertura, velocidad e ISO no es la exposición sino la idea de foto que quieres hacer (congelar movimiento, efecto seda en el agua, aumentar profundidad de campo, capturar estrellas...).'
          ),
        ],
        [
          t(
            'A partir de la idea, establece uno o dos de los parámetros para conseguir el efecto deseado, y luego utiliza el tercero (o los otros dos) para obtener la exposición correcta.'
          ),
        ],
      ],
    },
  },
  {
    sectionAnchor: 'c3-clave-alta-baja',
    blockType: 'sony_a7iv_note',
    payload: {
      title: 'Obturador Mecánico vs. Electrónico y EFCS en tu Sony Alpha 7 IV',
      summary:
        'A diferencia de las cámaras réflex (DSLR) mostradas en el esquema de la página 40, tu Sony Alpha 7 IV es una cámara sin espejo (Mirrorless): la luz entra directamente al sensor Exmor R de 33 MP y puedes controlar tres modos de obturación:',
      bulletPoints: [
        'Obturador con cortinilla delantera electrónica (EFCS - Activado por defecto): Reduce las vibraciones mecánicas al iniciar la exposición electrónicamente y terminarla con la segunda cortina física.',
        'Obturador Mecánico (hasta 1/8000s y sincronización de flash a 1/250s): Recomendado cuando uses objetivos muy luminosos (f/1.2, f/1.4) a velocidades superiores a 1/2000s para evitar truncamiento del bokeh.',
        'Obturador Electrónico / Disparo Silencioso (hasta 1/8000s): 0 vibraciones y silencio absoluto, ideal para fauna cautelosa, conciertos o timelapse, teniendo precaución con luces LED parpadeantes o sujetos ultrarrápidos (rolling shutter).',
      ],
      manualUrl: 'https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000656455.html',
      manualLabel: 'Manual Sony A7 IV — Tipo de Obturador y Cortinilla Delantera Electrónica',
      cameraPath: 'MENU → Toma → Obturador/Silencioso → Tipo de obturador / Obt. cortinilla del. elect.',
    },
  },
];

// ============================================================================
// BLOQUES DEL CAPÍTULO 4: ¡Ojo! La exposición está al servicio de tus ideas
// ============================================================================
export const CHAPTER_4_BLOCKS: SeedBlockInput[] = [
  {
    sectionAnchor: 'c4-efectos-apertura',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('¿Qué fue primero? ¿El huevo o la gallina? ¿La exposición o la idea? '),
        t('Respuesta correcta: ¡La idea!', { bold: true }),
      ],
    },
  },
  {
    sectionAnchor: 'c4-efectos-apertura',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Siempre deberás elegir la apertura, la velocidad y el ISO en función de la foto que quieres hacer, del efecto que pretendes capturar y de la historia que quieres contar.'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c4-efectos-apertura',
    blockType: 'heading',
    payload: {
      level: 2,
      text: '1. Los efectos creativos de la apertura',
      anchor: 'c4-efectos-apertura',
    },
  },
  {
    sectionAnchor: 'c4-efectos-apertura',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• La profundidad de campo: ', { bold: true }),
        t(
          'Si quieres aumentar la zona enfocada de la escena, cierra el diafragma (f/8, f/11, f/16) o enfoca a la distancia hiperfocal con focales cortas (14–35mm). Si abres el diafragma (f/1.4, f/2.8, f/4), la profundidad de campo disminuye, dirigiendo la atención del espectador a un punto concreto:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c4-efectos-apertura',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c4-p58',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c4-efectos-apertura',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• El efecto estrella (Sunstar): ', { bold: true }),
        t(
          'Si quieres que el Sol, la Luna o una farola aparezca con forma de estrella, utiliza aperturas pequeñas cerrando el diafragma a f/8, f/11 o f/16:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c4-efectos-apertura',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c4-p59',
      layout: 'portrait',
    },
  },
  {
    sectionAnchor: 'c4-efectos-apertura',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• Capturar más estrellas: ', { bold: true }),
        t(
          'En astrofotografía, para registrar el mayor número de estrellas posibles durante el tiempo de exposición, debes usar aperturas grandes (f/1.4, f/2.8, f/4):'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c4-efectos-apertura',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c4-p60',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c4-efectos-velocidad',
    blockType: 'heading',
    payload: {
      level: 2,
      text: '2. Los efectos de la velocidad de obturación',
      anchor: 'c4-efectos-velocidad',
    },
  },
  {
    sectionAnchor: 'c4-efectos-velocidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• Congelar el movimiento: ', { bold: true }),
        t(
          'Utiliza velocidades rápidas (tiempos de exposición cortos) para congelar aves, deportes, personas o evitar el rastro de las estrellas:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c4-efectos-velocidad',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c4-p61',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c4-efectos-velocidad',
    blockType: 'callout_tip',
    payload: {
      title: 'Velocidades de referencia para congelar movimiento y barridos',
      items: [
        [t('Ave en vuelo: ', { bold: true }), t('1/800s – 1/2000s.', { code: true })],
        [t('Persona andando: ', { bold: true }), t('mínimo 1/125s.', { code: true })],
        [t('Deportes (fútbol, acción): ', { bold: true }), t('1/500s – 1/2000s.', { code: true })],
        [t('Coche a 50 km/h / en carrera: ', { bold: true }), t('1/1000s – 1/8000s.', { code: true })],
        [t('Barrido (panning) vehículos / bicis / corredores: ', { bold: true }), t('1/250s (vehículos), 1/60s–1/30s (bicis), 1/15s (corredores).')],
        [t('Evitar rastro de estrellas / Luna: ', { bold: true }), t('Regla NPF o regla de los 500 (estrellas); 1s máximo para la Luna.')],
      ],
    },
  },
  {
    sectionAnchor: 'c4-efectos-velocidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('• Enseñar el movimiento: ', { bold: true }),
        t(
          'Utiliza velocidades lentas (con trípode) para transmitir el dinamismo del agua, las nubes, estelas o rastros de estrellas:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c4-efectos-velocidad',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c4-p62',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c4-efectos-velocidad',
    blockType: 'callout_tip',
    payload: {
      title: 'Tiempos de referencia para enseñar el movimiento (con trípode)',
      items: [
        [t('Efecto seda en cascada o en el mar: ', { bold: true }), t('1s o más.', { code: true })],
        [t('Agua en movimiento rápido / lento: ', { bold: true }), t('1/8s a 1/2s.', { code: true })],
        [t('Personas andando con estela de movimiento: ', { bold: true }), t('1/15s a 1/4s.', { code: true })],
        [t('Rastros de estrellas (Star Trails): ', { bold: true }), t('1min – 10min (cortos) | 30min – 4h (largos).')],
      ],
    },
  },
  {
    sectionAnchor: 'c4-efectos-iso',
    blockType: 'heading',
    payload: {
      level: 2,
      text: '3. Los efectos del ISO y la Chuleta del Triángulo',
      anchor: 'c4-efectos-iso',
    },
  },
  {
    sectionAnchor: 'c4-efectos-iso',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Una vez decididos los valores de apertura y velocidad según tu idea creativa, utilizas el ISO para equilibrar la exposición. Al usar ISOs altos (1600, 3200, 6400, 8000), el sensor amplifica la señal permitiendo capturar escenas como la Vía Láctea o una lluvia de estrellas, a costa de incrementar el nivel de ruido (grano):'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c4-efectos-iso',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c4-p64',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c4-efectos-iso',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c4-p65',
      layout: 'diagram',
    },
  },
  {
    sectionAnchor: 'c4-ejemplos-razonamiento',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'Tres ejemplos de razonamiento fotográfico: idea + exposición',
      anchor: 'c4-ejemplos-razonamiento',
    },
  },
  {
    sectionAnchor: 'c4-ejemplos-razonamiento',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('Ejemplo 1 — Retrato en estudio: ', { bold: true }),
        t(
          'Busco que la mirada de la modelo y del espectador se encuentren con total nitidez. Elijo un 85mm y cierro a '
        ),
        t('f/8', { code: true }),
        t(
          ' (ya que el fondo es negro y no necesito desenfocarlo). A 3 metros de distancia obtengo 0,59m de profundidad de campo. Fijo '
        ),
        t('ISO 100', { code: true }),
        t(
          ' para máxima limpieza y mido en puntual sobre la piel iluminada, obteniendo '
        ),
        t('1/160s', { code: true }),
        t('.'),
      ],
    },
  },
  {
    sectionAnchor: 'c4-ejemplos-razonamiento',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c4-p66',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c4-ejemplos-razonamiento',
    blockType: 'image_pair',
    payload: {
      leftAssetId: 'b1-c4-p67-f8',
      rightAssetId: 'b1-c4-p67-f28',
    },
  },
  {
    sectionAnchor: 'c4-ejemplos-razonamiento',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('Ejemplo 2 — Fotografía de viaje en Islandia: ', { bold: true }),
        t(
          'Para aislar al grupo de fotógrafos del fondo urbano de Reikiavik, elijo un teleobjetivo de 200mm y una apertura grande de '
        ),
        t('f/2.8', { code: true }),
        t('. Uso medición ponderada al centro, una velocidad rápida de '),
        t('1/500s', { code: true }),
        t(' para congelar su caminata y Auto ISO (que la cámara ajustó en '),
        t('ISO 100', { code: true }),
        t(').'),
      ],
    },
  },
  {
    sectionAnchor: 'c4-ejemplos-razonamiento',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c4-p69',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c4-ejemplos-razonamiento',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('Ejemplo 3 — Puesta de Sol con filtros: ', { bold: true }),
        t(
          'Con la cámara en trípode y focal de 14mm, cierro a '
        ),
        t('f/13', { code: true }),
        t(' y enfoco a la distancia hiperfocal con '),
        t('ISO 100', { code: true }),
        t(
          '. Para conseguir el efecto seda en el mar y equilibrar el rango dinámico del cielo frente a las rocas, añado un filtro ND64 (6 pasos) y un filtro degradado inverso GND 0.6 (2 pasos), logrando una exposición de '
        ),
        t('20s', { code: true }),
        t('.'),
      ],
    },
  },
  {
    sectionAnchor: 'c4-ejemplos-razonamiento',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c4-p70',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c4-ejemplos-razonamiento',
    blockType: 'sony_a7iv_note',
    payload: {
      title: 'Real-Time Eye AF (Humanos, Aves y Animales) e IBIS en la Sony Alpha 7 IV',
      summary:
        'Para ejecutar con precisión los ejemplos de este capítulo (retratos con foco crítico en el ojo y aves en vuelo a 1/1800s), la Sony Alpha 7 IV incorpora tecnologías clave:',
      bulletPoints: [
        'Reconocimiento de Ojo en Tiempo Real (Humano / Animal / Ave): En retratos a f/1.4–f/2.8 (donde la profundidad de campo es de pocos centímetros), activa [AF ocular] para que la cámara clave el foco exactamente en las pestañas/iris del sujeto.',
        'Modo AF-C + Seguimiento en Tiempo Real para acción y aves: Para aves en vuelo o deportes, selecciona modo de enfoque AF-C (Continuo) y cambia el sujeto de reconocimiento a [Ave] o [Animal].',
        'Estabilización en el cuerpo de 5 ejes (SteadyShot / IBIS de 5.5 pasos): Te permite disparar a pulso a velocidades más lentas cuando el sujeto está quieto sin necesidad de subir el ISO.',
      ],
      manualUrl: 'https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654629.html',
      manualLabel: 'Manual Sony A7 IV — Enfoque en los ojos (Ajuste cara/ojos)',
      cameraPath: 'MENU → Enfoque → AF cara/ojos → Motivo de reconocimiento (Humano / Animal / Ave)',
    },
  },
];

// ============================================================================
// BLOQUES DEL CAPÍTULO 5: Entendiendo el triángulo de exposición
// ============================================================================
export const CHAPTER_5_BLOCKS: SeedBlockInput[] = [
  {
    sectionAnchor: 'c5-como-funciona',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'Cómo funciona el triángulo de exposición',
      anchor: 'c5-como-funciona',
    },
  },
  {
    sectionAnchor: 'c5-como-funciona',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Dispones de tres elementos estrechamente relacionados entre sí para ajustar la exposición: la '
        ),
        t('apertura', { bold: true }),
        t(' (diafragma), la '),
        t('velocidad de obturación', { bold: true }),
        t(' (obturador) y la '),
        t('sensibilidad ISO', { bold: true }),
        t(' (sensor).'),
      ],
    },
  },
  {
    sectionAnchor: 'c5-como-funciona',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c5-p73',
      layout: 'diagram',
    },
  },
  {
    sectionAnchor: 'c5-como-funciona',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Si modificas uno de los parámetros que forman el triángulo, rompes su equilibrio (captando más o menos luz), por lo que tienes que modificar al menos uno de los otros dos para volver a equilibrarlo y mantener la misma exposición:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c5-como-funciona',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c5-p75',
      layout: 'diagram',
    },
  },
  {
    sectionAnchor: 'c5-apertura-focal',
    blockType: 'heading',
    payload: {
      level: 2,
      text: '1. La apertura, la distancia focal y el número f',
      anchor: 'c5-apertura-focal',
    },
  },
  {
    sectionAnchor: 'c5-apertura-focal',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'El diafragma deja abierto un orificio por el que pasa la luz hacia el sensor. El tamaño de ese orificio se indica mediante el '
        ),
        t('número f', { bold: true }),
        t(' ('),
        t('f/1.4, f/2, f/2.8, f/4, f/5.6, f/8, f/11, f/16...', { code: true }),
        t('):'),
      ],
    },
  },
  {
    sectionAnchor: 'c5-apertura-focal',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c5-p76',
      layout: 'diagram',
    },
  },
  {
    sectionAnchor: 'c5-apertura-focal',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          '¿Por qué una apertura de f/2.8 es mayor que una de f/8? Porque el número f es una fracción: es el resultado de dividir la '
        ),
        t('distancia focal (en mm)', { bold: true }),
        t(' entre el '),
        t('diámetro del orificio (en mm)', { bold: true }),
        t('.'),
      ],
    },
  },
  {
    sectionAnchor: 'c5-apertura-focal',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c5-p77',
      layout: 'diagram',
    },
  },
  {
    sectionAnchor: 'c5-apertura-focal',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'La distancia focal es la distancia entre el centro óptico del objetivo y el sensor, y determina el '
        ),
        t('campo de visión', { bold: true }),
        t(
          ': a menor distancia focal (ej. 14mm), mayor ángulo de visión; a mayor distancia focal (ej. 420mm), menor campo de visión y mayor magnificación del sujeto:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c5-apertura-focal',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c5-p78',
      layout: 'diagram',
    },
  },
  {
    sectionAnchor: 'c5-apertura-focal',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c5-p79',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c5-apertura-focal',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c5-p80',
      layout: 'portrait',
    },
  },
  {
    sectionAnchor: 'c5-apertura-focal',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('La escala estándar de números f de pasos completos es: '),
        t('f/1, f/1.4, f/2, f/2.8, f/4, f/5.6, f/8, f/11, f/16, f/22, f/32', { code: true }),
        t(
          '. Al pasar de un número f al siguiente más cerrado, el área del orificio se divide exactamente por dos, dejando pasar la mitad de luz (1 paso de luz menos):'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c5-apertura-focal',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c5-p82',
      layout: 'diagram',
    },
  },
  {
    sectionAnchor: 'c5-velocidad',
    blockType: 'heading',
    payload: {
      level: 2,
      text: '2. La velocidad de obturación (o tiempo de exposición)',
      anchor: 'c5-velocidad',
    },
  },
  {
    sectionAnchor: 'c5-velocidad',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Se mide en segundos o fracciones de segundo. La escala estándar de pasos completos es: '
        ),
        t('1s, 1/2s, 1/4s, 1/8s, 1/15s, 1/30s, 1/60s, 1/125s, 1/250s, 1/500s, 1/1000s...', {
          code: true,
        }),
        t(
          ' Cuando doblas el tiempo de exposición (por ejemplo de 1/8s a 1/4s), doblas exactamente la luz que llega al sensor (+1 paso de luz).'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c5-iso-ruido',
    blockType: 'heading',
    payload: {
      level: 2,
      text: '3. La sensibilidad ISO y el problema del ruido',
      anchor: 'c5-iso-ruido',
    },
  },
  {
    sectionAnchor: 'c5-iso-ruido',
    blockType: 'paragraph',
    payload: {
      segments: [
        t('La escala estándar de pasos completos de ISO es: '),
        t('100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600...', { code: true }),
        t(
          ' Conforme el ISO dobla su valor, también se duplica la amplificación de la señal (+1 paso). Siempre que sea posible, selecciona el '
        ),
        t('ISO base o nominal', { bold: true }),
        t(' de tu cámara (ISO 100) para obtener la máxima calidad y rango dinámico.'),
      ],
    },
  },
  {
    sectionAnchor: 'c5-iso-ruido',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'El precio a pagar al incrementar el ISO es la aparición de grano o ruido digital, como se aprecia en esta comparativa desde ISO 200 hasta ISO 25600:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c5-iso-ruido',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c5-p88',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c5-iso-ruido',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'En paisaje con poca luz sobre trípode, siempre es preferible mantener un ISO bajo (ej. ISO 200) y alargar la exposición (1min 50s) para evitar ruido en las sombras de las rocas:'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c5-iso-ruido',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c5-p91',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c5-iso-ruido',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'En cambio, en fotografía nocturna de la Vía Láctea, al estar limitados por la apertura máxima del objetivo (f/2.8) y el tiempo máximo para que las estrellas no dejen traza (30s), es imprescindible subir el ISO (ej. ISO 3200):'
        ),
      ],
    },
  },
  {
    sectionAnchor: 'c5-iso-ruido',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c5-p92',
      layout: 'wide',
    },
  },
  {
    sectionAnchor: 'c5-cubo-grifo',
    blockType: 'heading',
    payload: {
      level: 2,
      text: 'La exposición para novatos: la analogía del cubo y el grifo',
      anchor: 'c5-cubo-grifo',
    },
  },
  {
    sectionAnchor: 'c5-cubo-grifo',
    blockType: 'paragraph',
    payload: {
      segments: [
        t(
          'Imagina que quieres llenar un cubo de agua hasta el borde con un grifo. El agua es la luz (y su presión es la intensidad), lo abierto que tengas el grifo es la '
        ),
        t('apertura', { bold: true }),
        t(', el tiempo que dejes correr el agua es la '),
        t('velocidad de obturación', { bold: true }),
        t(' y el tamaño del cubo equivale al '),
        t('ISO', { bold: true }),
        t(' (un cubo más pequeño se llena antes con menos agua, igual que un ISO alto requiere menos luz pero almacena menos información):'),
      ],
    },
  },
  {
    sectionAnchor: 'c5-cubo-grifo',
    blockType: 'image_card',
    payload: {
      assetId: 'b1-c5-p95',
      layout: 'diagram',
    },
  },
  {
    sectionAnchor: 'c5-cubo-grifo',
    blockType: 'sony_a7iv_note',
    payload: {
      title: 'El Secreto del Sensor de la Sony Alpha 7 IV: ISO Dual Nativo (ISO 100 / ISO 800) y Auto ISO Min. SS',
      summary:
        'Cuando el libro explica que subir el ISO degrada linealmente la señal, debes saber que el sensor Exmor R de tu Sony Alpha 7 IV cuenta con arquitectura Dual Gain (Doble Ganancia Analógica):',
      bulletPoints: [
        'Primer ISO Base Nativo en ISO 100: Ofrece el máximo rango dinámico (~15 pasos) y cero ruido en condiciones de buena luz o paisaje con trípode.',
        'Segundo Circuito Analógico en ISO 800: Al llegar a ISO 800 en fotografía RAW, el sensor conmuta a un segundo circuito de alta ganancia que limpia drásticamente el ruido de lectura en las sombras. Por eso, en fotografía nocturna o interiores con tu A7 IV, disparar a ISO 800 produce sombras más limpias que a ISO 500 o 640.',
        'Rango de Auto ISO con Velocidad Mínima (ISO AUTO Vel. obt. mín.): En la Sony A7 IV puedes configurar Auto ISO con límite por ejemplo entre [ISO 100 – 6400] y ajustar [ISO AUTO Vel. obt. mín.] en "Más rápido" para que la cámara suba el ISO automáticamente antes de que la velocidad baje y trepide la foto.',
      ],
      manualUrl: 'https://helpguide.sony.net/ilc/2110/v1/es/contents/TP1000654684.html',
      manualLabel: 'Manual Sony A7 IV — Sensibilidad ISO y Vel. obt. mín. ISO AUTO',
      cameraPath: 'MENU → Exposición/Color → Exposición → ISO → Ajuste de rango ISO / Vel. obt. mín. ISO AUTO',
    },
  },
];
