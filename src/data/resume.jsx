import { Home, Briefcase, Code, Trophy, Mail, Globe } from 'lucide-react'
import fotoProfil from '../assets/foto-profil.png'

import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterIcon as Twitter } from '../components/icons'
import { 
  FaReact, 
  FaNodeJs, 
  FaPhp, 
  FaDocker, 
  FaGitAlt, 
  FaDatabase,
  FaFire
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiLaravel, 
  SiCodeigniter, 
  SiTailwindcss, 
  SiPostgresql, 
  SiMysql, 
  SiFramer 
} from 'react-icons/si'

export const DATA = {
  name: "Awank",
  initials: "AW",
  url: "https://github.com/awank",
  location: "Jakarta, Indonesia",
  description: "Web Developer & Software Engineer. I love building web applications and crafting clean user experiences.",
  summary: "At the end of 2022, I started focusing fulltime on building and scaling modern web applications. Passionate about frontend design, backend logic, and solving complex real-world problems. In the past, I've developed various systems ranging from e-commerce to management dashboards.",
  avatarUrl: fotoProfil,
  skills: [
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs }, // Default color
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "CodeIgniter 4", icon: SiCodeigniter, color: "#EF4223" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Firebase", icon: FaFire, color: "#FFCA28" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "REST API", icon: FaDatabase }, // Default color
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" }
  ],
  navbar: [
    { href: "#", icon: Home, label: "Home" },
    { href: "#work", icon: Briefcase, label: "Work" },
    { href: "#projects", icon: Code, label: "Projects" },
    { href: "#hackathons", icon: Trophy, label: "Hackathons" }
  ],
  contact: {
    email: "awank.dev@example.com",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/awank", icon: Github },
      LinkedIn: { name: "LinkedIn", url: "https://linkedin.com/in/awank", icon: Linkedin },
      X: { name: "X", url: "https://twitter.com/awank", icon: Twitter },
      Email: { name: "Email", url: "mailto:awank.dev@example.com", icon: Mail },
    }
  },
  work: [
    {
      company: "Tech Studio",
      href: "#",
      badges: [],
      location: "Jakarta, ID",
      title: "Full-Stack Web Developer",
      logoUrl: "",
      start: "Jan 2023",
      end: "Present",
      description: "Developed and maintained several full-stack applications using Next.js and Laravel. Integrated REST APIs, improved performance and built custom dynamic user interfaces for clients."
    },
    {
      company: "Freelance",
      href: "#",
      badges: ["Remote"],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "",
      start: "May 2021",
      end: "Dec 2022",
      description: "Built responsive frontend user interfaces and landed pages. Collaborated with designers to convert Figma designs into pixel-perfect Tailwind CSS code."
    }
  ],
  education: [
    {
      school: "University of Indonesia",
      href: "#",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "",
      start: "2018",
      end: "2022"
    }
  ],
  projects: [
    {
      title: "SIMKOS",
      href: "#",
      dates: "Jan 2024 - Mar 2024",
      active: true,
      description: "Sistem Informasi Kost — Full-stack boarding house management system with booking, payment tracking, tenant management, and reporting dashboard.",
      technologies: ["Laravel", "MySQL", "Tailwind CSS", "Chart.js"],
      links: [
        { type: "Website", href: "#", icon: Globe },
        { type: "Source", href: "#", icon: Github }
      ],
      image: ""
    },
    {
      title: "E-Commerce Dashboard",
      href: "#",
      dates: "Aug 2023 - Nov 2023",
      active: true,
      description: "Modern admin dashboard for managing products, orders, inventory, and real-time analytics with data visualization and export features.",
      technologies: ["Next.js", "Firebase", "TypeScript", "Recharts"],
      links: [
        { type: "Website", href: "#", icon: Globe },
        { type: "Source", href: "#", icon: Github }
      ],
      image: ""
    },
    {
      title: "Pixel Portfolio",
      href: "#",
      dates: "Jun 2024 - Present",
      active: true,
      description: "Personal portfolio with retro pixel-art theme, animated character, interactive folder navigation, and smooth transitions.",
      technologies: ["React.js", "Framer Motion", "Tailwind CSS", "Vite"],
      links: [
        { type: "Source", href: "#", icon: Github }
      ],
      image: ""
    }
  ],
  hackathons: [
    {
      title: "Tech Innovation Hackathon",
      dates: "October 2022",
      location: "Jakarta, Indonesia",
      description: "Built an open-source platform for local communities to track waste management. Won 1st place in the environment track.",
      image: "",
      links: [
        { title: "Source", icon: Github, href: "#" }
      ]
    },
    {
      title: "Open Source Days",
      dates: "July 2021",
      location: "Remote",
      description: "Contributed to multiple open-source repositories and developed an internal tool for analyzing code patterns in legacy codebases.",
      image: "",
      links: [
        { title: "Source", icon: Github, href: "#" }
      ]
    }
  ]
}
