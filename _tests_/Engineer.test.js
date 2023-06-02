// Import Engineer class
const Engineer = require("../lib/Engineer");

// Begins the Engineer tests
describe("Engineer", () => {

    // Test that it can set a github username
    it("Can set github username via constructor argument", () => {
        const testGithub = "githubuser";
        const engineer = new Engineer("Zach", 100, "test@test.com", testGithub);
        expect(engineer.github).toBe(testGithub);
    }
    );

    // Test that it can get a github username
    it("Can get github username via getGithub()", () => {
        const testGithub = "githubuser";
        const engineer = new Engineer("Zach", 100, "test@test.com", testGithub);
        expect(engineer.getGithub()).toBe(testGithub);
    }
    );

    // Test that it can get a role
    it("Can get a role via getRole()", () => {
        const testRole = "Engineer";
        const engineer = new Engineer("Zach", 100, "test@test.com", "githubuser", testRole);
        expect(engineer.getRole()).toBe(testRole);
    }
    );
});
    