import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <HowItWorks />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
