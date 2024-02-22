import axios from 'axios';
import React, { useState } from 'react';

// import './StudentDashboard.css'; // Assuming you have a separate CSS file for styling

function StudentDashboard({ onLogin, selectedRole }) {
  const [misId, setMisId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        password: password,
        misId: misId,
        selectedRole: selectedRole
      };
      const response = await axios.post('http://localhost:3000/login', userData);
      console.log(response.data); // Assuming the backend sends back a response
      onLogin(misId);
    } catch (error) {
      console.error('Login failed:', error);
    }
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
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default StudentDashboard;
