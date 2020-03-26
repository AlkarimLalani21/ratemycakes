const mongoose = require('mongoose');

const RateSchema = new mongoose.Schema({
    stars:{type: Number, required: true},
    comment: {type: String, default:true, minlength: [3, "At least 3 character "]},
},{timestamps: true});
const CakeSchema = new mongoose.Schema({
    baker: { type: String, required: true, minlength: [3, "At least 3 character "]},
    img: { type: String, required: true},
    rates:[RateSchema]
}, {timestamps: true});
const cakeRates = {
    Cake : mongoose.model('Cake', CakeSchema),
    Rate : mongoose.model('Rate', RateSchema)
}
module.exports = cakeRates;