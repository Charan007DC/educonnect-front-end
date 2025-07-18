import React from 'react'
import Landing from './Landing/Landing'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './Landing/AboutUs/AboutUs'
import SDashboard from './Student/Student_Dashboard/SDashboard'
import Student_profile from './Student/Student_profile/Student_profile'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/Student-dashboard' element={<SDashboard/>}/>
          <Route path='/Student-profile' element={<Student_profile/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App