const Employee = require('./Employee');

class Manager extends Employee{
    constructor(type, name, id, email, officeNumber){
        super(type, name, id, email);
        this.officeNumber = officeNumber;

    }

    getOffice(){
        return this.officeNumber;
    }
}

const manager = new Manager('manager', 'tim', 1, 'anemail', 1);

console.log(manager);

module.exports = Manager;