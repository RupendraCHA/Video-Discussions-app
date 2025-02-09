import React from 'react'
import Navbar from "./components/Navbar.jsx"
import Hero from './components/Hero.jsx'
import Store from './components/Store.jsx'
import ExtraBanner from './components/ExtraBanner.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Store/>
      <ExtraBanner/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App