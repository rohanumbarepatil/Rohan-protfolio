import type {
  Achievement,
  CertificationItem,
  EducationItem,
  GalleryItem,
  NavItem,
  ProjectItem,
  SectionId,
  SkillGroup,
  SocialLink,
  TimelineEntry,
} from '@/types/portfolio'

export const sectionIds: SectionId[] = [
  'home',
  'about',
  'education',
  'projects',
  'experience',
  'achievements',
  'certifications',
  'gallery',
  'resume',
  'contact',
]

export const navigation: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rohan-umbare-patil-76b971358/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/rohan1785', icon: 'github' },
  { label: 'Twitter', href: 'https://x.com/RohanUpatil09', icon: 'twitter' },
  { label: 'Email', href: 'mailto:umbarepatilrohan@gmail.com', icon: 'mail' },
]

export const heroPhrases = ['Modern', 'Scalable', 'Web Applications', 'Debugging', 'Creative UI']

export const aboutHighlights = [
  'Driven By Code',
  'React Dev',
  'Creative UI',
  'Debugging',
  'AI Automation',
]

export const aboutNarrative = [
  'I specialize in creating dynamic and responsive web applications while constantly enhancing my frontend and backend development skills.',
  'I am based in Earth, and open to remote work worldwide.',
  'I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.',
]

export const hobbies = [
  'READING BOOKS',
  'PUBLIC SPEAKING',
  'WRITING',
  'BUILDING PROJECTS',
  'EXPLORING NEW SKILLS',
  'TRAVELLING',
  'PLAYING GAMES',
  'EXPLORING NEW PLACES',
]

export const timeline: TimelineEntry[] = [
  {
    title: 'Magazine Technical Incharge',
    organization: 'SANJAY GHODAWAT INSTITUTE',
    period: 'Present',
    description: 'Leading technical content planning and magazine operations while ensuring smooth review and publishing coordination.',
  },
  {
    title: 'TechnoVerse Event Coordinator',
    organization: 'TECHNICAL EVENT',
    period: 'Feb 2026 – March 2026',
    description: 'Coordinated event planning, team collaboration, and on-ground execution to deliver a well-managed technical event experience.',
  },
  {
    title: 'Social Responsibility Initiative',
    organization: 'BAL KALYAN SANKUL, KOLHAPUR',
    period: 'Nov 2025',
    description: 'Participated in a social outreach visit focused on community interaction, support, and meaningful engagement activities.',
  },
  {
    title: 'Core Management Team – ArguMind Event',
    organization: 'TECHNICAL EVENT',
    period: 'Nov 2025',
    description: 'Supported end-to-end event coordination by handling operations, planning assistance, and smooth technical event execution.',
  },
  {
    title: 'Executive Member',
    organization: 'COMPUTER SCIENCE ENGINEERING STUDENT ASSOCIATION (CSESA)',
    period: 'Oct 2025',
    description: "Contributed to technical initiatives and student engagement activities while supporting the association's organizational goals.",
  },
  {
    title: 'Internshala Student Partner',
    organization: 'INTERNSHALA (ISP)',
    period: '22 Jul 2025 – 29 Aug 2025',
    description: 'Promoted Internshala opportunities on campus by running outreach efforts, awareness campaigns, and student engagement activities.',
  },
  {
    title: 'Eureka 2K25 Volunteer',
    organization: 'TECHNICAL EVENT',
    period: 'Apr 2025',
    description: 'Assisted with event coordination and execution by supporting volunteer tasks, logistics, and technical event management.',
  },
]

export const achievements: Achievement[] = [
  {
    title: 'Mini Hackathon Winner',
    meta: 'Tech Event • Oct 2025',
    detail: 'Secured first place in the intensive competitive coding Mini Hackathon.',
    image: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Hackton%20Winner.jpg',
    alt: 'Mini Hackathon Winner',
  },
]

export const projects: ProjectItem[] = [
  {
    slug: 'smart-health-care-system',
    title: 'Arogya360 Smart Health Management System',
    category: 'Full Stack Healthcare Platform',
    description: 'A web-based smart healthcare platform designed to simplify and digitize essential healthcare services through a centralized, user-friendly digital interface.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Flask', 'Firebase', 'GitHub', 'VS Code', 'Firebase Hosting'],
    links: [
      { label: 'GitHub', href: 'https://github.com/rohan1785/Smart-Health-Care-System' },
      { label: 'Read More', href: '/projects/smart-health-care-system' },
    ],
    about: 'Arogya360 helps patients, doctors, clinics, and hospitals access essential healthcare services more efficiently. The system focuses on usability, accessibility, and digital healthcare awareness while creating a strong foundation for a complete healthcare ecosystem.',
    objectives: [
      'Provide a centralized healthcare management platform.',
      'Simplify appointment booking and patient interaction.',
      'Improve accessibility of healthcare services.',
      'Reduce manual paperwork and waiting time.',
      'Promote digital health awareness and efficiency.',
    ],
    keyFeatures: [
      'Secure login and registration system.',
      'Role-based access for users and admins.',
      'Appointment booking flow for scheduling with doctors.',
      'Structured healthcare services interface.',
      'Responsive web design for desktop, tablet, and mobile.',
      'Clean dashboard layout focused on usability.',
    ],
    learningOutcomes: [
      'Hands-on full-stack development experience.',
      'Flask integration with frontend UI.',
      'NoSQL database handling using MongoDB/Firebase.',
      'Improved UI/UX thinking.',
      'Firebase deployment experience.',
      'Real-world healthcare problem-solving understanding.',
    ],
    futureEnhancements: [
      'Doctor availability scheduling',
      'Online consultation system',
      'Digital prescriptions',
      'Payment gateway integration',
      'AI symptom checker',
      'Health analytics dashboard',
      'SMS/email appointment reminders',
      'JWT authentication',
      'Android/iOS application',
      'Multi-language support',
    ],
  },
  {
    slug: 'taskflow',
    title: 'TaskFlow Simple To Do List Manager',
    category: 'Frontend Productivity Application',
    description: 'A lightweight web-based to-do list application designed to help users manage daily tasks efficiently through a simple and distraction-free interface.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Netlify', 'GitHub'],
    links: [
      { label: 'GitHub', href: 'https://github.com/rohan1785/Ghabit' },
      { label: 'Read More', href: '/projects/taskflow' },
    ],
    about: 'TaskFlow is designed for students, developers, professionals, and individuals who want a fast, simple task manager without the complexity of larger productivity platforms.',
    objectives: [
      'Provide a simple task management solution.',
      'Enable users to track daily activities easily.',
      'Improve productivity through task organization.',
      'Offer a clean and fast user experience.',
      'Reduce dependency on complex productivity apps.',
    ],
    keyFeatures: [
      'Dynamic task creation with instant display.',
      'Structured task listing for readability.',
      'Lightweight clutter-free interface.',
      'Real-time task handling.',
      'Productivity-focused workflow.',
    ],
    learningOutcomes: [
      'DOM manipulation understanding.',
      'Interactive UI building using JavaScript.',
      'Frontend state handling basics.',
      'Static website deployment using Netlify.',
      'Minimal UX design understanding.',
    ],
    futureEnhancements: [
      'Task completion checkbox system',
      'Task deletion/editing',
      'Due dates/reminders',
      'Priority categories',
      'LocalStorage persistence',
      'Backend cloud sync',
      'Drag-and-drop support',
      'Dark mode',
      'Mobile-first optimization',
      'Authentication system',
      'Multi-device sync',
    ],
  },
]

export const gallery: GalleryItem[] = [
  {
    title: 'Argue mind',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Argue%20mind.jpg',
    alt: 'Argue mind',
  },
  {
    title: 'ASGO',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/ASGO.JPG',
    alt: 'ASGO',
  },
  {
    title: 'Association Member',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Association%20Member.jpg',
    alt: 'Association Member',
  },
  {
    title: 'Asure Workshop',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Asure%20Workshop.jpg',
    alt: 'Asure Workshop',
  },
  {
    title: 'Building',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Building.jpg',
    alt: 'Building',
  },
  {
    title: 'Certificate',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Certificate.jpg',
    alt: 'Certificate',
  },
  {
    title: 'CSESA Inaugration',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/CSESA%20Inaugration.jpg',
    alt: 'CSESA Inaugration',
  },
  {
    title: 'CSESA Member',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/CSESA%20Member.jpg',
    alt: 'CSESA Member',
  },
  {
    title: 'Discussion',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Discussion.JPG',
    alt: 'Discussion',
  },
  {
    title: 'Engg. Day',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Engg.%20Day.webp',
    alt: 'Engg. Day',
  },
  {
    title: 'Eureka25',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Eureka25.JPG',
    alt: 'Eureka25',
  },
  {
    title: 'Fasion Show Win',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Fasion%20Show%20Win.jpg',
    alt: 'Fasion Show Win',
  },
  {
    title: 'Foundation day 25',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Foundation%20day%2025.jpg',
    alt: 'Foundation day 25',
  },
  {
    title: 'Foundation Day',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Foundation%20Day.jpg',
    alt: 'Foundation Day',
  },
  {
    title: 'Hackaura Hackthon',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Hackaura_Hackthon.JPG',
    alt: 'Hackaura Hackthon',
  },
  {
    title: 'Hackton team',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Hackton%20team.jpg',
    alt: 'Hackton team',
  },
  {
    title: 'Hackton Win',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Hackton%20Win.jpg',
    alt: 'Hackton Win',
  },
  {
    title: 'Handprint',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Handprint.jpg',
    alt: 'Handprint',
  },
  {
    title: 'Idea Pitching',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Idea%20%20Pitching.JPG',
    alt: 'Idea Pitching',
  },
  {
    title: 'Idea Pitch',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Idea%20Pitch.jpg',
    alt: 'Idea Pitch',
  },
  {
    title: 'Inoquest 25',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Inoquest%2025.jpg',
    alt: 'Inoquest 25',
  },
  {
    title: 'inoquest 2k25',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/inoquest%202k25.jpg',
    alt: 'inoquest 2k25',
  },
  {
    title: 'Inoquest',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Inoquest.jpg',
    alt: 'Inoquest',
  },
  {
    title: 'Mini Hackton',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Mini%20Hackton.jpg',
    alt: 'Mini Hackton',
  },
  {
    title: 'Presentation',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Presentation.jpg',
    alt: 'Presentation',
  },
  {
    title: 'Sports 2k25',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Sports%202k25.jpg',
    alt: 'Sports 2k25',
  },
  {
    title: 'Stall Event',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Stall%20Event.JPG',
    alt: 'Stall Event',
  },
  {
    title: 'TECHNOVERSE',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/TECHNOVERSE.jpg',
    alt: 'TECHNOVERSE',
  },
  {
    title: 'Tecno Team',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Tecno_Team.jpeg',
    alt: 'Tecno Team',
  },
  {
    title: 'The Event Volunteers Eureka',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/The_Event_Volunteers_Eureka.jpg',
    alt: 'The Event Volunteers Eureka',
  },
  {
    title: 'The Pitch',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/THe_Pitch.jpeg',
    alt: 'The Pitch',
  },
  {
    title: 'umang 2k25',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/umang%202k25.jpg',
    alt: 'umang 2k25',
  },
  {
    title: 'Umang',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Umang.jpg',
    alt: 'Umang',
  },
  {
    title: 'Visit Bal Sankul',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Visit%20Bal%20Sankul.jpg',
    alt: 'Visit Bal Sankul',
  },
  {
    title: 'Git & Github Session',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Git%20&%20Github%20Session.jpeg',
    alt: 'Git & Github Session',
  },
  {
    title: 'Git Github Session',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Git%20Github%20Session.jpeg',
    alt: 'Git Github Session',
  },
  {
    title: 'Magzine Commitee',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Magzine%20Commitee.jpeg',
    alt: 'Magzine Commitee',
  },
  {
    title: 'Magzine Photoshoot',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Magzine%20Photoshoot.jpeg',
    alt: 'Magzine Photoshoot',
  },
  {
    title: 'Offer Letter',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Offer_Letter.jpg',
    alt: 'Offer Letter',
  },
  {
    title: 'Project Pitch',
    src: 'https://rohans-portfolio-mu.vercel.app/website_gallery/Project%20Pitch.jpeg',
    alt: 'Project Pitch',
  },
]

export const skills: SkillGroup[] = [
  { title: 'Languages', icon: 'layout', items: ['Python', 'C Programming', 'Java', 'JavaScript'] },
  { title: 'Frontend', icon: 'server', items: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Vite'] },
  { title: 'Backend & APIs', icon: 'spark', items: ['FastAPI', 'Flask', 'Postman'] },
  { title: 'Data & Systems', icon: 'cloud', items: ['MongoDB', 'MySQL', 'Linux', 'Microsoft'] },
  { title: 'Versioning', icon: 'database', items: ['Git', 'GitHub'] },
  { title: 'Practice', icon: 'tool', items: ['Problem Solving', 'Critical Thinking', 'Communication'] },
]

export const education: EducationItem[] = [
  {
    title: 'B.Tech in Computer Science Engineering',
    institution: 'Sanjay Ghodawat Institute, Kolhapur',
    period: '2024 - 2028',
    grade: 'Grade: Current',
    keySkills: ['Data Structures', 'Problem Solving', 'Critical Thinking'],
  },
  {
    title: 'Higher Secondary (12th Grade, PCMB)',
    institution: 'Walchand College Of Arts And Science, Solapur',
    period: '—',
    grade: 'Grade: 60.2%',
    keySkills: ['Physics', 'Chemistry', 'Mathematics'],
  },
  {
    title: 'Secondary School (10th Grade)',
    institution: 'Vasantrao Gopinath Patil High School Nanduri, Tulajapur',
    period: '—',
    grade: 'Grade: 89.80%',
    keySkills: ['Communication', 'Science'],
  },
]

export const certifications: CertificationItem[] = [
  {
    title: 'Course Certifications',
    meta: 'Various Platforms • 2023 - 2025',
    skills: ['AI', 'Cloud', 'Web Development', 'Data Analytics', 'Cybersecurity'],
    count: '14 Certificates inside',
    image: 'https://rohans-portfolio-mu.vercel.app/assets/Thumbnails/Course_Completion.jpeg',
    alt: 'Course Certifications',
  },
  {
    title: 'Internship Certificates',
    meta: 'Alfido Tech, Cognifyz, Internshala • 2025',
    skills: ['C/C++', 'Data Science', 'Campus Outreach'],
    count: '3 Certificates inside',
    image: 'https://rohans-portfolio-mu.vercel.app/assets/Thumbnails/Internship_Certificates.jpeg',
    alt: 'Internship Certificates',
  },
  {
    title: 'Technical Events Certificates',
    meta: 'Various Technical Events • 2024 - 2025',
    skills: ['Hackathons', 'Workshops', 'Coding Competitions', 'Event Coordination'],
    count: '9 Certificates inside',
    image: 'https://rohans-portfolio-mu.vercel.app/assets/Thumbnails/Technical_Events_Certificates.jpeg',
    alt: 'Technical Events Certificates',
  },
]
