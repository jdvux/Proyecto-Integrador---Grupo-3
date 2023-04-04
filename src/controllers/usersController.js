const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const { log } = require('console');

const usersController = {
    registerView: (req, res) => {
        res.render('users/register');
    },

    processRegister: async (req, res) => {
        // let errors = validationResult(req);
        // if (!errors.isEmpty()) {
            // return res.render('users/register', {
                // errors: errors.mapped(), 
                // old: req.body
                // });
                // };

        try {
            const newUser = await User.create({
                name: req.body.nameRegister,
                lastName: req.body.lastNameRegister,
                email: req.body.emailRegister,
                password: hashSync(req.body.passwordRegister, 10),
                type: "user",
                avatar: req.file.filename || "",
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
        // let errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.render('users/login', { 
        //         errors: errors.mapped(), old: req.body 
        //     });
        // };
        
        try {
        let user = User.findbyPk(req.body.emailLogin);
        req.session.userLogged = user;
        if (req.body.remember) {
            res.cookie('userLogged', 
            user,
            { maxAge : 1000 * 60 });
        };
        res.redirect('profile');
        } catch (error) {
            console.log(error);
        }
    },  

    profileView: (req, res) => {
        let user = req.session.userLogged;
        res.render('users/profile', { user });
    },

    profileChanges: async (req, res) => {
        try {
            let user = req.session.userLogged;
            await User.update({
                avatar: req.file.filename || ""
            }, {
                where: {email: user.email}
            });
            res.redirect('profile');
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