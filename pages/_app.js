import '../styles/globals.css'
import '../styles/burger.css'
import Footer from '../components/Footer'
import HamburgerMenu from '../components/HamburgerMenu'



function MyApp({ Component, pageProps }) {
  return (
    <>
    <HamburgerMenu />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
