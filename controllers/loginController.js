const db = require('../database/models');
const bcrypt = require('bcryptjs');

const controller = {
    login: function(req, res){
        res.render('login')
    },
    loginValidate: (req, res) => {
        const filtro = {
            where: {
                email: req.body.email
            }
        }

        db.Usuario.findOne(filtro).then(resultado => {
            if(bcrypt.compareSync(req.body.pass, resultado.pass)){
                req.session.mail = resultado.email;
                req.session.nombre = resultado.nombre
                res.redirect('/');
            } else {
                res.redirect('/login')
            }
        
        }).catch(error => {
            console.log(error);
        })
    }   
}
module.exports = controller; 