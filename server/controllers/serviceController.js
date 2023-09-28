const { conectarDB, desconectarDB } = require("../db/conection");
const Service = require("../db/schemas/serviceSchema");

const  getAll = async (req, res) => {
    try {
        await conectarDB();
        const service = await Service.find({});
        await desconectarDB(); 
        res.json(service);
    }catch (error){
        console.log("Error en el GET", Service);
        res.status(500).json({ service: "Error al obtener los datos del servicio"});
        
    }
};

const create = async (req, res) => {
    try {
        const {date, firstServe, secondServe} = req.body;
        await conectarDB();
        const service = new Service({date, firstServe, secondServe});
        const newService = await service.save();
        res.json(newService); 
        
       }catch (error) {
        console.error("Error en el POST", error)
        res.status(500).json({ error: "Error al crear el registro"})
       } 
};


module.exports = {
    getAll,
    create 
}
