// Require Intern class
const Intern = require("../lib/Intern");

// Begin Intern tests
describe("Intern", () => {
    
        // Test that it can set a school
        it("Can set school via constructor argument", () => {
            const testSchool = "UofA";
            const intern = new Intern("Zach", 100, "test@test.com", testSchool);
            expect(intern.school).toBe(testSchool);
        }
        );

        // Test that it can get a school
        it("Can get school via getSchool()", () => {
            const testSchool = "UofA";
            const intern = new Intern("Zach", 100, "test@test.com", testSchool);
            expect(intern.getSchool()).toBe(testSchool);
        }
        );

        // Test that it can get a role
        it("Can get a role via getRole()", () => {
            const testRole = "Intern";
            const intern = new Intern("Zach", 100, "test@test.com", "UofA", testRole);
            expect(intern.getRole()).toBe(testRole);
        }
        );
    }
);

