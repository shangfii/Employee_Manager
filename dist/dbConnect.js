// Establish required packages and modules
const mysql = require("mysql2/promise");
require('dotenv').config();

// Connect to database
const dbConnect = () => {
   const db = mysql.createConnection(
        {
            host: 'localhost',
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        // console.log("Blank db connected")
    );
    return db
};
// Export module
module.exports = dbConnect