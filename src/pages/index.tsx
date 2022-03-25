import type { GetServerSideProps, NextPage } from 'next'

import { ExperienceBar } from '../components/ExperienceBar'
import styles from '../../styles/Home.module.css'
import { Profile } from '../components/Profile'
import { CompletedChanllages } from '../components/CompletedChanllages'
import { Countdown } from '../components/Countdown'

import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

const Home = (props: HomeProps) => {
  console.log(props)
  return (
    <ChallengesProvider
      levelC={props.level}
      currentExperienceC={props.currentExperience}
      challengesCompletedC={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title> Inico | move.it </title>
        </Head>
        <ExperienceBar />
        <section>
          <CountdownProvider>
            <div>
              <Profile />
              <CompletedChanllages />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </CountdownProvider>
        </section>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  const user = {
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengesCompleted: Number(challengesCompleted)
  }
  return {
    props: {
      user
    }
  }
}

export default Home
