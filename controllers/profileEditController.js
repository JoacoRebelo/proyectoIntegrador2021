const db = require('../database/models');
const bcrypt = require('bcryptjs');

const controller = {
    edit: (req, res) => {
        res.render('profile-edit')
    }, 
    //controlador para editar el usuario
    editUsuario: (req, res) => {
        //encripto la contrasena nueva
        let passEncriptada = bcrypt.hashSync(req.body.pass);
        //con el .update actualizamos el usuario
        db.Usuario.update({
            name: req.body.name,
            email: req.body.email,
            url: req.file.filename,
            pass: passEncriptada,
            date: req.body.date
        },{
            //el where se usa para que mysql sepa donde hacer el update
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.redirect('/profile/' + req.body.id);
        }).catch(error => {
            console.log(error);
        });
    }  
    
}
module.exports = controller; 