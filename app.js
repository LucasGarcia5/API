import carros2024 from './tabelaCarros.js';

import { modeloCarro, modeloAtualizacaoCarro } from './validacao.js';


//Importar o modulo do express
import express from 'express';



const app = express();

app.use(express.json());

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(carros2024); //retorna lista de carro com status 200
});

app.get('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase(); // obetem a sigla e deixa em maiuscula
    const carro = carros2024.find((infocarro) => infocarro.sigla === siglaInformada); // busca  carro pela sigla
    if (!carro) { // se o carro não for encontrado retorna erro 404 
        res.status(404).send("Não existe carro com a sigla informada!");
        return;
    }
    res.status(200).send(carro); // se encontrad retorna o carro e status 200
})

app.post('/', (req,res) => {
    const novoCarro = req.body;
    const { error } = modeloCarro.validate(novoCarro);
    if (error) {
        res.status(400).send(error);
        return;
    }
    carros2024.push(novoCarro);
    res.status(200).send(novoCarro);
});

app.put('/:sigla', (req,res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const carroSelecionado = carros2024.find((c) => c.sigla === siglaInformada);
    if (!carroSelecionado) {
        res.status(404).send("Não existe um carro com a sigla informada");
        return;
    };
    const { error } = modeloAtualizacaoCarro.validate(req.body);
    if (error) {
        res.status(400).send(error);
        return;
    };
    const campos = Object.keys(req.body);
    for (let campo of campos) {
        carroSelecionado[campo] = req.body[campo];
    };
    res.status(200).send(carroSelecionado);
});

app.delete('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const index = carros2024.findIndex((carro) => carro.sigla === siglaInformada);
    if (index !== -1) {
        carros2024.splice(index, 1);
        res.status(200).send({ message: `Carro com sigla ${siglaInformada} excluído com sucesso.` });
    } else {
        res.status(404).send({ message: `Carro com sigla ${siglaInformada} não encontrado.` });
    }
});

//define a orta do servidor
app.listen(3000, () =>{
    console.log("servidor rodando com sucesso na porta 3000")
});

// npm init -y 
// npm install express

// node app.js
// npx nodemon app.js