import { createContext, ReactNode, useState } from 'react'

interface ChallengeContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  levelUp: () => void
  startNewChallenge: () => void
}
export const ChallengesContext = createContext({} as ChallengeContextData)

interface ChallengeProviderProps {
  children: ReactNode
}

export function ChallengesProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    console.log('New challenge')
  }
  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
