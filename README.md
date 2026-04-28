# Permaculture Hub Northern Uganda Website

A professional, modern website for Permaculture Hub Northern Uganda - showcasing their mission to empower communities through sustainable agriculture, climate-smart farming, and green entrepreneurship.

## Features

- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Image Gallery**: Beautiful gallery showcasing community impact and programs
- **Contact Forms**: Fully functional contact and newsletter subscription forms
- **Performance Optimized**: Built with Next.js 16 for optimal speed and SEO
- **Modern Tech Stack**: Tailwind CSS v4, shadcn/ui, and Next.js
- **Accessibility**: Semantic HTML and ARIA attributes for inclusive design

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── globals.css          # Global styles and design tokens
│   └── page.tsx             # Home page
├── components/
│   ├── navigation.tsx       # Header and navigation
│   ├── hero.tsx            # Hero banner section
│   ├── about.tsx           # About and mission section
│   ├── programs.tsx        # Programs showcase with accordions
│   ├── impact.tsx          # Impact metrics and gallery
│   ├── contact.tsx         # Contact form section
│   └── footer.tsx          # Footer with links
├── vercel.json             # Vercel deployment configuration
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## Sections

1. **Navigation** - Fixed header with mobile menu and donate button
2. **Hero** - Eye-catching banner with key statistics
3. **About** - Mission, vision, and core values
4. **Programs** - Expandable accordions detailing:
   - Youth Agriculture Training
   - Women Empowerment Initiative
   - School Clubs & Youth Groups
   - Green Entrepreneurship
5. **Impact & Gallery** - Key metrics with 9-image photo gallery
6. **Contact** - Contact form and information
7. **Footer** - Newsletter signup and quick links

## Color Palette

- **Primary**: Deep green (#3d6b4f) - Represents sustainability and growth
- **Secondary**: Warm beige (#bfa876) - Earth tones for agriculture
- **Background**: Light off-white (#faf8f3) - Clean, professional
- **Text**: Dark gray (#333333) - High contrast for readability

## Typography

- **Headlines**: Lora (Serif) - Professional, elegant
- **Body**: Geist (Sans-serif) - Clean, modern
- **Code**: Geist Mono - Technical consistency

## Getting Started

### Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser to http://localhost:3000
```

### Building for Production

```bash
# Build optimized production bundle
pnpm build

# Start production server
pnpm start
```

## Deployment on Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel

# Follow prompts and accept defaults
```

### Option 2: Using GitHub Integration

1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel automatically detects Next.js and configures settings
6. Click "Deploy"

### Option 3: From v0

1. Click the "Publish" button in the top right of the v0 editor
2. Follow the deployment prompts
3. Site will be live on a Vercel domain (can be customized)

## Deployment Checklist

- [x] Build succeeds locally (`pnpm build`)
- [x] No TypeScript errors
- [x] All images properly embedded with source URLs
- [x] Links tested and working
- [x] Forms configured (frontend ready for backend integration)
- [x] Mobile responsive design verified
- [x] Accessibility standards met
- [x] vercel.json configured
- [x] Performance optimized with image lazy loading

## Environment Variables

Currently, this project requires no environment variables. If you add features like:
- Email forms: Add SMTP credentials
- Analytics: Add tracking IDs
- CMS integration: Add API keys

Add them in Vercel Dashboard → Settings → Environment Variables.

## Performance Metrics

- Static site generation for instant page loads
- Image optimization with Next.js Image component
- Lazy loading for gallery images
- Minimal CSS with Tailwind CSS
- No external analytics by default

## Contact & Support

For issues or feature requests, contact the development team or open an issue in your repository.

## License

© 2026 Permaculture Hub Northern Uganda. All rights reserved.
