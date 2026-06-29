import { motion } from 'framer-motion'

const folderColors = {
  blue: { bg: '#3b82f6', dark: '#1e40af', light: '#60a5fa' },
  red: { bg: '#ef4444', dark: '#b91c1c', light: '#f87171' },
  yellow: { bg: '#facc15', dark: '#ca8a04', light: '#fde047' },
}

export default function FolderIcon({ color, label, onClick, isOpen, disabled }) {
  const colors = folderColors[color]

  return (
    <motion.button
      className="group relative flex flex-col items-center gap-4 disabled:cursor-not-allowed disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.08 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      <motion.div
        className="relative h-28 w-32"
        animate={isOpen ? { rotateX: 45 } : {}}
        transition={{ duration: 0.25 }}
      >
        {/* Folder body */}
        <div
          className="absolute inset-0 rounded-md border-4 border-pixel-ink"
          style={{ backgroundColor: colors.bg }}
        >
          {/* Folder decorative lines */}
          <div className="absolute right-3 top-4 h-1.5 w-12 bg-pixel-ink" />
          <div className="absolute right-3 top-8 h-1.5 w-16 bg-pixel-ink" />
          <div className="absolute right-3 top-12 h-1.5 w-10 bg-pixel-ink" />
        </div>

        {/* Folder tab */}
        <motion.div
          className="absolute -top-3 left-2 h-5 w-16 rounded-t-md border-4 border-b-0 border-pixel-ink"
          style={{ backgroundColor: colors.dark }}
          animate={isOpen ? { rotateX: -15, y: -6 } : {}}
          transition={{ duration: 0.25 }}
        />

        {/* Shadow */}
        <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-md bg-pixel-ink" />

        {/* Glow on hover */}
        {!disabled && (
          <motion.div
            className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle, ${colors.light}40 0%, transparent 70%)`,
            }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>

      <span className="text-sm uppercase tracking-wider">{label}</span>
    </motion.button>
  )
}