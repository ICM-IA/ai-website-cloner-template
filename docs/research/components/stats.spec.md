# Stats Section Specification

## Overview
- **Target file:** `src/components/StatsSection.tsx`
- **Interaction model:** counter animation on scroll into view
- **Background:** black

## DOM Structure
```
<section> black bg, py-16
  <div class="red-top-border"> full width, 2px red top border
  <div class="stats-grid"> flex, justify-around, max-w-5xl, mx-auto, px-8
    <div class="stat-item"> flex column, align-center
      <div class="icon"> white icon SVG, ~32px
      <span class="number"> +599 (red, large)
      <span class="label"> "Automatizaciones realizadas" (muted gray)
    <div class="stat-item"> ...
      <span class="number"> 56
      <span class="label"> "Clientes satisfechos"
    <div class="stat-item"> ...
      <span class="number"> %80
      <span class="label"> "Tiempo ahorrado para nuestros clientes"
```

## Computed Styles

### Section
- backgroundColor: #000000
- paddingTop: 64px
- paddingBottom: 64px
- borderTop: 2px solid rgb(255, 20, 20)

### Stats grid
- display: flex
- justifyContent: space-around (or space-evenly)
- alignItems: center
- maxWidth: 1000px
- margin: 0 auto
- padding: 0 32px

### Stat item
- display: flex
- flexDirection: column
- alignItems: center
- gap: 8px
- textAlign: center

### Icon
- color: #ffffff
- fontSize: 32px (or SVG ~32x32)
- marginBottom: 8px

### Number (counter)
- fontSize: 52px
- fontWeight: 600
- color: rgb(255, 20, 20) = #ff1414
- fontFamily: Poppins, sans-serif

### Label
- fontSize: 16px
- fontWeight: 600
- color: rgb(206, 212, 224) = #ced4e0
- fontFamily: Poppins, sans-serif
- textAlign: center
- maxWidth: 200px

## States & Behaviors

### Counter animation
- Numbers count up from 0 to final value when section scrolls into view
- Use IntersectionObserver to trigger
- Prefix/suffix: +599 (prefix "+"), 56 (no prefix), %80 (prefix "%")
- Animation duration: ~2s

## Icons
- Stat 1 (Automatizaciones): trending-up chart icon (Lucide TrendingUp)
- Stat 2 (Clientes): home/building icon (Lucide Building2 or similar)
- Stat 3 (Tiempo): clock icon (Lucide Clock)

## Text Content (verbatim)
- +599 — Automatizaciones realizadas
- 56 — Clientes satisfechos
- %80 — Tiempo ahorrado para nuestros clientes

## Responsive Behavior
- **Desktop:** 3 columns in a row
- **Mobile:** single column stack
- **Breakpoint:** ~768px
