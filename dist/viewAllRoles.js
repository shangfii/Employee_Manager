// Establish required packages and modules 
const cTable = require('console.table');
const dbConnect = require('./dbConnect');

// Function for viewing all roles
const viewAllRoles = async () => {
    // Establish navigate function for later use
    const navigate = require('./navigate');
    // Connect to database
    const db = await dbConnect()

    // db.query for joining role table with department table and extracting to const [roleTable]
    const [roleTable] = await db.query(`SELECT role.id, role.title, role.salary, department.name as department
    FROM role
    JOIN department
    ON role.department_id = department.id`)
    
    // passing db.query table to cTable for formatting before console logging
    const table = cTable.getTable(roleTable);
    console.log(table);
    // Run navigate function
    navigate();
}
// Export module
module.exports = viewAllRoles