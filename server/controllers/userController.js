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
        // Realiza la lógica de autenticación aquí (ejemplo simplificado)
        // Verifica si el usuario y la contraseña son válidos
        if (email === 'email' && password === 'password') {
            // Si las credenciales son válidas, puedes considerar que el inicio de sesión es exitoso
            // Aquí puedes realizar otras acciones, como generar una sesión o establecer una cookie de autenticación
            // ...

            // Redirige al usuario a la página de inicio o al panel de control, o donde desees
            res.redirect('/login.html');
        } else {
            // Si las credenciales no son válidas, puedes enviar un mensaje de error al cliente
            res.status(401).json({ error: "This information is incorrect" });
        }
    } catch (error) {
        // Manejo de errores en caso de problemas durante el inicio de sesión
        console.error("Error en login:", error);
        res.status(500).json({ error: "Error en el inicio de sesión" });
    }
};




module.exports = {
    getAll,
    create,
    deleteUser,
    update,
    login
};


