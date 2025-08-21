import React, { useState, useEffect } from 'react';
import './Project_internships.css';
import api from '../../Apiservices/api';

const Projects_internships = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/api/projects"); // adjust if needed
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Filter projects by search
  const filteredProjects = projects.filter(item => {
  const searchLower = search.toLowerCase();

  const titleMatch = item?.title?.toLowerCase().includes(searchLower);
  const projectForMatch = item?.projectfor?.toLowerCase().includes(searchLower);
  const teamTypeMatch = item?.teamtype?.toLowerCase().includes(searchLower);

  const techMatch = Array.isArray(item?.technologies)
    ? item.technologies.some(tech => tech?.toLowerCase().includes(searchLower))
    : false;

  const teamMembersMatch = Array.isArray(item?.teammembers)
    ? item.teammembers.some(mem =>
        mem?.name?.toLowerCase().includes(searchLower) ||
        mem?.role?.toLowerCase().includes(searchLower) ||
        mem?.email?.toLowerCase().includes(searchLower)
      )
    : false;

  return titleMatch || projectForMatch || teamTypeMatch || techMatch || teamMembersMatch;
});

  return (
    <div className='project-internship-page'>
      {/* NavBar */}
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

      {/* Banner */}
      <div className='project-internship-banner'>
        <h3>Projects & Internships</h3>
        <p>
          Explore projects and internships posted by alumni and students.
          Collaborate, learn, and grow with real-world experiences.
        </p>
      </div>

      {/* Search Section */}
      <div className='project-search-section'>
        <input
          type='text'
          placeholder='Search by title, domain, team type, technologies, or members...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='project-search-input'
        />
      </div>

      {/* Cards Section */}
      <div className='project-cards-grid'>
        {loading ? (
          <div className='project-loading'>Loading projects...</div>
        ) : filteredProjects.length === 0 ? (
          <div className='project-no-results'>No projects or internships found.</div>
        ) : (
          filteredProjects.map((item, idx) => (
            <div className='project-card' key={item._id || idx}>
              {/* Header */}
              <div className='card-header-section'>
                <img
                  src={item.image || "https://via.placeholder.com/150"}
                  alt={item.title}
                  className='project-card-img'
                />
                <div className='project-info'>
                  <h3>{item.title}</h3>
                  <p className='project-job'>
                    {item.teamtype === 'Team' ? "Team Project " : "Individual Project"}
                    <span>
                      .{item.projectfor || 'N/A'}
                    </span>

                  </p>
                </div>
              </div>

              {/* Content */}
              <div className='card-content'>
                {/* Technologies */}
                <div className='skills-section'>
                  <div className='skills-grid'>
                    {item.technologies && item.technologies.map((tech, idx) => (
                      <span className='skill-tag' key={idx}>{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Seeking Members */}
                <div className='seeking-mem-section'>
                  <p className='seeking-text'>
                    Seeking Members: {item.seekingmembers ? "Yes" : "No"}
                  </p>
                </div>

                {/* Description */}
                <div className='description-section' style={{ background: 'transparent' }}>
                  <p className='project-desc'>{item.description}</p>
                </div>

                {/* Team Members
                {item.teammembers && item.teammembers.length > 0 && (
                  <div className="team-section">
                    <h4>Team Members</h4>
                    <ul>
                      {item.teammembers.map((mem, idx) => (
                        <li key={idx}>
                          {mem.name} ({mem.role}) - {mem.email}
                        </li>
                      ))}
                    </ul>
                  </div>
                )} */}
              </div>

              {/* Actions */}
              <div className='project-card-actions' style={{ background: 'transparent' }}>

                <button className='view-profile-btn'>View Details</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects_internships;
