import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import SimpleReactLightbox from 'simple-react-lightbox'

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  )
}

export default MyApp
