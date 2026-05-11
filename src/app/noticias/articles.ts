export type BodySection =
  | { type: 'lead'; text: string }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'boldp'; text: string; bold: string };

export type RelatedProject = {
  emoji: string;
  name: string;
  location: string;
  price: string;
  priceDetail: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  country: string;
  countryCode: string;
  countryFlag: string;
  region?: string;
  tag: string;
  tagColor: string;
  date: string;
  readTime: number;
  featured?: boolean;
  coverEmoji: string;
  coverBg: string;
  body: BodySection[];
  relatedProjects?: RelatedProject[];
};

export const articles: Article[] = [
  {
    slug: 'balneario-camboriu-m2-mas-caro-brasil',
    title: 'Balneário Camboriú mantiene el m² más caro de Brasil por cuarto año consecutivo',
    excerpt: 'El índice FipeZAP de abril 2026 confirma que BC lidera con R$ 14.906/m², superando São Paulo y Río de Janeiro. Itapema se consolida en el #2 del ranking nacional, con el litoral norte de Santa Catarina como el mercado de mayor valorización del país.',
    country: 'Brasil',
    countryCode: 'br',
    countryFlag: '🇧🇷',
    region: 'Santa Catarina',
    tag: 'Mercado',
    tagColor: '#22c55e',
    date: '28 Abr 2026',
    readTime: 4,
    featured: true,
    coverEmoji: '🌊',
    coverBg: '#0a2318',
    body: [
      { type: 'lead', text: 'El índice FipeZAP de abril 2026 confirma que Balneário Camboriú lidera el ranking nacional con R$ 14.906/m², superando a São Paulo y Río de Janeiro por amplio margen. Itapema se consolida en el segundo lugar con R$ 14.843/m².' },
      { type: 'stats', items: [
        { value: 'R$ 14.906', label: 'M² BALNEÁRIO CAMBORIÚ' },
        { value: 'R$ 14.843', label: 'M² ITAPEMA (#2)' },
        { value: '+19.2%', label: 'VALORIZACIÓN 2022-2025' },
      ]},
      { type: 'h2', text: 'El fenómeno del litoral norte de Santa Catarina' },
      { type: 'boldp', text: 'El mercado inmobiliario del litoral norte de Santa Catarina atraviesa su cuarto año consecutivo de liderazgo en el ranking FipeZAP de ciudades con mayor valor del metro cuadrado en Brasil. Balneário Camboriú cerró abril 2026 con R$ 14.906/m², representando una prima del 55.8% sobre la media nacional de R$ 9.570/m².', bold: 'Balneário Camboriú cerró abril 2026 con R$ 14.906/m²' },
      { type: 'p', text: 'La ciudad de Itapema, ubicada a apenas 20 kilómetros al sur, se consolida en el segundo lugar del ranking nacional con R$ 14.843/m², lo que confirma al corredor BC-Itapema como el eje de mayor valorización inmobiliaria de todo el país.' },
      { type: 'h2', text: 'El efecto Porto Belo y la Costa Esmeralda' },
      { type: 'boldp', text: 'El impacto de la valorización se extiende hacia los municipios vecinos. Porto Belo movió R$ 1.54 mil millones en VGV en solo 90 días según datos de DWV, con proyectos que se vendieron el 100% antes de la entrega y registraron plusvalías de hasta 86% en tres años. Bombinhas, con sus aguas cristalinas y la Reserva Biológica Marinha do Arvoredo, también experimenta demanda sostenida con escasez estructural de nuevos desarrollos.', bold: 'Porto Belo movió R$ 1.54 mil millones en VGV en solo 90 días' },
    ],
    relatedProjects: [
      { emoji: '🌊', name: 'Riviera Home Club', location: 'Itapema · Santa Catarina · #2 m² más caro Brasil', price: 'USD 163.761', priceDetail: 'Ingreso USD 16.376 · 100 cuotas desde USD 573' },
      { emoji: '⛵', name: 'Catalunya Porto Belo', location: 'Porto Belo · Costa Esmeralda · SC', price: 'USD 250.368', priceDetail: 'Ingreso USD 37.500 · 84 cuotas' },
      { emoji: '🏄', name: 'Summer Dreams', location: 'Bombinhas · 50 metros de la playa · SC', price: 'USD 403.012', priceDetail: 'Ingreso USD 40.300 · 84 cuotas' },
    ],
  },
  {
    slug: 'miami-destino-1-inversores-latinoamericanos-2026',
    title: 'Miami consolida su posición como destino #1 para inversores latinoamericanos en 2026',
    excerpt: 'Brickell y Wynwood registran mínimos históricos de vacancia. Las rentabilidades de alquiler superan el 8% anual en propiedades de nueva construcción y la inversión extranjera en el sur de Florida creció un 42% respecto al año anterior.',
    country: 'USA',
    countryCode: 'us',
    countryFlag: '🇺🇸',
    tag: 'Análisis',
    tagColor: '#eab308',
    date: '25 Abr 2026',
    readTime: 5,
    coverEmoji: '🏙️',
    coverBg: '#0a1225',
    body: [
      { type: 'lead', text: 'Brickell y Wynwood registran mínimos históricos de vacancia. Las rentabilidades de alquiler superan el 8% anual en propiedades de nueva construcción y la inversión extranjera en el sur de Florida creció un 42% respecto al año anterior.' },
      { type: 'stats', items: [
        { value: '+8%', label: 'RENTABILIDAD ALQUILER ANUAL' },
        { value: '+42%', label: 'INVERSIÓN EXTRANJERA YOY' },
        { value: 'USD 620K', label: 'PRECIO MEDIANO CONDOMINIOS' },
      ]},
      { type: 'h2', text: 'Florida como destino de capital latinoamericano' },
      { type: 'p', text: 'El sur de Florida se consolida como la primera elección del inversor latinoamericano que busca diversificar en dólares. El 64% de los compradores extranjeros en Miami-Dade provienen de América Latina, con Argentina, Venezuela y Colombia entre los tres principales países de origen.' },
      { type: 'h2', text: 'Brickell y el segmento corporativo' },
      { type: 'boldp', text: 'El corredor financiero de Brickell registra tasas de vacancia de apenas el 2.1% — mínimo histórico. Más de 70 fondos de cobertura y empresas Fortune 500 trasladaron operaciones a Miami desde 2020, generando demanda estructural de alquiler corporativo con contratos de 1 a 2 años en dólares.', bold: 'tasas de vacancia de apenas el 2.1%' },
    ],
  },
  {
    slug: 'dubai-record-180000-transacciones-inmobiliarias',
    title: 'Dubai supera las 180.000 transacciones inmobiliarias y bate su récord histórico',
    excerpt: 'Con precios aún 30% por debajo de Londres y sin impuesto a las ganancias, el emirato sigue siendo la apuesta más atractiva de Medio Oriente para inversores internacionales.',
    country: 'Dubai',
    countryCode: 'ae',
    countryFlag: '🇦🇪',
    tag: 'Oportunidad',
    tagColor: '#f97316',
    date: '22 Abr 2026',
    readTime: 3,
    coverEmoji: '🌆',
    coverBg: '#1a0d02',
    body: [
      { type: 'lead', text: 'El Departamento de Tierras de Dubái (DLD) registró 180.438 transacciones en 2025 — nuevo máximo histórico. Con precios aún 30% por debajo de Londres, 0% de impuesto a las ganancias y rentabilidades del 6-9% anual, el emirato mantiene su posición como el mercado más dinámico de Medio Oriente.' },
      { type: 'stats', items: [
        { value: '180.438', label: 'TRANSACCIONES 2025' },
        { value: '0%', label: 'IMPUESTO A LAS GANANCIAS' },
        { value: '30%', label: 'MÁS BARATO QUE LONDRES' },
      ]},
      { type: 'h2', text: 'Un mercado con demanda estructural' },
      { type: 'p', text: 'Dubai recibe más de 18 millones de visitantes anuales y atrae a empresas y family offices de todo el mundo. La Golden Visa de 10 años para inversores desde AED 2 millones genera demanda sostenida de compradores internacionales que buscan establecer residencia fiscal en los EAU.' },
      { type: 'h2', text: 'Zonas de mayor dinamismo' },
      { type: 'boldp', text: 'Downtown Dubai y Dubai Marina concentran el 40% de las transacciones de lujo. Business Bay lidera el segmento mid-range con proyectos en pozo que registran apreciación del 15-25% entre la compra y la entrega. Palm Jumeirah mantiene escasez estructural de oferta con precios al alza.', bold: 'Business Bay lidera el segmento mid-range' },
    ],
  },
  {
    slug: 'buenos-aires-metro-cuadrado-atrae-inversores',
    title: 'Buenos Aires: el metro cuadrado más accesible de la región vuelve a atraer inversores',
    excerpt: 'Palermo y Puerto Madero registran la mayor demanda de compradores extranjeros desde 2018. El precio en dólares sigue en mínimos históricos mientras la demanda local se reactiva.',
    country: 'Argentina',
    countryCode: 'ar',
    countryFlag: '🇦🇷',
    tag: 'Noticia',
    tagColor: '#60a5fa',
    date: '18 Abr 2026',
    readTime: 4,
    coverEmoji: '🏛️',
    coverBg: '#0a0a1f',
    body: [
      { type: 'lead', text: 'Palermo y Puerto Madero registran la mayor demanda de compradores extranjeros desde 2018. El precio promedio del m² en Buenos Aires se ubica entre USD 1.800 y USD 2.200, mientras que en ciudades comparables de la región el mismo activo cuesta entre 3 y 5 veces más.' },
      { type: 'stats', items: [
        { value: 'USD 1.800', label: 'PRECIO PROMEDIO M² BsAs' },
        { value: '+22%', label: 'OPERACIONES YOY Q1 2026' },
        { value: '3-5x', label: 'MÁS BARATO QUE CIUDADES COMPARABLES' },
      ]},
      { type: 'h2', text: 'La ventana de oportunidad' },
      { type: 'p', text: 'El mercado inmobiliario argentino opera históricamente en dólares. Esto implica que el comprador extranjero compra y vende en la misma moneda, sin exposición al tipo de cambio. Palermo, Belgrano y Puerto Madero presentan las mejores relaciones precio-alquiler, con rentabilidades brutas del 4-6% anual en dólares.' },
      { type: 'h2', text: 'Perfil del inversor extranjero actual' },
      { type: 'boldp', text: 'Uruguayos, paraguayos, españoles e israelíes lideran las compras en el segmento de no residentes. El atractivo es claro: precios en mínimos históricos, buena infraestructura urbana y activos dolarizados en una de las ciudades más cosmopolitas de América Latina.', bold: 'precios en mínimos históricos' },
    ],
  },
  {
    slug: 'aeropuerto-maragogi-obra-transformara-nordeste',
    title: 'Aeropuerto de Maragogi: la obra que transformará el Nordeste',
    excerpt: 'La nueva infraestructura aeroportuaria conectará directamente Maragogi con São Paulo, Río de Janeiro y vuelos internacionales. Los proyectos de la zona ya anticipan la demanda.',
    country: 'Brasil',
    countryCode: 'br',
    countryFlag: '🇧🇷',
    region: 'Nordeste',
    tag: 'Mercado',
    tagColor: '#22c55e',
    date: '22 Abr 2026',
    readTime: 3,
    coverEmoji: '✈️',
    coverBg: '#0a2318',
    body: [
      { type: 'lead', text: 'El aeropuerto internacional de Maragogi se proyecta como la obra de infraestructura más transformadora del litoral norte de Alagoas. La conectividad directa con los principales hub de Brasil y el exterior cambiará la ecuación de demanda turística de toda la región.' },
      { type: 'h2', text: 'El efecto aeropuerto en el litoral nordestino' },
      { type: 'p', text: 'Los desarrolladores inmobiliarios de la franja Maragogi-Pernambuco ya están posicionando proyectos anticipando el incremento de demanda. La región cuenta con algunas de las aguas más cristalinas del mundo y una infraestructura hotelera y residencial en rápida expansión.' },
      { type: 'boldp', text: 'Los precios del m² en proyectos en pozo de la zona oscilan entre R$ 8.000 y R$ 12.000, significativamente por debajo del litoral sur de Santa Catarina, con potencial de convergencia a medida que mejora la conectividad. Neymar Sports ya confirmó R$ 7.5B de inversión en la franja.', bold: 'Neymar Sports ya confirmó R$ 7.5B de inversión' },
    ],
  },
  {
    slug: 'porto-belo-r154b-vgv-nueva-estrella-litoral',
    title: 'Porto Belo: R$ 1.54B en VGV en 90 días — la nueva estrella del litoral',
    excerpt: 'Proyectos que se vendieron el 100% antes de la entrega y registraron plusvalías de hasta 86% en tres años. Porto Belo se posiciona como la próxima gran apuesta del litoral norte de SC.',
    country: 'Brasil',
    countryCode: 'br',
    countryFlag: '🇧🇷',
    region: 'Santa Catarina',
    tag: 'Mercado',
    tagColor: '#22c55e',
    date: '15 Abr 2026',
    readTime: 4,
    coverEmoji: '⛵',
    coverBg: '#0a2318',
    body: [
      { type: 'lead', text: 'Según datos de DWV, Porto Belo movilizó R$ 1.54 mil millones en VGV en apenas 90 días. Los proyectos se vendieron en su totalidad antes de la entrega y los compradores registraron plusvalías de hasta 86% en un período de tres años.' },
      { type: 'stats', items: [
        { value: 'R$ 1.54B', label: 'VGV EN 90 DÍAS' },
        { value: '100%', label: 'PROYECTOS VENDIDOS PRE-ENTREGA' },
        { value: '+86%', label: 'PLUSVALÍA MÁXIMA EN 3 AÑOS' },
      ]},
      { type: 'h2', text: 'El corredor BC-Itapema-Porto Belo' },
      { type: 'p', text: 'El fenómeno de Balneário Camboriú se está extendiendo hacia el sur, convirtiendo a Porto Belo y Bombinhas en los mercados de mayor crecimiento relativo del litoral de Santa Catarina. La escasez de terrenos en BC impulsa la demanda hacia municipios vecinos con precios aún accesibles.' },
      { type: 'boldp', text: 'Bombinhas, con la Reserva Biológica Marinha do Arvoredo, experimenta demanda sostenida con escasez estructural de nuevos desarrollos. Los proyectos activos en ambas localidades se agotan en etapas tempranas.', bold: 'escasez estructural de nuevos desarrollos' },
    ],
  },
  {
    slug: 'neymar-sports-r75b-franja-maragogi-pernambuco',
    title: 'Neymar Sports invierte R$ 7.5B en la franja Maragogi-Pernambuco',
    excerpt: 'El megaproyecto consolidará el litoral nordestino como destino de inversión de clase mundial con hoteles boutique, residencias de lujo y marina privada.',
    country: 'Brasil',
    countryCode: 'br',
    countryFlag: '🇧🇷',
    region: 'Nordeste',
    tag: 'Oportunidad',
    tagColor: '#f97316',
    date: '8 Abr 2026',
    readTime: 3,
    coverEmoji: '⚽',
    coverBg: '#0a2318',
    body: [
      { type: 'lead', text: 'Neymar Sports, el fondo inmobiliario liderado por el futbolista, anunció una inversión de R$ 7.5 mil millones en el desarrollo de un complejo turístico-residencial en la franja costera entre Maragogi (Alagoas) y el litoral norte de Pernambuco.' },
      { type: 'h2', text: 'El proyecto en detalle' },
      { type: 'p', text: 'El megaproyecto incluirá hoteles boutique, residencias de lujo, una marina privada y un campo de golf. La inversión se distribuirá en múltiples etapas a lo largo de 8 años, con los primeros lanzamientos previstos para el segundo semestre de 2026.' },
      { type: 'boldp', text: 'La zona de Maragogi ya cuenta con infraestructura de alta gama gracias al turismo internacional que atrae sus piscinas naturales. La llegada de Neymar Sports confirma el potencial de la región y posiciona al Nordeste como el próximo gran destino de inversión inmobiliaria de Brasil.', bold: 'posiciona al Nordeste como el próximo gran destino' },
    ],
  },
];
