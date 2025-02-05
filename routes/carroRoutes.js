import Express from "express";
import {
  getCarros,
  getCarro,
  createCarro,
  updateCarro,
  deletecarro,
} from "../Controllers/carroController.js";

const router = Express.Router();

//rota para obter todos os carros
router.get("/", getCarros);

//rota para obter um carro pela sigla
router.get("/:sigla", getCarro);

//rota para criar um carro
router.post("/", createCarro);

//rota para atualizar o carro
router.put("/:sigla", updateCarro);

//rota para deletar o carro
router.delete("/:sigla", deletecarro);

export default router;
