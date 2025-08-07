import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import api from '../services/api';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('studentToken');
        localStorage.removeItem('user');
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(''); 

        console.log('Attempting to log in with:', formData); 

        try {
            const response = await api.post('api/student/login', formData);
            
            console.log('Login successful, received response:', response);

            if (response.data.token) {
                // --- FINAL FIX ---
                // 1. Save the token and user data first. This is the most stable approach.
                localStorage.setItem('studentToken', response.data.token); 
                localStorage.setItem('user', JSON.stringify(response.data.student));
                
                // 2. Then, navigate to the dashboard.
                navigate('/student-dashboard');
                
            } else {
                setError('Login succeeded but no token was received. Please contact support.');
            }
        } catch (err) {
            console.error('Login failed:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
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
                            <input 
                                type='email'
                                name='email'  
                                placeholder='Enter your email'
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                            <label>Password</label>
                            <input 
                                type='password' 
                                name='password' 
                                placeholder='Enter your password'
                                value={formData.password} 
                                onChange={handleChange} 
                                required 
                            />
                            
                            <div className='remember-box'>
                                <div>
                                    <input type='checkbox'/>
                                    <label>Remember me</label>
                                </div>
                                <p>Forgot Password?</p>
                            </div>
                            
                            {error && <p className="error-message">{error}</p>}
                            <button type='submit'>Sign In</button>
                        </form>
                    </div>
                    <p>
                        Don't have an account? <Link to="/signup">Sign Up</Link> 
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
