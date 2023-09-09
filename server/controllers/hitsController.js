const { conectarDB, desconectarDB  } = require("../db/conection");
const Hits = require("../db/schemas/hitsSchema");


const getAll = async (req, res) => {
    console.log(process.env);
    res.send('Get all your hits!')
    await conectarDB();
    const hits = await Hits.find({});
    await desconectarDB(),
    res.json(hits);

};


const create = async (req, res) => {
    const {date, forehand, backhand, forehandVolley, backhandVolley, smash, slice, drop} = req.body;
    await conectarDB();
    const hits = new Hits ({date, forehand, backhand, forehandVolley, backhandVolley, smash, slice, drop})
    const newHits = await hits.save();
    res.json(newHits);
}

module.exports = {
    getAll,
    create
}