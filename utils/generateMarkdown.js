
// function to generate markdown for README
function generateMarkdown(res) {
  // console.log(results.projectName)
  return `
  # ${res.projectName}
  ## ${res.description}
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
  ## How To Contribute
  ${res.contribution}
  ***
  ## Tests
  ${res.test}
  ${printLicense(res)}
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
