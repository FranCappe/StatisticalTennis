const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connect to the data base");
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