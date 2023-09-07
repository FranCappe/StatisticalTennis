const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const HitsSchema = new Schema ({
    date:  { type: Number },
    forehand: { type: Number },
    backhand: { type: Number },
    forehandVolley:  { type: Number },
    backhandVolley:  { type: Number },
    smash: { type: Number },
    slice:  { type: Number },
    drop:  { type: Number },
})

const Hits = model('Hits', HitsSchema);

module.exports = Hits;