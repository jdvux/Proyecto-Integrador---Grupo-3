module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductBrands';
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
        tableName: 'product_brands'
    };

    const ProductBrands = sequelize.define(alias, cols, config); 

    ProductBrands.associate = function (models) {
        ProductBrands.hasMany(models.Product, {
            as: "brands",
            foreignKey: 'brand_id',
            timestamps: false
        });
    };

    return ProductBrands;
};