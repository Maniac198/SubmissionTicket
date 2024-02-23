// server.js

import express from 'express';
import session from 'express-session';
import passport from 'passport';
import teacherRoutes from './routes/teacherRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import newtest from './routes/newtest.js';
import db from './db/connection.js';
import passportConfig from './middleware/passport.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

// Logging middleware
// app.use(morgan('dev'));

// Express middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

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
app.use('/login', teacherRoutes);
app.use('/login', studentRoutes);
app.use('/',newtest);

// Logout route
app.get('/logout', (req, res) => {
  req.logout(() => {
    res.status(200).json({ message: 'Logout successful' });
  });
});

app.get('/users', async (req, res) => {
  try {
    const [rows, fields] = await db.query("INSERT INTO `auth_teacher`(`id`, `email_id`, `password`) VALUES ('2','b@gmail.com','123')");
    res.json(rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Error fetching users' });
  }
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
