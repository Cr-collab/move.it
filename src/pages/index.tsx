import type { NextPage } from 'next'

import { ExperienceBar } from '../components/ExperienceBar'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ExperienceBar />
    </div>
  )
}

export default Home
