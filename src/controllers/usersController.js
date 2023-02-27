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
    res.redirect("users/login");
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