import React from 'react'
import dp from '../../assets/dp.png'
import { FiGithub } from "react-icons/fi";
import { HiStar } from "react-icons/hi";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import './Student_profile.scss'
import { FaRegEdit } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RiShareForwardLine } from "react-icons/ri";
const Student_profile = () => {
    return (
        <>
            <div className='Std-profile-pg'>
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
                <div className='std-profile-banner'>
                    <div className='profile-img-sec'>
                        <img src={dp} style={{width:'100px',height:'100px'}}/>
                    </div>
                    <div className='std-name-clg'>
                        <h3>Vishal Saravanane</h3>
                        <p style={{color:'black'}}>Engineering Student-Computer Science Engineering</p>
                        <p>Graduating 2025</p>
                        <div className='clg-name-loc'>
                            <p>Smvec</p>
                            <p>Madagadipet</p>
                        </div>
                        <p style={{color:'black'}}>Passionate CS student focused on AI/ML and sustainable technology. Building the future through code and innovation.</p>
                    </div>
                    <div className='profile-btns'>
                        <button className='edit'><FaRegEdit style={{background:'transparent',color:'white'}}/> Edit Profile</button>
                        <button className='share-btn' style={{display:'flex',alignItems:'center',gap:'0.5em'}}><RiShareForwardLine style={{background:'transparent',color:'black',fontSize:'1.5em'}}/>Share Profile</button>
                    </div>
                </div>
                <div className='std-details'>
                    <div className='std-details-left'>
                        <div className='std-about-me'>
                            <h3>About Me</h3>
                            <p>I'm a third-year Computer Science student at MIT with a passion for artificial intelligence and machine learning. My goal is to develop technology that can make a positive impact on environmental sustainability. I love collaborating on open-source projects and participating in hackathons. When I'm not coding, you can find me rock climbing or exploring Boston's food scene.</p>
                        </div>
                        <div className='std-projects'>
                            <h3>Projects</h3>
                            <div className='individual-project-std'>
                                <div className='individual-project-title'>
                                    <h4>EcoTrack - Carbon Footprint Calculator</h4>
                                    <p><FiGithub style={{background:'transparent'}}/></p>
                                </div>
                                <p>A web application that helps users track and reduce their carbon footprint through daily activity monitoring and personalized recommendations.</p>
                                <div className='project-stacks'>
                                    <p>React</p>
                                    <p>Chart Js</p>
                                    <p>MongoDB</p>
                                    <p>Node.js</p>
                                </div>
                            </div>
                            <div className='individual-project-std'>
                                <div className='individual-project-title'>
                                    <h4>EcoTrack - Carbon Footprint Calculator</h4>
                                    <p><FiGithub  style={{background:'transparent'}}/></p>
                                </div>
                                <p>A web application that helps users track and reduce their carbon footprint through daily activity monitoring and personalized recommendations.</p>
                                <div className='project-stacks'>
                                    <p>React</p>
                                    <p>Chart Js</p>
                                    <p>MongoDB</p>
                                    <p>Node.js</p>
                                </div>
                            </div>
                            <p className='view-all-link'>View all Projects</p>
                        </div>
                        <div className='fundraising-section-std'>
                            <h3>Fundraising Campaigns</h3>
                            <div className='a'>
                                <h4>Women in Tech Scholarship Fund</h4>
                                <p>
                                    Supporting underrepresented women pursuing careers in technology through educational scholarships.
                                </p>
                                <div className='progress-bar'>
                                    <div className='names'>
                                        <p>Raised: $2000</p>
                                        <p>Goal: $10000</p>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='std-details-right'>
                        <div className='skills-card'>
                            <div className='skills-title'>
                                <p><HiStar  style={{background:'transparent',fontSize:'1.5em'}}/></p>
                                <h3>Skills</h3>
                            </div>
                            <div className='domains'>
                                <p>Python</p>
                                <p>JavaScript</p>
                                <p>TensorFlow</p>
                                <p>Machine Learning</p>
                                <p>Artificial Intelligence</p>
                                <p>Git</p>
                            </div>
                        </div>
                        <div className='education-card'>
                            <div className='education-title'>
                                <p style={{fontSize:'1.5em'}}><RiGraduationCapFill style={{background:'transparent'}}  /></p>
                                <h3>Education</h3>
                            </div>
                            <div className='education-details'>
                                <p>B.S. Computer Science Engineering</p>
                                <p>Massachusetts Institute of Technology</p>
                                <p>Class of 2025</p>
                            </div>

                        </div>
                        <div className='academic-intrest'>
                            <h3>Academic Intrests</h3>
                            <div className='intrested-areas'>
                                <p>Artificial intelligence</p>
                                <p>Machine learning</p>
                                <p>Cloud Computing</p>
                                <p>System Design</p>
                                <p>Problem solving</p>
                            </div>

                        </div>
                        <div className='Looking-for'>
                            <h3>Looking For</h3>
                            <ul>
                                <li>Machine Learning mentorship</li>
                                <li>Summer internship opportunities</li>
                                <li>Open source collaboration</li>
                                <li>Research opportunities in AI</li>
                                <li>Startup co-founders</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className='connect-links'>
                    <h3>Connect</h3>
                    <div className='links'>
                        <div>
                            <p><FaLinkedin/></p>
                            <h4>Linkedin</h4>
                        </div>
                        <div>
                            <p><FaLinkedin/></p>
                            <h4>Linkedin</h4>
                        </div>
                        <div>
                            <p><FaLinkedin/></p>
                            <h4>Linkedin</h4>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Student_profile