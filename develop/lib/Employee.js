//Defines the Employee class
class Employee {
    constructor(type, name, id, email){
        this.type = type;
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getType(){
        return this.type;
    }

    getName(){
        return this.name;
    }

    getID(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

}

// const employee = new Employee('manager', 'tim', 1, 'spam@email.com');

// employee.printInfo();

// console.log(employee);

//Exports the Employee class 
module.exports = Employee;