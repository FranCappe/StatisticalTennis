const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const HitSchema = new Schema ({
    id: {type: String, required: true},
    date: {type: Date, required: true},
    forehand: {type: Number, required: true},
    backhand: {type: Number, required: true},
    forehandVolley: {type: Number, required: true},
    backhandVolley:  {type: Number, required: true},
    smash: {type: Number, required: true},
    slice: {type: Number, required: true},
    drop: {type: Number, required: true},


});

const Hits = model('Hits', HitSchema);

module.exports = Hits;

