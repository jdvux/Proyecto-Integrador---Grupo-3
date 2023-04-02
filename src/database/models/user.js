module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        user_type_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    };

    let config = {
        timestamps: false,
        tableName: 'users',
        underscored: true
    };

    const User = sequelize.define(alias, cols, config); 

    // User.associate = function (models) {
    //     User.belongsToMany(models.Product, {
    //         as: "products",
    //         through: 'users-products',
    //         foreignKey: 'user_id',
    //         otherKey: 'product_id',
    //         timestamps: false
    //     });
    // };

    return User;
};