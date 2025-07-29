import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
        <div className='login-container'>
            <div className='login-card'>
                <div className='e-connect-logo'>
                    <h2>EC</h2>
                    <h3>Welcome Back</h3>
                    <p>Sign in to continue your journey</p>
                </div>
                <div className='login-form'>
                    <form>
                        <label>Email Address</label>
                        <input type='text' placeholder='Enter your email'/>
                        <label>Password</label>
                        <input type='password' placeholder='Enter your password'/>
                    </form>
                    <div className='remember-box'>
                        <div>
                             <input type='checkbox'/>
                            <label>Remember me</label>
                        </div>
                        <p>Forgot Password?</p>
                        
                    </div>
                    <button type='submit'>Sign In</button>
                </div>
                <p>Don't have an account? Sign Up</p>
            </div>
        </div>
    </>
  )
}

export default Login