# Elizabeth Holiarchuk Photography

A high-end wedding photography website built with Next.js and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /page.tsx           # Home page
  /portfolio          # Portfolio page
  /approach           # Approach page
  /about              # About page
  /for-couples        # For Couples page
  /contact            # Contact page
  /layout.tsx         # Root layout
  /globals.css        # Global styles

/components
  /Header.tsx         # Navigation header
  /Footer.tsx         # Site footer
  /Hero.tsx           # Hero section
  /Gallery.tsx        # Image gallery
  /ContactForm.tsx    # Contact form
```

## Notes

- Images are placeholders. Replace with actual photography in `/public/images/`
- Contact form is UI only (no backend integration)
- Optimized for editorial, minimal aesthetic
- Fully responsive design

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Netlify, or similar platforms
