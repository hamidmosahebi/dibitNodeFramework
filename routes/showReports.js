var express = require('express');
var router = express.Router();

//var db_connection = require('../db_connection');

// show all reports
router.get('/', function(req, res){
/*    db_connection.dbModel.find(function(err, reports){
        res.json(reports);
    })*/
    res.render('showReports',{title: "All Reports:",notifications:""});
});
module.exports = router;