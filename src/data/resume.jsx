import fotoProfil from '../assets/foto-profil.png'

import { GithubIcon as Github } from '../components/icons'
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaDatabase,
  FaFire,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiJavascript,
  SiLaravel,
  SiCodeigniter,
  SiTailwindcss,
  SiMysql,
  SiFlutter,
  SiDart,
  SiFigma
} from 'react-icons/si'

export const DATA = {
  name: "Awank",
  fullName: "Alwan Kapi Muntaha",
  initials: "AW",
  url: "https://github.com/alwankapi",
  location: "Jakarta, Indonesia",
  role: "Web Developer · Program Analyst · UI/UX Designer",
  description:
    "Information Technology student who loves building web applications, designing clean interfaces, and solving real problems with code.",
  /* Inline links are written as [label](url) or [label|action|color](url) and rendered by AboutSection. */
  summary:
    "I'm an Information Technology student based in Jakarta, active as a [Web Developer|highlight|#6F99B2](https://github.com/alwankapi), [Program Analyst|underline|#FF9800](https://github.com/alwankapi), and [UI/UX Designer|underline|#FF9800](https://instagram.com/alwankafi_). I enjoy building practical information systems that solve real problems from PHP frameworks to modern React frontends, and mobile apps with Flutter. My goal is simple: keep learning, build real projects, and improve step by step.",
  avatarUrl: fotoProfil,
  github: "alwankapi",
  skills: [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "CodeIgniter 4", icon: SiCodeigniter, color: "#EF4223" },
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Firebase", icon: FaFire, color: "#FFCA28" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Dart", icon: SiDart, color: "#0175C2" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" }
  ],
  navbar: [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#github", label: "GitHub" }
  ],
  contact: {
    email: "alwankapi@gmail.com",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/alwankapi" },
      LinkedIn: { name: "LinkedIn", url: "https://www.linkedin.com/in/alwan-kapi-muntaha-ba6619425" },
      Instagram: { name: "Instagram", url: "https://instagram.com/alwankafi_" },
      Email: { name: "Email", url: "mailto:alwankapi@gmail.com" }
    }
  },
  education: [
    {
      school: "Universitas Bina Sarana Informatika (UBSI)",
      href: "https://www.bsi.ac.id",
      degree: "Informatics (Informatika)",
      logoUrl: "https://bsi.today/wp-content/uploads/2021/05/logo-bsi.png",
      start: "2023",
      end: "Present"
    },
    {
      school: "PeTIK Jombang",
      href: "https://share.google/FTzsepuNHKsJTMCoU",
      degree: "Digital Marketing",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLHncEMwBOefy5tvq0dmO2uqtxzbXpFlljVPpme4DXGKvtWRhaZ6tmMA&s=10",
      start: "2022",
      end: "2023"
    },
    {
      school: "Darul'Amal Boarding School",
      href: "https://darulamal.id/",
      degree: "Ilmu Pengetahuan Alam (IPA)",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGlGSlUED6FVjGYmVnwxTQI5CYQyB343n9EK3qgw_TQ&s=10",
      start: "2016",
      end: "2022"
    }
  ],
  projects: [
    {
      title: "SIMKOS — Sistem Informasi Manajemen Kos",
      href: "https://github.com/alwankapi",
      dates: "2024 - Present",
      active: true,
      description:
        "Full-stack boarding house management system built with CodeIgniter 4. Handles rooms, tenant data, payment records, and an admin dashboard using the Waterfall method.",
      technologies: ["CodeIgniter 4", "PHP", "MySQL", "Tailwind CSS"],
      links: [{ type: "Source", href: "https://github.com/alwankapi", icon: Github }],
      image: ""
    },
    {
      title: "Perpustakaan Web",
      href: "https://github.com/alwankapi/perpustakaan-web",
      dates: "2024",
      active: true,
      description:
        "Library management web application built with CodeIgniter 4 — book cataloguing, borrowing records, and member management in a clean admin interface.",
      technologies: ["CodeIgniter 4", "PHP", "MySQL", "Tailwind CSS"],
      links: [{ type: "Source", href: "https://github.com/alwankapi/perpustakaan-web", icon: Github }],
      image: ""
    },
    {
      title: "Lost & Found App",
      href: "https://github.com/alwankapi",
      dates: "2024",
      active: true,
      description:
        "Flutter mobile app for reporting lost and found items, with login, Firebase Auth, Cloud Firestore, and admin verification before reports go live.",
      technologies: ["Flutter", "Firebase Auth", "Cloud Firestore"],
      links: [{ type: "Source", href: "https://github.com/alwankapi", icon: Github }],
      image: ""
    },
    {
      title: "Vigenesia App",
      href: "https://github.com/alwankapi",
      dates: "2024",
      active: true,
      description:
        "Mobile application refined with a user-centered design approach — improved UI/UX, better user flows, and Firebase backend integration.",
      technologies: ["Flutter", "Dart", "Firebase"],
      links: [{ type: "Source", href: "https://github.com/alwankapi", icon: Github }],
      image: ""
    }
  ],
  /* TODO: Replace the entries below with your real certificates. */
  certifications: [
    {
      title: "IDCamp — Website Development",
      organization: "Indosat Ooredoo Hutchison × Dicoding",
      year: "2024",
      description:
        "Completed the front-end and back-end tracks, building real web projects and finishing the final assignment on modern web tooling.",
      href: "https://github.com/alwankapi"
    },
    {
      title: "Full-Stack Web Development",
      organization: "Dicoding",
      year: "2023",
      description:
        "Learned the fundamentals of modern web development — HTML, CSS, JavaScript, and building responsive, accessible interfaces.",
      href: "https://github.com/alwankapi"
    },
    {
      title: "Flutter Fundamental",
      organization: "Dicoding",
      year: "2025",
      description:
        "Explored the Flutter framework and Dart fundamentals, applying widget composition and state management in real mobile apps.",
      href: "https://github.com/alwankapi"
    }
  ]
}
