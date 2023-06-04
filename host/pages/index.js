import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars-pedia</title>
        <meta name="description" content="Star Wars-pedia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Star Wars-pedia</h1>
        <p>Choose to start</p>
        <div className={styles.buttonsWrapper}>
          <button className={styles.searchButton}>Search</button>
          <button className={styles.videoButton}>Video</button>
        </div>
      </main>
    </div>
  )
}
