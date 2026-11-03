import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  LoginForm,
  RegisterForm,
  AddMarksForm,
  AddFeeForm,
  StudentDashboard
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/marks" element={<AddMarksForm />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/fees" element={<AddFeeForm />} />
      </Routes>
    </Router>
  );
}

export default App;

