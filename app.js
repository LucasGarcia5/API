import express from "express";

import carroRoutes from "./routes/carroRoutes.js";

const app = express();

//permite o express entender .json
app.use(express.json());

//chama as rotas de carros
app.use("/carro", carroRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

// npm init -y
// npm install express
// node app.js
// npx nodemon app.js