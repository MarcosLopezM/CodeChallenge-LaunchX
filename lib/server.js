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

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);   
});