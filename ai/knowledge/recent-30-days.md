# Recent 30 Days Knowledge Base

**Period:** 5 September 2026 – 4 October 2026
**Purpose:** Verified recent activity context for the Ask Me AI personal portfolio assistant.

> This file contains only activities supported by the available ChatGPT project/recent conversation history. Planned or unverified outcomes are explicitly marked.

## 1. 12 September 2026 — VERIMARK / SIH26034

- **Category:** Hackathon, AI, Legal-Tech, Computer Vision
- **Problem Statement:** SIH26034 — AI Product Compliance Scanner
- **Solution/Product:** VERIMARK
- **Concept:** AI Inspector Copilot
- **Core pipeline:** Product Image → OCR/VLM → Label Understanding → Legal Rules Engine → Violation Detection → Risk Score → Inspection Report
- **Planned/used technologies:** Python, FastAPI, OCR/Vision, LLM/VLM, PostgreSQL, React/Next.js, PDF generation, optional GIS
- **Dataset plan:** 500 products across 6 categories, 3 images per product, approximately 1,500 images; front/back/side views; OCR ground truth; bounding-box annotations; JSON/CSV; official Legal Metrology rules; proposed split of 350 train / 75 validation / 75 test.
- **Team recorded:** Rohan Umbarepatil (Leader), Onkar Jadhavar, Sanket Sutar, Rasik Samudre, Saurabh Taur, Anushka Murchite.
- **Result/status:** Concept, dataset plan and architecture were finalized. Full implementation and deployment were not verified in the available history.

## 2. 16 September 2026 — JetBrains Academy / GeeksforGeeks

- **Category:** Learning, Career Development, Professional Development
- **Activity:** JetBrains Academy experience task through GeeksforGeeks.
- **Task:** Register through GeeksforGeeks, explore JetBrains Academy, create a genuine LinkedIn post, and submit the LinkedIn post URL as proof.
- **Result/status:** The task was documented, but completion/approval was not independently verified in the available history.

## 3. 19 September 2026 — Software Engineering Internship Resume / ATS Preparation

- **Category:** Career Preparation, Professional Development
- **Activity:** Tailored a resume for a Software Engineering Intern opportunity.
- **Focus:** ATS-friendly positioning while preserving genuine qualifications, skills and projects.
- **Result:** Resume positioning and role alignment were worked on.

## 4. 21 September 2026 — Ticket2Bell Scope Finalization

- **Category:** Software Engineering, Full-Stack Development, IoT/GPS
- **Project:** Ticket2Bell / Conductor Digital Bell
- **Stack:** Next.js, TypeScript, Tailwind CSS, FastAPI/Python, Firebase Authentication, Firebase Firestore, real mobile GPS, GPS simulator, MapLibre/admin map.
- **Scope:**
  - Conductor laptop ticket machine
  - Mobile real GPS
  - Automatic digital bell
  - Admin live fleet map
  - Minimum 5 buses
  - Geofencing
  - Stop matching
  - Distance calculation
  - Duplicate-trigger prevention
  - Real GPS as primary source
  - GPS simulator as backup/demo mode
- **Result:** Project scope and architecture were frozen for implementation.

## 5. 22 September 2026 — Ticket2Bell Admin Live Map + Cloudflare Tunnel Debugging

- **Category:** Full-Stack Development, Backend, Maps, Deployment/Networking
- **Ticket2Bell work:**
  - Firestore `buses` collection
  - FastAPI backend
  - Real GPS tracking
  - Firestore `onSnapshot` live updates
  - MapLibre map
  - Live bus markers
  - Demo-marker cleanup
- **Cloudflare Tunnel debugging:**
  - Used cloudflared 2026.9.1 and Quick Tunnel.
  - Vite was listening on `[::1]:5174` while Cloudflare targeted `127.0.0.1:5174`.
  - This produced a `502 connection refused` issue.
  - DNS/UDP/TCP/API prechecks were reported as passing.
  - A later Quick Tunnel attempt timed out against `api.trycloudflare.com`.
- **Proposed fix:** Configure Vite to listen on `127.0.0.1`, use port 5174, configure allowed host where required, and verify with local `curl`/network checks.
- **Result/status:** Root cause of the primary 502 was identified. Final production tunnel success was not verified.

## 6. 23 September 2026 — Ticket2Bell Automatic Geofence Bell

- **Category:** Software Engineering, GPS, Geofencing
- **Implementation:** Automatic geofence bell logic was implemented in `frontend/app/bus/page.tsx`.
- **Target:** Rankala coordinates approximately `16.7056, 74.2433`.
- **Thresholds:** 1000 m approaching threshold and 150 m trigger threshold.
- **Protection:** `bellTriggeredRef` used for one-time trigger protection.
- **Modes preserved:** Demo GPS and real GPS.
- **Next planned stage:** Persist bell-event state in Firestore using fields such as `bellStatus`, `bellTriggered`, UTC `bellTriggeredAt`, and `bellTriggerLocation`, while preserving existing bus fields.
- **Result/status:** Geofence trigger logic was implemented; persistent bell-event state was a next-stage plan, not verified as completed.

## 7. 25 September 2026 — Student Ambassador / Developer Community Research

- **Category:** Career Development, Professional Development
- **Activity:** Researched legitimate student ambassador, developer and community programs to strengthen a professional profile before placements.
- **Result/status:** Programs were researched; final acceptance/enrollment was not independently verified.

## 8. 30 September 2026 — Code4Impact / Sustainable Tech Challenge / Impulse 2K26

- **Category:** Hackathon, Sustainability, AI, Full-Stack Development
- **Project:** CIRCUIT — Campus Intelligent Recovery & Circularity Engine
- **Core flow:** Waste image → AI classification → e-waste asset → QR identity → technician verification → campus demand matching → next-best-life decision → lifecycle tracking → dashboard.
- **5-hour P0 scope:** AI, Asset, QR, Verification, Decision Engine, Lifecycle, Dashboard.
- **Optional features:** Smart-bin, credits and location-related functionality.

## 9. 30 September – 3 October 2026 — WasteSense AI / CIRCUIT Architecture & Research

- **Category:** AI/ML, Research, Sustainability, Software Engineering
- **Track:** SDG 11 Track 4
- **Modules:**
  - AI waste classification
  - QR/barcode e-waste lifecycle tracking
  - Software smart-bin telemetry
  - Green Credits
  - Role-based access
- **Dataset:** 13,620 images mapped to seven classes, with deduplication and leakage auditing discussed.
- **Models:** MobileNetV2 and YOLOv8-CLS.
- **Stack:** Next.js, TypeScript, FastAPI, PostgreSQL, Supabase.
- **Prototype decision:** On 1 October, prototype-first development was chosen. IoT/hardware was intentionally excluded from the current prototype.
- **Smart-bin approach:** Simulated in software with fill percentage, status, prediction, overflow detection/alerts and dashboard visualization.
- **Repository concepts:**
  - `WasteSense-AI` — AI classification, student disposal and Green Credits.
  - `KabadMiTra` — institutional e-waste lifecycle, QR/barcode, recycler, handover and audit.
  - Smart-bin repository — telemetry simulation, prediction and alerts.

## 10. 3 October 2026 — Code4Impact Result

- **Category:** Hackathon Achievement
- **Event:** Code4Impact: Sustainable Tech Challenge / Impulse 2K26
- **Achievement:** Team ranked **Top 10 among 60+ teams**.
- **Project:** CIRCUIT — Campus Intelligent Recovery & Circularity Engine.
- **Significance:** This is the strongest independently recorded hackathon achievement in the available 30-day history.

## 11. 3 October 2026 — Kinetrexa Software Internship Showcase

- **Category:** Internship, Frontend Development, Professional Branding
- **Company:** Kinetrexa Software Private Limited
- **Role:** Frontend Development Intern
- **Internship period:** 20 August 2026 – 19 September 2026.
- **Important date note:** The internship itself partly falls outside the 30-day window; the showcase/preparation activity occurred during the window.
- **Projects showcased:** Admin Dashboard and E-Commerce Frontend.
- **Technologies:** React 19, TypeScript, Vite, Tailwind CSS, Zustand, routing, TanStack Query, forms/validation, responsive UI, tables/charts/themes, filtering, product details, reviews, cart, wishlist, checkout and API integration.
- **Supporting material:** Deployed projects, GitHub repositories and internship certificate were used/planned for the professional showcase.

## 12. 3 October 2026 — LinkedIn / Professional Content Development

- **Category:** Professional Development, Personal Branding
- **Activity:** Prepared LinkedIn content around the Code4Impact / Impulse 2K26 participation and achievement.
- **Focus:** Communicating the technical journey from classification to tracking to action, while highlighting measurable participation and the Top 10 result.

## 13. 3 October 2026 — GitHub Developer Branding for Satyajeet Jadhav

- **Category:** Developer Branding, Professional Development
- **Activity:** Prepared GitHub README/developer branding content for Satyajeet Jadhav.
- **References used:** GitHub, LinkedIn, resume and reference README material.
- **Profile reference:** `satyajeetj10`
- **Reference README repository:** `rohanumbarepatil/rohanumbarepatil`
- **Result:** Professional GitHub profile presentation content was worked on.

## 14. 4 October 2026 — Metropolis Professional Profile

- **Category:** Career Development, Professional Profile
- **Status:** Profile reported as **100% complete**.
- **Primary role:** Software Engineer
- **Secondary role:** Business Development
- **Country:** India
- **Location:** Kolhapur
- **Languages selected:** Hindi, Marathi

# Master Timeline

| Date | Activity | Category | Result / Status |
|---|---|---|---|
| 12 Sep | VERIMARK / SIH26034 | Hackathon / AI | Concept, architecture and dataset plan finalized |
| 16 Sep | JetBrains Academy / GFG | Learning | Task documented; completion not independently verified |
| 19 Sep | Software Engineering Intern resume | Career | ATS/role-aligned preparation completed |
| 21 Sep | Ticket2Bell scope | Engineering | Scope and architecture frozen |
| 22 Sep | Ticket2Bell live map | Engineering | Live map functionality worked on |
| 22 Sep | Cloudflare Tunnel debugging | Deployment | Primary 502 root cause identified |
| 23 Sep | Ticket2Bell geofence bell | Engineering | Automatic trigger logic implemented |
| 25 Sep | Student ambassador research | Career | Programs researched |
| 30 Sep | CIRCUIT / Code4Impact | Hackathon | P0 architecture and flow defined |
| 30 Sep–3 Oct | WasteSense AI / CIRCUIT | AI/ML | Dataset, architecture and prototype direction developed |
| 3 Oct | Code4Impact result | Achievement | **Top 10 / 60+ teams** |
| 3 Oct | Kinetrexa internship showcase | Internship | Frontend work professionally documented |
| 3 Oct | LinkedIn content | Branding | Hackathon/professional content prepared |
| 3 Oct | GitHub branding | Branding | Satyajeet profile README work prepared |
| 4 Oct | Metropolis profile | Career | **100% complete** |

# Top 10 Notable Outcomes

1. Finalized VERIMARK for SIH26034.
2. Developed and documented the AI Inspector Copilot concept.
3. Advanced Ticket2Bell toward real-time GPS and geofence automation.
4. Identified a concrete localhost binding issue behind a Cloudflare Tunnel 502.
5. Implemented automatic geofence bell logic for Ticket2Bell.
6. Designed CIRCUIT for sustainable e-waste recovery and lifecycle management.
7. Researched and structured the WasteSense AI / SDG 11 solution.
8. Achieved **Top 10 among 60+ teams** in Code4Impact / Impulse 2K26.
9. Documented Kinetrexa Frontend Development Internship work and projects.
10. Completed the Metropolis professional profile to 100%.

# Skills Practiced / Demonstrated

## Software Engineering
- Next.js
- React
- TypeScript
- Tailwind CSS
- FastAPI
- Python
- Firebase Authentication
- Firestore
- PostgreSQL
- Supabase
- MapLibre
- Vite
- Zustand
- TanStack Query

## AI / ML / Computer Vision
- OCR
- VLM/LLM concepts
- Product-label understanding
- Legal rules engines
- Violation detection
- Risk scoring
- MobileNetV2
- YOLOv8-CLS
- Image dataset preparation
- Deduplication
- Data leakage auditing

## Systems / IoT / Location
- GPS tracking
- GPS simulation
- Geofencing
- Distance calculations
- Real-time Firestore listeners
- Live map visualization
- Software-based smart-bin telemetry

## Career / Professional Development
- ATS resume tailoring
- Internship positioning
- Student ambassador research
- LinkedIn personal branding
- GitHub profile branding
- Professional profile optimization
- Hackathon presentation and storytelling

# Verified Achievements in This Window

- **Code4Impact / Sustainable Tech Challenge / Impulse 2K26:** Top 10 among 60+ teams.
- **Metropolis:** Professional profile completed to 100%.

# Important Verification Rules for Ask Me AI

When answering questions from this file, the assistant should:

1. Treat explicitly recorded completed work as factual.
2. Treat items marked planned, proposed, or not independently verified as unconfirmed.
3. Never convert a planned feature into a completed feature.
4. Never invent dates, rankings, certifications, deployments, or technologies.
5. For recent-activity questions, prioritize this file over older general portfolio information.
6. If a detail is not supported here or by another verified portfolio knowledge file, say that the information is not currently verified.
7. Keep internship dates separate from the date of the later showcase/content activity.
8. Distinguish project concepts/architecture from implementation and deployment.
