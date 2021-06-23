const controller = {
    //si se deslogue mata la sesion y las cookies
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userId');
        res.redirect('/');
    } 
}

module.exports = controller;