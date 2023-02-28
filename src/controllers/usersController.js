const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator');

const usersController = {
    registerView: (req, res) => {
        res.render('/register');
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
        "password": req.body.passwordRegister,
        "type": "user",
        "avatar": ""
    };
  
    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
    res.redirect("/login");
    },

    loginView: (req, res) => {
        res.render('/login');
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('users/login', { 
                errors: errors.mapped(), old: req.body 
            });
        }
        
        let user = users.find(user => user.email == req.body.email);
        if (user) {
            req.session.userLogged = user;
            if(req.body.remember) {
                res.cookie(
                    'userLogged',
                    user,
                    {maxAge: 1000 * 60 * 60 * 24 }
                )
            }
            res.redirect('/profile/', { user }) 
        }
    },  

    profileView: (req, res) => {
        let user = req.session.userLogged;
        res.render('/profile/', { user });
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