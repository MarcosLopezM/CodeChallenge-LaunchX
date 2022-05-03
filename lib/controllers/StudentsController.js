const Reader = require("./../../utils/Reader");

class StudentsController {
    static getExplorers () {
        const students = Reader.readJsonFile("students.json");
        
        return students;
    }
}

module.exports = StudentsController;