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
      // name is key for accessing value
    
    },
    {
        type: 'input',
        name: 'author',
        message: 'Enter the author of your project',
        
      },
  ])
  .then((resData) => {
        let testData = markDown(resData)
        console.log(testData)

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
        console.log('Saved!');
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
