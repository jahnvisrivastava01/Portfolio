import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero' 
import Skills from './Skills'
import Experiences from './Experiences'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

return (
  <div className="relative min-h-screen overflow-hidden bg-[#0f0f0f] text-white">

    
    <div className="fixed w-72 h-72 bg-purple-600 opacity-20 blur-3xl top-10 left-10"></div>
    <div className="fixed w-72 h-72 bg-pink-500 opacity-20 blur-3xl bottom-10 right-10"></div>

    
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>

  </div>
);
}

export default App
