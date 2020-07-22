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
${getBadgeURL(data.license)}\n
**Author: ${data.user_name}**\n
**Table of Contents**
<!--ts-->
1. [ Project Description ](#desc)
2. [ Installation Instructions ](#inst)
3. [ Usage Information ](#use)
4. [ Contribution Guidelines ](#guide)
5. [ Test Instructions ](#test)
6. [ License Type ](#l-type)
7. [ Questions | Email me ](#email)
\n
<!--te-->
<a name="desc"></a>
## 1. Project Description\n
<a name="inst"></a>
**Installation Instructions** ${data.install_ins}\n
<a name="use"></a>
**Usage Information** ${data.usage_info}\n
<a name="guide"></a>
**Contribution Guidelines** ${data.cont_guide}\n
<a name="test"></a>
**Test Instructions** ${data.test_inst}\n
<a name="l-type"></a>
**License Type** ${data.license}\n
<a name="email"></a>
**Questions? Email me @** ${data.email}\n
`
    return readmeObj;
};
  
module.exports = generateMarkdown;
  

// needs to add TOC and questions