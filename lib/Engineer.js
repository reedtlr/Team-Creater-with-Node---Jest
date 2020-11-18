// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(role, github){
        this.github = github;
        this.role = role;
        }
        getGithub();
        getRole();
}

const getGithub = () => {
    inquirer.prompt ({
        name: 'github',
        message: `What is your engineer's GitHub username`,
    })
    .then ( res => {
        return res.github
    })
}

const getRole = () => {
    return role = "Engineer"
}

module.exports = Engineer;