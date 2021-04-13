const Employee = require('./Employee');

class Intern extends Employee{
    constructor(type, name, id, email, school){
        super(type, name, id, email);
        this.school = school;

    }

    getSchool(){
        return this.school;
    }
}

const intern = new Intern('manager', 'tim', 1, 'anemail', 'Iowa');

console.log(intern);

module.exports = Intern;