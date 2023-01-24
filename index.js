const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// read me file questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? ',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter your project description ',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please enter your project description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter project installation details ',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please enter project installation details');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter project usage ',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please enter project usage');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide guidelines for contributing. ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter project tests ',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please enter project tests');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username? ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }

];

// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// fetch github data and get html_url for the user. 
const getGithubLink = data => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.github.com/users/${data.username}`)
            .then(questions => {
                console.log(questions.data);
                data.githublink = questions.data.html_url;
                resolve({
                    data: data
                });
                reject({
                    data: ''
                });
            });
    });
}

// function to prompt questions and store user inputs
const init = () => {

    return inquirer.prompt(questions)
        .then(readmeData => {
            return readmeData;
        })
}

// Function call to initialize app
init()
    .then(data => {
        // fetch gitbub url
        return getGithubLink(data)
    })
    .then((data) => {
        // populate markdown
        console.log(data.data);
        return generateMarkdown(data.data);
    })
    .then(pageMD => {
        // write to generated-README.md file.
        return writeFile(pageMD);
    })
    .then(writeFileResponse => {
        // display file write success/failuer message
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });
