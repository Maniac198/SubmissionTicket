import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import StudentDashboard from './components/StudentDashboard'
import TeacherDashboard from "./components/TeacherDashboard";

<<<<<<< HEAD
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
=======
 
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
>>>>>>> fdf07878e30dd55a0e09dcedc732f64287f7aa4e

export default App
