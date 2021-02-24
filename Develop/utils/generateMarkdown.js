

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.titleInput}
    
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
${data.licenseInput}

## Questions
Any questions can be directed to me here: 
Github link - ${data.github}
or
Email - ${data.email}


`;
}




module.exports = generateMarkdown;
