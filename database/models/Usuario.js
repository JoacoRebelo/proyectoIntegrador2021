
module.exports = (sequelize, dataTypes) => {

    const Usuario = sequelize.define('Usuario', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, nombre: {
            type: dataTypes.STRING,
            field: "nombre"
        }, pass: {
            type: dataTypes.STRING,
            field: "contrasena"
        },
        email: {
            type: dataTypes.STRING,
            field: "email"
        }
    }, {
        tableName: "usuarios",
        timestamps: false
    });
    Usuario.associate = (db) => {
        Usuario.hasMany(db.Producto,{
            as:'producto',
            foreingKey:('usuario_id')
        })
    }
    Usuario.associate = (db) => {
        Usuario.hasMany(db.Comentario,{
            as:'comentario',
            foreingKey:('usuario_id')
        })
    }
    return Usuario;
}