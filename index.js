const fs = require("fs");
// const path = require('path');
const inquirer = require('inquirer');
const questions = require('./utils/questions')
const generateMarkdown = require('./utils/generateMarkdown');
// const licenseBadge = require('./utils/licenseBadge')





// array of questions for user


// function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile('README.md', generateMarkdown())
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((res) => {
            
            function fileName(res) {
                if (res.fileName === '') {
                    return 'README.md'
                } else {
                    return res.fileName + '.md'
                }
            }



            fs.writeFile(fileName(res), generateMarkdown(res), (error) => {
                if (error) throw error;
                console.log('File Written');
            })
        })

}
// function call to initialize program
init();


