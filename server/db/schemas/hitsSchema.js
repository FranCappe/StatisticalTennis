const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const HitSchema = new Schema ({
    id: {type: String, required: true},
    Date: {type: Date, required: true},
    Forehand: {type: Number, required: true},
    Backhand: {type: Number, required: true},
    ForehandVolley: {type: Number, required: true},
    BackhandVolley:  {type: Number, required: true},
    Smash: {type: Number, required: true},
    Slice: {type: Number, required: true},
    Drop: {type: Number, required: true},


});

const Hits = model('Hits', HitSchema);

module.exports = Hits;

