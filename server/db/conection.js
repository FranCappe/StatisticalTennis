const mongoose = require('mongoose');
require('dotenv').config();

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Data stored correctly");
    } catch (error) {
        console.log(error);
    }
}

const desconectarDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("Disconnect to the data base");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { conectarDB, desconectarDB }