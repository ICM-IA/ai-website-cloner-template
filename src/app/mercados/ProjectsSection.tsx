'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

const MapView = dynamic(() => import('@/components/MapView'), { ssr: false });

type PaymentStep = { label: string; amount: string; detail?: string };

type Project = {
  id: number;
  name: string;
  city: string;
  zone: string;
  country: string;
  countryCode: string;
  type: string;
  unitType: string;
  price: string;
  priceNum: number;
  entry?: string;
  status: string;
  statusColor: string;
  entrega: string;
  estado: string;
  financiacion: string;
  airbnb: boolean;
  lat: number;
  lng: number;
  photos: string[];
  desc: string;
  // rich detail fields
  whyInvest?: string;
  features?: string[];
  videoUrl?: string;
  paymentPlan?: PaymentStep[];
  rentabilidad?: string;
};

const projects: Project[] = [
  // ── USA ──
  {
    id:119, name:'Gaia Residences', city:'Hollywood, Florida', zone:'Hollywood',
    country:'USA', countryCode:'us', unitType:'Studio', type:'Apart-hotel',
    price:'USD 480.000', priceNum:480000, entry:'USD 24.000',
    status:'Pre-venta', statusColor:'#22c55e',
    entrega:'2027', estado:'Pre-construcción', financiacion:'20% + cuotas', airbnb:true,
    lat:26.0146456, lng:-80.1428774,
    photos:['/images/projects/gaia_residences/photo1.png'],
    desc:'Studios desde 564 SF en Hollywood Golf, Miami. Short term rental permitido · Club de playa privado.',
    whyInvest:'Gaia Residences combina la ubicación premium de Hollywood, Florida con retornos de corto plazo superiores al mercado. Con acceso directo al club de playa privado y gestión hotelera integrada, el proyecto ofrece rendimientos comprobados desde el primer año de operación. Ideal para inversores que buscan un activo en USD con alta liquidez.',
    features:[
      'Club de playa privado exclusivo','Pool infinity con vista al océano',
      'Short term rental sin restricciones','Gym & spa de primer nivel',
      'Concierge 24/7','Lobby con arte contemporáneo',
      'Estacionamiento incluido','Unidades desde 564 SF',
      'Diseño por arquitecto certificado LEED','WiFi de alta velocidad en amenities',
    ],
    videoUrl:'https://www.youtube.com/embed/vscwfdAmc00?rel=0&modestbranding=1',
    paymentPlan:[
      { label:'Reserva inicial', amount:'USD 24.000', detail:'20% del valor total al firmar' },
      { label:'Cuotas mensuales', amount:'USD 2.000/mes', detail:'Durante 24 meses hasta entrega' },
      { label:'Entrega del proyecto', amount:'Saldo restante', detail:'Financiación bancaria disponible' },
    ],
    rentabilidad:'+10% anual',
  },
  {
    id:120, name:'Seven Park Residences', city:'Hallandale, Florida', zone:'Hallandale',
    country:'USA', countryCode:'us', unitType:'Studio', type:'Apart-hotel',
    price:'USD 456.900', priceNum:456900, entry:'USD 91.380',
    status:'Entrega Mar 2027', statusColor:'#22c55e',
    entrega:'2027', estado:'En obra', financiacion:'50/50', airbnb:true,
    lat:25.9778688, lng:-80.1454094,
    photos:['/images/projects/seven_park_residences/photo1.png'],
    desc:'Studios desde 337 SF en Hallandale Gulfstream. Short term rental permitido.',
    whyInvest:'Seven Park está ubicado a metros del Gulfstream Park, uno de los corredores de entretenimiento más activos de South Florida. Su esquema 50/50 lo convierte en uno de los accesos más sencillos del portafolio: reservás con el 50% y pagás el resto en entrega.',
    features:[
      'Rooftop pool & lounge','Short term rental permitido',
      'A pasos del Gulfstream Park','Cocina gourmet en amenities',
      'Coworking privado', 'Seguridad 24/7',
      'Studios desde 337 SF','Entrega estimada 1Q 2027',
    ],
    paymentPlan:[
      { label:'Primer pago', amount:'USD 91.380', detail:'50% al firmar el contrato' },
      { label:'Entrega del proyecto', amount:'USD 91.380', detail:'50% restante al recibir la llave' },
    ],
    rentabilidad:'+9% anual',
  },
  {
    id:121, name:'Midtown Park', city:'Midtown, Miami', zone:'Midtown',
    country:'USA', countryCode:'us', unitType:'Studio / 1 dorm.', type:'Residencial Lujo',
    price:'USD 700.000', priceNum:700000,
    status:'Entrega 2029', statusColor:'#22c55e',
    entrega:'2029', estado:'Pre-construcción', financiacion:'10+10+10+70', airbnb:false,
    lat:25.805344, lng:-80.1947314,
    photos:['/images/projects/midtown_park/photo1.png'],
    desc:'Studios desde 600 SF en Midtown Miami. Diseñado por Meyer Davis Studio. 4 alquileres/año.',
    whyInvest:'Diseñado por el reconocido Meyer Davis Studio, Midtown Park redefine el lujo residencial en uno de los barrios de mayor valorización de Miami. Permite hasta 4 alquileres por año, ideal para uso propio y renta combinada.',
    features:[
      'Diseño por Meyer Davis Studio','Hasta 4 alquileres/año',
      'Studios desde 600 SF','Terraza con vista al skyline',
      'Fitness center boutique','Concierge personalizado',
      'Pet-friendly','Zona comercial en planta baja',
    ],
    paymentPlan:[
      { label:'Reserva', amount:'10%', detail:'Al firmar la reserva' },
      { label:'A los 6 meses', amount:'10%' },
      { label:'A los 12 meses', amount:'10%' },
      { label:'Entrega', amount:'70%', detail:'Financiación bancaria disponible' },
    ],
    rentabilidad:'+7% anual',
  },
  {
    id:122, name:'Frida Kahlo Wynwood', city:'Wynwood, Miami', zone:'Wynwood',
    country:'USA', countryCode:'us', unitType:'Studio', type:'Residencial Lujo',
    price:'USD 498.000', priceNum:498000,
    status:'Entrega 2029', statusColor:'#22c55e',
    entrega:'2029', estado:'Pre-construcción', financiacion:'10+10+10+70', airbnb:true,
    lat:25.8018484, lng:-80.1994662,
    photos:['/images/projects/frida_kahlo_wynwood_residences/photo1.png'],
    desc:'Studios desde 396 SF en Wynwood Miami. Sin restricciones de alquiler. Depto + oficina incluida.',
    whyInvest:'En el corazón del barrio artístico más vibrante de Miami, Frida Kahlo Wynwood ofrece una propuesta única: cada unidad incluye un estudio/oficina separado, sin restricciones de alquiler a corto plazo. Ideal para nómades digitales y gestión Airbnb de alta rentabilidad.',
    features:[
      'Sin restricciones de alquiler','Depto + oficina incluida por unidad',
      'Studios desde 396 SF','En el corazón de Wynwood Art District',
      'Arte público integrado al edificio','Rooftop social',
      'Coworking en amenities','Entrega 2029',
    ],
    paymentPlan:[
      { label:'Reserva', amount:'10%' },
      { label:'A los 6 meses', amount:'10%' },
      { label:'A los 12 meses', amount:'10%' },
      { label:'Entrega 2029', amount:'70%' },
    ],
    rentabilidad:'+10% anual',
  },
  {
    id:124, name:'House of Wellness Brickell', city:'Brickell, Miami', zone:'Brickell',
    country:'USA', countryCode:'us', unitType:'Studio / 1 dorm.', type:'Residencial Lujo',
    price:'USD 385.000', priceNum:385000, entry:'USD 38.500',
    status:'Entrega 4Q 2029', statusColor:'#22c55e',
    entrega:'2029', estado:'Pre-construcción', financiacion:'10+5+5+5+75', airbnb:true,
    lat:25.7653051, lng:-80.1967394,
    photos:['/images/projects/house_of_wellness_brickell/photo1.png'],
    desc:'Studios desde 337 SF en Brickell. 30 días mín · 4 veces al año.',
    whyInvest:'House of Wellness es el primer edificio residencial de bienestar holístico en Brickell. Con spa, meditación y nutrición integrados al diseño, apunta al segmento de mayor crecimiento en el mercado de lujo de Miami. 30 días mínimo de alquiler, 4 veces al año.',
    features:[
      'Spa & wellness integrado','Clases de yoga y meditación',
      'Cocina nutricional en amenities','Pool bioclimática',
      'Studios desde 337 SF','Alquiler 30 días mín × 4/año',
      'Concierge wellness 24/7','Certificación de construcción sostenible',
      'Vista al Downtown de Miami','Financiación fraccionada accesible',
    ],
    paymentPlan:[
      { label:'Reserva', amount:'10%', detail:'USD 38.500 para asegurar unidad' },
      { label:'A los 3 meses', amount:'5%' },
      { label:'A los 6 meses', amount:'5%' },
      { label:'A los 9 meses', amount:'5%' },
      { label:'Entrega 4Q 2029', amount:'75%' },
    ],
    rentabilidad:'+8% anual',
  },
  {
    id:125, name:'Domus Brickell Center', city:'Brickell, Miami', zone:'Brickell',
    country:'USA', countryCode:'us', unitType:'Studio', type:'Apart-hotel',
    price:'USD 515.000', priceNum:515000, entry:'USD 51.500',
    status:'Entrega 2028', statusColor:'#22c55e',
    entrega:'2028', estado:'En obra', financiacion:'10+10+5+5+70', airbnb:true,
    lat:25.7636117, lng:-80.1974938,
    photos:['/images/projects/domus_brickell_center/photo1.png'],
    desc:'Studios desde 417 SF en Brickell. Short term rental permitido.',
    features:[
      'Short term rental sin límites','Studios desde 417 SF',
      'Brickell City Centre a pasos','Pool climatizada + deck',
      'Business center','Seguridad 24/7',
    ],
    paymentPlan:[
      { label:'Reserva', amount:'10%', detail:'Al firmar contrato' },
      { label:'A los 6 meses', amount:'10%' },
      { label:'A los 9 meses', amount:'5%' },
      { label:'A los 12 meses', amount:'5%' },
      { label:'Entrega 2028', amount:'70%' },
    ],
    rentabilidad:'+9% anual',
  },
  {
    id:62, name:'VICEROY Brickell', city:'Brickell, Miami', zone:'Brickell',
    country:'USA', countryCode:'us', unitType:'1-3 dorm.', type:'Residencial Lujo',
    price:'USD 8.300/m²', priceNum:830000,
    status:'En Construcción', statusColor:'#C9922A',
    entrega:'2027', estado:'En obra', financiacion:'Consultar', airbnb:false,
    lat:25.7685407, lng:-80.1911381,
    photos:['/images/projects/viceroy_brickell/photo1.png'],
    desc:'Emblemático Viceroy en Brickell combinando vida de lujo con ubicación privilegiada frente a la bahía.',
    rentabilidad:'+7% anual',
  },
  {
    id:64, name:'Faena Residences', city:'Miami Beach', zone:'Miami Beach',
    country:'USA', countryCode:'us', unitType:'2-4 dorm.', type:'Residencial Ultra Lujo',
    price:'USD 5.200/m²', priceNum:1200000,
    status:'Pre-venta', statusColor:'#22c55e',
    entrega:'2028', estado:'Pre-construcción', financiacion:'Consultar', airbnb:false,
    lat:25.7697437, lng:-80.1940942,
    photos:['/images/projects/faena_residences/photo1.png'],
    desc:'Icónicas residencias de la marca Faena en Miami Beach, diseño de lujo y ubicación excepcional.',
    rentabilidad:'+6% anual',
  },
  {
    id:127, name:'Square Offices Hallandale', city:'Hallandale, Florida', zone:'Hallandale',
    country:'USA', countryCode:'us', unitType:'Oficina/Studio', type:'Oficinas',
    price:'USD 233.900', priceNum:233900, entry:'USD 23.390',
    status:'Entrega 2028', statusColor:'#22c55e',
    entrega:'2028', estado:'Pre-construcción', financiacion:'50/50', airbnb:true,
    lat:25.9859334, lng:-80.1527919,
    photos:['/images/projects/square_offices_hallandale/photo1.png'],
    desc:'Studios/oficinas desde 321 SF en Hallandale Blvd. Short term rental.',
    paymentPlan:[
      { label:'Primer pago', amount:'USD 23.390', detail:'50% al firmar' },
      { label:'Entrega 2028', amount:'USD 23.390', detail:'50% restante' },
    ],
    rentabilidad:'+9% anual',
  },
  // ── Brasil ──
  {
    id:47, name:'Carneiros Park Flats', city:'Praia dos Carneiros, PE', zone:'Nordeste',
    country:'Brasil', countryCode:'br', unitType:'Studio 25m²', type:'Flat Studio',
    price:'USD 65.191', priceNum:65191, entry:'U$ 2.795',
    status:'Entrega Dic 2026', statusColor:'#22c55e',
    entrega:'2026', estado:'En obra', financiacion:'Directa', airbnb:true,
    lat:-8.7175038, lng:-35.0870852,
    photos:['/images/projects/carneiros_park/photo1.png'],
    desc:'Carneiros Park Flats en Praia dos Carneiros. Flat Studio 25m². Fox Construtora.',
    whyInvest:'Praia dos Carneiros es una de las playas más hermosas del Nordeste brasileño, con alta demanda turística todo el año. El proyecto de Fox Construtora ofrece ingresar con solo USD 2.795, con retornos comprobados por gestión Airbnb.',
    features:[
      'A 200m del mar','Gestión hotelera incluida',
      'Studio totalmente amoblado','Piscina y área de lazer',
      'Airbnb permitido','Rendimiento operativo garantizado',
    ],
    rentabilidad:'+12% anual',
  },
  {
    id:48, name:'Max Carneiros Exclusive', city:'Praia dos Carneiros, PE', zone:'Nordeste',
    country:'Brasil', countryCode:'br', unitType:'1 dorm. 50m²', type:'Residencial',
    price:'USD 78.185', priceNum:78185, entry:'U$ 3.893',
    status:'Entrega 2029', statusColor:'#22c55e',
    entrega:'2029', estado:'Pre-construcción', financiacion:'Directa', airbnb:true,
    lat:-8.7155543, lng:-35.0878564,
    photos:['/images/projects/max_carneiros_exclusive/photo1.png'],
    desc:'Max Carneiros Exclusive. 1 dormitorio con piscina privada 50m². Fox Construtora.',
    features:[
      'Piscina privada por unidad','1 dormitorio 50m²',
      'Frente al mar','Gestión hotelera disponible',
      'Amueblado completo','Airbnb permitido',
    ],
    rentabilidad:'+13% anual',
  },
  {
    id:49, name:'Tamana Beach Studios', city:'Tamandaré, Pernambuco', zone:'Nordeste',
    country:'Brasil', countryCode:'br', unitType:'Studio 29m²', type:'Flat Studio',
    price:'USD 43.236', priceNum:43236, entry:'U$ 2.163',
    status:'Entrega Sep 2028', statusColor:'#22c55e',
    entrega:'2028', estado:'En obra', financiacion:'Directa', airbnb:true,
    lat:-8.7323333, lng:-35.0910556,
    photos:['/images/projects/tamana_beach/photo1.png'],
    desc:'Studio 29m² a 170m del mar. Fox Construtora.',
    rentabilidad:'+12% anual',
  },
  {
    id:53, name:'PRIVILEGE Maragogi', city:'Maragogi, Alagoas', zone:'Nordeste',
    country:'Brasil', countryCode:'br', unitType:'Studio 32m²', type:'Apart-Hotel',
    price:'USD 64.103', priceNum:64103,
    status:'Entrega Jul 2027', statusColor:'#C9922A',
    entrega:'2027', estado:'En obra', financiacion:'Directa', airbnb:true,
    lat:-8.9313023, lng:-35.1650000,
    photos:['/images/projects/privilege_maragogi/photo1.png'],
    desc:'Studio 32m² frente al mar. Fox Construtora.',
    rentabilidad:'+14% anual',
  },
  {
    id:54, name:'Brisas de Maragogi', city:'Maragogi, Alagoas', zone:'Nordeste',
    country:'Brasil', countryCode:'br', unitType:'1 dorm. 35m²', type:'Residencial',
    price:'USD 63.869', priceNum:63869, entry:'U$ 6.387',
    status:'En Construcción 2029', statusColor:'#C9922A',
    entrega:'2029', estado:'En obra', financiacion:'Directa', airbnb:true,
    lat:-8.9239573, lng:-35.1585801,
    photos:['/images/projects/brisas_de_maragogi/photo1.png'],
    desc:'1 dormitorio 35m² frente al mar. Fox Construtora.',
    rentabilidad:'+13% anual',
  },
  {
    id:112, name:'Beach Square', city:'Porto de Galinhas, PE', zone:'Nordeste',
    country:'Brasil', countryCode:'br', unitType:'Studio 22m²', type:'Flat Studio',
    price:'USD 59.104', priceNum:59104, entry:'U$ 8.862',
    status:'Entrega Ene 2028', statusColor:'#22c55e',
    entrega:'2028', estado:'Pre-construcción', financiacion:'Directa', airbnb:true,
    lat:-8.5026, lng:-35.0026,
    photos:['/images/projects/beach_square/photo1.png'],
    desc:'Beach Square en Porto de Galinhas. Studio 22m². Fox Construtora.',
    rentabilidad:'+12% anual',
  },
  {
    id:97, name:'Caminho do mar', city:'Maragogi, Alagoas', zone:'Nordeste',
    country:'Brasil', countryCode:'br', unitType:'1 dorm. 34m²', type:'Residencial',
    price:'USD 95.522', priceNum:95522, entry:'U$ 23.910',
    status:'Entrega Ago 2027', statusColor:'#22c55e',
    entrega:'2027', estado:'En obra', financiacion:'Directa', airbnb:true,
    lat:-8.9847236, lng:-35.1908857,
    photos:['/images/projects/caminho_do_mar/photo1.png'],
    desc:'1 dorm. 34m² · ¡Última unidad disponible!',
    rentabilidad:'+13% anual',
  },
  {
    id:115, name:'14 BIS Home Club', city:'Porto Belo, SC', zone:'Sur SC',
    country:'Brasil', countryCode:'br', unitType:'Apart-hotel', type:'Apart-hotel Club',
    price:'USD 123.000', priceNum:123000, entry:'U$ 12.311',
    status:'Entrega 2029', statusColor:'#22c55e',
    entrega:'2029', estado:'Pre-construcción', financiacion:'Directa', airbnb:true,
    lat:-27.147678, lng:-48.5925807,
    photos:['/images/projects/14_bis_home_club/photo1.png'],
    desc:'14 BIS Home Club en Porto Belo. Apart-hotel a 700m del Pier. Amoblado.',
    rentabilidad:'+11% anual',
  },
  {
    id:116, name:'Atlantic Tower', city:'Porto Belo, SC', zone:'Sur SC',
    country:'Brasil', countryCode:'br', unitType:'Apart-hotel', type:'Apart-hotel',
    price:'USD 111.760', priceNum:111760, entry:'U$ 11.170',
    status:'Entrega 2027', statusColor:'#22c55e',
    entrega:'2027', estado:'En obra', financiacion:'Directa', airbnb:true,
    lat:-27.1605858, lng:-48.5631374,
    photos:['/images/projects/atlantic_tower/photo1.png'],
    desc:'Atlantic Tower en Porto Belo SC. Verbena.',
    rentabilidad:'+11% anual',
  },
  {
    id:118, name:'Breeza', city:'Jurerê Internacional, SC', zone:'Sur SC',
    country:'Brasil', countryCode:'br', unitType:'Studio', type:'Residencial',
    price:'USD 80.650', priceNum:80650, entry:'U$ 2.210',
    status:'Entrega 2029', statusColor:'#22c55e',
    entrega:'2029', estado:'Pre-construcción', financiacion:'Directa', airbnb:true,
    lat:-27.4415164, lng:-48.4923742,
    photos:['/images/projects/breeza/photo1.png'],
    desc:'Breeza en Jurerê Internacional. A 300m de la playa.',
    rentabilidad:'+10% anual',
  },
  {
    id:117, name:'Essenzia', city:'Canasvieiras, Florianópolis', zone:'Sur SC',
    country:'Brasil', countryCode:'br', unitType:'Studio', type:'Residencial',
    price:'USD 65.400', priceNum:65400, entry:'U$ 6.400',
    status:'Entrega 2029', statusColor:'#22c55e',
    entrega:'2029', estado:'Pre-construcción', financiacion:'Directa', airbnb:true,
    lat:-27.4292216, lng:-48.4713605,
    photos:['/images/projects/essenzia/photo1.png'],
    desc:'Essenzia en Canasvieiras, Florianópolis. Desarrollado por Nowa.',
    rentabilidad:'+10% anual',
  },
  {
    id:8, name:'ALMARE SPE', city:'Jurerê Internacional, SC', zone:'Sur SC',
    country:'Brasil', countryCode:'br', unitType:'2-3 dorm.', type:'Residencial Lujo',
    price:'USD 4.500/m²', priceNum:450000,
    status:'Entrega Feb 2030', statusColor:'#C9922A',
    entrega:'2030', estado:'En obra', financiacion:'Directa', airbnb:false,
    lat:-27.4415328, lng:-48.4921169,
    photos:['/images/projects/almare_spe/photo1.png'],
    desc:'Proyecto de alta gama frente al mar en Jurerê Internacional.',
    rentabilidad:'+8% anual',
  },
  // ── Argentina ──
  { id:70, name:'Feel Belgrano G&D', city:'Belgrano, Buenos Aires', zone:'CABA', country:'Argentina', countryCode:'ar', unitType:'1-3 dorm.', type:'Residencial', price:'USD 2.600/m²', priceNum:200000, status:'En Construcción', statusColor:'#C9922A', entrega:'2026', estado:'En obra', financiacion:'En pesos', airbnb:false, lat:-34.5615042, lng:-58.4537139, photos:['/images/proximamente.svg'], desc:'G&D Developers en Belgrano, Buenos Aires.', rentabilidad:'+6% anual' },
  { id:71, name:'OM Palermo Newbery', city:'Palermo, Buenos Aires', zone:'CABA', country:'Argentina', countryCode:'ar', unitType:'1-2 dorm.', type:'Residencial', price:'USD 2.800/m²', priceNum:180000, status:'En Construcción', statusColor:'#C9922A', entrega:'2026', estado:'En obra', financiacion:'En pesos', airbnb:false, lat:-34.5820981, lng:-58.4488594, photos:['/images/proximamente.svg'], desc:'Torre en Palermo Hollywood, diseño contemporáneo.', rentabilidad:'+6% anual' },
  { id:72, name:'Distrito Colegiales G&D', city:'Colegiales, Buenos Aires', zone:'CABA', country:'Argentina', countryCode:'ar', unitType:'1-3 dorm.', type:'Residencial', price:'USD 2.600/m²', priceNum:160000, status:'Pre-venta', statusColor:'#22c55e', entrega:'2027', estado:'Pre-construcción', financiacion:'En pesos', airbnb:false, lat:-34.5720303, lng:-58.4490074, photos:['/images/proximamente.svg'], desc:'G&D Developers en Colegiales.', rentabilidad:'+7% anual' },
  { id:74, name:'Torre Unkanny', city:'Mar del Plata', zone:'Mar del Plata', country:'Argentina', countryCode:'ar', unitType:'1-3 dorm.', type:'Residencial', price:'USD 1.800/m²', priceNum:130000, status:'En Construcción', statusColor:'#C9922A', entrega:'2026', estado:'En obra', financiacion:'En pesos', airbnb:false, lat:-38.0174612, lng:-57.5280396, photos:['/images/proximamente.svg'], desc:'Torre premium en Mar del Plata, zona Güemes.', rentabilidad:'+6% anual' },
  // ── Dubái ──
  { id:76, name:'Jumeirah Village Circle', city:'Dubái, JVC', zone:'JVC', country:'Dubái', countryCode:'ae', unitType:'Studio / 1 dorm.', type:'Residencial', price:'USD 3.540/m²', priceNum:280000, status:'En Construcción', statusColor:'#C9922A', entrega:'2027', estado:'En obra', financiacion:'50/50', airbnb:true, lat:25.0608609, lng:55.2088007, photos:['/images/proximamente.svg'], desc:'JVC Dubái. Excelente rentabilidad y golden visa.', rentabilidad:'+8% anual' },
  { id:77, name:'Palm Jumeirah', city:'Palm Jumeirah, Dubái', zone:'Palm', country:'Dubái', countryCode:'ae', unitType:'2-4 dorm.', type:'Residencial Ultra Lujo', price:'USD 6.000/m²', priceNum:1500000, status:'Pre-venta', statusColor:'#22c55e', entrega:'2028', estado:'Pre-construcción', financiacion:'Consultar', airbnb:false, lat:25.1124317, lng:55.1389780, photos:['/images/proximamente.svg'], desc:'Exclusivas residencias en la icónica Palma Jumeirah.', rentabilidad:'+7% anual' },
  // ── España ──
  { id:79, name:'Mandarin Oriental BCN', city:'Barcelona', zone:'Eixample', country:'España', countryCode:'es', unitType:'2-4 dorm.', type:'Residencial Ultra Lujo', price:'USD 4.000/m²', priceNum:800000, status:'Pre-venta', statusColor:'#22c55e', entrega:'2028', estado:'Pre-construcción', financiacion:'Consultar', airbnb:false, lat:41.3912859, lng:2.1666701, photos:['/images/proximamente.svg'], desc:'Mandarin Oriental en Paseo de Gracia, Barcelona.', rentabilidad:'+6% anual' },
  { id:80, name:'Antares Barcelona', city:'Barcelona', zone:'Eixample', country:'España', countryCode:'es', unitType:'1-3 dorm.', type:'Residencial Lujo', price:'USD 4.000/m²', priceNum:450000, status:'En Construcción', statusColor:'#C9922A', entrega:'2027', estado:'En obra', financiacion:'Consultar', airbnb:false, lat:41.4120629, lng:2.2192150, photos:['/images/proximamente.svg'], desc:'Residencias de lujo en Barcelona.', rentabilidad:'+5% anual' },
  // ── Uruguay ──
  { id:81, name:'WAVE BRAVA', city:'Punta del Este', zone:'La Brava', country:'Uruguay', countryCode:'uy', unitType:'1-3 dorm.', type:'Residencial de Playa', price:'USD 3.080/m²', priceNum:250000, status:'En Construcción', statusColor:'#C9922A', entrega:'2027', estado:'En obra', financiacion:'Directa', airbnb:false, lat:-34.9482902, lng:-54.9289248, photos:['/images/proximamente.svg'], desc:'Residencial frente al mar en La Brava, Punta del Este.', rentabilidad:'+7% anual' },
  // ── Paraguay ──
  { id:82, name:'PETRA Asunción', city:'Asunción', zone:'Centro', country:'Paraguay', countryCode:'py', unitType:'Studio / 1 dorm.', type:'Residencial', price:'USD 1.200/m²', priceNum:80000, status:'En Construcción', statusColor:'#C9922A', entrega:'2026', estado:'En obra', financiacion:'Directa', airbnb:false, lat:-25.2363143, lng:-57.5793542, photos:['/images/proximamente.svg'], desc:'Residencial PETRA en Asunción. Excelente rentabilidad en USD.', rentabilidad:'+9% anual' },
];

const COUNTRY_MAP: Record<string, string> = {
  'Estados Unidos': 'USA',
  'Brasil':         'Brasil',
  'Argentina':      'Argentina',
  'Emiratos Árabes':'Dubái',
  'España':         'España',
  'Uruguay':        'Uruguay',
  'Paraguay':       'Paraguay',
};

const MARKET_CENTERS: Record<string, { lat: number; lng: number; zoom: number }> = {
  'USA':       { lat: 26.0, lng: -80.2, zoom: 9 },
  'Brasil':    { lat: -15,  lng: -47,   zoom: 4 },
  'Argentina': { lat: -34.6,lng: -58.5, zoom: 9 },
  'Dubái':     { lat: 25.2, lng: 55.3,  zoom: 10 },
  'España':    { lat: 41.4, lng: 2.2,   zoom: 11 },
  'Uruguay':   { lat: -34.9,lng: -54.9, zoom: 11 },
  'Paraguay':  { lat: -25.3,lng: -57.5, zoom: 11 },
};

const REGION_LABELS: Record<string, string> = {
  'Estados Unidos': 'Florida',
  'Brasil':         'Brasil',
  'Argentina':      'Argentina',
  'Emiratos Árabes':'Dubái',
  'España':         'España',
  'Uruguay':        'Uruguay',
  'Paraguay':       'Paraguay',
};

// ─── Project Detail Modal ────────────────────────────────────────────────────
function ProjectDetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [formName,  setFormName]  = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg,   setFormMsg]   = useState('');
  const photos = project.photos;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const waMsg = encodeURIComponent(
    `Hola! Me interesa el proyecto *${project.name}* en ${project.city}. ¿Pueden darme más información?`
  );

  const inputStyle: React.CSSProperties = {
    width: '100%', background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8, padding: '11px 14px', color: '#efefef', fontSize: 13,
    outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)', zIndex: 1100 }}
      />

      {/* Full-screen modal */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
        transition={{ type: 'spring', stiffness: 280, damping: 30 }}
        style={{
          position: 'fixed', inset: 0, zIndex: 1200,
          background: '#0d0d0d', display: 'flex', overflow: 'hidden',
        }}
      >
        {/* ── LEFT: scrollable content ── */}
        <div style={{ flex: 1, overflowY: 'auto', minWidth: 0 }}>

          {/* Hero image */}
          <div style={{ position: 'relative', height: 360, background: '#000', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos[currentPhoto]} alt={project.name}
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0.15'; }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            {/* Gradient overlay — covers promo text on marketing images + cinematic fade */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(8,8,20,0.78) 0%, rgba(8,8,20,0.12) 40%, rgba(8,8,20,0.0) 55%, rgba(8,8,20,0.0) 70%, rgba(13,13,13,0.97) 100%)' }} />

            {/* Close button */}
            <button onClick={onClose}
              style={{ position: 'absolute', top: 16, left: 20, background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', borderRadius: 8, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', color: '#efefef', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', zIndex: 10 }}>
              ← VOLVER
            </button>

            {/* Photo nav */}
            {photos.length > 1 && (
              <>
                <button onClick={() => setCurrentPhoto(c => (c - 1 + photos.length) % photos.length)}
                  style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.55)', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', color: '#fff', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
                <button onClick={() => setCurrentPhoto(c => (c + 1) % photos.length)}
                  style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.55)', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', color: '#fff', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
              </>
            )}

            {/* Bottom badges */}
            <div style={{ position: 'absolute', bottom: 24, left: 32, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
              {project.airbnb && (
                <span style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.18)', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 20, padding: '5px 14px' }}>✓ Airbnb permitido</span>
              )}
              <span style={{ fontSize: 12, fontWeight: 700, color: project.statusColor, background: `${project.statusColor}22`, border: `1px solid ${project.statusColor}55`, borderRadius: 20, padding: '5px 14px' }}>{project.estado}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://flagcdn.com/w40/${project.countryCode}.png`} alt={project.country}
                style={{ height: 26, borderRadius: 4, boxShadow: '0 2px 8px rgba(0,0,0,0.5)' }} />
            </div>
          </div>

          {/* Title block */}
          <div style={{ padding: '28px 40px 0' }}>
            <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.4)', margin: '0 0 6px', letterSpacing: '0.04em' }}>📍 {project.city}</p>
            <h1 style={{ fontSize: 30, fontWeight: 800, color: '#efefef', margin: 0, lineHeight: 1.15 }}>{project.name}</h1>
          </div>

          {/* 4-stat horizontal bar */}
          <div className="detail-stats-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', margin: '24px 40px', background: '#131326', border: '1px solid rgba(201,146,42,0.18)', borderRadius: 12, overflow: 'hidden' }}>
            {[
              { label: 'PRECIO DESDE',  value: project.price,                   gold: true  },
              { label: 'ENTREGA',       value: project.entrega                              },
              { label: 'FINANCIACIÓN',  value: project.financiacion                         },
              { label: 'RENTABILIDAD',  value: project.rentabilidad ?? '+8% anual'           },
            ].map((s, i) => (
              <div key={i} style={{ padding: '16px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <p style={{ fontSize: 9, color: 'rgba(239,239,239,0.35)', fontWeight: 700, letterSpacing: '0.12em', margin: '0 0 7px' }}>{s.label}</p>
                <p style={{ fontSize: s.gold ? 17 : 15, fontWeight: 800, color: s.gold ? '#C9922A' : '#efefef', margin: 0, lineHeight: 1.2 }}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* ¿Por qué? */}
          <div style={{ padding: '0 40px 30px' }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#efefef', marginBottom: 14 }}>¿Por qué {project.name}?</h2>
            <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.62)', lineHeight: 1.8, margin: 0 }}>{project.whyInvest ?? project.desc}</p>
          </div>

          {/* Características del edificio */}
          {project.features && project.features.length > 0 && (
            <div style={{ padding: '0 40px 30px' }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: '#efefef', marginBottom: 18 }}>Características del edificio</h2>
              <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }}>
                {project.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ color: '#C9922A', fontSize: 15, flexShrink: 0, marginTop: 1, fontWeight: 700 }}>›</span>
                    <span style={{ fontSize: 13, color: 'rgba(239,239,239,0.68)', lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video del proyecto */}
          {project.videoUrl && (
            <div style={{ padding: '0 40px 30px' }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: '#efefef', marginBottom: 18 }}>Video del proyecto</h2>
              <div style={{ position: 'relative', paddingBottom: '56.25%', borderRadius: 12, overflow: 'hidden', background: '#000' }}>
                <iframe
                  src={project.videoUrl}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Video de ${project.name}`}
                />
              </div>
            </div>
          )}

          {/* Plan de pagos */}
          {project.paymentPlan && project.paymentPlan.length > 0 && (
            <div style={{ padding: '0 40px 60px' }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: '#efefef', marginBottom: 18 }}>Plan de pagos</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {project.paymentPlan.map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#131326', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '14px 20px' }}>
                    <div style={{ width: 32, height: 32, background: 'rgba(201,146,42,0.12)', border: '1px solid rgba(201,146,42,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, color: '#C9922A', flexShrink: 0 }}>{i + 1}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#efefef', margin: 0 }}>{step.label}</p>
                      {step.detail && <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.4)', margin: '2px 0 0' }}>{step.detail}</p>}
                    </div>
                    <p style={{ fontSize: 16, fontWeight: 800, color: '#C9922A', margin: 0, flexShrink: 0 }}>{step.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── RIGHT: contact form (sticky sidebar) ── */}
        <div style={{ width: 360, flexShrink: 0, borderLeft: '1px solid rgba(201,146,42,0.15)', background: '#101010', overflowY: 'auto' }}>
          <div style={{ padding: '28px 26px 48px' }}>

            {/* Price summary card */}
            <div style={{ background: 'rgba(201,146,42,0.07)', border: '1px solid rgba(201,146,42,0.22)', borderRadius: 12, padding: '18px 20px', marginBottom: 24 }}>
              <p style={{ fontSize: 9, color: 'rgba(239,239,239,0.4)', fontWeight: 700, letterSpacing: '0.12em', margin: '0 0 5px' }}>PRECIO DESDE</p>
              <p style={{ fontSize: 24, fontWeight: 900, color: '#C9922A', margin: 0 }}>{project.price}</p>
              {project.entry && (
                <>
                  <div style={{ height: 1, background: 'rgba(201,146,42,0.15)', margin: '14px 0' }} />
                  <p style={{ fontSize: 9, color: 'rgba(239,239,239,0.4)', fontWeight: 700, letterSpacing: '0.12em', margin: '0 0 5px' }}>INGRESÁS CON</p>
                  <p style={{ fontSize: 18, fontWeight: 800, color: '#22c55e', margin: 0 }}>{project.entry}</p>
                </>
              )}
            </div>

            {/* Form title */}
            <p style={{ fontSize: 15, fontWeight: 800, color: '#efefef', marginBottom: 16 }}>Solicitar información</p>

            {/* Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
              <input
                type="text" placeholder="Nombre completo" value={formName}
                onChange={e => setFormName(e.target.value)} style={inputStyle}
              />
              <input
                type="tel" placeholder="Teléfono (con código de país)" value={formPhone}
                onChange={e => setFormPhone(e.target.value)} style={inputStyle}
              />
              <input
                type="email" placeholder="Email" value={formEmail}
                onChange={e => setFormEmail(e.target.value)} style={inputStyle}
              />
              <textarea
                placeholder="Mensaje (opcional)" value={formMsg}
                onChange={e => setFormMsg(e.target.value)} rows={3}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
              <a
                href={`https://wa.me/5492233559834?text=${encodeURIComponent(
                  `Hola! Me interesa el proyecto *${project.name}* en ${project.city}.${formName ? ` Mi nombre es ${formName}.` : ''} ¿Pueden darme más información?`
                )}`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#C9922A', color: '#101010', padding: '14px 20px', fontSize: 13, fontWeight: 800, borderRadius: 8, textDecoration: 'none', letterSpacing: '0.07em' }}>
                SOLICITAR INFORMACIÓN →
              </a>
              <a
                href={`https://wa.me/5492233559834?text=${waMsg}`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#25D366', color: '#fff', padding: '13px 20px', fontSize: 13, fontWeight: 800, borderRadius: 8, textDecoration: 'none', letterSpacing: '0.07em' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WHATSAPP
              </a>
            </div>

            <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.3)', textAlign: 'center' }}>
              🔒 Tu información es 100% confidencial
            </p>

            {/* Quick stats summary */}
            <div style={{ marginTop: 28, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24 }}>
              <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.35)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: 14 }}>RESUMEN DEL PROYECTO</p>
              {[
                { label: 'Tipo', value: project.type },
                { label: 'Unidad', value: project.unitType },
                { label: 'Estado', value: project.estado },
                { label: 'Entrega', value: project.entrega },
                { label: 'Airbnb', value: project.airbnb ? 'Permitido ✓' : 'No permitido' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <span style={{ fontSize: 12, color: 'rgba(239,239,239,0.4)' }}>{row.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: row.label === 'Airbnb' ? (project.airbnb ? '#22c55e' : 'rgba(239,239,239,0.4)') : '#efefef' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .detail-stats-bar { grid-template-columns: repeat(2,1fr) !important; }
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

// ─── Projects Section ────────────────────────────────────────────────────────
interface ProjectsSectionProps {
  selectedMarket: string;
}

const now = new Date();
const monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const currentMonth = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;

export default function ProjectsSection({ selectedMarket }: ProjectsSectionProps) {
  const mappedCountry = COUNTRY_MAP[selectedMarket] ?? null;
  const regionLabel   = REGION_LABELS[selectedMarket] ?? selectedMarket;

  const [filterAirbnb, setFilterAirbnb] = useState<'Todos' | 'Sí' | 'No'>('Todos');
  const [filterZone,   setFilterZone]   = useState('Todas las zonas');
  const [filterType,   setFilterType]   = useState('Todos los tipos');
  const [activeCountry, setActiveCountry] = useState<string | null>(mappedCountry);
  const [selected, setSelected]         = useState<Project>(projects[0]);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Sync when parent changes market
  useEffect(() => {
    setActiveCountry(mappedCountry);
    setFilterZone('Todas las zonas');
    setFilterType('Todos los tipos');
    setFilterAirbnb('Todos');
  }, [mappedCountry]);

  // Build filtered list
  let base = [...projects];
  if (activeCountry) base = base.filter(p => p.country === activeCountry);
  if (filterAirbnb === 'Sí') base = base.filter(p => p.airbnb);
  if (filterAirbnb === 'No') base = base.filter(p => !p.airbnb);
  const zones = ['Todas las zonas', ...Array.from(new Set(base.map(p => p.zone)))];
  const types = ['Todos los tipos', ...Array.from(new Set(base.map(p => p.type)))];
  if (filterZone !== 'Todas las zonas') base = base.filter(p => p.zone === filterZone);
  if (filterType !== 'Todos los tipos') base = base.filter(p => p.type === filterType);
  const filtered = base;

  const mapCenter = activeCountry ? (MARKET_CENTERS[activeCountry] ?? undefined) : undefined;

  const selectStyle: React.CSSProperties = {
    background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 6, padding: '7px 10px', color: '#efefef', fontSize: 12,
    cursor: 'pointer', outline: 'none',
  };

  return (
    <section id="proyectos" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(201,146,42,0.1)', padding: '0 40px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Breadcrumb + Title */}
        <div style={{ paddingTop: 52, marginBottom: 28 }}>
          <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.35)', marginBottom: 12, letterSpacing: '0.04em' }}>
            Mercados ›{' '}
            <span style={{ color: '#C9922A', fontWeight: 700 }}>{selectedMarket}</span>
            {' '}› <span style={{ color: 'rgba(239,239,239,0.5)' }}>Proyectos</span>
          </p>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: '#efefef', marginBottom: 6, lineHeight: 1.1 }}>
            Proyectos activos —{' '}
            <span style={{ color: '#C9922A' }}>{regionLabel}</span>
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.35)', margin: 0 }}>
            {activeCountry === 'USA' ? 'Miami · Hallandale · Wynwood · ' : ''}
            {currentMonth} · {filtered.length} {filtered.length === 1 ? 'proyecto' : 'proyectos'} disponibles
          </p>
        </div>

        {/* Filter bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(239,239,239,0.5)' }}>
            <span>Zona:</span>
            <select value={filterZone} onChange={e => setFilterZone(e.target.value)} style={selectStyle}>
              {zones.map(z => <option key={z} value={z}>{z}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(239,239,239,0.5)' }}>
            <span>Tipo:</span>
            <select value={filterType} onChange={e => setFilterType(e.target.value)} style={selectStyle}>
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(239,239,239,0.5)' }}>
            <span>Airbnb:</span>
            <select value={filterAirbnb} onChange={e => setFilterAirbnb(e.target.value as 'Todos'|'Sí'|'No')} style={selectStyle}>
              {(['Todos','Sí','No'] as const).map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          <div style={{ display: 'flex', gap: 8, marginLeft: 8 }}>
            {['USA','Brasil'].map(c => (
              <button key={c} onClick={() => setActiveCountry(activeCountry === c ? null : c)}
                style={{ display: 'flex', alignItems: 'center', gap: 6, background: activeCountry === c ? 'rgba(201,146,42,0.15)' : '#1a1a2e', border: `1.5px solid ${activeCountry === c ? '#C9922A' : 'rgba(255,255,255,0.1)'}`, borderRadius: 20, padding: '6px 14px', color: '#efefef', fontSize: 12, fontWeight: 700, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://flagcdn.com/w40/${c === 'USA' ? 'us' : 'br'}.png`} alt={c} style={{ width: 20, height: 14, objectFit: 'cover', borderRadius: 2 }} />
                {c}
              </button>
            ))}
            <button onClick={() => setActiveCountry(null)}
              style={{ background: !activeCountry ? 'rgba(201,146,42,0.15)' : '#1a1a2e', border: `1.5px solid ${!activeCountry ? '#C9922A' : 'rgba(255,255,255,0.1)'}`, borderRadius: 20, padding: '6px 14px', color: '#efefef', fontSize: 12, fontWeight: 700, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}>
              Todos los mercados
            </button>
          </div>

          <span style={{ marginLeft: 'auto', fontSize: 12, color: 'rgba(239,239,239,0.35)', fontWeight: 600 }}>
            {filtered.length} proyectos encontrados
          </span>
        </div>

        {/* Content: cards left + map right */}
        <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 28, alignItems: 'start' }}>

          {/* ── Cards (scrollable column) ── */}
          <div className="cards-scroll" style={{ height: 660, overflowY: 'auto', paddingRight: 6 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {filtered.length === 0 && (
              <div style={{ padding: '60px 24px', textAlign: 'center', background: '#131326', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14 }}>
                <p style={{ fontSize: 14, color: 'rgba(239,239,239,0.35)', margin: 0 }}>No se encontraron proyectos con esos filtros</p>
              </div>
            )}
            {filtered.map((p) => (
              <div key={p.id}
                style={{ background: '#131326', border: `1px solid ${selected.id === p.id ? 'rgba(201,146,42,0.5)' : 'rgba(255,255,255,0.07)'}`, borderRadius: 16, overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.2s' }}
                onClick={() => setSelected(p)}
              >
                {/* Badge row */}
                <div style={{ padding: '14px 18px 0', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.airbnb
                    ? <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 20, padding: '4px 12px' }}>✓ Airbnb permitido</span>
                    : <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(239,239,239,0.4)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '4px 12px' }}>✗ Sin Airbnb</span>
                  }
                  <span style={{ fontSize: 11, fontWeight: 700, color: p.statusColor, background: `${p.statusColor}15`, border: `1px solid ${p.statusColor}40`, borderRadius: 20, padding: '4px 12px' }}>{p.estado}</span>
                </div>

                {/* Image */}
                <div style={{ position: 'relative', height: 200, margin: '14px 18px 0', background: '#0d0d0d', borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.photos[0]} alt={p.name}
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0.3'; }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block', transform: 'scale(1.04)' }} />
                  {/* Gradient overlay — hides promo text embedded in marketing images */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,28,0.72) 0%, rgba(10,10,28,0.18) 45%, rgba(10,10,28,0.0) 60%, rgba(10,10,28,0.55) 100%)' }} />
                  {/* Bottom fade */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to top, rgba(19,19,38,0.9), transparent)' }} />
                  <span style={{ position: 'absolute', bottom: 12, left: 12, fontSize: 11, fontWeight: 700, color: '#efefef', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', borderRadius: 20, padding: '4px 12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    📍 {p.city}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '18px 18px 20px' }}>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: '#efefef', margin: '0 0 4px' }}>{p.name}</h3>
                  <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.4)', margin: '0 0 16px' }}>{p.desc.slice(0, 80)}{p.desc.length > 80 ? '…' : ''}</p>

                  {/* Stats 2×2 */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 18 }}>
                    {[
                      { label: 'ENTREGA',      value: p.entrega },
                      { label: 'ESTADO',       value: p.estado  },
                      { label: 'TIPO',         value: p.unitType },
                      { label: 'FINANCIACIÓN', value: p.financiacion },
                    ].map((s, i) => (
                      <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '10px 14px' }}>
                        <p style={{ fontSize: 9, color: 'rgba(239,239,239,0.3)', fontWeight: 700, letterSpacing: '0.1em', margin: '0 0 3px' }}>{s.label}</p>
                        <p style={{ fontSize: 13, fontWeight: 700, color: '#efefef', margin: 0 }}>{s.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <div>
                      <p style={{ fontSize: 22, fontWeight: 900, color: '#C9922A', margin: 0, lineHeight: 1 }}>{p.price}</p>
                      {p.entry && <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.4)', margin: '4px 0 0' }}>Ingreso desde {p.entry}</p>}
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); setModalProject(p); }}
                      style={{ background: '#C9922A', color: '#101010', border: 'none', borderRadius: 8, padding: '11px 22px', fontSize: 13, fontWeight: 800, cursor: 'pointer', whiteSpace: 'nowrap', letterSpacing: '0.04em', flexShrink: 0 }}>
                      Ver proyecto →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>{/* end flex column */}
          </div>{/* end scroll container */}

          {/* ── Map — sticky ── */}
          <div style={{ position: 'sticky', top: 80 }}>
            <div style={{ borderRadius: 14, overflow: 'visible', border: '1px solid rgba(201,146,42,0.25)', height: 660, position: 'relative' }}>
              {/* Floating card */}
              <div style={{ position: 'absolute', bottom: 16, left: 12, right: 12, zIndex: 1000, background: 'rgba(10,10,20,0.95)', border: '1px solid rgba(201,146,42,0.4)', borderRadius: 12, padding: '14px 16px', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0,0,0,0.6)' }}>
                <p style={{ fontSize: 14, fontWeight: 800, color: '#efefef', margin: '0 0 2px' }}>{selected.name}</p>
                <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.45)', margin: '0 0 10px' }}>📍 {selected.city}</p>
                <p style={{ fontSize: 16, fontWeight: 800, color: '#C9922A', margin: '0 0 6px' }}>{selected.price}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 12 }}>
                  {selected.airbnb && <span style={{ fontSize: 10, color: '#22c55e', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 20, padding: '2px 8px' }}>✓ Airbnb</span>}
                  <span style={{ fontSize: 10, color: 'rgba(239,239,239,0.5)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '2px 8px' }}>{selected.estado} · {selected.entrega}</span>
                  {selected.rentabilidad && <span style={{ fontSize: 10, color: '#C9922A', background: 'rgba(201,146,42,0.1)', border: '1px solid rgba(201,146,42,0.3)', borderRadius: 20, padding: '2px 8px' }}>{selected.rentabilidad}</span>}
                </div>
                <button
                  onClick={() => setModalProject(selected)}
                  style={{ width: '100%', background: '#C9922A', color: '#101010', border: 'none', borderRadius: 8, padding: '10px', fontSize: 13, fontWeight: 800, cursor: 'pointer', letterSpacing: '0.04em' }}>
                  Ver proyecto →
                </button>
              </div>

              <MapView
                projects={filtered.length > 0 ? filtered : projects}
                selectedProject={selected}
                onSelect={(p) => {
                  const full = projects.find(proj => proj.id === p.id);
                  if (full) setSelected(full);
                }}
                mapCenter={mapCenter}
              />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalProject && (
          <ProjectDetailModal project={modalProject} onClose={() => setModalProject(null)} />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .proj-grid { grid-template-columns: 1fr !important; }
          .cards-scroll { height: auto !important; overflow-y: visible !important; }
        }
        select option { background: #1a1a2e; }
        .cards-scroll::-webkit-scrollbar { width: 5px; }
        .cards-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.04); border-radius: 4px; }
        .cards-scroll::-webkit-scrollbar-thumb { background: rgba(201,146,42,0.4); border-radius: 4px; }
        .cards-scroll::-webkit-scrollbar-thumb:hover { background: rgba(201,146,42,0.7); }
        .cards-scroll { scrollbar-width: thin; scrollbar-color: rgba(201,146,42,0.4) rgba(255,255,255,0.04); }
      `}</style>
    </section>
  );
}
