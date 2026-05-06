# UniMatchAI Frontend Prototype

UniMatchAI is a clickable React and Tailwind CSS prototype for an AI-powered university-to-work matching platform. It is designed for demos and presentations with mock data and simulated AI outputs.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

## POC Scope

This prototype is framed as a 4-sprint proof of concept:

| Sprint | Focus |
| --- | --- |
| Sprint 1 | CV upload mock flow and student profile foundation |
| Sprint 2 | AI job matching, match reasons, and saved-job actions |
| Sprint 3 | CV improvement, skill gap analysis, and mock interview feedback |
| Sprint 4 | HR shortlist, university dashboard, and premium future-release preview |

## MVP Priorities

- CV upload mock flow
- AI job matching
- CV improvement suggestions
- Skill gap analysis
- Mock interview with feedback
- HR candidate shortlist

## Architecture Notes

- The app uses simple React state for navigation instead of a router.
- All fake student, company, job, candidate, sprint, and metric data lives in `src/data/mockData.js`.
- Reusable UI components live in `src/components`.
- Page-level screens live in `src/pages`.
- The prototype has no backend, database, authentication, or real AI integration.

## Simulated vs Real Backend/API

Simulated in this POC:
- AI job match scores and explanations
- CV upload and CV improvement suggestions
- Skill gap analysis and course recommendations
- Interview questions, feedback, and readiness scoring
- Candidate ranking and recruiter filters
- Export/download actions and premium locking

Would require a real backend or APIs:
- User authentication and role permissions
- Student, company, and university data storage
- CV parsing and secure document uploads
- AI model calls for matching, feedback, and interview generation
- Job application workflows and recruiter communication
- Verified academic records and credential exports
- Payment, billing, and premium entitlements
