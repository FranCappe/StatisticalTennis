const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const ErrorsSchema = new Schema ({
      id: {type: Number, required: true },
      errorsUnforcered:{type: Number, required: true },
      doubleFault: {type: Number, required: true },
})

const Errors = model ('Errors', ErrorsSchema);

module.exports = Errors

