import React, { useState } from 'react';
// import './StudentDashboard.css'; // Assuming you have a separate CSS file for styling

function StudentDashboard({ onLogin }) {
  const [misId, setMisId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform validation and login logic
    // For simplicity, let's just pass the MIS ID to the parent component (Landing.jsx)
    onLogin(misId);
  };

  return (
    <div className="student-dashboard">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>MIS ID:</label>
          <input type="text" value={misId} onChange={(e) => setMisId(e.target.value)} required />
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

export default StudentDashboard;
