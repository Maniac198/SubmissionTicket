// StudentDashboard.js

import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const StudentDashboard = () => {
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
      <h2>Student Dashboard</h2>
      {/* Add student dashboard content here */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default StudentDashboard;
