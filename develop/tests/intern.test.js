//require the employee file 
const Intern = require("../lib/Inetern");

test("Can create a new Intern", () => {
    const newEmp = new Intern();
    expect(typeof(newEmp)).toBe("object");
})

test("Name can be assigned through constructor", () => {
    const name = "Atticus";
    const newEmp = new Intern(name);
    expect(newEmp.name).toBe(name);
})

test("Name can be assigned through constructor", () => {
    const id = 5;
    const newEmp = new Intern("Name", id);
    expect(newEmp.id).toBe(id);
})

test("Email can be assigned through constructor", () =>{
    const email = "fake@email.com";
    const newEmp = new Intern("Name", "ID", email);
    expect(newEmp.email).toBe(email);
})

test("Github can be assigned through constructor", () =>{
    const school = "Iowa";
    const newEmp = new Intern("Name", "ID", "email", school);
    expect(newEmp.school).toBe(school);
})

test("Can get name from getName()", () => {
    const name = "Atticus";
    const newEmp = new Intern(name);
    expect(newEmp.getName()).toBe(name);
})

test("Can get email from getID()", () => {
    const id = 5;
    const newEmp = new Intern("Name", id);
    expect(newEmp.getID()).toBe(id);
})

test("Can get email from getEmail()", () =>{
    const email = "fake@email.com";
    const newEmp = new Intern("Name", "ID", email);
    expect(newEmp.getEmail()).toBe(email);
})

test("Can get gitHub from getSchool", () => {
    const school = "Iowa"
    const newEmp = new Intern("Name", "ID", "Email", school);
    expect(newEmp.getSchool()).toBe(school);
})

test("Can get role from getType()", () =>{
    const role = "Intern";
    const newEmp = new Intern("Name", "ID", "email", role);
    expect(newEmp.getType()).toBe(role);
})
