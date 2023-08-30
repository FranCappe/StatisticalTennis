const express = require ('express');
const app = express();


//CONTROLLERS

const navegationController = require ('./server/controllers/navegationController');



app.get('/', navegationController.getIndex);


app.get('/', (req, res) => {});

app.listen(3000, () => {
    console.log('Server running port 3000')
});