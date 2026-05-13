# Behaviors — icm-ia.com

## Scroll Behaviors
- **Page scroll**: Native browser scroll. No Lenis/Locomotive detected.
- **Red progress bar**: Thin red line at very bottom of viewport (possibly scroll-driven progress indicator, appears as border on nav/footer).
- **AOS animations**: Elements use `data-aos` via the AOS library (animate-on-scroll). Classes: `aos-init`, `aos-animate`. Elements fade/slide in on scroll.
- **Page height**: 2573px total.

## Header/Navbar
- **Position**: Fixed/sticky at top. Height: 100px. Background: transparent on load (rgba(255,255,255,0)).
- **Scroll behavior**: Header likely becomes opaque/solid on scroll (Astra theme sticky header).
- **Active link**: "Home" link in red rgb(216, 53, 53), inactive links in white.

## Hero Section
- **Video background**: Autoplay, loop, muted MP4 video (3D robot astronaut animation) occupying full left side.
- **Gradient overlay**: `linear-gradient(90deg, rgba(0,0,0,0) 14%, rgba(255,20,20,0.36) 100%)` on hero container.
- **Blob effect**: `radial-gradient(circle at 40% 40%, rgba(255,0,0,0.55) 15%, rgba(255,0,0,0) ...)` floating red blob.
- **AOS**: Heading and subtitle animate in on page load.

## Stats Section
- **Counter animation**: Numbers count up when scrolled into view (UAGB counter blocks).
- **Icons**: Custom icons above each number.

## Why ICM Section
- **Background**: Deep red/dark red — visually a full red section with dark red gradient.
- **AOS**: Text content fades in on scroll.

## Benefits Section
- **Robot image**: Cute robot reading book PNG, likely has float/animation class.
- **AOS**: List items animate in.

## Interactions — Click Sweep
- Nav links: Home, Contacto (/contacto-2/), Servicio (/servicio/), Sobre nosotros (/sobre-nosotros/)
- All nav links navigate to separate pages.
- No modals, no tabs, no accordions on homepage.

## Responsive
- Mobile header collapses to hamburger menu.
- Hero: video likely hidden or behind on mobile, content stacks.
- Stats: likely stacks to single column on mobile.
