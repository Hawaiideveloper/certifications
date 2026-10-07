# CertsOnTheFly

Free certification exam prep platform with 3,111 practice questions across 11 professional certifications.

**Live:** [certsonthefly.com](https://certsonthefly.com)

## Certifications Covered

| Category | Exam | Questions |
|----------|------|-----------|
| **Trades** | HVAC EPA 608 & NATE | 299 |
| | Journeyman Electrician | 300 |
| | Journeyman Plumber | 300 |
| **Healthcare** | NCLEX-RN Nursing | 300 |
| **IT & Security** | CompTIA Security+ SY0-701 | 300 |
| **Transportation** | Commercial Driver's License (CDL) | 300 |
| **Project Management** | PMP | 300 |
| **AI Infrastructure** | NVIDIA (CUDA, TensorRT, Triton, Multi-GPU) | 259 |
| | AWS (SageMaker, Bedrock, Trainium, Inferentia) | 242 |
| | Azure (Azure ML, OpenAI Service, Cognitive Services) | 261 |
| | GCP (Vertex AI, TPU, BigQuery ML, Gemini) | 250 |

## Features

- **3,111 exam-style questions** with detailed explanations
- **Official documentation evidence** with source links for every answer
- **User accounts** with registration/login (session-based auth)
- **Score history** saved to PostgreSQL database
- **Dashboard** with stats, streak tracking, and achievements
- **Freemium model** — 10 free questions per exam, then upgrade
- **Stripe payments** — single exam ($7.99), category bundle ($19.99), all-access ($4.99/mo)
- **Pricing page** with tier comparison and FAQ
- **Vendor/exam filtering** to focus on specific certifications
- **Per-vendor scoring** to identify weak areas
- **Timer and progress tracking**
- **Mobile responsive** design

## Tech Stack

- **Frontend:** Vanilla HTML/CSS/JS
- **Backend:** Node.js + Express
- **Database:** PostgreSQL (Fly.io Postgres)
- **Auth:** express-session + connect-pg-simple + bcryptjs
- **Hosting:** Fly.io (2 app machines, auto-stop idle)
- **Analytics:** Google Analytics (gtag.js)
- **Payments:** Stripe Checkout (one-time + subscriptions)
- **Monetization:** Google AdSense, Amazon Associates affiliate links

## Project Structure

```
certifications/
├── server.js              # Express server entry point
├── db/init.js             # PostgreSQL schema (users, scores, sessions)
├── routes/
│   ├── auth.js            # Register, login, logout, session check
│   ├── scores.js          # Save scores, history, stats, streaks
│   └── payments.js        # Stripe checkout, webhooks, access control
├── public/
│   ├── index.html         # Landing page
│   ├── dashboard.html     # User dashboard with stats
│   ├── quiz.html          # Quiz engine (3,111 questions)
│   ├── pricing.html       # Pricing tiers & Stripe checkout
│   ├── resources.html     # Exam registration & study guide links
│   ├── ads.txt            # AdSense verification
│   ├── js/
│   │   ├── auth.js        # Auth modal & session management
│   │   └── ads.js         # AdSense ad placement
│   ├── styles/main.css    # Shared design system
│   └── exams/             # Individual exam detail pages
│       ├── hvac.html
│       ├── electrician.html
│       ├── plumbing.html
│       ├── nursing.html
│       ├── security.html
│       ├── cdl.html
│       └── pmp.html
├── Dockerfile
├── fly.toml
└── package.json
```

## Local Development

```bash
# Install dependencies
npm install

# Set database URL (or use local Postgres)
export DATABASE_URL=postgres://user:pass@localhost:5432/certsonthefly

# Start server
node server.js
# → http://localhost:8080
```

## Deployment

Hosted on [Fly.io](https://fly.io) with automatic deploys:

```bash
fly deploy
```

## License

MIT
