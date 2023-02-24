const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

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
        res.render('users/profile');
    }
};

module.exports = usersController; 