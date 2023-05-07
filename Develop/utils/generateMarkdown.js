// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'Apache'){
    return `https://img.shields.io/badge/License-Apache_2.0-blue.svg`
  }
  else if(license == 'MIT'){
    return `https://img.shields.io/badge/License-MIT-yellow.svg`
  }
  else if(license == 'Mozilla'){
    return `https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'Apache'){
    return `https://opensource.org/licenses/Apache-2.0`
  }
  else if(license == 'MIT'){
    return `https://opensource.org/licenses/MIT`
  }
  else if(license == 'Mozilla'){
    return `https://opensource.org/licenses/MPL-2.0`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## How to Contribute
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions 
  
  If you have any questions about this project, please feel free to reach out to me on [GitHub](https://github.com/${data.github}) or via email ${data.email}.`
}

module.exports = generateMarkdown;