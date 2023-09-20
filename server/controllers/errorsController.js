const { conectarDB, desconectarDB } = require("../db/conection");
const Errors = require("../db/schemas/errorsSchema");

const getAll = async (req, res) => {
  try {
    await conectarDB();
    const errors = await Errors.find({});
    await desconectarDB(); // Agrega un await aquí
    res.json(errors); // Corrige "res.jspn" a "res.json"
  } catch (error) {
    console.error("Error en el GET", error);
    res.status(500).json({ error: "Error al obtener los datos de los errores" });
  }
};

const create = async (req, res) => {
  try {
    const { date, errorsUnforcered, doubleFault } = req.body;
    if (typeof errorsUnforcered !== 'number' || typeof doubleFault !== 'number') {
      return res.status(400).json({ error: 'Los valores de errorsUnforcered y doubleFault deben ser números válidos.' });
    }
    await conectarDB();
    const errors = new Errors({ date, errorsUnforcered, doubleFault });
    const newErrors = await errors.save();
    res.json(newErrors);
  } catch (error) {
    console.error("Error en el POST", error);
    res.status(500).json({ error: "Error al crear un registro de errors" });
  }
};

module.exports = {
  getAll,
  create
};
