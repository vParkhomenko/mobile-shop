var mongoose = require('../lib/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    category: String,
    age: Number,
    id: String,
    imageUrl: String,
    name: String,
    snippet: String,
    detail: {
        age: Number,
        id: String,
        images: [],
        name: String,
        description: String,
        manufacturer: String,
        model: String,
        diagonal: String,
        screen: String,
        system: String,
        CPU: String,
        cores:  Number,
        sim: Number,
        battery:String,
        weight: Number
    }
});

exports.Product = mongoose.model('Product', schema);