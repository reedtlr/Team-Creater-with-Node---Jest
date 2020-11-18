// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(role, school){
        this.school = school;
        this.role = role;
        }
        getSchool();
        getRole();
}

const getSchool = () => {
    inquirer.prompt ({
        name: 'school',
        message: `What school does the intern attend?`,
    })
    .then ( res => {
        return res.school
    })
}

const getRole = () => {
    return role = "Intern"
}