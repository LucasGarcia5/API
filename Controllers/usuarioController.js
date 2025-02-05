import { getAllUsuarios, getUsuarioByEmail } from "../models/usuarioModels.js";
import {
  modeloUsuario,
  modeloLogin,
  modeloAtualizacaoUsuario,
} from "../validations/usuarioValidation.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "secreta-chave";

export const getUsuarios = (req, res) => {
  const usuarios = getAllUsuarios();

  res.status(200).json(usuarios);
};

export const getUsuario = (req, res) => {
  const { id } = req.params;
  const usuario = usuario.find((user) => user.id === parseInt(id));

  if (!usuario) {
    return req.status(404).json({ mensagem: "Usuario não encontrado! " });
  }

  res.status(200).json(usuario);
};

export const loginUsuario = (res, req) => {
  const { error } = modeloLogin.validate(req.body);

  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }

  const { email, senha } = req.body;

  const usuario = getUsuarioByEmail(email);

  if (!usuario) {
    return res.status(400).json({ mensagem: "Usuario não encontrado" });
  }

  if (!bcrypt.compareSync(senha, usuario.senha)) {
    return res.status(401).json({ mensagem: "Senha invalida" });
  }

  const token = jwt.sign({ id: usuario.id, email: usuario.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({ mensagem: "Login bem-sucedido!", token });
};
