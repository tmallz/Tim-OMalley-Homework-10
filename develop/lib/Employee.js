//Defines the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
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

    getType(){
        return "Employee";
    }

}

// const employee = new Employee('manager', 'tim', 1, 'spam@email.com');

// employee.printInfo();

// console.log(employee);

//Exports the Employee class 
module.exports = Employee;