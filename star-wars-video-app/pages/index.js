import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars Video app</title>
        <meta name="description" content="Star Wars Video app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Star Wars-pedia presents today...</h2>
        <div className="video-responsive">
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/U1Yg_LhF9W4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          />
      </div>
      </main>
    </div>
  )
}
