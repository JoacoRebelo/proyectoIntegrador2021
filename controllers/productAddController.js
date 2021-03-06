const db = require('../database/models');

const controller = {
    add: (req, res) => {
        res.render('product-add')
    }, 
    productAdd:(req,res)=>{
        //agarro los datos del form y lo creo en la base de datos con los nombres del modelo.
        db.Producto.create({
            name: req.body.name,
            usuario_id: req.session.resultado.id,
            descripcionLarga: req.body.descripcionLarga,
            url: req.file.filename,
        }).then(usuario => {
            res.redirect('/');
        }).catch(error => {
            console.log(error);
        })
    },
}
module.exports = controller; 