const db = require('../database/models');
const Op = db.Sequelize.Op;


const controller = {
    product: (req, res, next)=>{
        db.Producto.findByPk(req.params.id).then(productos =>{
            res.render("product", {productos:productos})
        }).catch(err=>{console.log(err)})        
    },
    comentarios: (req, res, next)=>{
        db.Comentario.create({
            comentario: req.body.comentario
        })
    }
}
module.exports = controller; 