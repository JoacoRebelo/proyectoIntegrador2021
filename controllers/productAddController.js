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
    },
    nuevaFoto: (req, res) => {
        console.log('/images/fotosSubidas/'  + req.file.filename);
        res.render('product-add');
    },
}
module.exports = controller; 