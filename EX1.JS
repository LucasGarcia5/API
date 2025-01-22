import express from 'express';

const app = express();

app.listen(3000, () =>{
    console.log("servidor rodando com sucesso na porta 3000")
});

// npm init -y
// npm install express