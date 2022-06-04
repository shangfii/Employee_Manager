// Establish required packages and modules
const inquirer = require('inquirer');
const dbConnect = require('./dbConnect');

// Function for udpdating employee role
const updateEmployeeRole = async () => {
    // Establish navigate function for later use
    const navigate = require('./navigate');
    // Connect to database
    const db = await dbConnect();
   
    //db.query for storing employee table to a variable
    const [employeeTable] = await db.query('SELECT employee.id, CONCAT(employee.first_name," ", employee.last_name) AS name FROM employee');
    //db.query for storing role table to a variable
    const [roleTable] = await db.query('SELECT role.id, role.title AS name FROM role');
    
    // Questions for updating employee's role
    const updateEmployeeRoleQuest = [
        {
            type: 'list',
            name: 'employee',
            message: "Which employee's role do you want to update?",
            choices: employeeTable
        },
        {
            type: 'list',
            message: "Which role do you want to assign the selected employee?",
            name: 'newRole',
            choices: roleTable,
        },
    ];
    // run inquirer prompt
    inquirer.prompt(updateEmployeeRoleQuest).then((answers) => {
        // Using filter method to extract the employee selected from the employee table
        const employeeID = employeeTable.filter(dID => dID.name == answers.employee);
        // Using filter method to extract the role selected from the role table
        const roleID = roleTable.filter(dID => dID.name == answers.newRole);
    
        // Setting up mysql query
        const sql ='UPDATE employee SET role_id = ? WHERE id = ?'
        const values = [
            [roleID[0].id],
            [employeeID[0].id]
        ];
        // console.log(values);
        // running mysql query
        db.query(sql, values,(err, result) => {
            if (err) {
                throw err;
            } 
        });    
        // Console logging message and running navigate function
        console.log(`
        Updated role for ${employeeID[0].name}
        `);
        navigate()
    });
}
// Exporting module
module.exports = updateEmployeeRole