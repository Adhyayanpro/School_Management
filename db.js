const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
// DEBUG: log to verify env variables are loaded
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "***" : "NOT SET");

// Create a connection pool to MySQL
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Check if the connection is successful
db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database!');
    connection.release();  // Release the connection back to the pool
});

module.exports = db;
