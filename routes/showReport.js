var express = require('express');
var router = express.Router();

var db_connection = require('../db_connection');

// show report by ID
router.get('/:id', function(req, res){
    db_connection.dbModel.findById(req.params.id, function(err, report){
        res.json(report);
    })
    //res.render('show Report by ID',{title: "show Report by ID:",notifications:""});
});
module.exports = router;