module.exports = (sequelize, dataTypes) => {
    let alias = 'UserTypes';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        underscored: true,
        tableName: 'user_types'
    }
    const UserTypes = sequelize.define(alias, cols, config); 

    UserTypes.associate = function (models) {
        UserTypes.hasMany(models.User, {
            as: "UserTypes",
            foreignKey: 'user_id',
            timestamps: false
        })
    }

    return UserTypes
};