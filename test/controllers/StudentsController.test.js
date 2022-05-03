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

describe("Requirement 3: Returning list of students with credits over 500", () => {
    test("Testing if the method returns at least one student", () => {
        const studentsByCredits = StudentsController.getStudentsByCredits();

        expect(studentsByCredits.length).toBeGreaterThanOrEqual(1);
        expect(studentsByCredits.length).toBe(27);
    });

    test("Testing attributes of elements of array", () => {
        const studentsByCredits = StudentsController.getStudentsByCredits();

        expect(studentsByCredits[0].credits).toBeGreaterThan(500);
        expect(studentsByCredits[0].enrollments).toContain("Visual Thinking Intermedio");
    });
});