// function to generate markdown for README
function generateMarkdown(data) {
    console.log(data)
    let readmeObj = 
`**Project Name:** ${data.project_title}\n
##Author: ${data.user_name}\n
##Table of Contents
1. Project Description (#project-description)
2. Installation Instructions
3. Usage Information (#usage-information)
4. Contribution Guidelines
5. Test Instructions
6. License Type
7. Questions | Email me
###Project Description: ${data.description}\n
###Installation Instructions: ${data.install_ins}\n
###Usage Information: ${data.usage_info}\n
###Contribution Guidelines: ${data.cont_guide}\n
###Test Instructions: ${data.test_inst}\n
###License Type: ${data.license}\n
###Questions? Email me @: ${data.email}\n
`
    return readmeObj;
};
  
module.exports = generateMarkdown;
  

// needs to add TOC and questions