
const getAll = (req, res) => {
    res.send('Get all users');

}



const create = (req, res) => {
    const {name, email, password} = req.body;
    res.send({name, email, password});
}

module.exports = {
    getAll,
    create
}