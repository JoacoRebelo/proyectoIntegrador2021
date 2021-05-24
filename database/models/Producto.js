module.exports = (sequelize, dataTypes) => {

    const Producto = sequelize.define('Producto', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, name: {
            type: dataTypes.STRING,
            field: "nombre"
        }, url: {
            type: dataTypes.STRING,
            field: "url"
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            field: "usuario_id"
        }, descripcionLarga: {
            type: dataTypes.STRING,
            field: "descripcionLarga"
        },
    }, {
        tableName: "productos",
        timestamps: false
    });

    return Producto;
}