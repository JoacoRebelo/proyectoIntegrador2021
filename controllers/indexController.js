let zapatillas=require("../data/zapatillas")
const controller = {
    index: (req, res) => res.render('index',{zapatillas:zapatillas.list})   
}
module.exports = controller; 