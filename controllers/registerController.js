const db = require('../database/models');
const bcrypt = require('bcryptjs');

const controller = {
    register: (req, res)=>{
        res.render('register')
    } ,
    
    registerCreateUser: (req, res) => {
        let passEncriptada = bcrypt.hashSync(req.body.pass);
        db.Usuario.create({
            name: req.body.name,
            pass: passEncriptada,
            email: req.body.email,
            url: req.file.filename,
        }).then(usuario => {
            res.redirect('/profile');
        }).catch(error => {
            console.log(error);
        })
    }
}
module.exports = controller; 