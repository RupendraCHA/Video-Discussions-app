import React, { useEffect } from 'react'
import Navbar from "./components/Navbar.jsx"
import Hero from './components/Hero.jsx'
import Store from './components/Store.jsx'
import ExtraBanner from './components/ExtraBanner.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import ChatButton from './components/ChatButton.jsx'

const App = () => {



  return (
    <div>
      <Navbar/>
      <Hero/>
      <Store/>
      <ExtraBanner/>
      <About/>
      <Footer/>
      <ChatButton/>
    </div>
  )
}

export default App