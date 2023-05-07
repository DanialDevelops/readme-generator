// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "please add a description",
  },
  {
    type: "list",
    choices: ['Apache', 'MIT', 'Mozilla'],
    name: "license",
    message: "What license would you like to use",
  },
  {
    type: "input",
    name: "installation",
    message: "please describe how a user would install your project",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide contribution guidelines for your project",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide test instructions for your project:"
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage instructions for your project:"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
]

// // TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  // TODO: Create a function to write README file
  .then((answers) => {
    const readMePageContent = generateMarkdown(answers);

    fs.writeFile("README1.md", readMePageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
}
// // Function call to initialize app
init();
