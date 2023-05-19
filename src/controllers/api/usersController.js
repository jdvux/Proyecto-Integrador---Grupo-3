const {User, UserProduct, UserTypes} = require('../../database/models');

const usersController = {
    list: (req, res) => {
        User.findAll({
            attributes: ['id', 'name', 'last_name', 'email']
        }).then(users => {
              return res.json({
                info: {
                    count: users.length
                },
                results: users
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
                avatar: "http://localhost:3003/images/users/" + user.avatar,
            });
        });
    }
};

module.exports = usersController;