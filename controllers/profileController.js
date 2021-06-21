const db = require('../database/models');
const Op = db.Sequelize.Op;

const controller = {
    profile: (req, res, next)=>{
        let filtro={
            include: [
                {association: "comentario"},
                {association:'producto', include:'comentario'}
                
            ]
        }
        db.Usuario.findByPk(req.params.id, filtro).then(usuarios =>{
            res.render("profile", {usuarios:usuarios}),
            console.log(JSON.stringify(usuarios, null, 10));
        }).catch(err=>{console.log(err)})       
    }}
module.exports = controller; 

