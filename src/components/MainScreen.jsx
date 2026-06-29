import { motion } from 'framer-motion'
import Character from './Character'
import FolderIcon from './FolderIcon'

export default function MainScreen({ onFolderClick, characterX, characterState, characterDirection, activeFolder }) {
  return (
    <motion.div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pixel-cream to-pixel-paper px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background pixel decorations */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-pixel-ink"
            style={{
              left: `${15 + (i % 4) * 25}%`,
              top: `${10 + Math.floor(i / 4) * 30}%`,
              opacity: 0.08,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        className="relative z-10 mb-16 text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="mb-4 text-6xl tracking-wider">AWANK</h1>
        <p className="text-base uppercase tracking-widest text-pixel-ink/70">
          Web Developer • Pixel Enthusiast
        </p>
      </motion.div>

      {/* Folder icons */}
      <motion.div
        className="relative z-10 mb-32 flex flex-wrap items-center justify-center gap-12 md:gap-16"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <FolderIcon
          color="blue"
          label="About Me"
          onClick={() => onFolderClick('about', 1)}
          isOpen={activeFolder === 'about'}
          disabled={characterState === 'walking'}
        />
        <FolderIcon
          color="red"
          label="Portfolio"
          onClick={() => onFolderClick('portfolio', 2)}
          isOpen={activeFolder === 'portfolio'}
          disabled={characterState === 'walking'}
        />
        <FolderIcon
          color="yellow"
          label="Contact"
          onClick={() => onFolderClick('contact', 3)}
          isOpen={activeFolder === 'contact'}
          disabled={characterState === 'walking'}
        />
      </motion.div>

      {/* Ground platform */}
      <div className="absolute bottom-24 left-0 right-0 z-0 h-4 border-t-4 border-pixel-ink bg-pixel-ink/10" />

      {/* Character */}
      <Character x={characterX} state={characterState} direction={characterDirection} />

      {/* Footer hint */}
      <motion.div
        className="absolute bottom-8 text-xs uppercase tracking-wider text-pixel-ink/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Click a folder to explore
      </motion.div>
    </motion.div>
  )
}