var bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');
module.exports = function (io) {


    router.use(bodyParser.urlencoded({ extended: false }))

    router.use(bodyParser.json())

    router.get('/', function (req, res) {
        let tweets = tweetBank.list();
        res.render('index', { tweets: tweets, showForm: true });


    });

    router.get('/users/:name', function (req, res) {
        var name = req.params.name;
        var list = tweetBank.find({ name: name });
        //let tweets = tweetBank.list();
        res.render('index', { tweets: list });
    });

    router.get('/tweets/:id', function (req, res) {
        var id = Number(req.params.id);
        var list = tweetBank.find({ id: id });
        res.render('index', { tweets: list })
    })

    router.post('/tweets', function (req, res) {
        var name = req.body.name;
        var text = req.body.text;
        tweetBank.add(name, text);
        res.redirect('/');
    });


    // ...
    // definiciones de rutas, etc.
    // ...
    return router;
};