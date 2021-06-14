const db = require('../database/models');
const Op = db.Sequelize.Op;


const controller = {
    product: (req, res, next)=>{
        //busca un producto especifico segun el id
        const filtro = {
            include: [
            {association: "comentario", include:'usuario'},
        ]}
        db.Producto.findByPk(req.params.id, filtro).then(productos =>{
            res.render("product", {productos:productos})
            console.log(JSON.stringify(productos, null, 10));
        }).catch(err=>{console.log(err)})        
    },

    comentarios: (req, res, next)=>{
        db.Comentario.create({
            usuario_id: req.session.resultado.id,
            producto_id: req.params.id,
            comentario: req.body.comentario,
        }).then(
            res.redirect("/product/"+ req.params.id),
        )
    }
}
module.exports = controller; 