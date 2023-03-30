const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const usersController = {
    registerView: (req, res) => {
        res.render('users/register');
    },

    processRegister: (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('users/register', {
                errors: errors.mapped(), 
                old: req.body
            });
        };
        
        let date = Date.now();
        
        let newUser = {
        "id": date.toString(),
        "name": req.body.nameRegister,
        "lastName": req.body.lastNameRegister,
        "email": req.body.emailRegister,
        "password": bcryptjs.hashSync(req.body.passwordRegister, 12),
        "type": "user",
        "avatar": "/admin-profile.png"
    };

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
    res.redirect('login');
    },

    loginView: (req, res) => {
        res.render('users/login');
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('users/login', { 
                errors: errors.mapped(), old: req.body 
            });
        };
        
        let user = users.find(user => user.email == req.body.emailLogin);
        req.session.userLogged = user;
        if (req.body.remember) {
            res.cookie('userLogged', 
            user,
            { maxAge : 1000 * 60 });
        };
        res.redirect('profile');
    },  

    profileView: (req, res) => {
        let user = req.session.userLogged;
        res.render('users/profile', { user });
    },

    profileChanges: (req, res) => {
        let user = req.session.userLogged;
        if (user) {
            if (req.file && req.file.filename) {
            user.avatar = req.file.filename;
            };
        };

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        res.redirect('profile');
    },

    processLogout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userLogged');
        return res.redirect('/');
    }
};

module.exports = usersController; 