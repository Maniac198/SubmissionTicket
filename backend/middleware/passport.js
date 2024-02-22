// passport.js

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local'; // Import the specific named export
import db from '../db/connection.js'; // Adjust the path as per your project structure

// Define local strategy for teacher authentication
passport.use('teacher', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true 
}, async (req, email, password, done) => {
  try {
    console.log("yaha tak to pahocha");
    const userRole = req.body.userRole;
    const [rows] = await db.execute('SELECT * FROM auth_teacher WHERE email_id = ?', [email]);
    if (rows.length === 0) return done(null, false, { message: 'Incorrect email.' });
    const user = {
      data : rows[0],
      userRole: userRole
    }
    console.log(user);
    if (rows[0].password !== password) return done(null, false, { message: 'Incorrect password.' });
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

// Define local strategy for student authentication
passport.use('student', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true 
}, async (req, email, password, done) => {
  try {
    const userRole = req.body.userRole;
    const [rows] = await db.execute('SELECT * FROM auth_student WHERE mis_id = ?', [email]);
    if (rows.length === 0) return done(null, false, { message: 'Incorrect email.' });
    const user = {
      data : rows[0],
      userRole: userRole
    }
    console.log(user);
    if (user.password !== password) return done(null, false, { message: 'Incorrect password.' });
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user); // Assuming user object has an 'id' field
});

// Deserialize user
passport.deserializeUser(async (user, done) => {
  try {
    // Fetch user from the database based on id
    console.log(user);
    // const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    // if (rows.length === 0) {
    //   return done(new Error('User not found'));
    // }
    // const user = rows[0];
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Export the configured Passport object
export default function passportConfig(passport) {
  // Nothing needs to be done here as Passport configuration is already defined above
}
