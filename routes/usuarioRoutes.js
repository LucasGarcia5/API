import express from "express";
import { getUsuarios } from "../Controllers/usuarioController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

//rota para obter todos os usuarios (necessita autenticação)
router.get("/", authenticate, getUsuarios);

export default router;
