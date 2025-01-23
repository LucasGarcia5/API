import carros2024 from './tabelaCarros.js';

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

//define a orta do servidor
app.listen(3000, () =>{
    console.log("servidor rodando com sucesso na porta 3000")
});

// npm init -y
// npm install express
// node app.js ou ./app.js
