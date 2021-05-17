module.exports = (sequelize, dataTypes) => {

    const Comentario = sequelize.define('Comentario', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, Usuario: {
            type: dataTypes.STRING,
            field: "usuario_id"
        }, Producto: {
            type:dataTypes.STRING,
            field:'producto_id'
        }, Comentario:{
            type: dataTypes.STRING,
            field:"comentario"
        }
    }, {
        tableName: "comentarios",
        timestamps: false
    });

    return Comentario;
}