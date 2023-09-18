const { conectarDB, desconectarDB  } = require("../db/conection");
const Hits = require("../db/schemas/hitsSchema");


const getAll = async (req, res) => {
    try {
    await conectarDB();
    const hits = await Hits.find({});
    await desconectarDB(),
    res.json(hits);
} catch (error) {
    console.error("Error en el GET", error);
    res.status(500).json({error: "Error al obtener los datos de hits"});
}}

const create = async (req, res) => {
  try{  
    const {date, forehand, backhand, forehandVolley, backhandVolley, smash, slice, drop} = req.body;
  await conectarDB();
  const hits = new Hits ({date, forehand, backhand, forehandVolley, backhandVolley, smash, slice, drop})
  const newHits = await hits.save();
  res.json(newHits);


  } catch(error){ 
    console.error("Error en el POST", error),
    res.status(500).json({error: "Error al crear un registro de hits"});
    
}};

module.exports = {
    getAll,
    create
}