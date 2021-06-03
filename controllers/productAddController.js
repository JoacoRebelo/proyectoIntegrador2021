const db = require('../database/models');

const controller = {
    add: function(req, res){
        res.render('product-add')
    }, 
    productAdd:(req,res)=>{
        db.Producto.create({
            name: req.body.name,
            descripcionLarga: req.body.descripcionLarga
        }).then(usuario => {
            res.redirect('/profile');
        }).catch(error => {
            console.log(error);
        })
    }  
}
module.exports = controller; 