import styles from './styles.module.css'
export function ExperienceBar() {
  return (
    <header className={styles['expereince-bar']}>
      <span>0px</span>
      <div>
        <div style={{ width: '60%' }} />

        <span className={styles['current-expereince']} style={{ left: '60%' }}>
          {' '}
          300xp{' '}
        </span>
      </div>
      <span>600px</span>
    </header>
  )
}
