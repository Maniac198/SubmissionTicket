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
      navigate("/teacher/dashboard");
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    // <div className="wrapper">
    //   <form action="">
    //     <h1>Teacher Login</h1>
    //     <div className="input-box">
    //       <input type='text' placeholder='Mail ID' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
    //       <FaUser className="icon" />
    //     </div>
    //     <div className="input-box">
    //       <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
    //       <FaLock className="icon" />
    //     </div>

    //     <button type='submit' onClick={handleSubmit}>Login</button>
    //   </form>
    // </div>
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* login container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Teacher Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">Please Enter Email and Password for login</p>

          <form action="" className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" onChange={(e) => setMisID(e.target.value)}/>
            <div className="relative">
              <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" onClick={handleSubmit}>Login</button>
          </form>

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <a href="#">Forgot your password?</a>
          </div>
        </div>

        {/* image */}
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src="https://i.pinimg.com/originals/89/53/00/8953008f5a46f0573d7f2abfcae6412b.png" alt="login" />
        </div>
      </div>
    </section>
  );
};
export default TeacherDashboard;
