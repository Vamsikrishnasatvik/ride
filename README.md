# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.
# RoamReady

Welcome to RoamReady, a modern, AI-powered ride-sharing application prototype built with Next.js. RoamReady provides a seamless user experience for booking, managing, and tracking rides. It features a clean dashboard, user authentication, ride history, and AI-driven suggestions for a smarter travel experience.

## Tech Stack

This project is built with a modern, production-ready tech stack:

- **Framework:** [Next.js](https://nextjs.org/) (using the App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Component Library:** [ShadCN UI](https://ui.shadcn.com/)
- **AI Integration:** [Genkit by Firebase](https://firebase.google.com/docs/genkit)
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18.0 or later is recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/roam-ready.git
   cd roam-ready
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Key Features

- **Onboarding:** Clean and simple login and sign-up forms.
- **Dashboard:** A central hub displaying user information, quick actions, and AI-powered suggestions.
- **Ride Search:** An intuitive interface to search for rides by pickup and destination.
- **Ride Confirmation:** A detailed summary and payment confirmation page.
- **Activity History:** A log of past rides and notifications.
- **User Profile:** A dedicated page for users to manage their personal information and app settings.
- **AI-Powered Suggestions:** Smart recommendations for routes and ride options to enhance the user experience.

## Folder Structure

The project follows a standard Next.js App Router structure:

```
.
├── src
│   ├── app/                # Main application routes
│   │   ├── (pages)/        # Route groups for app pages
│   │   │   ├── dashboard/
│   │   │   ├── search/
│   │   │   └── ...
│   │   ├── globals.css     # Global styles
│   │   └── layout.tsx      # Root layout
│   │
│   ├── components/         # Reusable components
│   │   ├── ui/             # ShadCN UI components
│   │   └── main-layout.tsx # Main application shell with sidebar
│   │
│   ├── ai/                 # Genkit AI flows and configuration
│   │   ├── flows/
│   │   └── genkit.ts
│   │
│   ├── lib/                # Utility functions
│   └── hooks/              # Custom React hooks
│
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind CSS configuration
```

This should give anyone a good starting point for understanding and contributing to the project. Let me know if you need anything else.
