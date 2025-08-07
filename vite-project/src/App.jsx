import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Landing from './Landing/Landing'
import AboutUs from './Landing/AboutUs/AboutUs'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import ProtectedRoute from './Auth/ProtectedRoute'
import SDashboard from './Student/Student_Dashboard/SDashboard'
import Student_profile from './Student/Student_profile/Student_profile'
import Std_profile from './Student/Std_view_profile/Std_profile'
import { AlumniDirectory } from './AlumniDir';
import Porject from './Student/Projects/Projects_internships'
import StudentNetwork from './StudentNetwork/StudentNetwork.jsx'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* --- Public Routes  --- */}
          <Route path='/' element={<Landing/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          
          {/* --- Protected Routes  --- */}
          {/* 2. WRAP YOUR PROTECTED ROUTES LIKE THIS */}
          <Route element={<ProtectedRoute />}>
            <Route path='/student-dashboard' element={<SDashboard/>}/>
            <Route path='/student-profile' element={<Student_profile/>}/>
            <Route path='/view-edit-profile' element={<Std_profile/>}/>
            <Route path='/alumni-directory' element={<AlumniDirectory/>}/>
            <Route path='/project' element={<Porject/>}/>
            <Route path='/student-network' element={<StudentNetwork/>}/>
          </Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App