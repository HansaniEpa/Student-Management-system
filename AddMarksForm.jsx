import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './AddMarksForm.css';

const AddMarksForm = () => {
  const [studentLevel, setStudentLevel] = useState('6-9');
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [stream, setStream] = useState('mathematics');

  const basket1Options = ["Civilization", "Geography", "Commerce"];
  const basket2Options = ["Dancing", "Art", "Music", "Sinhala Literature", "English Literature"];
  const basket3Options = ["ICT", "Health", "Agriculture", "Home Economics"];

  const streamOptionsMap = {
    mathematics: ["Combined Mathematics", "Physics", "Chemistry", "ICT"],
    bio: ["Biology", "Chemistry", "Physics", "Agricultural Science"],
    technical: ["Engineering Technology", "Science for Technology", "ICT", "Biosystems Technology"],
    art: ["Sinhala", "Political Science", "Geography", "Logic", "History", "Dancing", "Art"]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Marks successfully recorded for student ID: ${studentId}`);
  };

  return (
    <div className="dashboard-container">
      {/* Reusable Sidebar Component */}
      <Sidebar />

      <div className="main-content">
        <div className="top-navbar">
          <span>Marks Entry Management</span>
          <span className="admin-badge">Teacher ▾</span>
        </div>

        <div className="form-content-area">
          <div className="marks-form-container">
            <h2>Add Student Term Marks</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grade-selector-group">
                <div>
                  <label>Student Name</label>
                  <input 
                    type="text" 
                    placeholder="Full Name (e.g., John Doe)" 
                    value={studentName} 
                    onChange={(e) => setStudentName(e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <label>Student ID / Index No</label>
                  <input 
                    type="text" 
                    placeholder="e.g., ST-2026-001" 
                    value={studentId} 
                    onChange={(e) => setStudentId(e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <label>Select Grade Category</label>
                  <select value={studentLevel} onChange={(e) => setStudentLevel(e.target.value)}>
                    <option value="6-9">Grades 6 - 9</option>
                    <option value="10-11">Grades 10 - 11</option>
                    <option value="12-13">Grades 12 - 13 (A/L Streams)</option>
                  </select>
                </div>
              </div>

              {studentLevel === '6-9' && (
                <div>
                  <div className="subject-section-title">Compulsory & Aesthetic Subjects (Grades 6 - 9)</div>
                  <table className="marks-table">
                    <thead>
                      <tr>
                        <th>Subject Name</th>
                        <th>Continuous (%)</th>
                        <th>Mid-Term (%)</th>
                        <th>Final Exam (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['Mathematics', 'Science', 'Sinhala', 'English', 'Buddhism', 'History', 'Geography', 'Tamil', 'Civilization', 'PTS', 'Sports'].map((sub) => (
                        <tr key={sub}>
                          <td><strong>{sub}</strong></td>
                          <td><input type="number" className="marks-input" placeholder="0-100" /></td>
                          <td><input type="number" className="marks-input" placeholder="0-100" /></td>
                          <td><input type="number" className="marks-input" placeholder="0-100" /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {studentLevel === '10-11' && (
                <div>
                  <div className="subject-section-title">Compulsory Subjects (Grades 10 - 11)</div>
                  <table className="marks-table">
                    <thead>
                      <tr>
                        <th>Subject Name</th>
                        <th>Continuous (%)</th>
                        <th>Mid-Term (%)</th>
                        <th>Final Exam (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['Mathematics', 'Science', 'Sinhala', 'English', 'Buddhism', 'History'].map((sub) => (
                        <tr key={sub}>
                          <td><strong>{sub}</strong></td>
                          <td><input type="number" className="marks-input" placeholder="0-100" /></td>
                          <td><input type="number" className="marks-input" placeholder="0-100" /></td>
                          <td><input type="number" className="marks-input" placeholder="0-100" /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="subject-section-title">Bucket Subjects</div>
                  <div className="basket-grid">
                    <div className="basket-box">
                      <label>Basket One</label>
                      <select>
                        <option value="">Select Subject</option>
                        {basket1Options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      <input type="number" placeholder="Final Mark" className="marks-input" style={{ marginTop: '10px', width: '100%' }} />
                    </div>

                    <div className="basket-box">
                      <label>Basket Two</label>
                      <select>
                        <option value="">Select Subject</option>
                        {basket2Options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      <input type="number" placeholder="Final Mark" className="marks-input" style={{ marginTop: '10px', width: '100%' }} />
                    </div>

                    <div className="basket-box">
                      <label>Basket Three</label>
                      <select>
                        <option value="">Select Subject</option>
                        {basket3Options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      <input type="number" placeholder="Final Mark" className="marks-input" style={{ marginTop: '10px', width: '100%' }} />
                    </div>
                  </div>
                </div>
              )}

              {studentLevel === '12-13' && (
                <div>
                  <div className="subject-section-title">Advanced Level (Grades 12 - 13) Stream Setup</div>
                  <div className="basket-box" style={{ maxWidth: '400px', marginBottom: '20px' }}>
                    <label>Select Subject Stream</label>
                    <select value={stream} onChange={(e) => setStream(e.target.value)}>
                      <option value="mathematics">Mathematics Stream</option>
                      <option value="bio">Bio Science Stream</option>
                      <option value="technical">Technology Stream</option>
                      <option value="art">Art Stream</option>
                    </select>
                  </div>

                  <table className="marks-table">
                    <thead>
                      <tr>
                        <th>Stream Subject Selection</th>
                        <th>Term Test Mark (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3].map((num) => (
                        <tr key={num}>
                          <td>
                            <select style={{ width: '100%', height: '35px', padding: '0 8px' }}>
                              <option value="">Select Subject #{num}</option>
                              {streamOptionsMap[stream].map((sOpt) => (
                                <option key={sOpt} value={sOpt}>{sOpt}</option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <input type="number" className="marks-input" placeholder="0-100" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <button type="submit" className="save-marks-btn">Save Student Marks</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMarksForm;