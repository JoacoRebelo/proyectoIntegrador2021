const zapatillas = require('../data/zapatillas')
const controller = {
    profile: function(req, res){
        res.render('profile', {
            zapatillas: zapatillas
        })
    }   
}
module.exports = controller; 