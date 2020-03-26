const { Cake } = require('../models/cake.js');
const { Rate } = require('../models/cake.js');


module.exports = {
    cakes: function(req,res){
        Cake.find()
        .then(cakes =>{
            res.json(cakes)
    })
        .catch(err=>{
            res.json(err)
        })
    },

    create: function(req,res){
        console.log(req.body.name)
    let cake = new Cake()
    cake.baker= req.body.baker;
    cake.img = req.body.img;
    cake.save()
        .then(cake => {
            res.json(cake)
        })
        .catch(err => {
            console.log("Error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.json(err);
    })},

    rating: function(req,res){
        let rate = new Rate()
        rate.stars = req.body.stars;
        rate.comment = req.body.comment;
        rate.save()
        Cake.findOne({_id: req.params.id})

        .then(cake=>{
            cake.rates.push({stars:req.body.stars, comment:req.body.comment})
            cake.save()
            .then(result => {
                console.log("show ratings ",result)
                res.json(result)
            })
        })},

    showCake: function(req,res){
        Cake.findOne({_id: req.params.id})
        .then(cake=>{
            res.json(cake);
        })
        .catch(err => {
            console.log("Error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.json(err);
        })
    }
}