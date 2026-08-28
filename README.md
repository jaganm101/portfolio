# Jagan M – Personal Portfolio

A modern, premium personal portfolio website for **Jagan M – Software Engineer**.

Built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Features

- Premium dark theme with glassmorphism and gradient effects
- Fully responsive design (desktop, tablet, mobile)
- Smooth scroll animations with Framer Motion
- Bento-style project showcase
- Vertical experience timeline
- Interactive skill cards
- SEO optimized with Open Graph metadata

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

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Main page assembling all sections
│   └── globals.css      # Global styles and theme
├── components/
│   ├── Navbar.tsx       # Sticky navigation with mobile menu
│   ├── Hero.tsx         # Hero section with animated background
│   ├── About.tsx        # About section with highlight cards
│   ├── Skills.tsx       # Interactive skill cards
│   ├── Experience.tsx   # Vertical timeline
│   ├── Projects.tsx     # Bento-style project showcase
│   ├── Certifications.tsx
│   ├── Contact.tsx      # CTA contact section
│   └── Footer.tsx
├── data/
│   └── portfolio.ts     # All static portfolio content
├── lib/
│   └── motion.tsx       # Shared Framer Motion utilities
└── public/
    ├── images/          # Profile image
    ├── projects/        # Project thumbnails
    ├── certificates/    # Certificate images
    └── resume.pdf       # Downloadable resume
```

## Customization

All portfolio content lives in `data/portfolio.ts`. Update personal details, experience, projects, certifications, and social links there.

Replace placeholder images in `public/` with your own:
- `public/images/profile.svg` → your profile photo
- `public/projects/` → project screenshots
- `public/certificates/` → certificate images
- `public/resume.pdf` → your resume

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## License

© 2026 Jagan M. All rights reserved.
