import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { CountdownContext } from '../../contexts/CountdownContext'
import styles from './styles.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChanllage } =
    useContext(ChallengesContext)

  const { resetCountdown, setHashFinished } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completedChanllage()
    resetCountdown()
    setHashFinished(false)
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
    setHashFinished(false)
  }
  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
            <strong>Novo desafio</strong>
            <p> {activeChallenge.description} </p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSuccesdedButton}
              onClick={handleChallengeSucceeded}
            >
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
