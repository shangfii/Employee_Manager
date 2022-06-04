// Establish required packages and modules
const inquirer = require('inquirer');
const dbConnect = require('./dbConnect');

// Function for viewing all departments
const addNewEmployee = async () => {
    // Establish navigate function for later use
    const navigate = require('./navigate');
    // Connect to database
    const db = await dbConnect();
    
    // db.query for storing role table to a variable
    const [roleTable] = await db.query('SELECT role.id, role.title AS name FROM role');
    // de.query for storing managers only from employee table to a variable
    const [managerTable] = await db.query('SELECT employee.id, CONCAT( employee.first_name," ", employee.last_name) AS name FROM employee WHERE employee.manager_id IS null');
    // Pushing 'null' option into manager table
    managerTable.push({id: 'null', name: 'None'})

    // Questions for adding a new employee
    const addEmployeeQuest = [
        {
            type: 'input',
            name: 'firstName',
            message: "What's the employee's first name?",
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What's the employee's last name?",
        },
        {
            type: 'list',
            message: "What's the employee's role?",
            name: 'role',
            choices: roleTable,
        },
        {
            type: 'list',
            message: "Who is the employee's manager",
            name: 'manager',
            choices: managerTable,
        },
    ];
    // run inquirer prompt
    inquirer.prompt(addEmployeeQuest).then((answers) => {
        // Using filter method to extract the role selected from the role table
        const roleID = roleTable.filter(dID => dID.name == answers.role);

        // Using filter method to extract the manager selected from manager table
        const managerID = managerTable.filter(dID => dID.name == answers.manager);
        // saving manager id to variable
        var manID = managerID[0].id;
        // If 'none' option was selected for manager, change value to null
        if (manID === 'None'){
            manID = null
        }
        // console.log(manID)

        // Setting up mysql query
        const sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)"
        // Saving inquirer answers into an array
        const values = [
            [answers.firstName, answers.lastName, roleID[0].id, manID]
        ];
        // running mysql query
        db.query(sql, values,(err, result) => {
            if (err) {
                throw err;
            } 
        });    
        // Console logging message and running navigate function
        console.log(`
        Added ${answers.firstName} ${answers.lastName} to the database
        `);
        navigate() 
    });
}
// Exporting module
module.exports = addNewEmployee