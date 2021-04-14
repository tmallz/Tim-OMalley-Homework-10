const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;

    }

    getSchool(){
        return this.school;
    }

    getType(){
        return "Intern";
    }
}

const intern = new Intern('tim', 1, 'anemail', 'Iowa');

console.log(intern);

module.exports = Intern;