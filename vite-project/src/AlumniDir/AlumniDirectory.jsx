import React, { useState } from 'react';
import './AlumniDirectory.css';

const alumniData = [
  {
    id: 1,
    name: 'Alex Chen',
    job: 'Senior Software Engineer',
    company: 'Google',
    university: 'SMVEC',
    batch: '2020-2024',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    skills: ['React', 'Node.js', 'Python', 'AWS'],
    experience: '5+ years',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    job: 'Mechanical Design Engineer',
    company: 'Tesla',
    university: 'SMVEC',
    batch: '2020-2024',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    skills: ['AutoCAD', 'SolidWorks', 'MATLAB', 'FEA'],
    experience: '3+ years',
    location: 'Austin, TX',
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    job: 'Principal Civil Engineer',
    company: 'AECOM',
    university: 'SMVEC',
    batch: '2020-2024',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
    skills: ['AutoCAD', 'Revit', 'ETABS', 'Project Management'],
    experience: '8+ years',
    location: 'Los Angeles, CA',
  },
  {
    id: 4,
    name: 'Priya Singh',
    job: 'Data Scientist',
    company: 'Facebook',
    university: 'SMVEC',
    batch: '2020-2024',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
    experience: '4+ years',
    location: 'Menlo Park, CA',
  },
  {
    id: 5,
    name: 'John Doe',
    job: 'Product Manager',
    company: 'Amazon',
    university: 'SMVEC',
    batch: '2020-2024',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    skills: ['Product Strategy', 'Agile', 'User Research', 'Analytics'],
    experience: '6+ years',
    location: 'Seattle, WA',
  },
  {
    id: 6,
    name: 'Emily Carter',
    job: 'UX Designer',
    company: 'Apple',
    university: 'SMVEC',
    batch: '2020-2024',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
    skills: ['Figma', 'Sketch', 'User Research', 'Prototyping'],
    experience: '4+ years',
    location: 'Cupertino, CA',
  },
];

const AlumniDirectory = () => {
  const [search, setSearch] = useState('');

  const filteredAlumni = alumniData.filter(alum => {
    const searchLower = search.toLowerCase();
    return (
      alum.name.toLowerCase().includes(searchLower) ||
      alum.company.toLowerCase().includes(searchLower) ||
      alum.job.toLowerCase().includes(searchLower) ||
      alum.skills.some(skill => skill.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="alumni-directory-outer">
      {/* Navbar */}
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
        <h3>Alumni Directory</h3>
        <div className="alumni-banner-stats">
          <span>20+ Alumni</span>
          <span>5+ Batches</span>
        </div>
      </div>

      {/* Search Section */}
      <div className="alumni-search-section">
        <input
          type="text"
          placeholder="Search by name, company, job title, or skills..."
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
              <div className="card-header-section">
                <img src={alum.image} alt={alum.name} className="alumni-card-img" />
                <div className="alumni-info">
                  <h3>{alum.name}</h3>
                  <p className="alumni-job">{alum.job}</p>
                  <p className="alumni-company-uni">{alum.company} • {alum.university}</p>
                </div>
              </div>
              
              <div className="card-content">
                <div className="skills-section">
                  <div className="skills-grid">
                    {alum.skills.map((skill, idx) => (
                      <span className="skill-tag" key={idx}>{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div className="details-section">
                  <p className="details-text">{alum.experience} Experience • {alum.location}</p>
                  <p className="batch-text">Batch: {alum.batch}</p>
                </div>
              </div>
              
              <div className="card-actions">
                <button className="view-profile-btn">View Profile</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AlumniDirectory; 