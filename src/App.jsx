
import React, { useState, useEffect } from 'react'
import './App.css'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers/containers'
import { CTA, Brand, Navbar } from './components/components'
import { FaAngleUp } from 'react-icons/fa'

const App = () => {

  const [isBtnVisible, setIsBtnVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setIsBtnVisible(true)
      } else {
        setIsBtnVisible(false)
      }
    })
  }, [])

  function scrollToTop() {
    window.scrollTo({
      behavior: 'smooth',
      top: '0'
    })
  }

  return (
    <div className='App'>
    <button type='button' className={`${isBtnVisible ? 'to-top-btn shown': 'to-top-btn'}`} onClick={scrollToTop}>
      <FaAngleUp className='icon' />
    </button>
    <div className='gradient-bg'>
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
  )
};

export default App;


