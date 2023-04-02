module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
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
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        size: {
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
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
        timestamps: true,
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    };

    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        Product.hasMany(models.Image, {
            as: 'images',
            foreignKey: 'product_id',
            timestamps: true
        })

        Product.belongsTo(models.ProductBrands, {
            as: 'brands',
            foreignKey: 'brand_id',
            timestamps: true
        })

        Product.belongsTo(models.ProductCategories, {
            as: 'categories',
            foreignKey: 'category_id',
            timestamps: true
        })
    }

        //     Product.belongsToMany(models.User, {
    //         as: "users",
    //         through: 'users-products',
    //         foreignKey: 'product_id',
    //         otherKey: 'user_id',
    //         timestamps: false
    //     });
    // };

    return Product;
};