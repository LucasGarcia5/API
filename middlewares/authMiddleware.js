//importando o pacote
import jwt from "jsonwebtoken";

const JWT_SECRET = "secreta-chave";

//middlewire de autenticação para verificar o token nas requisições
export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split("")[1];

  if (!token) {
    return res.status(401).json({ mensagem: "Token não fornecido! " });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {}
};
