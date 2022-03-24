import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import styles from './styles.module.css'
export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext)

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <header className={styles['expereince-bar']}>
      <span>0px</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span
          className={styles['current-expereince']}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience}px
        </span>
      </div>
      <span>{experienceToNextLevel}px</span>
    </header>
  )
}
