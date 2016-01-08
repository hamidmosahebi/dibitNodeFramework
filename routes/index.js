var express = require('express');
var router = express.Router();
var db_connection = require('../db_connection');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Node Express MongoDB Framework' , notifications : '' });
});

module.exports = router;
