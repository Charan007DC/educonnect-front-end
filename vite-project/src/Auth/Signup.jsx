import React, { useState } from 'react'
import './Login.css'
const Signup = () => {
    const [SignupType, SetSignupType] = useState("Student")
    return (
        <>
            <div className='signup-page'>
                <div className='signup-card'>
                    <div className='e-connect-logo'>
                        <h2>EC</h2>
                        <h3>Join The Network</h3>
                        <p>Sign in to continue your journey</p>
                    </div>
                    <div className='signup-button-types'>
                        <button className={SignupType === "Student" ? "signup-btn active" : "signup-btn inactive"} onClick={()=>SetSignupType("Student")}>Student</button>
                        <button className={SignupType === "Alumni" ? "signup-btn active" : "signup-btn inactive"} onClick={()=>SetSignupType("Alumni")}>Alumni</button>
                    </div>
                    <div className='signup-form'>
                        <form>
                            <div>
                                <label>Full Name</label>
                                <input type="text" placeholder='Enter your full name' />
                            </div>
                            <div>
                                <label>Email Address</label>
                                <input type='text' placeholder='Enter your email address' />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type='text' placeholder='Create a new password' />
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <input type='text' placeholder='Confirm your password' />
                            </div>
                            {SignupType === 'Student' && (
                                <>

                                    <div >
                                        <label>University</label>
                                        <input type='text' placeholder='Enter your university' />
                                    </div>
                                    <div>
                                        <label>Engineering Branch</label>
                                        <input type='text' placeholder='eg.,Computer Science' />
                                    </div>
                                    <div>
                                        <label>
                                            Expected Graduation Year
                                        </label>
                                        <input type='text' placeholder='e.g.,2025' />
                                    </div>

                                </>
                            )}
                            {SignupType === 'Alumni' && (
                                <>
                                    <div >
                                        <label>University</label>
                                        <input type='text' placeholder='Enter your university' />
                                    </div>
                                    <div>
                                        <label>Engineering Branch</label>
                                        <input type='text' placeholder='eg.,Computer Science' />
                                    </div>
                                    <div>
                                        <label>
                                            Graduation Year
                                        </label>
                                        <input type='text' placeholder='e.g.,2025' />
                                    </div>
                                    <div>
                                        <label>Current Company</label>
                                        <input type='text' placeholder='Enter your company'/>
                                    </div>
                                    <div>
                                        <label>Job Title</label>
                                        <input type='text' placeholder='Enter your job title'/>
                                    </div>
                                   <div>
                                        <label>Willing to do Mentorship</label>
                                        <input type='text' placeholder='Yes/No'/>
                                   </div>

                                </>
                            )}
                            <button className='submit'>Create Account</button>
                        </form>
                        <p>Already have an account? Sign In</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup