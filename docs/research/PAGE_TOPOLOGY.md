# Page Topology — icm-ia.com (Homepage)

## Section Order (top to bottom)

| # | Name | Interaction | Z-layer |
|---|------|-------------|---------|
| 1 | Navbar | sticky/fixed, static links | Top overlay |
| 2 | Hero | video autoplay, AOS text | Flow |
| 3 | Stats | counter animation on scroll | Flow |
| 4 | WhyICM | AOS text | Flow |
| 5 | Benefits | AOS list items | Flow (bottom) |

## Layout
- Single-column scroll page, no sidebar.
- Max content width: ~1680px (full width sections).
- Sections fill full viewport width.
- Black (#000) body background throughout.

## Global overlays
- Red scroll progress indicator at very bottom (thin line).
- Language switcher (Spanish/English) floating bottom-right.

## Pages (from nav)
- Home: /
- Contacto: /contacto-2/
- Servicio: /servicio/
- Sobre nosotros: /sobre-nosotros/

## Dependencies
- Navbar must be built first (it overlays everything).
- Each section is independent (no shared state between sections).
