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

// begins by asking for inifmation about the manager for the team
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
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employee.push(manager);
            return nextChoice();
        });
    }
}

// prompts the user to select the rest of the team members and create them
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
            console.log(employee);
            // let result = () => {render(employee)};
            // result(employee);
            return writeFile(render(employee));
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
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
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
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employee.push(intern);
        return nextChoice();
    });
}

// write the file to 'output' folder
const writeFile = (data) => {
    console.log(data);
    fs.writeFile(outputPath, data, (err) => {
        if (err) throw err;
        console.log('file created');
    });
}

var init = new CreatePromptModule();

// starts application 
init.start();
