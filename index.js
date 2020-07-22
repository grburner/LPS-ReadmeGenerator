'use strict';
let inquirer = require('inquirer');
let markdownFunc = require('./utils/generateMarkdown')
let fs = require('fs');

let questions = [
    {
    type: 'input',
    name: 'project_title',
    message: "Enter your project title:",
    },
    {
    type: 'input',
    name: 'description',
    message: "Project description:",
    },
    {
    type: 'input',
    name: 'install_ins',
    message: "Installation instructions:",
    },
    {
    type: 'input',
    name: 'usage_info',
    message: "Usage informtion:",
    },
    {
    type: 'input',
    name: 'cont_guide',
    message: "Contribution guidelines:",
    },
    {
    type: 'input',
    name: 'test_inst',
    message: "Test instructions:",
    },
    {
    type: 'list',
    message: 'Select License Type',
    name: 'license',
    choices: [
      new inquirer.Separator(' = License Types = '),
      {
        name: 'MIT',
      },
      {
        name: 'Apache',
      },
      {
        name: 'GPLv2',
      }
    ]},
    {
        type: 'input',
        name: 'user_name',
        message: "GitHub Username:",
    },
    {
        type: 'input',
        name: 'email',
        message: "Contact Email:",
    },
];
    

inquirer.prompt(questions).then(answers => {
    return markdownFunc(answers)
}).then(data => {
    fs.writeFile('README.md', data, (err) => {
        if (err) throw err;
    })
}).then(data => {
    console.log("Complete!")
});