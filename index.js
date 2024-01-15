const express = require("express");
const asyncHandler = require("express-async-handler")
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect");
require("dotenv").config();

// Criando uma instância do Express
const app = express();

// Configurando a porta
const PORT = process.env.PORT || 3005;

// Importando as rotas
const authRouter = require('./routes/authRoutes');
const { notFound } = require("./middlewares/errorHandler");

// Conectando ao banco de dados
dbConnect();

// Configurando o middleware do body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configurando as rotas
app.use("/api/user", authRouter);


app.use(notFound);
app.request(errorHandler);



// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});

// 39,23