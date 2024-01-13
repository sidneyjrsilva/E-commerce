//requisição expresss
const express = require ("express");
// declarando uma constante
const app = express();
//configurando servidor privado
const dotenv = require("dotenv").config();
// declarando uma constante "PORT" que é 3005 localhost
const PORT = process.env.PORT || 3005;
//
const authRouter=require('./routes/authRoutes')
dbConnect();
 

app.use("/api/user", authRouter);
//exibe qual porta esta sendo usada no momento
app.listen(PORT,()=>{
    console.log(`server rodando na porta: ${PORT}`)
})

/*// Importando o módulo express
const express = require ("express");

// Inicializando o aplicativo express
const app = express();

// Importando e configurando o módulo dotenv para gerenciar variáveis de ambiente
const dotenv = require("dotenv").config();

// Definindo a porta em que o servidor vai rodar. Se a variável de ambiente PORT não estiver definida, usa 3005 como padrão
const PORT = process.env.PORT || 3005;

// Aqui parece que você queria conectar ao banco de dados, mas a função dbConnect() não está definida no código fornecido
dbConnect();

// Definindo a rota raiz ("/") do aplicativo
app.use("/", (req, res) => {
    res.send("deu certo essa merda");
})

// Iniciando o servidor na porta definida
app.listen(PORT,()=>{
    console.log(`server rodando na porta: ${PORT}`)
})
*/

//23min de video