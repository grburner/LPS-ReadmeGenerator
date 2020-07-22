// function to generate markdown for README
function generateMarkdown(data) {
    console.log(data)
    let readmeObj = 
`#Project Name: ${data.project_title}
##Author: ${data.user_name}
##Table of Contents
1. Project Description (#project-description)
2. Installation Instructions
3. Usage Information (#usage-information)
4. Contribution Guidelines
5. Test Instructions
6. License Type
7. Questions | Email me
###Project Description: ${data.description}
###Installation Instructions: ${data.install_ins}
###Usage Information: ${data.usage_info}
###Contribution Guidelines: ${data.cont_guide}
###Test Instructions: ${data.test_inst}
###License Type: ${data.license}
###Questions? Email me @: ${data.email}
`
    return readmeObj;
};
  
module.exports = generateMarkdown;
  

// needs to add TOC and questions