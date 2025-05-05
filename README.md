
# Jose F. Brevil, Jr. - Personal Website

A modern, responsive personal website for Jose F. Brevil, Jr., built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Animated section reveals
- Contact form connected to email
- Modular component architecture for easy customization
- SEO optimized

## Project Structure

The project follows a modular component structure:

```
src/
├── components/      # Reusable UI components
│   ├── Navbar.tsx   # Navigation bar
│   ├── Hero.tsx     # Hero section
│   ├── About.tsx    # About section
│   ├── Research.tsx # Research section
│   ├── Community.tsx # Community service section
│   ├── Contact.tsx  # Contact form
│   ├── Footer.tsx   # Footer
│   └── Section.tsx  # Reusable section wrapper with animations
├── pages/
│   ├── Index.tsx    # Main page that assembles all components
│   └── NotFound.tsx # 404 page
├── utils/
│   └── scroll.ts    # Utilities for scrolling and animations
└── lib/
    └── utils.ts     # General utility functions
```

## Customization

### Content

To customize the content of the website:

1. Edit the individual component files in `src/components/`
2. Update the text, images, links, and other content to reflect Jose's personal information
3. Modify the styling in the component files or in `src/index.css`

### Design

To change the design and styling:

1. Modify the color variables in `src/index.css`
2. Update the Tailwind configuration in `tailwind.config.ts`
3. Edit the component JSX and CSS classes

### Contact Form

The contact form is set up to send emails to info@josebrevil.com. To implement the actual email sending functionality:

1. Create a server endpoint that will handle the form submission
2. Update the `handleSubmit` function in `src/components/Contact.tsx` to post to your endpoint
3. Configure your endpoint to forward the message to info@josebrevil.com

## Deployment

### Building for Production

To build the website for production:

```bash
npm run build
```

This will create a `dist` directory with the compiled assets.

### Deployment Options

#### Option 1: Netlify

1. Connect your GitHub repository to Netlify
2. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy the site

#### Option 2: Vercel

1. Connect your GitHub repository to Vercel
2. The default settings should work, but ensure:
   - Framework Preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy the site

#### Option 3: GitHub Pages

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add these scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run:
   ```bash
   npm run deploy
   ```

### Custom Domain

To use a custom domain (like josebrevil.com):

1. Purchase the domain from a domain registrar
2. Configure your DNS settings as per your hosting provider's instructions
3. Update the meta tags in `index.html` with the correct domain

## Development

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd jose-brevil-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

## License

All rights reserved, Jose F. Brevil, Jr.
