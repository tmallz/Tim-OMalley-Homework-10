const { isMainThread } = require("node:worker_threads");
const employee = require("../lib/employee");

describe("Employee", () => {
    it("Should instantiate a new Employee", () => {
        const newEmployee = new Employee();

        expext(typeof(newEmployee)).toBe("object");
    })
});

describe()