const Reader = require("./../../lib/utils/Reader");

class StudentsController {
    static getExplorers () {
        const students = Reader.readJsonFile("students.json");
        
        return students;
    }
}

module.exports = StudentsController;