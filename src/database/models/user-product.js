module.exports = (sequelize, dataTypes) => {
    let alias = 'UserProduct';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        // product_id: {
        //     type: dataTypes.INTEGER(11).UNSIGNED,
        //     allowNull: false
        // }
    };

    let config = {
        timestamps: false,
        underscored: true,
        tableName: 'users-product'
    };

    const UserProduct = sequelize.define(alias, cols, config); 

    // UserProduct.associate = function (models) {
    //     UserProduct.hasMany(models.Product, {
    //         as: "UserProduct",
    //         foreignKey: 'product_id',
    //         otherKey: 'user_id',
    //         timestamps: false
    //     });
    // };

    return UserProduct;
};