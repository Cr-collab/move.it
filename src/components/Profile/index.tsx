import styles from './styles.module.css'
export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Cr-collab.png" alt="Cristiano" />
      <div>
        <strong> Cristiano Azevedo </strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          level 1
        </p>
      </div>
    </div>
  )
}
