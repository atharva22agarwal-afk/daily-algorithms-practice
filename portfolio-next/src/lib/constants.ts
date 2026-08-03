export const SITE = {
  name: "Atharva Agarwal",
  title: "Full-Stack & AI Developer",
  tagline: "Building intelligent web experiences with React, Node.js, and Generative AI.",
  email: "atharva22agarwal@gmail.com",
  phone: "+91 7073646599",
  location: "Jaipur, Rajasthan, India",
  linkedin: "https://linkedin.com/in/atharva-agrawal-18365a380",
  github: "https://github.com/atharva22agarwal-afk",
  portfolio: "https://my-portfolio-chi-nine-47.vercel.app",
  resumeUrl: "/resume.pdf",
};

export const ABOUT = {
  summary:
    "First-year BCA student at BIT Mesra with hands-on experience building AI-powered full-stack applications and scalable web solutions. Skilled in Python, JavaScript, React.js, Node.js, PostgreSQL, and Generative AI tools. Built NewsMind.AI — a real-time news intelligence platform using hybrid LLM architecture. Passionate about software engineering, AI development, and solving real-world problems through impactful technology.",
};

export const PROJECTS = [
  {
    id: "newsmind",
    title: "NewsMind.AI",
    subtitle: "AI-Powered News Intelligence Platform",
    description:
      "Built a real-time AI news analysis platform using hybrid LLM architecture with Llama and Gemini models. Implemented forensic bias detection by analysing omission, entropy, and content density across sources. Developed a live debate engine using Socket.io with real-time scoring based on logic and evidence. Designed scalable backend APIs using Node.js, Express.js, and PostgreSQL.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Socket.io", "Llama", "Gemini", "REST APIs"],
    liveUrl: "https://news-mind-ai-4gdx.onrender.com",
    githubUrl: "https://github.com/atharva22agarwal-afk/news-mind.ai",
    color: "#6366f1",
  },
  {
    id: "lumina",
    title: "Lumina",
    subtitle: "AI-Powered Personal Wellness Dashboard",
    description:
      "Developed a comprehensive wellness platform combining affirmations, AI-guided meditation, journaling, focus timers, mood tracking, and vision boards. Integrated Groq AI API for personalized meditation script generation with offline fallback. Built reusable React components with Framer Motion animations. Designed calming spiritual UI with Playfair Display typography and glassmorphism effects.",
    tech: ["React.js", "Groq AI", "Framer Motion", "Tailwind CSS", "localStorage"],
    liveUrl: "https://luminaa-phi.vercel.app/",
    githubUrl: "https://github.com/atharva22agarwal-afk/luminaa.git",
    color: "#a78bfa",
  },
];

export const SKILLS = {
  languages: [
    { name: "Python", icon: "python" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Java", icon: "java" },
    { name: "C++", icon: "cpp" },
    { name: "C", icon: "c" },
  ],
  frontend: [
    { name: "React.js", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "Bootstrap", icon: "bootstrap" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "REST APIs", icon: "rest" },
  ],
  aiGenai: [
    { name: "LLM Integration", icon: "llm" },
    { name: "Prompt Engineering", icon: "prompt" },
    { name: "Gemini API", icon: "gemini" },
    { name: "Claude API", icon: "claude" },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
    { name: "Postman", icon: "postman" },
    { name: "Vercel", icon: "vercel" },
    { name: "Socket.io", icon: "socketio" },
  ],
  learning: [
    { name: "Docker", icon: "docker" },
    { name: "TypeScript", icon: "typescript" },
  ],
};

export const EXPERIENCE = [
  {
    title: "Blog Writing Intern",
    company: "InAmigos Foundation",
    period: "Nov 2025 - Dec 2025",
    type: "Remote",
    bullets: [
      "Authored SEO-optimised blogs on social impact topics, improving engagement and online visibility",
      "Collaborated with the content team to align articles with outreach campaigns and audience goals",
      "Applied research and content optimisation techniques to improve readability and search performance",
    ],
  },
  {
    title: "BCA Undergraduate",
    company: "BIT Mesra, Jaipur Campus",
    period: "2025 - Present",
    type: "Full-time",
    bullets: [
      "Technical Volunteer at college events",
      "Participant in 'Road to AI' programme",
      "Developing Full Stack and AI skills",
    ],
  },
  {
    title: "Senior Secondary (CBSE)",
    company: "St. Anselm's North City School",
    period: "2025",
    type: "Education",
    bullets: [
      "Commerce Stream — Score: 80%",
      "Led school drama scripts teams",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Web Development Training",
    issuer: "Samyak, Jaipur",
    image: "/images/Atharva Agarwal.png",
  },
  {
    title: "Python Programming Training",
    issuer: "Samyak, Jaipur",
    image: "/images/Atharva Agarwal.png",
  },
  {
    title: "JavaScript Training",
    issuer: "Samyak, Jaipur",
    image: "/images/Atharva Agarwal.png",
  },
  {
    title: "C Programming Training",
    issuer: "Samyak, Jaipur",
    image: "/images/Atharva Agarwal.png",
  },
  {
    title: "Microsoft GitHub Foundations",
    issuer: "In Progress",
    image: "/images/Atharva Agarwal.png",
    inProgress: true,
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
