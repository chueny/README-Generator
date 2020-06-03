const fs = require("fs");
const inquirer = require("inquirer");
const axios = require ("axios");

inquirer
.prompt([
    // {
    //     type: "input",
    //     message: "What is the title of your project?",
    //     name: "title"
    // },
    // {
    //     type: "input",
    //     message: "What is your project description?",
    //     name: "description"
    // },
    // // {
    // //     type: "input",
    // //     message: "Do you have a table of contents?",
    // //     name: "table"
    // // },
    // {
    //     type: "input",
    //     message:"What are the installation requirements?",
    //     name: "installation"
    //     },
    // {
    //     type: "input",
    //     message: "Provide instructions and examples for use. Include screenshots as needed.",
    //     name: "usage"
    //     },
    // {
    //     type: "confirm",
    //     message: "Is there any licensing required for this project? Note: You  must select Y for a badge.",
    //     name: "license"
    
    // },
    // {
    //     type: "input",
    //     message: "What guidelines exist on how others can contribute to your project?",
    //     name: "contributing"
    
    // },
    // {
    //     type: "input",
    //     message: "Do you have any tests for this project?",
    //     name: "tests"
    
    // },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your GitHub email?",
        name: "email"
    
    }
]).then(function(data){

    let stream =fs.createWriteStream("newREADME.md");

    // stream.write("# " + data.title +'\n \n'); 
    // stream.write("# Description" + '\n'+ data.description + '\n \n'); 
    // // stream.write("# Table of Contents" + '\n'+ data.table + '\n\n'); 
    // stream.write("# Installation" +'\n'+ data.installation+ '\n\n'); 
    // stream.write("# Usuage" +'\n'+ data.usage + '\n\n'); 
    // //stream.write("# Licensing" + '\n'+ data.license + '\n\n <img src="https://img.shields.io/badge/License-${data.license}-blue" alt="badge">\n\n');
    // stream.write("# Licensing" + '\n');
    // console.log("data.license value: " + data.license);
    //     if (data.license === true){
    //         console.log("in licencinsg code");
    //         stream.write("<img src=\""+ 'https://img.shields.io/badge/License-${data.license}-blue\"' +" alt=badge>\n\n");
    //     }

    // stream.write("# Contributors" + '\n'+ data.contributing + '\n\n');
    // stream.write("# Tests" + '\n'+ data.tests + '\n\n'); 

        // github username and profile
        
        const queryUrl = `https://api.github.com/users/${data.username}`;
        //const queryUrl = 'https://api.github.com/user/repos';
        console.log("queryURL: " + queryUrl);
        axios
        .get(queryUrl)
        .then(function(response) {

            // create new user and profile
            const user = response.data;
            console.log("user HTML URL: " + user.html_url);
            const githubProfile = "<a href=\"" +user.html_url+ "\"> Github Profile: " + user.login + "</a>"+ "\n\n" + "<img src=\"" + user.avatar_url + "\" alt=Github profile picture width=150>";
            console.log("githubProfile: " + githubProfile);
            console.log("Email: " + user.email);
            // append profile 
            stream.write('# Questions' + '\n\n\n If you have any questions about this age, contact me here:'+ githubProfile); 
            
            //append email
            if (user.email !== null) {
                stream.write("Email: " +user.email);
            };
            stream.end();
        });
    
        
}).catch(function(error){
    console.log("An error occured:", error);
});
