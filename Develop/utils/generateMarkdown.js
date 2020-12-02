// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.projectName}

  ${getLicenseBadge(response.license)}


  ## Description 

  ${response.projectDescription}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

          ${response.dependencies}

  ## Usage

  ${response.usage}

  ## License

  ${getLicenseBadge(response.license)}

  ## Contributing

  ${response.contributing}

  ## Tests

          ${response.test}

  ## Questions

  ${response.username}
  ${response.email}

`;
}

function getLicenseBadge(license) {
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
}

module.exports = generateMarkdown;
