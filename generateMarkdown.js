function generateMarkdown(response) {
    return `
  
  # ${response.title}
  
  # Table of Content
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Licenses](#licenses)
  -[Contribution](#contribution)
  -[Test](#test)
  -[Questions](#questions)

  ## Description:
  ${response.description}
  
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
  ### User Name:
  ${response.username}

  ### Github Link:
  ${response.githublink}

  ### Email:
  ${response.email}
  
  `;
}

module.exports = generateMarkdown;
