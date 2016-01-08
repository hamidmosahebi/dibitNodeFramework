var express = require('express');
var router = express.Router();

var db_connection = require('../db_connection');

// add report
router.get('/', function(req, res){
/*    var report = new db_connection.dbModel({
        name: req.params.name,
        message: req.params.message
    })
    report.save(function(err, report){
        res.json(report);
    });*/
    res.render('addReport',{title: "Add Report",notifications:""});
});

module.exports = router;