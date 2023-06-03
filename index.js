// Require the necessary files and packages
const inquirer = require('inquirer');
const fs = require('fs/promises');
const path = require('path');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

// Inquirer questions
const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the employee role?',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
];

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number?',
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is the GitHub username?',
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'What is the name of the school?',
    },
];

const addEmployee = [
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add another employee?',
    },
];

// Write to the HTML file in dist folder
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data).then(() => {
        console.log('Successfully wrote to index.html');
    })
    .catch((err) => {
        console.log(err);
    });
}

// Initialize the app and calls Inquirer to ask the qeustions based on the role
function init() {
    inquirer.prompt(employeeQuestions).then((response) => {

        // If the role is Manager, ask the manager questions
        if (response.role === 'Manager') {
            inquirer.prompt(managerQuestions).then((managerResponse) => {
                const manager = new Manager(
                    response.name,
                    response.id,
                    response.email,
                    managerResponse.officeNumber
                );
                teamMembers.push(manager);
                //console.log(manager);
                
                // Ask if the user wants to add another employee
                inquirer.prompt(addEmployee).then((addEmployeeResponse) => {
                    if (addEmployeeResponse.addEmployee) {
                        init();
                    } else {
                        writeToFile('/dist/index.html', generateHTML(teamMembers));
                    }
                });
            });
        } else if (response.role === 'Engineer') {

            // If the role is Engineer, ask the engineer questions
            inquirer.prompt(engineerQuestions).then((engineerResponse) => {
                const engineer = new Engineer(
                    response.name,
                    response.id,
                    response.email,
                    engineerResponse.github
                );
                teamMembers.push(engineer);
                
                // Ask if the user wants to add another employee
                inquirer.prompt(addEmployee).then((addEmployeeResponse) => {
                    if (addEmployeeResponse.addEmployee) {
                        init();
                    } else {
                        writeToFile('/dist/index.html', generateHTML(teamMembers));
                    }
                });
            });
        } else if (response.role === 'Intern') {

            // If the role is Intern, ask the intern questions
            inquirer.prompt(internQuestions).then((internResponse) => {
                const intern = new Intern(
                    response.name,
                    response.id,
                    response.email,
                    internResponse.school
                );
                teamMembers.push(intern);

                // Ask if the user wants to add another employee
                inquirer.prompt(addEmployee).then((addEmployeeResponse) => {
                    if (addEmployeeResponse.addEmployee) {
                        init();
                    } else {
                        writeToFile('/dist/index.html', generateHTML(teamMembers));
                    }
                });
            });
        }
    });
}

init();