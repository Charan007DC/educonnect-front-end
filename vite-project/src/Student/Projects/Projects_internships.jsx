import React, { useState } from 'react'
import './Project_internships.css'

const projectData = [
  {
    id: 1,
    title: 'React Portfolio Website',
    type: 'Project',
    company: 'Freelance',
    postedBy: 'Alex Chen',
    description: 'Build a personal portfolio website using React.js and modern CSS.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=256&h=256&facepad=2',
    stack: ['React', 'CSS', 'JavaScript'],
    duration: '2 weeks', // TEST DURATION
  },
  {
    id: 2,
    title: 'Summer Internship - Tesla',
    type: 'Internship',
    company: 'Tesla',
    postedBy: 'Sarah Johnson',
    description: 'Work with the Tesla design team on real-world engineering problems.',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&facepad=2',
    stack: ['SolidWorks', 'AutoCAD', 'Python'],
    duration: '3 months',
  },
  {
    id: 3,
    title: 'Data Science Bootcamp',
    type: 'Project',
    company: 'Facebook',
    postedBy: 'Priya Singh',
    description: 'Participate in a bootcamp to learn data science and machine learning.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&facepad=2',
    stack: ['Python', 'Pandas', 'Machine Learning'],
    duration: null,
  },
  {
    id: 4,
    title: 'Frontend Developer Internship',
    type: 'Internship',
    company: 'Apple',
    postedBy: 'Emily Carter',
    description: 'Join Apple as a frontend intern and work on UI/UX improvements.',
    image: 'https://images.unsplash.com/photo-1519340333755-c1aa5571fd46?auto=format&fit=facearea&w=256&h=256&facepad=2',
    stack: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    duration: '6 months',
  },
  {
    id: 5,
    title: 'React Portfolio Website',
    type: 'Project',
    company: 'Freelance',
    postedBy: 'Alex Chen',
    description: 'Build a personal portfolio website using React.js and modern CSS.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=256&h=256&facepad=2',
    stack: ['React', 'CSS', 'JavaScript'],
    duration: '2 weeks', // TEST DURATION
  },
  {
    id: 6,
    title: 'React Portfolio Website',
    type: 'Project',
    company: 'Freelance',
    postedBy: 'Alex Chen',
    description: 'Build a personal portfolio website using React.js and modern CSS.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=256&h=256&facepad=2',
    stack: ['React', 'CSS', 'JavaScript'],
    duration: '2 weeks', // TEST DURATION
  },
];

const Projects_internships = () => {
  const [search, setSearch] = useState('');

  const filteredProjects = projectData.filter(item => {
    const searchLower = search.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchLower) ||
      item.company.toLowerCase().includes(searchLower) ||
      item.type.toLowerCase().includes(searchLower) ||
      item.postedBy.toLowerCase().includes(searchLower) ||
      (item.stack && item.stack.some(tech => tech.toLowerCase().includes(searchLower)))
    );
  });

  return (
    <div className='project-internship-page'>
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
      <div className='project-internship-banner'>
        <h3>Projects & Internships</h3>
        <p>Find hands-on projects, valuable internships, and exciting freelance work posted by our alumni network.</p>
      </div>
      {/* Search Section */}
      <div className='project-search-section'>
        <input
          type='text'
          placeholder='Search by title, company, type, stack, or poster...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='project-search-input'
        />
      </div>
      {/* Cards Section */}
      <div className='project-cards-grid'>
        {filteredProjects.length === 0 ? (
          <div className='project-no-results'>No projects or internships found.</div>
        ) : (
          filteredProjects.map(item => (
            <div className='project-card' key={item.id}>
              <img src={item.image} alt={item.title} className='project-card-img' />
              <div className='project-card-info'>
                <h3 className='project-title'>{item.title}</h3>
                <div className='project-meta-row'>
                  <span className='project-type'>{item.type} @ {item.company}</span>
                </div>
                {item.duration && (
                  <div className='project-duration-row'>
                    <span className='calendar-icon' role='img' aria-label='calendar'>📅</span>
                    <span className='project-duration'>{item.duration}</span>
                  </div>
                )}
                <div className='project-stack'>
                  {item.stack && item.stack.map((tech, idx) => (
                    <span className='stack-tag' key={idx}>{tech}</span>
                  ))}
                </div>
                <p className='project-desc'>{item.description}</p>
                <div className='project-poster'>Posted by: {item.postedBy}</div>
              </div>
              <div className='project-card-actions'>
                <button className='apply-btns'>Apply</button>
                <button className='view-details-btn'>View Details</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Projects_internships