# Benefits Section Specification

## Overview
- **Target file:** `src/components/BenefitsSection.tsx`
- **Interaction model:** static + AOS on list items
- **Background:** black with subtle red radial gradient at bottom

## DOM Structure
```
<section> black bg, red-tint gradient at bottom, py-20
  <div> max-w-5xl, mx-auto, px-8
    <div class="two-col"> flex, gap-16, alignItems:center
      <div class="image-col"> flex-1
        <img src="/images/robot-reading.png" alt="" width=~450
      <div class="content-col"> flex-1
        <h2>
          <mark class="red-text"> Beneficios </mark>
          " de "
          <mark class="red-highlight"> automatizar </mark>
          " tu empresa con nosotros"
        <ul> list with bullet points
          <li> Ahorro real en costos operativos
          <li> Integraciones completas entre sistemas
          <li> Procesos más rápidos y sin errores
          <li> Escalá sin aumentar personal
```

## Computed Styles

### Section
- backgroundColor: #000000
- background: radial-gradient(circle at 50% 100%, rgba(255,0,0,0.15) 0%, transparent 60%), #000
- paddingTop: 80px
- paddingBottom: 80px

### Two-col layout
- display: flex
- gap: 64px
- alignItems: center

### Image column
- flex: 1
- display: flex
- justifyContent: center

### Image (robot reading)
- src: `/images/robot-reading.png`
- width: ~400-450px
- height: auto
- objectFit: contain

### Content column
- flex: 1

### H2
- fontSize: 40px
- fontWeight: 700
- color: #ffffff
- fontFamily: Poppins
- marginBottom: 32px
- lineHeight: 1.3

### Mark "Beneficios" (red text no bg)
- color: rgb(255, 20, 20) = #ff1414
- backgroundColor: transparent

### Mark "automatizar" (red bg white text)
- backgroundColor: rgb(255, 20, 20) = #ff1414
- color: #ffffff
- padding: 2px 6px
- borderRadius: 2px

### List (ul)
- listStyle: disc
- paddingLeft: 20px
- display: flex
- flexDirection: column
- gap: 12px

### List items (li)
- fontSize: 18px
- fontWeight: 400
- color: #ffffff
- fontFamily: Poppins

## Text Content (verbatim)
- H2: "Beneficios de automatizar tu empresa con nosotros"
  - "Beneficios" → red text (no bg)
  - "automatizar" → red bg, white text
- List:
  - Ahorro real en costos operativos
  - Integraciones completas entre sistemas
  - Procesos más rápidos y sin errores
  - Escalá sin aumentar personal

## Assets
- Robot image: `public/images/robot-reading.png`

## Responsive Behavior
- **Desktop:** 2 columns (image left, content right)
- **Mobile:** single column — image on top, content below
- **Breakpoint:** ~768px
