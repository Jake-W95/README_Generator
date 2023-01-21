const inq = require('inquirer')

module.exports = [
    {
        name: 'projectName',
        message: 'Enter project name.',
    },
    {
        name: 'desription',
        message: 'Please write a bried description of your project.'
    },
    // { 
    //     name: 'contentsConfirm',
    //     message: 'Would you like to include a table of contents?',
    //     type: 'confirm'
    // },
    {
        name: 'installation',
        message: 'Please provide any necessary installation instructions'
    },
    {
        name: 'usage',
        message: 'Please provide any necessary usage information'
    },
    {
        name: 'license',
        message: 'Select lisence type:',
        type: 'list',
        choices: [
            'None', 
            'Academic Free License v3.0',
            'Apache license 2.0',
            'Artistic license 2.0',
            'Boost Software License 1.0',
            'MIT',
            'Other']
    },
    {
        name: 'ifOther',
        message: 'Please specify',
        when: ans => ans.license === 'Other'
    },
    {
        name: 'contribution',
        message: 'Please describe how others can contribute to your project'
    },
    {
        name: 'test',
        message: 'Please describe any tests for your project'
    }
    ];

