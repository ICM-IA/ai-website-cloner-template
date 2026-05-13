# WhyICM Section Specification

## Overview
- **Target file:** `src/components/WhyICMSection.tsx`
- **Interaction model:** static + AOS fade-in text
- **Background:** deep red radial gradient

## DOM Structure
```
<section> red radial gradient bg, py-20, full width
  <div> max-w-4xl, mx-auto, px-8, text-center
    <h2>
      <mark class="dark-mark"> Por qué elegir ICM? </mark>
    <p> first paragraph
    <p> second paragraph
    <h3>
      <mark class="dark-mark"> ¿El resultado? </mark>
    <p> result paragraph
```

## Computed Styles

### Section
- background: radial-gradient(rgba(255,20,20,0.92) 24%, rgba(155,81,224,0) 100%), #000
- OR: background: linear gradient from deep red to dark — the section looks like a solid dark-red panel
- Visually: dark red center fading to black edges, but predominantly deep red
- paddingTop: 80px
- paddingBottom: 80px

### Content wrapper
- maxWidth: 900px
- margin: 0 auto
- padding: 0 32px
- textAlign: center

### H2 ("Por qué elegir ICM?")
- fontSize: 52px (desktop)
- fontWeight: 800
- color: rgb(2, 2, 2) = very dark/black (the mark makes it look dark on red bg)
- fontFamily: Poppins
- marginBottom: 24px

### Mark on headings (dark text, no bg)
- color: rgb(2, 2, 2)
- backgroundColor: transparent

### Paragraphs
- fontSize: 18px
- fontWeight: 400
- color: #ffffff
- lineHeight: 1.7
- maxWidth: 800px
- margin: 0 auto 16px

### H3 ("¿El resultado?")
- fontSize: 40px
- fontWeight: 800
- color: rgb(2, 2, 2)
- marginTop: 48px
- marginBottom: 16px

## Text Content (verbatim)
- H2: "Por qué elegir ICM?"
- P1: "En ICM analizamos tu operación, encontramos los cuellos de botella y creamos flujos inteligentes que trabajan para vos."
- P2: "Nuestras soluciones no son genéricas: se adaptan a tu empresa, tu equipo y tus objetivos."
- H3: "¿El resultado?"
- P3: "Procesos más rápidos, menos errores y más tiempo para enfocarte en lo que realmente mueve tu negocio."

## Responsive Behavior
- **Desktop:** centered text, full width
- **Mobile:** same, slightly smaller font sizes
