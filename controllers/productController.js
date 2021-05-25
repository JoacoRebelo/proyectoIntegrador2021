const zapatillas = require('../data/zapatillas')
const db = require('../database/models');
const Op = db.Sequelize.Op;


const controller = {
    product: function(req, res){
        for (let index = 0; index < zapatillas.length; index++) {
            if (req.params.id == zapatillas[index].id) {
                 res.render('product', {
                    zapatillas: zapatillas[index]
                })
        }}
    } 
}
/*const controller = {
    product: function(req, res){
        for (let index = 0; index < db.Producto.length; index++) {
            if (req.params.id == db.Producto[index].id) {
                 res.render('product', {
                    Producto: db.Producto[index]
                })
        }}
    } 
}*/
module.exports = controller; 