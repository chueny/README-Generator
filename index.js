let fs = require("fs");
let inquirer = require("inquirer");

inquirer
.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description of your project.",
        name: "description"
    
    },
    {
        type: "input",
        message: "Do you have a table of contents?",
        name: "table"
    },
    {
        type: "input",
        message: "What are the installation requirements?",
        name: "installation"
    
    },
    {
        type: "input",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        name: "usuage"
    
    },
    {
        type: "input",
        message: "What kind of licensing is required for this project?",
        name: "license"
    
    },
    {
        type: "input",
        message: "What guidelines exist on how others can contribute to your project?",
        name: "contributing"
    
    },
    {
        type: "input",
        message: "What are the tests for the project?",
        name: "tests"
    
    },
    {
        type: "input",
        message: "What is your Github profile picture?",
        name: "profile"
    },
    {
        type: "input",
        message: "What is your Github email?",
        name: "email"
    
    }
]).then(function(response){

    // let stream =fs.createWriteStream("README.md", {flags:'a'});

    let stream =fs.createWriteStream("README.md");

    stream.write("# " + response.title +'\n \n'); 
    stream.write("# Description" + '\n'+ response.description + '\n \n'); 
    stream.write("# Table of Contents" + '\n'+ response.table + '\n\n'); 
    stream.write("# Installation" +'\n'+ response.installation+ '\n\n'); 
    stream.write("# Usuage" +'\n'+ response.usuage + '\n\n'); 
    stream.write("# Licensing" + '\n'+ response.license + '\n\n');
    stream.write("# Contributors" + '\n'+ response.contributing + '\n\n');
    stream.write("# Tests" + '\n'+ response.tests + '\n\n'); 
    stream.write("# GitHub Profile" + '\n'+ response.profile + '\n\n');
    stream.write("# GitHub Email" + '\n'+ response.email + '\n\n'); 
    stream.end();
});

