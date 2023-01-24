const badges = require('./licenseBadge')


// function to generate markdown for README
function generateMarkdown(res) {

  return `

  ${licenseBadge(res)}
  # ${res.projectName}
  > ## ${res.description}
  ***

  - [Installation](#installation)
  - [Usage](#usage)
  - [How To Contribute](#contribution)
  - [Tests](#test)
  - [License](#license)
  - [Questions](#questions)
  
  ***
  ## Installation:
  ${res.installation}
  ***
  ## Usage:
  ${res.usage}
  ***
  ## How To Contribute:
  ${res.contribution}
  ***
  ## Tests:
  ${res.test}:
  ***
  ## Questions:
  > View my[GitHub](https://github.com/${res.github} page )
  > Email me at: ${res.email}

  This project is covered under the following license: **${printLicense(res)}**       


 `;
}

function printLicense(res) {
  if (res.license !== 'Other') {
    return res.license
  } else {
    return res.ifOther
  }

}
function licenseBadge(res) {
  if (res.license === 'MIT') {
    return badges.MIT
  }
  if (res.license === 'Apache license 2.0') {
    return badges.Apache
  } 
  if (res.license === 'Boost Software License 1.0') {
    return badges.Boost
  }
  if (res.license === 'BSD 3-Clause License') {
    return badges.BSD_three_Clause_License
  }
  if (res.license === 'BSD 2-Clause License') {
    return badges.BSD_two_Clause_License
  }
  if (res.license === 'Creative Commons CC0') {
    return badges.CC0
  }
  if (res.license === 'Mozilla Public License 2.0') {
    return badges.MozillaPublicLicense
  }
  if (res.license === 'Unlicense') {
    return badges.Unlicense
  }
  if (res.license === 'None' || res.license === 'Other'){
    return ''
  }

  



}

module.exports = generateMarkdown;
