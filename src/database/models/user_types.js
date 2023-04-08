module.exports = (sequelize, dataTypes) => {
    let alias = 'UserTypes';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        underscored: true,
        tableName: 'users_types'
    };

    const UserTypes = sequelize.define(alias, cols, config); 

    UserTypes.associate = function (models) {
        UserTypes.hasMany(models.User, {
            as: "users",
            timestamps: true
        });
    };

    return UserTypes;
};