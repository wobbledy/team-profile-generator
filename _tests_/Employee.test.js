// Require the Employee class
const Employee = require("../lib/Employee");

describe("Employee", () => {

    // Test that it can instantiate a new Employee
    it("Can instantiate Employee instance", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    }

    );

    // Test that it can set a name
    it("Can set name via constructor arguments", () => {
        const name = "Zach";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    }
    );

    // Test that it can set an id
    it("Can set id via constructor argument", () => {
        const testId = 100;
        const employee = new Employee("Zach", testId);
        expect(employee.id).toBe(testId);
    }
    );

    // Test that it can set an email
    it("Can set email via constructor argument", () => {
        const testEmail = "test@test.com";
        const employee = new Employee("Zach", 100, testEmail);
        expect(employee.email).toBe(testEmail);
    }
    );

    // Test that it can get a name
    it("Can get name via getName()", () => {
        const testName = "Zach";
        const employee = new Employee(testName);
        expect(employee.getName()).toBe(testName);
    }
    );

    // Test that it can get an id
    it("Can get id via getId()", () => {
        const testId = 100;
        const employee = new Employee("Zach", testId);
        expect(employee.getId()).toBe(testId);
    }
    );

    // Test that it can get an email
    it("Can get email via getEmail()", () => {
        const testEmail = "test@test.com";
        const employee = new Employee("Zach", 100, testEmail);
        expect(employee.getEmail()).toBe(testEmail);
    }
    );

    // Test that it can get a role
    it("Can get a role via getRole()", () => {
        const testRole = "Employee";
        const employee = new Employee("Zach", 100, "test@test.com");
        expect(employee.getRole()).toBe(testRole);
    }
    );
});

