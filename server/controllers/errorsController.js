const { conectarDB, desconectarDB } = require ("../db/conection");
const Errors = require ("../db/schemas/errorsSchema");

const getAll = async (req, res) => {
    try {
    await conectarDB();
    const errors = await Errors.find({});
    await desconectarDB(),
    res.jspn(errors)   
  } catch (error) {
    console.error("Error en el GET", error);
    res.status(500).json({error: "Error al obtener los datos de los errores"});
}}


const create = async (req, res) => {
    try{
       const {errorsUnforcered,  doubleFault} = req.body 
    await conectarDB();
    const errors = new Errors ({date ,errorsUnforcered, doubleFault})
    const newErrors = await errors.save();
    res.json(newErrors);
   }catch(error){
    console.error("Error en el POST", error),
    res.status(500).json({error: "Error al crear un registro de errors"})
   }
};


module.exports = {
    getAll,
    create
}