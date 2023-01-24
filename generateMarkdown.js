function generateMarkdown(response) {
    return `
  
  # ${response.title}
  
  ## Description:
  ${response.description}


  # Table of Content
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[licenses](#licenses)
  -[contribution](#contribution)
  -[test](#test)
  -[questions](#questions)
  
  ## Installation:
  ${response.installation}
 
  ## Usage:
  ${response.usage}
  
  ## Licenses:
  ${response.licenses}
  
  ## Contribution:
  ${response.contribution}
  
  ## Test:
  ${response.test}

  ## Questions:
  ### username:
  ${response.username}

  ### email:
  ${response.email}
  
  `;
}

module.exports = generateMarkdown;
