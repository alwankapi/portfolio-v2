import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onComplete(), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 180)

    return () => clearInterval(interval)
  }, [onComplete])

  const displayProgress = Math.min(100, Math.floor(progress))

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-pixel-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* LOADING text */}
      <motion.h1
        className="mb-16 text-4xl tracking-wider"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        LOADING
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
        >
          .
        </motion.span>
      </motion.h1>

      {/* Progress bar container */}
      <div className="relative w-[420px] max-w-[90vw]">
        <div className="h-12 border-4 border-pixel-ink bg-white">
          {/* Green progress fill */}
          <motion.div
            className="h-full bg-pixel-green"
            initial={{ width: '0%' }}
            animate={{ width: `${displayProgress}%` }}
            transition={{ duration: 0.15, ease: 'linear' }}
          />
        </div>

        {/* Progress shadow */}
        <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full border-4 border-pixel-ink bg-pixel-ink" />
      </div>

      {/* Percentage counter */}
      <motion.div
        className="mt-8 text-3xl tabular-nums"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {displayProgress}%
      </motion.div>

      {/* Pixel character idle animation */}
      <div className="mt-20">
        <CharacterSprite />
      </div>
    </motion.div>
  )
}

function CharacterSprite() {
  const sprite = `
    3px 0 #161616, 4px 0 #161616,
    2px 1px #161616, 3px 1px #ffd6a5, 4px 1px #ffd6a5, 5px 1px #161616,
    2px 2px #161616, 3px 2px #ffd6a5, 4px 2px #161616, 5px 2px #161616,
    1px 3px #161616, 2px 3px #2563eb, 3px 3px #2563eb, 4px 3px #2563eb, 5px 3px #2563eb, 6px 3px #161616,
    1px 4px #161616, 2px 4px #2563eb, 3px 4px #facc15, 4px 4px #facc15, 5px 4px #2563eb, 6px 4px #161616,
    2px 5px #161616, 3px 5px #2563eb, 4px 5px #2563eb, 5px 5px #161616,
    2px 6px #161616, 3px 6px #161616, 4px 6px #161616, 5px 6px #161616,
    1px 7px #161616, 2px 7px #161616, 5px 7px #161616, 6px 7px #161616
  `

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'steps(2)' }}
    >
      <div
        className="character-pixel"
        style={{
          '--scale': 8,
          '--sprite': sprite,
        }}
      />
    </motion.div>
  )
}