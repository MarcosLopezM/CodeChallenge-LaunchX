const Reader = require("../utils/reader");

class StudentsController {
    static getStudents () {
        const students = Reader.readJsonFile("students.json");
        
        return students;
    }
}

module.exports = StudentsController;