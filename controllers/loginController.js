const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { urlencoded } = require('express');

const controller = {
    login: (req, res) => {
        res.render('login')
    },
    //creo el control que valida y loguea el usuario
    loginValidate: (req, res) => {
        let errors = {}

        const filtroMail = {
            where: {
                email: req.body.email
            }
        }
        //busco en la base de datos uno que tenga el mismo mail
        db.Usuario.findOne(filtroMail).then(resultado => {
            
            if (resultado) {
                emailExistente = resultado.email
            } else{
                emailExistente = null
            }

            if (emailExistente == null){
                errors.message = "El mail que quiere utilizar no existe";
                res.locals.errors = errors;
                return res.render ('login');
            }
            //comparo la contrasena ingresada con la de la base de datos
            else if(bcrypt.compareSync(req.body.pass, resultado.pass)){
                //si es correcto creo el usuario
                req.session.resultado = {
                    id: resultado.id,
                    name: resultado.name,
                    url: resultado.url
                };
                //si apreta el boton de remember guarda las cookies por mas tiempo
                if(req.body.remember){ 
                    res.cookie('userId', resultado.id, { maxAge: 1000 * 60 * 500 }); 
                }
                res.redirect('/');
            } else {
                errors.message2 = 'Su contraseña es incorrecta',
                res.locals.errors = errors,
                res.render('login')
            }
        }).catch(error => {
            console.log(error);
        })
    }   
}
module.exports = controller; 