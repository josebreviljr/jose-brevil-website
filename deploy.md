# Deployment Guide for Cloudflare Pages

## Overview
This website is now configured as a static site optimized for Cloudflare Pages deployment.

## Build Configuration
- **Framework**: React + Vite
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Node.js Version**: 18+ (recommended: LTS)

## Cloudflare Pages Configuration

### Build Settings
1. **Build command**: `npm run build`
2. **Build output directory**: `dist`
3. **Root directory**: `/` (leave empty if deploying from root)

### Environment Variables
No special environment variables are required for the basic setup.

### Custom Domain
If using a custom domain, ensure your DNS is properly configured to point to Cloudflare Pages.

## Features Included

### Static Site Optimization
- ✅ Code splitting (vendor, router, and main chunks)
- ✅ Minified assets with Terser
- ✅ Optimized CSS and JS bundles
- ✅ Proper caching headers via `_headers` file
- ✅ SPA routing support via `_redirects` file

### SEO & Performance
- ✅ Meta tags for social media sharing
- ✅ Proper favicon configuration
- ✅ Robots.txt and site manifest
- ✅ Optimized asset loading

### GitHub Data Integration
- ✅ Pre-build GitHub API data fetching
- ✅ Static JSON generation for repository information

## Deployment Steps

### Automatic Deployment (Recommended)
1. Connect your GitHub repository to Cloudflare Pages
2. Set build command to: `npm run build`
3. Set build output directory to: `dist`
4. Deploy automatically on every push to main branch

### Manual Deployment
1. Run `npm run build` locally
2. Upload the contents of the `dist` folder to Cloudflare Pages
3. Ensure `_redirects` and `_headers` files are included

## Verification
After deployment, verify:
- [ ] Site loads correctly at your domain
- [ ] All routes work (SPA routing)
- [ ] Assets load properly (CSS, JS, images)
- [ ] GitHub repositories section displays data
- [ ] Social media meta tags work (test with social media debuggers)

## Troubleshooting

### Common Issues
1. **404 on page refresh**: Ensure `_redirects` file is present in build output
2. **Assets not loading**: Check that asset paths are correct and files are uploaded
3. **GitHub data not showing**: Verify the prebuild script ran successfully

### Build Locally for Testing
```bash
npm install
npm run build
npm run preview
```

The preview server will be available at `http://localhost:4173` 