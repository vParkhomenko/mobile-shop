var mongoose = require('../lib/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

exports.Admin = mongoose.model('Admin', schema);