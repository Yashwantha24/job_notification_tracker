# Job Notification Tracker & KodNest Premium Build System
🚀 Live Project Link (Vercel):https://jobnotificationtracker-ten.vercel.app/
This repository contains the **Job Notification Tracker** application, built on top of the **KodNest Premium Build System**—a calm, intentional design foundation for premium B2C SaaS applications.

## Project Overview

### 1. Design System Foundation
-   **Philosophy**: Calm, Intentional, Coherent, Confident.
-   **Strict Tokens**: 
    -   **4-Color Palette**: Off-white (#F7F6F3), Primary Text (#111111), Deep Red (#8B0000).
    -   **Spacing**: 8px grid (8, 16, 24, 40, 64px) strictly enforced.
-   **Typography**: Merriweather (Serif) & Inter (Sans).

### 2. Application Skeleton (Job Notification Tracker)
The core routing and navigation structure is implemented:
-   **Dashboard** (`/dashboard`): Main overview.
-   **Saved Jobs** (`/saved`): Tracked opportunities.
-   **Daily Digest** (`/digest`): Notifications summary.
-   **Settings** (`/settings`): User preferences.
-   **Proof of Work** (`/proof`): Implementation verification.

## Tech Stack

-   **Frontend**: React 19 + Vite 6
-   **Routing**: React Router DOM v7
-   **Styling**: Tailwind CSS v4 (Custom Config)

## Project Structure

```bash
src/
├── components/
│   ├── layout/       # NavBar, MainLayout, Footer
│   └── ui/           # Button, Input, Card, Badge
├── pages/            # Feature Pages (Dashboard, Saved, etc.)
└── App.jsx           # Routing Configuration
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
    Visit `http://localhost:5173` to access the application.

3.  **Build for Production**
    ```bash
    npm run build
    ```
