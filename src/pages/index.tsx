import type { NextPage } from 'next'

import { ExperienceBar } from '../components/ExperienceBar'
import styles from '../../styles/Home.module.css'
import { Profile } from '../components/Profile'
import { CompletedChanllages } from '../components/CompletedChanllages'
import { Countdown } from '../components/Countdown'

import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title> Inico | move.it </title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChanllages />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  )
}

export default Home
