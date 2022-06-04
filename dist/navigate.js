// Required packages and modules connection

const inquirer = require('inquirer');
const viewAllDepts = require('./viewAllDepts');
const viewAllRoles = require('./viewAllRoles');
const viewAllEmployees = require('./viewAllEmployees');
const addNewDepartment = require('./addNewDepartment');
const addNewRole = require('./addNewRole');
const addNewEmployee = require('./addNewEmployee');
const updateEmployeeRole = require('./updateEmployeeRole');
const quit = require('./quit')


const navigate = () => {
    const navQuestions = [{
        // Creating a list input type for user to navigate application
            type: 'list',
            message: 'What would you like to do?',
            name: 'optSelected',
            choices: ['View all Departments', 'View all Roles','View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Quit'],
        }];

    inquirer.prompt(navQuestions).then((answers) => {
        
        //Depending on what option the user selected, the appropriate action will follow
        if (answers.optSelected == 'View all Departments') {
            viewAllDepts();
        } else if (answers.optSelected == 'View all Roles'){
            viewAllRoles();
        } else if (answers.optSelected == 'View all Employees'){
            viewAllEmployees();
        } else if (answers.optSelected == 'Add a Department'){
            addNewDepartment();
        } else if (answers.optSelected == 'Add a Role'){
            addNewRole();
        } else if (answers.optSelected == 'Add an Employee'){
            addNewEmployee();
        } else if (answers.optSelected == 'Update an Employee Role'){
            updateEmployeeRole();
        } else {
            quit()
        }
    })
};
// Export navigate module

module.exports = navigate