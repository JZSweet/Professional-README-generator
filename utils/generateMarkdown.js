// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "Apache 2.0") {
    return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else if (license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]";
  } else if (license === "None of above") {
    return " ";
  };

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "IBM") {
    return "(https://opensource.org/licenses/IPL-1.0)";
  } else if (license === "None of above") {
    return " ";
  };

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} /n
      # Repositories
      ${data.repositories} /n
      ## Description
      ${data.description} /n
      ## URL
      ${data.Url} /n
      ## language used
      ${data.language} /n
      ## Image
      ![Screenshot](${data.image}) /n
      ## Author
      ${data.author} /n
      ## Email 
      ${data.Email} /n
      ## GitHub
      ${data.GitHub} /n
      ## License
      This project is licensed under ${renderLicenseSection(data.license)}
     `;
};

module.exports = generateMarkdown;
