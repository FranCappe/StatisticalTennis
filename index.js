const express = require ('express');
const path = require ('path');
const app = express();


//MIDDLEWARE
app.use(express.static(path.join(__dirname, './public')));


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
app.post('/api/user', userController.getCreate)


app.get('/', (req, res) => {});

app.listen(3000, () => {
    console.log('Server running port 3000')
});