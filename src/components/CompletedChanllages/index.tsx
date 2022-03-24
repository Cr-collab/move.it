import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import styles from './styles.module.css'

export function CompletedChanllages() {
  const { challengesCompleted } = useContext(ChallengesContext)
  return (
    <div className={styles.completedChanllagesContainer}>
      <span>Desafios Completos</span>
      <span> {challengesCompleted} </span>
    </div>
  )
}
