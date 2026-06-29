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

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleFolderClick = useCallback((section, folderIndex) => {
    if (characterState === 'walking') return

    const targetX = getFolderPosition(folderIndex)
    setActiveFolder(section)
    setCharacterDirection('right')
    setCharacterState('walking')

    setTimeout(() => {
      setCharacterX(targetX)
    }, 50)

    setTimeout(() => {
      setCharacterState('idle')
      setActiveSection(section)
    }, 1400)
  }, [characterState])

  const handleCloseModal = useCallback(() => {
    setActiveSection(null)
    setCharacterDirection('left')
    setCharacterState('walking')

    setTimeout(() => {
      setCharacterX(60)
    }, 50)

    setTimeout(() => {
      setCharacterState('idle')
      setActiveFolder(null)
    }, 1400)
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
  const basePositions = [120, 380, 640]
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 800
  const isMobile = screenWidth < 768

  if (isMobile) {
    return [40, screenWidth / 2 - 32, screenWidth - 104][index - 1]
  }

  const centerOffset = screenWidth > 900 ? 0 : (900 - screenWidth) / 2
  return Math.max(40, basePositions[index - 1] - centerOffset)
}
