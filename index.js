require('dotenv').config();
const express = require ('express');
const app = express();
const path = require ('path');
const PORT = process.env.PORT || 8000;

//MIDDLEWARE
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());


//CONTROLLERS

const navegationController = require ('./server/controllers/navegationController');
const userController = require ('./server/controllers/userController');
const hitsController = require ('./server/controllers/hitsController');
const errorsController = require ('./server/controllers/errorsController');
const serviceController = require ('./server/controllers/serviceController');
//ROUTES
app.get('/', navegationController.getIndex);
app.get('/hits', navegationController.getHits);
app.get('/register', navegationController.getRegister);
app.get('/login', navegationController.getLogin);
app.get('/errors', navegationController.getErrors);
app.get('/service', navegationController.getService);



//API usuarios

app.get('/api/users', userController.getAll);
app.post('/api/user', userController.create);
app.post('/api/login', userController.login);

//API HITS

app.get('/api/hits', hitsController.getAll);
app.post('/api/hits', hitsController.create);

//API ERRORS
app.get('/api/errors', errorsController.getAll)
app.post('/api/errors', errorsController.create)

//API SERVICE
app.get('/api/service', serviceController.getAll)
app.post('/api/service', serviceController.create)

app.listen(PORT, () => {
    console.log('Server running in the port'  +  PORT)
});