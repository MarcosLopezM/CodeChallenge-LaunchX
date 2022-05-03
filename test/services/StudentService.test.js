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