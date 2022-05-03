const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (request, response) => {
    response.json({"message": "Hello and welcome student!"});
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);   
});