# The Good Bug - AI Wellness Coach

Premium gut health companion app powered by AI, behavioral science, and expert oversight.

## Overview

The Good Bug is a Series B health-tech startup building India's first clinically-designed AI wellness coach for personalized gut health management. This app combines real-time health tracking, contextual AI recommendations, and gamified engagement for SEC A/A- users (ages 28-38).

## Key Features

**Health Tracking**
- Real-time gut score (0-100) with dynamic calculation
- 7-day trend visualization with smooth animations
- Symptom logging (bloating, constipation, acidity, stress)
- Stool quality tracking using Bristol Scale (7 types)
- Sleep, hydration, and activity metrics

**AI Chatbot (Wellness)**
- Context-aware conversational AI powered by GPT-4 Turbo
- Product recommendations inline (Synbiotic Mix, Fiber Blend, etc.)
- Personalized wellness insights based on symptom patterns
- Session memory (remembers previous conversations)
- Expert escalation for complex cases

**Gut Facts Carousel**
- Horizontal swipeable flashcards with gut health facts
- 8+ educational cards on probiotics, fiber, stress, hydration
- Visual gradients and smooth scroll-snap behavior
- Bookmarkable facts with share functionality

**Smart Nudge System**
- Day-based milestones (Day 1, 3, 7, 14, 21, 30)
- Trigger-based nudges (high stress, low hydration, poor streaks)
- Timezone-aware scheduling with quiet hours
- Customizable frequency (daily, weekly, bi-weekly)

**Profile & Customization**
- Medical profile management (conditions, allergies, medications)
- Health summary cards (streak, consistency, improvement)
- Account settings (notifications, language, dark mode)
- Data privacy controls (DPDPA compliant)

## Tech Stack

**Frontend**
- Next.js 15 (React 18, TypeScript)
- Tailwind CSS 3.4 (mobile-first design)
- Framer Motion (advanced animations)
- Recharts (data visualization)
- shadcn/ui (accessible components)
- Zustand (global state management)

**Backend**
- Next.js API Routes
- PostgreSQL 14+
- Prisma ORM (type-safe queries)
- OpenAI GPT-4 Turbo API
- NextAuth.js (authentication)

**Infrastructure**
- Vercel (frontend hosting, auto-deploy)
- Supabase (managed PostgreSQL)
- Redis (optional caching)
- SendGrid (email delivery)
- Sentry (error tracking)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+ (or Supabase account)
- OpenAI API key
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/team17pgai-lang/Good-bug-Ai-wellness-coach.git
cd Good-bug-Ai-wellness-coach

# Install dependencies
npm install

# Setup environment variables
cp .env.local.example .env.local

# Edit .env.local with your credentials:
# DATABASE_URL=postgresql://...
# OPENAI_API_KEY=sk-...
# NEXTAUTH_SECRET=<generate-random-string>
```

### Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Optional: Seed database
npx prisma db seed
```

### Development

```bash
# Start dev server
npm run dev

# Open http://localhost:3000
```

The app runs with hot-reload enabled.

## Project Structure

```
good-bug-ai-wellness-coach/
├── app/
│   ├── api/                    # API routes (logs, chat, scoring)
│   ├── components/             # React components (tabs, charts, inputs)
│   ├── page.tsx                # Main app entry
│   └── layout.tsx              # Root layout
├── lib/
│   ├── db.ts                   # Database client
│   ├── scoring.ts              # Gut score calculation
│   ├── types.ts                # TypeScript interfaces
│   └── constants.ts            # Color codes, config
├── prisma/
│   └── schema.prisma           # Database schema
├── public/
│   └── icons/                  # SVG icons (stool types, etc.)
└── styles/
    └── globals.css             # Tailwind + CSS variables
```

## API Endpoints

### Health Logs
```
POST /api/logs/create
  Input: { bloating, constipation, acidity, stress, sleep, exercise, meals, waterIntake, stoolType }
  Output: { logId, gutScore, trends, nextTargets }
  
GET /api/logs/get-user
  Input: { userId, daysBack: 7 }
  Output: [ { date, symptoms, score, timestamp } ]
```

### AI Chat
```
POST /api/chat/send
  Input: { userId, message, conversationId, history: [...] }
  Output: { messageId, botResponse, intent, recommendedProducts, sentiment }
  
GET /api/chat/history
  Input: { userId, conversationId }
  Output: [ { role, content, timestamp, intent } ]
```

### Gut Score
```
GET /api/score/calculate
  Input: { userId }
  Output: { score (0-100), change, trend, nextMilestone }
```

### Nudges
```
POST /api/nudges/schedule
  Input: { userId, trigger, message, timing }
  Output: { nudgeId, scheduledFor, status }
  
GET /api/nudges/check
  Input: { userId }
  Output: [ { message, type, action } ]
```

### User Profile
```
GET /api/user/profile
  Input: { userId }
  Output: { user, medicalInfo, preferences, stats }

PUT /api/user/profile
  Input: { userId, updates }
  Output: { updatedUser }
```

## Database Schema

### Users Table
```sql
- userId (UUID, primary key)
- email, name, age, gender, phone
- primaryGutIssue, medicalHistory, allergies
- currentMedications, dietType
- createdAt, updatedAt
```

### Health Logs Table
```sql
- logId (UUID, primary key)
- userId (foreign key)
- date (indexed for queries)
- bloating, constipation, acidity (1-10)
- stressLevel (1-10), sleepHours (1-12)
- mealQuality (1-5), stoolType (type_1 to type_7)
- waterIntake (liters), exerciseMinutes
- gutScoreCalculated (0-100)
- timestamp (with timezone)
```

### Conversations Table
```sql
- conversationId (UUID)
- userId (foreign key)
- title, topic
- messageCount, firstMessageAt, lastMessageAt
- gutScoreAtStart, gutScoreAtEnd
```

### Messages Table
```sql
- messageId (UUID)
- conversationId (foreign key)
- role (user / assistant)
- content (message text)
- intent (log_symptom, ask_question, recommend_product)
- extractedSymptoms (array)
- recommendedProducts (array)
- sentiment (positive / neutral / negative)
- timestamp
```

## Features & Roadmap

### Current (v1.0)
- [x] Health metrics dashboard
- [x] AI chatbot with context memory
- [x] Real-time gut score calculation
- [x] Profile management
- [x] Gut facts carousel
- [x] Nudge scheduling
- [x] DPDPA compliance

### Next Phase (v1.1)
- [ ] Community features
- [ ] Wearable integration (Apple Health, Google Fit)
- [ ] Multi-language support (हिंदी)
- [ ] Dark mode
- [ ] Advanced analytics dashboard

### Future (v2.0)
- [ ] Microbiome test integration
- [ ] Personalized product bundles
- [ ] Telemedicine integration
- [ ] Offline-first PWA
- [ ] Subscription management

## Performance Targets

**Lighthouse Metrics**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

**Core Web Vitals**
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3s

## Deployment

### Vercel (Recommended)

```bash
# Connect GitHub repo to Vercel dashboard
# Set environment variables
# Deploy automatically on git push
```

### Manual Deploy

```bash
npm run build
npm start
```

## Development Guidelines

### Code Style
- TypeScript strict mode enabled
- ESLint + Prettier formatting
- Component-driven architecture
- Mobile-first responsive design

### Running Tests
```bash
npm test                    # Unit tests
npm run test:e2e           # E2E tests
npm run type-check         # Type checking
```

### Linting & Formatting
```bash
npm run lint               # Check linting
npm run format             # Auto-format code
```

## Security & Privacy

### Encryption
- **At Rest:** AES-256-CBC with AWS KMS
- **In Transit:** TLS 1.3 enforced
- **On Device:** OS-level encryption (Keychain/EncryptedSharedPreferences)

### Compliance
- DPDPA compliant (India)
- User consent management
- Right to deletion
- Data export capability
- No third-party sharing

### Authentication
- NextAuth.js with JWT
- 24-hour token expiry
- 30-day refresh token rotation
- Bcrypt password hashing (12 rounds)

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

**Guidelines:**
- Write tests for new features
- Follow TypeScript strict mode
- Update README for major changes
- Reference GitHub issues in commits

## Support & Contact

**Email:** support@thegoodbug.in  
**Website:** www.thegoodbug.in  
**Issues:** GitHub Issues tab  

## License

MIT License - see LICENSE.md for details

---

## Success Metrics (KPIs)

| Metric | Target |
|--------|--------|
| D1 Retention | > 75% |
| D7 Retention | > 50% |
| D30 Retention | > 25% |
| Chat → Product Click | > 40% |
| Gut Score Improvement (30d avg) | +20 points |
| NPS Score | > 50 |
| App Rating | > 4.6/5 |
| Zero Critical Bugs | Per release |

---

**Built with ❤️ to make gut health personal in India**
