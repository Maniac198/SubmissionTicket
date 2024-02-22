import React from 'react';
import './StudentLogin.css';
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
export default StudentDashboard;

// npm install react-icons --save