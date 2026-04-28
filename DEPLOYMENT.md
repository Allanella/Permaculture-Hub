# Deploying to Vercel

This guide walks you through deploying the Permaculture Hub Northern Uganda website to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier is sufficient)
- [Git](https://git-scm.com/) installed on your machine
- This project pushed to GitHub

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial commit: Permaculture Hub website"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Search for and select your repository
5. Click "Import"

### Step 3: Configure Project Settings
- **Project Name**: `permaculture-hub-northern-uganda` (auto-filled)
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (default)
- **Build Command**: `pnpm build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `pnpm install` (auto-detected)

### Step 4: Deploy
1. Click "Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at: `https://permaculture-hub-northern-uganda.vercel.app`

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Deploy
```bash
vercel
```

Follow the prompts and your site will be deployed.

### Step 3: Link to Git
```bash
vercel link
```

## Custom Domain Setup

Once your site is live:

1. Go to your Vercel project dashboard
2. Click "Settings"
3. Navigate to "Domains"
4. Click "Add Domain"
5. Enter your domain (e.g., `permaculturehubug.com`)
6. Follow DNS configuration instructions
7. Wait for DNS propagation (typically 24-48 hours)

## Environment Variables

Currently, this project doesn't require environment variables. If you add features like email forms or analytics in the future, add them in:

1. Vercel Dashboard → Settings → Environment Variables
2. Add variables needed for your features

## Performance Tips

- Images are optimized via Next.js Image Optimization
- Static pages are pre-rendered at build time
- CDN-cached content served from Vercel's global edge network

## Monitoring & Analytics

After deployment, you can:

1. View logs: Vercel Dashboard → Deployments → Click deployment → Logs
2. Check performance: Vercel Dashboard → Analytics
3. Setup error tracking: Integrate with Sentry or similar

## Continuous Deployment

Once linked to GitHub:
- Every push to `main` triggers a new deployment
- Preview deployments created for pull requests
- Automatic rollback available if needed

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- Vercel Support: support@vercel.com
