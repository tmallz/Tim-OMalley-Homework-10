//require the employee file 
const Manager = require("../lib/Manager");

test("Can create a new Manager", () => {
    const newEmp = new Manager();
    expect(typeof(newEmp)).toBe("object");
})

test("Name can be assigned through constructor", () => {
    const name = "Atticus";
    const newEmp = new Manager(name);
    expect(newEmp.name).toBe(name);
})

test("Name can be assigned through constructor", () => {
    const id = 5;
    const newEmp = new Manager("Name", id);
    expect(newEmp.id).toBe(id);
})

test("Email can be assigned through constructor", () =>{
    const email = "fake@email.com";
    const newEmp = new Manager("Name", "ID", email);
    expect(newEmp.email).toBe(email);
})

test("Github can be assigned through constructor", () =>{
    const officeNumber = 1;
    const newEmp = new Manager("Name", "ID", "email", officeNumber);
    expect(newEmp.officeNumber).toBe(officeNumber);
})

test("Can get name from getName()", () => {
    const name = "Atticus";
    const newEmp = new Manager(name);
    expect(newEmp.getName()).toBe(name);
})

test("Can get email from getID()", () => {
    const id = 5;
    const newEmp = new Manager("Name", id);
    expect(newEmp.getID()).toBe(id);
})

test("Can get email from getEmail()", () =>{
    const email = "fake@email.com";
    const newEmp = new Manager("Name", "ID", email);
    expect(newEmp.getEmail()).toBe(email);
})

test("Can get gitHub from getSchool", () => {
    const officeNumber = "Iowa"
    const newEmp = new Manager("Name", "ID", "Email", officeNumber);
    expect(newEmp.getOffice()).toBe(officeNumber);
})

test("Can get role from getType()", () =>{
    const role = "Manager";
    const newEmp = new Manager("Name", "ID", "email", role);
    expect(newEmp.getType()).toBe(role);
})