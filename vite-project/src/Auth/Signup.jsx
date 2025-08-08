import React, { useState } from 'react'
import './Login.css'
import { useNavigate,Link } from 'react-router-dom'
import api from '../Apiservices/api'
const Signup = () => {
    const [SignupType, SetSignupType] = useState("Student")
    const [formData, setFormData] = useState(
        {
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
        }
    )
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        if (formData.password !== formData.confirmPassword) {
            setError("Password doesn't match");
            setLoading(false);
            return;
        }
        try {
            let endpoint = '';
            let payload = {};
            if (SignupType == 'Student') {
                endpoint = 'api/student/register';
                payload = {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    institution: formData.institution,
                    department: formData.department,
                    graduationYear: formData.graduationYear,
                }

            }
            else {
                endpoint = 'api/alumni/register';
                payload = {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    institution: formData.institution,
                    department: formData.department,
                    graduationYear: formData.graduationYear,
                    company: formData.company,
                    jobTitle: formData.jobTitle,
                    mentorship: formData.mentorship === 'Yes'
                }
            }
            await api.post(endpoint, payload);
            alert('Registration successful! please login');
            navigate('/login');
        }
        catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again');
        }
        finally {
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
                        <p>Sign in to continue your journey</p>
                    </div>
                    <div className='signup-button-types'>
                        <button className={SignupType === "Student" ? "signup-btn active" : "signup-btn inactive"} onClick={() => SetSignupType("Student")}>Student</button>
                        <button className={SignupType === "Alumni" ? "signup-btn active" : "signup-btn inactive"} onClick={() => SetSignupType("Alumni")}>Alumni</button>
                    </div>
                    <div className='signup-form'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Full Name</label>
                                <input type="text" name='name' placeholder='Enter your full name' onChange={handleChange} value={formData.name} required />
                            </div>
                            <div>
                                <label>Email Address</label>
                                <input type='text' name='email' placeholder='Enter your email address' onChange={handleChange} value={formData.email} required />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type='text' name='password' placeholder='Create a new password' onChange={handleChange} value={formData.password} required />
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <input type='text' name='confirmPassword' placeholder='Confirm your password' onChange={handleChange} value={formData.confirmPassword} required />
                            </div>
                            {SignupType === 'Student' && (
                                <>

                                    <div >
                                        <label>University</label>
                                        <input type='text' name='institution' placeholder='Enter your university' onChange={handleChange} value={formData.institution} required />
                                    </div>
                                    <div>
                                        <label>Engineering Branch</label>
                                        <input type='text' name='department' placeholder='eg.,Computer Science' onChange={handleChange} value={formData.department} required />
                                    </div>
                                    <div>
                                        <label>
                                            Expected Graduation Year
                                        </label>
                                        <input type='text' name='graduationYear' placeholder='e.g.,2025' onChange={handleChange} value={formData.graduationYear} required />
                                    </div>

                                </>
                            )}
                            {SignupType === 'Alumni' && (
                                <>
                                    <div >
                                        <label>University</label>
                                        <input type='text' name='institution' placeholder='Enter your university' onChange={handleChange} value={formData.institution} required />
                                    </div>
                                    <div>
                                        <label>Engineering Branch</label>
                                        <input type='text' name='department' placeholder='eg.,Computer Science' onChange={handleChange} value={formData.department} required />
                                    </div>
                                    <div>
                                        <label>
                                            Graduation Year
                                        </label>
                                        <input type='text' name='graduationYear' placeholder='e.g.,2025' onChange={handleChange} value={formData.graduationYear} required />
                                    </div>
                                    <div>
                                        <label>Current Company</label>
                                        <input type='text' name='company' placeholder='Enter your company' onChange={handleChange} value={formData.company} />
                                    </div>
                                    <div>
                                        <label>Job Title</label>
                                        <input type='text' name='jobTitle' placeholder='Enter your job title' onChange={handleChange} value={formData.jobTitle} />
                                    </div>
                                    <div>
                                        <label>Willing to do Mentorship</label>
                                        <select name="mentorship" onChange={handleChange} value={formData.mentorship}>
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
                                    </div>

                                </>
                            )}
                            {error&&<p className='error-message'>{error}</p>}
                            <button type='submit' disabled={loading} className='submit'>
                                {loading?'Creating Account...':'Create Account'}
                            </button>
                        </form>
                        <p>Already have an account? <Link to="/login">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup