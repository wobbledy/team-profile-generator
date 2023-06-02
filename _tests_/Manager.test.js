// Require Manager class
const Manager = require("../lib/Manager");

// Begin Manager tests
describe("Manager", () => {

    // Test that it can set an office number
    it("Can set office number via constructor argument", () => {
        const testOfficeNumber = 101;
        const manager = new Manager("Zach", 100, "test@test.com", testOfficeNumber);
        expect(manager.officeNumber).toBe(testOfficeNumber);
    }
    );

    // Test that it can get an office number
    it("Can get office number via getOfficeNumber()", () => {
        const testOfficeNumber = 101;
        const manager = new Manager("Zach", 100, "test@test.com", testOfficeNumber);
        expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
    }
    );

    // Test that it can get a role
    it("Can get a role via getRole()", () => {
        const testRole = "Manager";
        const manager = new Manager("Zach", 100, "test@test.com", 101, testRole);
        expect(manager.getRole()).toBe(testRole);
    }
    );
}
);