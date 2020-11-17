const inquirer = require("inquirer");

// TODO: Write code to define and export the Employee class

const getName = () => {
    return inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?'
        },
    ])
}

const getId = () => {
    return inquirer
    .prompt ([
        {
            type: 'input',
            name: 'id',
            message: 'What is their id?'
        },
    ])
}

const getEmail = () => {
    return inquirer
    .prompt ([
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?'
        },
    ])
}

const getRole = () => {
    inquirer
    .prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What is their role?',
            choices: ["Manager", "Engineer", "Intern"], 
        },
    ])
    .then ((answer) => {

    })
}

class Employee {
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getName()
    getId()
    getEmail()
    getRole() // returns 'Employee'
}
