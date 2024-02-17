// App.jsx

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Submission Ticket Application</h1>
        <Switch>
          <Route path="/teacher/dashboard">
            <TeacherDashboard />
          </Route>
          <Route path="/student/dashboard">
            <StudentDashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
