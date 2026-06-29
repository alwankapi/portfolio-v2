import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import characterImg from '../assets/awank-charachter.png'

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
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <img
        src={characterImg}
        alt="Awank character"
        className="h-40 w-auto object-contain"
        style={{
          imageRendering: 'pixelated',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
        }}
      />
    </motion.div>
  )
}
