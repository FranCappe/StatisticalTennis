const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const HitSchema = new Schema ({
    date: {type: Date},
    forehand: {type: Number},
    backhand: {type: Number},
    forehandVolley: {type: Number},
    backhandVolley:  {type: Number},
    smash: {type: Number},
    slice: {type: Number},
    drop: {type: Number},


});




const Hits = model('Hits', HitSchema);

module.exports = Hits;

