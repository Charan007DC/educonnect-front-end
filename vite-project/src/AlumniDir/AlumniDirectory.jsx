import React, { useState } from 'react';
import './AlumniDirectory.css';

const alumniData = [
  {
    id: 1,
    name: 'Alex Chen',
    job: 'Senior Software Engineer',
    company: 'Google',
    university: 'SMVEC',
   
    batch:'2020-2024',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    job: 'Mechanical Design Engineer',
    company: 'Tesla',
    university: 'SMVEC',
    
    batch:'2020-2024',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    job: 'Principal Civil Engineer',
    company: 'AECOM',
    university: 'SMVEC',
    
    batch:'2020-2024',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
  {
    id: 4,
    name: 'Priya Singh',
    job: 'Data Scientist',
    company: 'Facebook',
    university: 'SMVEC',
    
    batch:'2020-2024',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 5,
    name: 'John Doe',
    job: 'Product Manager',
    company: 'Amazon',
    university: 'SMVEC',
    
    batch:'2020-2024',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    id: 6,
    name: 'Emily Carter',
    job: 'UX Designer',
    company: 'Apple',
    university: 'SMVEC',
    
    batch:'2020-2024',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
];

const AlumniDirectory = () => {
  const [search, setSearch] = useState('');

  const filteredAlumni = alumniData.filter(alum => {
    const searchLower = search.toLowerCase();
    return (
      alum.name.toLowerCase().includes(searchLower) ||
      alum.company.toLowerCase().includes(searchLower) ||
      alum.job.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="alumni-directory-outer">
      {/* Navbar (copied from other pages) */}
      <div className="nav-bar">
        <h4>ConnectE</h4>
        <nav>
          <ul>
            <li>How It Works</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="btn-class">
          <button className="login-btn">Login</button>
          <button>Sign Up</button>
        </div>
      </div>

      {/* Banner Section */}
      <div className="alumni-banner">
        <h2>Alumni Directory</h2>
        <div className="alumni-banner-stats">
          <span>20+ Alumni</span>
          <span>5+ Batches</span>
        </div>
      </div>

      {/* Search Section */}
      <div className="alumni-search-section">
        <input
          type="text"
          placeholder="Search by name, company, or job title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="alumni-search-input"
        />
      </div>

      {/* Cards Section */}
      <div className="alumni-cards-grid">
        {filteredAlumni.length === 0 ? (
          <div className="alumni-no-results">No alumni found.</div>
        ) : (
          filteredAlumni.map(alum => (
            <div className="alumni-card" key={alum.id}>
              <img src={alum.image} alt={alum.name} className="alumni-card-img" />
              <div className="alumni-card-info">
                <h3>{alum.name}</h3>
                <p className="alumni-job">{alum.job} @ {alum.company}</p>
                <p className="alumni-university">{alum.university}</p>
                <p className="alumni-batch">{alum.batch}</p>
              </div>
              <div className='view-profile-btn'>View Profile</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AlumniDirectory; 