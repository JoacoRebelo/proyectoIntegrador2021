const db = require('../database/models');
const bcrypt = require('bcryptjs');

const controller = {
    register: (req, res)=>{
        res.render('register')
    } ,
    
    registerCreateUser: (req, res) => {
        let passEncriptada = bcrypt.hashSync(req.body.pass);
        let minLength = 3;
        let errors = {}
        if (req.body.pass.length < minLength) {
            errors.message = "La contraseña debe contener mínimo 3 caracteres";
            res.locals.errors = errors;
            return res.render ('register');
        } else{
             db.Usuario.create({
            name: req.body.name,
            pass: passEncriptada,
            email: req.body.email,
            url: req.file.filename,
            date: req.body.date
        })
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