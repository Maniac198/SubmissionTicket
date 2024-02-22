import React, { useState } from 'react';
import './TeacherLogin.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { userRole } from './atoms';
import { useRecoilValue } from 'recoil';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const TeacherDashboard = () => {
  const role = useRecoilValue(userRole);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login/teacher', { email, password, role });
      console.log(response.data); // Assuming the backend sends back a response
      console.log("pata nhi kya data h");
      navigate("/teacher/dashboard");
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

    return(
        <div className="wrapper">
            <form action=""> 
                <h1>Teacher Login</h1>
                <div className="input-box">
                    <input type='text' placeholder='Mail ID' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <FaLock className="icon"/>
                </div>

                <button type='submit' onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
};
export default TeacherDashboard;
