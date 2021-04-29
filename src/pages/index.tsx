import { Header } from '../components'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div> 
      <Header />
      <h1 className={styles.global}>Hello World</h1>
    </div>
  )
}
