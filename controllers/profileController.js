const db = require('../database/models');

const controller = {
    //creo el controlador del perfil
    profile: (req, res, next)=>{
        let asosiaciones={
            //hago las asosiaciones para poder usarlas en la vista
            include: [
                {association: "comentario"},
                {association:'producto', include:'comentario'}
                
            ]
        }
        //busco un usuario con el mismo id en la base de datos
        db.Usuario.findByPk(req.params.id, asosiaciones).then(usuarios =>{
            res.render("profile", {usuarios:usuarios})
        }).catch(err=>{console.log(err)})       
    }}
module.exports = controller; 

