import styles from '../styles/Home.module.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
