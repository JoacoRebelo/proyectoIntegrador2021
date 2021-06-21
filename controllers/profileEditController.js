const db = require('../database/models');

const controller = {
    edit: function(req, res){
        res.render('profile-edit')
    }, 
    editUsuario: (req, res) => {
        db.Usuario.update({
            name: req.body.name,
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