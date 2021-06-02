const db = require('../database/models');
const Op = db.Sequelize.Op;

const controller = {
    index:(req, res, next)=>{
        let filtro={
            order:[
                ['nombre','DESC'],
            ],
        }
        db.Producto.findAll(filtro).then(
           productos =>{res.render('index', {productos: productos})}
       ).catch(err=>{console.log(err)})
    }  
    }

module.exports = controller; 