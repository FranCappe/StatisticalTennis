
const getAll = (req, res) => {
    res.send('Get all users');

}



const create = (req, res) => {
    const {username, email, password} = req.body;
    res.send({username, email, password});
}

module.exports = {
    getAll,
    create
}