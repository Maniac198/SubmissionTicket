// db/connection.js

import mysql from 'mysql2';

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'submissionticket',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool for reuse in other modules
export default pool.promise();
