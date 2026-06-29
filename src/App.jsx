import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import MainScreen from './components/MainScreen'
import SectionModal from './components/SectionModal'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState(null)
  const [characterX, setCharacterX] = useState(60)
  const [characterState, setCharacterState] = useState('idle')
  const [characterDirection, setCharacterDirection] = useState('right')
  const [activeFolder, setActiveFolder] = useState(null)
  const [animationPath, setAnimationPath] = useState(null)

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleFolderClick = useCallback((section, folderIndex) => {
    if (characterState === 'walking') return

    const path = getAnimationPath(folderIndex)
    setActiveFolder(section)
    setCharacterDirection('right')
    setCharacterState('walking')
    setAnimationPath(path)

    setTimeout(() => {
      setCharacterState('idle')
      setActiveSection(section)
      setAnimationPath(null)
    }, path.duration)
  }, [characterState])

  const handleCloseModal = useCallback(() => {
    setActiveSection(null)
    setCharacterDirection('left')
    setCharacterState('walking')

    const returnPath = {
      keyframes: [{ x: 60, y: 0 }],
      duration: 1200,
    }
    setAnimationPath(returnPath)

    setTimeout(() => {
      setCharacterX(60)
      setCharacterState('idle')
      setActiveFolder(null)
      setAnimationPath(null)
    }, 1200)
  }, [])

  return (
    <div className="scanlines">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <MainScreen
            onFolderClick={handleFolderClick}
            characterX={characterX}
            characterState={characterState}
            characterDirection={characterDirection}
            activeFolder={activeFolder}
            animationPath={animationPath}
          />

          <AnimatePresence>
            {activeSection && (
              <SectionModal
                section={activeSection}
                onClose={handleCloseModal}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  )
}

function getFolderPosition(index) {
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 800
  const isMobile = screenWidth < 768
  const characterCenterOffset = isMobile ? 52 : 64

  if (isMobile) {
    const mobileFolderCenters = [
      screenWidth * 0.2,
      screenWidth * 0.5,
      screenWidth * 0.8,
    ]

    return Math.max(12, mobileFolderCenters[index - 1] - characterCenterOffset)
  }

  const folderCenters = [
    screenWidth / 2 - 210,
    screenWidth / 2,
    screenWidth / 2 + 210,
  ]

  return Math.max(24, folderCenters[index - 1] - characterCenterOffset)
}

function getAnimationPath(folderIndex) {
  const finalX = getFolderPosition(folderIndex)
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 800
  const isMobile = screenWidth < 768

  // About Me (folder 1): maju dikit → naik → maju lagi ke folder
  if (folderIndex === 1) {
    const midX = isMobile ? finalX * 0.4 : finalX * 0.5
    return {
      keyframes: [
        { x: 60, y: 0 },           // start
        { x: midX, y: 0 },         // maju dikit
        { x: midX, y: -60 },       // naik
        { x: finalX, y: -60 },     // maju ke folder (elevated)
        { x: finalX, y: 0 },       // turun ke folder
      ],
      duration: 2400,
      times: [0, 0.25, 0.4, 0.7, 0.85],
    }
  }

  // Portfolio (folder 2): maju terus → naik ke folder
  if (folderIndex === 2) {
    return {
      keyframes: [
        { x: 60, y: 0 },           // start
        { x: finalX - 40, y: 0 },  // maju mendekati
        { x: finalX, y: -60 },     // naik ke folder
        { x: finalX, y: 0 },       // turun ke folder
      ],
      duration: 2200,
      times: [0, 0.5, 0.75, 0.9],
    }
  }

  // Contact Me (folder 3): maju lewat → naik → mundur ke kiri folder
  if (folderIndex === 3) {
    const overX = finalX + (isMobile ? 60 : 80)
    return {
      keyframes: [
        { x: 60, y: 0 },           // start
        { x: overX, y: 0 },        // maju lewat folder
        { x: overX, y: -60 },      // naik
        { x: finalX, y: -60 },     // mundur ke kiri (elevated)
        { x: finalX, y: 0 },       // turun ke folder
      ],
      duration: 2600,
      times: [0, 0.4, 0.55, 0.8, 0.95],
    }
  }

  // fallback
  return {
    keyframes: [{ x: finalX, y: 0 }],
    duration: 1200,
  }
}
