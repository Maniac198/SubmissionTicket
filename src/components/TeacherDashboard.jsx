// TeacherDashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios';

const TeacherDashboard = () => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleLogout = async () => {
    try {
      await axios.get('/logout'); // Assuming logout route is available in backend
      navigate('/'); // Redirect to home page after logout using navigate
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div>
      <h2>Teacher Dashboard</h2>
      {/* Add teacher dashboard content here */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TeacherDashboard;
