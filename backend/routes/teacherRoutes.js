// backend/routes/teacherRoutes.js

import express from 'express';
import passport from 'passport';
const router = express.Router();

router.post('/teacher', (req, res, next) => {
  passport.authenticate('teacher', (err, user, info) => {
    console.log('Custom callback function executed');

    // Check for errors
    if (err) {
      console.error('Error during authentication:', err);
      return res.status(500).json({ error: 'Error during authentication' });
    }
    // Check if user authentication failed
    if (!user) {
      console.log('Authentication failed:', info.message);
      return res.status(401).json({ error: 'Authentication failed', message: info.message });
    }

    // Authentication successful
    req.logIn(user, (err) => {
      if (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ error: 'Error during login' });
      }
      console.log('User authenticated:', user);
      return res.status(200).json({ message: 'Login successful', user });
    });
  })(req, res, next); // Execute the custom callback function
});

export default router;
