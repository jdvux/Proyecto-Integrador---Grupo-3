const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); 

const usersController = {

    registerView: (req, res) => {
        res.render('users/register');
    },

    processRegister: (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
           return res.render('users/register', { 
            errors: errors.mapped(), old: req.body 
        });

        } else {
            res.render('users/login');
        };
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

        } else {
            res.render('users/profile')   
        }

    },

    profileView: (req, res) => {
        let id = req.params.id;
        let user = users.find(user => user.id === id);
    
        res.render('users/profile', {user});
    },

    profileChanges: (req, res) => {

    }
};

module.exports = usersController; 