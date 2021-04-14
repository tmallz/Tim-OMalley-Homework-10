//require the employee file 
const Engineer = require("../lib/Engineer");

test("Can create a new Engineer", () => {
    const newEmp = new Engineer();
    expect(typeof(newEmp)).toBe("object");
})

test("Name can be assigned through constructor", () => {
    const name = "Atticus";
    const newEmp = new Engineer(name);
    expect(newEmp.name).toBe(name);
})

test("Name can be assigned through constructor", () => {
    const id = 5;
    const newEmp = new Engineer("Name", id);
    expect(newEmp.id).toBe(id);
})

test("Email can be assigned through constructor", () =>{
    const email = "fake@email.com";
    const newEmp = new Engineer("Name", "ID", email);
    expect(newEmp.email).toBe(email);
})

test("Github can be assigned through constructor", () =>{
    const gitHub = "testGit";
    const newEmp = new Engineer("Name", "ID", "email", gitHub);
    expect(newEmp.gitHub).toBe(gitHub);
})

test("Can get name from getName()", () => {
    const name = "Atticus";
    const newEmp = new Engineer(name);
    expect(newEmp.getName()).toBe(name);
})

test("Can get email from getID()", () => {
    const id = 5;
    const newEmp = new Engineer("Name", id);
    expect(newEmp.getID()).toBe(id);
})

test("Can get email from getEmail()", () =>{
    const email = "fake@email.com";
    const newEmp = new Engineer("Name", "ID", email);
    expect(newEmp.getEmail()).toBe(email);
})

test("Can get gitHub from getGitHub", () => {
    const git = "github"
    const newEmp = new Engineer("Name", "ID", "Email", git);
    expect(newEmp.getGitHub()).toBe(git);
})

test("Can get role from getType()", () =>{
    const role = "Engineer";
    const newEmp = new Engineer("Name", "ID", "email", role);
    expect(newEmp.getType()).toBe(role);
})

