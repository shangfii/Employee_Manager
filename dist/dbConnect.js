// Set Up required packages and modules

const mysql = require("mysql2/promise");
require('dotenv').config();

// Connect to database
const dbConnect = () => {
   const db = mysql.createConnection(
        {
            host: 'localhost',
            database: 'my_company_db',
            user: 'root',
            password: "",
        },
        
    );
    return db
};
// Export module
module.exports = dbConnect