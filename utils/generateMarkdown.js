
// function to generate markdown for README
function generateMarkdown(res) {
  // console.log(results.projectName)
  return `
  # ${res.projectName}
  ## ${res.description}

  - [Installation](#${res.installation})


  ### Installation:
  ${res.installation}

  ### Usage:
  ${res.usage}

  
  ${printLicense(res)}
 `;
}

function printLicense(res){
  if(res.license !== 'Other'){
return res.license
  } else {
    return res.ifOther
  }

}

module.exports = generateMarkdown;
