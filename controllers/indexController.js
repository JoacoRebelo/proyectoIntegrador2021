const zapatillas = require('../data/zapatillas')

const controller = {
    index: function(req, res){
        res.render('index', {
            zapatillas: zapatillas
        })
    }   
}
module.exports = controller; 