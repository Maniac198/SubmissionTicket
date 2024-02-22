// backend/routes/teacherRoutes.js

import express from 'express';
import passport from 'passport';
const router = express.Router();

router.post('/login/teacher', (req, res, next) => {
  passport.authenticate('teacher', (err, user, info) => {
    console.log('Custom callback function executed');

    // Check for errors
    if (err) {
      console.error('Error during authentication:', err);
      return next(err);
    }
    // Check if user authentication failed
    if (!user) {
      console.log('Authentication failed:', info.message);
      return res.redirect('/login/teacher'); // Redirect to login page
    }

    // Authentication successful
    req.logIn(user, (err) => {
      if (err) {
        console.error('Error during login:', err);
        return next(err);
      }
      console.log('User authenticated:', user);
      return res.redirect('/teacher/dashboard'); // Redirect to teacher dashboard
    });
  })(req, res, next); // Execute the custom callback function
});


export default router;
