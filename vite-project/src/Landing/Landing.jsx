import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import './Landing.css'
import { BsSuitcaseLg } from "react-icons/bs";
import image from '../assets/image.png'
import { PiQuotesFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
const Landing = () => {
    const Navigate=useNavigate();
    const handleAbout=()=>{
        Navigate('/aboutUs')
    }
    return (
        <>
            <div className='landing-pg'>
                <div className='nav-bar'>
                    <h4>ConnectE</h4>
                    <nav>
                        <ul>
                            <li>How It Works</li>
                            <li onClick={handleAbout}>About Us</li>
                            <li>FAQ</li>
                            <li>Contact Us</li>
                        </ul>
                    </nav>
                    <div className='btn-class'>
                        <button className='login-btn'>Login</button>
                        <button>Sign Up</button>
                    </div>

                </div>
                <div className='banner-sec'>
                    <div className='banner-title'>
                        <h2>Connect, Learn, Grow: Your Engineering Alumni Network</h2>
                        <h4>Empowering the next generation of engineers through mentorship, real-world projects, and exclusive opportunities.</h4>
                    </div>
                    <div className='login-btns'>
                        <button>Login as a Student</button>
                        <button>Login as a Alumni</button>
                    </div>
                </div>
                <div className='working'>
                    <div className='working-title'>
                        <h2>How Engineering Connect Works</h2>
                        <h5>Discover how our platform bridges the gap between students and alumni to create meaningful connections and opportunities. </h5>
                    </div>
                    <div className='working-cards'>
                        <div className='work-card-1'>
                            <p className='icon-p'><BsSuitcaseLg style={{background:'transparent'}}/></p>
                            <h3>guidance From The Best</h3>
                            <p>Connect students with experienced alumni for career advice, mentorship, and professional development support.</p>
                        </div>
                        <div className='work-card-1'>
                            <p className='icon-p'><BsSuitcaseLg style={{background:'transparent'}}/></p>
                            <h3>guidance From The Best</h3>
                            <p>Connect students with experienced alumni for career advice, mentorship, and professional development support.</p>
                        </div>
                        <div className='work-card-1'>
                             <p className='icon-p'><BsSuitcaseLg style={{background:'transparent', color:'blue'}}/></p>
                            <h3>guidance From The Best</h3>
                            <p>Connect students with experienced alumni for career advice, mentorship, and professional development support.</p>
                        </div>
                    </div>
                    <button className='see-features'>See All features</button>

                </div>
                <div className='hear-from-community'>
                    <div className='community-title'>
                        <h3>Hear From Our Community</h3>
                        <p>Real stories from students and alumni who have benefited from our platform</p>
                    </div>
                    <div className='community-card'>
                        <div className='card-1'>
                            <p style={{width:'100%',fontSize:'2em',background:'transparent'}}><PiQuotesFill style={{background:'transparent'}}/></p>
                            <p >"Engineering Connect helped me land my dream internship through an alumni connection. The mentorship I received was invaluable for my career development."Sarah Chen</p>
                            <div className='card-profile'>
                                <img src={image} style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
                                <div>
                                    <h5>Vishal Saravanane</h5>
                                    <p>Software Engineer at Tesla, Class of 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className='card-1'>
                                                        <p style={{width:'100%',fontSize:'2em',background:'transparent'}}><PiQuotesFill style={{background:'transparent'}}/></p>
                            <p>"Engineering Connect helped me land my dream internship through an alumni connection. The mentorship I received was invaluable for my career development."Sarah Chen</p>
                            <div className='card-profile'>
                                <img src={image} style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
                                <div>
                                    <h5>Vishal Saravanane</h5>
                                    <p>Software Engineer at Tesla, Class of 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='explore'>
                    <div className='explore-top'>
                        <h3>Explore Oppurtunities</h3>
                        <p>Discover the latest projects, internships, and community initiatives.</p>
                    </div>
                    <div className='explore-bottom'>
                        <div className='explore-left'>
                            <h3>Latest Oppurtunities</h3>
                            <div className='explore-card'>
                                <div className='job-type'>
                                    <p className='p-i-type'>Project</p>
                                    <p className='p-icon'><FiExternalLink style={{fontSize: '1.5em'}} /></p>
                                </div>
                                <div className='opp-title'>
                                    <h3>Mobile App Development for Sustainability Startup</h3>
                                    <p>GreenTech Solutions</p>
                                </div>
                                <p className='des-p'>Looking for talented students to help develop a React Native app for tracking carbon footprint...</p>
                                <div className='project-stacks'>
                                    <p>React Native</p>
                                    <p>Node JS</p>
                                    <p>Remote</p>
                                </div>
                                <div className='btn-class'>
                                    <button className='view-details-btn'>View Details</button>
                                </div>
                            </div>
                            <div className='explore-card'>
                                <div className='job-type'>
                                    <p className='p-i-type' >Project</p>
                                    <p className='p-icon'><FiExternalLink style={{fontSize: '1.5em'}} /></p>
                                </div>
                                <div className='opp-title'>
                                    <h3>Mobile App Development for Sustainability Startup</h3>
                                    <p>GreenTech Solutions</p>
                                </div>
                                <p className='des-p'>Looking for talented students to help develop a React Native app for tracking carbon footprint...</p>
                                <div className='project-stacks'>
                                    <p>React Native</p>
                                    <p>Node JS</p>
                                    <p>Remote</p>
                                </div>
                                <div className='btn-class'>
                                    <button className='view-details-btn'>View Details</button>
                                </div>
                            </div>
                         
                        </div>
                        <div className='explore-right'>
                            <div className='funding-card'>
                                <h3>$ Funding Initiative</h3>
                                <h5>Student Robotics Team - National Competition Fund</h5>
                                <p>Help our robotics team compete in the national championship by funding travel and equipment costs.</p>
                                                                <div className='fund-percent' style={{width:'100%',background:'transparent'}}>
                                      <p style={{color:'grey',fontSize:'smaller'}}>Raised funds</p>
                                <div style={{width:'100%',height:'4px',color:'green',backgroundColor:'blue',borderRadius:'10px'}}></div>
                                </div>
                                <button>Support This Initiative</button>
                            </div>
                            <div className='funding-card'>
                                <h3>$ Funding Initiative</h3>
                                <h5>Student Robotics Team - National Competition Fund</h5>
                                <p>Help our robotics team compete in the national championship by funding travel and equipment costs.</p>
                                <div className='fund-percent' style={{width:'100%',background:'transparent'}}>
                                      <p style={{color:'grey',fontSize:'smaller'}}>Raised funds</p>
                                <div style={{width:'100%',height:'4px',color:'green',backgroundColor:'blue',borderRadius:'10px'}}></div>
                                </div>
                              
                                <button>Support This Initiative</button>
                            </div>
                        </div>
                    </div>
                    <button className='explore-btn'>Explore All Oppurtunities</button>
                </div>
                <div className='ready'>
                    <h2>Ready To Connect</h2>
                    <p>Join our growing community today and unlock opportunities that will shape your engineering career.</p>
                    <div className='signup-btns'>
                        <button>Signup as Student</button>
                        <button>Signup as Alumni</button>
                    </div>
                </div>
                <footer>

                </footer>
            </div>
        </>
    )
}

export default Landing