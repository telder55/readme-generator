// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const markDown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () =>
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of your project',

            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a description',

            },
            {
                type: 'input',
                name: 'installation',
                message: 'Enter your installation instructions.',

            },
            {
                type: 'input',
                name: 'usage',
                message: 'Enter usage details.',

            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license.',
                choices: ['No License', 'Apache License 2.0','GNU General Public License v3.0','MIT License', 'BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],

            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Enter guidelines for contributing to this project.',

            },
            {
                type: 'input',
                name: 'tests',
                message: 'Enter tests.',

            },
            {
                type: 'input',
                name: 'questions',
                message: 'Enter your github username',

            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter a contact email for people to reach you with questions',

            },
            {
                type: 'input',
                name: 'personName',
                message: 'Enter your name',

            },


        ])
        .then((resData) => {
            //Run Generate Markdown function and pass response data in
            let testData = markDown(resData)

            //Calling writeToFile
            writeToFile(testData)
        }

        )
    ;

questions();

// TODO: Create a function to write README file - maybe create an output folder.
function writeToFile(data) {
    fs.writeFile('README.md', data, function (err) {
        if (err) throw err;
        console.log('README.md has been generated :)');
    });
}

