function generateMarkdown(response) {
    return `
  
  # ${response.title}
  
  ##description:
  ${response.description}


  # Table of Content
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[licenses](#licenses)
  -[contribution](#contribution)
  -[test](#test)
  -[questions](#questions)
  
  ##installation:
  ${response.installation}
 
  ##usage:
  ${response.usage}
  
  ##licenses:
  ${response.licenses}
  
  ##contribution:
  ${response.contribution}
  
  ##test:
  ${response.test}

  ##questions:
  ###username:
  ${response.username}

  ###email:
  ${response.email}
  
  `;
}

module.exports = generateMarkdown;
