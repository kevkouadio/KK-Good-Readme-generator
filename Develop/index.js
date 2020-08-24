var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    name: "Title",
    message: "What is your project's name?"
  },
  {
    type: "input",
    message: "Please write a short description of your project!",
    name: "Description",
  },
  {
    type: "input",
    message: "What are the installation requirements?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What does the user need to know about using this repo?",
    name: "Usage",
  },
  {
    type: "list",
    message: "What Licence would you like?",
    name: "License",
    choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public 2.0",
        "MIT",
        "Boost Software 1.0",
        "The Unlicense"
      ]
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to this repo?",
    name: "Contributing",
  },
  {
    type: "input",
    message: "What does the user need to run a test?",
    name: "Test",
  },
  {
    type: "input",
    message: "Can you leave your email address for allowing users to contact you?",
    name: "Questions",
  },
]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
