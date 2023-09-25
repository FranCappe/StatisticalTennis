const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ServiceSchema = new Schema ({
    date: {type: Date},
    firstServe: {type: Number},
    secondServe: {type: Number}

})

const Service = model ('Service', ServiceSchema);


module.exports = Service
