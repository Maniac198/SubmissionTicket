import React from 'react';
import './TeacherDashboard.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const TeacherDashboard = () => {
    return(
        <div className="wrapper">
            <form action=""> 
                <h1>Teacher Login</h1>
                <div className="input-box">
                    <input type='text' placeholder='Mail ID' required></input>
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
export default TeacherDashboard;

// npm install react-icons --save