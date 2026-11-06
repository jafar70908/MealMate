# MealMate — Stop Food Waste

> **AI Prompt Battle by OSCode** | Flagship Hackathon Edition  
> *A high-performance, aesthetic single-page web experience connecting food donors with local NGOs and community kitchens.*
>
> 🌐 **Live Demo Target**: Deployed as a zero-cold-start static site on **Render**  
> 🎨 **UI Inspiration**: Curated aesthetic inspired by **Apple.com** & **Oppo.com** (Dynamic Capsule Navigation, Glassmorphism, Clean Bento Grids, Ambient Depth)

---

## 🌟 Vision & North Star
> *"A world where no edible meal is wasted while a neighbour goes hungry."*

**MealMate** turns surplus food rescue into a simple, friction-free 60-second action. Restaurants, caterers, hotel banquets, and households list their daily surplus; our platform connects them to verified community kitchens, shelters, and volunteer couriers, coordinating timely collection before fresh food spoils.

---

## 💎 Design System & Aesthetic Highlights (Apple & Oppo Inspired)

- **Floating Capsule Island Navigation**: Translucent frosted glass island (`apple-glass` backdrop-blur-2xl) floating gracefully over content with micro-pill active indicators and magnetic button interactions.
- **Dynamic Live Rescue Capsule**: Inspired by Apple's Dynamic Island & Oppo's smart status capsules, delivering real-time food rescue alerts with breathing status lights.
- **Atmospheric Ambient Lighting**: Soft diffused radial light orbs in emerald and warm amber that add depth without visual clutter.
- **Apple Bento Feature Grid**: 36px squircle corners (`rounded-4xl`), deep obsidian cards with subtle specular borders, and interactive snapshot previews.
- **Apple Fitness-Style Impact Rings & Calculator**: Luminous progress rings, monthly rescue sparklines, and a tactile surplus weight slider with live meal & carbon calculations.
- **Frictionless Segmented Control CTA**: A unified role selector (`Food Donors`, `Volunteers`, `Partner NGOs`) that eliminates overwhelming options and morphs into a focused action card.
- **WCAG 2.2 AA Contrast & Accessibility**: Full keyboard navigability, screen-reader landmarks, focus trapping, and `prefers-reduced-motion` compliance.

---

## 🛠️ Technology Stack

- **Framework**: React 18 + TypeScript (Strict Mode)
- **Build Tool**: Vite 5 with manual vendor chunking
- **Styling**: Tailwind CSS 3 with custom design tokens & glassmorphism
- **Motion**: Framer Motion 11 (GPU-accelerated transform & opacity)
- **Icons**: Lucide React
- **Typography**: Self-hosted variable fonts via Fontsource (`Fraunces Variable` + `Plus Jakarta Sans Variable`)
- **Testing**: Vitest unit test suite (12/12 passing)
- **Deployment Target**: Render Static Site via `render.yaml`

---

## 📋 9 Mandatory Sections Implemented

1. **Hero**: Word-by-word reveal, dynamic island rescue ticker, dual Apple-style pill CTAs, and custom SVG bridge scene.
2. **The Problem**: Keynote-style UNEP/FAO statistics count-up, 3 frosted stat cards, and interactive 9-plate visual.
3. **Our Solution**: Interactive 3-party bridge flow diagram (Donors &rarr; Smart Match Hub &rarr; Verified NGOs).
4. **How It Works**: 4-step interactive timeline with synchronized step previews and mobile vertical rail.
5. **Key Features**: Bento grid with live interactive mini-UI preview, food safety checklists, and vetting standards.
6. **Impact & Meal Calculator**: 5 count-up KPI tiles, verification progress ring, monthly growth sparkline, and interactive weight slider.
7. **Community Stories**: Testimonial carousel with arch initial avatars, role badges, verified outcome chips, and swipe support.
8. **Call to Action**: Apple-style segmented control (Donors / Volunteers / NGOs) with instant form modals and inline validation.
9. **Footer**: Skyline bridge illustration, sourced data citations, social links, and accessible back-to-top control.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ (tested with Node 20 & 26 LTS)
- npm 9+

### Installation & Development
```bash
# 1. Clone repository
git clone https://github.com/your-username/mealmate.git
cd mealmate

# 2. Install dependencies
npm ci

# 3. Start local development server
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Running Unit Tests
```bash
npm run test
```
All 12 tests across `calc.test.ts`, `validators.test.ts`, and `smoke.spec.ts` will execute and verify the application logic.

### Building for Production
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

---

## ☁️ Zero-Config Deployment on Render

This repository includes a production-ready `render.yaml` blueprint for automatic deployment on **Render**:

### Method A: Deploy via Render Blueprint (Recommended)
1. Push this repository to your GitHub account.
2. Go to your [Render Dashboard](https://dashboard.render.com/).
3. Click **New +** &rarr; **Blueprint**.
4. Select your `mealmate` repository.
5. Render reads `render.yaml` and configures everything automatically:
   - **Build Command**: `npm ci && npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: `20`
   - **SPA Routing**: `/*` &rarr; `/index.html`
   - **Security Headers & Cache-Control**: Pre-configured

### Method B: Manual Static Site Setup
1. In Render Dashboard, click **New +** &rarr; **Static Site**.
2. Connect your GitHub repo.
3. Set:
   - **Build Command**: `npm ci && npm run build`
   - **Publish Directory**: `dist`
4. Under **Redirects/Rewrites**:
   - Source: `/*`
   - Destination: `/index.html`
   - Action: `Rewrite`
5. Click **Create Static Site**.

---

## 📄 License
MIT © 2026 MealMate Team — Built for AI Prompt Battle by OSCode
