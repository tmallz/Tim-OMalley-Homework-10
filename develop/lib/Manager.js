const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;

    }

    getOffice(){
        return this.officeNumber;
    }

    getType(){
        return "Manager";
    }
}

const manager = new Manager('tim', 1, 'anemail', 1);

console.log(manager);

module.exports = Manager;