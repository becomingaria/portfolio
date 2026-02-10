# Aria's Portfolio

A [React](https://reactjs.org/) portfolio website featuring a cosmic neon color theme, animated page transitions, and a dynamic resume with PDF download.

**Live site:** [ariahallow.dev](https://ariahallow.dev)

**Last updated:** February 10, 2026

## Purpose

Hello, welcome to my website! This site is a showcase of a few of the things that I do for work:

- **Skills** - Software and development tools I use most often
- **Projects** - Published applications and projects I've been proud to work on
- **Resume** - Dynamic page that pulls data from Skills and Projects, with PDF download
- **Contact** - Ways to reach out/find me online

### Links

- **LinkedIn:** [linkedin.com/in/zakariah-om](https://www.linkedin.com/in/zakariah-om/)
- **GitHub:** [github.com/becomingaria](https://github.com/becomingaria)

## Tech Stack

- React 18 with lazy loading
- React Router DOM for navigation
- Framer Motion for animations
- @react-pdf/renderer for PDF generation
- Node.js >= 22.20.0

## Key Features

### Wipe Transition

Animated page transition between the main page (/) and resume (/resume):

- 5 horizontal colored tiles (blue, purple, black, magenta, cyan)
- Tiles enter from one side, pause for 500ms, then exit from the opposite side
- Direction-aware: entering from left when going to resume, from right when returning home

### Dynamic Resume

The Resume component pulls data from `resumeData.js` which includes:

- Contact information
- Technical skills (languages, tools)
- Expertise areas (professional, technical)
- Professional experience
- Education and certifications
- Projects (displays first 6)

### PDF Generation

Uses @react-pdf/renderer to generate a formatted PDF resume on-demand. The PDF maintains the same structure as the web resume but is optimized for print/download.

### Section URL Tracking

Uses IntersectionObserver to track visible sections and update URL query params (e.g., `/?section=skills`). Enables direct linking to specific sections.

### Color Theme

Cosmic neon palette defined in CSS custom properties:

- `--primary-color`: #0d0d1a (dark background)
- `--accent-purple`: #9c27b0
- `--accent-magenta`: #e040fb
- `--accent-cyan`: #00d4ff
- `--accent-color`: #7b2ff7

## Components

### Core UI

- **ClipboardListItem** - Copies text content to clipboard on click
- **Header** - Profile image, name, and randomized TypeOut description
- **Loading** - Loading spinner for Suspense fallback
- **Nav** - Fixed navigation bar with section links
- **Project** - Individual project cards with name, description, tags, and links
- **TypeOut** - Typewriter effect component

### Resume & PDF

- **ResumePDF** - Generates styled PDF resume using @react-pdf/renderer
- **DownloadPDF** - Legacy component (deprecated)
- **GeneratePDF** - Legacy PDF generation component

### Transitions & Navigation

- **WipeTransition** - Tile-based page transitions with `useWipeNavigate` hook
- **CubeTransition** - Unused experimental 3D cube transition
- **Redirects** - URL redirect on mount for 404 handling

## Pages

- **About** - Landing page with staggered TypeOut bullet points
- **Skills** - Skills organized by category with grayscale icons
- **Projects** - Project list with category filtering
- **Contact** - Contact info with styled GitHub/LinkedIn icons
- **Resume** - Standalone resume with A|H branding, two-column layout, download button
- **PageNotFound** - 404 error page

## Data Files

- `contactData.js` - Contact items (email, GitHub, LinkedIn)
- `projectsData.js` - Project entries with categories and descriptions
- `resumeData.js` - Complete resume data structure
- `skillsData.js` - Skills organized by category
