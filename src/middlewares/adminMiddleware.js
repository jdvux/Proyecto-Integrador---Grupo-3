const adminMiddleware = (req, res, next) => {
    if (!req.session.userLogged) {
       return res.redirect('/users/login');
    } else if (req.session.userLogged.user_type_id !== 1) {
        return res.redirect('/');
        }
    next();
};

module.exports = adminMiddleware;