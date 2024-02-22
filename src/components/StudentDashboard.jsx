<<<<<<< HEAD
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

=======
import React from 'react';
import './StudentDashboard.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const StudentDashboard = () => {
    return(
        <div className="wrapper">
            <form action=""> 
                <h1>Student Login</h1>
                <div className="input-box">
                    <input type='text' placeholder='MIS ID' required></input>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type='password' placeholder='Password' required></input>
                    <FaLock className="icon"/>
                </div>

                <button type='submit'>Login</button>
            </form>
        </div>
    );
};
>>>>>>> fdf07878e30dd55a0e09dcedc732f64287f7aa4e
export default StudentDashboard;

// npm install react-icons --save