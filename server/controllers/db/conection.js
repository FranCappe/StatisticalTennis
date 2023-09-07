const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.dbUrl)
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log(error);
    }
}

const desconectarDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("Desconectado de la base de datos");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { conectarDB, desconectarDB }