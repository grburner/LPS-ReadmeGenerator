// function to generate markdown for README
function generateMarkdown(data) {
    console.log(data)
    let readmeObj = 
    `__## Project Name: ${data.project_title}__\n\n
    ___\n\n
    ## Author: ${data.user_name} | Email me @: ${data.email}\n\n
    ___\n\n
    _## Project Description: ${data.description}_\n\n
    _## Installation Instructions: ${data.install_ins}_\n\n
    _## Usage Information: ${data.usage_info}_\n\n
    _## Contribution Guidelines: ${data.cont_guide}_\n\n
    _## Test Instructions: ${data.test_inst}_\n\n
    _## License Type: ${data.license}_\n\n
    _`
    console.log(readmeObj)
    return readmeObj;
};
  
module.exports = generateMarkdown;
  

