import React from 'react'
import dp from '../../assets/image.png'
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { FaPaperclip } from "react-icons/fa6";
import { VscEye } from "react-icons/vsc";
import { FiFileText } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import './View_fund_2.css'
const View_fund_2 = () => {
    const fundCards = [
        {
            id: 1,
            owner: "Gaurdian Top",
            title: "AI Powered Web-App",
            status: "Ongoing",
            mainImg: "https://picsum.photos/seed/project1/200/200",
            members: [
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg"
            ],
        },
        {
            id: 2,
            owner: "Hermione Granger",
            title: "Smart Library Management",
            status: "Completed",
            mainImg: "https://picsum.photos/seed/project2/200/200",
            members: [
                "https://randomuser.me/api/portraits/women/2.jpg",
                "https://randomuser.me/api/portraits/men/7.jpg"
            ],
        },
        {
            id: 3,
            owner: "Ron Weasley",
            title: "AR Magic Game",
            status: "Ongoing",
            mainImg: "https://picsum.photos/seed/project3/200/200",
            members: [
                "https://randomuser.me/api/portraits/men/14.jpg",
                "https://randomuser.me/api/portraits/men/23.jpg",
                "https://randomuser.me/api/portraits/women/54.jpg"
            ],
        },
        {
            id: 4,
            owner: "Harry Potter",
            title: "VR Spell Training Simulator",
            status: "Ongoing",
            mainImg: "https://picsum.photos/seed/project4/200/200",
            members: [
                "https://randomuser.me/api/portraits/men/18.jpg",
                "https://randomuser.me/api/portraits/women/5.jpg"
            ],
        },
        {
            id: 5,
            owner: "Luna Lovegood",
            title: "Eco-Friendly Packaging Startup",
            status: "Completed",
            mainImg: "https://picsum.photos/seed/project5/200/200",
            members: [
                "https://randomuser.me/api/portraits/women/47.jpg",
                "https://randomuser.me/api/portraits/men/41.jpg",
                "https://randomuser.me/api/portraits/women/33.jpg"
            ],
        },
        {
            id: 6,
            owner: "Neville Longbottom",
            title: "Smart Plant Monitoring System",
            status: "Ongoing",
            mainImg: "https://picsum.photos/seed/project6/200/200",
            members: [
                "https://randomuser.me/api/portraits/men/30.jpg"
            ],
        },
        {
            id: 7,
            owner: "Ginny Weasley",
            title: "Women Safety Mobile App",
            status: "Completed",
            mainImg: "https://picsum.photos/seed/project7/200/200",
            members: [
                "https://randomuser.me/api/portraits/women/66.jpg",
                "https://randomuser.me/api/portraits/men/29.jpg",
                "https://randomuser.me/api/portraits/women/18.jpg"
            ],
        },
        {
            id: 8,
            owner: "Draco Malfoy",
            title: "Crypto Investment Tracker",
            status: "Ongoing",
            mainImg: "https://picsum.photos/seed/project8/200/200",
            members: [
                "https://randomuser.me/api/portraits/men/50.jpg",
                "https://randomuser.me/api/portraits/women/77.jpg"
            ],
        },
    ];

    return (
        <>
            <div className='view-fund-2-pg'>
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
                <div className='funding-content'>
                    <div className='fund-left'>

                        <input type='text' placeholder='Search more like this..' />
                        {fundCards.map(card => (
                            <div className='fund-card' key={card.id}>


                                <img src={card.mainImg} alt="owner" className='main-img' />
                                <div className='fund-card-details'>
                                    <div className='detail-fund-card'>
                                        <h4>{card.owner}</h4>
                                        <p>{card.title}</p>
                                    </div>
                                    <div className='p'>

                                        <p className='stat'>{card.status}</p>

                                    </div>
                                </div>
                                <div className='members-img'>
                                    <div className='me-img'>
                                        {card.members.map((memberImg, i) => (
                                            <img key={i} src={memberImg} alt="member" className='mem' />
                                        ))}
                                    </div>
                                    <button>View</button>


                                </div>

                            </div>
                        ))}


                    </div>
                    <div className='fund-mid'>
                        <div className='fund-project-head'>
                            <img src={dp} />
                            <div className='fund-project-title'>
                                <h3>Gaurdian Top</h3>
                                <p>AI powered web-app</p>
                            </div>
                            <p className='st'>On going</p>
                        </div>
                        <div className='fund-mid-description'>
                            <h3>DESCRIPTION</h3>
                            <p>Gaurdian top is a personal safety mobile app designed to protect women in emergency situations with a single tap. It instantly shares live location, sends a voice message, activates a loud siren, and alerts emergency contacts or authorities. The app also includes features like fake calls and auto-alert systems to ensure quick response and distraction from threats. With funding, Guardian Tap aims to become a widely accessible and life-saving tool, offering fast, reliable support to women in distress, and promoting a safer environment through technology-driven protection.</p>
                        </div>
                        <div className='fund-mid-details'>
                            <h3>DETAILS</h3>
                            <div className='fund-start-end-details'>
                                <div className='fund-start'>
                                    <p className='ic'><IoCalendarOutline style={{ background: 'transparent', fontSize: '1.5em' }} /></p>
                                    <div>
                                        <p>Start Date</p>
                                        <p>20 Jan,2025</p>
                                    </div>
                                </div>
                                <div className='fund-end'>
                                    <p className='ac'><IoCalendarOutline style={{ background: 'transparent', fontSize: '1.5em' }} /></p>
                                    <div>
                                        <p>End Date</p>
                                        <p>20 Jan,2025</p>
                                    </div>
                                </div>
                                <div className='fun-bud'>
                                    <p className='bc'><AiOutlineDollar style={{ background: 'transparent', fontSize: '1.5em' }} /></p>
                                    <div>
                                        <p>Total Budget</p>
                                        <p>20000</p>
                                    </div>
                                </div>
                                <div className='fund-obt'>
                                    <p className='cc'><AiOutlineDollar style={{ background: 'transparent', fontSize: '1.5em' }} /></p>
                                    <div>
                                        <p>Obtained Budget</p>
                                        <p>20000</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='fund-mid-support'>
                            <h3>SUPPORT</h3>
                            <p>With your support, Guardian Tap can become a powerful safety tool for women everywhere. Help us take this life-saving idea to reality. Every contribution counts!</p>
                            <div className='support-hashtag'>
                                <p>#womenSafety</p>
                                <p>#ChildrenSafety</p>
                                <p>#tech</p>
                            </div>
                        </div>
                        <div className='fund-mid-achievements'>
                            <h3>ACHIEVEMENTS</h3>
                            <div>

                            </div>
                        </div>
                        <div className='fund-mid-comments'>
                            <h3>COMMENTS</h3>
                            <div className='comment-text'>
                                <textarea placeholder='Add a coment' />
                                <div className='comment-btn-opt-area'>
                                    <button>Send</button>
                                    <div className='cmt-attachment'>
                                        <p><FaPaperclip /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='fund-right'>
                        <div className='fund-owner-profile'>
                            <div className='fund-owner-header'>
                                <img src={dp} />
                                <div className='fund-owner-name'>
                                    <h4>Marco Belluci</h4>
                                    <p><span>Project Tester</span> . SMVEC</p>
                                </div>
                                <h4 className='y'>Posted By</h4>
                            </div>
                            <div className='owner-stack'>
                                <p>React</p>
                                <p>AWS</p>
                                <p>Python</p>
                            </div>
                            <div className='owner-bio-batch'>
                                <p>Student tester ensuring project quality and performance</p>
                                <p>Batch:2020-2024</p>
                            </div>
                            <div className='owner-view-profile'>
                                <button>View Profile</button>
                            </div>
                        </div>
                        <div className='fund-members-list'>
                            <h3>MEMBERS</h3>
                            <div className='member-1-profile'>
                                <div className='w'>
                                    <img src={dp} />
                                    <div className='member-name'>
                                        <p>Harry Potter</p>
                                        <p className='owner-role'>UI/UX designer</p>
                                    </div>
                                </div>

                                <p style={{ fontSize: '1.5em' }}><VscEye /></p>
                            </div>
                            <div className='member-1-profile'>
                                <div className='w'>
                                    <img src={dp} />
                                    <div className='member-name'>
                                        <p>Harry Potter</p>
                                        <p className='owner-role'>UI/UX designer</p>
                                    </div>
                                </div>

                                <p style={{ fontSize: '1.5em' }}><VscEye /></p>

                            </div>
                            <div className='member-1-profile'>
                                <div className='w'>
                                    <img src={dp} />
                                    <div className='member-name'>
                                        <p>Harry Potter</p>
                                        <p className='owner-role'>UI/UX designer</p>
                                    </div>
                                </div>

                                <p style={{ fontSize: '1.5em' }}><VscEye /></p>

                            </div>
                            <div className='member-1-profile'>
                                <div className='w'>
                                    <img src={dp} />
                                    <div className='member-name'>
                                        <p>Harry Potter</p>
                                        <p className='owner-role'>UI/UX designer</p>
                                    </div>
                                </div>

                                <p style={{ fontSize: '1.5em' }}><VscEye /></p>

                            </div>


                        </div>
                        <div className='fund-right-attachments'>
                            <h3>ATTACHMENTS</h3>
                            <div className='attachment-div'>
                                <div className='z'>
                                    <p className='n'><FiFileText /></p>
                                    <div className='case-name'>
                                        <p>Case_study.pdf</p>
                                        <p>478KB</p>
                                    </div>
                                </div>

                                <p style={{ fontSize: '2em' }}><MdOutlineFileDownload /></p>
                            </div>
                            <div className='attachment-div'>
                                <div className='z'>
                                    <p className='n'><FiFileText /></p>
                                    <div className='case-name'>
                                        <p>Case_study.pdf</p>
                                        <p>478KB</p>
                                    </div>
                                </div>

                                <p style={{ fontSize: '2em' }}><MdOutlineFileDownload /></p>

                            </div>
                            <div className='attachment-div'>
                                <div className='z'>
                                    <p className='n'><FiFileText /></p>
                                    <div className='case-name'>
                                        <p>Case_study.pdf</p>
                                        <p>478KB</p>
                                    </div>
                                </div>

                                <p style={{ fontSize: '2em' }}><MdOutlineFileDownload /></p>

                            </div>
                            <div className='attachment-div'>
                                <div className='z'>
                                    <p className='n'><FiFileText /></p>
                                    <div className='case-name'>
                                        <p>Case_study.pdf</p>
                                        <p>478KB</p>
                                    </div>
                                </div>

                                <p style={{ fontSize: '2em' }}><MdOutlineFileDownload /></p>

                            </div>
                            <div className='attachment-div'>
                                <div className='z'>
                                    <p className='n'><FiFileText /></p>
                                    <div className='case-name'>
                                        <p>Case_study.pdf</p>
                                        <p>478KB</p>
                                    </div>
                                </div>

                                <p style={{ fontSize: '2em' }}><MdOutlineFileDownload /></p>

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View_fund_2