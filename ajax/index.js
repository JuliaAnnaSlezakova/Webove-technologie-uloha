const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

const PORT = 1025;

app.use(cors());

app.use(express.static("public"));

app.get("/pocasie", (request, response) => {
    fs.readFile("pocasie.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("Zlyhanie pri nacitani suboru.", err);
            return;
        }
        response.send(jsonString);
    });
});

app.listen(PORT, () => {
    console.log(`Server ide na porte ${PORT}`);
});


// Prikazy pre terminal:
// cd .\ajax\
// node index.js