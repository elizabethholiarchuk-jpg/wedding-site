# Elizabeth Holiarchuk Photography Website

## Project Overview

A complete, high-end wedding photography website built with Next.js and Tailwind CSS. The site embodies editorial, modern, human-centered wedding photography with a calm, precise, and restrained brand voice.

## Brand Identity

**Name:** Elizabeth Holiarchuk  
**Profession:** Wedding Photographer  
**Base:** Europe (destination weddings worldwide)  
**Positioning:** Editorial, modern, human-centered wedding photography  
**Price Point:** Mid-high to premium  

**Target Audience:** Modern, emotionally intelligent couples who value aesthetics, authenticity, and refined storytelling.

## Brand Tone

- Calm
- Precise
- Editorial
- Confident
- Restrained
- No clichés, hype, emojis, or salesy language

## Visual Direction

- Minimal layout with generous white space
- Large, impactful images
- Editorial typography (Cormorant Garamond + Inter)
- Calm transitions and interactions
- Neutral palette (black, white, soft gray)
- Feels like a high-end European magazine

## Website Structure

### 1. Home (`/`)
- Hero section with exact copy: "Weddings, photographed with intention."
- Curated portfolio preview (4 images)
- Short philosophy section
- Soft CTA to contact

### 2. Portfolio (`/portfolio`)
- Full-width gallery
- 12 curated images in editorial layout
- Clean, minimal presentation

### 3. Approach (`/approach`)
- How I work (observational, not staged)
- Why people feel comfortable
- Editorial sensibility
- How photos feel after the wedding

### 4. About (`/about`)
- Short, calm, authoritative bio
- What I prioritize
- Who I work with
- No diary tone or childhood stories

### 5. For Couples (`/for-couples`)
- Clear "best fit" criteria
- Polite filtering ("not the right fit if...")
- What to expect
- Investment information

### 6. Contact (`/contact`)
- Minimal inquiry form
- Clear expectations (48-hour response)
- Calm CTA: "Tell me about your day"

## Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Fonts:** Cormorant Garamond (serif), Inter (sans-serif)
- **Deployment Ready:** Vercel, Netlify, or any static host

## SEO Implementation

Natural integration of keywords:
- wedding photographer Europe
- destination wedding photographer
- editorial wedding photography

All pages include:
- Proper title tags
- Meta descriptions
- Semantic HTML5
- Optimized heading hierarchy
- Unique IDs for interactive elements

## Key Features

✅ Fully responsive design  
✅ Editorial typography system  
✅ Minimal, high-end aesthetic  
✅ Smooth animations and transitions  
✅ Optimized image loading  
✅ Mobile-friendly navigation  
✅ Contact form UI (backend integration needed)  
✅ SEO optimized  
✅ Accessibility focused  

## File Structure

```
wedding-site/
├── app/
│   ├── page.tsx                 # Home
│   ├── portfolio/page.tsx       # Portfolio
│   ├── approach/page.tsx        # Approach
│   ├── about/page.tsx           # About
│   ├── for-couples/page.tsx     # For Couples
│   ├── contact/page.tsx         # Contact
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── Header.tsx               # Navigation
│   ├── Footer.tsx               # Footer
│   ├── Hero.tsx                 # Hero section
│   ├── Gallery.tsx              # Image gallery
│   └── ContactForm.tsx          # Contact form
├── public/
│   └── images/                  # Photography assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
├── README.md
└── SETUP.md
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add images:**
   - Place wedding photography in `/public/images/`
   - See `/public/images/README.md` for specifications
   - Placeholder images have been generated (see artifacts)

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   - Navigate to `http://localhost:3000`

## Customization Needed

1. **Images:** Replace placeholder images with actual wedding photography
2. **Email:** Update email addresses in Footer and Contact page
3. **Social Media:** Update Instagram link in Footer
4. **Contact Form:** Integrate with backend service (e.g., Formspree, Netlify Forms)
5. **Domain:** Configure custom domain when deploying

## Copy Guidelines

All copy strictly follows brand tone:
- ✅ "Weddings, photographed with intention"
- ✅ "Editorial wedding photography for modern couples"
- ✅ "Observational, not staged"
- ❌ "Your special day"
- ❌ "Fairytale wedding"
- ❌ "Capturing memories"
- ❌ "Love story"

## Design Principles

1. **Restraint:** Less is more. Generous white space.
2. **Editorial Quality:** Clean composition, intentional framing.
3. **Timelessness:** Avoid trends, focus on lasting aesthetic.
4. **Authenticity:** Honest representation, no manufactured moments.
5. **Sophistication:** Premium feel without being ostentatious.

## Next Steps

1. ✅ Project structure created
2. ✅ All pages implemented
3. ✅ Components built
4. ✅ Styling configured
5. ⏳ Add actual wedding photography
6. ⏳ Integrate contact form backend
7. ⏳ Deploy to production
8. ⏳ Configure custom domain

## Support

For questions about the codebase:
- See `README.md` for technical documentation
- See `SETUP.md` for setup instructions
- See `/public/images/README.md` for image specifications

---

**Built with attention to detail, editorial sensibility, and respect for the craft of wedding photography.**
