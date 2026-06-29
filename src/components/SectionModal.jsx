import { motion, AnimatePresence } from 'framer-motion'

const sectionConfig = {
  about: {
    title: 'About Me',
    color: 'blue',
    bg: '#2563eb',
  },
  portfolio: {
    title: 'Portfolio',
    color: 'red',
    bg: '#ef4444',
  },
  contact: {
    title: 'Contact',
    color: 'yellow',
    bg: '#facc15',
  },
}

const skills = [
  { name: 'PHP / Laravel / CodeIgniter 4', level: 95 },
  { name: 'JavaScript / React.js / Next.js', level: 90 },
  { name: 'HTML / CSS / Tailwind CSS', level: 92 },
  { name: 'Firebase / MySQL / PostgreSQL', level: 85 },
  { name: 'Git / GitHub / VS Code', level: 88 },
  { name: 'Figma / UI Design', level: 80 },
]

const projects = [
  {
    name: 'SIMKOS',
    desc: 'Sistem Informasi Kost — Full-stack boarding house management system with booking, payment tracking, tenant management, and reporting dashboard.',
    stack: ['Laravel', 'MySQL', 'Tailwind CSS', 'Chart.js'],
    link: '#',
    status: 'Production',
  },
  {
    name: 'Portfolio Website',
    desc: 'Personal portfolio with retro pixel-art theme, animated character, interactive folder navigation, and smooth transitions.',
    stack: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    link: '#',
    status: 'Live',
  },
  {
    name: 'E-Commerce Dashboard',
    desc: 'Modern admin dashboard for managing products, orders, inventory, and real-time analytics with data visualization and export features.',
    stack: ['Next.js', 'Firebase', 'TypeScript', 'Recharts'],
    link: '#',
    status: 'In Progress',
  },
]

const contacts = [
  { label: 'Email', value: 'awank.dev@example.com', icon: '✉', link: 'mailto:awank.dev@example.com' },
  { label: 'GitHub', value: 'github.com/awank', icon: '◉', link: 'https://github.com/awank' },
  { label: 'LinkedIn', value: 'linkedin.com/in/awank', icon: '◉', link: 'https://linkedin.com/in/awank' },
  { label: 'Location', value: 'Jakarta, Indonesia', icon: '◎', link: null },
]

export default function SectionModal({ section, onClose }) {
  const config = sectionConfig[section]
  if (!config) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-40 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-pixel-ink/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative z-10 max-h-[85vh] w-full max-w-3xl overflow-y-auto border-4 border-pixel-ink bg-pixel-cream shadow-pixel"
          initial={{ scale: 0.8, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between border-b-4 border-pixel-ink px-6 py-4"
            style={{ backgroundColor: config.bg }}
          >
            <h2 className="text-xl uppercase tracking-wider text-white">{config.title}</h2>
            <button
              onClick={onClose}
              className="h-10 w-10 border-2 border-pixel-ink bg-white text-xl transition-colors hover:bg-pixel-ink hover:text-white"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {section === 'about' && <AboutContent />}
            {section === 'portfolio' && <PortfolioContent />}
            {section === 'contact' && <ContactContent />}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function AboutContent() {
  return (
    <div className="space-y-6">
      <div className="border-b-2 border-pixel-ink/20 pb-4">
        <p className="text-sm leading-relaxed">
          Hi! I'm <strong>Awank</strong>, a passionate Web Developer based in
          Indonesia with expertise in building modern, responsive, and
          user-friendly web applications.
        </p>
        <p className="mt-3 text-sm leading-relaxed">
          I specialize in PHP frameworks (Laravel, CodeIgniter 4) and modern
          JavaScript (React.js, Next.js). I love turning complex problems into
          simple, beautiful, and performant solutions.
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-base uppercase tracking-wider">Technical Skills</h3>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-1 flex justify-between text-xs">
                <span className="font-medium">{skill.name}</span>
                <span className="tabular-nums">{skill.level}%</span>
              </div>
              <div className="h-4 border-2 border-pixel-ink bg-white">
                <motion.div
                  className="h-full bg-pixel-green"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded border-2 border-pixel-blue bg-pixel-blue/10 p-4">
        <p className="text-center text-sm">
          <span className="text-pixel-blue">●</span> Open to new opportunities and collaborations
        </p>
      </div>
    </div>
  )
}

function PortfolioContent() {
  const statusColors = {
    Production: 'bg-pixel-green text-white',
    Live: 'bg-pixel-blue text-white',
    'In Progress': 'bg-pixel-yellow text-pixel-ink',
  }

  return (
    <div className="space-y-6">
      <p className="border-b-2 border-pixel-ink/20 pb-4 text-sm">
        Featured projects showcasing my development work and technical expertise:
      </p>

      <div className="grid gap-5">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            className="group border-3 border-pixel-ink bg-white p-5 shadow-pixel-sm transition-all hover:-translate-y-1 hover:shadow-pixel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h4 className="text-base leading-tight">{project.name}</h4>
              <span
                className={`shrink-0 border-2 border-pixel-ink px-2 py-1 text-[10px] font-bold uppercase ${statusColors[project.status]}`}
              >
                {project.status}
              </span>
            </div>
            <p className="mb-4 text-xs leading-relaxed text-pixel-ink/70">{project.desc}</p>
            <div className="mb-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-pixel-ink bg-pixel-cream px-2 py-1 text-[10px] uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link !== '#' && (
              <a
                href={project.link}
                className="inline-flex items-center gap-2 border-2 border-pixel-ink bg-pixel-ink px-3 py-2 text-xs text-white transition-colors hover:bg-white hover:text-pixel-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-xs text-pixel-ink/60">More projects available on GitHub</p>
      </div>
    </div>
  )
}

function ContactContent() {
  return (
    <div className="space-y-6">
      <p className="border-b-2 border-pixel-ink/20 pb-4 text-sm">
        Let's connect! I'm always open to discussing new projects,
        creative ideas, or opportunities to contribute to your vision.
      </p>

      <div className="grid gap-4">
        {contacts.map((contact) => (
          <motion.div
            key={contact.label}
            className="group flex items-center gap-4 border-2 border-pixel-ink bg-white p-4 shadow-pixel-sm transition-all hover:-translate-x-1 hover:shadow-pixel"
            whileHover={{ scale: 1.01 }}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-pixel-ink bg-pixel-cream text-xl">
              {contact.icon}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase text-pixel-ink/50">{contact.label}</p>
              {contact.link ? (
                <a
                  href={contact.link}
                  className="block truncate text-sm underline decoration-transparent transition-colors hover:decoration-pixel-ink"
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-sm">{contact.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-3 rounded border-2 border-pixel-green bg-pixel-green/10 p-5">
        <div className="flex items-center justify-center gap-2">
          <span className="text-pixel-green">●</span>
          <p className="text-sm font-medium">Available for freelance work</p>
        </div>
        <p className="text-center text-xs text-pixel-ink/70">
          Response time: Usually within 24 hours
        </p>
      </div>
    </div>
  )
}