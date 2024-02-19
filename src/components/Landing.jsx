import React, { useState, useEffect } from 'react';
import './Landing.css'; // Assuming you have a separate CSS file for styling

function Landing() {
  const [showText, setShowText] = useState(false);
  const [role, setRole] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 500); // Delay the text reveal for 0.5 seconds
  }, []);

  const handleOptionSelect = (selectedRole) => {
    setRole(selectedRole);
    setShowConfirmation(true);
  };

  return (
    <div className="container">
      <header>
        {showText && (
          <h1 className="reveal-text">
            <span>Are</span>
            <span>you</span>
            <span>a</span>
            <span>teacher</span>
            <span>or</span>
            <span>student?</span>
          </h1>
        )}
        <div className={`options ${showText ? 'show-options' : ''}`}>
          <button className="option" onClick={() => handleOptionSelect('Teacher')}>
            <span>Teacher</span>
          </button>
          <button className="option" onClick={() => handleOptionSelect('Student')}>
            <span>Student</span>
          </button>
        </div>
        {showConfirmation && (
          <div className="confirmation">
            <p>You selected: {role}</p>
            <button onClick={() => setShowConfirmation(false)}>Change Selection</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default Landing;
