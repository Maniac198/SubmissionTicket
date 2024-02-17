// TeacherDashboard.js

import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const TeacherDashboard = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await axios.get('/logout'); // Assuming logout route is available in backend
      history.push('/'); // Redirect to home page after logout
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
