# CampusImpact Workshop – Next.js

## Quick Start

```bash
npm install
npm run dev
```

Open **http://localhost:3000**

## Build for production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        ← Root layout + metadata
│   ├── page.tsx          ← Landing page
│   ├── register/
│   │   └── page.tsx      ← Register page
│   └── login/
│       └── page.tsx      ← Login page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Marquee.tsx
│   ├── Workshops.tsx
│   ├── Competition.tsx
│   ├── Timeline.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── ScrollReveal.tsx  ← Client component for scroll animations
└── styles/
    └── globals.css
```

## Routes

| Route       | Page            |
|-------------|-----------------|
| `/`         | Landing page    |
| `/register` | Register page   |
| `/login`    | Login page      |
