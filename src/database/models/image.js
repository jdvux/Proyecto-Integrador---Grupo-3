module.exports = (sequelize, dataTypes) => {
    let alias = 'Image';
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
        product_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        }
    };
    
    let config = {
        timestamps: true,
        tableName: 'images',
        underscored: true,
        
    };

    const Image = sequelize.define(alias, cols, config); 

    Image.associate = function (models) {
        Image.belongsTo(models.Product, {
            as: "products",
            foreignKey: 'product_id',
            timestamps: true
        });
    };

    return Image;
};