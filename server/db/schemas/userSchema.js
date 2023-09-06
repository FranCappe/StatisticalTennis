const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  id : {type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true }, // Debería ser requerido
  password: { type: String, required: true }, // Debería ser requerido
  passwordConfirmation: { type: String, required: true },
});

const User = model('User', UserSchema);

module.exports = User;
