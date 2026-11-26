import fotoProfil from '../assets/foto-profil-hover.png'
import simkosVideo from '../assets/simkos thubnail.mp4'

import { GithubIcon as Github } from '../components/icons'
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
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
  SiFigma,
  SiFirebase
} from 'react-icons/si'

export const DATA = {
  name: "Alwan Kapi Muntaha",
  fullName: "Alwan Kapi Muntaha",
  initials: "AW",
  url: "https://github.com/alwankapi",
  location: "Jakarta, Indonesia",
  role: "Web Developer",
  description:
    "Information Technology student who loves building web applications, designing clean interfaces, and solving real problems with code.",
  /* Inline links are written as [label](url) or [label|action|color](url) and rendered by AboutSection. */
  summary:
    "I'm an Information Technology student based in Jakarta, active as a [Web Developer|highlight|#6F99B2](https://github.com/alwankapi), [Program Analyst|underline|#FF9800](https://github.com/alwankapi), and [UI/UX Designer|underline|#FF9800](https://instagram.com/alwankafi_). I enjoy building practical information systems that solve real problems from PHP frameworks to modern React frontends, and mobile apps with Flutter. My goal is simple: keep learning, build real projects, and improve step by step.",
  avatarUrl: fotoProfil,
  github: "alwankapi",
  music: {
    title: "DJ Di Cari Onty Onty",
    artist: "BORLEN RMX TEAM",
    src: "/music.mp3",
    youtubeUrl: "https://youtu.be/uJNYDgSpRWU",
  },
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
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
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
      technologies: [
        { name: "CodeIgniter 4", icon: SiCodeigniter, color: "#EF4223" },
        { name: "PHP", icon: FaPhp, color: "#777BB4" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
      ],
      links: [{ type: "Source", href: "https://github.com/alwankapi", icon: Github }],
      image: "",
      video: simkosVideo,
      url: "simkos.app"
    },
    {
      title: "Perpustakaan Web",
      href: "https://github.com/alwankapi/perpustakaan-web",
      dates: "2024",
      active: true,
      description:
        "Library management web application built with CodeIgniter 4 — book cataloguing, borrowing records, and member management in a clean admin interface.",
      technologies: [
        { name: "CodeIgniter 4", icon: SiCodeigniter, color: "#EF4223" },
        { name: "PHP", icon: FaPhp, color: "#777BB4" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
      ],
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
      technologies: [
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Firebase Auth", icon: SiFirebase, color: "#FFCA28" },
        { name: "Cloud Firestore", icon: SiFirebase, color: "#FFA000" }
      ],
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
      technologies: [
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Dart", icon: SiDart, color: "#0175C2" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
      ],
      links: [{ type: "Source", href: "https://github.com/alwankapi", icon: Github }],
      image: ""
    }
  ],
  certifications: [
    {
      title: "Introduction to Cybersecurity",
      organization: "Cisco Networking Academy",
      year: "2026",
      description:
        "Completed the Introduction to Cybersecurity course on October 26, 2026.",
      image: "/certificates/introduction-to-cybersecurity.jpg",
      href: "/certificates/introduction-to-cybersecurity.pdf"
    },
    {
      title: "CCNA: Introduction to Networks",
      organization: "Cisco Networking Academy · Universitas Bina Sarana Informatika",
      year: "2025",
      description:
        "Completed the CCNA: Introduction to Networks course on January 17, 2025.",
      image: "/certificates/ccna-introduction-to-networks.jpg",
      href: "/certificates/ccna-introduction-to-networks.pdf"
    },
    {
      title: "Partner: PCAP - Programming Essentials in Python",
      organization: "Cisco Networking Academy",
      year: "2024",
      description:
        "Completed the Partner: PCAP - Programming Essentials in Python course on July 19, 2024.",
      image: "/certificates/pcap-programming-essentials-in-python.jpg",
      href: "/certificates/pcap-programming-essentials-in-python.pdf"
    }
  ]
}
