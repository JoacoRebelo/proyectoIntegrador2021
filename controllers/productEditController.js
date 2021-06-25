const db = require('../database/models');

const controller = {
    editar: (req, res) => {
        //busco un producto con el mismo id que en la ruta
        db.Producto.findByPk(req.params.id).then(productos =>{
            res.render("product-edit", {productos : productos})
        }).catch(err=>{console.log(err)})  
    },
    postearEdit:(req,res)=>{
        //hago un update del producto con los campos del form
        db.Producto.update({
            name: req.body.name,
            descripcionLarga: req.body.descripcionLarga,
            url: req.file.filename,
        },
        //con el where le digo en que producto hacer el update
        {
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