const express = require('express');
const app = express(); // crea una instancia de una aplicación de express

app.get('/', function (req, res) {
    res.send('Hola Mundo!');
});

app.listen(3000, function () {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});

app.get('/is-anybody-in-there',function(req, res, next){
    res.send('Yes, I am here');
    next();
})

app.post('/modernism', function(req, res, next){
    addNewUser(req.body);
    res.status(201).send('Okey');
})