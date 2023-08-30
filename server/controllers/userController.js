const { get } = require("mongoose");

const getAll = (req, res) => {
    res.send('Get all users');

}



const getCreate = (req, res) => {
    res.send('Create user')
}

module.exports = {
    getAll,
    getCreate
}