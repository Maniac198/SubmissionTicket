import React, { useState } from 'react';
import axios from 'axios';
// import './TeacherDashboard.css'; // Assuming you have a separate CSS file for styling

function TeacherDashboard({ onLogin , selectedRole}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email: email,
        password: password,
        selectedRole: selectedRole
      };
      const response = await axios.post('http://localhost:3000/login/teacher', userData);
      console.log(response.data); // Assuming the backend sends back a response
      onLogin(email);
      
    } catch (error) {
      console.error('Login failed:', error);
    }
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
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default TeacherDashboard;
