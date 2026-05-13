# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Screenshot:** `docs/design-references/hero-desktop.png`
- **Interaction model:** sticky (transparent at top, becomes solid black on scroll)

## DOM Structure
```
<header> fixed top-0, full width, z-50, height 100px
  <div> max-w container, flex, justify-between, items-center, px-8
    <a href="/"> logo image
    <nav> flex, gap-8, items-center
      <a> Home (red - active)
      <a> Contacto
      <a> Servicio
      <a> Sobre nosotros
```

## Computed Styles

### Header container
- position: fixed (sticky at top)
- top: 0
- width: 100%
- height: 100px
- background: transparent initially, becomes rgba(0,0,0,0.95) on scroll
- z-index: 50
- transition: background-color 0.3s ease

### Logo
- image: `/images/logo.webp`
- width: 205px, height: 68px (natural size, render at ~150px wide)

### Nav links
- fontFamily: Poppins, sans-serif
- fontSize: 16px
- fontWeight: 600
- color (inactive): #ffffff
- color (active/Home): rgb(216, 53, 53) = #d83535
- textDecoration: none
- transition: color 0.2s ease
- hover color: #d83535

### Nav wrapper
- display: flex
- gap: 32px (gap-8)
- alignItems: center

## States & Behaviors

### Scroll behavior
- **Trigger:** window.scrollY > 50
- **State A (top):** background: transparent, boxShadow: none
- **State B (scrolled):** background: rgba(0,0,0,0.95), boxShadow: 0 2px 20px rgba(0,0,0,0.5)
- **Transition:** transition: background-color 0.3s ease, box-shadow 0.3s ease
- **Implementation:** useEffect with scroll listener, useState for scrolled boolean

### Active link
- "Home" link styled in red (#d83535), others in white
- Hover on all links: color changes to #d83535

## Assets
- Logo: `public/images/logo.webp` (205x68)

## Text Content
- Home
- Contacto
- Servicio
- Sobre nosotros

## Responsive Behavior
- **Desktop (1440px):** horizontal nav, logo left, links right
- **Mobile (390px):** hamburger menu (hide nav links, show hamburger icon)
- **Breakpoint:** hide nav at ~768px, show hamburger

## Notes
- The nav uses a `<Image>` next/image component for the logo
- All links except Home go to separate pages (/contacto-2/, /servicio/, /sobre-nosotros/)
- For this clone, all links can be `href="#"` or point to placeholder Next.js routes
