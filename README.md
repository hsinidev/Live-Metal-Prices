# 💎 Doodax.com - Live Metal Prices & Converter

A high-performance, SEO-optimized web application for tracking and converting real-time precious metal prices. Built with React, TypeScript, and Tailwind CSS, featuring a modern, immersive galaxy interface.

<div align="center">
  <h3>🚀 <a href="https://doodax.com" target="_blank">LIVE DEMO: doodax.com</a></h3>
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
</div>

---

## ✨ Features

- **Real-Time Data Simulation**: Accurate mock data engine simulating live market fluctuations for Gold, Silver, Platinum, Palladium, Rhodium, and Diamond.
- **Universal Converter**: Convert between any supported metal and 25+ world currencies (USD, EUR, GBP, etc.) instantly.
- **Unit Flexibility**: Support for Troy Ounces, Grams, Kilograms, Carats, Tolas, and Pennyweights.
- **Immersive UX**: Custom animated multi-colored galaxy background with glassmorphism UI design.
- **SEO Powerhouse**: Fully integrated JSON-LD Schema (Organization, Article, FAQ), optimized metadata, and semantic HTML5 structure.
- **Compliance Ready**: Integrated modal system for Privacy Policy, Terms, and DMCA.

## 📂 Project Structure

```
├── components/          # Reusable UI components
│   ├── GalaxyBackground.tsx  # Animated multi-colored nebula background
│   ├── LegalModal.tsx        # Popup handler for legal pages
│   ├── MetalCard.tsx         # Price display cards
│   └── ...
├── pages/               # Route components
│   ├── ConverterPage.tsx     # Main dashboard & Long-form SEO article
│   ├── BlogIndexPage.tsx     # Blog list
│   └── ...
├── services/            # API and Data services
├── public/              # Static assets (robots.txt, sitemap.xml)
├── types.ts             # TypeScript definitions
├── constants.ts         # App constants
├── App.tsx              # Main Entry & Routing Logic
└── index.html           # Entry HTML with Meta Tags
```

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/metal-price-converter.git
    cd metal-price-converter
    ```

2.  **Install dependencies (if using a build step) or just serve:**
    Since this project uses ES Modules via CDN in `index.html` for React, you can simply serve the folder.
    
    Using Python:
    ```bash
    python3 -m http.server 3000
    ```
    
    Or if you have a Node environment set up:
    ```bash
    npm install
    npm run dev
    ```

3.  **Open in Browser:**
    Navigate to `http://localhost:3000`.

## 🧑‍💻 Author

**HSINI MOHAMED**
- Website: [doodax.com](https://doodax.com)
- GitHub: [@hsinidev](https://github.com/hsinidev)
- Email: hsini.web@gmail.com

---
*Price data is simulated for demonstration purposes.*