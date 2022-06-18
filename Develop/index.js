// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    //Objects
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },

    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Please describe your project"
    },

    {
        type: "input",
        name: "licenses",
        message: "What license does your project have?",
        choices: [
            
            {
                key: 'a',
                value: 'MIT',
            },
            {
                key: 'b',
                value: 'APACHE2.0',
            },

            {

                key: 'c',
                value: 'Boost1.0',
                
            },

            {
                key: 'd',
                value: 'None',
            }
            ],
    },

    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?",
        default: "npm i"
    },

    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default : "npm test"
    },

    {
        type: "input",
        name: "usage",
        message: "What is the usage of this repo?",
    },

    {
        type: "input",
        name: "contributers",
        message: "Who are the contributers of this repo?",
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log("Generating.... Please wait....");
            writeToFile("./README.md", generateMarkdown({ ...inquirerAnswers }));
        })
}

// Function call to initialize app
init();
