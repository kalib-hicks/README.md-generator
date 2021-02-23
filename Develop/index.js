// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [

// TITLE OF PROJECT - REQUIRED
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title.',
            validate: titleInput => {
              if (titleInput) {
                return true;
              } else {
                console.log('You must enter your project title.');
                return false;
              }
            }
          },
// DESCRIPTION OF PROJECT - not required
      {
        type: 'confirm',
        name: 'confirmDescription',
        message: 'Would you like to enter some information about your project?',
        default: true
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide some information about your project:',
        when: ({ confirmDescription }) => confirmDescription
      }
// INSTRUCTIONS FOR PROJECT - not required
      {
        type: 'confirm',
        name: 'confirmInstructions',
        message: 'Would you like to enter instructions for your project?',
        default: true
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'Provide some instructions for your project:',
        when: ({ confirmInstructions }) => confirmInstructions
      }
// USAGE FOR PROJECT - NOT REQUIRED
      {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to enter usage information for your project?',
        default: true
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide some usage information for your project:',
        when: ({ confirmUsage }) => confirmUsage
      }
// CONTRIBUTING GUIDELINES - NOT REQUIRED
{
    type: 'confirm',
    name: 'confirmGuidelines',
    message: 'Would you like to enter any guidelines for your project?',
    default: true
  },
  {
    type: 'input',
    name: 'guidelines',
    message: 'Provide some guidelines for your project:',
    when: ({ confirmGuidelines }) => confirmGuidelines
  }
// TEST INSTRUCTIONS - NOT REQUIRED
{
    type: 'confirm',
    name: 'confirmTest',
    message: 'Would you like to enter test instructions for your project?',
    default: true
  },
  {
    type: 'input',
    name: 'test',
    message: 'Provide some test instructions for your project:',
    when: ({ confirmTest }) => confirmTest
  }
 
// CHOOSE LICENSE - REQUIRED
{
    type: 'checkbox',
    name: 'license'
    message: 'Please choose a license from the list provided.',
    choices: ['1', '2', '3', '4',]
    validate: (licenseInput) => {
        if(licenseInput) {
            return true;
        } else {
            console.log('You must choose a license for your project.');
            return false;
        }
    } 
}

// GITHUB USERNAME - REQUIRED
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username.',
    validate: (githubInput) => {
        if (githubInput) {
            return true;
        } else {
            console.log('You must enter your GitHub username.');
            return false;
        }
}

// EMAIL ADDRESS - REQUIRED
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address.',
    validate: (emailInput) => {
        if (emailInput) {
            return true;
        } else {
            console.log('You must enter your email address.');
            return false;
        }
    }
}
]
 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README is done!")
    });
}

// TODO: Create a function to initialize app
function init() {}



promptUser()
  .then(promptProject)
  .then(readmeData => {
    return generateMarkdown(readmeData);
  })
  .then(pageREADME => {
    return writeFile(pageREADME);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });



  // Function call to initialize app
init();