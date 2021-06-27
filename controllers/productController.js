const db = require('../database/models');
const Op = db.Sequelize.Op;


const controller = {
    product: (req, res, next)=>{
        //busca un producto especifico segun el id
        const filtro = {
            include: [
            {association: "comentario", include:'usuario'},
            {association:'usuario'}
        ]}
        db.Producto.findByPk(req.params.id, filtro).then(productos =>{
            res.render("product", {productos : productos})
            console.log(JSON.stringify(productos, null, 10));
           
        }).catch(err=>{console.log(err)})        
    },
    //crea el comentario obteniendo los datos del form
    comentarios: (req, res, next)=>{
        db.Comentario.create({
            usuario_id: req.session.resultado.id,
            producto_id: req.params.id,
            comentario: req.body.comentario,
        }).then(
            res.redirect("/product/"+ req.params.id),
        )
    },

    borrar:(req,res)=>{
        db.Producto.destroy({
            where: {
                id: req.body.id
            },
        }).then(() => {
            res.redirect('/');
        }).catch(err => console.log(err));
    },
    
    borrarComentario:(req,res)=>{
        db.Comentario.destroy({
            where: {
                id: req.body.comentario_id
            },
            
        }).then(() => {
            res.redirect('/product/' + req.params.id);
            
        }).catch(err => console.log(err));
        console.log(req.body.comentario_id)
        
    },
}
module.exports = controller; 