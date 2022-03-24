import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import styles from './styles.module.css'
export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Cr-collab.png" alt="Cristiano" />
      <div>
        <strong> Cristiano Azevedo </strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          {`level ${level}`}
        </p>
      </div>
    </div>
  )
}
