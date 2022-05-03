const StudentService = require("./../../lib/services/StudentService");

describe("Requirement 2: Get students' emails if they have a certification", () => {
    test("Testing if the method filterCertificatedStudents returns an object", () => {
        const students = require("./certificated_students.json");
        const result = StudentService.filterCertificatedStudents(students);

        expect(typeof result).toMatch(/object/);
    });

    test("Testing if the method filterCertificatedStudents returns an email of a student", () => {
        const students = require("./certificated_students.json");
        const result = StudentService.filterCertificatedStudents(students);

        expect(result[0]).toMatch(/Todd@visualpartnership.xyz/);
    });

    test("Testing other properties of the method filterCertificatedStudents", () => {
        const students = require("./certificated_students.json");
        const result = StudentService.filterCertificatedStudents(students);

        expect(result.length).toBe(5);
    });
});

describe("Requirement 3: Get students with over 500 credits", () => {
    test("Testing if there is at least one student with over 500 credits", () => {
        const students = require("./certificated_students.json");
        const result = StudentService.filterStudentsByCredits(students);

        expect(result.length).toBeGreaterThan(1);
    });

    test("Testing if attributes of elements of return object are correct", () => {
        const students = require("./certificated_students.json");
        const result = StudentService.filterStudentsByCredits(students);

        expect(result[0].name).toMatch(/Warren/);
        expect(result[0].email).toMatch(/Todd@visualpartnership.xyz/);
        expect(result[0].credits).toBeGreaterThan(500);
        expect(result[0].id).not.toBeNull();
    });
});