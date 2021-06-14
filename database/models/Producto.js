module.exports = (sequelize, dataTypes) => {

    const Producto = sequelize.define('Producto', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, name: {
            type: dataTypes.STRING,
            field: "nombre"
        }, 
        usuario_id: {
            type: dataTypes.INTEGER,
        }, descripcionLarga: {
            type: dataTypes.STRING,
            field: "descripcionLarga"
        }, url: {
            type: dataTypes.STRING,
            field: "url"
        },
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