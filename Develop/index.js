var inquirer = require("inquirer");
var fs = require("fs");
//variable to store table of content
var tableOfContents = `* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Test](#Test)
* [Questions](#Questions)`
                        

//if statement to delete previous created readme file
var filePath = "README.md"

if (fs.existsSync(filePath)) {
  fs.unlinkSync(filePath);
};
//prompt questions
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
    type: "input",
    message: "What does the user need to know about contributing to this repo?",
    name: "Contributing",
  },
  {
    type: "list",
    message: "Select a License!",
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
    message: "What does the user need to run a test?",
    name: "Test",
  },
  {
    type: "input",
    message: "What is your email address?",
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
  fs.appendFileSync("README.md", ('## Description')+ '\n' + (data.Description) + '\n' , function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  }); 
  fs.appendFileSync("README.md", ('## Table of contents')+ '\n' + (tableOfContents) +'\n', function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  });
  fs.appendFileSync("README.md", ('## Installation')+ '\n' + (data.Installation) +'\n', function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  });

  fs.appendFileSync("README.md", ('## Usage')+ '\n' + (data.Usage) +'\n', function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  });  
  fs.appendFileSync("README.md", ('## Licence')+ '\n' + (data.License) +'\n', function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  });
  fs.appendFileSync("README.md", ('## Contributing')+ '\n' + (data.Contributing) +'\n', function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  }); 
  fs.appendFileSync("README.md", ('## Test')+ '\n' + (data.Test) +'\n', function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  });
  fs.appendFileSync("README.md", ('## Questions')+ '\n' + ('Contact me: ') + (data.Email), function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Success!");
    }
  });
  console.log("README file created!");
})
