const { urlencoded } = require("express");

module.exports = (sequelize, dataTypes) => {

    const Producto = sequelize.define('Producto', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, name: {
            type: dataTypes.STRING,
            field: "nombre"
        }, Usuario: {
            type: dataTypes.STRING,
            field: "usuario_id"
        }, Url: {
            type: dataTypes.STRING,
            field: 'url'
        }
    }, {
        tableName: "productos",
        timestamps: false
    });

    return Usuario;
}