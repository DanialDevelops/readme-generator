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
]