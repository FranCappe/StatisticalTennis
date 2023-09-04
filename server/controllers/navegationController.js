const { get } = require('http');
const path = require ('path');


const getIndex = (req, res) => {
        const filePath = path.join(__dirname, '../../public/index.html')
        res.sendFile(filePath);

}

const getHits = (req, res) => {
    const filePath = path.join(__dirname, '../../public/hits.html')
    res.sendFile(filePath);

}
const getRegister = (req, res) => {
    const filePath = path.join(__dirname, '../../public/register.html')
    res.sendFile(filePath);

}
const getErrors = (req, res) => {
    const filePath = path.join(__dirname, '../../public/errors.html')
    res.sendFile(filePath);

}
const getService = (req, res) => {
    const filePath = path.join(__dirname, '../../public/service.html')
    res.sendFile(filePath);

}

const getLogin = (req, res) => {
    const filePath = path.join(__dirname, '../../public/login.html')
    res.sendFile(filePath);

}

module.exports = {
    getIndex,
    getHits,
    getRegister,
    getErrors,
    getService,
    getLogin
}