# wp-headless-swa

A React + Vite frontend for a WordPress headless CMS, deployed as an **Azure Static Web App (SWA)**.

## Features

- ⚡ React 19 + Vite 7
- 🧩 Mobile-first responsive design with CSS custom properties
- 🎨 CSS Modules — every component has its own `.module.css` file, no inline styles
- 🔗 WordPress REST API integration (`/wp-json/wp/v2`)
- 🔀 Client-side routing via React Router v7
- ☁️ Azure SWA routing (`staticwebapp.config.json`)

## Getting Started

### Prerequisites

- Node.js 18+
- A WordPress site with the REST API enabled

### Setup

```bash
npm install
cp .env.example .env.local
# Edit .env.local and set VITE_WP_API_URL to your WordPress REST API base URL
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Environment Variables

| Variable           | Description                                     | Example                             |
|--------------------|-------------------------------------------------|-------------------------------------|
| `VITE_WP_API_URL`  | WordPress REST API base URL (no trailing slash) | `https://example.com/wp-json/wp/v2` |

## Project Structure

```
src/
├── components/
│   ├── Header/          # Site header with sticky positioning
│   ├── Footer/          # Site footer
│   ├── Nav/             # Responsive navigation (hamburger on mobile)
│   ├── PostCard/        # Individual post preview card
│   └── PostList/        # Responsive grid of PostCards
├── pages/
│   ├── HomePage/        # Landing page with hero + latest posts
│   ├── BlogPage/        # Paginated post list
│   ├── PostPage/        # Single post view
│   └── NotFound/        # 404 page
├── services/
│   └── wordpress.ts     # WordPress REST API helper functions
├── App.tsx              # Router and layout shell
└── index.css            # Global CSS tokens and reset
staticwebapp.config.json # Azure SWA routing rules
```
