const db = require('../database/models');
const Op = db.Sequelize.Op;

const controller = {
    profile: (req, res, next)=>{
        let filtro={
            order:[
                ['createdAt','DESC'],
            ],
        }
        db.Producto.findAll(filtro).then(
           productos =>{res.render('profile', {productos: productos})}
       )
    }  
    }
module.exports = controller; 