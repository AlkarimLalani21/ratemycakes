const cake =require('../controller/cakes.js')

module.exports = function(app){
    app.get('/cakes', (req, res) => {
        cake.cakes(req,res);
       //causes angular to load
    })

    app.post('/cakes',(req,res)=>{
        cake.create(req,res);
    })
    app.get('/cakes/:id',(req,res)=>{
        cake.showCake(req,res);
    })
    app.post('/rating/new/:id',(req,res)=>{
        cake.rating(req,res);
    })

    app.all('*', (req, res) => {
    });
 
 }