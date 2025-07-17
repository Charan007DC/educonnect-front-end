import React from 'react'
import { LuTarget } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className='about-us-pg'>
            <div className='nav-bar'>
                <h4>ConnectE</h4>
                <nav>
                    <ul>
                        <li>How It Works</li>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
                <div className='btn-class'>
                    <button className='login-btn'>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
            <div className='about-banner-sec'>
                <h2>About ConnectE</h2>
                <h4>Connecting the present with future of engineering</h4>
            </div>
            <div className='about-mission-vison'>
                <div className='mission-card'>
                    <div className='mission-title'>
                        <p><LuTarget /></p>
                        <h2>Our Mission</h2>
                    </div>
                    <div className='mission-des'>
                        <p>To cultivate a vibrant, supportive community bridging aspiring engineering students and seasoned alumni. We empower the next generation through mentorship, real-world opportunities, and collaborative learning, while enabling experienced professionals to give back and stay connected with the future of engineering.</p>
                    </div>
                </div>
                <div className='vision-card'>
                    <div className='vision-title'>
                        <p><FaEye /></p>
                        <h2>Our Vission</h2>
                    </div>
                    <div className='vision-des'>
                        <p>We envision a world where knowledge flows seamlessly between generations of engineers, where careers are launched through meaningful connections, and where the future of engineering is shaped through collaboration, innovation, and shared expertise.</p>
                    </div>
                </div>
            </div>
            <div className='gaps'>
                <div className='gaps-title'>
                    <h2>The Gap We Bridge</h2>
                    <p>Understanding the challenges faced by both students and alumni in today's engineering landscape</p>
                </div>
                <div className='gaps-content'>
                    <div className='student-challenges'>
                        <h3>Student Challenges</h3>
                        <ul>
                            <li> Lack of practical guidance beyond classroom theory</li>
                            <li>Limited access to real-world engineering projects</li>
                            <li> Difficulty finding meaningful mentorship</li>
                            <li>Few opportunities to network with industry professionals</li>
                            <li>Challenges in funding innovative student initiatives</li>
                        </ul>
                    </div>
                    <div className='alumni-aspirations'>
                        <h3>Alumni Aspirations</h3>
                        <ul>
                            <li>Desire to give back to the engineering community</li>
                            <li>Want to share expertise with the next generation</li>
                            <li> Seek meaningful ways to stay connected with academia</li>
                            <li>Looking for fresh perspectives and innovative ideas</li>
                            <li>Need for reliable talent pipeline for projects</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='solution'>
                <div className='sol-title'>
                    <h2>Our Solution: Empowering ngineering Excellence</h2>
                    A comprehensive platform designed to meet the unique needs of both students and alumni<p></p>
                </div>
                <div className='solution-content'>
                    <div className='sol-for-std'>
                        <div className='sol-for-std-title'>
                            <h3>For Students</h3>
                        </div>
                        <div className='sol-std-des'>
                            <div className='sol-1'>
                                <div className='sol-1-title'>
                                    <p><TbUsers /></p>
                                    <h4>Mentorships</h4>
                                </div>
                                <p>Access seasoned professionals for career guidance and industry insights</p>
                            </div>
                            <div className='sol-1'>
                                <div className='sol-1-title'>
                                    <p><TbUsers /></p>
                                    <h4>Mentorships</h4>
                                </div>
                                <p>Access seasoned professionals for career guidance and industry insights</p>
                            </div>
                            <div className='sol-1'>
                                <div className='sol-1-title'>
                                    <p><TbUsers /></p>
                                    <h4>Mentorships</h4>
                                </div>
                                <p>Access seasoned professionals for career guidance and industry insights</p>
                            </div>
                            <div className='sol-1'>
                                <div className='sol-1-title'>
                                    <p><TbUsers /></p>
                                    <h4>Mentorships</h4>
                                </div>
                                <p>Access seasoned professionals for career guidance and industry insights</p>
                            </div>
                        </div>
                    </div>
                    <div className='sol-for-alumni'>
                        <div className='sol-alumni-title'>
                            <h3>For Alumni</h3>
                        </div>
                        <div className='sol-alumni-des'>
                            <div className='sol-1'>
                                <div className='sol-1-title'>
                                    <p><TbUsers /></p>
                                    <h4>Mentorships</h4>
                                </div>
                                <p>Mentor the next generation of engineers and share your expertise</p>
                            </div>
                            <div className='sol-1'>
                                <div className='sol-1-title'>
                                    <p><TbUsers /></p>
                                    <h4>Mentorships</h4>
                                </div>
                                <p>Mentor the next generation of engineers and share your expertise</p>
                            </div>
                            <div className='sol-1'>
                                <div className='sol-1-title'>
                                    <p><TbUsers /></p>
                                    <h4>Mentorships</h4>
                                </div>
                                <p>Mentor the next generation of engineers and share your expertise</p>
                            </div>
                            <div className='sol-1'>
                                <div className='sol-1-title'>
                                    <p><TbUsers /></p>
                                    <h4>Mentorships</h4>
                                </div>
                                <p>Mentor the next generation of engineers and share your expertise</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='core-values'>
                <div className='core-value-title'>
                    <h2>Our Core Values</h2>
                    <p>The principles that guide our platform and community</p>
                </div>
                <div className='core-value-cards'>
                    <div className='card-one'>
                        <p><TbUsers/></p>
                        <h4>Community</h4>
                        <p>Building strong connections</p>
                    </div>
                      <div className='card-one'>
                        <p><TbUsers/></p>
                        <h4>Community</h4>
                        <p>Building strong connections</p>
                    </div>
                      <div className='card-one'>
                        <p><TbUsers/></p>
                        <h4>Community</h4>
                        <p>Building strong connections</p>
                    </div>
                      <div className='card-one'>
                        <p><TbUsers/></p>
                        <h4>Community</h4>
                        <p>Building strong connections</p>
                    </div>
                </div>
                
            </div>
            <div className='ready'>
                    <h2>Ready To Connect</h2>
                    <p>Join our growing community today and unlock opportunities that will shape your engineering career.</p>
                    <div className='signup-btns'>
                        <button>Signup as Student</button>
                        <button>Signup as Alumni</button>
                    </div>
            </div>
        </div>
    )
}

export default AboutUs