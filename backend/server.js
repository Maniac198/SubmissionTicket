// server.js

import express from 'express';
import session from 'express-session';
import passport from 'passport';
import teacherRoutes from './routes/teacherRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import db from './db/connection.js';
import passportConfig from './middleware/passport.js';

const app = express();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express session
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passportConfig(passport);


// Routes
// Define your authentication routes here
app.post('/login/teacher', passport.authenticate('teacher', {
    successRedirect: '/teacher/dashboard',
    failureRedirect: '/login',
    failureFlash: true
  }));
  
  app.post('/login/student', passport.authenticate('student', {
    successRedirect: '/student/dashboard',
    failureRedirect: '/login',
    failureFlash: true
  }));

// Logout route
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//authur : 
const fun = ()=>{
    console.log("hellooo");
}