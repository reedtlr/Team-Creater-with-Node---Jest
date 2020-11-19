const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const prompt = inquirer.createPromptModule();

const employee = []

// questions for user
const questions = [
    {
        name: 'name',
        message: `What is their name?`,
      },
      {
          name: 'id',
          message: `What is their id?`,
      },
      {
          name: 'email',
          message: `What is their email?`,
      },
      {
          name: 'officeNumber',
          message: `What is their office number?`,
      },
      {
        name: 'gitub',
        message: `What is their GitHub user name?`,
    },
    {
        name: 'school',
        message: `What school to they attend?`,
    },
  ];



class CreatePromptModule {
    constructor() {
        this.role = 'Employee'
    }
    start() {
        return this.initialScreen();
    }

    initialScreen() {
        console.log("please build your team.");
        return inquirer
        .prompt ([{
                name: "name",
                message: `What is your manager's name?`,
            },
            {
                name: "id",
                message: `What is your manager's id?`,
            },
            {
                name: "email",
                message: `What is your maanger's email`,
            },
            {
                name: "officeNumber",
                message: "what is your manager's office number?",
            }])
            .then((answers) => {
            const manager = new Manager(answers);
            employee.push(manager);
            return nextChoice();
        });
    }
    
}

const nextChoice = () => {
    return inquirer
    .prompt ({
        type: "list",
        name: "roleChoice",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", `I don't want to add any more team members`]
    })
    .then ((results) => {
        if (results.roleChoice == "Engineer") {
           return runEngineer();
        } else if (results.roleChoice == "Intern") {
           return runIntern();
        } else {
            console.log(employee)
            return this.render(employee);
        }
    })
}

const runEngineer = () => {
    return inquirer
        .prompt([{
            name: "name",
            message: `What is your engineer's name?`,
        },
        {
            name: "id",
            message: `What is your engineer's id?`,
        },
        {
            name: "email",
            message: `What is your engineer's email`,
        },
        {
            name: "github",
            message: "what is your engineer's GitHub user name?",
        }])
        .then((answers) => {
            const engineer = new Engineer(answers);
            employee.push(engineer);
            return nextChoice();
        });
}

const  runIntern = () => {
    return inquirer
    .prompt ([{
            name: "name",
            message: `What is your intern's name?`,
        },
        {
            name: "id",
            message: `What is your intern's id?`,
        },
        {
            name: "email",
            message: `What is your intern's email`,
        },
        {
            name: "school",
            message: "what school does your intern attend?",
        }])
        .then((answers) => {
        const intern = new Intern(answers);
        employee.push(intern);
        return nextChoice();
    });
}

var init = new CreatePromptModule();

init.start();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
