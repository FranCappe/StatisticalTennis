const express = require ('express');
const path = require ('path');
const app = express();


//MIDDLEWARE
app.use(express.static(path.join(__dirname, './public')));


//CONTROLLERS

const navegationController = require ('./server/controllers/navegationController');


//ROUTES
app.get('/', navegationController.getIndex);
app.get('/', navegationController.getHits);
app.get('/', navegationController.getRegister);
app.get('/', navegationController.getLogin);
app.get('/', navegationController.getErrors);
app.get('/', navegationController.getService);

app.get('/', (req, res) => {});

app.listen(3000, () => {
    console.log('Server running port 3000')
});