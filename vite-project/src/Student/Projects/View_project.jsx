import React from 'react'
import image from '../../assets/image.png'
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { FaPaperclip } from "react-icons/fa6";
import { VscEye } from "react-icons/vsc";
import { FiFileText } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import './View_project.css'
import { FaCircle } from "react-icons/fa6";
const View_project = () => {

    const smallProjects = [
  {
    id: 1,
    title: "Guardian Top",
    description: "AI powered web app",
    status: "On Going",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 2,
    title: "Pet Shelter Finder",
    description: "Platform for booking pet shelters",
    status: "Completed",
    thumbnail: "https://images.unsplash.com/photo-1558788353-f76d92427f16"
  },
  {
    id: 3,
    title: "EduConnect",
    description: "Student-alumni networking platform",
    status: "On Going",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    id: 4,
    title: "HealthTrack",
    description: "AI health monitoring dashboard",
    status: "On Going",
    thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
  },
  {
    id: 5,
    title: "GreenCart",
    description: "Sustainable e-commerce platform",
    status: "Completed",
    thumbnail: "https://images.unsplash.com/photo-1503602642458-232111445657"
  }
]

    return (
        <>
            <div className='view-project-page'>
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
                <div className='view-project-pg-content'>
                    <div className='view-project-left'>
                        <div className='view-project-search'>
                            <input type='text' placeholder='Search more like this...' />
                        </div>
                        {smallProjects.map((prj) => (
                            <div key={prj.id} className='small-project'>
                                <div className='small-project-content'>
                                    <div className='thumbnail-div'>
                                        <img src={prj.thumbnail} alt={prj.title} />
                                    </div>
                                    <div className='small-project-details'>
                                        <h3>{prj.title}</h3>
                                        <p>{prj.description}</p>
                                    </div>
                                    <p className={`status-small-project ${prj.status === "Completed" ? "completed" : "ongoing"}`}>
                                        <FaCircle />
                                    </p>
                                </div>
                                <div className='view-btn-container'>
                                    <button>View</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='view-project-middle'>
                        <div className='pr-header'>
                            <div className='maa'>
                                <div className='pr-header-thumbnail'>
                                    <img src={image} />
                                </div>
                                <div className='pr-header-detail'>
                                    <h2>Gaurdian Top</h2>
                                    <p>AI powered web app</p>
                                </div>
                            </div>

                            <div className='pr-header-status'>
                                <p>On Going</p>
                            </div>
                        </div>
                        <div className='pr-des'>
                            <h3>DESCRIPTION</h3>
                            <p>Gaurdian Top is a personal safety mobile app designed to protect women in emergency situations with a single tap. It instantly shares live location, sends a voice message, activates a loud siren, and alerts emergency contacts or authorities. The app also includes features like fake calls and auto-alert systems to ensure quick response and distraction from threats. With funding, Guardian Tap aims to become a widely accessible and life-saving tool, offering fast, reliable support to women in distress, and promoting a safer environment through technology-driven protection.</p>
                        </div>
                        <div className='pr-details'>
                            <h3>DETAILS</h3>
                            <div className='pr-all-details'>
                                <div className='pr-start-date'>
                                    <p className='calendar-icon'><IoCalendarOutline style={{ background: 'transparent', fontSize: '1.5em' }} /></p>
                                    <div>
                                        <p>Start Date</p>
                                        <p>02 Jun,2025</p>
                                    </div>
                                </div>
                                <div className='pr-end-date'>
                                    <p className='calendar-icon'><IoCalendarOutline style={{ background: 'transparent', fontSize: '1.5em' }} /></p>
                                    <div>
                                        <p>End Date</p>
                                        <p>02 Jun,2025</p>
                                    </div>
                                </div>
                                <div className='total-budget-pr'>
                                    <p className='dollar-icon'><AiOutlineDollar style={{ background: 'transparent', fontSize: '1.7em' }} /></p>
                                    <div>
                                        <p>Total Budget Spent</p>
                                        <p>20,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pr-stacks'>
                            <h3>TECH STACKS</h3>
                            <div className='pr-tech-stacks'>
                                <p>REACT</p>
                                <p>NODE JS</p>
                                <p>MONGO DB</p>
                                <p>JAVA</p>
                            </div>
                        </div>
                        <div className='pr-hashtags'>
                            <h3>HASHTAGS</h3>
                            <div className='pr-hashtags-all'>
                                <p>#womenSafety</p>
                                <p>#techForGood</p>
                                <p>#support</p>
                                <p>#studentProject</p>
                            </div>
                        </div>
                        <div className='pr-achievements'>
                            <h3>ACHIEVEMENTS</h3>
                            <div className='pr-ach'>
                                <p className='file-icon'><FiFileText style={{ fontSize: '2em', background: 'transparent' }} /></p>
                                <div>
                                    <p>HackerX</p>
                                    <p>287.4kb</p>
                                </div>
                                <p className='download-icon'><MdOutlineFileDownload style={{ fontSize: '1.5em', background: 'transparent', fontWeight: '300' }} /></p>
                            </div>
                        </div>
                        <div className='pr-comments'>
                            <h3>COMMENTS</h3>
                            <div className='pr-comments-text'>
                                <textarea placeholder='Add a comment' />
                                <div>
                                    <button className='send-btn'>Send</button>
                                    <p><FaPaperclip /></p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='view-project-right'>
                        <div className='pr-owner-info'>
                            <div className='pr-owner-header'>
                                <div className='m'>
                                    <img src={image} />
                                    <div className='pr-owner-header-detail'>
                                        <h4>Vishal Saravanane</h4>
                                        <p><span>Project Tester</span>.SMVEC</p>
                                    </div>
                                </div>

                                <h4>Posted By</h4>
                            </div>
                            <div className='pr-owner-stack'>
                                <p>REACT</p>
                                <p>AWS</p>
                                <p>PYTHON</p>
                            </div>
                            <div className='pr-owner-bio'>
                                <p>Student Tester ensuring project equality and performance</p>
                                <p>Batch:2020-2024</p>
                            </div>
                            <div className='view-profile-owner-class'>
                                <button className='view-profile-owner'>View Profile</button>

                            </div>
                        </div>
                        <div className='pr-team-mem'>
                            <h3 className='mem-title'>MEMBERS</h3>
                            <div className='pr-each-team-mem'>
                                <div className='mem-whole-div'>
                                    <img src={image} />
                                    <div className='each-mem-detail'>
                                        <h4>Harry Potter</h4>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>

                                <p><VscEye style={{ fontSize: '1.5em' }} /></p>
                            </div>
                            <div className='pr-each-team-mem'>
                                <div className='mem-whole-div'>
                                    <img src={image} />
                                    <div className='each-mem-detail'>
                                        <h4>Harry Potter</h4>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>

                                <p><VscEye style={{ fontSize: '1.5em' }} /></p>
                            </div>
                            <div className='pr-each-team-mem'>
                                <div className='mem-whole-div'>
                                    <img src={image} />
                                    <div className='each-mem-detail'>
                                        <h4>Harry Potter</h4>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>

                                <p><VscEye style={{ fontSize: '1.5em' }} /></p>
                            </div>
                        </div>
                        <div className='pr-attachments'>
                            <h3>ATTACHMENTS</h3>
                            <div className='each-attachment'>
                                <div className='whole-attachment-div'>
                                    <p className='f-icon'><FiFileText style={{ fontSize: '1.5em' }} /></p>
                                    <div className='file-name-div'>
                                        <h4>HackerX file</h4>
                                        <p>428.9KB</p>
                                    </div>
                                </div>

                                <p style={{ marginTop: '0.2em' }}><MdOutlineFileDownload style={{ fontSize: '1.5em', color: 'rgb(34, 34, 34)' }} /></p>
                            </div>
                            <div className='each-attachment'>
                                <div className='whole-attachment-div'>
                                    <p className='f-icon'><FiFileText style={{ fontSize: '1.5em' }} /></p>
                                    <div className='file-name-div'>
                                        <h4>HackerX file</h4>
                                        <p>428.9KB</p>
                                    </div>
                                </div>

                                <p style={{ marginTop: '0.2em' }}><MdOutlineFileDownload style={{ fontSize: '1.5em', color: 'rgb(34, 34, 34)' }} /></p>
                            </div>
                            <div className='each-attachment'>
                                <div className='whole-attachment-div'>
                                    <p className='f-icon'><FiFileText style={{ fontSize: '1.5em' }} /></p>
                                    <div className='file-name-div'>
                                        <h4>HackerX file</h4>
                                        <p>428.9KB</p>
                                    </div>
                                </div>

                                <p style={{ marginTop: '0.2em' }}><MdOutlineFileDownload style={{ fontSize: '1.5em', color: 'rgb(34, 34, 34)' }} /></p>
                            </div>
                            <div className='each-attachment'>
                                <div className='whole-attachment-div'>
                                    <p className='f-icon'><FiFileText style={{ fontSize: '1.5em' }} /></p>
                                    <div className='file-name-div'>
                                        <h4>HackerX file</h4>
                                        <p>428.9KB</p>
                                    </div>
                                </div>

                                <p style={{ marginTop: '0.2em', color: 'grey' }}><MdOutlineFileDownload style={{ fontSize: '1.5em', color: 'rgba(65, 64, 64, 1)' }} /></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View_project