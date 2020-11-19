// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(name, id, email, school, role){
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
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