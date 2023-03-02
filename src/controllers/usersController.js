const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
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
        "avatar": ""
    };

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
    res.redirect('users/login');
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
        }
        
        let user = users.find(user => user.email == req.body.email);
        let encryptedPassword = user.password;
        let comparePasswords = bcryptjs.compareSync(req.body.passwordLogin, encryptedPassword);
        
        if (comparePasswords) {
            delete user.password;
            req.session.userLogged = user;
            if (req.body.remember) {
                res.cookie('userLogged', 
                req.body.email,
                { maxAge : 1000 * 60 * 60 * 24 });
            }
        return res.redirect('users/profile', { user }) 
        }
    },  

    profileView: (req, res) => {
        let user = req.session.userLogged;
        res.render('users/profile', { user });
    },

    profileChanges: (req, res) => {

    },

    processLogout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userLogged');
        return res.redirect('/');
    }
};

module.exports = usersController; 