import React, { useEffect, useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaSuitcase } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { ImTree } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md"
import { IoIosArrowForward } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { PiNetworkThin } from "react-icons/pi";
import './SDashboard.css'
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import api from '../../Apiservices/api'
import { BsSuitcaseLg } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const SDashboard = () => {
    const [showAll, setShowAll] = useState(false);
    const [studentName,setStudentName]=useState(" ");
    const navigate=useNavigate();
    const messages = [
        "Your mentorship request to John Smith has been accepted!",
        "Your session with Alice is scheduled for tomorrow.",
        "Feedback received from mentor James.",
        "New mentorship match found: Sarah L.",
        "Reminder: Your session with Mark is today at 4PM.",
        "Mentorship request to Maya is pending.",
        "Mentor John has shared new resources.",
    ];
    const visibleMessages = showAll ? messages : messages.slice(0, 6);
    useEffect(()=>{
        const fetchDashboardDetails=async()=>{
            try{
                const token=localStorage.getItem('studentToken');
                if(!token)
                {
                    navigate('/login');
                    return;
                }
                const response=await api.get('api/student/dashboard',{
                    headers:{'Authorization':`Bearer ${token}`}
                });
                setStudentName(response.data.name);
            }
            catch(error)
            {
                console.error("error fetching dashboard data");
                navigate('/login');
            }
        };
        fetchDashboardDetails();
    },[navigate]);
    const handleProfileClick=()=>{
        navigate('/student-profile');
    }
    return (
        <>
            <div className='student-dashboard-pg'>
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
                <div className='dashboard-content'>
                    <div className='dashboard-left'>
                        <div className='welcome-section'>
                            <h2>Welcome back {studentName?`, ${studentName}`:''}! <MdWavingHand style={{ background: 'transparent' }} /> </h2>
                            <div className='active-status'>
                                <ul>
                                    <li className='green'>3 active mentorships</li>
                                    <li className='yellow'>2 project applications pending</li>
                                    <li className='blue'>your fundraising campaign has recieved 70%</li>
                                </ul>
                            </div>
                        </div>
                        <div className='student-features'>
                            <div className='std-profile-card'>
                                <div className='profile-icon-sec'>
                                    <p style={{ fontSize: '2em' }}><FiUser style={{ background: 'transparent' ,color:'rgb(37, 103, 225)'}} /></p>
                                    <p style={{ fontSize: '1.5em' }}><IoIosArrowForward style={{ background: 'transparent' }} /></p>
                                </div>
                                <div>
                                    <h3>My Profile</h3>
                                    <p>Update your details, skills & profile</p>
                                    <button className='blue-btn'>View/Edit Profile</button>
                                </div>
                            </div>
                            <div className='student-mentorship-card'>
                                <div className='mentorship-icon-sec'>
                                    <p style={{ fontSize: '2em' }}><FiUsers style={{ background: 'transparent' ,color:'green'}} /></p>
                                    <p style={{ fontSize: '1.5em' }}><IoIosArrowForward style={{ background: 'transparent' }} /></p>

                                </div>
                                <div>
                                    <h3>My Mentorships</h3>
                                    <p>Manage your mentor connections & requests</p>
                                    <button className='green-btn'>View Mentors</button>
                                </div>
                            </div>
                            <div className='project-cards'>
                                <div className='project-icon-sec'>
                                    <p style={{ fontSize: '2em' }}><BsSuitcaseLg style={{ background: 'transparent',color:' rgb(177, 25, 197)' }} /></p>
                                    <p style={{ fontSize: '1.5em' }}><IoIosArrowForward style={{ background: 'transparent' }} /></p>

                                </div>
                                <div>
                                    <h3>Projects & Internships</h3>
                                    <p>Discover opportunities posted by alumni</p>
                                    <button className='purple-btn'>Browse Oppurtunities</button>
                                </div>
                            </div>
                            <div className='fund-card'>
                                <div className='fund-icon-sec'>
                                    <p style={{ fontSize: '2em' }}><MdOutlineAttachMoney style={{ background: 'transparent',color:'orange' }} /></p>
                                    <p style={{ fontSize: '1.5em' }}><IoIosArrowForward style={{ background: 'transparent' }} /></p>

                                </div>
                                <div>
                                    <h3>My Fundraisers</h3>
                                    <p>Track your event funding campaigns</p>
                                    <button className='orange-btn'>
                                        View/Create Fundraiser
                                    </button>
                                </div>
                            </div>
                            <div className='co-std-card'>
                                <div className='co-std-icon'>
                                    <p style={{ fontSize: '2em' }}><PiNetworkThin style={{ background: 'transparent',color:'teal' }} /></p>
                                    <p style={{ fontSize: '1.5em' }}><IoIosArrowForward style={{ background: 'transparent' }} /></p>

                                </div>
                                <div>
                                    <h3>Co-student Network</h3>
                                    <p>Connect with classmates for collaborations</p>
                                    <button className='teal-btn'>Find Students</button>
                                </div>
                            </div>
                            <div className='alumni-card-1'>
                                <div className='alumni-icon'>
                                    <p style={{ fontSize: '2em' }}><RiGraduationCapLine style={{ background: 'transparent',color:'violet' }} /></p>
                                    <p style={{ fontSize: '1.5em' }}><IoIosArrowForward style={{ background: 'transparent' }} /></p>

                                </div>
                                <div>
                                    <h3>Alumni Directory</h3>
                                    <p>Explore profiles of successful alumni</p>
                                    <button className='violet-btn'>Browse Alumni</button>
                                </div>
                            </div>

                        </div>
                        <div className='student-recommendations'>
                            <div className='recomendation-title'>
                                <h3>Recommended Title</h3>
                                <p>Personalized opportunities based on your profile</p>
                            </div>
                            <div className='recomendation-cards'>
                                <div className='rec-card-1'>
                                    <h4>Mobile App Development</h4>
                                    <p>TechStart Inc</p>
                                    <p className='days-left'>15 days left</p>
                                </div>
                                <div className='rec-card-1'>
                                    <h4>Coding Bootcamp for underprevieleged</h4>
                                    <p>Goal : $5000</p>
                                    <p>
                                        Raised : $5000
                                    </p>
                                    <hr />
                                </div>
                                <div className='rec-card-1'>
                                    <h4>Mobile App Development</h4>
                                    <p>TechStart Inc</p>
                                    <p className='days-left'>15 days left</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='dashboard-right'>
                        <div className='recent-activity-title'>
                            <p style={{ fontSize: '1.5em', background: 'transparent' }}><FaBell style={{ background: 'transparent' }} /></p>
                            <h3>Recent Activity</h3>
                        </div>
                        <div className='recents'>
                            {visibleMessages.map((msg, index) => (
                                <div key={index} className='first-info'>
                                    <p>{msg}</p>
                                    <p className='hrs-ago'>2 hours ago</p>
                                    <hr />
                                </div>
                            ))}
                            <p className='blue-p' onClick={() => setShowAll(!showAll)}>
                                {showAll ? "View Less Notifications" : "View All Notifications"}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SDashboard