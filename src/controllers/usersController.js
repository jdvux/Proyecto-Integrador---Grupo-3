const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const {User, UserProduct, UserTypes} = require('../database/models')

const usersController = {
    registerView: (req, res) => {
        res.render('users/register');
    },

    processRegister: async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('users/register', {
                errors: errors.mapped(), 
                old: req.body
                });
                };

        try {
            await User.create({
                name: req.body.nameRegister,
                last_name: req.body.lastNameRegister,
                email: req.body.emailRegister,
                password: bcryptjs.hashSync(req.body.passwordRegister, 10),
                user_type_id: 2,
                avatar: "admin-profile.png",
            });        
            res.redirect('login');
        } catch (error) {
            console.log(error);
        };
    },

    loginView: (req, res) => {
        res.render('users/login');
    },

    processLogin: async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('users/login', { 
                errors: errors.mapped(), old: req.body 
            });
        };
        
        try {
        let user = await User.findOne( {
            where: {email: req.body.emailLogin}
        });

        req.session.userLogged = user;
        if (req.body.remember) {
            res.cookie('userLogged', 
            user,
            { maxAge : 1000 * 60 });
        };
        res.redirect('profile');
        } catch (error) {
            console.log(error);
        };
    },  

    profileView: (req, res) => {
        let user = req.session.userLogged;
        let id = user.id;
        User.findAll({
            where: { id }
        });

        res.render('users/profile', { user });
    },

    profileChanges: async (req, res) => {
        try {
            let user = req.session.userLogged;
            let id = user.id;

            await User.update({
                name: req.body.userName,
                last_name: req.body.userLastName,
                avatar: req.file ? req.file.filename : user.avatar
            }, {
                where: { id }
            });
            
            if (req.body.userLastName) {
                user.last_name = req.body.userLastName;
            };
            
            if (req.body.userName) {
                user.name = req.body.userName;
            };

            if (req.file && req.file.filename) {
                user.avatar = req.file.filename;
            };

            res.redirect('profile');

        } catch (error) {
            console.log(error);
        };
    },

    destroyUser: async(req, res) => {
        try {
            let user = req.session.userLogged;
            let id = user.id;
    
            let deletedUser = await User.destroy({
              where: { id }, 
              force: true
            });

            req.session.destroy();
            res.clearCookie('userLogged');

              return res.json({"mensaje": "se eliminó el usuario"});
            } catch (error) {
              console.log(error);
            };
    },

    processLogout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userLogged');
        return res.redirect('/');
    }
};

module.exports = usersController; 