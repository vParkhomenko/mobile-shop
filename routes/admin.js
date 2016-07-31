var mongoose = require('../lib/mongoose');
var Admin = require('../models/admin').Admin;
var express = require('express');
var router = express.Router();

router.get('/admin/:name', function(req, res) {

    Admin.findOne({name: req.params.name}, function (err, admin) {
        if (!err) {
            return res.json(admin);
        } else {
            res.statusCode = 500;

            return res.json({
                error: 'Server error'
            });
        }
    });
});

router.post('/admin', function(req, res) {

    var admin = new Admin({
        name: req.body.name,
        password: req.body.password
    });

    admin.save(function (err) {
        if (!err) {
            return res.json(admin);
        } else {
            if(err.name === 'ValidationError') {
                res.statusCode = 400;
                res.json({
                    error: 'Validation error'
                });
            } else {
                res.statusCode = 500;
                res.json({
                    error: 'Server error'
                });
            }
        }
    });
});

router.put('/admin/:name', function (req, res){

    var query = {'name': req.params.name};
    var newFields = req.body;

    Admin.findOneAndUpdate(query, newFields, {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send("succesfully saved");
    });

});

router.delete('/admin/:name', function(req, res) {

    Admin.remove({ name: req.params.name}, function (err) {
        if (err) return handleError(err);
        res.json({success: "success", msg: "Product with id: " +  req.params.name + " - was deleted!"});
    });
});

module.exports = router;