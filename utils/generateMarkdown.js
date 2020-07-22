// function to generate markdown for README
const badges = {
'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
'Apache': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
'GPLv2': '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
}

function getBadgeURL(input) {
    for (const badge in badges) {
        if (badge === input) {
            return badges[badge]
        }
    }
}
function generateMarkdown(data) {
    console.log(data)
    let readmeObj = 
`**Project Name: ${data.project_title}**\n
${getBadgeURL(data.license)}
**Author: ${data.user_name}**\n
**Table of Contents**
<!--ts-->
1. Project Description (#project-description)
2. Installation Instructions (#installation-instructions)
3. Usage Information (#usage-information)
4. Contribution Guidelines
5. Test Instructions
6. License Type
7. Questions | Email me\n
<!--te-->
**Project Description** ${data.description}\n
**Installation Instructions** ${data.install_ins}\n
**Usage Information** ${data.usage_info}\n
**Contribution Guidelines** ${data.cont_guide}\n
**Test Instructions** ${data.test_inst}\n
**License Type** ${data.license}\n
**Questions? Email me @** ${data.email}\n
`
    return readmeObj;
};
  
module.exports = generateMarkdown;
  

// needs to add TOC and questions