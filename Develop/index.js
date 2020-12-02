// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
// const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: "What is your project's name?",
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project',
      name: 'projectDescription',
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None'],
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'dependencies',
    },
    {
      type: 'input',
      message: 'What command should be run to run tests?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What does the user need to about contributing to the repo?',
      name: 'contributing',
    },
  ])
  .then((response) => {
    // const textToWrite = `
    // ## Github username: ${response.username}
    // Email address: ${response.email}
    // ## Project name: ${response.projectName}
    // ## Project description: ${response.projectDescription}
    // ## License: This project is licensed under the ${response.license} license
    // ## Installation: to install neccessary dependencies, run the following command: ${response.dependencies}
    // ## Tests: To run tests, run the following command: ${response.test}
    // ## Questions: ${response.usage}
    // ## Contributions: ${response.contributing}`;

    const readMeContent = generateMarkdown(response);

    fs.writeFile('README.md', readMeContent, () => {});
    fs.writeFile(`README.md`, generateMarkdown(response), (err) =>
      err ? console.log(err) : console.log('File saved successfully')
    );
  });

// const questions = [];

// // function to write README file
// function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();
