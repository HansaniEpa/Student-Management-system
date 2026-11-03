import React, { useState } from 'react';
import { Sidebar } from '../../components';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    indexNo: '',
    grade: '6',
    dob: '',
    guardianName: '',
    contactNo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student registered successfully: ${formData.fullName}`);
  };

  return (
    <div className="dashboard-container">
      {/* Reusable Sidebar Component */}
      <Sidebar />

      <div className="main-content">
        <div className="top-navbar">
          <span>Student Registration</span>
          <span className="admin-badge">Admin ▾</span>
        </div>

        <div className="form-content-area">
          <div className="marks-form-container">
            <h2>Add New Student Record</h2>
            <form onSubmit={handleSubmit}>
              <div className="grade-selector-group">
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Student Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Index Number / ID</label>
                  <input
                    type="text"
                    name="indexNo"
                    placeholder="e.g., ST-2026-101"
                    value={formData.indexNo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Grade Level</label>
                  <select name="grade" value={formData.grade} onChange={handleChange}>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                    <option value="13">Grade 13</option>
                  </select>
                </div>
                <div>
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Guardian / Father's Name</label>
                  <input
                    type="text"
                    name="guardianName"
                    placeholder="Parent / Guardian Name"
                    value={formData.guardianName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Contact Phone Number</label>
                  <input
                    type="tel"
                    name="contactNo"
                    placeholder="+94 77 000 0000"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="save-marks-btn" style={{ marginTop: '20px' }}>
                Register Student
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

