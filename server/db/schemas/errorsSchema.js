const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const ErrorSchema = new Schema ({
      date: {type: Date},
      errorsUnforcered: {type: Number},
      doubleFault: {type: Number},
})

const Errors = model ('Errors', ErrorSchema);

module.exports = Errors

