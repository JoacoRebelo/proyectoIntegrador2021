const zapatillas = require('../data/zapatillas')

const controller = {
    id: function(req, res){
        for (let index = 0; index < zapatillas.length; index++) {
            if (req.params.id == zapatillas[index].id) {
                 res.render('product', {
                    zapatillas: zapatillas[index]
                })
        }}
    } 
}
module.exports = controller; 