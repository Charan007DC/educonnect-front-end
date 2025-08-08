import React, { useEffect, useState } from 'react'
import dp from '../../assets/dp.png'
import { FiGithub } from "react-icons/fi";
import { HiStar } from "react-icons/hi";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import './Student_profile.css'
import { FaRegEdit } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import api from '../../Apiservices/api'
import { RiShareForwardLine } from "react-icons/ri";
const Student_profile = () => {
    const [editable, setEditable] = useState(false)
    const [profileData, setProfileData] = useState({
        aboutme: '',
        projects: [],
    })
    const [newProject, setNewProject] = useState({
        title: '',
        project_des: '',
        techStacks: '',
    })
    const handleSave = async() => {
        setEditable(false)
        try{
            const token=localStorage.getItem('studentToken');
            if(!token)
            {
                alert('login to save changes');
                return;
            }
            await api.put('api/student/profile',
                {
                    aboutme:profileData.aboutme,
                    projects:profileData.projects,
                },
                {
                    headers:{'Authorization':`Bearer ${token}`}
                }
            );
            alert("profile updated successfully");
            setEditable(false);
        }
        catch(err)
        {
            alert(err.response?.data?.message||"Failed to save profile");
        }
    };
    const handleAddProject = () => {
        if (!newProject.title || !newProject.project_des || !newProject.techStacks) {
            alert("Please fill in all fields");
            return;
        }

        const updatedProjects = [...profileData.projects, newProject];

        setProfileData({
            ...profileData,
            projects: updatedProjects,
        });

        setNewProject({ title: "", project_des: "", techStacks: "" }); // clear the form
    };
    const [headerData, setHeaderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                const token = localStorage.getItem('studentToken');
                if (!token) {
                    setError('Authentication token not found, please login');
                    setLoading(false);
                    return;
                }
                const response = await api.get('api/student/profile', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setHeaderData(response.data);
                
            }
            catch (err) {
                setError(err.response?.data?.message || 'failed to fetch data');
            }
            finally {
                setLoading(false);
            }
        };
        fetchHeaderData();
    }, [])
    if (loading) {
        return <div>Loading profile</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    if (!headerData) {
        return <div>No profile data found</div>
    }


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
                        <img src={dp} style={{ width: '100px', height: '100px' }} />
                    </div>
                    <div className='std-name-clg'>
                        <h3>{headerData.name}</h3>
                        <p style={{ color: 'black' }}>{headerData.department}</p>
                        <p>Graduating {headerData.graduationYear}</p>
                        <div className='clg-name-loc'>
                            <p>{headerData.institution}</p>
                            <p>{headerData.location || 'location not set'}</p>
                        </div>
                        {/* <p style={{ color: 'black' }}>{profileData.description || 'No description provided.'}</p> */}

                        {/* <p style={{ color: 'black' }}>Passionate CS student focused on AI/ML and sustainable technology. Building the future through code and innovation.</p> */}
                        
                    </div>
                    <div className='profile-btns'>
                        <button className='edit' onClick={() => { setEditable(true) }}><FaRegEdit style={{ background: 'transparent', color: 'white' }} /> Edit Profile</button>
                        <button className='share-btn' style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}><RiShareForwardLine style={{ background: 'transparent', color: 'black', fontSize: '1.5em' }} />Share Profile</button>
                    </div>
                </div>
                <div className='std-details'>
                    <div className='std-details-left'>
                        <div className='std-about-me'>
                            <h3>About Me</h3>
                            {/* <p>I'm a third-year Computer Science student at MIT with a passion for artificial intelligence and machine learning. My goal is to develop technology that can make a positive impact on environmental sustainability. I love collaborating on open-source projects and participating in hackathons. When I'm not coding, you can find me rock climbing or exploring Boston's food scene.</p> */}
                            {(editable || profileData.aboutme.length === 0) ? (
                                <textarea
                                    placeholder="Write about yourself.."
                                    value={profileData.aboutme || ''}
                                    onFocus={() => {
                                        if (!editable) setEditable(true);  // <-- Automatically turn on edit mode
                                    }}
                                    onChange={(e) =>
                                        setProfileData((prev) => ({
                                            ...prev,
                                            aboutme: e.target.value
                                        }))
                                    }
                                />
                            ) : (
                                <p>{profileData.aboutme || <em style={{ color: '#aaa' }}>Click edit to add About Me</em>}</p>
                            )}

                        </div>
                        <div className='std-projects'>
                            <h3>Projects</h3>
                            {/* <div className='individual-project-std'>
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
                            </div> */}
                            {(editable || profileData.projects.length === 0) && (
                                <div className='add-project-form'>
                                    <h3>Add Project</h3>
                                    <input
                                        type="text"
                                        placeholder='Project title'
                                        value={newProject.title}
                                        onChange={(e) =>
                                            setNewProject({ ...newProject, title: e.target.value })
                                        }
                                    />
                                    <textarea
                                        placeholder='Project description...'
                                        value={newProject.project_des}
                                        onChange={(e) =>
                                            setNewProject({ ...newProject, project_des: e.target.value })
                                        }
                                    />
                                    <input
                                        type="text"
                                        placeholder='Technologies used (comma separated)'
                                        value={newProject.techStacks}
                                        onChange={(e) =>
                                            setNewProject({ ...newProject, techStacks: e.target.value })
                                        }
                                    />
                                    <button onClick={handleAddProject}>Add</button>

                                </div>
                            )}
                            {profileData.projects.length > 0 &&
                                profileData.projects.map((project, index) => (
                                    <div key={index} className='individual-project-std'>
                                        <div className='individual-project-title'>
                                            <h4>{project.title}</h4>
                                            <p><FiGithub style={{ background: 'transparent' }} /></p>
                                        </div>
                                        <p>{project.project_des}</p>
                                        <div className='project-stacks'>
                                            {project.techStacks.split(',').map((stack, i) => (
                                                <p key={i}>{stack.trim()}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}

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
                                <p><HiStar style={{ background: 'transparent', fontSize: '1.5em' }} /></p>
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
                                <p style={{ fontSize: '1.5em' }}><RiGraduationCapFill style={{ background: 'transparent' }} /></p>
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
                <button onClick={handleSave}>save</button>
            </div >
        </>
    )
}

export default Student_profile