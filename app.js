const express = require("express");

const app = express();

app.get("/word", (request, response) => {
    response.sendFile(__dirname, "index.html");
})


app.listen(3000, () => {
    console.log("Server Running port 3000");
    console.log("http://localhost:3000/word");
});