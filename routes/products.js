var mongoose = require('../lib/mongoose');
var Product = require('../models/products').Product;
var express = require('express');
var router = express.Router();

router.get('/api/:category', function(req, res) {
    
    var category = req.params.category;

    Product.find({category: category}, function (err, category) {
        if (!err) {
            return res.json(category);
        } else {
            res.statusCode = 500;

            return res.json({
                error: 'Server error'
            });
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
        detail: req.body.detail
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

router.put('/api/:category/:id', function(req, res) {
    var product = req.params.id;

    Product.findOneAndUpdate({ id: product }, function (err) {
        if (err) return handleError(err);
        res.json({success: "success", msg: "Product with id: " +  product + " - was updated!"});
    });
});

module.exports = router;