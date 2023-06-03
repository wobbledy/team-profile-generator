// Dynamicly generates the HTML file based on the user input through the answers object

// First require the Employee, Manager, Engineer, and Intern classes
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// Function that generates the HTML file
const generateHTML = (answers) => {

  // Map over the answers array to create the employee cards depending on the role and create template literals for each role
  const employeeCards = answers.map((employee) => {
    let properties = '';
    if (employee instanceof Manager) {
      properties = `Office Number: ${employee.officeNumber}`;
    } else if (employee instanceof Engineer) {
      properties = `GitHub: ${employee.github}`;
    } else if (employee instanceof Intern) {
      properties = `School: ${employee.school}`;
    }

    return `
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text">ID: ${employee.id}</p>
            <p class="card-text">Email: ${employee.email}</p>
            <p class="card-text">${properties}</p>
          </div>
        </div>
      </div>
    `;
  });

  // Return the HTML template literal with the employee cards
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
              ${employeeCards.join('')}
            </div>
        </div>
    </body>
    </html>`;
};

module.exports = generateHTML;