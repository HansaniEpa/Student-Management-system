import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to automatically set the active class based on current URL
  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <aside className="sidebar">
      <div className="sidebar-header">Student Management System</div>
      <ul className="sidebar-menu">
        <li className={isActive('/home')} onClick={() => navigate('/home')}>
          Home Overview
        </li>
        <li className={isActive('/dashboard')} onClick={() => navigate('/dashboard')}>
          Student Profile
        </li>
        <li className={isActive('/marks')} onClick={() => navigate('/marks')}>
          Add Marks
        </li>
        <li className={isActive('/register')} onClick={() => navigate('/register')}>
          Add Students
        </li>
        <li className={isActive('/fees')} onClick={() => navigate('/fees')}>
          Manage Fees
        </li>
        <li className={isActive('/')} onClick={() => navigate('/')}>
          Logout
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

