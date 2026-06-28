# Pendyala Ganesh — Personal Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**, showcasing my skills, experience, education, and projects as a Full Stack Developer.

---

## Live

[github.com/Ganesh082900](https://github.com/Ganesh082900)

---

## Features

- **Hero Section** — Animated typewriter role display with resume link
- **Skills** — Categorised skill cards with proficiency indicators
- **Experience** — Timeline layout with tech stack badges and metrics
- **Education** — Right-side timeline matching the experience design
- **Projects** — Filterable grid (Web Apps, Blogs, Open Source, Others) with featured highlight and project detail modal
- **Contact Modal** — "Let's Connect" CTA that opens a full contact form + social links modal
- **Responsive Navbar** — Sticky desktop nav with active section highlighting; full-screen mobile menu
- **Dark Theme** — Consistent purple-accent dark design system throughout

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | styled-components, MUI (Material UI) |
| Icons | MUI Icons, React Icons |
| Animation | Typewriter Effect, Lottie React |
| Routing | React Router DOM v6 |
| Linting | ESLint |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar/          # Sticky nav with mobile menu
│   ├── HeroSection/     # Landing hero with typewriter animation
│   ├── Skills/          # Skills grid with category filter
│   ├── Experience/      # Work experience timeline
│   ├── Education/       # Education timeline
│   ├── Projects/        # Projects grid + contact modal
│   ├── Cards/           # Reusable card components
│   ├── Footer/          # Site footer
│   └── ProjectDetails/  # Project detail modal
├── data/
│   └── constants.js     # All portfolio content (Bio, skills, experience, projects)
├── themes/
│   └── default.js       # Light / dark theme tokens
└── utils/
    └── Themes.js        # Theme utility
```

---

## Contact

- **LinkedIn** — [linkedin.com/in/ganesh-pendyala-7ba5781b8](https://www.linkedin.com/in/ganesh-pendyala-7ba5781b8/)
- **GitHub** — [github.com/Ganesh082900](https://github.com/Ganesh082900)
- **Email** — ganeshpendyala2000@gmail.com
- **Resume** — [View / Download](https://drive.google.com/file/d/1whBN2iYbDyV8amigUZEzgZKORg-bfe-S/view?usp=sharing)
