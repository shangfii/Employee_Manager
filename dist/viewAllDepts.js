// Establish required packages and modules 
const cTable = require('console.table');
const dbConnect = require('./dbConnect');

// Function for viewing all departments
const viewAllDepts = async () => {
    // Establish navigate function for later use
    const navigate = require('./navigate');
    // Connect to database
    const db = await dbConnect()

    // db.query for extracting all information from department table
    const [deptTable] = await db.query('SELECT * FROM department')
    
    // passing db.query table to cTable for formatting before console logging
    const table = cTable.getTable(deptTable);
    console.log(table);
    // Run navigate function
    navigate(); 
}

// Export module
module.exports = viewAllDepts