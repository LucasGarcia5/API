import {
  getAllCarros,
  getCarroBySigla,
  createCarro as modelCreateCarro,
  updateCarro as modelUpdateCarro,
  deleteCarro as modelDeleteCarro,
} from "../models/carroModels.js";

import {
  modeloCarro,
  modeloAtualizacaoCarro,
} from "../validations/carroValidation.js";

//Função para retornar todos os carros
export const getCarros = (req, res) => {
  //Chama a função que retorna todos os carros da base de dados (ou array)
  const carros = getAllCarros();
  //Retorna os carros com status 200
  res.status(200).json(carros);
};

//Função para retornar um carro expecifico com base na sigla
export const getCarro = (req, res) => {
  const { sigla } = req.params;
  //Chama a função que retorna o carro pela sigla
  const carro = getCarroBySigla(sigla.toUpperCase());

  //Se não for encontrado retorna erro 404
  if (!carro) {
    return res.status(404).json({ mensagem: "Carro não encontrado! " });
  }

  //Retorna o carro encontrado com status 200
  res.status(200).json(carro);
};

//Função para criar um novo carro
export const createCarro = (req, res) => {
  const { error } = modeloCarro.validate(req.body);

  //se houver erro de validação, retorna status 404
  if (error) {
    return res.status(404).json({ mensagem: error.details[0].message });
  }

  //Dados validos, criar um novo carro
  const novoCarro = req.body;
  //Chama a função para adicionar o novo carro à base de dados (Ou array)
  const carroCriado = modelCreateCarro(novoCarro);
  //Retorna o carro criado com status 201
  res.status(201).json(carroCriado);
};

//Função para atualizar os dados de um carro existente
export const updateCarro = (req, res) => {
  const { sigla } = req.params;
  //Valida os dados de atualização com base no modelo
  const { error } = modeloAtualizacaoCarro.validate(req.body);
  //Se houver erro da validação, retorna status 400
  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }

  //Chama a função para atualizar os dados do carro, passando a sigla e os novos dados
  const carroAtualizado = modelUpdateCarro(sigla.toUpperCase(), req.body);

  //se o carro não for encontrado para atualização, retorna status 404
  if (!carroAtualizado) {
    return res
      .status(404)
      .json({ mensagem: "Carro não encontrado para atualização" });
  }

  //Retorna o carro atualizado com status 200
  res.status(200).json(carroAtualizado);
};

//Função para deletar um carro existente
export const deletecarro = (req, res) => {
  const { sigla } = req.params;
  //Chama a função para remover o carro, passando a sigla
  const carroReovido = modelDeleteCarro(sigla.toUpperCase());

  //Se o carro não for encontrado para remoção,retorna status 404
  if (!carroReovido) {
    return res
      .status(404)
      .json({ mensagem: "carro não encontrado para remoção! " });
  }

  //Retorna uma mensagem de sucesso e os dados do carro removidos com status 200
  res
    .status(200)
    .json({ mensagem: "Carro removido com sucesso!", carro: carroReovido });
};
