import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Star Wars-pedia</h1>
      <p>Choose to start</p>
      <div className={styles.buttonsWrapper}>
        <button className={styles.searchButton}>Search</button>
        <button className={styles.videoButton}>Video</button>
      </div>
    </main>
  )
}
