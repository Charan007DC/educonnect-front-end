import React, { useState, useEffect } from 'react';
import api from '../../services/api'; // 1. Import the pre-configured api service
import './Student_profile.css'; // Assuming this is your stylesheet

// Import your icons
import { FiGithub } from "react-icons/fi";
import { HiStar } from "react-icons/hi";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";


const Student_profile = () => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const token = localStorage.getItem('studentToken');
                if (!token) {
                    setError('Authentication token not found. Please log in.');
                    setLoading(false);
                    return;
                }

                // 2. Use the 'api' service to make the request
                const response = await api.get('/api/student/profile', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                // 3. With axios, the data is in response.data
                setProfileData(response.data);

            } catch (err) {
                setError(err.response?.data?.message || 'Failed to fetch profile data.');
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, []);

    if (loading) {
        return <div>Loading profile...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>Error: {error}</div>;
    }

    if (!profileData) {
        return <div>No profile data found.</div>;
    }

    // This is your original UI, now populated with dynamic data
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
                        <img 
                            src={profileData.profilePicture || 'https://placehold.co/100x100/EFEFEF/AAAAAA&text=No+Image'} 
                            alt="Profile"
                            style={{width:'100px',height:'100px', borderRadius: '50%'}}
                        />
                    </div>
                    <div className='std-name-clg'>
                        <h3>{profileData.name}</h3>
                        <p style={{color:'black'}}>{profileData.department}</p>
                        <p>Graduating {profileData.graduationYear}</p>
                        <div className='clg-name-loc'>
                            <p>{profileData.institution}</p>
                            <p>{profileData.location || 'Location not set'}</p>
                        </div>
                        <p style={{color:'black'}}>{profileData.description || 'No description provided.'}</p>
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
                            <p>{profileData.about || 'No information provided.'}</p>
                        </div>
                        <div className='std-projects'>
                            <h3>Projects</h3>
                            {profileData.projects?.length > 0 ? (
                                profileData.projects.map((project, index) => (
                                    <div key={index} className='individual-project-std'>
                                        <div className='individual-project-title'>
                                            <h4>{project.title}</h4>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer"><FiGithub style={{background:'transparent'}}/></a>
                                        </div>
                                        <p>{project.description}</p>
                                        <div className='project-stacks'>
                                            {project.technologies?.map(tech => <p key={tech}>{tech}</p>)}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No projects listed.</p>
                            )}
                        </div>
                        <div className='fundraising-section-std'>
                            <h3>Fundraising Campaigns</h3>
                             {profileData.fundraisingCampaigns?.length > 0 ? (
                                profileData.fundraisingCampaigns.map((campaign, index) => (
                                <div key={index} className='a'>
                                    <h4>{campaign.title}</h4>
                                    <p>{campaign.description}</p>
                                    <div className='progress-bar'>
                                        <div className='names'>
                                            <p>Raised: ${campaign.currentAmount}</p>
                                            <p>Goal: ${campaign.goalAmount}</p>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                ))
                             ) : (
                                <p>No fundraising campaigns listed.</p>
                             )}
                        </div>
                    </div>
                    <div className='std-details-right'>
                        <div className='skills-card'>
                            <div className='skills-title'>
                                <p><HiStar style={{background:'transparent',fontSize:'1.5em'}}/></p>
                                <h3>Skills</h3>
                            </div>
                            <div className='domains'>
                                {profileData.skills?.length > 0 ? profileData.skills.map(skill => <p key={skill}>{skill}</p>) : <p>No skills listed.</p>}
                            </div>
                        </div>
                        <div className='education-card'>
                            <div className='education-title'>
                                <p style={{fontSize:'1.5em'}}><RiGraduationCapFill style={{background:'transparent'}} /></p>
                                <h3>Education</h3>
                            </div>
                            <div className='education-details'>
                                <p>{profileData.department}</p>
                                <p>{profileData.institution}</p>
                                <p>Class of {profileData.graduationYear}</p>
                            </div>
                        </div>
                        <div className='academic-intrest'>
                            <h3>Academic Interests</h3>
                            <div className='intrested-areas'>
                                {profileData.academicInterests?.length > 0 ? profileData.academicInterests.map(interest => <p key={interest}>{interest}</p>) : <p>No interests listed.</p>}
                            </div>
                        </div>
                        <div className='Looking-for'>
                            <h3>Looking For</h3>
                            <ul>
                               {profileData.lookingFor?.length > 0 ? profileData.lookingFor.map(item => <li key={item}>{item}</li>) : <li>Not specified.</li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Student_profile;
