import express from "express";

import carroRoutes from "./routes/carroRoutes.js";

import usuarioRotes from "./routes/usuarioRoutes.js";

const app = express();

//permite o express entender .json
app.use(express.json());

//chama as rotas de carros
app.use("/carro", carroRoutes);

//chamar as rotas do usuario
app.use("/usuarios", usuarioRotes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

// npm init -y
// npm install express
// npm install jsonwebtoken
// npm install bcrypt
// node app.js
// npx nodemon app.js