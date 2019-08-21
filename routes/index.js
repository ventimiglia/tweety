const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets });
});

router.get('/users/:name', function (req, res) {
    var name = req.params.name;
    let list = tweetBank.find({ name: name });

    res.render('index', { list: list });

});


module.exports = router;