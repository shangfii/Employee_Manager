// Required packages and modules 

const inquirer = require('inquirer');         // Package for command prompts
const dbConnect = require('./dbConnect');

// Function for adding a new department
const addNewDepartment = async () => {
    // Establish navigate function 
    const navigate = require('./navigate');
    // Connect to database
    const db = await dbConnect()

    // Question for adding new department
    const newDeptNameQuest = [{
            type: 'input',
            name: 'name',
            message: "What's the name of the Department?",
        }];
    
    // Intiate inquirer prompt
    inquirer.prompt(newDeptNameQuest).then((answers) => {
        // setting mysql query
        const sql = "INSERT INTO department (name) VALUES (?)"
        const newDept = answers.name;
        // console.log(newDept);

        // db.query for adding new department
        db.query(sql, newDept,(err) => {
            if (err) {
              throw err;
            }
        });
        console.log(`
        Added new department ${answers.name} to the database
        `);
        // run navigate function
        navigate() 
    });
};

// Export module ready for use
module.exports = addNewDepartment