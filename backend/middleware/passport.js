// passport.js

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local'; // Import the specific named export
import db from '../db/connection.js'; // Adjust the path as per your project structure

// Define local strategy for teacher authentication
passport.use('teacher', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const [rows] = await db.execute('SELECT * FROM auth_teacher WHERE email = ?', [email]);
    if (rows.length === 0) return done(null, false, { message: 'Incorrect email.' });
    const user = rows[0];
    if (user.password !== password) return done(null, false, { message: 'Incorrect password.' });
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

// Define local strategy for student authentication
passport.use('student', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const [rows] = await db.execute('SELECT * FROM auth_student WHERE email = ?', [email]);
    if (rows.length === 0) return done(null, false, { message: 'Incorrect email.' });
    const user = rows[0];
    if (user.password !== password) return done(null, false, { message: 'Incorrect password.' });
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id); // Assuming user object has an 'id' field
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    // Fetch user from the database based on id and call done(null, user);
  } catch (error) {
    return done(error);
  }
});

// Export a function to configure Passport
export default function passportConfig(passport) {
  // Configure Passport strategies, serialization, and deserialization
}
