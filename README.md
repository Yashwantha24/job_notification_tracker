# KodNest Premium Build System

A **calm, intentional, and coherent** design system foundation for premium B2C SaaS applications. 
This repository contains the core UI architecture, strictly enforcing a high-trust aesthetic with zero visual drift.

## Design Philosophy

-   **Calm & Confident**: Minimalist interface that respects user attention.
-   **Intentional**: Every pixel exists for a reason; no decorative noise.
-   **Coherent**: A "One Mind" design language with mathematically consistent spacing and typography.
-   **Strict Tokens**: 
    -   **4-Color Limit**: Off-white (#F7F6F3), Primary Text (#111111), Deep Red (#8B0000), and Text-Derived Muted States.
    -   **Spacing Scale**: Strict 8px grid (8, 16, 24, 40, 64px).

## Tech Stack

-   **Frontend**: React 19 + Vite 6
-   **Styling**: Tailwind CSS v4 (Custom Config)
-   **Typography**: Merriweather (Serif) & Inter (Sans)

## Project Structure

```bash
src/
├── components/
│   ├── layout/       # Global structural components (TopBar, Footer, Layout)
│   └── ui/           # Core atomic components (Button, Input, Card, Badge)
├── pages/            # Feature pages (Design System Showcase)
└── index.css         # Tailwind v4 configuration & Global Styles
```

## Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:5173` to view the Design System Showcase.

3.  **Build for Production**
    ```bash
    npm run build
    ```
