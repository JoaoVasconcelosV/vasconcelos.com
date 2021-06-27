import '../styles/globals.css'
import '../components/Card/card.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
