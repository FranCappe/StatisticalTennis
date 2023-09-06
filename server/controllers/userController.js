const { conectarDB, desconectarDB  } = require("../db/conection");
const User = require("../db/schemas/userSchema");

const getAll = async (req, res) => {
    console.log(process.env);
    console.log("Get all users")
    await conectarDB();
    const users = await User.find({});
    await desconectarDB();
    res.json(users);
};


const create = async (req, res) => {
    const {username, email, password} = req.body
    await conectarDB();
    const user = new User({ username, email, password });
    const newUser = await user.save();
    await desconectarDB();
    res.json(newUser);
};


const update = async (req, res) => {
    const {id} = req.params;
    const {username, email, password} = req.body;
    res.send({username, email, password});
    await conectarDB();
    const response = await User.findByIdAndUpdate(id, {username, email, password});
    await desconectarDB();
    res.json(response);
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await conectarDB();
    const response = await User.findByIdAndDelete(id);
    await desconectarDB();
    res.json(response);
};



module.exports = {
    getAll,
    create,
    deleteUser,
    update
};


