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
        //Creo el filtro de los más comentados
        let filtroComentados={
            //orden ascendente
            order:[
                ['updatedAt', 'DESC'],
            ],
            include: [
                {association: "comentario"},
                {association:'usuario'}
            ]}
        //creamos un doble filtro en la busqueda de productosß
        db.Producto.findAll(filtro).then(productos=>{
        db.Producto.findAll(filtroViejos).then(
           productosViejos =>{db.Producto.findAll(filtroComentados).then(productosComentados =>
           {res.render('index', {productos: productos, productosViejos:productosViejos, productosComentados: productosComentados})
        })})})
    }  
}

module.exports = controller; 