// Importando os módulos necessários
const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect"); // Substitua "./dbConnect" pelo caminho correto para o seu módulo dbConnect
require("dotenv").config();

// Criando uma instância do Express
const app = express();

// Configurando a porta
const PORT = process.env.PORT || 3005;

// Importando as rotas
const authRouter = require('./routes/authRoutes');

// Conectando ao banco de dados
dbConnect();

// Configurando o middleware do body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configurando as rotas
app.use("/api/user", authRouter);

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});
