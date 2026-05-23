import Navbar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import ShowCase from './components/ShowCase'
import Performance from './components/Performance'
import Features from './components/Features'
import Highlight from './components/Highlight'
import Footer from './components/Footer'
import gsap  from 'gsap';
import {ScrollTrigger} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer/>
      <ShowCase/>
      <Performance/>
      <Features/>
      <Highlight/>
      <Footer/>

    </main>
  )
}

export default App