const Reader = require("../utils/reader");
const StudentService = require("../services/StudentService");

class StudentsController {
    static getStudents () {
        const students = Reader.readJsonFile("students.json");
        
        return students;
    }

    static getEmailsOfCertificatedStudents () {
        const students = Reader.readJsonFile("students.json");
        const studentsEmails = StudentService.filterCertificatedStudents(students);

        return studentsEmails;
    }

    static getStudentsByCredits () {
        const students = Reader.readJsonFile("students.json");
        const studentsByCredits = StudentService.filterStudentsByCredits(students);

        return studentsByCredits;
    }
}

module.exports = StudentsController;