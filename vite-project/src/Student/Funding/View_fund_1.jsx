import React, { useState } from 'react'
import './View_fund_1.css'
const FundData = [
    {
        id: 1,
        project_name: "Gaurdian top",
        funding_type: 'Hackathon',
        domain: ['AI', 'Safety', 'IOT'],
        amount: '10000/-',
        startDate: '02 Jun 2025',
        endDate: '17 July 2025',
        size: 4,
        des: "An AI-integrated tap system for real-time crime alerts and location-based emergency ",
        by_name: "Hair Prasath",
        image: 'https://randomuser.me/api/portraits/men/32.jpg',

    },
    {
        id: 2,
        project_name: "EcoSort",
        funding_type: "Grant",
        domain: ["AI", "Sustainability"],
        amount: '25000/-',
        startDate: "10 Jul 2025",
        endDate: "10 Aug 2025",
        size: 5,
        des: "Smart waste segregation using computer vision and ML to categorize waste at the source.",
        by_name: "Sneha Iyer",
        image: 'https://randomuser.me/api/portraits/men/32.jpg',

    },
    {
        id: 3,
        project_name: "HealthMate",
        funding_type: "Incubation",
        domain: ["Healthcare", "AI"],
        amount: '50000/-',
        startDate: "01 Aug 2025",
        endDate: "30 Sep 2025",
        size: 3,
        des: "Virtual health assistant for remote areas using NLP-powered voice interaction and symptom checker.",
        by_name: "Rohit Mehta",
        image: 'https://randomuser.me/api/portraits/men/32.jpg',

    },
    {
        id: 4,
        project_name: "FarmConnect",
        funding_type: "Seed Funding",
        domain: ["Agritech", "ML"],
        amount: '40000/-',
        startDate: "15 Jul 2025",
        endDate: "15 Oct 2025",
        size: 4,
        des: "Crop recommendation engine using machine learning based on soil and weather data.",
        by_name: "Ananya Sharma",
        image: 'https://randomuser.me/api/portraits/men/32.jpg',

    },
    {
        id: 5,
        project_name: "SafePath",
        funding_type: "Hackathon",
        domain: ["Navigation", "Safety", "AI"],
        amount: '12000/-',
        startDate: "20 Jun 2025",
        endDate: "05 Aug 2025",
        size: 3,
        des: "Real-time route guidance for women using AI and public safety data to avoid unsafe zones.",
        by_name: "Karthik Raj",
        image: 'https://randomuser.me/api/portraits/men/32.jpg',

    },
    {
        id: 6,
        project_name: "SkillSphere",
        funding_type: "Grant",
        domain: ["Edtech", "Web3"],
        amount: '30000/-',
        startDate: "25 Jul 2025",
        endDate: "25 Sep 2025",
        size: 6,
        des: "A decentralized learning platform where students earn tokens for completing skill challenges.",
        by_name: "Divya M",
        image: 'https://randomuser.me/api/portraits/men/32.jpg',

    }
]

const View_fund_1 = () => {
    const [search, setSearch] = useState('');
    const filteredFunds = FundData.filter(fund => {
        const searchLower = search.toLowerCase();
        return (
            fund.project_name.toLowerCase().includes(searchLower) ||
            fund.funding_type.toLowerCase().includes(searchLower)

        );
    });

    return (
        <>
            <div className='view-fund-pg'>
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
                <div className='fund-banner'>
                    <h3>Funds</h3>
                    <div className='fund-banner-stats'>
                        <span>20+ Raised funds</span>
                        <span>10+ Fund raisers</span>
                    </div>
                </div>
                <div className='fund-search-section'>
                    <input type='text' placeholder='Search by name,project title,domain' className='fund-search-input' value={search} onChange={e=>setSearch(e.target.value)} />

                </div>
                <div className='fund-cards-grid'>
                    {filteredFunds.length === 0 ?
                        (<div className='fund-no-results'>
                            No fund found
                        </div>) : (
                            filteredFunds.map(fund => (
                                <div className='fund-card' key={fund.id}>
                                    <div className='fund-header-section'>
                                        <img src={fund.image} alt={fund.name} className='fund-card-img' />
                                        <div className='fund-info'>
                                            <h3>{fund.project_name}</h3>
                                            <p>Project@{fund.funding_type}</p>
                                        </div>

                                    </div>
                                    <div className='card-contents'>
                                        <div className='skills-sections'>
                                            <div className='skills-grids'>
                                                {fund.domain.map((skill, idx) => (
                                                    <span className='skill-tag' key={idx}>{skill}</span>
                                                ))}
                                            </div>
                                            <div className='amount-sections'>
                                                <h4>{fund.amount}</h4>
                                            </div>
                                        </div>
                                        <div className='start-date-end-date'>
                                            <p><span>Start Date:</span>{fund.startDate}</p>
                                            <p><span>End Date: </span>{fund.endDate}</p>
                                        </div>
                                        <div className='team-size-fund'>
                                            <p><span>Team Size:</span>{fund.size}</p>
                                        </div>
                                        <div className='fund-des'>
                                            <p>{fund.des}</p>
                                        </div>
                                        <div className='posted-by-sec'>
                                            <p><span>Posted by: </span>{fund.by_name}</p>
                                        </div>


                                    </div>
                                    <button className='view-details-btns'>View Details</button>
                                </div>
                            ))
                        )}

                </div>


            </div>
        </>
    )
}

export default View_fund_1