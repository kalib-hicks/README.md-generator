// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.titleInput}
    
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of Contents
* [Description](#description)
* [Instructions](#instructions)
* [Usage](#usage)
* [Guidelines](#guidelines)
* [Test](#test)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)


## Description
${data.descriptionInput}

## Instructions
${data.instructionsInput}

## Usage
${data.usageInput}

## Guidelines
${data.guidelinesInput}

## Test
${data.testInput}

## Credits
${data.testCredits}

## License
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
${data.licenseInput}
[Visit the license website](https://opensource.org/licenses/Apache-2.0)

## Questions
Any questions can be directed to me here: 
Github link - ${data.github}
or
Email - ${data.email}


`;
}




module.exports = generateMarkdown;
