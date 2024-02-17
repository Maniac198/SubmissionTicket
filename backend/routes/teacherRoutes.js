// backend/routes/teacherRoutes.js

import express from 'express';
import passport from 'passport';
const router = express.Router();

router.post('/login', passport.authenticate('teacher', {
  successRedirect: '/teacher/dashboard',
  failureRedirect: '/login/teacher',
  failureFlash: true
}));

export default router;
