# The Good Bug · AI Wellness Companion

Premium mobile-first gut health coach for Indian professionals (SEC A/A-) featuring real-time metrics, AI interventions, and cinematic UI polish.

## Highlights

- **Four-tab experience:** Health Dashboard, Wellness Chat, Profile Hub, Community (teaser) with animated bottom navigation.
- **Live Gut Score:** Circular gauge, trend chart, and flashcards driven by behavioral data + scoring heuristics.
- **Quick Logging:** Water meter, stress slider, Bristol stool selector, and lifestyle inputs with rich feedback and motion.
- **AI Chatbot:** Gradient chat interface, inline product cards, smart suggestions, and typing indicators.
- **Profile Ops:** Medical snapshot, milestones/streaks, account controls, export/delete links, compliance-ready.
- **Design System:** Extensive token sheet (gradients, shadows, states) exported to CSS variables + Tailwind theme.

## Stack

- **Frontend:** Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, Recharts.
- **State & Data:** Local mock data, Prisma schema, utility scoring engine, typed constants.
- **Backend Surface:** Next.js API routes for logs, score, chat echo, and nudges (ready for real services).
- **Tooling:** ESLint (Next config), Prettier, Jest, Tailwind, PostCSS, GitHub Actions CI, Prisma client.

## Quick Start

```bash
npm install
cp .env.local.example .env.local    # fill credentials
npx prisma generate                 # optional for local DB
npm run dev
```

Visit `http://localhost:3000` (mobile viewport recommended).  
Additional scripts: `npm run lint`, `npm run type-check`, `npm run test`, `npm run build`.

## Environment

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL / Supabase connection |
| `OPENAI_API_KEY` | Chat + nudges intelligence |
| `NEXTAUTH_URL`, `NEXTAUTH_SECRET` | Auth callbacks |
| `NEXT_PUBLIC_*` | Client-side config (app name, Supabase, version) |
| `SENDGRID_API_KEY` | Notification email channel |

See `.env.local.example` for the full list.

## App Anatomy

```
app/
  layout.tsx · global font + metadata
  page.tsx   · tab orchestrator + navigation
  components/
    Dashboard.tsx        · Tab 1 experience (gauge, chart, cards, logging)
    GutScoreGauge.tsx    · SVG donut animation (1.5s ease-out)
    TrendChart.tsx       · 7-day AreaChart + baseline line
    FactCarousel.tsx     · scroll-snap flashcards, active scaling + dots
    WaterMeter.tsx       · ring tracker + preset adjustments
    StressSlider.tsx     · emoji thumb slider + presets
    StoolSelector.tsx    · Bristol scale cards
    Chat.tsx / ChatInterface.tsx · Gradient chat canvas + suggestions, inline commerce
    Profile.tsx          · Gradient hero, 2x2 stat grid, settings, footer
    Community.tsx        · Placeholder hero (future phase)
    Navigation.tsx       · Bottom tab bar (underline, 200ms motion)
app/api/
  logs/route.ts          · mock CRUD + scoring
  chat/route.ts          · placeholder wellness response
  score/route.ts         · live score + forecast
  nudges/route.ts        · milestone nudges feed
lib/
  constants.ts           · palettes, cards, presets, chat suggestions
  mockData.ts            · seed logs + conversation
  scoring.ts             · deduction/bonus engine (clamped 0-100)
  types.ts               · shared TypeScript interfaces
  utils.ts               · status helpers + formatting
prisma/schema.prisma     · Users, HealthLogs, Conversations, Messages
styles/theme.css         · CSS variables for colors/shadows
```

## Gut Score Logic

```ts
let score = 100;
score -= bloating * 2.5;
score -= constipation * 3.0;
score -= acidity * 2.0;
score -= stressLevel * 1.5;
score -= Math.max(0, 8 - sleepHours) * 1.5;
if (exerciseMinutes < 15) score -= 5;
if (logged 5+ days) score += 5;
score += Math.min(streak, 7);
if (waterIntake > 3) score += 3;
if (mealQuality >= 4) score += 2;
if (exerciseMinutes > 30) score += 3;
return clamp(score, 0, 100);
```

Delta copy surfaces `"↑ +8 vs last week"`, `"→ Same as last week"`, etc., matching the brand tone.

## Design Tokens (excerpt)

| Token | Sample |
| --- | --- |
| `--primary-gradient` | `linear-gradient(135deg, #A29BFE → #1DD1A1)` |
| `--shadow-xl` | `0 20px 40px rgba(0,0,0,0.15)` |
| Status colors | Excellent `#1DD1A1`, Good `#06B6D4`, Fair `#FDCB6E`, Poor `#FF7675` |
| Surface | Cream `#F8F9FA`, Off-white `#FAFBFC` |

Exported through `styles/theme.css` and re-used via Tailwind extensions + CSS utilities (`glass-panel`, `focus-ring`, `snap-carousel`).

## API Surface (Mock)

- `GET /api/logs` – returns sample logs (ready for DB swap)
- `POST /api/logs` – echoes payload + recalculated score
- `POST /api/chat` – placeholder assistant reply
- `GET /api/score` – exposes score, delta, milestone forecast
- `GET /api/nudges` – milestone nudges (day 0 → 30)

Upgrade paths: replace mock data with Prisma queries + OpenAI integration inside these handlers.

## CI/CD

GitHub Actions workflow (`.github/workflows/deploy.yml`) runs install → lint → type-check → tests → build on PRs & main pushes.  
Optimized for Node 18 (matching Next.js 15 requirements).

## Roadmap

- Community feed & challenges
- Wearable integration (Apple Health, Google Fit)
- Multi-language UI (हिंदी first), Dark Mode, Offline-first PWA
- Product bundles, subscription stack, microbiome test ingestion

## Support

- Email: `support@thegoodbug.in`
- Website: `https://www.thegoodbug.in`
- Issues: GitHub tracker

---

**Built with ❤️ to restore Indian gut health, one premium ritual at a time.**
