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
    const {id, date, Forehand, BackHand, ForehandVolley, BackHandVolley, Smash, Slice, Drop} = req.body;
    await conectarDB();
    const hits = new Hits (id, date, Forehand, BackHand, ForehandVolley, BackHandVolley, Smash, Slice, Drop)
    const newHits = await hits.save();
    res.json(newHits);
}

module.exports = {
    getAll,
    create
}