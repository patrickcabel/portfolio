import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import Spotlight from './components/Spotlight'
import Work from './components/Work'

export default function App() {
  return (
    <div className="site">
      <ScrollProgress />
      <Spotlight />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Marquee />
        <About />
        <Contact />
      </main>
    </div>
  )
}
