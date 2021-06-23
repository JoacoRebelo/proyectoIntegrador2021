const db = require('../database/models');
//bcrypt se usa para encriptar la contrasena
const bcrypt = require('bcryptjs');

const controller = {
    //renderisamos la vista
    register: (req, res)=>{
        res.render('register')
    } ,
    
    //creamos el usuario
    registerCreateUser: (req, res) => {
        // primero creamos una variable donde encriptamos la contrasena
        let passEncriptada = bcrypt.hashSync(req.body.pass);
        let minLength = 3;
        let errors = {}
        //comprobamos que la contrasena tenga al menos 3 caracteres
        if (req.body.pass.length < minLength) {
            errors.message = "La contraseña debe contener mínimo 3 caracteres";
            res.locals.errors = errors;
            return res.render ('register');
        }
        //chequeamos que no exista otro usuario con el mismo mail
        if (req.body.email == db.Usuario.findOne(req.body.email)) {
            errors.message = "El mail ya pertenece a un usuario";
            res.locals.errors = errors;
            return res.render ('register');
        } 
        //si todo lo que verificamos esta bien crea el usuario nuevo con la contrasena encriptada
        else{
             db.Usuario.create({
            name: req.body.name,
            pass: passEncriptada,
            email: req.body.email,
            url: req.file.filename,
            date: req.body.date
        })
        //crea la session con lo que subio recien el usuario
        .then(resultado => {
            req.session.resultado = {
                id: resultado.id,
                name: resultado.name,
                url: resultado.url
            };
            res.redirect('/profile/' + resultado.id);
        }).catch(error => {
            console.log(error);
        })
        }
       
    }
}
module.exports = controller; 