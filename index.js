const express = require ('express');
const app = express();
const path = require ('path');


//MIDDLEWARE
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());


//CONTROLLERS

const navegationController = require ('./server/controllers/navegationController');
const userController = require ('./server/controllers/userController');


//ROUTES
app.get('/', navegationController.getIndex);
app.get('/hits', navegationController.getHits);
app.get('/register', navegationController.getRegister);
app.get('/login', navegationController.getLogin);
app.get('/errors', navegationController.getErrors);
app.get('/service', navegationController.getService);



//API

app.get('/api/users', userController.getAll)
app.post('/api/user', userController.create)


app.get('/', (req, res) => {});

app.listen(3000, () => {
    console.log('Server running port 3000')
});