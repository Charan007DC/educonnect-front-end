import React from 'react'
import dp from '../../assets/dp.png'
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";

const View_fund_2 = () => {
    const fundCards = [
        {
            id: 1,
            owner: "Gaurdian Top",
            title: "AI powered web-app",
            status: "Ongoing",
            members: [dp, dp, dp],
        },
        {
            id: 2,
            owner: "Hermione Granger",
            title: "Smart Library Management",
            status: "Completed",
            members: [dp, dp],
        },
        {
            id: 3,
            owner: "Ron Weasley",
            title: "AR Magic Game",
            status: "Ongoing",
            members: [dp, dp, dp, dp],
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
                                <img src={dp} alt="owner" />
                                <div className='fund-card-details'>
                                    <div className='detail-fund-card'>
                                        <h4>{card.owner}</h4>
                                        <p>{card.title}</p>
                                    </div>
                                    <p>{card.status}</p>
                                </div>
                                <div className='members-img'>
                                    {card.members.map((memberImg, i) => (
                                        <img key={i} src={memberImg} alt="member" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    

                    </div>
                    <div className='fund-mid'>
                        <div className='fund-project-head'>
                            <img src={dp}/>
                            <div className='fund-project-title'>
                                <h3>Gaurdian Top</h3>
                                <p>AI powered web-app</p>
                            </div>
                            <p>On going</p>
                        </div>
                        <div className='fund-mid-description'>
                            <h3>Description</h3>
                            <p>Gaurdian top is a personal safety mobile app designed to protect women in emergency situations with a single tap. It instantly shares live location, sends a voice message, activates a loud siren, and alerts emergency contacts or authorities. The app also includes features like fake calls and auto-alert systems to ensure quick response and distraction from threats. With funding, Guardian Tap aims to become a widely accessible and life-saving tool, offering fast, reliable support to women in distress, and promoting a safer environment through technology-driven protection.</p>
                        </div>
                        <div className='fund-mid-details'>
                            <h3>Details</h3>
                            <div className='fund-start-end-details'>
                                <div className='fund-start'>
                                    <p><IoCalendarOutline/></p>
                                    <div>
                                        <p>Start Date</p>
                                        <p>20 Jan,2025</p>
                                    </div>
                                </div>
                                <div className='fund-end'>
                                    <p><IoCalendarOutline/></p>
                                    <div>
                                        <p>End Date</p>
                                        <p>20 Jan,2025</p>
                                    </div>
                                </div>
                                <div className='fun-bud'>
                                    <p><AiOutlineDollar/></p>
                                    <div>
                                        <p>Total Budget</p>
                                        <p>20000</p>
                                    </div>
                                </div>
                                <div className='fund-obt'>
                                    <p><AiOutlineDollar/></p>
                                    <div>
                                        <p>Total Budget</p>
                                        <p>20000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='fund-right'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default View_fund_2