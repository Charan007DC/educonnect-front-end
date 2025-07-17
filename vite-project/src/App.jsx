import React from 'react'
import Landing from './Landing/Landing'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './Landing/AboutUs/AboutUs'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App