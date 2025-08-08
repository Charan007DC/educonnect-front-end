import React, { useEffect, useState } from 'react'
import './Login.css'
import api from '../Apiservices/api'
import { useNavigate,Link } from 'react-router-dom';
const Login = () => {
    const[formData,setFormData]=useState(
        {
            email:'',
            password:'',
        }
    );
    const [error,setError]=useState('');
    const navigate=useNavigate();
    useEffect(()=>{
        localStorage.removeItem('studentToken');
        localStorage.removeItem('user');
    },[]);
    const handleChange=(e)=>{
        setFormData(
            {
                ...formData,
                [e.target.name]:e.target.value,
            }
        );
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError('');
        console.log('Attempting....');
        try{
            const response =await api.post('api/student/login',formData);
            console.log('login success,recieved response:');
            if(response.data.token)
            {
                localStorage.setItem('studentToken',response.data.token);
                localStorage.setItem('user',JSON.stringify(response.data.student));
                navigate('/student-dashboard');
            }
            else{
                setError("login fail");
            }
        }
        catch(err)
        {
            console.error('login failed',err.response?.data||err.message);
            setError(err.message?.data?.message||'An error occured');
        }
    };
    
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
                    <form onSubmit={handleSubmit}>
                        <label>Email Address</label>
                        <input type='text' placeholder='Enter your email' onChange={handleChange} name='email' value={formData.email} required/>
                        <label>Password</label>
                        <input type='password' placeholder='Enter your password' value={formData.password} name='password' onChange={handleChange} required/>
                    
                    <div className='remember-box'>
                        <div>
                             <input type='checkbox'/>
                            <label>Remember me</label>
                        </div>
                        <p>Forgot Password?</p>
                        
                    </div>
                    {error&&<p className='error-message'>{error}</p>}
                    <button type='submit'>Sign In</button>
                    </form>
                </div>
                <p>Don't have an account?<Link to='/signup'>Sign Up</Link> </p>
            </div>
        </div>
    </>
  )
}

export default Login