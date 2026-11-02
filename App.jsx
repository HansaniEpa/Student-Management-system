import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Corrected import paths pointing to your Final folder
import HomePage from './Components/Assets/Final/HomePage';
import LoginForm from './Components/Assets/Final/LoginForm';
import RegisterForm from './Components/Assets/Final/RegisterForm';
import AddMarksForm from './Components/Assets/Final/AddMarksForm';
import AddFeeForm from './Components/Assets/Final/AddFeeForm';
import StudentDashboard from './Components/Assets/Final/StudentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/marks" element={<AddMarksForm />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/fees" element={<AddFeeForm />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;