import React from 'react'
import Landing from './Landing/Landing'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './Landing/AboutUs/AboutUs'
import SDashboard from './Student/Student_Dashboard/SDashboard'
import Student_profile from './Student/Student_profile/Student_profile'
import Std_profile from './Student/Std_view_profile/Std_profile'
import { AlumniDirectory } from './AlumniDir';
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Porject from './Student/Projects/Projects_internships'
// import SignupStudent from './Login/SignupStudent'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/Student-dashboard' element={<SDashboard/>}/>
          <Route path='/Student-profile' element={<Student_profile/>}/>
          <Route path='/view-edit-profile' element={<Std_profile/>}/>
          <Route path='/alumni-directory' element={<AlumniDirectory/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/project' element={<Porject/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App