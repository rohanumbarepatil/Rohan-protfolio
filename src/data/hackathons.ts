import type { HackathonItem } from '@/types/portfolio'

import ritHero from '@/assets/Certification/Technical_Events_Certificates/RIT_Hackton_New.jpeg'
import ritPreview from '@/assets/Hacktons/RIT Islampur/rithackathon__arogya360__squadmatrix__hackathonex.jpg'
import ritGallery1 from '@/assets/Hacktons/RIT Islampur/rithackathon__arogya360__squadmatrix__hackathonex (1).jpg'
import ritGallery2 from '@/assets/Hacktons/RIT Islampur/rithackathon__arogya360__squadmatrix__hackathonex (2).jpg'
import ritGallery3 from '@/assets/Hacktons/RIT Islampur/rithackathon__arogya360__squadmatrix__hackathonex (3).jpg'
import ritGallery4 from '@/assets/Hacktons/RIT Islampur/rithackathon__arogya360__squadmatrix__hackathonex (4).jpg'

import hackauraCert from '@/assets/Certification/Technical_Events_Certificates/Hackaura 2026.jpeg'
import hackauraPreview from '@/assets/Hacktons/SRKIT Nipani/hackaura2026__hackathon__fullstackdevelopment__re (1).jpg'
import hackauraGallery1 from '@/assets/Hacktons/SRKIT Nipani/hackaura2026__hackathon__fullstackdevelopment__re.jpg'
import hackauraGallery2 from '@/assets/Hacktons/SRKIT Nipani/hackaura2026__hackathon__fullstackdevelopment__re (2).jpg'
import hackauraGallery3 from '@/assets/Hacktons/SRKIT Nipani/hackaura2026__hackathon__fullstackdevelopment__re (3).jpg'

import technovationHero from '@/assets/Certification/Technical_Events_Certificates/Technovation_1_0_New.jpg'
import technovationPreview from '@/assets/Hacktons/BSIT Kolhapur/ai__hackathon__nlp__machinelearning__innovation__.jpg'
import technovationGallery1 from '@/assets/Hacktons/BSIT Kolhapur/ai__hackathon__nlp__machinelearning__innovation__ (1).jpg'
import technovationGallery2 from '@/assets/Hacktons/BSIT Kolhapur/ai__hackathon__nlp__machinelearning__innovation__ (3).jpg'

import techpravartanHero from '@/assets/Certification/Technical_Events_Certificates/Techpravartan_2025_New.jpg'
import techpravartanPreview from '@/assets/Hacktons/SBGOI Miraj/hackathon__teamcse__innovation__proudmoment__coll.jpg'
import techpravartanGallery1 from '@/assets/Hacktons/SBGOI Miraj/hackathon__teamcse__innovation__proudmoment__coll (1).jpg'
import techpravartanGallery2 from '@/assets/Hacktons/SBGOI Miraj/hackathon__teamcse__innovation__proudmoment__coll (2).jpg'
import techpravartanGallery3 from '@/assets/Hacktons/SBGOI Miraj/hackathon__teamcse__innovation__proudmoment__coll (3).jpg'
import techpravartanGallery4 from '@/assets/Hacktons/SBGOI Miraj/IMG20251014175919.jpg'
import techpravartanGallery5 from '@/assets/Hacktons/SBGOI Miraj/IMG20251014181219~2.jpg'
import safeSpherePreview from '@/assets/projects/Safecity.png'

export const hackathons: HackathonItem[] = [
  {
    id: 'safe-sphere-ai-hacknovate-2k26',
    title: 'SafeSphere AI',
    organizer: 'HACKNOVATE-2K26',
    date: '2026',
    duration: '30 Hours Hackathon',
    teamName: 'SafeSphere Team',
    achievement: 'Smart City Safety Prototype',
    summary: 'A real-time AI-powered smart city safety platform that helps citizens and authorities identify, monitor, and respond to urban safety threats through one centralized command experience.',
    problemStatement: 'Urban safety systems are fragmented, delaying crime reporting, threat visibility, and emergency response coordination.',
    problemContext: 'Most incidents are underreported or resolved slowly because citizens and authorities often operate on disconnected platforms without live intelligence.',
    solutionOverview: 'SafeSphere AI combines live crime mapping, predictive analytics, citizen incident reporting, and emergency prioritization into a centralized real-time dashboard.',
    realWorldImpact: 'Improves transparency, enables faster data-driven emergency action, and helps authorities proactively focus on high-risk zones before incidents escalate.',
    features: [
      'Real-time crime heatmaps for hotspot visibility',
      'AI risk prediction using historical and live patterns',
      'Citizen incident reporting for crimes, emergencies, and civic issues',
      'Emergency prioritization based on severity and frequency',
      'Live command dashboard for city-wide monitoring',
      'Interactive analytics and smart data visualization'
    ],
    techStack: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Predictive Risk Analysis',
      'Crime Pattern Intelligence',
      'Heatmap Algorithms',
      'Mapbox / Google Maps API',
      'Geolocation Services',
      'Vercel'
    ],
    innovationPoints: [
      'Predictive risk intelligence for proactive urban safety',
      'Unified citizen-authority incident intelligence flow',
      'Real-time safety visualization for faster decision-making'
    ],
    uiUxHighlights: [
      'Command-dashboard-first interface design',
      'Data-heavy yet responsive visual layout',
      'Clear incident-to-action interaction flow'
    ],
    developmentProcess: [
      'Designed and delivered under a strict 30-hour hackathon timeline.',
      'Focused on integrating maps, analytics, and reporting into one coherent workflow.',
      'Prioritized practical urban safety impact over feature bloat.'
    ],
    stats: [
      { label: 'Duration', value: '30 Hours', detail: 'HACKNOVATE-2K26 build sprint' },
      { label: 'Focus', value: 'Citizen Safety', detail: 'Emergency intelligence and response' },
      { label: 'Category', value: 'Smart City', detail: 'AI-driven risk and incident platform' }
    ],
    heroImage: safeSpherePreview,
    team: [
      { name: 'Rohan Umbare patil', role: 'Team Member' }
    ],
    gallery: [
      safeSpherePreview
    ],
    certificates: [],
    learningOutcomes: [
      'Building scalable real-time applications under extreme time constraints',
      'Implementing AI-driven prediction systems',
      'Designing responsive and data-heavy dashboards',
      'Team collaboration in fast-paced development environments',
      'Problem-solving with real-world impact in mind',
      'Integrating maps, analytics, and live reporting systems'
    ],
    links: {
      linkedin: 'https://www.linkedin.com/posts/rohan-umbare-patil-76b971358_most-developers-build-for-portfolios-we-ugcPost-7462140338510671873-Pg0e/?utm_source=chatgpt.com',
      demo: 'https://hacknovate-xi.vercel.app/?utm_source=chatgpt.com',
    }
  },
  {
    id: 'rit-hackathon-2k26',
    title: 'RIT Hackathon 2K26 (National Level)',
    organizer: 'Rajarambapu Institute of Technology, Rajaramnagar, SAKHARALE',
    date: '2026',
    duration: '24 Hours Hackathon',
    teamName: 'Squad Matrix',
    achievement: 'Participant / Project Builder',
    summary: 'Arogya360 framed a smarter municipal healthcare workflow for citizens, hospitals, and authorities inside one unified product story.',
    problemStatement: 'Smart Health Solutions for Municipal Corporations and Municipal Hospitals.',
    problemContext: 'Public healthcare coordination becomes difficult when beds, alerts, and citizen access live in separate systems.',
    solutionOverview: 'Arogya360: An AI-powered Smart Healthcare System designed to connect citizens, hospitals, and authorities on one unified platform.',
    realWorldImpact: 'Designed to reduce manual coordination overhead and create clearer visibility for everyday healthcare operations.',
    features: [
      'Role-based system (Citizen / Hospital / Authority)',
      'Secure authentication using Firebase',
      'Real-time dashboards for bed availability, disease tracking, health alerts',
      'AI-based insights (prediction concept)',
      'Live data handling using Firestore',
      'Clean, responsive UI with multiple pages'
    ],
    techStack: ['React', 'Vite', 'Firebase', 'Firestore', 'Tailwind CSS', 'JavaScript'],
    innovationPoints: [
      'Unified municipal healthcare story across three user roles',
      'AI-based insights concept for decision support',
      'Real-time data layer built for live dashboard updates'
    ],
    uiUxHighlights: [
      'Role-based navigation architecture',
      'Dashboard-first information hierarchy',
      'Responsive demo flow for judges and recruiters'
    ],
    developmentProcess: [
      'Framed the challenge around citizen, hospital, and authority workflows.',
      'Built the core product skeleton first so the live demo stayed stable.',
      'Refined the UI and pitch storyline around hackathon judging pressure.'
    ],
    stats: [
      { label: 'Duration', value: '24 Hours', detail: 'Full hackathon sprint' },
      { label: 'Team', value: 'Squad Matrix', detail: '4 builders' },
      { label: 'Focus', value: 'Smart Healthcare', detail: 'Municipal operations' }
    ],
    heroImage: ritPreview,
    team: [
      { name: 'Sanket Sutar', role: 'Backend Developer' },
      { name: 'Onkar Jadhavar', role: 'UI/UX Designer' },
      { name: 'Saurabh Taur', role: 'Documentation' },
      { name: 'Rohan Umbare patil', role: 'Frontend Developer' }
    ],
    gallery: [
      ritPreview,
      ritGallery1,
      ritGallery2,
      ritGallery3,
      ritGallery4
    ],
    certificates: [
      ritHero
    ],
    learningOutcomes: [
      'How to build under pressure',
      'How to collaborate effectively',
      'How to turn an idea into a working solution',
      'Debugging errors at 3 AM',
      'Fixing backend issues under time pressure',
      'Connecting frontend and backend live'
    ],
    links: {
      linkedin: 'https://www.linkedin.com/posts/rohan-umbare-patil-76b971358_rithackathon-arogya360-squadmatrix-activity-7443294430356381696-Ztrn',
      demo: 'https://smart-health-system-e3411.web.app/',
    }
  },
  {
    id: 'hackaura-2026',
    title: 'HackAura 2026',
    organizer: 'Somasekhar R. Kothiwale Institute of Technology, Nipani',
    date: '2026',
    duration: '24 Hours Hackathon',
    teamName: 'Web Wizards',
    achievement: 'Full Stack Domain Participants',
    summary: 'Arogya-Vahini turned a paper-heavy rural referral workflow into a secure, offline-first digital health vault.',
    problemStatement: 'Arogya-Vahini – The Universal Rural Referral & Health Vault. In rural areas, patients carry paper referral records from PHCs to district hospitals, which often get lost, delaying treatment.',
    problemContext: 'The challenge is not only digitization, but continuity of care in low-connectivity rural settings.',
    solutionOverview: 'A digital referral platform that digitizes the entire patient referral process using secure QR tokens, allowing specialists to instantly access patient history offline-first.',
    realWorldImpact: 'Helps reduce delays in treatment by preserving referral history and making patient information accessible where it matters most.',
    features: [
      'Digitizes entire patient referral process',
      'Secure QR tokens to store patient health summaries',
      'Instant access to complete patient history for specialists',
      'Offline-first architecture with automatic sync',
      'Multilingual support',
      'Text-to-speech for rural doctors'
    ],
    techStack: ['React.js', 'Firebase', 'Firestore', 'PWA architecture', 'QR workflow'],
    innovationPoints: [
      'QR-token based referral continuity',
      'Offline-first architecture for low-connectivity environments',
      'Accessibility support through multilingual and text-to-speech layers'
    ],
    uiUxHighlights: [
      'Simple information path for rural users',
      'Fast specialist access to health history',
      'PWA mindset for dependable field usage'
    ],
    developmentProcess: [
      'Translated the referral journey into a digital workflow.',
      'Focused on low-connectivity reliability before visual polish.',
      'Prepared a demo narrative around rural health impact and access.'
    ],
    stats: [
      { label: 'Duration', value: '24 Hours', detail: 'Hackathon sprint' },
      { label: 'Team', value: 'Web Wizards', detail: '4 builders' },
      { label: 'Focus', value: 'Referral Health Vault', detail: 'Rural healthcare' }
    ],
    heroImage: hackauraPreview,
    team: [
      { name: 'Shivani Mali', role: 'Team Leader' },
      { name: 'Gouri Belludi', role: 'Frontend Developer' },
      { name: 'Nipun Shah', role: 'Backend Developer' },
      { name: 'Rohan Umbare patil', role: 'Documentation' }
    ],
    gallery: [
      hackauraPreview,
      hackauraGallery1,
      hackauraGallery2,
      hackauraGallery3
    ],
    certificates: [
      hackauraCert
    ],
    learningOutcomes: [
      'Building solutions for real societal impact',
      'Implementing offline-first progressive web apps',
      'Integrating secure QR token generation and validation',
      'Collaborating effectively in a 24-hour time constraint'
    ],
    links: {
      linkedin: 'https://www.linkedin.com/posts/rohan-umbare-patil-76b971358_hackaura2026-hackathon-fullstackdevelopment-activity-7438793603398660096-QonG'
    }
  },
  {
    id: 'technovation-1-0',
    title: 'Mini Hackathon – Technovation 1.0',
    organizer: 'Dr. Bapuji Salunkhe Institute of Engineering & Technology (BSIET), Kolhapur',
    date: '2025',
    duration: 'Mini Hackathon',
    teamName: 'Innovators',
    achievement: 'Participant',
    summary: 'An AI-powered student feedback analyzer built to help educators turn open-ended comments into actionable insight.',
    problemStatement: 'Analyzing open-ended student feedback is challenging and time-consuming for educators.',
    problemContext: 'Feedback often contains rich signals, but manual review slows down the improvement loop for teachers and institutions.',
    solutionOverview: 'AI-Powered Student Feedback Analyzer for Educators, focused on leveraging Artificial Intelligence and NLP to analyze student feedback, detect sentiment, and generate actionable insights.',
    realWorldImpact: 'Helps educators identify what students feel, where courses can improve, and how to respond faster with data-backed decisions.',
    features: [
      'Natural Language Processing (NLP) integration',
      'Automated sentiment detection',
      'Actionable insights generation for improving teaching-learning process',
      'Dashboard for educators to track feedback'
    ],
    techStack: ['AI', 'NLP', 'Machine Learning', 'Education Technology', 'Dashboard UX'],
    innovationPoints: [
      'Sentiment-aware feedback analysis',
      'Actionable summarization for educators',
      'AI + NLP integration for academic context'
    ],
    uiUxHighlights: [
      'Clarity-first dashboard design',
      'Feedback-to-insight information flow',
      'Simple educator-friendly storytelling'
    ],
    developmentProcess: [
      'Started with the pain point of long manual feedback review.',
      'Built the NLP idea around sentiment detection and summarization.',
      'Shaped the interface to make educator decisions faster to scan.'
    ],
    stats: [
      { label: 'Duration', value: 'Mini Hackathon', detail: 'Short-form build' },
      { label: 'Team', value: 'Innovators', detail: '5 members' },
      { label: 'Focus', value: 'AI + NLP', detail: 'Education analytics' }
    ],
    heroImage: technovationPreview,
    team: [
      { name: 'Shivani Mali', role: 'Team Leader' },
      { name: 'Nipun Shah', role: 'Backend Developer' },
      { name: 'Gouri Belludi', role: 'Frontend Developer' },
      { name: 'Niharika Tiwari', role: 'App Developer' },
      { name: 'Rohan Umbare patil', role: 'Documentation' }
    ],
    gallery: [
      technovationPreview,
      technovationGallery1,
      technovationGallery2,
    ],
    certificates: [
      technovationHero
    ],
    learningOutcomes: [
      'Leveraging Artificial Intelligence and Natural Language Processing',
      'Solving real-world educational challenges',
      'Collaborating, innovating, and applying technical knowledge'
    ],
    links: {
      linkedin: 'https://www.linkedin.com/posts/rohan-umbare-patil-76b971358_ai-hackathon-nlp-activity-7393641436790853633-azvH'
    }
  },
  {
    id: 'techpravartan',
    title: 'Mini Hackathon “TECHPRAVARTAN”',
    organizer: 'Sanjay Bhokare Group of Institutes, Miraj',
    date: 'Recent',
    duration: 'Mini Hackathon',
    teamName: 'Team CSE',
    achievement: 'Winner Prize 🏆',
    summary: 'A prize-winning prototype that blended coding, creativity, and fast decision-making under a mini hackathon format.',
    problemStatement: 'Brainstorming innovative ideas to build a functional prototype addressing a specific domain challenge.',
    problemContext: 'The event asked teams to move from idea to working prototype quickly, with clarity of execution and a strong demo path.',
    solutionOverview: 'Built a functional prototype combining coding abilities, creativity, and problem-solving spirit.',
    realWorldImpact: 'Showed how a compact team can transform a domain challenge into a working concept and present it with confidence.',
    features: [
      'Brainstorming innovative ideas',
      'Building a functional prototype',
      'End-to-end execution'
    ],
    techStack: ['Innovation', 'Technology', 'Problem Solving', 'Rapid Prototyping'],
    innovationPoints: [
      'Fast prototype validation',
      'Creative problem framing',
      'Winner-level execution under time pressure'
    ],
    uiUxHighlights: [
      'Concise demo-oriented presentation',
      'Prototype-first thinking',
      'Clear problem-to-solution storytelling'
    ],
    developmentProcess: [
      'Brainstormed ideas quickly and narrowed to a functional prototype path.',
      'Balanced execution speed with visible demo quality.',
      'Prepared the final pitch around clarity, confidence, and problem fit.'
    ],
    stats: [
      { label: 'Duration', value: 'Mini Hackathon', detail: 'Rapid build format' },
      { label: 'Team', value: 'Team CSE', detail: 'Winning squad' },
      { label: 'Result', value: 'Winner Prize', detail: 'Prize-winning build' }
    ],
    heroImage: techpravartanPreview,
    team: [
      { name: 'Shivani Mali', role: 'Team Leader' },
      { name: 'Gouri Belludi', role: 'Frontend Developer' },
      { name: 'Nipun Shah', role: 'Backend Developer' },
      { name: 'Rohan Umbare patil', role: 'Documentation' }
    ],
    gallery: [
      techpravartanPreview,
      techpravartanGallery1,
      techpravartanGallery2,
      techpravartanGallery3,
      techpravartanGallery4,
      techpravartanGallery5
    ],
    certificates: [
      techpravartanHero
    ],
    learningOutcomes: [
      'Teamwork and creativity',
      'Problem-solving spirit',
      'Learning through building a functional prototype from scratch'
    ],
    links: {
      linkedin: 'https://www.linkedin.com/posts/rohan-umbare-patil-76b971358_hackathon-teamcse-innovation-activity-7384219231837454351-B0dZ'
    }
  }
]