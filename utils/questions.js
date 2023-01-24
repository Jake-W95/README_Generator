const questions = [
    {
        name: 'projectName',
        message: 'Enter project name.',
    },
    {
        name: 'description',
        message: 'Please write a brief description of your project.'
    },
    {
        name: 'installation',
        message: 'Please provide any necessary installation instructions.'
    },
    {
        name: 'usage',
        message: 'Please provide any necessary usage information.'
    },
    {
        name: 'license',
        message: 'Select lisence type:',
        type: 'list',
        choices: [
            'None', 
            'MIT',
            'Apache license 2.0',
            'Boost Software License 1.0',
            'BSD 3-Clause License',
            'BSD 2-Clause License',
            'Creative Commons CC0',
            'Mozilla Public License 2.0',
            'Unlicense',
            'Other']
    },
    {
        name: 'ifOther',
        message: 'Please specify.',
        when: ans => ans.license === 'Other'
    },
    {
        name: 'contribution',
        message: 'Please describe how others can contribute to your project.'
    },
    {
        name: 'test',
        message: 'Please describe any tests for your project.'
    },
    {
        name: 'github',
        message: 'Enter your GitHub username.' 
    },
    {
        name: 'email',
        message: 'Enter your Email.'
    },
    {
        name: 'fileName',
        message: 'Enter desired filename (default = README   IT IS RECOMMENDED THAT THE FILENAME IS README)'
    }
]

module.exports = questions
 