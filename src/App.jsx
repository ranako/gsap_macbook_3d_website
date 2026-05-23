import Navbar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import ShowCase from './components/ShowCase'
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
    </main>
  )
}

export default App