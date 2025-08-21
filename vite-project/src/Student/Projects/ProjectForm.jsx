import React, { useState } from "react";
import { RiFolderUploadLine } from "react-icons/ri";
import "./ProjectForm.css";
import api from '../../Apiservices/api';
import { MdOutlineUploadFile } from "react-icons/md";
const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    department: "",
    year: "",
    rollNo: "",
    contact: "",
    projectTitle: "",
    technologiesInput: "", // for comma separated tech stacks
    projectFor: "",
    shortDesc: "",
    longDesc: "",
    startDate: "",
    endDate: "",
    teamType: "Individual",
    teamMembers: [{ name: "", role: "" }],
    seekingMembers: false,
  });

  const categoryOptions = ["Technology", "Education", "Health", "Environment", "Finance"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleTeamMemberChange = (index, field, value) => {
    const updated = [...formData.teamMembers];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, teamMembers: updated }));
  };

  const addTeamMember = () => {
    setFormData((prev) => ({
      ...prev,
      teamMembers: [...prev.teamMembers, { name: "", role: "", email: "" }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("studentToken");
    if (!token) {
      alert("Please login");
      return;
    }

    // Convert comma separated input to array of trimmed strings
    const technologies = formData.technologiesInput
      .split(",")
      .map((tech) => tech.trim())
      .filter((tech) => tech.length > 0);

    const payload = {
      title: formData.projectTitle,
      description: formData.longDesc || formData.shortDesc,
      technologies,
      projectfor: formData.projectFor.trim(),
      teamtype: formData.teamType,
      seekingmembers: formData.seekingMembers,
    };
    if (formData.teamType == 'Team') {
      payload.teammembers = formData.teamMembers
    }

    try {
      await api.post("api/projects/create", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Project submitted successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to submit project");
    }
  };

  return (
    <div className="project-form-container">
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
      <h1>Post Your Project</h1>
      <form onSubmit={handleSubmit} className="project-form">
        {/* Student Info */}
        <section>
          <h2>Student Information</h2>
          <input name="name" placeholder="Your Name" onChange={handleChange} />
          <select name="branch" onChange={handleChange}>
            <option value="">Select Branch</option>
            <option value="B-Tech">B-Tech</option>
            <option value="Arts & Science">Arts & Science</option>
          </select>
          <select name="department" onChange={handleChange}>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
          </select>
          <select name="year" onChange={handleChange}>
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
          <input name="rollNo" placeholder="Roll No" onChange={handleChange} />
          <input name="contact" placeholder="Contact Info" onChange={handleChange} />
        </section>

        {/* Project Details */}
        <section>
          <h2>Project Details</h2>
          <input name="projectTitle" placeholder="Project Title" onChange={handleChange} />

          <textarea
            name="shortDesc"
            placeholder="Short Description"
            onChange={handleChange}
            className="s-des"
          />
          <textarea
            name="longDesc"
            placeholder="Detailed Description"
            onChange={handleChange}
            className="l-des"
          />

          <input
            type="text"
            name="technologiesInput"
            placeholder="Stacks used in your project (comma separated)"
            value={formData.technologiesInput}
            onChange={handleChange}
          />
          
            
            <div className="upload-image">
              <p><MdOutlineUploadFile /></p>
              <p>Upload project thumbnail</p>
            </div>
          

          <select name="projectFor" onChange={handleChange}>
            <option value="">Select project for</option>
            <option value="Personal">Personal</option>
            <option value="Freelance">Freelance</option>
            <option value="Internship">Internship</option>
          </select>

          <div className="date-section">
            <label>
              Start Date
              <input type="date" name="startDate" onChange={handleChange} />
            </label>
            <label>
              End Date
              <input type="date" name="endDate" onChange={handleChange} />
            </label>
          </div>

          <div className="seeking-members">
            <label>
              <input
                type="checkbox"
                name="seekingMembers"
                checked={formData.seekingMembers}
                onChange={handleChange}
              />
              Seeking additional members for this project
            </label>
          </div>
        </section>

        {/* Team Info */}
        <section>
          <h2>Team Information</h2>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="teamType"
                value="Individual"
                checked={formData.teamType === "Individual"}
                onChange={handleChange}
              />{" "}
              Individual
            </label>
            <label>
              <input
                type="radio"
                name="teamType"
                value="Team"
                checked={formData.teamType === "Team"}
                onChange={handleChange}
              />{" "}
              Team
            </label>
          </div>
          {formData.teamType === "Team" && (
            <>
              {formData.teamMembers.map((member, idx) => (
                <div className="team-member" key={idx}>
                  <input
                    placeholder="Member Name"
                    value={member.name}
                    onChange={(e) => handleTeamMemberChange(idx, "name", e.target.value)}
                  />
                  <input
                    placeholder="Role"
                    value={member.role}
                    onChange={(e) => handleTeamMemberChange(idx, "role", e.target.value)}
                  />
                  <input type="text" alue={member.email}
                    onChange={(e) => handleTeamMemberChange(idx, "email", e.target.value)} placeholder="Add team member email" />
                </div>
              ))}
              <button type="button" onClick={addTeamMember} className="add-member-btn">
                + Add Member
              </button>
            </>
          )}
        </section>
        <section>
          <div className="attachment-section">
            <h2>Attachments</h2>
            <div className="attachments-upload-section">
              <p><MdOutlineUploadFile /></p>
              <p>Upload your files here</p>
            </div>
          </div>
        </section>


        <div className="checkbox">
          <input type="checkbox" required /> I confirm all information is accurate.
        </div>

        <button type="submit" className="submit-btn">
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
