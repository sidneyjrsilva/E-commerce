const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Banco de dados conectado");
    } catch (error) {
        console.log("Erro no banco de dados", error);
    }  
};

module.exports = dbConnect;
