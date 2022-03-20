import { useEffect, useState } from 'react'
import styles from './styles.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHashFinished] = useState(false)
  console.log(time)

  const minutes = Math.floor(time / 60)
  console.log(minutes)
  const seconds = time % 60

  const [minuteLeft, minutesRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }
  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHashFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])
  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span> : </span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : isActive ? (
        <button
          type="button"
          className={` ${styles.countdownButton} ${styles.countdownButtonActive} `}
          onClick={resetCountdown}
        >
          Abandonar ciclo
        </button>
      ) : (
        <button
          type="button"
          className={styles.countdownButton}
          onClick={startCountdown}
        >
          Iniciar um ciclo
        </button>
      )}
    </div>
  )
}
