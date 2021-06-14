
module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, name: {
            type: dataTypes.STRING,
            field: "nombre"
        }, pass: {
            type: dataTypes.STRING,
            field: "contrasena"
        },
        email: {
            type: dataTypes.STRING,
            field: "email"
        },
        url:{
            type:dataTypes.STRING,
            field:'url'
        },
        date: {
            type: dataTypes.DATE,
            field: 'fecha_nac'
        }
    }, {
        tableName: "usuarios",
        
    });
    Usuario.associate = (db) => {
        Usuario.hasMany(db.Producto,{
            as:'producto',
            foreignKey:'usuario_id'
        }),
        Usuario.hasMany(db.Comentario,{
            as:'comentario',
            foreignKey:'usuario_id'
        })
    }

   
    return Usuario;
}