// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
* [License](#license)


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

## License
${data.licenseInput}[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

`;
}




module.exports = generateMarkdown;
