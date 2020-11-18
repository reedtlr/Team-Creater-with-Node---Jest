// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(role, school){
        super(name, id, email, role);
        this.school = school;
        this.role = role;
        }
        getSchool() {
            return this.school;
        }
        getRole() {
            return this.role = "Intern";
        }
}

module.exports = Intern;