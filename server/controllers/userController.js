const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        await conectarDB();
        const user = await User.findOne({ email });

        if (user && bcrypt.compareSync(password, user.password)) {
            // Las credenciales son válidas
            // Puedes generar un token de autenticación y enviarlo como respuesta
            const token = generateAuthToken(user); // Implementa esta función para generar un token

            res.status(200).json({ token });
        } else {
            // Las credenciales no son válidas
            res.status(401).json({ error: "Credenciales incorrectas" });
        }

        await desconectarDB();
    } catch (error) {
        console.error("Error en login:", error);
        res.status(500).json({ error: "Error en el inicio de sesión" });
    }
};


function generateAuthToken(user) {
    const secretKey = '0511_FND'; // Deberías guardar esta clave en una variable de entorno
    const payload = {
        user: {
            id: user.id, // Puedes incluir cualquier dato del usuario que desees en el token
            username: user.username
            // ...otros datos que quieras incluir
        }
    };

    const options = {
        expiresIn: '1h' // El token expirará en 1 hora, puedes ajustar esto según tus necesidades
    };

    const token = jwt.sign(payload, secretKey, options);
    return token;
}


module.exports = {
    getAll,
    create,
    deleteUser,
    update,
    login
};


