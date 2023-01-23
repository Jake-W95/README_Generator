
// function to generate markdown for README
function generateMarkdown(res) {
  
  return `
  # ${res.projectName}
  > ## ${res.description}
  ***

  - [Installation](#${res.installation})
  - [Usage](#${res.usage})
  - [How To Contribute](#${res.contribution})
  - [Tests](#${res.test})
  - [License](#${printLicense(res)})
  
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

  This project is covered under the following lisence: **${printLicense(res)}**       


 `;
}

function printLicense(res) {
  if (res.license !== 'Other') {
    return res.license
  } else {
    return res.ifOther
  }

}

module.exports = generateMarkdown;
