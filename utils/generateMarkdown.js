// function to generate markdown for README
const badges = {
'MIT': {
    'badge': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'txt': 'license/mit.txt'
},
'Apache': {
    'badge': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'txt': 'license/apache.txt'
},
'GPLv2': {
    'badge': '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    'txt': 'license/GPLv2.txt'
}}

function getLicenseInfo(input, option) {
    for (const license in badges) {
        console.log('license ' + license)
        console.log('input ' + input)
        if (license === input) {
            console.log(badges[license]);
            return badges[license][option]
        }
    }
}
function generateMarkdown(data) {
    console.log(data)
    let readmeObj = 
`# Project Name: ${data.project_title}\n\n
${getLicenseInfo(data.license, 'badge')}\n
## Author: ${data.user_name}\n
## Table of Contents
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
${data.description}
<a name="inst"></a>
## 2. Installation Instructions\n
 ${data.install_ins}\n
<a name="use"></a>
## 3. Usage Information\n
 ${data.usage_info}\n
<a name="guide"></a>
## 4. Contribution Guidelines\n
 ${data.cont_guide}\n
<a name="test"></a>
## 5. Test Instructions\n
 ${data.test_inst}\n
<a name="l-type"></a>
## 6. License Type\n
 Licensed under the [${data.license}](${getLicenseInfo(data.license, 'txt')}) license.\n
<a name="email"></a>
## 7. Questions? Email me @:\n
[${data.email}](mailto:${data.email}) or find me on [GitHub](https://github.com/${data.user_name})
`
    return readmeObj;
};
  
module.exports = generateMarkdown;
  

// needs to add TOC and questions