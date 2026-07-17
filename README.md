# eacoSWAP

> Solana DEX Aggregator for the Top 3000 Tokens — with 5-Asset Revenue Sharing.

eacoSWAP is a decentralized exchange (DEX) aggregator built on Solana, designed to let users swap the top 3000 market-cap tokens with best-price routing. Protocol revenue is distributed across **five asset classes**, each ~20%:

| Asset | Share |
|-------|-------|
| SOL   | ~20%  |
| USDT  | ~20%  |
| USDC  | ~20%  |
| eCNH  | ~20%  |
| EACO  | ~20%  |

## Features

- ⚡ **Top 3000 token support** — trade the highest-liquidity Solana SPL tokens.
- 🌐 **Multi-region compliance** — built for regulated markets across the US, APAC, MENA, Europe, and more.
- 🗣️ **6-language UI** — English, 中文, Español, Français, العربية, Русский (UN official languages).
- 🔐 **Non-custodial** — connects via Solana wallets; funds never leave the user.
- 📊 **Live revenue dashboard** — transparent 5-asset distribution view.

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Chain:** Solana (`@solana/web3.js`, `@solana/spl-token`)
- **i18n:** Custom `LanguageContext` with 6 locale packs

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Type-check + production build
npm run build

# Preview production build
npm run preview
```

> Requires Node.js 18+.

## Project Structure

```
eaco-swap/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── components/
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── SwapPanel.tsx
    │   ├── RevenueDashboard.tsx
    │   ├── RegionsCoverage.tsx
    │   ├── ComplianceBadge.tsx
    │   └── Footer.tsx
    ├── contexts/
    │   ├── LanguageContext.tsx
    │   └── WalletContext.tsx
    ├── data/
    │   └── tokens.ts
    └── locales/
        ├── en.ts
        ├── zh.ts
        ├── es.ts
        ├── fr.ts
        ├── ar.ts
        └── ru.ts
```

## Supported Regions

United States · Philippines · Japan · United Kingdom · Australia · Canada · New Zealand · Germany · Italy · Vietnam · Iran · Singapore · Malaysia · Indonesia · United Arab Emirates · Middle East

## License

© eacoSWAP. All rights reserved.
