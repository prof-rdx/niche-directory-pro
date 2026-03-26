# 🌐 NicheDirectory PRO

A blazing-fast, premium B2B directory and sourcing platform built to handle massive datasets. This project is a flagship portfolio demonstration of modern full-stack development, data engineering, and premium UI/UX design.

![NicheDirectory Preview](https://via.placeholder.com/1200x600/0B0C10/66FCF1?text=NicheDirectory+PRO)

## ✨ Core Features
- **Massive Data Handling**: Designed to instantly search, filter, and paginate over **13,000+** business listings globally (Archery, Medical, Knives, etc).
- **Go-Crazy UI/UX**: Built with a sleek glassmorphism design, dark mode, custom scrollbars, and fluid **Framer Motion** staggering animations.
- **Advanced Filtering**: Multi-select, instant-update frontend filtering algorithms allowing users to drill down by Niches, Geolocation (EU, USA, Australia), and Verified Ratings.
- **Lead Generation Pipeline**: Integrated custom CTA modals designed to drive conversions and consulting inquiries for custom web scraping and SaaS development.

## 🛠️ Tech Stack
- **Frontend Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) (TypeScript)
- **Styling UI/UX**: [Tailwind CSS](https://tailwindcss.com/) + Custom Vanilla Glassmorphism + [Lucide Icons](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Backend / Database**: [Supabase](https://supabase.com/) & PostgreSQL (PostGIS ready)
- **Data Engineering**: Python & Pandas (ETL pipelines for cleaning raw `.xlsx` web-scraped data into clean JSON/Postgres)
- **DevOps / Hosting**: Engineered for seamless CI/CD to **Vercel**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/niche-directory-pro.git
   cd niche-directory-pro
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Data Migration (Supabase)
To push your own scraped data into the Supabase instance:
1. Ensure your `.xlsx` files are present.
2. Run the included Python ETL script using your Service Role Key:
   ```bash
   python migrate_to_supabase.py
   ```

---

## 📈 DevOps & Deployment (Vercel)
This project is optimized for edge deployment on [Vercel](https://vercel.com).
To deploy instantly:
1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root to deploy to the Edge Network.

---

## 📬 Contact & Consulting
Interested in the raw 13k+ dataset or need a custom full-stack web application built from the ground up? Let's talk!
[Hire me on Upwork](#) | [LinkedIn](#)
