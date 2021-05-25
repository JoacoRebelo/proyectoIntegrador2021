const db = require('../database/models');
const Op = db.Sequelize.Op;

const controller = {
    results: function(req, res){
        let filtro = {where: {descripcionLarga:{[Op.like]:'%'+ req.query.search + '%'}}};
        db.Producto.findAll(filtro).then(
           productos =>{res.render('search-results', {productos: productos})}
       )
       
    }   
}
module.exports = controller; 