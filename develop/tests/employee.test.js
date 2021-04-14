//require the employee file 
const Employee = require("../lib/Employee");

test("Can create a new Employee", () => {
    const newEmp = new Employee();
    expect(typeof(newEmp)).toBe("object");
})

test("Name can be assigned through constructor", () => {
    const name = "Atticus";
    const newEmp = new Employee(name);
    expect(newEmp.name).toBe(name);
})

test("Name can be assigned through constructor", () => {
    const id = 5;
    const newEmp = new Employee("Name", id);
    expect(newEmp.id).toBe(id);
})

test("Email can be assigned through constructor", () =>{
    const email = "fake@email.com";
    const newEmp = new Employee("Name", "ID", email);
    expect(newEmp.email).toBe(email);
})

test("Can get name from getName()", () => {
    const name = "Atticus";
    const newEmp = new Employee(name);
    expect(newEmp.getName()).toBe(name);
})

test("Can get email from getID()", () => {
    const id = 5;
    const newEmp = new Employee("Name", id);
    expect(newEmp.getID()).toBe(id);
})

test("Can get email from getEmail()", () =>{
    const email = "fake@email.com";
    const newEmp = new Employee("Name", "ID", email);
    expect(newEmp.getEmail()).toBe(email);
})

test("Can get role from getType()", () =>{
    const role = "Employee";
    const newEmp = new Employee("Name", "ID", "email", "role");
    expect(newEmp.getType()).toBe(role);
})

