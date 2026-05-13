# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static layout + autoplay video background + AOS text animations
- **Height:** 100vh (full viewport)

## DOM Structure
```
<section> full viewport height, position:relative, overflow:hidden, bg:black
  <video> absolute, left side, autoplay muted loop, shows 3D robot astronaut
  <div> gradient overlay — linear-gradient(90deg, transparent 14%, rgba(255,20,20,0.36) 100%)
  <div> "blob" — radial-gradient red blob positioned behind text
  <div> content — right side (55% width), flex column, justify-center, text-center/right
    <h1> "Acelera tu empresa con Inteligencia Artificial"
    <p>
      <mark class="red-text"> Automatizamos procesos </mark>
      , reducimos costos operativos y escalamos tu productividad con
      <mark class="red-highlight"> soluciones de IA integradas </mark>
      a tus sistemas actuales.
```

## Computed Styles (exact values)

### Section wrapper
- position: relative
- minHeight: 100vh
- overflow: hidden
- backgroundColor: #000000

### Video element
- position: absolute
- left: 0
- top: 0
- height: 100%
- width: ~50%
- objectFit: cover
- zIndex: 1

### Gradient overlay
- position: absolute
- inset: 0
- background: linear-gradient(90deg, rgba(0,0,0,0) 14%, rgba(255,20,20,0.36) 100%)
- zIndex: 2

### Red blob
- position: absolute
- right: 5%
- top: 20%
- width: 500px
- height: 500px
- borderRadius: 50%
- background: radial-gradient(circle at 40% 40%, rgba(255,0,0,0.55) 15%, rgba(255,0,0,0) 70%)
- zIndex: 2
- filter: blur(60px)

### Content container
- position: relative
- zIndex: 10
- display: flex
- flexDirection: column
- alignItems: center
- justifyContent: center
- height: 100%
- paddingLeft: ~55% (content pushed to right half)
- paddingRight: 80px
- textAlign: center

### H1
- fontFamily: Poppins, sans-serif
- fontSize: 48px (desktop)
- fontWeight: 700
- color: rgb(236, 236, 236) = #ececec
- lineHeight: 1.2
- marginBottom: 24px

### Subtitle paragraph
- fontFamily: Poppins, sans-serif
- fontSize: 18px
- fontWeight: 400
- color: #ececec
- lineHeight: 1.6
- maxWidth: 520px
- textAlign: center

### Mark — red text (no background)
- color: rgb(255, 20, 20) = #ff1414
- backgroundColor: transparent
- fontWeight: 700

### Mark — red highlight (with red background)
- color: #ffffff
- backgroundColor: rgb(255, 20, 20) = #ff1414
- padding: 2px 4px
- borderRadius: 2px
- fontWeight: 700

## States & Behaviors

### Video
- autoplay, muted, loop, playsInline
- src: `/videos/hero-robot.mp4`
- Covers left ~50% of hero

### Text animation (AOS-style)
- H1 fades up on page load with 0.7s delay
- Subtitle fades up 0.2s after H1

## Assets
- Video: `public/videos/hero-robot.mp4`

## Text Content (verbatim)
- H1: "Acelera tu empresa con Inteligencia Artificial"
- Subtitle: "Automatizamos procesos, reducimos costos operativos y escalamos tu productividad con soluciones de IA integradas a tus sistemas actuales."
  - "Automatizamos procesos" → red text (no bg)
  - "soluciones de IA integradas" → red bg, white text

## Responsive Behavior
- **Desktop (1440px):** video left half, text right half
- **Mobile (390px):** video fills full background (opacity reduced), text centered in middle, full width
- **Breakpoint:** ~768px — on mobile video is absolute bg, content is centered full-width
