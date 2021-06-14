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
        
    });

    Comentario.associate = (db) => {
        Comentario.belongsTo(db.Usuario,{
            as:'usuario',
            foreignKey:'usuario_id'
        });

        Comentario.belongsTo(db.Producto,{
            as:'producto',
            foreignKey:'producto_id'
        })

    }
    return Comentario;
}