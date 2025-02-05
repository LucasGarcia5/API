// modulo bcrypt para criptografar senhas
import bcrypt from "bcrypt";

// (em cenario real seria com banco de dados)
let usuarios = [
  {
    id: 1,
    nome: "Lucas Garcia",
    email: "lucas@gmail.com",
    senha: bcrypt.hashSync("senha123", 10),
  },
];

// função para obter todos os usuarios
export const getAllUsuarios = () => usuarios;

//função para encontrar um usuario pelo e-mail
export const getUsuarioByEmail = (email) => {
  return usuarios.find((usuarios) => usuarios.email === email);
};

//função para criar um novo usuario
export const createUsuario = (novoUsuario) => {
  const novoId = usuarios.length + 1;

  //criar o novo usuario com dados fornecidos e senha criptografada
  const usuario = {
    ...novoUsuario,
    id: novoId,
    senha: bcrypt.hashSync(novoUsuario.senha, 10),
  };

  //adiciona o usuario
  usuarios.push(usuario);

  //retorna o usuario criado
  return usuario;
};

//função para atualizar os dados de um usuario existente
export const updadteUsuario = (id, dadosAtualizados) => {
  const usuarioIndex = usuarios.findIndex((usuario) => usuario.id == id);

  if (usuarioIndex === -1) return null;

  usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...dadosAtualizados };

  return usuarios[usuarioIndex];
};

//função para excluir um usuario pelo id
export const deleteUsuario = (id) => {
  const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

  if (usuarioIndex === -1) return null;

  const [usuarioRemovido] = usuarios.splice(usuarioIndex, 1);

  return usuarioRemovido;
};
