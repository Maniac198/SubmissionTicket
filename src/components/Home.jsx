import React, { useState } from "react";
import styles from './Home.module.css';
import vdost1 from '../assets/vdost1.mp4';
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userRole } from './atoms'

function Home() {
    const navigate = useNavigate();
    const setUserRole = useSetRecoilState(userRole);

    const teacherHandler = () => {
        setUserRole('teacher');
        navigate("/TeacherLogin")
    }

    const studentHandler = () => {
        setUserRole('student');
        navigate("/StudentLogin")
    }

    return(
        <div className={styles.container}>
            <div className={styles.overlay}></div>
            <video src= {vdost1} autoPlay loop muted></video>
            <div className={styles.content}>
                <h1>Are You Teacher or Student?</h1>
                <div className={styles.btn}>
                    <button onClick={teacherHandler}>Teacher</button>
                    <button onClick={studentHandler}>Student</button> 
                </div>
            </div>
        </div>
    )
}
export default Home