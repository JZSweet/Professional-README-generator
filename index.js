// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const {writeFile} = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of this project?",
    },
    {
        type: "input",
        name: "repositories",
        message: "What is the name of the repositories?",
    },
    {
        type: "input",
        name: "description",
        message: "description of this project.",
    },
    {
        type: "input",
        name: "Url",
        message: "The project URL.",
    },
    {
        type: "input",
        name: "language",
        message: "Which language were used?",
    },
    {
        type: "input",
        name: "image",
        message: "The project image URL.",
    },
    {
        type: "input",
        name: "author",
        message: "Who is the author of this project?",
    },
    {
        type: "input",
        name: "Email",
        message: "What is the author's email?",
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is the author's GitHub?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license were used for this project?",
        choices: ["MIT" , "Apache 2.0" , "IBM" , "None of above"],
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, "utf8", (err) => console.log("error in write file: ", err));
 }

// TODO: Create a function to initialize app
async function init() {
    const answer = await inquirer.prompt(questions);
    console.log("answers are: ", answer);
    const markdown = generateMarkdown(answer);
    console.log("generate Markdown are: ", markdown);
    writeToFile(answer.title + "ReadMe.md" , markdown);
 }

// Function call to initialize app
init();
