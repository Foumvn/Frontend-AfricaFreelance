# Africa-Freelance Dashboard

A comprehensive dashboard platform for Africa-Freelance, a freelancing platform connecting African talent with global opportunities.

## Features

- **Dashboard Client** - Main dashboard with wallet stats, active jobs, and freelancer recommendations
- **Job Discovery** - Browse and filter available jobs for freelancers
- **Payments** - Fund missions and pay via Mobile Money (Orange Money, Wave, MTN MoMo)
- **Messages** - Real-time messaging interface with conversation management
- **Validation** - Approve and validate freelancer deliverables
- **Wallet** - Manage earnings, escrow funds, and transaction history
- **Profile** - Public freelancer profiles with portfolio and reviews

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Material Symbols (Google Fonts)

## Getting Started

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Dashboard (/)
│   │   ├── jobs/              # Job Discovery
│   │   ├── my-jobs/           # My Jobs
│   │   ├── messages/          # Messages
│   │   ├── wallet/            # Wallet
│   │   ├── profile/           # Freelancer Profile
│   │   ├── validation/         # Delivery Validation
│   │   ├── funds-released/     # Funds Released Confirmation
│   │   ├── payments/          # Payment pages
│   │   └── settings/          # Settings
│   └── components/
│       └── layout/            # Layout components
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Client Dashboard |
| `/jobs` | Job Discovery (Freelancer) |
| `/my-jobs` | My Jobs List |
| `/messages` | Messaging Interface |
| `/wallet` | Wallet & Transactions |
| `/profile` | Freelancer Profile |
| `/validation` | Delivery Validation |
| `/funds-released` | Funds Released Confirmation |
| `/payments/fund-mission` | Fund Mission Payment |
| `/payments/mobile-payment` | Mobile Money Payment |
| `/settings` | Account Settings |

## Design System

### Colors
- Primary: `#0df259` (Green)
- Background Light: `#f5f8f6`
- Background Dark: `#102216`

### Typography
- Font Family: Inter (Google Fonts)

## License

Private - All rights reserved
