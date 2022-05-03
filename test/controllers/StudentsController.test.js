const StudentsController = require("./../../lib/controllers/StudentsController");

describe("Requirement 1: Returning list of students with all its attributes", () => {
    test("Testing if the methods returns an array", () => {
        const students = StudentsController.getExplorers();

        expect(typeof students).toMatch(/object/);
    });

    test("Testing if the method returns at least one student and if the students has all its attributes", () => {
        const students = StudentsController.getExplorers();

        expect(students.length).toBeGreaterThanOrEqual(1);
        expect(students[0].id).not.toBeUndefined();
        expect(students[0].name).toMatch(/Warren/);
        expect(students[0].email).not.toBeUndefined();
        expect(students[0].credits).not.toBeUndefined();
        expect(students[0].enrollments).not.toBeUndefined();
        expect(students[0].previousCourses).not.toBeUndefined();
        expect(students[0].haveCertification).toBeTruthy();
    });
});