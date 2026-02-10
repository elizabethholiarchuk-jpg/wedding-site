# Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add placeholder images:**
   
   The site requires images in `/public/images/`. You have two options:
   
   **Option A: Use your own photography**
   - Add your wedding photos to `/public/images/`
   - Name them according to the guide in `/public/images/README.md`
   
   **Option B: Use generated placeholders**
   - Placeholder images have been generated and are available in the artifacts
   - Copy them to `/public/images/` with the following names:
     - `preview-1.jpg` through `preview-4.jpg` (for home page)
     - `portfolio-1.jpg` through `portfolio-12.jpg` (for portfolio page)

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:3000`

## Project Structure

```
wedding-site/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── portfolio/         # Portfolio page
│   ├── approach/          # Approach page
│   ├── about/             # About page
│   ├── for-couples/       # For Couples page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Gallery.tsx
│   └── ContactForm.tsx
├── public/
│   └── images/           # Image assets
└── package.json
```

## Customization

### Brand Information
- Update email addresses in `components/Footer.tsx` and `app/contact/page.tsx`
- Update social media links in `components/Footer.tsx`

### SEO
- Metadata is configured in each page's `metadata` export
- Update as needed for your specific content

### Styling
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Color palette and typography are already configured for editorial aesthetic

## Deployment

This site is ready to deploy to:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your git repository
- **Any static hosting**: `npm run build` then deploy the `out` folder

## Notes

- Contact form is UI only - integrate with your preferred backend/service
- All copy follows the specified brand tone (calm, precise, editorial)
- Images should be optimized for web before adding to `/public/images/`
