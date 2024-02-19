import React, { useState } from 'react';
// import './TeacherDashboard.css'; // Assuming you have a separate CSS file for styling

function TeacherDashboard({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform validation and login logic
    // For simplicity, let's just pass the email to the parent component (Landing.jsx)
    onLogin(email);
  };

  return (
    <div className="teacher-dashboard">
      <h2>Teacher Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default TeacherDashboard;
