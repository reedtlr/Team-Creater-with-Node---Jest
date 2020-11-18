// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(officeNumber, getRole){
        this.officeNumber = officeNumber;
        this.getRole = getRole;
        }
        officeNumber();
        getRole();
}

const officeNumber = () => {
    inquirer.prompt ({
        name: 'officeNumber',
        message: `What is your manager's office phone number?`,
    })
    .then ( res => {
        return res.officeNumber
    })
}

const getRole = () => {
    return role = "Manager"
}