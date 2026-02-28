# Health&Beauty Cazin Website

Modern, responsive one-page website for **Health&Beauty Cazin**, built with HTML, Tailwind CSS (CDN), and vanilla JavaScript.

## Project Overview

This project is a production-style landing page focused on:
- local SEO,
- conversion (quick contact and reservation flows),
- clear service and education presentation,
- strong mobile responsiveness and accessibility.

## Current Site Structure

Main page sections in `index.html`:
1. Hero
2. Naše Usluge
3. Fizioterapeutske Usluge (mini section)
4. Galerija (with filters)
5. Profesionalne Edukacije
6. Kryolan partner section
7. O nama
8. FAQ (accordion)
9. Kontakt
10. Footer

Additional SEO/legal page:
- `uvjeti-koristenja.html`

## Key Features (Current)

### UI/UX & Responsiveness
- Mobile-first responsive layout with Tailwind breakpoints.
- Sticky navigation with desktop and mobile menus.
- Responsive CTA buttons and floating quick-contact actions.
- Smooth anchor scrolling and section reveal animations.

### Services & Content
- Service cards include:
  - tretmani lica,
  - **zdravstvene usluge i masaža** (naglasak na masaži, fizioterapeutskom radu, savjetovanju, terapijskim vježbama i hidžami),
  - manikir/pedikir,
  - brow lift/lash lift/**puder obrve**,
  - nadogradnja trepavica,
  - šminkanje/depilacija.
- Dedicated physiotherapy mini section.
- Education programs expanded (including nails/French/Babyboomer), with note that materials are provided.
- Kryolan section positioned as official partner with direct purchase CTA.

### Contact & Conversion
- Contact form sends a prefilled message to WhatsApp.
- Quick contact links for call, Viber, WhatsApp, Instagram, and Facebook.
- Embedded Google Map in contact section.

### FAQ
- Visible FAQ accordion section with structured answers.
- FAQ content aligned with SEO FAQ schema.

## SEO Implementation

### On-Page SEO
- Optimized `<title>`, meta description, and keyword coverage (Bosnian/local intent).
- Canonical URL and robots directives.
- Open Graph and Twitter card metadata.
- Geo metadata for local discoverability.

### Structured Data (JSON-LD)
- `HealthAndBeautyBusiness`
- `LocalBusiness`
- `FAQPage`

### Technical SEO Assets
- `sitemap.xml` includes canonical page URLs.
- `robots.txt` includes crawler instructions and sitemap reference.
- `uvjeti-koristenja.html` also includes SEO metadata and schema.

## Accessibility Notes

- Semantic sections and headings.
- ARIA attributes on interactive controls (menu/FAQ/filter buttons).
- Keyboard/click-friendly controls and readable contrast hierarchy.

## Tech Stack

- HTML5
- Tailwind CSS (CDN)
- Font Awesome
- Vanilla JavaScript (no build step)

## Project Files

```
health_and_beauty_web/
├── assets/
│   └── images/
│       ├── branding/
│       ├── gallery/
│       ├── icons/
│       └── social/
├── index.html
├── uvjeti-koristenja.html
├── robots.txt
├── sitemap.xml
└── README.md
```

## Run Locally

No build tools are required.

1. Clone/download the repository.
2. Open `index.html` in a browser.

For best testing, verify on:
- mobile width (<= 640px),
- tablet (~768px),
- desktop (>= 1024px).

## Content/SEO Maintenance Checklist

- Keep service/FAQ text in sync with `FAQPage` schema.
- Update phone/contact links in all sections when needed.
- Keep `sitemap.xml` and `robots.txt` aligned with live URLs.
- Re-check OG/Twitter image URLs after image replacements.

## License

Project is intended for business/custom deployment for Health&Beauty Cazin.
