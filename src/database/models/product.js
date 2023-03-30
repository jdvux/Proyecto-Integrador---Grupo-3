module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
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
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        images: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        size: {
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        price: {
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        discount_percentage: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        brand_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'products'
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        Product.belongsToMany(models.User, {
            as: "users",
            through: 'users-products',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        });
    }

    return Product
};