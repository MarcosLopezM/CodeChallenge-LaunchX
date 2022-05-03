const StudentsController = require("./../lib/controllers/StudentsController");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (request, response) => {
    response.json({"message": "Hello and welcome student!"});
});

app.get("/v1/students", (request, response) => {
    const students = StudentsController.getStudents();

    response.json(students);
});

app.get("/v1/students/emails", (request, response) => {
    const studentsEmails = StudentsController.getEmailsOfCertificatedStudents();

    response.json(studentsEmails);
});

app.get("/v1/students/credits", (request, response) => {
    const studentsByCredits = StudentsController.getStudentsByCredits();

    response.json(studentsByCredits);
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);   
});