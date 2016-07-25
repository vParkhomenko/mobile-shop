var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop');

module.exports = mongoose;