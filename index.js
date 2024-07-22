const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square } = require('./lib/shapes');

function promptUser() {
inquirer.prompt([
    {
    type: 'input',
    name:'text',
    message: 'Enter the text you want on the logo (up to 3 characters):',
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
    choices: ['Circle', 'Triangle', 'Square'],
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
            let shape;
            switch (answers.shape) {
                case 'Circle':
                    shape = new Circle();
                    break;
                case 'Triangle':
                    shape = new Triangle();
                    break;
                case 'Square':
                    shape = new Square();
                    break;
            }
            shape.setColor(answers.shapeColor);
            
            fs.writeFileSync('logo.svg', answers);
            console.log('Your logo.svg was successfully generated!')
        }
        });
}

promptUser();