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

    fs.writeFile("README.md", ("# " + response.title) +'\n \n' , function(err){

        if (err){
            console.log(err);
        }
            
    }),
    fs.appendFile("README.md", ("# Description" + '\n'+ response.description) + '\n \n', function(err){

        if (err){
            console.log(err);
        }
            
    }),
    fs.appendFile("README.md",("# Table of Contents" + '\n'+ response.table) + '\n\n', function(err){

        if (err){
            console.log(err);
        }
            
    }),
    fs.appendFile("README.md",("# Installation" +'\n'+ response.installation) + '\n\n', function(err){

        if (err){
            console.log(err);
        }
            
    }),
    fs.appendFile("README.md",("# Usuage" +'\n'+ response.usuage) + '\n\n', function(err){

        if (err){
            console.log(err);
        }
            
    }),
    fs.appendFile("README.md",("# Licensing" + '\n'+ response.license) + '\n\n', function(err){

        if (err){
            console.log(err);
        }
            
    }),
    fs.appendFile("README.md",("# Contributors" + '\n'+ response.contributing) + '\n\n', function(err){

        if (err){
            console.log(err);
        }
            
    }),
    fs.appendFile("README.md",("# Tests" + '\n'+ response.test) + '\n\n', function(err){

        if (err){
            console.log(err);
        }
            
    }),
    fs.appendFile("README.md",("# GitHub Profile" + '\n'+ response.profile) + '\n\n', function(err){

        if (err){
            console.log(err);
        }
            
    }),
    fs.appendFile("README.md",("# GitHub Email" + '\n'+ response.email) + '\n\n', function(err){

        if (err){
            console.log(err);
        }
            
    });
});

