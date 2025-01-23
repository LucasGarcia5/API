import joi from "joi";

export const modeloCarro = joi.object({
    nome: joi.string().min(3).required(), //nome do carro, pelo menos 3 caracteres
    sigla: joi.string().length(3).required(), // sigla ou modelo, 3 caracteres
    velocidademaxima: joi.number().min(1).required(), // potencia minima de 1 cv
    potencia: joi.number().min(1).required(), // velocidade minima de 1km/h
    consumo: joi.number().min(0.1).required(), // 
});

// npm install joi