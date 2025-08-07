import React from 'react'
import { RiFolderUploadLine } from "react-icons/ri";
import './Fund_form.css'
const Fund_form = () => {
    const handleTagClick = (tag) => {
        const input = document.getElementById('hashtagsInput');
        const current = input.value.split(',').map(s => s.trim());
        if (!current.includes(tag)) {
            input.value = current.filter(Boolean).concat(tag).join(', ');
        }
    };
    const handleCategoryTagClick = (tag) => {
    const input = document.getElementById('categoryInput');
    const current = input.value.split(',').map(s => s.trim());
    if (!current.includes(tag)) {
        input.value = current.filter(Boolean).concat(tag).join(', ');
    }
};


    return (
        <>
            <div className='funding-form-pg'>
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
                <div className='funding-form-content'>
                    <h2>Student Information</h2>
                    <div className='student-information-div'>
                        <div className='name-input-box'>
                            <label>Name</label>
                            <input type='text' placeholder='Enter your name' />
                        </div>
                        <div className='branch-dept-input'>
                            <div className='branch-input'>
                                <label>Branch</label>
                                <select>
                                    <option>Enter your branch</option>
                                    <option>B-Tech</option>
                                    <option>Arts & Science</option>
                                </select>
                            </div>
                            <div className='dept-input'>
                                <label>Department</label>
                                <select>
                                    <option>Enter your department</option>
                                    <option>Cse</option>
                                    <option>IT</option>
                                </select>

                            </div>
                        </div>
                        <div className='year-input-box'>
                            <label>Year</label>
                            <select>
                                <option>Enter your study year</option>
                                <option>1st year</option>
                                <option>2nd year</option>
                                <option>3rd year</option>
                                <option>4th year</option>
                            </select>
                        </div>
                        <div className='roll-num-input-box'>
                            <label>Roll No</label>
                            <input type='text' placeholder='Enter your roll no/register number' />
                        </div>
                        <div className='contact-info-input-box'>
                            <label>Contact Info</label>
                            <input type='text' placeholder='Enter your email/linkedin/phone number' />
                        </div>
                    </div>
                    <h2>Project Details</h2>
                    <div className='project-details-div'>
                        <div className='project-img-input'>
                            <label>Project Image(optional)</label>
                            <div>
                                <RiFolderUploadLine style={{ width: '150px', height: '150px', background: 'transparent', color: 'grey' }} />

                                <p>Upload or Drag and Drop from your device</p>
                            </div>
                        </div>
                        <div className='project-title-input'>
                            <label>Project Title</label>
                            <input type='text' placeholder='Enter your project title' />
                        </div>
                        <div className='project-category-input'>
                            <label>Project Category</label>
                            <textarea placeholder='Enter short description of your project' id='categoryInput'></textarea>

                            <div className="category-tags">
                                {["Technology", "Education", "Health", "Environment", "Finance"].map((tag, index) => (
                                    <span key={index} className="hashtag-tag" onClick={() => handleCategoryTagClick(tag)}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className='project-short-des-input'>
                            <label>Short Description</label>
                            <textarea placeholder='Enter short description of your project'></textarea>
                        </div>
                        <div className='project-long-des-input'>
                            <label>Long Description</label>
                            <textarea placeholder='Enter short description of your project'></textarea>

                        </div>
                        <h4>Project Timeline</h4>
                        <div className='start-end-date'>
                            <div className='start-date'>
                                <label>Start Date</label>
                                <input type='date' />
                            </div>
                            <div className='end-date'>
                                <label>End Date</label>
                                <input type='date' />
                            </div>
                        </div>
                        <h4>Team Size</h4>
                        <div className='team-size-input'>
                            <div>
                                <input type='radio' />
                                <label>Individual</label>
                            </div>
                            <div>
                                <input type="radio" />
                                <label>Team</label>
                            </div>
                        </div>
                        <h4>Add Members +</h4>
                        <div className='mem-role-input'>
                            <div className='member-input'>
                                <label>Name</label>
                                <input type='text' placeholder='Enter the member name' />
                            </div>
                            <div className='role-input'>
                                <label>Role</label>
                                <input type='text' placeholder='Enter the role of the member' />
                            </div>
                        </div>
                    </div>
                    <h2>Fund Details</h2>
                    <div className='fund-details-div'>
                        <div className='amout-input'>
                            <label>Amount</label>
                            <input type='number' placeholder='Enter yhe total amount' />

                        </div>
                        <div className='expence-plan-input'>
                            <label>Expense plan</label>
                            <div>
                                <RiFolderUploadLine style={{ width: '150px', height: '150px', background: 'transparent', color: 'grey' }} />
                                <p>Upload or Drag and Drop from your device</p>
                            </div>
                        </div>

                    </div>
                    <h2>Purpose of fund</h2>
                    <div className='purpose-div'>
                        <div className='purpose-input'>
                            <label>Purpose</label>
                            <input type='text' placeholder='Explain why this support is crucial' />
                        </div>
                        <div className='post-achievements-input'>
                            <label>Past Achievements / Recognition (Optional)</label>
                            <div>
                                <RiFolderUploadLine style={{ width: '150px', height: '150px', background: 'transparent', color: 'grey' }} />
                                <p>Upload or Drag and Drop from your device</p>
                            </div>
                        </div>
                    </div>
                    <h2>Attachments</h2>
                    <div className='attachments-div'>
                        <div className='project-proposal-input'>
                            <label>Project Proposal* (PDF/PPT/Word/JPEG)</label>
                            <div>
                                <RiFolderUploadLine style={{ width: '150px', height: '150px', background: 'transparent', color: 'grey' }} />

                                <p>Upload or Drag and Drop from your device</p>
                            </div>
                        </div>
                        <div className='identification-card'>
                            <label>Indetification card</label>
                            <div>
                                <RiFolderUploadLine style={{ width: '150px', height: '150px', background: 'transparent', color: 'grey' }} />

                                <p>Upload or Drag and Drop from your device</p>
                            </div>
                        </div>
                        <div className='prototype-input'>
                            <label>Prototype/Design (Optional)</label>
                            <div>
                                <RiFolderUploadLine style={{ width: '150px', height: '150px', background: 'transparent', color: 'grey' }} />
                                <p>Upload or Drag and Drop from your device</p>
                            </div>
                        </div>
                        <div className='letter-input-div'>
                            <label>Recommendation Letter (Optional)</label>
                            <div>
                                <RiFolderUploadLine style={{ width: '150px', height: '150px', background: 'transparent', color: 'grey' }} />
                                <p>Upload or Drag and Drop from your device</p>
                            </div>
                        </div>

                    </div>
                    <h2>Call For Support</h2>
                    <div className='support-div'>
                        <div className='ask-input'>
                            <label>Ask support</label>
                            <textarea placeholder='Enter short description of your project'></textarea>

                        </div>
                        <div className='hashtags-input'>
                            <label>Hashtags</label>
                            <textarea placeholder='Enter short description of your project' id='hashtagsInput'></textarea>

                            <div className="hashtag-tags">
                                {["#AI", "#Sustainability", "#Innovation", "#OpenSource", "#Healthcare"].map((tag, index) => (
                                    <span key={index} className="hashtag-tag" onClick={() => handleTagClick(tag)}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className='approve-check'>
                        <input type='checkbox' />
                        <label>I hereby confirm that all the information shared is accurate and verifiable through valid documents or official records</label>
                    </div>

                </div>
                <button className='upload-fund-btn'>Upload</button>

            </div>
        </>
    )
}

export default Fund_form