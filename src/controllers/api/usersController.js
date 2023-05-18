const {User, UserProduct, UserTypes} = require('../../database/models');

const usersController = {
    list: (req, res) => {
        User.findAll().then(users => {
              return res.json({
                count: users.length,
                users
             });
            });
    },

    detail: (req, res) => {
        let id = req.params.id;
        User.findOne({
            where: { id }
        }).then(user => {
            res.json({
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                avatar: "../../public/images/" + user.avatar,
            });
        });
    }
};

module.exports = usersController;