// Establish required packages and modules 
const inquirer = require('inquirer');
const dbConnect = require('./dbConnect');

// Function for viewing all departments
const addNewRole = async () => {
    // Establish navigate function for later use
    const navigate = require('./navigate');
    // Connect to database
    const db = await dbConnect();
    
    // db.query for storing department table to a variable
    const [deptTable] = await db.query('SELECT * FROM department');
    // console.log(deptTable)

    // Questions for adding a new role
    const roleQuest = [
        {
            type: 'input',
            name: 'roleName',
            message: "What's the name of the role?",
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the salary of the role?",
        },
        {
            type: 'list',
            message: "Which department does the role belong to?",
            name: 'department',
            choices: deptTable,
        }
    ];

    // run inquirer prompt
    inquirer.prompt(roleQuest).then((answers) => {

        // Using filter method to extract the selected dept from the department table
        const deptID = deptTable.filter(dID => dID.name == answers.department)
        
        // setting up mysql query
        const sql = "INSERT INTO role (title, salary, department_id) VALUES (?)"
        // saving inquirer answers into an array
        const values = [
            [answers.roleName, answers.salary, deptID[0].id]
        ];
        // running mysql query
        db.query(sql, values,(err, result) => {
            if (err) {
              throw err;
            }
        });
        // Console logging message and running navigate function
        console.log(`
        Added new role ${answers.roleName} to the database
        `);
        navigate()        
    });
}

// Exporting module
module.exports = addNewRole