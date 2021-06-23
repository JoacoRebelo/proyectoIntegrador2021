const db = require('../database/models');
const Op = db.Sequelize.Op;

const controller = {
    //creamos el controlador de busqueda
    results: function(req, res){
        //creamos un filtro donde busque 
        let filtro = {where: {descripcionLarga:{[Op.like]:'%'+ req.query.search + '%'}},
        //creamos la asosiacion para poder usar los datos en la vista
        include: [
            {association: "comentario", include:'usuario'},
            {association:'usuario'}
        ]};
        //buscamos todos los productos que cumplan con el filtrp
        db.Producto.findAll(filtro).then(
           productos =>{res.render('search-results', {productos: productos})
        })
    }  
}
module.exports = controller; 