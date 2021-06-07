const db = require('../database/models');

const controller = {
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userId');
        res.redirect('/');
    } 
}

module.exports = controller;