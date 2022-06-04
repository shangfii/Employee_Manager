// Required packages and modules 

const cTable = require('console.table');
const dbConnect = require('./dbConnect');

// Function for viewing all employees
const viewAllEmployees = async () => {
    // Establish navigate function for later use
    const navigate = require('./navigate');
    // Connect to database
    const db = await dbConnect()

    // db.query for joining employee table with role table and extracting to const [employeeTable]
    const [employeeTable] = await db.query(`SELECT employee.id, employee.first_name, employee.last_name, CONCAT(manager.first_name," ",manager.last_name) as manager, role.title, role.salary, department.name as department
    FROM employee
    LEFT JOIN role
    ON role.id = employee.role_id
    LEFT JOIN department
    ON department.id = role.department_id
    LEFT JOIN employee manager
    ON employee.manager_id = manager.id
    `)
    
    // passing db.query table to cTable for formatting before console logging
    const table = cTable.getTable(employeeTable);
    console.log(table);
    // Run navigate function
    navigate();
}

// Export module
module.exports = viewAllEmployees