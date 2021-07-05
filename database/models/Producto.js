module.exports = (sequelize, dataTypes) => {

    const Producto = sequelize.define('Producto', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, 
        name: {
            type: dataTypes.STRING,
            field: "nombre"
        }, 
        usuario_id: {
            type: dataTypes.INTEGER,
        }, 
        descripcionLarga: {
            type: dataTypes.STRING,
        }, 
        url: {
            type: dataTypes.STRING,
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        }
    }, {
        tableName: "productos",
        
    });
    Producto.associate = (db) => {
        Producto.belongsTo(db.Usuario,{
            as:'usuario',
            foreignKey:'usuario_id'
        });
        Producto.hasMany(db.Comentario,{ 
            as:'comentario',
            foreignKey:'producto_id'
        })
    };
    return Producto;
}