import React from 'react';
import { Sidebar } from '../../components';
import './StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className="student-dash-container">
      {/* Reusable Sidebar Component */}
      <Sidebar />

      <div className="dash-main">
        <div className="top-navbar">
          <span>Student Management Dashboard</span>
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Welcome, John (Student) ▾</span>
        </div>

        <div className="dash-content">
          <div className="profile-header-card">
            <div className="profile-avatar">JD</div>
            <div className="profile-info">
              <h2>John Doe</h2>
              <p>Index No: ST-2026-089 | Grade: 10-A | Transport: School Van</p>
            </div>
          </div>

          <div className="dash-grid">
            <div className="dash-card">
              <h3>Personal & Family Details</h3>
              <div className="info-row">
                <span className="info-label">Full Name:</span>
                <span>Kasuni Hansika Epa</span>
              </div>
              <div className="info-row">
                <span className="info-label">Date of Birth:</span>
                <span>1999-12-07</span>
              </div>
              <div className="info-row">
                <span className="info-label">Father's Name:</span>
                <span>Ariyarathna Epa (Businessman)</span>
              </div>
              <div className="info-row">
                <span className="info-label">Mother's Name:</span>
                <span>Rupa Edirisinghe (Housewife)</span>
              </div>
              <div className="info-row">
                <span className="info-label">Contact Number:</span>
                <span>+94 77 123 4567</span>
              </div>
              <div className="info-row">
                <span className="info-label">Home Distance:</span>
                <span>4.5 km</span>
              </div>
            </div>

            <div className="dash-card">
              <h3>Co-Curricular Activities</h3>
              <div className="info-row">
                <span className="info-label">Sports Team:</span>
                <span>Under-16 Netball Team</span>
              </div>
              <div className="info-row">
                <span className="info-label">Clubs & Societies:</span>
                <span>Science Society, ICT Club</span>
              </div>
              <div className="info-row">
                <span className="info-label">Leadership:</span>
                <span>Class Monitor (Grade 9 & 10)</span>
              </div>
              <div className="info-row">
                <span className="info-label">Awards:</span>
                <span>1st Place - Inter-House Science Exhibition 2025</span>
              </div>
            </div>
          </div>

          <div className="dash-card full-width">
            <h3>Academic Performance (Term Marks)</h3>
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Teacher</th>
                  <th>Mid-Term (%)</th>
                  <th>Final Exam (%)</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mathematics</td>
                  <td>Mr. Janaka</td>
                  <td>88%</td>
                  <td>92%</td>
                  <td><strong>A</strong></td>
                </tr>
                <tr>
                  <td>Science</td>
                  <td>Mrs. Perera</td>
                  <td>85%</td>
                  <td>90%</td>
                  <td><strong>A</strong></td>
                </tr>
                <tr>
                  <td>English Literature</td>
                  <td>Ms. Kaweesha</td>
                  <td>78%</td>
                  <td>82%</td>
                  <td><strong>B</strong></td>
                </tr>
                <tr>
                  <td>History</td>
                  <td>Mr. Dhammika</td>
                  <td>90%</td>
                  <td>89%</td>
                  <td><strong>A</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dash-card full-width">
            <h3>Annual Fees & Payments</h3>
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Fee Description</th>
                  <th>Amount</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>School Development Society Fee</td>
                  <td>Rs. 600.00</td>
                  <td>2026-01-15</td>
                  <td><span style={{ color: 'green', fontWeight: 'bold' }}>Paid</span></td>
                </tr>
                <tr>
                  <td>Donation</td>
                  <td>Rs. 2500.00</td>
                  <td>2026-02-01</td>
                  <td><span style={{ color: 'green', fontWeight: 'bold' }}>Paid</span></td>
                </tr>
                <tr>
                  <td>Annual Service Charges</td>
                  <td>Rs. 600.00</td>
                  <td>2026-04-10</td>
                  <td><span style={{ color: 'red', fontWeight: 'bold' }}>Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

