// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(officeNumber, role){
        super(name, id, email, role);
        this.officeNumber = officeNumber;
        this.role = role;
        }
        getOfficeNumber() {
            return this.officeNumber;
        }
        getRole() {
            return this.role = "Manager";
        };
}

module.exports = Manager;