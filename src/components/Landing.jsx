import React, { useState } from 'react';
// import './Landing.css'; // Assuming you have a separate CSS file for styling
import TeacherDashboard from './TeacherDashboard';
import StudentDashboard from './StudentDashboard';

function Landing() {
  const [showTeacherDashboard, setShowTeacherDashboard] = useState(false);
  const [showStudentDashboard, setShowStudentDashboard] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleOptionSelect = (selectedRole) => {
    setSelectedRole(selectedRole);
    if (selectedRole === 'Teacher') {
      setShowTeacherDashboard(true);
      setShowStudentDashboard(false);
    } else if (selectedRole === 'Student') {
      setShowStudentDashboard(true);
      setShowTeacherDashboard(false);
    }
  };

  const handleTeacherLogin = (email) => {
    // Here you can handle the teacher login logic
    console.log('Teacher logged in with email:', email);
  };

  const handleStudentLogin = (misId) => {
    // Here you can handle the student login logic
    console.log('Student logged in with MIS ID:', misId);
  };

  return (
    <div className="container">
      <header>
        <h1>Are you a teacher or student?</h1>
        <div className="options">
          <button className="option" onClick={() => handleOptionSelect('Teacher')}>
            <span>Teacher</span>
          </button>
          <button className="option" onClick={() => handleOptionSelect('Student')}>
            <span>Student</span>
          </button>
        </div>
      </header>
      {showTeacherDashboard && <TeacherDashboard onLogin={handleTeacherLogin} />}
      {showStudentDashboard && <StudentDashboard onLogin={handleStudentLogin} />}
    </div>
  );
}

export default Landing;
