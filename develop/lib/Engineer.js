const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(type, name, id, email, gitHub){
        super(type, name, id, email);
        this.gitHub = gitHub;

    }

    getGitHub(){
        return this.gitHub;
    }
}

const engineer = new Engineer('manager', 'tim', 1, 'anemail', 'tmallz');

console.log(engineer);

module.exports = Engineer;