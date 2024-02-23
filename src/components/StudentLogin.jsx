import React, { useState } from 'react';
import './StudentLogin.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from 'axios';
import { userRole } from './atoms';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
    const role = useRecoilValue(userRole);
    const navigate = useNavigate();
    const [MisId, setMisID] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login/student', { MisId, password, role });
            console.log(response.data); // Assuming the backend sends back a response
            navigate("/student/dashboard");
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="wrapper">
            <form action="">
                <h1>Student Login</h1>
                <div className="input-box">
                    <input type='text' placeholder='MIS ID' required value={MisId} onChange={(e) => setMisID(e.target.value)}></input>
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <FaLock className="icon" />
                </div>

                <button type='submit' onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
};
export default StudentDashboard;

// npm install react-icons --save