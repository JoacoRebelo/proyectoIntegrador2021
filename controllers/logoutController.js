const controller = {
    //si se deslogue mata la sesion y las cookies
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userId'); //si sacamos esto no se elimina la cookie (si se cierra la sesión)
        res.redirect('/');
    } 
}

module.exports = controller;