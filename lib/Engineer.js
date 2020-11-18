// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(role, github){
        this.github = github;
        this.role = role;
        }
        getGithub() {
            return this.github;
        }
        getRole() {
            return this.role = "Engineer";
        }
}

module.exports = Engineer;