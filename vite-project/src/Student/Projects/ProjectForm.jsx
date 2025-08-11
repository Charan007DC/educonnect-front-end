import React, { useState } from "react";
import { RiFolderUploadLine } from "react-icons/ri";
import "./ProjectForm.css";

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        branch: "",
        department: "",
        year: "",
        rollNo: "",
        contact: "",
        projectTitle: "",
        projectCategory: [],
        shortDesc: "",
        longDesc: "",
        startDate: "",
        endDate: "",
        teamType: "Individual",
        teamMembers: [{ name: "", role: "" }],
        amount: "",
        purpose: "",
        hashtags: [],
    });

    const categoryOptions = ["Technology", "Education", "Health", "Environment", "Finance"];
    const hashtagOptions = ["#AI", "#Sustainability", "#Innovation", "#OpenSource", "#Healthcare"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleTagToggle = (field, tag) => {
        setFormData((prev) => {
            const alreadySelected = prev[field].includes(tag);
            return {
                ...prev,
                [field]: alreadySelected
                    ? prev[field].filter((t) => t !== tag)
                    : [...prev[field], tag],
            };
        });
    };

    const handleTeamMemberChange = (index, field, value) => {
        const updated = [...formData.teamMembers];
        updated[index][field] = value;
        setFormData((prev) => ({ ...prev, teamMembers: updated }));
    };

    const addTeamMember = () => {
        setFormData((prev) => ({
            ...prev,
            teamMembers: [...prev.teamMembers, { name: "", role: "" }],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Project submitted!");
    };

    return (
        <div className="project-form-container">
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

                    <div className="tag-section">
                        <label>Project Category</label>
                        <div className="tags">
                            {categoryOptions.map((tag) => (
                                <span
                                    key={tag}
                                    className={formData.projectCategory.includes(tag) ? "tag active" : "tag"}
                                    onClick={() => handleTagToggle("projectCategory", tag)}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <textarea
                        name="shortDesc"
                        placeholder="Short Description"
                        onChange={handleChange}
                    />
                    <textarea
                        name="longDesc"
                        placeholder="Detailed Description"
                        onChange={handleChange}
                    />

                    <div className="date-section">
                        <input type="date" name="startDate" onChange={handleChange} />
                        <input type="date" name="endDate" onChange={handleChange} />
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
                            /> Individual
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="teamType"
                                value="Team"
                                checked={formData.teamType === "Team"}
                                onChange={handleChange}
                            /> Team
                        </label>
                    </div>
                    {formData.teamType === "Team" && (
                        <>
                            {formData.teamMembers.map((member, idx) => (
                                <div className="team-member" key={idx}>
                                    <input
                                        placeholder="Member Name"
                                        value={member.name}
                                        onChange={(e) =>
                                            handleTeamMemberChange(idx, "name", e.target.value)
                                        }
                                    />
                                    <input
                                        placeholder="Role"
                                        value={member.role}
                                        onChange={(e) =>
                                            handleTeamMemberChange(idx, "role", e.target.value)
                                        }
                                    />
                                </div>
                            ))}
                            <button type="button" onClick={addTeamMember} className="add-member-btn">
                                + Add Member
                            </button>
                        </>
                    )}
                </section>

                {/* Fund & Purpose */}
                <section>
                    <h2>Funding</h2>
                    <input
                        type="number"
                        name="amount"
                        placeholder="Required Amount"
                        onChange={handleChange}
                    />
                    <input
                        name="purpose"
                        placeholder="Purpose of Funding"
                        onChange={handleChange}
                    />
                </section>

                {/* Hashtags */}
                <section>
                    <h2>Hashtags</h2>
                    <div className="tags">
                        {hashtagOptions.map((tag) => (
                            <span
                                key={tag}
                                className={formData.hashtags.includes(tag) ? "tag active" : "tag"}
                                onClick={() => handleTagToggle("hashtags", tag)}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </section>

                <div className="checkbox">
                    <input type="checkbox" required /> I confirm all information is accurate.
                </div>

                <button type="submit" className="submit-btn">Submit Project</button>
            </form>
        </div>
    );
};

export default ProjectForm;
