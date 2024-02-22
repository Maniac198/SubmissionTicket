import React from 'react';
import LogoutButton from './LogoutButton';

const TeacherDashboard = () => {
  return (
    <>
        <div>
        <h1>Welcome to Teacher Dashboard</h1>
        <p>This is the dashboard for teachers. You can add your content here.</p>
        </div>
        <LogoutButton></LogoutButton>
    </>
  );
};

export default TeacherDashboard;
