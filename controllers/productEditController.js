const db = require('../database/models');

const controller = {
    editar: function(req, res){
        res.render('product-edit')
    },
    editarProducto: function(req, res, next){
    db.Producto.findByPk(req.params.id).then(productos =>{
        res.render("product-edit", {productos : productos})
        console.log(JSON.stringify(productos, null, 10));
    }).catch(err=>{console.log(err)})  
}
}
module.exports = controller; 