import React, { useState } from 'react';
import './StudentNetwork.css';

const studentData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    course: 'Computer Science Engineering',
    year: '3rd Year',
    university: 'SMVEC',
    skills: ['React', 'Node.js', 'Python'],
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    interests: ['Web Development', 'AI/ML'],
    projects: 5,
  },
  {
    id: 2,
    name: 'Priya Patel',
    course: 'Mechanical Engineering',
    year: '2nd Year',
    university: 'SMVEC',
    skills: ['AutoCAD', 'SolidWorks', 'MATLAB'],
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    interests: ['Robotics', 'Design'],
    projects: 3,
  },
  {
    id: 3,
    name: 'Amit Kumar',
    course: 'Electrical Engineering',
    year: '4th Year',
    university: 'SMVEC',
    skills: ['Arduino', 'IoT', 'Python'],
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
    interests: ['IoT', 'Embedded Systems'],
    projects: 7,
  },
  {
    id: 4,
    name: 'Neha Singh',
    course: 'Computer Science Engineering',
    year: '2nd Year',
    university: 'SMVEC',
    skills: ['Java', 'Data Structures', 'Algorithms'],
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    interests: ['Competitive Programming', 'DSA'],
    projects: 4,
  },
  {
    id: 5,
    name: 'Vikram Malhotra',
    course: 'Civil Engineering',
    year: '3rd Year',
    university: 'SMVEC',
    skills: ['AutoCAD', 'Revit', 'ETABS'],
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    interests: ['Structural Design', 'Construction'],
    projects: 6,
  },
  {
    id: 6,
    name: 'Anjali Gupta',
    course: 'Information Technology',
    year: '1st Year',
    university: 'SMVEC',
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
    interests: ['Frontend Development', 'UI/UX'],
    projects: 2,
  },
];

const StudentNetwork = () => {
  const [search, setSearch] = useState('');

  const filteredStudents = studentData.filter(student => {
    const searchLower = search.toLowerCase();
    return (
      student.name.toLowerCase().includes(searchLower) ||
      student.course.toLowerCase().includes(searchLower) ||
      student.university.toLowerCase().includes(searchLower) ||
      student.skills.some(skill => skill.toLowerCase().includes(searchLower)) ||
      student.interests.some(interest => interest.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="student-network-outer">
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
      <div className="student-banner">
        <h3>Student Network</h3>
        <div className="student-banner-stats">
          <span>50+ Students</span>
          <span>6+ Courses</span>
        </div>
      </div>
      {/* Search Section */}
      <div className="student-search-section">
        <input
          type="text"
          placeholder="Search by name, course, skills, or interests..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="student-search-input"
        />
      </div>
      {/* Cards Section */}
      <div className="student-cards-grid">
        {filteredStudents.length === 0 ? (
          <div className="student-no-results">No students found.</div>
        ) : (
          filteredStudents.map(student => (
            <div className="student-card" key={student.id}>
              <div className="card-header-section">
                <img src={student.image} alt={student.name} className="student-card-img" />
                <div className="student-info">
                  <h3>{student.name}</h3>
                  <p className="student-course">{student.course}</p>
                  <p className="student-year-uni">{student.year} • {student.university}</p>
                </div>
              </div>
              
              <div className="card-content">
                <div className="skills-section">
                  <div className="skills-grid">
                    {student.skills.map((skill, idx) => (
                      <span className="skill-tag" key={idx}>{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div className="interests-section">
                  <p className="interests-text">{student.interests.join(' • ')}</p>
                </div>
                
                <div className="projects-section">
                  <div className="projects-badge">
                    <span className="project-icon">📁</span>
                    <span className="project-count">{student.projects} Projects</span>
                  </div>
                </div>
              </div>
              
              <div className="card-actions">
                <button className="connect-btn">Connect</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default StudentNetwork 