const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  id : {type: String},   
  username: { type: String},
  email: { type: String}, // Debería ser requerido
  password: { type: String}, // Debería ser requerido
  passwordConfirmation: {type: String},
});

const User = model('User', UserSchema);

module.exports = User;
