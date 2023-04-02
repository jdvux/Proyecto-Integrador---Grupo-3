module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductCategories';
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
        tableName: 'products_categories'
    };

    const ProductCategories = sequelize.define(alias, cols, config); 

    ProductCategories.associate = function (models) {
        ProductCategories.hasMany(models.Product, {
            as: "products",
            foreignKey: 'category_id',
            timestamps: false
        });
    };

    return ProductCategories;
};