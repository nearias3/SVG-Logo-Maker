const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square } = require('./lib/shapes');

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
        let shape;
        
        });