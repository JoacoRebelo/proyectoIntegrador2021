const db = require('../database/models');
const Op = db.Sequelize.Op;

const controller = {
    index:(req, res, next)=>{
        //Creo el filtro de los mas nuevos
        let filtro={
            //orden descendiente de los productos
            order:[
                ['createdAt','DESC'],
            ],
            //Creo las relaciones
            include: [
                {association: "comentario"},
                {association:'usuario'}
            ]}
        //Creo el filtro de los mas viejos
        let filtroViejos={
            //orden ascendente
            order:[
                ['createdAt','ASC'],
            ],
            include: [
                {association: "comentario"},
                {association:'usuario'}
            ]}
        //creamos un doble filtro en la busqueda de productosß
        db.Producto.findAll(filtro).then(productos=>{
        db.Producto.findAll(filtroViejos).then(
           productosViejos =>
           {res.render('index', {productos : productos, productosViejos : productosViejos})
        })})
    }  
}

module.exports = controller; 