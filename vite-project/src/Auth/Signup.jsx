import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '..//services/api'; 
import './Login.css'; 
const Signup = () => {
    const [signupType, setSignupType] = useState("Student");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',        
        institution: '',
        department: '',
        graduationYear: '',
        company: '',
        jobTitle: '',
        mentorship: 'No',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            let endpoint = '';
            let payload = {};

            if (signupType === 'Student') {
                endpoint = 'api/student/register';
                payload = {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    institution: formData.institution,
                    department: formData.department,
                    graduationYear: formData.graduationYear,
                };
                //YET TO BE CHANGEDDDDD
            } else { // Alumni
                endpoint = '/alumni/register'; // Assuming this is your alumni registration endpoint
                payload = {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    institution: formData.institution,
                    department: formData.department,
                    graduationYear: formData.graduationYear,
                    company: formData.company,
                    jobTitle: formData.jobTitle,
                    mentorship: formData.mentorship === 'Yes', // Convert to boolean if needed
                };
            }

            await api.post(endpoint, payload);
            alert('Registration successful! Please log in.');
            navigate('/login');

        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='signup-page'>
                <div className='signup-card'>
                    <div className='e-connect-logo'>
                        <h2>EC</h2>
                        <h3>Join The Network</h3>
                        <p>Sign up to start your journey</p>
                    </div>
                    <div className='signup-button-types'>
                        <button className={signupType === "Student" ? "signup-btn active" : "signup-btn inactive"} onClick={() => setSignupType("Student")}>Student</button>
                        <button className={signupType === "Alumni" ? "signup-btn active" : "signup-btn inactive"} onClick={() => setSignupType("Alumni")}>Alumni</button>
                    </div>
                    <div className='signup-form'>
                        <form onSubmit={handleSubmit}>
                            {/* Common Fields */}
                            <label>Full Name</label>
                            <input type="text" name="name" placeholder='Enter your full name' onChange={handleChange} value={formData.name} style={{color:'green'}} required />
                            
                            <label>Email Address</label>
                            <input type='email' name="email" placeholder='Enter your email address' onChange={handleChange} value={formData.email} required />
                            
                            <label>Password</label>
                            <input type='password' name="password" placeholder='Create a new password' onChange={handleChange} value={formData.password} required />
                            
                            <label>Confirm Password</label>
                            <input type='password' name="confirmPassword" placeholder='Confirm your password' onChange={handleChange} value={formData.confirmPassword} required />

                            {/* Conditional Fields */}
                            {signupType === 'Student' && (
                                <>
                                    <label>University</label>
                                    <input type='text' name="institution" placeholder='Enter your university' onChange={handleChange} value={formData.institution} required />
                                    
                                    <label>Engineering Branch</label>
                                    <input type='text' name="department" placeholder='e.g., Computer Science' onChange={handleChange} value={formData.department} required />
                                    
                                    <label>Expected Graduation Year</label>
                                    <input type='number' name="graduationYear" placeholder='e.g., 2025' onChange={handleChange} value={formData.graduationYear} required />
                                </>
                            )}
                            {signupType === 'Alumni' && (
                                <>
                                    <label>University</label>
                                    <input type='text' name="institution" placeholder='Enter your university' onChange={handleChange} value={formData.institution} required />
                                    
                                    <label>Engineering Branch</label>
                                    <input type='text' name="department" placeholder='e.g., Computer Science' onChange={handleChange} value={formData.department} required />
                                    
                                    <label>Graduation Year</label>
                                    <input type='number' name="graduationYear" placeholder='e.g., 2021' onChange={handleChange} value={formData.graduationYear} required />
                                    
                                    <label>Current Company</label>
                                    <input type='text' name="company" placeholder='Enter your company' onChange={handleChange} value={formData.company} />
                                    
                                    <label>Job Title</label>
                                    <input type='text' name="jobTitle" placeholder='Enter your job title' onChange={handleChange} value={formData.jobTitle} />
                                    
                                    <label>Willing to do Mentorship</label>
                                    <select name="mentorship" onChange={handleChange} value={formData.mentorship}>
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                </>
                            )}

                            {error && <p className="error-message">{error}</p>}

                            <button type='submit' className='submit' disabled={loading}>
                                {loading ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </form>
                        <p>
                            Already have an account? <Link to="/login">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
