const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cake', {useNewUrlParser: true});
module.exports = mongoose;