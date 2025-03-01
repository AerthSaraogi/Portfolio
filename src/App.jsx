import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Project from './section/Project'
import Contact from './section/Contact'
import Footer from './section/Footer'

const App = () => {
  return (
    <main className='max-w-7.5xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App 