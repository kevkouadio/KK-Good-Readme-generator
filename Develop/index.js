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
    name: "Email",
  },
]).then(function(data) {

  fs.appendFileSync("README.md",  (`# ${data.Title}`) + '\n', function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  });
  fs.appendFileSync("README.md",  (data.Description) + '\n' , function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  }); 
  fs.appendFileSync("README.md", ('## Installation')+ '\n' + (data.Installation), function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  });
  fs.appendFileSync("README.md", ('## Usage')+ '\n' + (data.Usage), function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  });  
  fs.appendFileSync("README.md", ('## Licence')+ '\n' + (data.Licence), function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  });
  fs.appendFileSync("README.md", ('## Contributing')+ '\n' + (data.Contributing), function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  }); 
  fs.appendFileSync("README.md", ('## Test')+ '\n' + (data.Test), function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  });
  fs.appendFileSync("README.md", ('## Questions')+ '\n' + ('Contact me ') + (data.Email), function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  });
})
