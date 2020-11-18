// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(name, id, email){
        super(name,id,email);
        this.name = name;
        this.id = id;
        this.email = email;
        }
        getGithub() {
            return this.github;
        }
        getRole() {
            return this.role = "Engineer";
        }
}

module.exports = Engineer;