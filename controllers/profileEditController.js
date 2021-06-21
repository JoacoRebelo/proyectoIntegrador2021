const db = require('../database/models');
const bcrypt = require('bcryptjs');

const controller = {
    edit: function(req, res){
        res.render('profile-edit')
    }, 
    editUsuario: (req, res) => {
        let passEncriptada = bcrypt.hashSync(req.body.pass);
        db.Usuario.update({
            name: req.body.name,
            email: req.body.email,
            url: req.file.filename,
            pass: passEncriptada,
            date: req.body.date
        },{
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