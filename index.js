const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square } = require('./lib/shapes');

function promptQuestions() {
inquirer.prompt([{
    type: 'input',
    name:'text',
    message: 'Enter the text you want on the logo (up to 3 characters):',
    // how do I validate user input to ensure they don't put more than 3? //
},
{
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
},
{
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: [circle, triangle, square],
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
},
])
    .then(answers => {
        if (answers.text.length > 3) {
            console.log("Value must not exceed 3 characters");
            promptQuestions();
        } else {
            fs.writeToFile('logo.svg', answers);
            console.log('Your logo.svg was successfully generated!')
        }
        });
}

promptQuestions();