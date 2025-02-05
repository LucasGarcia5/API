let carros2024 = [
  {
    nome: "Ferrari",
    sigla: "FER",
    velocidademaxima: 340,
    potencia: 880,
    consumo: 5.5,
  },
  {
    nome: "Lamborghini",
    sigla: "LAM",
    velocidademaxima: 355,
    potencia: 770,
    consumo: 6.2,
  },
];

// Função que retorna todos os carros no Array
export const getAllCarros = () => carros2024;

//Fução que retorna um carro especifico pela indentificador (sigla)
export const getCarroBySigla = (sigla) => {
  return carros2024.find((carro) => carro.sigla === sigla);
};

//função que adiciona um novo carro ao array
export const createCarro = (novoCarro) => {
  carros2024.push(novoCarro); //Adiciona um novo carro ao final da lista
  return novoCarro;
};

//função que atualiza as informações dde uma carro existente, com base na sigla
export const updateCarro = (sigla, dadosAtualizados) => {
  //buscar o indice do carro no array
  const carroIndex = carros2024.findIndex((carro) => carro.sigla === sigla);
  if (carroIndex === -1) return null; // Se não encontrar carro retorna null
  // Atualiza o carro com as informações fornecidas
  carros2024[carroIndex] = { ...carros2024[carroIndex], ...dadosAtualizados };
  return carros2024[carroIndex];
};

// função que remove  um carro do array, com base na sigla
export const deleteCarro = (sigla) => {
  // buscar o indice do carro no array usando a sigla
  const carroIndex = carros2024.findIndex((carro) => carro.sigla === sigla);
  if (carroIndex === -1) return null;
  // remova o carro da lista e retorna o carro removido
  const [carroRemovido] = carros2024.splice(carroIndex, 1);
  return carroRemovido;
};
