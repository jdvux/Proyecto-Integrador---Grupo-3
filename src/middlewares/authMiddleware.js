const session = require('express-session');

const authMiddleware = (req, res, next) => {
    if (req.session.userLogged) {
       return res.redirect('/profile/:name');
    }
    next();
};

module.exports = authMiddleware;