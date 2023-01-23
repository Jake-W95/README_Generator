const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const questions = require('./utils/questions')
const generateMarkdown = require("./utils/generateMarkdown");
const { connect } = require("http2");
const { title } = require("process");




// array of questions for user


// function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile('README.md', generateMarkdown())
}

// function to initialize program
function init() {
     inquirer.prompt(questions)
    .then((res) => {
        // const data = {
        //     title: res.projectName,
        //     description: res.description,
        //     installation: res.installation,
        //     usage: res. usage,
        //     license: res.license,
        //     ifOther: res.ifOther,
        //     contribution: res.contribution,
        //     test: res.test
        // }
        // const title = res.projectName
        fs.writeFile('README.md', generateMarkdown(res), (error)=>{
            if (error) throw error;
            console.log('saved')
        })
    })
    // console.log(res.projectName)

    // console.log(title)
}
// function call to initialize program
init();


