import React from 'react'
import './Std_profile.css'
const Std_profile = () => {
    return (
        <>
            <div className='std-view-edit-pg'>
                <div className='nav-bar'>
                    <h4>ConnectE</h4>
                    <nav>
                        <ul>
                            <li>How It Works</li>
                            <li >About Us</li>
                            <li>FAQ</li>
                            <li>Contact Us</li>
                        </ul>
                    </nav>
                    <div className='btn-class'>
                        <button className='login-btn'>Login</button>
                        <button>Sign Up</button>
                    </div>

                </div>
                <div className='form-content'>
                    <div className='form-title'>
                        <h3>Join as a Student</h3>
                        <p>Create your account to connect with experienced alumni mentors</p>
                    </div>
                    <form>
                        <div className='form-left'>
                            <lablel>Name </lablel><br />
                            <input type='text' placeholder='Eg., Jhone' /><br />
                            <label>Password</label>
                            <input type='text' placeholder='minimum 8 characters' />
                            <label>University Name</label>
                            <input type='text' placeholder='Eg.,MIT,Stanford University' />
                        </div>
                        <div className='form-right'>
                            <label>Email Address</label>
                            <input type='text' placeholder='Eg.,jhonedoe@gmail.com'/>
                            <label>Confirm Password</label>
                            <input type='text' placeholder='Confirm Your password'/>
                            <label>Engineering Branch</label>
                            <input type='text' placeholder='Branch'/>

                        </div>

                        <label>Graduation Year</label>
                        <select>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                        </select>
                        <label>Short Bio/Interest(Optional)</label>
                        <input type='text' placeholder='Tell us about your goals,interest'/>
                        <button>Create Student Account</button>


                    </form>
                </div>
            </div>
        </>
    )
}

export default Std_profile