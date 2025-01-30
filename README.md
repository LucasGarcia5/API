# API de Carros - WEBAPI

Esta é uma API em construção, que será uma API RESTful desenvolvida para o gerenciaeto de ingormações de carros, utilizando **Node.js** e **Express**. A API permie criar, ler, atualizar e excluir carros, com validação dos dados utilizando a biblioteca **Joi**.

Este é um projeto de CRUD (Create, Read, Update, Delete), que será expandido no futuro. Este é apenas o escopo inicial.

## Funcionalidade

- **GET /**: Retorna a lista completa de carros.
- **GET /:sigla**: Retorna as infomações de uma carro especifico, identificado pela sigla
- **POST /**: Adiciona um nvo carro à lista
- **PUT /:sigla**: Atualiza as informações de um carro especifico, identificado pela sigla
- **DELETE /:sigla**: Remove um carro especifico pela sigla

## Estrutura inicial do projeto

- **app.js**: Arquivo principal que configura o servidor Express e as rotas da API
- **tabelaCarros**: Contém as lista de carros (dados especificos)
- **validaco**: Contém as validações Joi para os dados dos carros

## Tecnologias usadas

- **Node.js**: Ambiente de execuxão para JavaScript
- **Express**: Framework para construção de API REST
- **Joi**: Biblioteca para validação de dados

## Endpoints

## 1. **GET**

Retorna a lista completa de carros disponiveis

#### Exemplo de resposta

```json

[
    {
        "nome": "Ferrari",
        "sigla": "FER",
        "velocidademaxima": 340,
        "potencia": 880,
        "consumo": 5.5,
    },
        {
        "nome": "Lamborghini",
        "sigla": "LAM",
        "velocidademaxima": 355,
        "potencia": 770,
        "consumo": 6.2,
    }
]
```

## Como Rodar o Projeto

1. **Clone Este repositorio:**

```bash
git clone https://github.com/LucasGarcia5/API.git
```

2. **Instale as dependencias:**

Navegue até o diretorio do projeto e execute o comando:

```bash
npm install
```

3. **Inicie o servidor:**

Após a instalação das dependencias, inicie o servidor:

```bash
node ./app.js
```

4. **Acesse a API:**

A API estará disponivel em [http://localhost:3000/](http://localhost:3000/).