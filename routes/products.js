var mongoose = require('../lib/mongoose');
var Product = require('../models/products').Product;
var express = require('express');
var router = express.Router();

router.get('/api', function(req, res) {
    
    var totalItems = 1;

    Product.count(function (err, count) {
        if (err) return handleError(err);
        totalItems = count;
    });

    if(!req.query.page) {
        var page = 1;
    } else {
        var page = req.query.page;
    }
    var per_page = 6;

    Product.find('id').skip((page-1)*per_page).limit(per_page).exec(function(err, data) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json({"data": data, "totalItems": totalItems, "per_page": per_page});
        }
    });
});

router.get('/api/:category', function(req, res) {
    var category = req.params.category;
    var totalItems = 1;
   
    Product.where('category', category).count(function (err, count) {
        if (err) return handleError(err);
        totalItems = count;
    });
    
    if(!req.query.page) {
        var page = 1;
    } else {
        var page = req.query.page;
    }
    var per_page = 6;

    Product.find({category: category}).skip((page-1)*per_page).limit(per_page).exec(function(err, data) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json({"data": data, "totalItems": totalItems, "per_page": per_page});
        }
    });
});

router.get('/api/:category/:product', function(req, res) {

    var product = req.params.product;

    Product.findOne({id: product}, function (err, product) {
        if (!err) {
            return res.json(product);
        } else {
            res.statusCode = 500;

            return res.json({
                error: 'Server error'
            });
        }
    });
});

router.post('/api/:category', function(req, res) {
    
    var product = new Product({
        category: req.body.category,
        age: req.body.age,
        id: req.body.id,
        imageUrl: req.body.imageUrl,
        name: req.body.name,
        snippet: req.body.snippet,
        images: req.body.images,
        description: req.body.description,
        manufacturer: req.body.manufacturer,
        model: req.body.model,
        diagonal: req.body.diagonal,
        screen: req.body.screen,
        system: req.body.system,
        CPU: req.body.CPU,
        cores:  req.body.cores,
        sim: req.body.sim,
        battery: req.body.battery,
        weight: req.body.weight
    });

    product.save(function (err) {
        if (!err) {
            return res.json([product]);
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

router.delete('/api/:category/:id', function(req, res) {
    var product = req.params.id;

    Product.remove({ id: product }, function (err) {
        if (err) return handleError(err);
            res.json({success: "success", msg: "Product with id: " +  product + " - was deleted!"});
    });
});

router.put('/api/:category/:id', function (req, res){

    var query = {'id': req.params.id};
    var newFields = req.body;

    Product.findOneAndUpdate(query, newFields, {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send("succesfully saved");
    });

});

router.delete('/api/delete', function(req, res) {

    Product.remove('id', function (err) {
        if (err) return handleError(err);
        res.json({success: "success", msg: "all - was deleted!"});
    });
});

module.exports = router;