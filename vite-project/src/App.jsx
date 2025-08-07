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
import StudentNetwork from './StudentNetwork/StudentNetwork.jsx'
import Fund_form from './Student/Funding/Fund_form.jsx'
import View_fund_1 from './Student/Funding/View_fund_1.jsx'
import View_fund_2 from './Student/Funding/View_fund_2.jsx'
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
          <Route path='/student-network' element={<StudentNetwork/>}/>
          <Route path='/funding-form' element={<Fund_form/>}/>
          <Route path='/view-fund-1' element={<View_fund_1/>}/>
          <Route path='view-fund-detail' element={<View_fund_2/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App