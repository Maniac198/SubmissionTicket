import React from "react";
import styles from './Home.module.css';
import vdost1 from '../assets/vdost1.mp4';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <div className={styles.overlay}></div>
            <video src= {vdost1} autoPlay loop muted></video>
            <div className={styles.content}>
                <h1>Are You Teacher or Student?</h1>
                <div className={styles.btn}>
                    <button onClick={() => {navigate("/TeacherDashboard")}}>Teacher</button>
                    <button onClick={() => {navigate("/StudentDashboard")}}>Student</button> 
                </div>
            </div>
        </div>
    )
}
export default Home