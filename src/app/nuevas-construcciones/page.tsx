'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const MapView = dynamic(() => import('@/components/MapView'), { ssr: false });

type Project = {
  id: number;
  name: string;
  city: string;
  country: string;
  type: string;
  price: string;
  entry?: string;
  status: string;
  statusColor: string;
  lat: number;
  lng: number;
  photos: string[];
  desc: string;
};

const projects: Project[] = [
  // ── BRASIL · Jurerê Internacional ──
  { id:1,  name:'DALIA DUO',              city:'Jurerê Internacional',         country:'Brasil',    type:'Residencial',           price:'Desde U$ 168.000',    status:'En Construcción · Abr 2028', statusColor:'#C9922A', lat:-27.4276991, lng:-48.4708741, photos:['/images/proximamente.svg'], desc:'Apartamentos de 2 y 3 dormitorios de 76 m² a U$ 2.200/m² en el exclusivo Jurerê Internacional, Florianópolis.' },
  { id:2,  name:'MARENA DUO',             city:'Jurerê Internacional',         country:'Brasil',    type:'Residencial Premium',   price:'Desde U$ 2.800/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-27.4291679, lng:-48.4730642, photos:['/images/proximamente.svg'], desc:'Residencial premium frente al mar en Jurerê Internacional, uno de los barrios más exclusivos del país.' },
  { id:3,  name:'LUMINA DUO',             city:'Jurerê Internacional',         country:'Brasil',    type:'Residencial Premium',   price:'Desde U$ 4.500/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-27.4445534, lng:-48.4871710, photos:['/images/proximamente.svg'], desc:'Torre de alto estándar en Jurerê Internacional con vistas al mar y amenities de primera línea.' },
  { id:4,  name:'ATRIUM DUO',             city:'Jurerê Internacional',         country:'Brasil',    type:'Residencial Premium',   price:'Desde U$ 4.500/m²',   status:'Pre-venta',                 statusColor:'#22c55e', lat:-27.4417588, lng:-48.4905078, photos:['/images/proximamente.svg'], desc:'Residencial boutique en Jurerê con diseño contemporáneo, acceso a playa y club privado.' },
  { id:5,  name:'SMART Jurerê',           city:'Jurerê Internacional',         country:'Brasil',    type:'Residencial',           price:'Desde U$ 4.500/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-27.4471044, lng:-48.4872280, photos:['/images/proximamente.svg'], desc:'Emprendimiento residencial inteligente en Jurerê Internacional con domótica y servicios premium.' },
  { id:6,  name:'Zenith Jurerê',          city:'Jurerê Internacional',         country:'Brasil',    type:'Residencial',           price:'Desde U$ 4.500/m²',   status:'Entrega Ene 2029',          statusColor:'#22c55e', lat:-27.4417674, lng:-48.4884785, photos:['/images/proximamente.svg'], desc:'Torre residencial con entrega en enero 2029 en el corazón de Jurerê Internacional.' },
  { id:7,  name:'Connect View Jurerê',    city:'Jurerê Internacional',         country:'Brasil',    type:'Residencial',           price:'Desde U$ 4.500/m²',   status:'Entrega Feb 2029',          statusColor:'#22c55e', lat:-27.4441158, lng:-48.4908103, photos:['/images/proximamente.svg'], desc:'Residencias con vistas panorámicas al mar y a la ciudad en Jurerê Internacional.' },
  { id:8,  name:'ALMARE SPE',             city:'Jurerê Internacional',         country:'Brasil',    type:'Residencial Lujo',      price:'Desde U$ 4.500/m²',   status:'En Construcción · Feb 2030',statusColor:'#C9922A', lat:-27.4415328, lng:-48.4921169, photos:['/images/projects/almare_spe/photo1.png'], desc:'Proyecto de alta gama frente al mar en Jurerê Internacional, entrega prevista febrero 2030.' },
  { id:9,  name:'VIBE Jurerê',            city:'Jurerê Tradicional',           country:'Brasil',    type:'Residencial',           price:'Desde U$ 3.500/m²',   status:'Entrega 2026',              statusColor:'#22c55e', lat:-27.4414425, lng:-48.4848928, photos:['/images/proximamente.svg'], desc:'Emprendimiento residencial con entrega en 2026 en Jurerê Tradicional, Florianópolis.' },
  // ── BRASIL · Canasvieiras / Cachoeira ──
  { id:10, name:'ADORÉ SMART Canasvieiras',city:'Canasvieiras · Florianópolis', country:'Brasil',   type:'Residencial',           price:'Desde U$ 2.800/m²',   status:'Pre-venta',                 statusColor:'#22c55e', lat:-27.4326336, lng:-48.4667745, photos:['/images/proximamente.svg'], desc:'Proyecto smart de Adore Incorporadora en Canasvieiras, a metros de la playa más visitada de Florianópolis.' },
  { id:11, name:'Coti Residencial',        city:'Canasvieiras · Florianópolis', country:'Brasil',   type:'Residencial',           price:'Desde U$ 2.800/m²',   status:'Pre-venta',                 statusColor:'#22c55e', lat:-27.4340501, lng:-48.4713392, photos:['/images/proximamente.svg'], desc:'Residencias de calidad en Canasvieiras, una de las playas más buscadas del norte de Florianópolis.' },
  { id:12, name:'Adoré Level UP',          city:'Cachoeira de Bom Jesus',       country:'Brasil',   type:'Residencial',           price:'Desde U$ 2.700/m²',   status:'Entrega Dic 2027',          statusColor:'#22c55e', lat:-27.4247766, lng:-48.4264695, photos:['/images/proximamente.svg'], desc:'Torre residencial de Adore Incorporadora en Cachoeira de Bom Jesus, Florianópolis.' },
  { id:13, name:'Adoré AMC Cachoeira',     city:'Cachoeira de Bom Jesus',       country:'Brasil',   type:'Residencial',           price:'Desde U$ 2.700/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-27.4241152, lng:-48.4275810, photos:['/images/proximamente.svg'], desc:'Moderno emprendimiento de Adore Incorporadora en el norte de Florianópolis.' },
  { id:14, name:'Beriyth Residence',       city:'Cachoeira de Bom Jesus',       country:'Brasil',   type:'Residencial',           price:'Desde U$ 2.700/m²',   status:'Pre-venta',                 statusColor:'#22c55e', lat:-27.4172599, lng:-48.4297750, photos:['/images/proximamente.svg'], desc:'Residencial Beriyth de Ceni & Southier, diseño moderno y acceso a playa en el norte de Florianópolis.' },
  { id:15, name:'Adoré Cacupé',            city:'Cacupé · Florianópolis',       country:'Brasil',   type:'Residencial',           price:'Desde U$ 2.600/m²',   status:'Entrega Jul 2028',          statusColor:'#22c55e', lat:-27.5365053, lng:-48.5116555, photos:['/images/proximamente.svg'], desc:'Proyecto de Adore Incorporadora en Cacupé, barrio tranquilo con vistas a la bahía norte de Florianópolis.' },
  // ── BRASIL · Campeche ──
  { id:16, name:'ALAI Campeche',           city:'Campeche · Florianópolis',     country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 2.600/m²',   status:'En Construcción · May 2028',statusColor:'#C9922A', lat:-27.6824593, lng:-48.4911772, photos:['/images/proximamente.svg'], desc:'Residencial frente al mar en Campeche, uno de los destinos más buscados del sur de Florianópolis.' },
  { id:17, name:'Campeche Living',         city:'Campeche · Florianópolis',     country:'Brasil',   type:'Residencial',           price:'Desde U$ 2.600/m²',   status:'Pre-venta',                 statusColor:'#22c55e', lat:-27.6725170, lng:-48.4838021, photos:['/images/proximamente.svg'], desc:'Residencias modernas a pasos de la playa del Campeche, ideales para inversión en renta corta.' },
  { id:18, name:'La Mare Campeche',        city:'Campeche · Florianópolis',     country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 2.600/m²',   status:'Pre-venta',                 statusColor:'#22c55e', lat:-27.6797738, lng:-48.4831984, photos:['/images/proximamente.svg'], desc:'Emprendimiento residencial frente al mar en Campeche, diseño contemporáneo y vistas al océano.' },
  // ── BRASIL · Itapema ──
  { id:19, name:'Strait Tower',            city:'Itapema',                      country:'Brasil',   type:'Residencial',           price:'Desde U$ 3.200/m²',   status:'Entrega Jul 2027',          statusColor:'#22c55e', lat:-27.1135078, lng:-48.6098293, photos:['/images/proximamente.svg'], desc:'Torre residencial de Santana Construtora en Itapema, entrega julio 2027.' },
  { id:20, name:'Ilha de Sardenha',        city:'Itapema',                      country:'Brasil',   type:'Residencial Lujo',      price:'Desde U$ 3.200/m²',   status:'En Construcción · Jun 2030',statusColor:'#C9922A', lat:-27.1501546, lng:-48.5871279, photos:['/images/proximamente.svg'], desc:'Residencial premium de Santana Construtora en Itapema, inspirado en la isla italiana de Cerdeña.' },
  { id:21, name:'Lago di Como',            city:'Itapema',                      country:'Brasil',   type:'Residencial Lujo',      price:'Desde U$ 3.200/m²',   status:'En Construcción · Jul 2030', statusColor:'#C9922A', lat:-27.1527910, lng:-48.5735857, photos:['/images/proximamente.svg'], desc:'Desarrollo de lujo de Santana Construtora, inspirado en el Lago di Como italiano, en Itapema.' },
  { id:22, name:'High Tower',              city:'Itapema',                      country:'Brasil',   type:'Residencial',           price:'Desde U$ 3.200/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-27.1036965, lng:-48.6144874, photos:['/images/proximamente.svg'], desc:'Torre de JA Russi en Itapema con departamentos de alto estándar y amenities completos.' },
  { id:23, name:'Riviera Home Club',       city:'Itapema',                      country:'Brasil',   type:'Residencial Club',      price:'Desde U$ 3.200/m²',   status:'En Construcción · 2030',    statusColor:'#C9922A', lat:-27.0877811, lng:-48.6122040, photos:['/images/proximamente.svg'], desc:'Club residencial de Grupo N1 en Itapema con piscina, áreas comunes y acceso a playa.' },
  { id:24, name:'Concept Francez',         city:'Itapema',                      country:'Brasil',   type:'Residencial',           price:'Desde U$ 3.200/m²',   status:'En Construcción · Sep 2028',statusColor:'#C9922A', lat:-27.1451790, lng:-48.5085387, photos:['/images/proximamente.svg'], desc:'Proyecto de Francez Empreendimentos en Itapema, moderna arquitectura y excelente ubicación.' },
  // ── BRASIL · Bombinhas ──
  { id:25, name:'Zion Francez',            city:'Bombinhas',                    country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 4.000/m²',   status:'Entrega Mar 2027',          statusColor:'#22c55e', lat:-27.1473293, lng:-48.5008398, photos:['/images/proximamente.svg'], desc:'Residencial frente al mar en Bombinhas, uno de los destinos de playa más valorados de Santa Catarina.' },
  { id:26, name:'Tulum Paludo',            city:'Bombinhas',                    country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 4.000/m²',   status:'Entrega Oct 2027',          statusColor:'#22c55e', lat:-27.1736832, lng:-48.5019494, photos:['/images/proximamente.svg'], desc:'Residencias de playa de Paludo Incorporadora en Bombinhas, diseño inspirado en Tulum con acabados premium.' },
  { id:27, name:'SAN ANDRES Paludo',       city:'Bombinhas',                    country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 4.000/m²',   status:'En Construcción · Abr 2029',statusColor:'#C9922A', lat:-27.1521274, lng:-48.5009004, photos:['/images/proximamente.svg'], desc:'Emprendimiento de Paludo frente al mar en Bombinhas, a metros de las playas de aguas cristalinas.' },
  { id:28, name:'Cartier Maichuk',         city:'Bombinhas',                    country:'Brasil',   type:'Residencial',           price:'Desde U$ 4.000/m²',   status:'A Estrenar',                statusColor:'#f59e0b', lat:-27.1873613, lng:-48.5030387, photos:['/images/proximamente.svg'], desc:'Residencial Cartier listo para habitar en Bombinhas. Unidades con vista al mar de aguas transparentes.' },
  // ── BRASIL · Porto Belo ──
  { id:29, name:'La Brise',                city:'Porto Belo',                   country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 2.500/m²',   status:'En Construcción · Dic 2029',statusColor:'#C9922A', lat:-27.1452626, lng:-48.5133973, photos:['/images/proximamente.svg'], desc:'4 torres de Grupo N1 a 750 m de la playa en Porto Belo. Unidades de 83 m² con 2 suites y vistas al mar.' },
  { id:30, name:'Catalunya Locana',        city:'Porto Belo',                   country:'Brasil',   type:'Residencial',           price:'Desde U$ 2.500/m²',   status:'En Construcción · Dic 2029',statusColor:'#C9922A', lat:-27.1528254, lng:-48.5789931, photos:['/images/proximamente.svg'], desc:'Residencial Catalunya de Locana en Porto Belo, diseño mediterráneo con amenities completos.' },
  { id:31, name:'Monaco Locana',           city:'Porto Belo',                   country:'Brasil',   type:'Residencial',           price:'Desde U$ 2.500/m²',   status:'En Construcción · Dic 2028',statusColor:'#C9922A', lat:-27.1479876, lng:-48.5923974, photos:['/images/proximamente.svg'], desc:'Torre residencial Monaco de Locana en Porto Belo, elegancia y diseño contemporáneo.' },
  { id:32, name:'Brickell Business Mattos',city:'Porto Belo',                   country:'Brasil',   type:'Oficinas Comerciales',  price:'Consultar',            status:'En Construcción · Dic 2027',statusColor:'#C9922A', lat:-27.1591898, lng:-48.5805315, photos:['/images/proximamente.svg'], desc:'Primer centro corporativo de Porto Belo desarrollado por Mattos Incorporadora. Oficinas premium.' },
  // ── BRASIL · Balneário Camboriú ──
  { id:33, name:'Classic Home Club',       city:'Balneário Camboriú',           country:'Brasil',   type:'Residencial Club',      price:'Desde U$ 2.800/m²',   status:'En Construcción · 2028',    statusColor:'#C9922A', lat:-26.9974991, lng:-48.6548158, photos:['/images/proximamente.svg'], desc:'Club residencial de Pasqualotto en Balneário Camboriú, ciudad con el metro cuadrado más valorado de Brasil.' },
  { id:34, name:'Oceanic Tower',           city:'Balneário Camboriú',           country:'Brasil',   type:'Residencial Lujo',      price:'Desde U$ 2.800/m²',   status:'En Construcción · 2028',    statusColor:'#C9922A', lat:-27.0629470, lng:-48.5944862, photos:['/images/proximamente.svg'], desc:'Torre de alto estándar de Pasqualotto en la exclusiva franja costera de Balneário Camboriú.' },
  { id:35, name:'Amalfi Coast Pasqualotto',city:'Balneário Camboriú',           country:'Brasil',   type:'Residencial Lujo',      price:'Desde U$ 2.800/m²',   status:'Pre-venta',                 statusColor:'#22c55e', lat:-27.0902890, lng:-48.6163822, photos:['/images/proximamente.svg'], desc:'Lujoso residencial de Pasqualotto inspirado en la Costa Amalfitana italiana, frente al mar.' },
  { id:36, name:'Fontainebleau',           city:'Balneário Camboriú',           country:'Brasil',   type:'Residencial',           price:'Desde U$ 2.800/m²',   status:'Entrega Jul 2025',          statusColor:'#f59e0b', lat:-27.0898372, lng:-48.6122151, photos:['/images/proximamente.svg'], desc:'Residencial Fontainebleau con entrega inmediata en Balneário Camboriú.' },
  // ── BRASIL · Sur de SC (JE Vargas / Praia do Rosa) ──
  { id:37, name:'Villa das Corujas',       city:'Bombinhas · SC',               country:'Brasil',   type:'Residencial',           price:'Desde U$ 4.000/m²',   status:'A Estrenar',                statusColor:'#f59e0b', lat:-27.1857728, lng:-48.5014161, photos:['/images/proximamente.svg'], desc:'Residencial de casas y villas de JE Vargas en Bombinhas, listo para habitar.' },
  { id:38, name:'Villa Cerejeira',         city:'Bombinhas · SC',               country:'Brasil',   type:'Residencial',           price:'Desde U$ 4.000/m²',   status:'Entrega Abr 2026',          statusColor:'#22c55e', lat:-27.1859116, lng:-48.5028008, photos:['/images/proximamente.svg'], desc:'Villas residenciales de JE Vargas en Bombinhas, entrega abril 2026.' },
  { id:39, name:'Vila Coral JEVargas',     city:'Bombinhas · SC',               country:'Brasil',   type:'Residencial',           price:'Desde U$ 4.000/m²',   status:'En Construcción · 4Q 2028', statusColor:'#C9922A', lat:-27.1902482, lng:-48.4997516, photos:['/images/proximamente.svg'], desc:'Emprendimiento residencial de JE Vargas en la costa de Bombinhas, entrega 4° trimestre 2028.' },
  { id:40, name:'Villa Viek JEVargas',     city:'Bombinhas · SC',               country:'Brasil',   type:'Residencial',           price:'Desde U$ 4.000/m²',   status:'En Construcción · 4Q 2030', statusColor:'#C9922A', lat:-27.1985834, lng:-48.4988066, photos:['/images/proximamente.svg'], desc:'Villa residencial de JE Vargas en Bombinhas con diseño contemporáneo y acceso a playa.' },
  { id:41, name:'Summer Dreams Francez',   city:'Bombinhas · SC',               country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 4.000/m²',   status:'En Construcción · Abr 2030',statusColor:'#C9922A', lat:-27.1847579, lng:-48.5008935, photos:['/images/proximamente.svg'], desc:'Residencial de playa de Francez Empreendimentos en Bombinhas, frente al mar, entrega 2030.' },
  { id:42, name:'Lotes Praia do Rosa',     city:'Praia do Rosa · SC',           country:'Brasil',   type:'Lotes',                 price:'Consultar',            status:'Pre-venta',                 statusColor:'#22c55e', lat:-28.1153221, lng:-48.6420258, photos:['/images/proximamente.svg'], desc:'Lotes en la exclusiva Praia do Rosa, una de las playas más bellas del sur de Brasil.' },
  { id:43, name:'Volo Ocean',              city:'Celso Ramos · SC',             country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 2.500/m²',   status:'A Estrenar',                statusColor:'#f59e0b', lat:-27.3320721, lng:-48.5344203, photos:['/images/proximamente.svg'], desc:'Residencial de Paludo Incorporadora en Celso Ramos, listo para habitar frente al mar.' },
  // ── BRASIL · São Paulo / Rio de Janeiro ──
  { id:44, name:'TEGRA São Paulo',         city:'São Paulo',                    country:'Brasil',   type:'Residencial',           price:'Desde U$ 2.177/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-23.5702880, lng:-46.6408560, photos:['/images/proximamente.svg'], desc:'Emprendimiento de TEGRA en São Paulo, la mayor economía de Latinoamérica.' },
  { id:45, name:'Skylux by Tegra',         city:'Niterói · Rio de Janeiro',     country:'Brasil',   type:'Residencial Lujo',      price:'Desde U$ 4.000/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-22.8996058, lng:-43.1790576, photos:['/images/proximamente.svg'], desc:'Residencias de lujo de TEGRA con vistas a la bahía de Guanabara y al Cristo Redentor.' },
  // ── BRASIL · Nordeste – Porto de Galinhas / Maragogi / Alagoas ──
  { id:46, name:'Wave Beach Serrambi',     city:'Serrambi · Pernambuco',        country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 60.000',     status:'En Construcción · Ene 2029',statusColor:'#C9922A', lat:-8.5621675,  lng:-35.0249599, photos:['/images/proximamente.svg'], desc:'20 a 61 m² todos con vista al mar. Desde U$ 60.000 con financiación. JRocha Empreendimentos.' },
  { id:47, name:'Carneiros Park Flats',     city:'Praia dos Carneiros · PE',     country:'Brasil',   type:'Flat Studio',           price:'Desde U$ 65.191', entry:'U$ 2.795',     status:'Entrega Dic 2026',          statusColor:'#22c55e', lat:-8.7175038,  lng:-35.0870852, photos:['/images/projects/carneiros_park/photo1.png'], desc:'Carneiros Park Flats en Praia dos Carneiros · Pernambuco. Flat Studio 25m². Desarrollado por Fox Construtora.' },
  { id:48, name:'Max Carneiros Exclusive',  city:'Praia dos Carneiros · PE',     country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 78.185', entry:'U$ 3.893',     status:'Entrega 2029',              statusColor:'#22c55e', lat:-8.7155543,  lng:-35.0878564, photos:['/images/projects/max_carneiros_exclusive/photo1.png'], desc:'Max Carneiros Exclusive en Praia dos Carneiros · Pernambuco. 1 dormitorio con piscina privada 50m². Desarrollado por Fox Construtora.' },
  { id:49, name:'Tamana Beach Studios',    city:'Tamandaré · Pernambuco',       country:'Brasil',   type:'Flat Studio',           price:'Desde U$ 43.236', entry:'U$ 2.163',     status:'Entrega Sep 2028',          statusColor:'#22c55e', lat:-8.7323333,  lng:-35.0910556, photos:['/images/projects/tamana_beach/photo1.png'], desc:'Tamana Beach Studios en Tamandaré · Pernambuco. Studio 29m² a 170m del mar. Desarrollado por Fox Construtora.' },
  { id:50, name:'Nixxus Beach Prime',      city:'Porto de Galinhas · PE',       country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 3.200/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-8.5026520,  lng:-35.0026144, photos:['/images/proximamente.svg'], desc:'Residencial de playa premium en Porto de Galinhas, el destino más reconocido del nordeste brasileño.' },
  { id:51, name:'W-ONE Tchesco',           city:'Porto de Galinhas · PE',       country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 3.200/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-8.5020471,  lng:-35.0069125, photos:['/images/proximamente.svg'], desc:'Residencial frente al mar en Porto de Galinhas de Tchesco Empreendimentos.' },
  { id:52, name:'Wave Maragogi',           city:'Maragogi · Alagoas',           country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 3.500/m²',   status:'Entrega Dic 2026',          statusColor:'#22c55e', lat:-8.9885284,  lng:-35.1952367, photos:['/images/proximamente.svg'], desc:'Proyecto de JRocha frente al mar en Maragogi, uno de los paraísos naturales más espectaculares de Brasil.' },
  { id:53, name:'PRIVILEGE Maragogi',      city:'Maragogi · Alagoas',           country:'Brasil',   type:'Apart-Hotel de Playa',  price:'Desde U$ 64.103',     status:'En Construcción · Jul 2027', statusColor:'#C9922A', lat:-8.9313023,  lng:-35.1650000, photos:['/images/projects/privilege_maragogi/photo1.png'], desc:'Tours du Tamandaré en Tamandaré · Pernambuco. Studio 32m² frente al mar. Desarrollado por Fox Construtora.' },
  { id:54, name:'Brisas de Maragogi',      city:'Maragogi · Alagoas',           country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 63.869', entry:'Desde U$ 6.387',     status:'En Construcción · 2029',    statusColor:'#C9922A', lat:-8.9239573,  lng:-35.1585801, photos:['/images/projects/brisas_de_maragogi/photo1.png'], desc:'Brisas de Maragogi en Maragogi · Alagoas. 1 dormitorio 35m² frente al mar. Desarrollado por Fox Construtora.' },
  { id:55, name:'Fox Tower Maragogi',      city:'Maragogi · Alagoas',           country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 3.500/m²',   status:'En Construcción · 2028',    statusColor:'#C9922A', lat:-8.9831914,  lng:-35.1925178, photos:['/images/proximamente.svg'], desc:'Torre residencial de Diego en el corazón de Maragogi, con vistas al mar y a las piscinas naturales.' },
  { id:56, name:'AURA Milagres',           city:'São Miguel dos Milagres · AL', country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 4.000/m²',   status:'En Construcción · Jun 2029',statusColor:'#C9922A', lat:-9.2672802,  lng:-35.3667879, photos:['/images/proximamente.svg'], desc:'Ory Studios en São Miguel dos Milagres · Alagoas. Studio 28m². Desarrollado por J. Rocha.' },
  { id:57, name:'Gran Mirat Japaratinga',  city:'Japaratinga · Alagoas',        country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 3.000/m²',   status:'En Construcción · Jul 2028',statusColor:'#C9922A', lat:-9.1450266,  lng:-35.2877116, photos:['/images/proximamente.svg'], desc:'Complejo residencial de lujo frente al mar en Japaratinga, Alagoas. Entrega julio 2028.' },
  { id:58, name:'Atmos Japaratinga',       city:'Japaratinga · Alagoas',        country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 3.000/m²',   status:'En Construcción · 1Q 2029', statusColor:'#C9922A', lat:-9.1161160,  lng:-35.2699690, photos:['/images/proximamente.svg'], desc:'Residencial Atmos en Japaratinga, nueva frontera del turismo inmobiliario del nordeste brasileño.' },
  { id:59, name:'Peroba Azzurre',          city:'Maragogi · Alagoas',           country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 3.500/m²',   status:'Entrega Mar 2027',          statusColor:'#22c55e', lat:-8.9284703,  lng:-35.1631896, photos:['/images/proximamente.svg'], desc:'Residencial de HSM frente al mar en Maragogi, con entrega prevista para marzo 2027.' },
  { id:60, name:'Horizon Smart Flats',     city:'Maragogi · Alagoas',           country:'Brasil',   type:'Apart-hotel',           price:'Desde U$ 3.500/m²',   status:'Entrega Sep 2027',          statusColor:'#22c55e', lat:-8.9094985,  lng:-35.1524922, photos:['/images/proximamente.svg'], desc:'Flats inteligentes de HASA frente al mar en Maragogi, diseñados para renta turística de alta demanda.' },
  // ── USA · Miami · Brickell ──
  { id:61, name:'ONE WEST 12',             city:'Miami · Brickell',             country:'USA',      type:'Residencial Lujo',      price:'Desde U$ 8.300/m²',   status:'Pre-venta',                 statusColor:'#22c55e', lat:25.7854312,  lng:-80.1968803, photos:['/images/proximamente.svg'], desc:'Residencias de ultra lujo en el corazón de Brickell con vistas espectaculares al Downtown de Miami.' },
  { id:62, name:'VICEROY Brickell',        city:'Miami · Brickell',             country:'USA',      type:'Residencial Lujo',      price:'Desde U$ 8.300/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:25.7685407,  lng:-80.1911381, photos:['/images/projects/viceroy_brickell/photo1.png'], desc:'Emblemático Viceroy en Brickell combinando vida de lujo con ubicación privilegiada frente a la bahía.' },
  { id:63, name:'Mercedes-Benz Places',    city:'Miami · Brickell',             country:'USA',      type:'Residencial Ultra Lujo', price:'Consultar',            status:'Pre-venta',                 statusColor:'#22c55e', lat:25.7629870,  lng:-80.1962926, photos:['/images/proximamente.svg'], desc:'La primera residencia con firma de Mercedes-Benz en el mundo. Ultra lujo en Brickell, Miami.' },
  { id:64, name:'Faena Residences',        city:'Miami Beach',                  country:'USA',      type:'Residencial Ultra Lujo', price:'Desde U$ 5.200/m²',  status:'Pre-venta',                 statusColor:'#22c55e', lat:25.7697437,  lng:-80.1940942, photos:['/images/projects/faena_residences/photo1.png'], desc:'Icónicas residencias de la marca Faena en Miami Beach, diseño de lujo y ubicación excepcional.' },
  { id:65, name:'Bentley Residences',      city:'Sunny Isles Beach',            country:'USA',      type:'Residencial Ultra Lujo', price:'Desde U$ 6.750/m²',  status:'En Construcción',           statusColor:'#C9922A', lat:25.9470124,  lng:-80.1197179, photos:['/images/proximamente.svg'], desc:'La primera torre residencial firmada por Bentley Motors en el mundo. 62 pisos de puro lujo.' },
  { id:66, name:'St. Regis Sunny Isles',   city:'Sunny Isles Beach',            country:'USA',      type:'Residencial Lujo',      price:'Desde U$ 6.750/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:25.9499424,  lng:-80.1197905, photos:['/images/proximamente.svg'], desc:'Residencias de la marca St. Regis en Sunny Isles Beach con servicio hotelero de 5 estrellas.' },
  { id:67, name:'ONE Park Tower Aventura', city:'Aventura',                     country:'USA',      type:'Residencial Lujo',      price:'Desde U$ 3.050/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:25.9087002,  lng:-80.1503730, photos:['/images/proximamente.svg'], desc:'Torre residencial premium en Aventura con diseño espectacular y acceso al Aventura Mall.' },
  { id:68, name:'NATIIVO Fort Lauderdale', city:'Fort Lauderdale',              country:'USA',      type:'Apart-hotel',           price:'Desde U$ 3.440/m²',   status:'En Construcción · 2028',    statusColor:'#C9922A', lat:26.1217742,  lng:-80.1460804, photos:['/images/proximamente.svg'], desc:'NATIIVO: el concepto de residencias para renta en Airbnb. Ahora en Fort Lauderdale.' },
  { id:69, name:'Ritz Carlton Pompano',    city:'Pompano Beach',                country:'USA',      type:'Residencial Lujo',      price:'Desde U$ 3.440/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:26.2180744,  lng:-80.0913576, photos:['/images/proximamente.svg'], desc:'Residencias con el servicio Ritz Carlton frente al océano en Pompano Beach, Fort Lauderdale.' },
  // ── ARGENTINA · Buenos Aires ──
  { id:70, name:'Feel Belgrano G&D',       city:'Belgrano · Buenos Aires',      country:'Argentina',type:'Residencial',           price:'Desde U$ 2.600/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-34.5615042, lng:-58.4537139, photos:['/images/proximamente.svg'], desc:'Moderno residencial de G&D Developers en Belgrano, uno de los barrios más cotizados de Buenos Aires.' },
  { id:71, name:'OM Palermo Newbery',       city:'Palermo · Buenos Aires',       country:'Argentina',type:'Residencial',           price:'Desde U$ 2.800/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-34.5820981, lng:-58.4488594, photos:['/images/proximamente.svg'], desc:'Torre North Baires en Palermo Hollywood, diseño contemporáneo y acabados de primera línea.' },
  { id:72, name:'Distrito Colegiales G&D', city:'Colegiales · Buenos Aires',    country:'Argentina',type:'Residencial',           price:'Desde U$ 2.600/m²',   status:'Pre-venta',                 statusColor:'#22c55e', lat:-34.5720303, lng:-58.4490074, photos:['/images/proximamente.svg'], desc:'Residencial de G&D Developers en Colegiales, barrio en plena expansión y revalorización.' },
  { id:73, name:'Forest Barrio Privado',    city:'Buenos Aires GBA',             country:'Argentina',type:'Barrio Privado',        price:'Desde U$ 2.367/m²',   status:'Pre-venta',                 statusColor:'#22c55e', lat:-34.9112894, lng:-58.4380080, photos:['/images/proximamente.svg'], desc:'Barrio privado al sur del Gran Buenos Aires con lotes y casas en entorno verde y seguro.' },
  // ── ARGENTINA · Mar del Plata ──
  { id:74, name:'Torre Unkanny',            city:'Mar del Plata',                country:'Argentina',type:'Residencial',           price:'Desde U$ 1.800/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-38.0174612, lng:-57.5280396, photos:['/images/proximamente.svg'], desc:'Torre residencial premium en la zona de Güemes, Mar del Plata. Diseño moderno y vistas al mar.' },
  { id:75, name:'Varese Único MDP',         city:'Mar del Plata',                country:'Argentina',type:'Residencial',           price:'Desde U$ 1.800/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-38.0098048, lng:-57.5335406, photos:['/images/proximamente.svg'], desc:'Residencial de línea única en Mar del Plata con acabados superiores y diseño de inspiración italiana.' },
  // ── DUBAI ──
  { id:76, name:'Jumeirah Village Circle',  city:'Dubái',                        country:'Dubái',    type:'Residencial',           price:'Desde U$ 3.540/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:25.0608609,  lng:55.2088007,  photos:['/images/proximamente.svg'], desc:'Comunidad residencial de alta demanda en JVC, Dubái. Excelente rentabilidad en U$ y golden visa.' },
  { id:77, name:'Palm Jumeirah',            city:'Palm Jumeirah · Dubái',        country:'Dubái',    type:'Residencial Ultra Lujo', price:'Desde U$ 6.000/m²',  status:'Pre-venta',                 statusColor:'#22c55e', lat:25.1124317,  lng:55.1389780,  photos:['/images/proximamente.svg'], desc:'Exclusivas residencias en la icónica Palma Jumeirah, el desarrollo más reconocido del mundo.' },
  { id:78, name:'TRIO ISLE',                city:'Dubái',                        country:'Dubái',    type:'Residencial Lujo',      price:'Desde U$ 3.540/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:25.6785338,  lng:55.7387655,  photos:['/images/proximamente.svg'], desc:'Proyecto residencial en isla privada de Dubái con diseño de autor y acceso exclusivo al mar.' },
  // ── ESPAÑA ──
  { id:79, name:'Mandarin Oriental BCN',    city:'Barcelona',                    country:'España',   type:'Residencial Ultra Lujo', price:'Desde U$ 4.000/m²', status:'Pre-venta',                 statusColor:'#22c55e', lat:41.3912859,  lng:2.1666701,   photos:['/images/proximamente.svg'], desc:'Residencias de ultra lujo de la marca Mandarin Oriental en el Paseo de Gracia de Barcelona.' },
  { id:80, name:'Antares Barcelona',        city:'Barcelona',                    country:'España',   type:'Residencial Lujo',      price:'Desde U$ 4.000/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:41.4120629,  lng:2.2192150,   photos:['/images/proximamente.svg'], desc:'Residencias de lujo en Barcelona con diseño contemporáneo y acceso al Mediterráneo.' },
  // ── URUGUAY ──
  { id:81, name:'WAVE BRAVA',               city:'Punta del Este',               country:'Uruguay',  type:'Residencial de Playa',  price:'Desde U$ 3.080/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-34.9482902, lng:-54.9289248, photos:['/images/proximamente.svg'], desc:'Residencial frente al mar en La Brava, Punta del Este. El destino más exclusivo del Cono Sur.' },
  // ── PARAGUAY ──
  { id:82, name:'PETRA Asunción',           city:'Asunción',                     country:'Paraguay', type:'Residencial',           price:'Desde U$ 1.200/m²',   status:'En Construcción',           statusColor:'#C9922A', lat:-25.2363143, lng:-57.5793542, photos:['/images/proximamente.svg'], desc:'Residencial PETRA en Asunción, la capital de Paraguay. Excelente costo de entrada y rentabilidad en USD.' },
  // ── BRASIL · Nordeste – Proyectos adicionales ──
  { id:112, name:'Beach Square',             city:'Porto de Galinhas · PE',       country:'Brasil',   type:'Flat Studio',           price:'Desde U$ 59.104', entry:'U$ 8.862',     status:'Entrega Ene 2028',          statusColor:'#22c55e', lat:-8.5026,     lng:-35.0026,    photos:['/images/projects/beach_square/photo1.png'], desc:'Beach Square en Porto de Galinhas · Pernambuco. Studio 22m² con balcón en el centro. Desarrollado por Fox Construtora.' },
  { id:111, name:'Porto Algarve',            city:'Porto de Galinhas · PE',       country:'Brasil',   type:'Flat Studio',           price:'Desde U$ 119.339', entry:'U$ 5.967',    status:'Entrega Oct 2028',          statusColor:'#22c55e', lat:-8.5026,     lng:-35.0026,    photos:['/images/projects/porto_algarve/photo1.png'], desc:'Porto Algarve en Porto de Galinhas · Pernambuco. Studio 30m² frente al mar. Desarrollado por Fox Construtora.' },
  { id:110, name:'Ory Studios',             city:'São Miguel dos Milagres · AL',  country:'Brasil',   type:'Flat Studio',           price:'Desde U$ 54.523', entry:'U$ 4.670',     status:'Entrega 2029',              statusColor:'#22c55e', lat:-9.2672802,  lng:-35.3667879, photos:['/images/projects/ory_studios/photo1.png'], desc:'Ory Studios en São Miguel dos Milagres · Alagoas. Studio 28m². Desarrollado por J. Rocha.' },
  { id:109, name:'Tamana Breeze',           city:'Tamandaré · Pernambuco',       country:'Brasil',   type:'Flat Studio',           price:'Desde U$ 36.244', entry:'U$ 1.812',     status:'Entrega Dic 2029',          statusColor:'#22c55e', lat:-8.7330065,  lng:-35.0905631, photos:['/images/projects/tamana_breeze/photo1.png'], desc:'Tamana Breeze en Tamandaré · Pernambuco. Studio 23m². Desarrollado por Fox Construtora.' },
  { id:83, name:'Beach House', city:'Porto de Galinhas · PE', country:'Brasil', type:'Flat Studio', price:'Desde U$ 50.853', entry:'U$ 5.085', status:'Terminado · Feb 2026', statusColor:'#22c55e', lat:-8.4912868, lng:-35.0031201, photos:['/images/projects/beach_house/photo1.jpeg','/images/projects/beach_house/photo2.jpeg'], desc:'Beach House en Porto de Galinhas · Pernambuco. Studio 17m² terminado. Desarrollado por House In.' },
  { id:113, name:'Ora Beach', city:'Porto de Galinhas · PE', country:'Brasil', type:'Flat Studio', price:'Desde U$ 61.450', entry:'U$ 30.730', status:'Terminado · Amoblado', statusColor:'#22c55e', lat:-8.4912868, lng:-35.0031201, photos:['/images/projects/ora_beach/photo1.png'], desc:'Ora Beach en Porto de Galinhas · Pernambuco. Studio 22m² terminado, amoblado y listo para usar.' },
  { id:114, name:'Mau Loa', city:'Porto de Galinhas · PE', country:'Brasil', type:'Flat Studio', price:'Desde U$ 39.692', entry:'U$ 7.145', status:'Entrega Abr 2027', statusColor:'#22c55e', lat:-8.4994477, lng:-35.0070381, photos:['/images/projects/mau_loa/photo1.png'], desc:'Mau Loa en Porto de Galinhas · Pernambuco. Studio 23m². Desarrollado por Q. Almeida.' },
  { id:115, name:'14 BIS Home Club', city:'Perequê · Porto Belo · SC', country:'Brasil', type:'Apart-hotel Club', price:'Desde U$ 123.000', entry:'U$ 12.311', status:'Entrega 2029 · Amoblado', statusColor:'#22c55e', lat:-27.147678, lng:-48.5925807, photos:['/images/projects/14_bis_home_club/photo1.png'], desc:'14 BIS Home Club en Perequê · Porto Belo · SC. Apart-hotel a 700m del Pier y Hard Rock. Se entrega amoblado.' },
  { id:116, name:'Atlantic Tower', city:'Porto Belo · SC', country:'Brasil', type:'Apart-hotel', price:'Desde U$ 111.760', entry:'U$ 11.170', status:'Entrega 2027', statusColor:'#22c55e', lat:-27.1605858, lng:-48.5631374, photos:['/images/projects/atlantic_tower/photo1.png'], desc:'Atlantic Tower en Porto Belo · SC. Apart-hotel. Desarrollado por Verbena.' },
  { id:117, name:'Essenzia', city:'Canasvieiras · Florianópolis', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 65.400', entry:'U$ 6.400', status:'Entrega 2029', statusColor:'#22c55e', lat:-27.4292216, lng:-48.4713605, photos:['/images/projects/essenzia/photo1.png'], desc:'Essenzia en Canasvieiras · Florianópolis. Residencial a pasos de la playa. Desarrollado por Nowa.' },
  { id:118, name:'Breeza', city:'Jurerê Internacional · Florianópolis', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 80.650', entry:'U$ 2.210', status:'Entrega 2029', statusColor:'#22c55e', lat:-27.4415164, lng:-48.4923742, photos:['/images/projects/breeza/photo1.png'], desc:'Breeza en Jurerê Internacional · Florianópolis. Residencial a 300m de la playa.' },
  { id:119, name:'Gaia Residences', city:'Hollywood · Miami', country:'USA', type:'Apart-hotel', price:'Desde U$ 480.000', entry:'U$ 24.000', status:'Pre-venta', statusColor:'#22c55e', lat:26.0146456, lng:-80.1428774, photos:['/images/projects/gaia_residences/photo1.png'], desc:'Studios desde 564 SF en Hollywood Golf, Miami. Short term rental permitido · Club de playa privado. Reserva 5% + 5% a 45 días + 10% contrato + 10% groundbreaking + 10% top off + 60% al closing. HOA: $1.29/SF.' },
  { id:120, name:'Seven Park Residences', city:'Hallandale · Gulfstream · Miami', country:'USA', type:'Apart-hotel', price:'Desde U$ 456.900', entry:'U$ 91.380', status:'Entrega Mar 2027', statusColor:'#22c55e', lat:25.9778688, lng:-80.1454094, photos:['/images/projects/seven_park_residences/photo1.png'], desc:'Studios desde 337 SF en Hallandale Gulfstream, Miami. Short term rental permitido. 20% contrato + 10% a 2 meses + 10% 4th Floor ago 2026 + 10% top off dic 2026 + 50% entrega mar 2027. HOA: $1.03/SF.' },
  { id:121, name:'Midtown Park', city:'Midtown · Miami', country:'USA', type:'Residencial Lujo', price:'Desde U$ 700.000', status:'Entrega 1Q 2029', statusColor:'#22c55e', lat:25.805344, lng:-80.1947314, photos:['/images/projects/midtown_park/photo1.png'], desc:'Studios desde 600 SF en Midtown Miami. Diseñado por Meyer Davis Studio. 4 alquileres/año (90 días mín). Reserva U$ 50.000 + 20% Q1 2026 + 10% groundbr. nov 2026 + 10% mar 2027 + 10% top off mar 2028 + 50% entrega 1Q 2029.' },
  { id:122, name:'Frida Kahlo Wynwood Residences', city:'Wynwood · Miami', country:'USA', type:'Residencial Lujo', price:'Desde U$ 498.000', status:'Entrega 2029', statusColor:'#22c55e', lat:25.8018484, lng:-80.1994662, photos:['/images/projects/frida_kahlo_wynwood_residences/photo1.png'], desc:'Studios desde 396 SF en Wynwood Miami. Sin restricciones de alquiler. Depto + oficina incluida. 10% contrato + 10% a 3 meses + 10% groundbr. Q4/26 + 10% groundbr.+1 año + 60% entrega 2029. Desarrollado por PMG.' },
  { id:123, name:'Delano Residences & Hotel', city:'Downtown · Miami', country:'USA', type:'Residencial Lujo', price:'Desde U$ 737.000', status:'Entrega 2031', statusColor:'#22c55e', lat:25.7783679, lng:-80.1889392, photos:['/images/projects/delano_residences_hotel/photo1.png'], desc:'El segundo rascacielos de Miami. Studios desde 453 SF en Downtown. 10% contrato + 10% oct 2026 + 10% jun 2027 + 10% jun 2028 + 60% entrega 2031. HOA: $1.85/SF. Desarrollado por PMG.' },
  { id:124, name:'House of Wellness Brickell', city:'Brickell · SW9ST · Miami', country:'USA', type:'Residencial Lujo', price:'Desde U$ 385.000', entry:'U$ 38.500', status:'Entrega 4Q 2029', statusColor:'#22c55e', lat:25.7653051, lng:-80.1967394, photos:['/images/projects/house_of_wellness_brickell/photo1.png'], desc:'Studios desde 337 SF en Brickell SW9ST. 30 días mín · 4 veces al año. 10% contrato + 5% a 2m + 5% a 4m + 5% a 6m + 15% inicio obra Q2 2027 + 60% entrega 4Q 2029. HOA: $1.50/SF.' },
  { id:125, name:'Domus Brickell Center', city:'Brickell · Miami', country:'USA', type:'Apart-hotel', price:'Desde U$ 515.000', entry:'U$ 51.500', status:'Entrega 1Q 2028', statusColor:'#22c55e', lat:25.7636117, lng:-80.1974938, photos:['/images/projects/domus_brickell_center/photo1.png'], desc:'Studios desde 417 SF en Brickell. Short term rental permitido. 10% contrato + 10% a 2m + 5% a 4m + 5% jul 2026 + 5% ago 2026 + 65% entrega 1Q 2028.' },
  { id:126, name:'The Standard Residences Brickell', city:'Brickell · Miami', country:'USA', type:'Residencial Lujo', price:'Desde U$ 640.000', entry:'U$ 128.000', status:'Entrega 2026', statusColor:'#22c55e', lat:25.7668381, lng:-80.1959609, photos:['/images/projects/the_standard_residences_brickell/photo1.png'], desc:'Studios desde 491 SF en Brickell Miami. 12 contratos de 30 días. 20% contrato + 15% a 3 meses + 65% entrega 2026.' },
  { id:127, name:'Square Offices Hallandale', city:'Hallandale Blvd · Miami', country:'USA', type:'Oficinas Comerciales', price:'Desde U$ 233.900', entry:'U$ 23.390', status:'Entrega 2Q 2028', statusColor:'#22c55e', lat:25.9859334, lng:-80.1527919, photos:['/images/projects/square_offices_hallandale/photo1.png'], desc:'Studios/oficinas desde 321 SF en Hallandale Blvd. 10% reserva + 10% contrato + 10% groundbreaking + 10% 4th floor + 10% top off + 50% entrega 2Q 2028.' },
  { id:128, name:'The William', city:'North Miami Beach', country:'USA', type:'Residencial Lujo', price:'Desde U$ 440.000', entry:'U$ 88.000', status:'Pre-venta', statusColor:'#22c55e', lat:25.9257169, lng:-80.1590896, photos:['/images/projects/the_william/photo1.png'], desc:'Studios desde 552 SF en North Miami Beach. Rentas de 90 días mínimo. 20% contrato + 10% groundbreaking + 10% top off + 60% closing. HOA: $1.20/SF.' },
  { id:84, name:'Nixxus II', city:'Porto de Galinhas · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 480.000', status:'Terminado · 2025', statusColor:'#22c55e', lat:-8.5020981, lng:-35.0038262, photos:['/images/projects/nixxus_ii/photo1.jpeg'], desc:'Nixxus II en Porto de Galinhas · PE. Desarrollado por bl2.' },
  { id:85, name:'Cais', city:'Porto de Galinhas · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 844.000', status:'Terminado · 2024', statusColor:'#22c55e', lat:-8.5026, lng:-35.0026, photos:['/images/projects/cais/photo1.jpg'], desc:'Cais en Porto de Galinhas · PE · Muro alto. Desarrollado por Due inc.' },
  { id:86, name:'Nature', city:'Porto de Galinhas · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 715.000', status:'En Construcción', statusColor:'#C9922A', lat:-8.5026, lng:-35.0026, photos:['/images/projects/nature/photo1.jpg'], desc:'Nature en Porto de Galinhas · PE · 1era linea (Muro alto). Desarrollado por due inc.' },
  { id:87, name:'Tropi', city:'Porto de Galinhas · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 2.155.000', status:'En Construcción', statusColor:'#C9922A', lat:-8.5026, lng:-35.0026, photos:['/images/projects/tropi/photo1.jpg'], desc:'Tropi en Porto de Galinhas · PE · 1era linea (Muro alto). Desarrollado por due inc.' },
  { id:88, name:'La proa', city:'Porto de Galinhas · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 372.000', status:'En Construcción', statusColor:'#C9922A', lat:-8.5070068, lng:-35.0008454, photos:['/images/projects/la_proa/photo1.png'], desc:'La proa en Porto de Galinhas · PE · 1era linea de mar. Desarrollado por W engenharia.' },
  { id:89, name:'Dolphin smarts flats', city:'Porto de Galinhas · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 284.000', status:'En Construcción', statusColor:'#C9922A', lat:-8.487527, lng:-35.0016922, photos:['/images/projects/dolphin_smarts_flats/photo1.png','/images/projects/dolphin_smarts_flats/photo2.png'], desc:'Dolphin smarts flats en Porto de Galinhas · PE · 50 mts del mar. Desarrollado por Hasa emprendimientos.' },
  { id:90, name:'Wiki beach', city:'Porto de Galinhas · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 360.000', status:'En Construcción', statusColor:'#C9922A', lat:-8.5023433, lng:-35.0076745, photos:['/images/projects/wiki_beach/photo1.jpg'], desc:'Wiki beach en Porto de Galinhas · PE. Desarrollado por Jairo Rocha.' },
  { id:91, name:'Nixxus BP II', city:'Porto de Galinhas · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 495.000', status:'En Construcción', statusColor:'#C9922A', lat:-8.5020981, lng:-35.0038262, photos:['/images/projects/nixxus_bp_ii/photo1.jpg'], desc:'Nixxus BP II en Porto de Galinhas · PE · 1era linea de mar. Desarrollado por bl2.' },
  { id:92, name:'Habita', city:'Porto de Galinhas · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 1.252.000', status:'Pre-venta · 2029', statusColor:'#22c55e', lat:-8.5026, lng:-35.0026, photos:['/images/projects/habita/photo1.jpg'], desc:'Habita en Porto de Galinhas · PE · 1era linea (cupe). Desarrollado por due inc.' },
  { id:93, name:'Argo smarts flats', city:'Porto de Galinhas · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 377.000', status:'En Construcción', statusColor:'#C9922A', lat:-8.5026, lng:-35.0026, photos:['/images/projects/argo_smarts_flats/photo1.png','/images/projects/argo_smarts_flats/photo2.png'], desc:'Argo smarts flats en Porto de Galinhas · PE. Desarrollado por Hasa emprendimientos.' },
  { id:94, name:'WTA maragogi', city:'Maragogi · Alagoas', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 275.000', status:'Pre-venta · 2029', statusColor:'#22c55e', lat:-8.9360033, lng:-35.1697556, photos:['/images/projects/wta_maragogi/photo1.jpeg'], desc:'WTA maragogi en Maragogi · Alagoas · Peroba. Desarrollado por W incorporadora.' },
  { id:95, name:'Orama beach', city:'Maragogi · Alagoas', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 480.000', entry:'Desde U$ 9.171', status:'Pre-venta', statusColor:'#22c55e', lat:-8.9876399, lng:-35.1936445, photos:['/images/projects/orama_beach/photo1.png','/images/projects/orama_beach/photo2.png','/images/projects/orama_beach/photo3.png','/images/projects/orama_beach/photo4.png'], desc:'Orama beach en Maragogi · Alagoas · Camino de Moises. Desarrollado por Fox construtora.' },
  { id:96, name:'caminho dos corais', city:'Maragogi · Alagoas', country:'Brasil', type:'Residencial de Playa', price:'Consultar', status:'Pre-venta', statusColor:'#22c55e', lat:-8.9892598, lng:-35.1975479, photos:['/images/projects/caminho_dos_corais/photo1.jpg'], desc:'caminho dos corais en Maragogi · Alagoas · Camino de Moises. Desarrollado por Queiroz Almeida.' },
  { id:97, name:'Caminho do mar',           city:'Maragogi · Alagoas',           country:'Brasil',   type:'Residencial de Playa',  price:'Desde U$ 95.522', entry:'U$ 23.910',     status:'Entrega Ago 2027',          statusColor:'#22c55e', lat:-8.9847236,  lng:-35.1908857, photos:['/images/projects/caminho_do_mar/photo1.png','/images/projects/caminho_do_mar/photo2.jpeg','/images/projects/caminho_do_mar/photo3.jpeg','/images/projects/caminho_do_mar/photo4.jpeg','/images/projects/caminho_do_mar/photo5.jpeg'], desc:'1 dorm. 34m² · ¡Última unidad disponible!' },
  { id:98, name:'Praia residences', city:'Maragogi · Alagoas', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 486.000', status:'En Construcción', statusColor:'#C9922A', lat:-8.9823427, lng:-35.188753, photos:['/images/projects/praia_residences/photo1.jpeg','/images/projects/praia_residences/photo2.jpeg'], desc:'Praia residences en Maragogi · Alagoas · Barra Grande. Desarrollado por Menelau Almeida.' },
  { id:99, name:'Nomar', city:'Praia dos Carneiros · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 911.000', status:'Terminado · 2025', statusColor:'#22c55e', lat:-8.7168819, lng:-35.0868063, photos:['/images/projects/nomar/photo1.jpg'], desc:'Nomar en Praia dos Carneiros · PE · Carneiros. Desarrollado por due inc..' },
  { id:100, name:'Costa do Mar', city:'Praia dos Carneiros · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 655.000', status:'En Construcción · 2026', statusColor:'#C9922A', lat:-8.7128621, lng:-35.0900211, photos:['/images/projects/costa_do_mar/photo1.jpg'], desc:'Costa do Mar en Praia dos Carneiros · PE · carneiros. Desarrollado por Due inc..' },
  { id:101, name:'reserva Pirambu', city:'Praia dos Carneiros · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 316.000', status:'En Construcción', statusColor:'#C9922A', lat:-8.7545444, lng:-35.0931037, photos:['/images/projects/reserva_pirambu/photo1.jpeg'], desc:'reserva Pirambu en Praia dos Carneiros · PE. Desarrollado por Soter construçoe.' },
  { id:102, name:'Boulevar', city:'Praia dos Carneiros · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 484.000', status:'En Construcción · 2027', statusColor:'#C9922A', lat:-8.7177572, lng:-35.0922419, photos:['/images/projects/boulevar/photo1.jpg'], desc:'Boulevar en Praia dos Carneiros · PE · Carneiros. Desarrollado por due inc..' },
  { id:103, name:'Orla', city:'Praia dos Carneiros · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 1.467.000', status:'En Construcción · 2028', statusColor:'#C9922A', lat:-8.7136967, lng:-35.084217, photos:['/images/projects/orla/photo1.jpg'], desc:'Orla en Praia dos Carneiros · PE · Carneiros. Desarrollado por due inc..' },
  { id:104, name:'Tours du Carneiros',      city:'Praia dos Carneiros · PE',     country:'Brasil',   type:'Flat Studio',           price:'Desde U$ 43.223', entry:'U$ 3.000',     status:'Entrega Dic 2028',          statusColor:'#22c55e', lat:-8.71452,    lng:-35.0904389, photos:['/images/projects/tours_du_carneiros/photo1.png'], desc:'Tours du Carneiros en Praia dos Carneiros · Pernambuco. Flat Studio 25m². Desarrollado por Fox Construtora.' },
  { id:105, name:'Beach Campas', city:'Praia dos Carneiros · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 259.000', status:'Pre-venta · 2029', statusColor:'#22c55e', lat:-8.7330065, lng:-35.0905631, photos:['/images/projects/beach_campas/photo1.png'], desc:'Beach Campas en Praia dos Carneiros · PE · 80 mts del mar. Desarrollado por House in.' },
  { id:106, name:'Costa dos Coqueiros', city:'Praia dos Carneiros · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 335.000', status:'Pre-venta · 2029', statusColor:'#22c55e', lat:-8.7115952, lng:-35.0889542, photos:['/images/projects/costa_dos_coqueiros/photo1.jpg'], desc:'Costa dos Coqueiros en Praia dos Carneiros · PE · Carneiros. Desarrollado por due inc..' },
  { id:107, name:'Poco da Panela', city:'Recife · Pernambuco', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 1.249.000', status:'En Construcción · 2028', statusColor:'#C9922A', lat:-8.0631, lng:-34.9112, photos:['/images/projects/poco_da_panela/photo1.jpg'], desc:'Poco da Panela en Recife · Pernambuco. Desarrollado por due inc.' },
  { id:108, name:'Horizont', city:'São José da Coroa Grande · PE', country:'Brasil', type:'Residencial de Playa', price:'Desde U$ 228.000', status:'Pre-venta', statusColor:'#22c55e', lat:-8.8341, lng:-35.1514, photos:['/images/projects/horizont/photo1.png','/images/projects/horizont/photo2.jpeg','/images/projects/horizont/photo3.png','/images/projects/horizont/photo4.jpg'], desc:'Horizont en São José da Coroa Grande · PE · Beira mar. Desarrollado por Hasa emprendimiento.' },
];

function PhotoModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = project.photos;

  const prev = () => setCurrentPhoto((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrentPhoto((c) => (c + 1) % photos.length);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1100 }}
      />

      {/* Modal panel from right */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 35 }}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: 520,
          background: '#101010',
          borderLeft: '1px solid rgba(201,146,42,0.25)',
          zIndex: 1200,
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'rgba(255,255,255,0.08)',
            border: 'none',
            borderRadius: '50%',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#efefef',
            fontSize: 18,
            zIndex: 10,
          }}
        >
          ✕
        </button>

        {/* Photo gallery */}
        <div style={{ position: 'relative', width: '100%', height: 280, background: '#0d0d0d', flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[currentPhoto]}
            alt={project.name}
            onError={(e) => {
              const el = e.target as HTMLImageElement;
              el.style.display = 'none';
              const parent = el.parentElement;
              if (parent && !parent.querySelector('.img-fallback')) {
                const fb = document.createElement('div');
                fb.className = 'img-fallback';
                fb.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#1a1a2e;color:rgba(201,146,42,0.4);font-size:48px;';
                fb.textContent = '🏢';
                parent.appendChild(fb);
              }
            }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {photos.length > 1 && (
            <>
              <button
                onClick={prev}
                style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', color: '#efefef', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                ‹
              </button>
              <button
                onClick={next}
                style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', color: '#efefef', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                ›
              </button>
              {/* Dots */}
              <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
                {photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPhoto(idx)}
                    style={{ width: idx === currentPhoto ? 20 : 8, height: 8, borderRadius: 4, background: idx === currentPhoto ? '#C9922A' : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', transition: 'all 0.2s', padding: 0 }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '28px 28px 40px', flexGrow: 1 }}>
          {/* Header */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#efefef', margin: 0 }}>{project.name}</h2>
              <span style={{ fontSize: 10, fontWeight: 700, color: project.statusColor, background: `${project.statusColor}22`, border: `1px solid ${project.statusColor}44`, borderRadius: 20, padding: '3px 10px', whiteSpace: 'nowrap', letterSpacing: '0.04em' }}>
                {project.status}
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.5)', margin: 0 }}>📍 {project.city}, {project.country}</p>
          </div>

          {/* Description */}
          <p style={{ fontSize: 13, color: 'rgba(239,239,239,0.55)', lineHeight: 1.6, marginBottom: 20 }}>
            {project.desc}
          </p>

          {/* Price block */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ background: 'rgba(201,146,42,0.08)', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 10, padding: '16px 20px', marginBottom: 10 }}>
              <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.4)', letterSpacing: '0.1em', marginBottom: 4, fontWeight: 600 }}>PRECIO DESDE</p>
              <p style={{ fontSize: 22, fontWeight: 900, color: '#C9922A', margin: 0, letterSpacing: '-0.01em' }}>{project.price}</p>
            </div>
            {project.entry && (
              <div style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 10, padding: '14px 20px' }}>
                <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.4)', letterSpacing: '0.1em', marginBottom: 4, fontWeight: 600 }}>INGRESÁ CON</p>
                <p style={{ fontSize: 18, fontWeight: 800, color: '#22c55e', margin: 0 }}>{project.entry}</p>
              </div>
            )}
          </div>

          {/* Tipo de proyecto */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', background: 'rgba(201,146,42,0.1)', border: '1px solid rgba(201,146,42,0.25)', borderRadius: 20, padding: '4px 12px', letterSpacing: '0.06em' }}>
              {project.type}
            </span>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(239,239,239,0.5)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '4px 12px', letterSpacing: '0.06em' }}>
              {project.country}
            </span>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* WhatsApp — botón principal */}
            <a
              href={`https://wa.me/5492233559834?text=${encodeURIComponent(`Hola! Me interesa el proyecto *${project.name}* en ${project.city}, ${project.country}. ¿Me pueden dar más información?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                background: '#25D366',
                color: '#fff',
                textAlign: 'center',
                padding: '15px 24px',
                fontSize: 13,
                fontWeight: 800,
                borderRadius: 8,
                textDecoration: 'none',
                letterSpacing: '0.06em',
                boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              CONSULTAR POR WHATSAPP
            </a>

            {/* Contacto — secundario */}
            <Link
              href="/contacto"
              style={{
                display: 'block',
                background: 'transparent',
                color: '#C9922A',
                textAlign: 'center',
                padding: '13px 24px',
                fontSize: 13,
                fontWeight: 700,
                borderRadius: 8,
                textDecoration: 'none',
                letterSpacing: '0.08em',
                border: '1px solid rgba(201,146,42,0.35)',
              }}
            >
              SOLICITAR INFO POR EMAIL
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

const MARKETS = [
  { id: 'Brasil',    label: 'Brasil',      flag: 'https://flagcdn.com/w40/br.png' },
  { id: 'USA',       label: 'USA / Miami', flag: 'https://flagcdn.com/w40/us.png' },
  { id: 'Argentina', label: 'Argentina',   flag: 'https://flagcdn.com/w40/ar.png' },
  { id: 'Dubái',     label: 'Dubái',       flag: 'https://flagcdn.com/w40/ae.png' },
  { id: 'España',    label: 'España',      flag: 'https://flagcdn.com/w40/es.png' },
  { id: 'Uruguay',   label: 'Uruguay',     flag: 'https://flagcdn.com/w40/uy.png' },
  { id: 'Paraguay',  label: 'Paraguay',    flag: 'https://flagcdn.com/w40/py.png' },
];

const MARKET_STATS: Record<string, { headline: string; pills: string[]; why: string }> = {
  'Brasil': {
    headline: 'El mercado inmobiliario de mayor crecimiento en Latinoamérica',
    pills: ['+18% valorización anual', 'Precios en USD', 'Alta demanda turística', 'Financiación desde 7%'],
    why: 'Brasil ofrece una combinación única de precios competitivos en dólares, alta demanda de alquiler turístico y proyectos con planes de pago accesibles. Las costas de Santa Catarina y el Nordeste son los destinos de mayor crecimiento del país.',
  },
  'Brasil-Sur': {
    headline: 'Santa Catarina — el destino premium del sur de Brasil',
    pills: ['+20% valorización en SC', 'Florianópolis #1 en calidad de vida', 'Turismo internacional', 'Proyectos en pozo'],
    why: 'Florianópolis, Jurerê Internacional, Bombinhas e Itapema concentran los proyectos más exclusivos de Brasil. La demanda supera la oferta y los precios suben año a año. Ideal para inversión en renta corta y plusvalía.',
  },
  'Brasil-Nordeste': {
    headline: 'Nordeste — playas paradisíacas con el ticket más bajo',
    pills: ['Desde U$ 36.000', 'Ingreso con 7-10%', 'Renta turística 12-15%', 'Maragogi y Porto de Galinhas'],
    why: 'El Nordeste brasileño es el mercado de mayor accesibilidad del país. Con studios desde U$ 36.000 y posibilidad de financiar el 90%, es la puerta de entrada al real estate internacional para inversores de cualquier perfil.',
  },
  'USA': {
    headline: 'Miami — el mercado inmobiliario más demandado del mundo',
    pills: ['+12% apreciación anual', 'Short-term rental permitido', 'Mercado líquido en USD', 'Sin impuesto estadual'],
    why: 'Miami es el destino preferido por inversores latinoamericanos. Combina apreciación constante, posibilidad de alquiler turístico (Airbnb) y el respaldo legal del mercado más transparente del mundo. Proyectos de marcas icónicas como Bentley, St. Regis y Mercedes-Benz.',
  },
  'Argentina': {
    headline: 'Buenos Aires — oportunidad histórica de compra en dólares',
    pills: ['Precios mínimos históricos', 'Alta rentabilidad en USD', 'Mercado en recuperación', 'Desde U$ 1.800/m²'],
    why: 'Argentina traversa un momento único: los precios en dólares están en mínimos históricos y el mercado muestra señales claras de recuperación. Quien compra hoy, compra en el piso del ciclo. Ideal para inversores de largo plazo.',
  },
  'Dubái': {
    headline: 'Dubái — el hub financiero con mayor rentabilidad del mundo',
    pills: ['0% impuesto a las ganancias', 'Golden Visa disponible', 'Rentabilidad 8-12% anual', 'Mercado en expansión'],
    why: 'Dubái ofrece lo que ningún otro mercado combina: exención impositiva total, rentabilidad en dólares de dos dígitos, Golden Visa por inversión y un mercado inmobiliario regulado y transparente. La demanda internacional no para de crecer.',
  },
  'España': {
    headline: 'España — acceso al mercado europeo con Golden Visa',
    pills: ['Golden Visa por inversión', 'Residencia EU', 'Mercado estable', 'Barcelona y Madrid'],
    why: 'Invertir en España permite acceder a la residencia europea y al mercado inmobiliario más sólido del sur de Europa. Barcelona lidera la demanda internacional con proyectos de ultra lujo y alta rentabilidad.',
  },
  'Uruguay': {
    headline: 'Punta del Este — el destino más exclusivo del Cono Sur',
    pills: ['Máxima estabilidad jurídica', 'Residencia fiscal ventajosa', 'Mercado dolarizado', 'Demanda internacional'],
    why: 'Uruguay es el país con mayor seguridad jurídica de la región. Punta del Este atrae inversores del mundo entero gracias a su exclusividad, estabilidad y la posibilidad de obtener residencia fiscal con beneficios impositivos.',
  },
  'Paraguay': {
    headline: 'Paraguay — el ticket más bajo con mayor proyección',
    pills: ['Desde U$ 1.200/m²', 'Economía dolarizada', 'Exención impositiva', 'Crecimiento sostenido'],
    why: 'Paraguay es el mercado de menor costo de entrada de la región con una de las economías de mayor crecimiento. Asunción se moderniza aceleradamente y los precios del m² tienen alto potencial de valorización.',
  },
};

const MARKET_CENTERS: Record<string, { lat: number; lng: number; zoom: number }> = {
  'Brasil':           { lat: -15,    lng: -47,    zoom: 4 },
  'Brasil-Nordeste':  { lat: -8.8,   lng: -35.1,  zoom: 9 },
  'Brasil-Sur':       { lat: -27.2,  lng: -48.6,  zoom: 8 },
  'USA':              { lat: 25.9,   lng: -80.2,  zoom: 9 },
  'Argentina':        { lat: -34.6,  lng: -58.5,  zoom: 9 },
  'Dubái':            { lat: 25.2,   lng: 55.3,   zoom: 10 },
  'España':           { lat: 41.4,   lng: 2.2,    zoom: 11 },
  'Uruguay':          { lat: -34.9,  lng: -54.9,  zoom: 11 },
  'Paraguay':         { lat: -25.3,  lng: -57.5,  zoom: 11 },
};

function getBrasilRegion(p: { city: string }): 'Nordeste' | 'Sur' {
  const city = p.city.toLowerCase();
  if (
    city.includes('pernambuco') || city.includes('· pe') ||
    city.includes('alagoas') || city.includes('· al') ||
    city.includes('maragogi') || city.includes('recife') ||
    city.includes('japaratinga') || city.includes('milagres') ||
    city.includes('serrambi') || city.includes('coroa grande')
  ) return 'Nordeste';
  return 'Sur';
}

function getProjectStage(p: { status: string }): 'Pozo' | 'Pre-construcción' | 'Terminado' {
  const s = p.status.toLowerCase();
  if (s.includes('terminado') || s.includes('a estrenar')) return 'Terminado';
  if (s.includes('pre-venta')) return 'Pozo';
  return 'Pre-construcción';
}

function getDeliveryYear(p: { status: string }): number | null {
  const match = p.status.match(/\b(202\d|203\d)\b/);
  return match ? parseInt(match[1]) : null;
}

function parseEntry(entry?: string): number | null {
  if (!entry) return null;
  const digits = entry.replace(/[^\d]/g, '');
  return digits ? parseInt(digits) : null;
}

function NuevasConstruccionesContent() {
  const searchParams = useSearchParams();
  const tagsParam = searchParams.get('tags');
  const tagList = tagsParam ? tagsParam.split(',').map(t => t.trim().toLowerCase()) : [];

  const [selected, setSelected] = useState<Project>(projects[0]);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<Project[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [marketId, setMarketId] = useState<string | null>(null);
  const [filterStage, setFilterStage] = useState('Todos');
  const [filterEntry, setFilterEntry] = useState('Todos');
  const [filterYear, setFilterYear] = useState('Todos');
  const [showFilters, setShowFilters] = useState(false);
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number; zoom: number } | null>(null);

  // Close suggestions on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Compute filtered projects
  let base = search.trim().length >= 2
    ? projects.filter(p => {
        const q = search.toLowerCase();
        return p.name.toLowerCase().includes(q) || p.city.toLowerCase().includes(q) || p.country.toLowerCase().includes(q);
      })
    : [...projects];

  if (tagList.length > 0) {
    base = base.filter(p => tagList.some(tag => p.name.toLowerCase().includes(tag)));
  }

  if (marketId) {
    if (marketId === 'Brasil') base = base.filter(p => p.country === 'Brasil');
    else if (marketId === 'Brasil-Sur') base = base.filter(p => p.country === 'Brasil' && getBrasilRegion(p) === 'Sur');
    else if (marketId === 'Brasil-Nordeste') base = base.filter(p => p.country === 'Brasil' && getBrasilRegion(p) === 'Nordeste');
    else base = base.filter(p => p.country === marketId);
  }

  if (filterStage !== 'Todos') base = base.filter(p => getProjectStage(p) === filterStage);

  if (filterEntry !== 'Todos') {
    base = base.filter(p => {
      const amt = parseEntry(p.entry);
      if (amt === null) return true;
      if (filterEntry === '< U$ 5.000') return amt < 5000;
      if (filterEntry === 'U$ 5.000 - 20.000') return amt >= 5000 && amt <= 20000;
      if (filterEntry === 'U$ 20.000 - 50.000') return amt > 20000 && amt <= 50000;
      if (filterEntry === '+ U$ 50.000') return amt > 50000;
      return true;
    });
  }

  if (filterYear !== 'Todos') {
    base = base.filter(p => {
      const year = getDeliveryYear(p);
      if (filterYear === '2030+') return year !== null && year >= 2030;
      return year !== null && year.toString() === filterYear;
    });
  }

  const filteredProjects = base;

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value.trim().length < 2) { setSuggestions([]); return; }
    const q = value.toLowerCase();
    const matches = projects.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.city.toLowerCase().includes(q) ||
      p.country.toLowerCase().includes(q)
    ).slice(0, 6);
    setSuggestions(matches);
  };

  const selectFromSearch = (p: Project) => {
    setSelected(p);
    setSearch(p.name);
    setSuggestions([]);
    setTimeout(() => {
      document.getElementById(`card-${p.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const handleCardClick = (p: Project) => {
    setSelected(p);
  };

  const handleSelectMarket = (id: string) => {
    if (id === marketId && id !== 'Brasil-Sur' && id !== 'Brasil-Nordeste') {
      setMarketId(null);
      setMapCenter(null);
    } else {
      setMarketId(id);
      setMapCenter(MARKET_CENTERS[id] ?? null);
    }
  };

  return (
    <main style={{ background: '#0d0d0d', minHeight: 'calc(100vh - 64px)', padding: '48px 32px', color: '#efefef', fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* HEADER */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#C9922A', letterSpacing: '0.15em', marginBottom: 8 }}>OPORTUNIDADES ACTIVAS</p>
          <h1 style={{ fontSize: 44, fontWeight: 800, color: '#efefef', marginBottom: 0 }}>Proyectos</h1>
          <div style={{ height: 3, width: 56, background: '#C9922A', marginTop: 12 }} />
        </div>

        {/* MARKET TILES */}
        <div style={{ marginBottom: 16, overflowX: 'auto', display: 'flex', gap: 10, paddingBottom: 4 }}>
          {MARKETS.map(m => (
            <button
              key={m.id}
              onClick={() => handleSelectMarket(m.id)}
              style={{
                flexShrink: 0,
                display: 'flex', alignItems: 'center', gap: 8,
                background: (marketId === m.id || marketId === `${m.id}-Sur` || marketId === `${m.id}-Nordeste`)
                  ? 'rgba(201,146,42,0.15)' : '#1a1a2e',
                border: (marketId === m.id || marketId?.startsWith(m.id))
                  ? '1.5px solid #C9922A' : '1.5px solid rgba(255,255,255,0.08)',
                borderRadius: 10, padding: '10px 18px', cursor: 'pointer',
                color: '#efefef', fontSize: 13, fontWeight: 700,
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.flag} alt={m.label} style={{ width: 24, height: 16, objectFit: 'cover', borderRadius: 2 }} />
              {m.label}
              {m.id === 'Brasil' && <span style={{ fontSize: 10, opacity: 0.6 }}>▾</span>}
            </button>
          ))}
          {marketId && (
            <button onClick={() => { setMarketId(null); setMapCenter(null); }}
              style={{ flexShrink: 0, background: 'transparent', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '10px 14px', cursor: 'pointer', color: 'rgba(239,239,239,0.4)', fontSize: 12, fontWeight: 600 }}>
              ✕ Limpiar
            </button>
          )}
        </div>

        {/* BRASIL SUB-REGIONS */}
        {(marketId === 'Brasil' || marketId === 'Brasil-Sur' || marketId === 'Brasil-Nordeste') && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            {[
              { id: 'Brasil', label: '🌎 Todo Brasil' },
              { id: 'Brasil-Nordeste', label: '🌴 El Nordeste' },
              { id: 'Brasil-Sur', label: '🏔️ El Sur' },
            ].map(sub => (
              <button
                key={sub.id}
                onClick={() => { setMarketId(sub.id); setMapCenter(MARKET_CENTERS[sub.id]); }}
                style={{
                  background: marketId === sub.id ? '#C9922A' : 'rgba(201,146,42,0.08)',
                  border: '1.5px solid rgba(201,146,42,0.3)',
                  borderRadius: 20, padding: '6px 16px', cursor: 'pointer',
                  color: marketId === sub.id ? '#101010' : '#C9922A',
                  fontSize: 12, fontWeight: 700, WebkitTapHighlightColor: 'transparent',
                }}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* MARKET STATS BANNER */}
        {marketId && MARKET_STATS[marketId] && (
          <div style={{
            marginBottom: 20,
            background: 'linear-gradient(135deg, rgba(201,146,42,0.07) 0%, rgba(13,13,26,0.6) 100%)',
            border: '1px solid rgba(201,146,42,0.25)',
            borderRadius: 12,
            padding: '18px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            {/* Headline + pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#efefef', margin: 0, flexGrow: 1 }}>
                {MARKET_STATS[marketId].headline}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {MARKET_STATS[marketId].pills.map((pill, i) => (
                  <span key={i} style={{
                    fontSize: 11, fontWeight: 700, color: '#C9922A',
                    background: 'rgba(201,146,42,0.12)',
                    border: '1px solid rgba(201,146,42,0.3)',
                    borderRadius: 20, padding: '3px 10px',
                    whiteSpace: 'nowrap',
                  }}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            {/* Why */}
            <p style={{ fontSize: 12, color: 'rgba(239,239,239,0.5)', margin: 0, lineHeight: 1.7 }}>
              {MARKET_STATS[marketId].why}
            </p>
          </div>
        )}

        {/* FILTERS TOGGLE */}
        <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <button
            onClick={() => setShowFilters(!showFilters)}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: showFilters ? 'rgba(201,146,42,0.15)' : '#1a1a2e',
              border: '1.5px solid rgba(201,146,42,0.3)',
              borderRadius: 8, padding: '9px 16px',
              color: '#C9922A', fontSize: 12, fontWeight: 700, cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            ⚙️ Filtros avanzados
            {(filterStage !== 'Todos' || filterEntry !== 'Todos' || filterYear !== 'Todos') && (
              <span style={{ background: '#C9922A', color: '#101010', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800 }}>
                {[filterStage !== 'Todos', filterEntry !== 'Todos', filterYear !== 'Todos'].filter(Boolean).length}
              </span>
            )}
          </button>

          {/* Search inline */}
          <div ref={searchRef} style={{ position: 'relative', flexGrow: 1, maxWidth: 360 }}>
            <input
              type="text" value={search}
              onChange={e => handleSearch(e.target.value)}
              placeholder="Buscar por país, ciudad o proyecto..."
              style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(201,146,42,0.3)', borderRadius: 8, padding: '9px 16px 9px 36px', color: '#efefef', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
            />
            <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'rgba(239,239,239,0.35)', fontSize: 14, pointerEvents: 'none' }}>🔍</span>
            {search && (
              <button onClick={() => { setSearch(''); setSuggestions([]); }} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'rgba(239,239,239,0.4)', cursor: 'pointer', fontSize: 14 }}>✕</button>
            )}
            {suggestions.length > 0 && (
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.3)', borderRadius: '0 0 8px 8px', zIndex: 300, overflow: 'hidden' }}>
                {suggestions.map(p => (
                  <div key={p.id} onClick={() => selectFromSearch(p)}
                    style={{ padding: '10px 14px', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,146,42,0.12)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#efefef' }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: 'rgba(239,239,239,0.45)' }}>📍 {p.city}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <span style={{ fontSize: 12, color: 'rgba(239,239,239,0.35)', marginLeft: 'auto' }}>
            {filteredProjects.length} proyectos
          </span>
        </div>

        {/* FILTER PANEL */}
        {showFilters && (
          <div style={{ background: '#1a1a2e', border: '1px solid rgba(201,146,42,0.2)', borderRadius: 10, padding: '20px 24px', marginBottom: 20, display: 'flex', gap: 32, flexWrap: 'wrap' }}>

            {/* Tipo */}
            <div>
              <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.4)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 8 }}>TIPO DE PROYECTO</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Todos', 'Pozo', 'Pre-construcción', 'Terminado'].map(opt => (
                  <button key={opt} onClick={() => setFilterStage(opt)}
                    style={{ background: filterStage === opt ? '#C9922A' : 'rgba(255,255,255,0.05)', border: '1px solid ' + (filterStage === opt ? '#C9922A' : 'rgba(255,255,255,0.1)'), borderRadius: 6, padding: '6px 12px', color: filterStage === opt ? '#101010' : '#efefef', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Ingreso */}
            <div>
              <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.4)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 8 }}>MONTO DE INGRESO</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Todos', '< U$ 5.000', 'U$ 5.000 - 20.000', 'U$ 20.000 - 50.000', '+ U$ 50.000'].map(opt => (
                  <button key={opt} onClick={() => setFilterEntry(opt)}
                    style={{ background: filterEntry === opt ? '#C9922A' : 'rgba(255,255,255,0.05)', border: '1px solid ' + (filterEntry === opt ? '#C9922A' : 'rgba(255,255,255,0.1)'), borderRadius: 6, padding: '6px 12px', color: filterEntry === opt ? '#101010' : '#efefef', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Año de entrega */}
            <div>
              <p style={{ fontSize: 10, color: 'rgba(239,239,239,0.4)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 8 }}>FECHA DE ENTREGA</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Todos', '2025', '2026', '2027', '2028', '2029', '2030+'].map(opt => (
                  <button key={opt} onClick={() => setFilterYear(opt)}
                    style={{ background: filterYear === opt ? '#C9922A' : 'rgba(255,255,255,0.05)', border: '1px solid ' + (filterYear === opt ? '#C9922A' : 'rgba(255,255,255,0.1)'), borderRadius: 6, padding: '6px 12px', color: filterYear === opt ? '#101010' : '#efefef', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear all */}
            {(filterStage !== 'Todos' || filterEntry !== 'Todos' || filterYear !== 'Todos') && (
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <button onClick={() => { setFilterStage('Todos'); setFilterEntry('Todos'); setFilterYear('Todos'); }}
                  style={{ background: 'none', border: 'none', color: 'rgba(239,239,239,0.4)', fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>
                  Limpiar filtros ✕
                </button>
              </div>
            )}
          </div>
        )}

        {/* CONTENT GRID */}
        <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 24, alignItems: 'start' }}>

          {/* Cards list */}
          <div className="cards-list" style={{ display: 'flex', flexDirection: 'column', gap: 10, maxHeight: 620, overflowY: 'auto', paddingRight: 4 }}>
            {/* Contador */}
            <div style={{ fontSize: 11, color: 'rgba(239,239,239,0.4)', fontWeight: 600, letterSpacing: '0.06em', paddingBottom: 4, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'} encontrados
              {marketId && <span style={{ color: '#C9922A' }}> · {marketId.replace('Brasil-', 'Brasil ')}</span>}
            </div>
            {filteredProjects.length === 0 && (
              <div style={{ padding: '40px 16px', textAlign: 'center', color: 'rgba(239,239,239,0.35)', fontSize: 13 }}>
                No se encontraron proyectos con esos filtros
              </div>
            )}
            {filteredProjects.map((p) => {
              const isSelected = selected.id === p.id;
              return (
                <div
                  key={p.id}
                  id={`card-${p.id}`}
                  className="lion-hover-card"
                  onClick={() => handleCardClick(p)}
                  style={{
                    background: isSelected ? 'rgba(201,146,42,0.12)' : '#1a1a2e',
                    border: isSelected ? '1.5px solid #C9922A' : '1.5px solid rgba(255,255,255,0.07)',
                    borderRadius: 8, padding: '14px 16px', cursor: 'pointer',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <div style={{ flexGrow: 1, marginRight: 8 }}>
                      <h3 style={{ fontSize: 13, fontWeight: 700, color: '#efefef', marginBottom: 3 }}>{p.name}</h3>
                      <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.45)' }}>📍 {p.city}, {p.country}</p>
                    </div>
                    <span style={{ fontSize: 9, fontWeight: 700, color: p.statusColor, background: `${p.statusColor}22`, border: `1px solid ${p.statusColor}44`, borderRadius: 20, padding: '2px 8px', whiteSpace: 'nowrap', letterSpacing: '0.04em', flexShrink: 0 }}>
                      {getProjectStage(p)}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
                    <div>
                      <p style={{ fontSize: 9, color: 'rgba(239,239,239,0.35)', marginBottom: 1, letterSpacing: '0.05em' }}>PRECIO DESDE</p>
                      <p style={{ fontSize: 12, fontWeight: 700, color: '#C9922A' }}>{p.price}</p>
                    </div>
                    {p.entry && (
                      <div>
                        <p style={{ fontSize: 9, color: 'rgba(239,239,239,0.35)', marginBottom: 1, letterSpacing: '0.05em' }}>INGRESÁ CON</p>
                        <p style={{ fontSize: 12, fontWeight: 700, color: '#22c55e' }}>{p.entry}</p>
                      </div>
                    )}
                    <button
                      onClick={(e) => { e.stopPropagation(); setModalProject(p); }}
                      style={{ fontSize: 11, color: '#101010', fontWeight: 800, margin: 0, marginLeft: 'auto', background: '#C9922A', border: 'none', borderRadius: 5, padding: '5px 12px', cursor: 'pointer', letterSpacing: '0.04em', WebkitTapHighlightColor: 'transparent', flexShrink: 0 }}
                    >
                      Ver →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map with floating card */}
          <div style={{ position: 'sticky', top: 80 }}>
            <div className="map-container" style={{ borderRadius: 12, overflow: 'visible', border: '1px solid rgba(201,146,42,0.3)', height: 620, position: 'relative' }}>

              {/* Floating project card on top of map */}
              <div style={{
                position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
                zIndex: 1000, background: 'rgba(13,13,26,0.93)',
                border: '1px solid rgba(201,146,42,0.5)', borderRadius: 10,
                padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 16,
                backdropFilter: 'blur(8px)', maxWidth: 'calc(100% - 24px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.5)', minWidth: 240,
              }}>
                <div style={{ flexGrow: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 800, color: '#efefef', margin: '0 0 2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{selected.name}</p>
                  <p style={{ fontSize: 11, color: 'rgba(239,239,239,0.5)', margin: 0 }}>📍 {selected.city}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#C9922A', margin: '0 0 1px' }}>{selected.price}</p>
                  {selected.entry && <p style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', margin: 0 }}>Ingresá: {selected.entry}</p>}
                </div>
                <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                  <button
                    onClick={() => setModalProject(selected)}
                    style={{ background: '#C9922A', border: 'none', borderRadius: 6, padding: '7px 14px', color: '#101010', fontSize: 11, fontWeight: 800, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                  >
                    Ver
                  </button>
                  <a
                    href={`https://wa.me/5492233559834?text=${encodeURIComponent(`Hola! Me interesa el proyecto *${selected.name}* en ${selected.city}, ${selected.country}. ¿Me pueden dar más información?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: '#25D366', border: 'none', borderRadius: 6, padding: '7px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                    title="Consultar por WhatsApp"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <MapView
                projects={projects}
                selectedProject={selected}
                onSelect={(p) => {
                  const full = projects.find(proj => proj.id === p.id);
                  if (full) handleCardClick(full);
                }}
                mapCenter={mapCenter ?? undefined}
              />
            </div>
          </div>
        </div>
      </div>

      {/* PhotoModal */}
      <AnimatePresence>
        {modalProject && (
          <PhotoModal project={modalProject} onClose={() => setModalProject(null)} />
        )}
      </AnimatePresence>

      <style>{`
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #1a1a2e; }
        ::-webkit-scrollbar-thumb { background: #C9922A; border-radius: 3px; }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr !important;
          }
          .cards-list {
            max-height: 400px !important;
          }
          .map-container {
            height: 320px !important;
          }
        }
        @media (max-width: 480px) {
          .cards-list {
            max-height: 360px !important;
          }
          .map-container {
            height: 260px !important;
          }
        }
      `}</style>
    </main>
  );
}

export default function NuevasConstruccionesPage() {
  return (
    <Suspense fallback={
      <main style={{ fontFamily: 'Helvetica Now Display, Helvetica, Arial, sans-serif', color: '#efefef', background: '#0d0d0d', minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'rgba(239,239,239,0.4)', fontSize: 14 }}>Cargando proyectos...</p>
      </main>
    }>
      <NuevasConstruccionesContent />
    </Suspense>
  );
}
