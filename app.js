import express from "express";

const app = express();

//permite o express entender .json
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});


// npm init -y 
// npm install express
// node app.js
// npx nodemon app.js