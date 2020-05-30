const fs = require("fs");
const inquirer = require("inquirer");
const axios = require ("axios");

//prompts user for answers to questions 
inquirer
.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your project description?",
        name: "description"    
    },
    {
        type: "input",
        message: "Do you have a table of contents?",
        name: "table"
    },
    {
        type: "input",
        message: "Do you have any installation requirements?",
        name: "installation"
    
    },
    {
        type: "input",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        name: "usuage"
    
    },
    {
        type: "input",
        message: "How others can contribute to your project?",
        name: "contributing"
        
    
    },
    {
        type: "input",
        message: "What kind of licensing is required for this project?",
        name: "license",
        choices: ["Y", "N"]
    
    },
    {
        type: "input",
        message: "What are the tests for the project?",
        name: "tests"
    
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "profile"
    },
    {
        type: "input",
        message: "What is your GitHub email?",
        name: "email"
            validate: function(input){
                if (input == ""){
                    return "This is not a valid username."
                } else{
                    return true;
                }
            }
    
    }
]).then(function(response){


    let stream =
    `# ${response.title}
    
    ## Description ${response.description} 
    ## Table of Contents 
        \n1. 
        \n2. 
        \n3.
        \n4. 
        \n5.
        \n6. 
        \n7.

         
    ## Installation ${response.installation}  
    ## Usuage ${response.usuage}
    ## Licensing ${response.license}
        <img src='https://img.shields.io/badge/License-${data.license}-blue' alt='badge'>

    ## Contributors ${response.contributing}
    ## Tests ${response.tests}
    ## Questions 
        If you have any questions about this project, contact me at: 
        ${response.questions} 
    
    const queryUrl = `https://api.github.com/users/${data.githubUsername}`;

    axios.get(queryUrl).then(function(res){
        const user = response.data;
        const githubProfile = `<a href='${user.html_url}'>Github Profile: ${user.login}</a>
        <img src='${user.avatar_url}' alt='Github profile picture'>`

        fs.writeFile("newREADME.md", githubProfile, function(err){
            if (err){
                throw err;
            }
            console.log(`saved ${githubProfile} repos`);
        });
    });
});

