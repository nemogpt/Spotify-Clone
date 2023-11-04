import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify 2.0</title>
      </Head>
      <main>
        {/* Sidebar */}
        <Sidebar/>
        {/* Center */}
      </main>
    </div>
  )
}
