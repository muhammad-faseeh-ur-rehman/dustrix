# Dustrix — Construction & Industry Website

A modern, fully responsive **Construction & Industry** company website built with
**Vite + React + Tailwind CSS**. It is a clean re-implementation of the Dustrix
template with a professional, scalable folder structure.

## ✨ Features

- ⚡️ **Vite** for instant dev server and fast builds
- ⚛️ **React 18** with **React Router v6** (nested layout routes + dynamic pages)
- 🎨 **Tailwind CSS** with a custom design system (theme tokens, components)
- 🧱 **13 pages** including 3 home variants and dynamic detail pages
- 🎞️ **Swiper** sliders (hero + testimonials) and **AOS** scroll animations
- 📊 Animated counters via a custom `useCountUp` hook + IntersectionObserver
- 📱 Fully responsive with an accessible slide-in mobile menu
- 🧩 Reusable component library (cards, sections, layout, forms)
- 🗂️ Centralised **data layer** — all content lives in `src/data`

## 📂 Project Structure

```
dustrix-frontend/
├── public/                 # Static assets, favicon, SPA redirects
└── src/
    ├── assets/             # Local images & styles (optional)
    ├── components/
    │   ├── cards/          # ServiceCard, ProjectCard, TeamCard, BlogCard, PricingCard
    │   ├── common/         # Button, SectionTitle, PageBanner, ScrollToTop, ...
    │   ├── forms/          # ContactForm
    │   ├── layout/         # Header, Footer, TopBar, MobileMenu, Logo, Layout
    │   └── sections/       # Hero, About, Services, Counter, Testimonials, ...
    ├── data/               # Single source of truth for all content
    ├── hooks/              # useScrollPosition, useCountUp
    ├── pages/              # Route-level pages (+ barrel index)
    ├── routes/             # AppRoutes route table
    ├── utils/              # icons.jsx icon registry
    ├── App.jsx             # Root component (AOS init)
    ├── main.jsx            # Entry point (Router)
    └── index.css           # Tailwind layers + component classes
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:3000)
npm run dev

# 3. Production build
npm run build

# 4. Preview the production build
npm run preview
```

## 🧭 Pages & Routes

| Route                  | Page             |
| ---------------------- | ---------------- |
| `/`                    | Home (variant 1) |
| `/home-2`              | Home (variant 2) |
| `/home-3`              | Home (variant 3) |
| `/about`               | About            |
| `/services`            | Services         |
| `/services/:slug`      | Service Details  |
| `/projects`            | Projects (filter)|
| `/projects/:slug`      | Project Details  |
| `/team`                | Team             |
| `/news`                | News / Blog      |
| `/news/:slug`          | News Details     |
| `/faq`                 | FAQ              |
| `/contact`             | Contact          |
| `*`                    | 404 Not Found    |

## 🎨 Customisation

- **Brand / contact info** → `src/data/site.js`
- **Navigation menu** → `src/data/navigation.js`
- **Content** (services, projects, team, blog, pricing, faqs) → `src/data/*`
- **Theme colours & fonts** → `tailwind.config.js`
- **Global component styles** → `src/index.css`

## 🛠️ Tech Stack

React · Vite · Tailwind CSS · React Router · Swiper · AOS · React Icons

## 📦 Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start dev server             |
| `npm run build`   | Production build             |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Lint the codebase            |
| `npm run format`  | Format with Prettier         |

---

> Images are loaded from [picsum.photos](https://picsum.photos) as placeholders.
> Replace them with your own assets in production.
