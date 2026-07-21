export const projects = [
  {
    id: 'signbridge',
    number: '01',
    title: 'SignBridge AI',
    category: 'AI · Web Application',
    description:
      'An AI-powered communication bridge created for Deaf and hearing communities, combining accessible interaction with practical technology.',
    href: 'https://signbridge-app-6f7c4.web.app/',
    tags: ['React', 'Python', 'FastAPI', 'AI'],
    accent: '#d8ff3e',
    media: {
      type: 'image',
      src: 'signbridge-hero.jpg.png',
      alt: 'SignBridge AI website homepage',
    },
  },
  {
    id: 'hans-yati',
    number: '02',
    title: 'Hans & Yati',
    category: 'Motion · Digital Invitation',
    description:
      'An animated digital invitation designed to turn a personal announcement into a polished, memorable visual experience.',
    tags: ['Motion', 'Layout', 'Digital Media'],
    accent: '#ff6b4a',
    media: {
      type: 'video',
      src: 'hans_yati_card.mp4',
      alt: 'Animated Hans and Yati digital invitation',
    },
  },
  {
    id: 'identity-apparel',
    number: '03',
    title: 'Identity & Apparel',
    category: 'Branding · Sports Design',
    description:
      'A collection of sports identities, jersey concepts, and graphic systems built to give teams a distinct visual character.',
    tags: ['Photoshop', 'Illustrator', 'Apparel'],
    accent: '#82a7ff',
    media: {
      type: 'gallery',
      items: [
        { src: 'jersey2.jpg', alt: 'White and red custom football jersey' },
        { src: 'jersey3.jpg', alt: 'Turquoise patterned custom jersey' },
        { src: 'logo1.jpg', alt: 'Raja football club panther identity' },
        { src: 'logo2.jpg', alt: 'Predator football club identity' },
      ],
    },
  },
]

export const techStack = [
  { name: 'React', category: 'Frontend Framework', code: 'RE' },
  { name: 'Vite', category: 'Build Tool', code: 'VI' },
  { name: 'JavaScript', category: 'Language', code: 'JS' },
  { name: 'Python', category: 'Language', code: 'PY' },
  { name: 'FastAPI', category: 'Backend Framework', code: 'FA' },
  { name: 'AI Integration', category: 'Technology', code: 'AI' },
  { name: 'Photoshop', category: 'Creative Software', code: 'PS' },
  { name: 'Illustrator', category: 'Creative Software', code: 'IL' },
  { name: 'GitHub', category: 'Version Control', code: 'GH' },
  { name: 'Firebase', category: 'Deployment', code: 'FB' },
]

export const experience = [
  {
    period: '2025 — NOW',
    role: 'Aspiring Developer',
    company: 'Gamuda AI Academy',
    description:
      'An intensive technology pathway focused on modern web development and practical AI integration, including the SignBridge capstone project.',
  },
  {
    period: '2022 — 2024',
    role: 'Banquet Assistant',
    company: 'Raia Hotel',
    description:
      'Delivered reliable guest service and worked closely with a fast-moving team during professional events and functions.',
  },
  {
    period: '2021 — 2022',
    role: 'Shop Assistant',
    company: 'Walk-in & Shop',
    description:
      'Supported daily retail operations, sales, customer service, and inventory management.',
  },
]

export const services = [
  'Frontend Development',
  'AI Integration',
  'Visual Identity',
  'Apparel Design',
]
