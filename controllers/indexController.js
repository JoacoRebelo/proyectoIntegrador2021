const db = require('../database/models');
const Op = db.Sequelize.Op;

const controller = {
    index:(req, res, next)=>{
        let filtro={
            order:[
                ['createdAt','DESC'],
            ],
        }
        db.Producto.findAll(filtro).then(
           productos =>{res.render('index', {productos: productos})}
       )
    }  
    }

module.exports = controller; 