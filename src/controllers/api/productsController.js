const { Association } = require('sequelize');
const {Product, Image, ProductBrands, ProductCategories} = require('../../database/models');

const productsController = {
  list: (req, res) => {  
    Product.findAll(
      {
        include: ['categories'],
        attributes: ['id', 'name', 'description']
      }
    ).then(products => {
      const modifiedProducts = products.map(product => {
        return {
            ...product.toJSON(),
            details: 'http://localhost:3003/api/products/' + product.id // Aquí puedes asignar el valor que desees para la propiedad "details"
        };
    });
        return res.json({ 
            info: {
              count: modifiedProducts.length,
              countByCategory: {
              },
            },
            results: modifiedProducts 
          });
      });
    },

  detail: (req, res) => {
    Product.findByPk(req.params.id, 
      {
        include: [{
          association: 'images',
          attributes: ["name"]
        }]
      })
      .then(product => {
        return res.json({ 
          id: product.id,
          name: product.name,
          description: product.description,
          size: product.size,
          price: product.price,
          price_with_no_discount: product.price_with_no_discount,
          category_id: product.category_id,
          brand_id: product.brand_id,
          image: "http://localhost:3003/images/products/" + product.images[1].name
        });
      });
  }
};

module.exports = productsController;