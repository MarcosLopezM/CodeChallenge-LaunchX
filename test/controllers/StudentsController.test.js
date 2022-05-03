const StudentsController = require("./../../lib/controllers/StudentsController");

describe("Requirement 1: Returning list of students with all its attributes", () => {
    test("Testing if the methods returns an array", () => {
        const students = StudentsController.getStudents();

        expect(typeof students).toMatch(/object/);
    });

    test("Testing if the method returns at least one student and if the students has all its attributes", () => {
        const students = StudentsController.getStudents();

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

describe("Requirement 2: Returning list of emails of certificated students", () => {
    test("Testing if at least one student is certificated", () => {
        const students = StudentsController.getEmailsOfCertificatedStudents();

        expect(students.length).toBeGreaterThanOrEqual(1);
        expect(students).not.toBeUndefined();
    });

    test("Testing if the method returns an email", () => {
        const students = StudentsController.getEmailsOfCertificatedStudents();

        expect(students[0]).toMatch(/Todd@visualpartnership.xyz/);
    });
});