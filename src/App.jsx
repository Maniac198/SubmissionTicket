import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import StudentLogin from "./components/StudentLogin";
import TeacherLogin from "./components/TeacherLogin";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentDashboard from "./components/StudentDashboard";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/TeacherLogin" element={<TeacherLogin />}></Route>
            <Route path="/StudentLogin" element={<StudentLogin />}></Route>
            <Route path="/teacher/dashboard" element={<TeacherDashboard />}></Route>
            <Route path="/student/dashboard" element={<StudentDashboard />}></Route>

          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;
