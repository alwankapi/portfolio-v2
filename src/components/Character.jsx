import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Pixel art character sprite - 8x8 base, scaled up
const SPRITE_IDLE = `
  3px 0 #161616, 4px 0 #161616,
  2px 1px #161616, 3px 1px #ffd6a5, 4px 1px #ffd6a5, 5px 1px #161616,
  2px 2px #161616, 3px 2px #ffd6a5, 4px 2px #161616, 5px 2px #161616,
  1px 3px #161616, 2px 3px #2563eb, 3px 3px #2563eb, 4px 3px #2563eb, 5px 3px #2563eb, 6px 3px #161616,
  1px 4px #161616, 2px 4px #2563eb, 3px 4px #facc15, 4px 4px #facc15, 5px 4px #2563eb, 6px 4px #161616,
  2px 5px #161616, 3px 5px #2563eb, 4px 5px #2563eb, 5px 5px #161616,
  2px 6px #161616, 3px 6px #161616, 4px 6px #161616, 5px 6px #161616,
  1px 7px #161616, 2px 7px #161616, 5px 7px #161616, 6px 7px #161616
`

const SPRITE_WALK_1 = `
  3px 0 #161616, 4px 0 #161616,
  2px 1px #161616, 3px 1px #ffd6a5, 4px 1px #ffd6a5, 5px 1px #161616,
  2px 2px #161616, 3px 2px #ffd6a5, 4px 2px #161616, 5px 2px #161616,
  1px 3px #161616, 2px 3px #2563eb, 3px 3px #2563eb, 4px 3px #2563eb, 5px 3px #2563eb, 6px 3px #161616,
  1px 4px #161616, 2px 4px #2563eb, 3px 4px #facc15, 4px 4px #facc15, 5px 4px #2563eb, 6px 4px #161616,
  2px 5px #161616, 3px 5px #2563eb, 4px 5px #2563eb, 5px 5px #161616,
  2px 6px #161616, 3px 6px #161616, 4px 6px #161616, 5px 6px #161616,
  0px 7px #161616, 1px 7px #161616, 6px 7px #161616, 7px 7px #161616
`

const SPRITE_WALK_2 = `
  3px 0 #161616, 4px 0 #161616,
  2px 1px #161616, 3px 1px #ffd6a5, 4px 1px #ffd6a5, 5px 1px #161616,
  2px 2px #161616, 3px 2px #ffd6a5, 4px 2px #161616, 5px 2px #161616,
  1px 3px #161616, 2px 3px #2563eb, 3px 3px #2563eb, 4px 3px #2563eb, 5px 3px #2563eb, 6px 3px #161616,
  1px 4px #161616, 2px 4px #2563eb, 3px 4px #facc15, 4px 4px #facc15, 5px 4px #2563eb, 6px 4px #161616,
  2px 5px #161616, 3px 5px #2563eb, 4px 5px #2563eb, 5px 5px #161616,
  2px 6px #161616, 3px 6px #161616, 4px 6px #161616, 5px 6px #161616,
  2px 7px #161616, 3px 7px #161616, 4px 7px #161616, 5px 7px #161616
`

export default function Character({ x, state = 'idle', direction = 'right' }) {
  const isWalking = state === 'walking'

  return (
    <motion.div
      className="absolute bottom-[116px] left-0 z-20"
      animate={{
        x,
      }}
      transition={{
        x: { duration: 1.2, ease: 'linear' },
      }}
    >
      <div className="relative h-20 w-16">
        {/* Shadow */}
        <motion.div
          className="absolute bottom-[-14px] left-1/2 h-3 w-12 -translate-x-1/2 rounded-sm bg-black/25"
          animate={{
            scaleX: isWalking ? [1, 0.9, 1] : 1,
          }}
          transition={{
            duration: 0.3,
            repeat: isWalking ? Infinity : 0,
          }}
        />

        {/* Character sprite container */}
        <motion.div
          className="relative"
          animate={{
            y: isWalking ? [0, -6, 0, -4, 0] : [0, -3, 0],
            scaleY: isWalking ? [1, 0.95, 1, 0.97, 1] : 1,
          }}
          transition={{
            y: {
              duration: isWalking ? 0.4 : 1.5,
              repeat: Infinity,
              ease: 'linear',
            },
            scaleY: {
              duration: 0.4,
              repeat: isWalking ? Infinity : 0,
            },
          }}
        >
          <CharacterSprite
            sprite={isWalking ? [SPRITE_WALK_1, SPRITE_WALK_2] : SPRITE_IDLE}
            isWalking={isWalking}
            direction={direction}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

function CharacterSprite({ sprite, isWalking, direction }) {
  const [frame, setFrame] = useState(0)
  const scale = 7

  // Animate between walk frames
  useEffect(() => {
    if (!isWalking || !Array.isArray(sprite)) return

    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % 2)
    }, 150)

    return () => clearInterval(interval)
  }, [isWalking, sprite])

  const currentSprite = Array.isArray(sprite) ? sprite[frame] : sprite
  const flip = direction === 'left'

  return (
    <div
      className="character-pixel"
      style={{
        '--scale': scale,
        '--sprite': currentSprite,
        transform: `scale(${flip ? -scale : scale}, ${scale})`,
        transformOrigin: flip ? 'top right' : 'top left',
        marginLeft: flip ? '56px' : '0',
      }}
      aria-label="Awank pixel character"
    />
  )
}

