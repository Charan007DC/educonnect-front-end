import React, { useState, useEffect } from 'react';
import api from '../../services/api'; // Make sure this path is correct
import dp from '../../assets/dp.png';
import { FiGithub } from "react-icons/fi";
import { HiStar } from "react-icons/hi";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import './Student_profile.css'; // Using .css as per your latest file, change to .scss if needed
import { FaRegEdit } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const Student_profile = () => {
    const [profileData, setProfileData] = useState(null);
    const [editable, setEditable] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // This state will hold the form for adding a new project
    const [newProject, setNewProject] = useState({
        title: '',
        description: '',
        technologies: '', // We'll handle this as a comma-separated string
        link: ''
    });

    // Fetch profile data from the backend when the component loads
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const token = localStorage.getItem('studentToken');
                if (!token) {
                    setError('Authentication token not found.');
                    setLoading(false);
                    return;
                }
                // --- THIS IS THE FIX ---
                // The Authorization header must be included for protected routes.
                const response = await api.get('/api/student/profile', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setProfileData(response.data);
            } catch (err) {
                setError('Failed to fetch profile data.');
            } finally {
                setLoading(false);
            }
        };
        fetchProfileData();
    }, []);

    // Handle input changes for all fields when in edit mode
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };
    
    // Handle changes for the new project form
    const handleNewProjectChange = (e) => {
        const { name, value } = e.target;
        setNewProject(prev => ({ ...prev, [name]: value }));
    };

    // Add the new project to the profile data state
    const handleAddProject = () => {
        if (!newProject.title || !newProject.description || !newProject.technologies) {
            alert("Please fill in all project fields");
            return;
        }
        const projectToAdd = {
            ...newProject,
            // Split the comma-separated string into an array
            technologies: newProject.technologies.split(',').map(tech => tech.trim())
        };
        const updatedProjects = [...(profileData.projects || []), projectToAdd];
        setProfileData({ ...profileData, projects: updatedProjects });
        // Clear the form
        setNewProject({ title: "", description: "", technologies: "", link: "" });
    };

    // Handle saving all updated profile data to the backend
    const handleSave = async () => {
        try {
            const token = localStorage.getItem('studentToken');
            await api.put('/api/student/profile', profileData, {
                 headers: { 'Authorization': `Bearer ${token}` }
            });
            setEditable(false); // Exit edit mode after saving
        } catch (err) {
            setError('Failed to update profile. Please try again.');
        }
    };

    if (loading) return <div>Loading profile...</div>;
    if (error) return <div style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>Error: {error}</div>;
    if (!profileData) return <div>No profile data found.</div>;

    return (
        <>
            <div className='Std-profile-pg'>
                <div className='nav-bar'>
                    <h4 className='logo-name'>ConnectE</h4>
                    <nav>
                        <ul>
                            <li>How It Works</li>
                            <li>About Us</li>
                            <li>FAQ</li>
                            <li>Contact Us</li>
                        </ul>
                    </nav>
                    <div className='btn-class'>
                        <button className='login-btn'>Logout</button>
                    </div>
                </div>

                <div className='std-profile-banner-ref'>
                    <div className='profile-img-sec-ref'>
                        <img src={profileData.profilePicture || dp} alt="Profile" />
                    </div>
                    <div className='std-name-clg-ref'>
                        <h3>{profileData.name}</h3>
                        <p className='profile-dept'>{profileData.department}</p>
                        <p className='profile-grad'>Graduating {profileData.graduationYear}</p>
                        <div className='clg-name-loc-ref'>
                            <span>{profileData.institution}</span>
                            <span>{profileData.location || 'N/A'}</span>
                        </div>
                        <p className='profile-desc'>{profileData.description || 'No description provided.'}</p>
                    </div>
                    <div className='profile-btns-ref'>
                        <button className='edit-ref' onClick={() => setEditable(!editable)}>
                            <FaRegEdit style={{ background: 'transparent', color: 'white' }} /> {editable ? 'Cancel' : 'Edit Profile'}
                        </button>
                        <button className='share-btn-ref'>
                            <RiShareForwardLine style={{ background: 'transparent', color: 'black', fontSize: '1.5em' }} />Share Profile
                        </button>
                    </div>
                </div>

                <div className='std-details'>
                    <div className='std-details-left'>
                        <div className='std-about-me'>
                            <h3>About Me</h3>
                            {editable ? (
                                <textarea name="about" value={profileData.about || ''} onChange={handleChange} placeholder="Write about yourself..." />
                            ) : (
                                <p>{profileData.about || 'No information provided. Click "Edit Profile" to add.'}</p>
                            )}
                        </div>
                        
                        <div className='std-projects'>
                            <h3>Projects</h3>
                            {profileData.projects && profileData.projects.map((project, index) => (
                                <div key={index} className='individual-project-std'>
                                    <div className='individual-project-title'>
                                        <h4>{project.title}</h4>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"><FiGithub style={{background:'transparent'}}/></a>
                                    </div>
                                    <p>{project.description}</p>
                                    <div className='project-stacks'>
                                        {Array.isArray(project.technologies) && project.technologies.length > 0 ? (
                                            project.technologies.map((stack, i) => (
                                                <p key={i}>{stack}</p>
                                            ))
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                            
                            {editable && (
                                <div className='add-project-form'>
                                    <h3>Add Project</h3>
                                    <input type="text" name="title" placeholder='Project title' value={newProject.title} onChange={handleNewProjectChange} />
                                    <textarea name="description" placeholder='Project description...' value={newProject.description} onChange={handleNewProjectChange} />
                                    <input type="text" name="technologies" placeholder='Technologies used (comma separated)' value={newProject.technologies} onChange={handleNewProjectChange} />
                                    <input type="text" name="link" placeholder='GitHub Link' value={newProject.link} onChange={handleNewProjectChange} />
                                    <button onClick={handleAddProject}>Add</button>
                                </div>
                            )}
                        </div>

                        <div className='fundraising-section-std'>
                            <h3>Fundraising Campaigns</h3>
                            {/* Displaying static data as per your design, can be made dynamic */}
                            <div className='a'>
                                <h4>Women in Tech Scholarship Fund</h4>
                                <p>Supporting underrepresented women pursuing careers in technology through educational scholarships.</p>
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
                                {profileData.skills?.length > 0 ? profileData.skills.map(skill => <p key={skill}>{skill}</p>) : <p>No skills listed.</p>}
                            </div>
                        </div>
                        <div className='education-card'>
                            <div className='education-title'>
                                <p style={{ fontSize: '1.5em' }}><RiGraduationCapFill style={{ background: 'transparent' }} /></p>
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

                {editable && (
                    <div className="save-button-container">
                        <button className="save-btn" onClick={handleSave}>Save All Changes</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Student_profile;
