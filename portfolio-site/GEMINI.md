# Project Analysis: Portfolio Website

## 1. Project Overview
This project is a personal portfolio website designed to showcase projects and skills. It is a Single Page Application (SPA) built with React and bundled with Vite.

## 2. Tech Stack
- **Framework:** React v19
- **Build Tool:** Vite v7
- **Language:** JavaScript (ES Modules)
- **Styling:** CSS (Standard), React Icons
- **Animations:** Framer Motion
- **Package Manager:** NPM
- **CI/CD:** GitHub Actions (Deploy to GitHub Pages)

## 3. Project Structure
The project is organized with the frontend application residing in the `portfolio-site` subdirectory.

```text
.
├── .github/workflows/    # CI/CD configurations
│   └── deploy.yml        # GitHub Pages deployment workflow
├── portfolio-site/       # Main React Application
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── assets/       # Project-specific assets (e.g., react.svg)
│   │   ├── components/   # UI Components
│   │   ├── App.jsx       # Main layout component
│   │   ├── main.jsx      # Entry point
│   │   └── *.css         # Global and Component styles
│   ├── vite.config.js    # Vite configuration
│   ├── package.json      # Dependencies and scripts
│   └── index.html        # HTML Entry point
└── README.md             # Project documentation
```

## 4. Key Components
Located in `portfolio-site/src/components/`:
- **Navbar:** Navigation bar.
- **Hero:** Landing section/introduction.
- **About:** Personal information section.
- **Projects:** Showcase of previous work.
- **Skills:** Display of technical skills.
- **Contact:** Contact information/form.
- **Footer:** Site footer.
- **ParticleBackground:** Background visual effect.
- **TypeWriter:** (Likely) Text animation component.

## 5. Development Workflow

### Prerequisites
- Node.js (Project CI uses v20)

### Setup
Navigate to the application directory:
```bash
cd portfolio-site
npm install
```

### Scripts
- **Development Server:** `npm run dev`
- **Production Build:** `npm run build`
- **Preview Build:** `npm run preview`
- **Linting:** `npm run lint`

## 6. Deployment Strategy
The project is configured for automated deployment to **GitHub Pages** via GitHub Actions.

- **Workflow File:** `.github/workflows/deploy.yml`
- **Trigger:** Push to `main` branch.
- **Process:**
  1.  Checkout code.
  2.  Setup Node.js v20.
  3.  Install dependencies (`npm ci`).
  4.  Build project (`npm run build`).
  5.  Upload artifact (`dist` folder).
  6.  Deploy to GitHub Pages environment.

**Configuration Note:**
The `vite.config.js` sets the `base` path to `/project-portfolio/`, ensuring assets load correctly when hosted on GitHub Pages under that subpath.
