const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role){
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
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