module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductCategories';
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
        tableName: 'product_categories'
    }
    const ProductCategories = sequelize.define(alias, cols, config); 

    ProductCategories.associate = function (models) {
        ProductCategories.hasMany(models.Product, {
            as: "ProductCategories",
            foreignKey: 'product_id',
            timestamps: false
        })
    }

    return ProductCategories
};