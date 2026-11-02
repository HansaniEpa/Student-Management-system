import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './AddFeeForm.css';

const AddFeeForm = () => {
  const [feeData, setFeeData] = useState({
    studentIndex: '',
    // 1. Annual Service Charge
    serviceAmount: '',
    serviceDueDate: '',
    serviceStatus: 'Pending',
    
    // 2. Donation
    donationAmount: '',
    donationDueDate: '',
    donationStatus: 'Pending',
    
    // 3. School Development Society Fee
    sdsAmount: '',
    sdsDueDate: '',
    sdsStatus: 'Pending'
  });

  const handleChange = (e) => {
    setFeeData({ ...feeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Fee records successfully updated for Student Index: ${feeData.studentIndex}`);
  };

  return (
    <div className="dashboard-container">
      {/* Reusable Sidebar Component */}
      <Sidebar />

      <div className="main-content">
        <div className="top-navbar">
          <span>Fee Management System</span>
          <span className="admin-badge">Admin ▾</span>
        </div>

        <div className="form-content-area">
          <div className="marks-form-container">
            <h2>Manage Student Fee Categories</h2>
            <form onSubmit={handleSubmit}>
              
              {/* Student Identification */}
              <div className="grade-selector-group" style={{ gridTemplateColumns: '1fr', marginBottom: '20px' }}>
                <div>
                  <label>Student Index Number</label>
                  <input
                    type="text"
                    name="studentIndex"
                    placeholder="e.g., ST-2026-089"
                    value={feeData.studentIndex}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Section 1: Annual Service Charge */}
              <div className="fee-section-card">
                <h3 className="subject-section-title">1. Annual Service Charge</h3>
                <div className="grade-selector-group">
                  <div>
                    <label>Amount (Rs.)</label>
                    <input
                      type="number"
                      name="serviceAmount"
                      placeholder="0.00"
                      value={feeData.serviceAmount}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Due Date</label>
                    <input
                      type="date"
                      name="serviceDueDate"
                      value={feeData.serviceDueDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Payment Status</label>
                    <select name="serviceStatus" value={feeData.serviceStatus} onChange={handleChange}>
                      <option value="Complete">Complete (Paid)</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Donation */}
              <div className="fee-section-card">
                <h3 className="subject-section-title">2. Donation</h3>
                <div className="grade-selector-group">
                  <div>
                    <label>Amount (Rs.)</label>
                    <input
                      type="number"
                      name="donationAmount"
                      placeholder="0.00"
                      value={feeData.donationAmount}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Due Date</label>
                    <input
                      type="date"
                      name="donationDueDate"
                      value={feeData.donationDueDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Payment Status</label>
                    <select name="donationStatus" value={feeData.donationStatus} onChange={handleChange}>
                      <option value="Complete">Complete (Paid)</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: School Development Society Fee */}
              <div className="fee-section-card">
                <h3 className="subject-section-title">3. School Development Society (SDS) Fee</h3>
                <div className="grade-selector-group">
                  <div>
                    <label>Amount (Rs.)</label>
                    <input
                      type="number"
                      name="sdsAmount"
                      placeholder="0.00"
                      value={feeData.sdsAmount}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Due Date</label>
                    <input
                      type="date"
                      name="sdsDueDate"
                      value={feeData.sdsDueDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Payment Status</label>
                    <select name="sdsStatus" value={feeData.sdsStatus} onChange={handleChange}>
                      <option value="Complete">Complete (Paid)</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                </div>
              </div>

              <button type="submit" className="save-marks-btn">
                Save All Fee Records
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFeeForm;