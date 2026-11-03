import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  // Mock data for class-wise breakdowns, teachers, and attendance
  const classRecords = [
    { id: 1, grade: 'Grade 6-A', boys: 22, girls: 18, classTeacher: 'Mrs. Perera', sectionHead: 'Mr. Silva', attendance: '96% (38/40)' },
    { id: 2, grade: 'Grade 7-B', boys: 20, girls: 24, classTeacher: 'Mr. Anderson', sectionHead: 'Mr. Silva', attendance: '94% (41/44)' },
    { id: 3, grade: 'Grade 10-A', boys: 25, girls: 20, classTeacher: 'Ms. Clara', sectionHead: 'Mrs. Jayasinghe', attendance: '92% (41/45)' },
    { id: 4, grade: 'Grade 11-C', boys: 19, girls: 21, classTeacher: 'Mr. Silva', sectionHead: 'Mrs. Jayasinghe', attendance: '97% (39/40)' }
  ];

  const handleTeacherAccess = (className) => {
    alert(`Accessing classroom portal for: ${className}`);
    navigate('/dashboard');
  };

  return (
    <div className="dashboard-container">
      {/* Reusable Sidebar Component */}
      <Sidebar />

      <div className="main-content">
        <div className="top-navbar">
          <span>School Administration & Class Overview</span>
          <span className="admin-badge">Admin ▾</span>
        </div>

        <div className="form-content-area">
          {/* Welcome Banner */}
          <div className="welcome-banner">
            <h2>Welcome to Student Management System (SMS)</h2>
            <p>Comprehensive institutional oversight: monitor classroom demographics, faculty assignments, and daily attendance.</p>
          </div>

          {/* Statistics Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Total Students</h4>
              <p className="stat-number">1,245</p>
            </div>
            <div className="stat-card">
              <h4>Active Classes</h4>
              <p className="stat-number">32</p>
            </div>
            <div className="stat-card">
              <h4>Pending Fee Alerts</h4>
              <p className="stat-number" style={{ color: '#ef4444' }}>14</p>
            </div>
            <div className="stat-card">
              <h4>Average Attendance</h4>
              <p className="stat-number" style={{ color: '#10b981' }}>94.8%</p>
            </div>
          </div>

          {/* Class-wise Details & Attendance Section */}
          <div className="dash-card full-width" style={{ marginBottom: '30px', background: '#fff', padding: '25px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ marginTop: 0, marginBottom: '15px', color: '#1e293b' }}>Class Demographics, Faculty & Daily Attendance</h3>
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Class / Grade</th>
                  <th>Boys</th>
                  <th>Girls</th>
                  <th>Total</th>
                  <th>Class Teacher</th>
                  <th>Section Head</th>
                  <th>Daily Attendance</th>
                  <th>Teacher Access</th>
                </tr>
              </thead>
              <tbody>
                {classRecords.map((item) => {
                  const total = item.boys + item.girls;
                  return (
                    <tr key={item.id}>
                      <td><strong>{item.grade}</strong></td>
                      <td>{item.boys}</td>
                      <td>{item.girls}</td>
                      <td><strong>{total}</strong></td>
                      <td>{item.classTeacher}</td>
                      <td>{item.sectionHead}</td>
                      <td><span style={{ color: '#059669', fontWeight: 'bold' }}>{item.attendance}</span></td>
                      <td>
                        <button 
                          className="classroom-access-btn"
                          onClick={() => handleTeacherAccess(item.grade)}
                        >
                          Open Class
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Quick Action Navigation Cards */}
          <h3 className="section-heading">Quick Actions</h3>
          <div className="quick-actions-grid">
            <div className="action-card" onClick={() => navigate('/register')}>
              <h4>Register New Student</h4>
              <p>Add new student profiles, admission details, and parent contact information.</p>
            </div>
            <div className="action-card" onClick={() => navigate('/marks')}>
              <h4>Enter Term Marks</h4>
              <p>Input and update mid-term and final exam grades across grade bands.</p>
            </div>
            <div className="action-card" onClick={() => navigate('/fees')}>
              <h4>Manage Student Fees</h4>
              <p>Track service charges, donations, and society fee completion statuses.</p>
            </div>
            <div className="action-card" onClick={() => navigate('/dashboard')}>
              <h4>View Student Profile</h4>
              <p>Check comprehensive student performance dashboards and profile summaries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

