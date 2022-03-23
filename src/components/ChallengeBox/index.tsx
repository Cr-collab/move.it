import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import styles from './styles.module.css'

export function ChallengeBox() {
  const hasActiveChallenge = true
  const value = useContext(ChallengesContext)
  console.log(value)
  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" alt="Body" />
            <strong>Novo desafio</strong>
            <p> Levante e faça uma caminhada de três minutos </p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={() => console.log('a')}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSuccesdedButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="/icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  )
}
