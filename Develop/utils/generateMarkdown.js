// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.projectName}

  ## Description 

  ${response.projectDescription}

  ## Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation

  ${response.dependencies}

  ## Usage

  ${response.userQuestions}

  ## License

  ${response.license}

  ## Contributing

  ${response.username}

  ## Tests

  ${response.test}

  ## Questions

  ${response.userRepoRequest}

`;
}

module.exports = generateMarkdown;
