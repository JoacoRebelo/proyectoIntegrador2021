const db = require('../database/models');

const controller = {
    editar: function(req, res){
        db.Producto.findByPk(req.params.id).then(productos =>{
            res.render("product-edit", {productos : productos})
        }).catch(err=>{console.log(err)})  
    },
    editarProducto:(req, res, next)=>{
    db.Producto.findByPk(req.params.id).then(productos =>{
        res.render("product-edit", {productos : productos})
    }).catch(err=>{console.log(err)})  
    },
    postearEdit:(req,res)=>{
        db.Producto.update({
            name: req.body.name,
            descripcionLarga: req.body.descripcionLarga,
            url: req.file.filename,
        },{
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.redirect('/product/' + req.body.id);
        }).catch(error => {
            console.log(error);
        });
    }  
    
}
module.exports = controller; 