const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { urlencoded } = require('express');

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
                req.session.resultado = {
                    id: resultado.id,
                    name: resultado.name,
                    url: resultado.url
                };
                if(req.body.remember){
                    res.cookie('userId', resultado.id, { maxAge: 1000 * 60 * 50 });
                }
                res.redirect('/');
            } else {
                res.render('login', {error: 'Email o contraseña incorrecta'});
            }
        
        }).catch(error => {
            console.log(error);
        })
    }   
}
module.exports = controller; 