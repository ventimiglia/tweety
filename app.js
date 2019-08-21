const express = require('express');
const app = express(); // crea una instancia de una aplicación de express
var morgan = require('morgan');
var nunjucks = require('nunjucks');

app.use(morgan('combined'));

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

app.get('/special*', function(req, res, next){
    res.send('Llegaste a un area especial');
    next();
})

app.get('/views/index.html',function(req, res, next){
    const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}, {name: 'Juanito'}];
    res.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates

/*var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});*/