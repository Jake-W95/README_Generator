const fs = require("fs");
const inquirer = require('inquirer');
const questions = require('./utils/questions')
const generateMarkdown = require('./utils/generateMarkdown');

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


