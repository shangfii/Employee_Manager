// Establishing external modules/packages required for this code

const inquirer = require('inquirer');
const ASCIIart = require('./dist/ASCIIart');
const seedDB = require('./dist/seedDb');


//Start with ASCII art decororation

const color = 'blue'
const color2='white'
ASCIIart(color);

// Initial prompt

const initQuestions = [
    {
        // Welcome message when app starts
        type: "confirm",
        name: "intro Message",
        message: `Hello There! Welcome to the Employee Manager App. 
                (Hit: enter to continue)`,
    default: true,
    },
 ];

// start inquirer and seed database

function init() {
    inquirer.prompt(initQuestions).then(() => {
        seedDB();
    });
};

// Call function to start inquirer 

init();