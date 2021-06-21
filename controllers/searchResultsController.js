const db = require('../database/models');
const Op = db.Sequelize.Op;

const controller = {
    results: function(req, res){
        let filtro = {where: {descripcionLarga:{[Op.like]:'%'+ req.query.search + '%'}},
        include: [
            {association: "comentario", include:'usuario'},
            {association:'usuario'}
        ]};
        db.Producto.findAll(filtro).then(
           productos =>{res.render('search-results', {productos: productos})
           console.log(JSON.stringify(productos, null, 10));}
           
       )
    }  
}
module.exports = controller; 