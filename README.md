# Wafry Ahamed Portfolio

A modern personal portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. It showcases Wafry Ahamed’s background, projects, skills, certifications, achievements, and contact options in a responsive, polished UI.

## ✨ Features

- Responsive portfolio landing page
- Dedicated projects page with project filtering
- About, skills, certifications, achievements, and leadership sections
- Contact form powered by Resend
- AI chat endpoint for portfolio assistance
- Dark/light theme toggle
- SEO-friendly metadata and sitemap generation
- Modern animations with Framer Motion

## 🧰 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS, Radix UI
- **Animation:** Framer Motion
- **Forms & Validation:** React Hook Form, Zod
- **Email:** Resend
- **AI:** OpenAI / OpenRouter integrations
- **SEO:** next-sitemap

## 📁 Project Structure

- `src/app` — application routes and pages
- `src/components` — reusable UI sections and widgets
- `src/lib` — site data, utilities, and configuration
- `src/styles` — global styles
- `public` — images, certificates, CV, logos, and static assets

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.18.0`
- npm `>= 8`

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

## 🧪 Available Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — run the production server
- `npm run preview` — build and start the production server
- `npm run lint` — run Next.js lint checks
- `npm run lint:fix` — run lint checks and auto-fix issues
- `npm run typecheck` — run TypeScript type checking
- `npm run format:check` — check formatting with Prettier
- `npm run format:write` — format files with Prettier

## 🔐 Environment Variables

Create a `.env.local` file in the project root if you want to enable the API-backed features.

### Optional server variables

- `SITE_URL`
- `GOOGLE_SITE_VERIFICATION_ID`
- `EXA_API_KEY`
- `OPENROUTER_API_KEY`
- `OPENROUTER_MODEL`
- `RESEND_API_KEY`
- `RESEND_TO_EMAIL`

### Optional client variables

- `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID`
- `NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID`
- `NEXT_PUBLIC_MICROSOFT_CLARITY_ID`

## 🌐 Public Routes

- `/` — homepage portfolio
- `/projects` — projects showcase
- `/api/chat` — chat endpoint for portfolio assistant
- `/api/contact` — contact form submission endpoint

## 🛠️ Notes

- The project uses `next-sitemap` during `postbuild` to generate sitemap files.
- The contact form requires Resend configuration to send emails.
- The chat route uses runtime configuration from environment variables.

