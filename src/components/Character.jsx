import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import characterImg from '../assets/awank-charachter.png'

export default function Character({
  x,
  state = 'idle',
  direction = 'right',
  animationPath = null
}) {
  const isWalking = state === 'walking'
  const [currentPos, setCurrentPos] = useState({ x: x || 60, y: 0 })

  useEffect(() => {
    if (!animationPath) {
      setCurrentPos({ x: x || 60, y: 0 })
    }
  }, [x, animationPath])

  const keyframes = animationPath?.keyframes || [{ x: currentPos.x, y: 0 }]
  const times = animationPath?.times || [0, 1]
  const duration = animationPath?.duration || 1200

  return (
    <motion.div
      className="absolute bottom-[116px] left-0 z-20"
      initial={{ x: 60, y: 0 }}
      animate={animationPath ? keyframes : { x: currentPos.x, y: 0 }}
      transition={{
        duration: duration / 1000,
        times: times,
        ease: 'easeInOut',
      }}
    >
      <div className="relative h-40 w-32">
        {/* Shadow */}
        <motion.div
          className="absolute bottom-[-14px] left-1/2 h-4 w-20 -translate-x-1/2 rounded-sm bg-black/25"
          animate={{
            scaleX: isWalking ? [1, 0.9, 1] : 1,
            opacity: currentPos.y < -30 ? 0.3 : 0.5,
          }}
          transition={{
            duration: 0.3,
            repeat: isWalking ? Infinity : 0,
          }}
        />

        {/* Character image */}
        <motion.img
          src={characterImg}
          alt="Awank character"
          className="absolute bottom-0 left-1/2 h-40 w-auto object-contain"
          style={{
            imageRendering: 'pixelated',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            transform: direction === 'left' ? 'translateX(-50%) scaleX(-1)' : 'translateX(-50%)',
          }}
          animate={{
            y: isWalking ? [0, -8, 0, -5, 0] : [0, -4, 0],
            scaleY: isWalking ? [1, 0.96, 1, 0.98, 1] : [1, 0.98, 1],
          }}
          transition={{
            y: {
              duration: isWalking ? 0.4 : 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            scaleY: {
              duration: isWalking ? 0.4 : 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
      </div>
    </motion.div>
  )
}