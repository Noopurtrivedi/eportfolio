# Noopur Trivedi | Premium ePortfolio

A modern, high-impact personal website for a Business Analyst, AI Builder, and Entrepreneur.

## 🚀 Features

- **Premium UI/UX:** Clean, minimal, and professional design using Tailwind CSS.
- **Dynamic Portfolio:** Filterable project showcase with detailed case study pages.
- **Networking Hub:** Focused on converting visitors into meaningful conversations.
- **Responsive Design:** Mobile-first approach for all screen sizes.
- **Animated Transitions:** Subtle motion using Framer Motion.
- **SEO Optimized:** Semantic HTML and meta tags included.

## 🛠 Tech Stack

- **Framework:** [React (Vite)](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router Dom](https://reactrouter.com/)

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (Navbar, Footer, etc.)
├── data/           # Static data files (projects.ts)
├── layouts/        # Page layouts
├── pages/          # Individual page components
├── App.tsx         # Main application component & routes
└── main.tsx        # Entry point
```

## 🏁 Getting Started

### 1. Install Dependencies

Navigate to the project folder and install the required packages:

```bash
cd eportfolio
npm install
```

### 2. Run Locally

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### 3. Build for Production

Generate a production-ready build:

```bash
npm run build
```

The output will be in the `dist/` directory.

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root.

### Deploy to Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run `netlify deploy` or connect your GitHub repository to Netlify for automatic deployments.

## 📝 Updating Content

- **Projects:** Update `src/data/projects.ts` to add or modify portfolio items.
- **About/Story:** Edit `src/pages/About.tsx`.
- **Contact Info:** Update `src/pages/Contact.tsx` and `src/components/Footer.tsx`.
