const express = require('express'); // Importa o módulo Express
const { createUser } = require('../controller/userCtrl'); // Importa a função createUser do seu controlador de usuário
const router = express.Router(); // Cria um novo roteador Express

router.post('/register', createUser); // Define uma rota POST para '/register' que usa a função createUser

module.exports = router; // Exporta o roteador
