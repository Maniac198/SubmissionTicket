// backend/routes/studentRoutes.js

import express from 'express';
import passport from 'passport';
const router = express.Router();

router.post('/login', passport.authenticate('student', {
  successRedirect: '/student/dashboard',
  failureRedirect: '/login/student',
  failureFlash: true
}));

export default router;
