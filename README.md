# Pagami Group — Next.js 14

Production-ready website for Pagami Group, built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Stack

- **Next.js 14** — App Router
- **TypeScript** — strict mode
- **Tailwind CSS** — utility-first styling
- **Custom SVG sketch system** — architectural ink-line illustrations, watercolor washes, birds

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
pagami-group/
├── app/
│   ├── layout.tsx          # Root layout with metadata & fonts
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Global styles + Tailwind directives
├── components/
│   ├── Nav.tsx             # Sticky navigation bar
│   ├── HeroSection.tsx     # Hero with architectural building sketch
│   ├── AboutSection.tsx    # About with drop cap & pillar cards
│   ├── ThirdEyeSection.tsx # 3rdEye product showcase + module tabs
│   ├── PortfolioSection.tsx# Product portfolio cards
│   ├── ContactSection.tsx  # Contact form with confirmation state
│   ├── Footer.tsx          # Footer with sketch birds
│   └── sketch/
│       ├── Birds.tsx       # SVG hand-drawn bird silhouettes
│       ├── WashBlob.tsx    # SVG radial watercolor wash
│       ├── EyeSketch.tsx   # Hand-drawn eye illustration
│       ├── BuildingSketch.tsx # Architectural ink drawing
│       ├── SketchDivider.tsx  # Wavy ink line divider
│       ├── SketchLabel.tsx    # Section heading with wing rules
│       └── BirdRow.tsx        # Decorative bird row
├── lib/
│   └── constants.ts        # Colors, copy, nav links, data arrays
├── public/
│   └── pagamigroupmain.png # Pagami Group logo
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.js
└── tsconfig.json
```

## Deploying to Vercel

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

No environment variables required.

## Brand Colors

| Token   | Hex       | Usage                        |
|---------|-----------|------------------------------|
| Navy    | `#1B2A4A` | Primary text, linework, CTA  |
| Gold    | `#B8902A` | Accents, washes, headings    |
| Parch   | `#FEFCF7` | Primary background           |
| Parch2  | `#F5F0E4` | Alternate section background |
