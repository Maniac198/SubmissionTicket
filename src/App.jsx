import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import StudentDashboard from './components/StudentDashboard'
import TeacherDashboard from "./components/TeacherDashboard";

function App() {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/TeacherDashboard" element={<TeacherDashboard/>}></Route>
          <Route path="/StudentDashboard" element={<StudentDashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
