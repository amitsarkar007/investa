# Investa

Free, comprehensive UK investment education platform covering all asset classes. Beginner-friendly guides, interactive tools, and plain-language explanations for complete beginners.

**Live site:** [https://investa-amit.netlify.app/](https://investa-amit.netlify.app/)

## Features

- **11 Asset Class Guides**: Comprehensive guides on Bonds, Stocks, Mutual Funds, ETFs, Real Estate, Commodities, Cryptocurrencies, Peer-to-Peer Lending, Collectibles, Pension Funds, and ISAs
- **Interactive Calculators**: Compound growth calculator, inflation impact calculator, risk vs return comparisons, and historical returns visualizations
- **Educational Content**: 
  - Getting started guides
  - Basic money concepts
  - Common fears & myths
  - Financial & business definitions (73+ terms)
  - Why investing matters
- **UK-Focused**: All content tailored for UK investors, covering UK platforms, tax considerations, and regulations
- **Plain Language**: No jargon, no assumptions - explains everything as if you're brand new to investing

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **React Router** for navigation
- **Recharts** for interactive charts and visualizations
- **Tailwind CSS** for styling
- **Netlify** for hosting

## Project Structure

```
investa/
├── public/
│   └── assets/
│       └── images/          # Logo and images
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Site navigation
│   │   ├── Footer.tsx       # Site footer
│   │   └── ScrollToTop.tsx  # Scroll to top button
│   ├── data/
│   │   └── assetClasses.ts  # All asset class content (11 classes)
│   ├── pages/
│   │   ├── Home.tsx         # Homepage with calculators
│   │   ├── Learning.tsx    # All guides overview
│   │   ├── AssetClassPage.tsx  # Dynamic asset class pages
│   │   ├── Start.tsx       # Getting started guide
│   │   ├── WhyInvest.tsx   # Why investing matters
│   │   ├── Basics.tsx      # Basic money concepts
│   │   ├── Fears.tsx       # Common fears & myths
│   │   ├── RiskReturn.tsx  # Risk vs return comparison
│   │   ├── HistoricalReturns.tsx  # Historical returns data
│   │   ├── Tools.tsx       # Interactive calculators
│   │   ├── Definitions.tsx # Financial & business terms
│   │   ├── FAQ.tsx         # Frequently asked questions
│   │   ├── About.tsx       # About page
│   │   ├── Contact.tsx     # Contact form (formsubmit.co)
│   │   ├── Ethics.tsx      # Ethics & warnings
│   │   └── NotFound.tsx   # 404 page
│   ├── App.tsx             # Main app with routing
│   └── main.tsx            # Entry point
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── netlify.toml            # Netlify deployment config
```

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`) to open in your browser.

## Build for Production

```bash
# Build the project
npm run build
```

The output is generated in the `dist/` folder, ready for deployment.

## Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

## Deployment

The app is deployed on **Netlify** and automatically builds on push to `main` branch.

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Live URL**: https://investa-amit.netlify.app/

## Key Content Locations

- **Asset Classes**: `src/data/assetClasses.ts` - Contains all 11 asset class definitions, descriptions, risks, benefits, platforms, and guides
- **Homepage**: `src/pages/Home.tsx` - Main landing page with hero section, calculators, and overview
- **Asset Pages**: `src/pages/AssetClassPage.tsx` - Dynamic template for all asset class pages
- **Definitions**: `src/pages/Definitions.tsx` - 73+ financial and business term definitions
- **Navigation**: `src/components/Navbar.tsx` and `src/components/Footer.tsx` - Site navigation and footer

## Updating Content

### Asset Classes
Edit `src/data/assetClasses.ts` to update any asset class information, platforms, or content.

### Definitions
Edit `src/pages/Definitions.tsx` to add or modify financial/business term definitions.

### Pages
Each page is a separate component in `src/pages/` - edit directly to update content.

## Features Overview

### Interactive Tools
- **Compound Growth Calculator**: Calculate investment growth over time with interactive graphs
- **Inflation Impact Calculator**: See how inflation affects purchasing power
- **Risk vs Return Comparison**: Visual comparison across asset classes
- **Historical Returns**: Historical performance data visualization

### Asset Class Guides
Each guide includes:
- Overview and tagline
- Why it matters
- How it works
- Key ideas
- Risks and benefits
- Beginner steps
- Good for / Watch outs
- Platform recommendations
- Detailed sections with UK-specific information

## Contact

Contact form available at `/contact` - uses formsubmit.co to send emails to its.amitsarkar@gmail.com

## License

See `LICENSE` file.
