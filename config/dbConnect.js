const { default: mongoose } = require("mongoose");

const dcConnet = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("database conectado");
    }
     catch (error) {
        console.log("database error");
    }  
};
module.exports = dcConnet;