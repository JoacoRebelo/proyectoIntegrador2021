module.exports = (sequelize, dataTypes) => {

    const Comentario = sequelize.define('Comentario', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, name: {
            type: dataTypes.STRING,
            field: "nombre"
        }, usuario_id: {
            type: dataTypes.INTEGER,
            field: "usuario_id"
        },
        producto_id: {
            type: dataTypes.INTEGER,
            field: "producto_id"
        },
        comentario: {
            type: dataTypes.STRING,
            field: "comentario"
        }
    }, {
        tableName: "comentarios",
        timestamps: false
    });

    return Comentario;
}