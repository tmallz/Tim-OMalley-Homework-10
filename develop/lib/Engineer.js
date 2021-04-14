const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;

    }

    getGitHub(){
        return this.gitHub;
    }

    getType(){
        return "Engineer";
    }
}

const engineer = new Engineer('tim', 1, 'anemail', 'tmallz');

console.log(engineer);

module.exports = Engineer;