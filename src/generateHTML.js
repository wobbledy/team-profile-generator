// Dynamicly generates the HTML file based on the user input through the answers object
const generateHTML = (answers) => {
    console.log(answers);
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
                ${answers.email}
            </div>
        </div>
    </body>
    </html>`;
}

module.exports = generateHTML;
