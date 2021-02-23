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
            name: 'titleInput',
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
        name: 'descriptionInput',
        message: 'Provide some information about your project:',
        when: ({ confirmDescription }) => confirmDescription
      },
// INSTRUCTIONS FOR PROJECT - not required
      {
        type: 'confirm',
        name: 'confirmInstructions',
        message: 'Would you like to enter instructions for your project?',
        default: true
      },
      {
        type: 'input',
        name: 'instructionsInput',
        message: 'Provide some instructions for your project:',
        when: ({ confirmInstructions }) => confirmInstructions
      },
// USAGE FOR PROJECT - NOT REQUIRED
      {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to enter usage information for your project?',
        default: true
      },
      {
        type: 'input',
        name: 'usageInput',
        message: 'Provide some usage information for your project:',
        when: ({ confirmUsage }) => confirmUsage
      },
// CONTRIBUTING GUIDELINES - NOT REQUIRED
{
    type: 'confirm',
    name: 'confirmGuidelines',
    message: 'Would you like to enter any guidelines for your project?',
    default: true
  },
  {
    type: 'input',
    name: 'guidelinesInput',
    message: 'Provide some guidelines for your project:',
    when: ({ confirmGuidelines }) => confirmGuidelines
  },
// TEST INSTRUCTIONS - NOT REQUIRED
{
    type: 'confirm',
    name: 'confirmTest',
    message: 'Would you like to enter test instructions for your project?',
    default: true
  },
  {
    type: 'input',
    name: 'testInput',
    message: 'Provide some test instructions for your project:',
    when: ({ confirmTest }) => confirmTest
  },
 
// CHOOSE LICENSE - REQUIRED
{
    type: 'checkbox',
    name: 'licenseInput'
    ,message: 'Please choose a license from the list provided.',
    choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License',]
    ,validate: (licenseInput) => {
        if(licenseInput) {
            return true;
        } else {
            console.log('You must choose a license for your project.');
            return false;
        }
    } 
},

// GITHUB USERNAME - REQUIRED
{
    type: 'input',
    name: 'githubInput',
    message: 'Enter your GitHub username.',
    validate: (githubInput) => {
        if (githubInput) {
            return true;
        } else {
            console.log('You must enter your GitHub username.');
            return false;
        }
}
},
// EMAIL ADDRESS - REQUIRED
{
    type: 'input',
    name: 'emailInput',
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
    const content = data.title + data.description + data.instructions + data.usage + data.guidelines + data.test + data.license + data.github + data.email
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README has been created.")
    });
}

// TODO: Create a function to initialize app
const writeFileAsync = util.promisify(writeToFile); 
async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);
    console.log("README Generated")
    const markdown = generateMarkdown(userResponses);
    console.log(markdown);
  }
finally{
}
}

  // Function call to initialize app
init();