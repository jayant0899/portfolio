# Industrial Engineering Portfolio

A high-performance, motion-heavy portfolio built with the latest web technologies, designed with an industrial "Terminal" aesthetic. It emphasizes system architecture, technical precision, and fluid user experience.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) + [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/), [Lucide](https://lucide.dev/)
- **Type Safety**: TypeScript

## ✨ Key Features

### 🖥️ Hacker/Terminal UI System

- **Boot Sequence**: Procedural terminal boot simulation on page load using staggered GSAP timelines.
- **Architecture Map**: Interactive visualization of system nodes and log streams, showcasing the project's infrastructure.
- **Logs Terminal**: Real-time-style log streaming to reinforce the engineering aesthetic.

### 🎭 Advanced Motion Orchestration

- **GSAP-Lenis Sync**: Performance-optimized smooth scrolling where Lenis is driven by GSAP's ticker, ensuring animations stay perfectly in sync with the scroll position.
- **Section Transitions**: Custom `SectionMotionWrapper` for coordinated entrance animations of UI blocks.

### 🛠️ Professional Engineering Architecture

- **Type-Safe Configs**: Centralized data management in `config/` (user, projects, architecture) for rapid scalability.
- **Modular Components**: Highly reusable UI registry with industrial-themed layout systems.

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm / pnpm / yarn

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 📜 Project Structure

- `app/`: Next.js App Router (Layouts, Pages, Providers)
- `components/`: Modular UI components (Architecture, Projects, Skills)
- `config/`: Centralized configuration files for personal and project data.
- `lib/`: Utility functions and shared logic.
- `hooks/`: Custom React hooks for motion and UI state.
- `types/`: Global TypeScript definitions.

---

Built with precision by **Jayant Kumar**.
