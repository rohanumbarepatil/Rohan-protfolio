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

// Thumbnails
import thumbCourse from '@/assets/Thumbnails/Course_Completion.jpeg'
import thumbInternship from '@/assets/Thumbnails/Internship_Certificates.jpeg'
import thumbTechEvents from '@/assets/Thumbnails/Technical_Events_Certificates.jpeg'

// Achievement
import hacktonWinner from '@/assets/website_gallery/Hackton Winner.jpg'

// Gallery
import argueMind from '@/assets/website_gallery/Argue mind.jpg'
import asgo from '@/assets/website_gallery/ASGO.JPG'
import associationMember from '@/assets/website_gallery/Association Member.jpg'
import asureWorkshop from '@/assets/website_gallery/Asure Workshop.jpg'
import building from '@/assets/website_gallery/Building.jpg'
import certificate from '@/assets/website_gallery/Certificate.jpg'
import csesaInaugration from '@/assets/website_gallery/CSESA Inaugration.jpg'
import csesaMember from '@/assets/website_gallery/CSESA Member.jpg'
import discussion from '@/assets/website_gallery/Discussion.JPG'
import enggDay from '@/assets/website_gallery/Engg. Day.webp'
import fasionShowWin from '@/assets/website_gallery/Fasion Show Win.jpg'
import foundationDay25 from '@/assets/website_gallery/Foundation day 25.jpg'
import foundationDay from '@/assets/website_gallery/Foundation Day.jpg'
import hackauraHackthon from '@/assets/website_gallery/Hackaura_Hackthon.JPG'
import hacktonTeam from '@/assets/website_gallery/Hackton team.jpg'
import hacktonWin from '@/assets/website_gallery/Hackton Win.jpg'
import handprint from '@/assets/website_gallery/Handprint.jpg'
import ideaPitchingDouble from '@/assets/website_gallery/Idea  Pitching.JPG'
import ideaPitch from '@/assets/website_gallery/Idea Pitch.jpg'
import inoquest25 from '@/assets/website_gallery/Inoquest 25.jpg'
import inoquest2k25 from '@/assets/website_gallery/inoquest 2k25.jpg'
import inoquest from '@/assets/website_gallery/Inoquest.jpg'
import miniHackton from '@/assets/website_gallery/Mini Hackton.jpg'
import presentation from '@/assets/website_gallery/Presentation.jpg'
import sports2k25 from '@/assets/website_gallery/Sports 2k25.jpg'
import stallEvent from '@/assets/website_gallery/Stall Event.JPG'
import technoverse from '@/assets/website_gallery/TECHNOVERSE.jpg'
import tecnoTeam from '@/assets/website_gallery/Tecno_Team.jpeg'
import theEventVolunteers from '@/assets/website_gallery/The_Event_Volunteers_Eureka.jpg'
import thePitch from '@/assets/website_gallery/THe_Pitch.jpeg'
import umang2k25 from '@/assets/website_gallery/umang 2k25.jpg'
import umang from '@/assets/website_gallery/Umang.jpg'
import visitBalSankul from '@/assets/website_gallery/Visit Bal Sankul.jpg'
import gitGithubSession from '@/assets/website_gallery/Git & Github Session.jpeg'
import gitGithubSession2 from '@/assets/website_gallery/Git Github Session.jpeg'
import magzineCommitee from '@/assets/website_gallery/Magzine Commitee.jpeg'
import magzinePhotoshoot from '@/assets/website_gallery/Magzine Photoshoot.jpeg'
import offerLetter from '@/assets/website_gallery/Offer_Letter.jpg'
import projectPitch from '@/assets/website_gallery/Project Pitch.jpeg'

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
    image: hacktonWinner,
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
  { title: 'Argue mind', src: argueMind, alt: 'Argue mind' },
  { title: 'ASGO', src: asgo, alt: 'ASGO' },
  { title: 'Association Member', src: associationMember, alt: 'Association Member' },
  { title: 'Asure Workshop', src: asureWorkshop, alt: 'Asure Workshop' },
  { title: 'Building', src: building, alt: 'Building' },
  { title: 'Certificate', src: certificate, alt: 'Certificate' },
  { title: 'CSESA Inaugration', src: csesaInaugration, alt: 'CSESA Inaugration' },
  { title: 'CSESA Member', src: csesaMember, alt: 'CSESA Member' },
  { title: 'Discussion', src: discussion, alt: 'Discussion' },
  { title: 'Engg. Day', src: enggDay, alt: 'Engg. Day' },
  { title: 'Fasion Show Win', src: fasionShowWin, alt: 'Fasion Show Win' },
  { title: 'Foundation day 25', src: foundationDay25, alt: 'Foundation day 25' },
  { title: 'Foundation Day', src: foundationDay, alt: 'Foundation Day' },
  { title: 'Hackaura Hackthon', src: hackauraHackthon, alt: 'Hackaura Hackthon' },
  { title: 'Hackton team', src: hacktonTeam, alt: 'Hackton team' },
  { title: 'Hackton Win', src: hacktonWin, alt: 'Hackton Win' },
  { title: 'Handprint', src: handprint, alt: 'Handprint' },
  { title: 'Idea Pitching', src: ideaPitchingDouble, alt: 'Idea Pitching' },
  { title: 'Idea Pitch', src: ideaPitch, alt: 'Idea Pitch' },
  { title: 'Inoquest 25', src: inoquest25, alt: 'Inoquest 25' },
  { title: 'inoquest 2k25', src: inoquest2k25, alt: 'inoquest 2k25' },
  { title: 'Inoquest', src: inoquest, alt: 'Inoquest' },
  { title: 'Mini Hackton', src: miniHackton, alt: 'Mini Hackton' },
  { title: 'Presentation', src: presentation, alt: 'Presentation' },
  { title: 'Sports 2k25', src: sports2k25, alt: 'Sports 2k25' },
  { title: 'Stall Event', src: stallEvent, alt: 'Stall Event' },
  { title: 'TECHNOVERSE', src: technoverse, alt: 'TECHNOVERSE' },
  { title: 'Tecno Team', src: tecnoTeam, alt: 'Tecno Team' },
  { title: 'The Event Volunteers Eureka', src: theEventVolunteers, alt: 'The Event Volunteers Eureka' },
  { title: 'The Pitch', src: thePitch, alt: 'The Pitch' },
  { title: 'umang 2k25', src: umang2k25, alt: 'umang 2k25' },
  { title: 'Umang', src: umang, alt: 'Umang' },
  { title: 'Visit Bal Sankul', src: visitBalSankul, alt: 'Visit Bal Sankul' },
  { title: 'Git & Github Session', src: gitGithubSession, alt: 'Git & Github Session' },
  { title: 'Git Github Session', src: gitGithubSession2, alt: 'Git Github Session' },
  { title: 'Magzine Commitee', src: magzineCommitee, alt: 'Magzine Commitee' },
  { title: 'Magzine Photoshoot', src: magzinePhotoshoot, alt: 'Magzine Photoshoot' },
  { title: 'Offer Letter', src: offerLetter, alt: 'Offer Letter' },
  { title: 'Project Pitch', src: projectPitch, alt: 'Project Pitch' },
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
    image: thumbCourse,
    alt: 'Course Certifications',
  },
  {
    title: 'Internship Certificates',
    meta: 'Alfido Tech, Cognifyz, Internshala • 2025',
    skills: ['C/C++', 'Data Science', 'Campus Outreach'],
    count: '3 Certificates inside',
    image: thumbInternship,
    alt: 'Internship Certificates',
  },
  {
    title: 'Technical Events Certificates',
    meta: 'Various Technical Events • 2024 - 2025',
    skills: ['Hackathons', 'Workshops', 'Coding Competitions', 'Event Coordination'],
    count: '9 Certificates inside',
    image: thumbTechEvents,
    alt: 'Technical Events Certificates',
  },
]
