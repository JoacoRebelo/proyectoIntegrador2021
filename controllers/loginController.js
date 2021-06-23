const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { urlencoded } = require('express');

const controller = {
    login: function(req, res){
        res.render('login')
    },
    //creo el control que valida y loguea el usuario
    loginValidate: (req, res) => {
        const filtroMail = {
            where: {
                email: req.body.email
            }
        }
        //busco en la base de datos uno que tenga el mismo mail
        db.Usuario.findOne(filtroMail).then(resultado => {
            //comparo la contrasena ingresada con la de la base de datos
            if(bcrypt.compareSync(req.body.pass, resultado.pass)){
                //si es correcto creo el usuario
                req.session.resultado = {
                    id: resultado.id,
                    name: resultado.name,
                    url: resultado.url
                };
                //si apreta el boton de remember guarda las cookies por mas tiempo
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