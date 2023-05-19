const {Product, Image, ProductBrands, ProductCategories} = require('../../database/models');

const productsController = {
  list: (req, res) => {  
    Product.findAll(
      {
        include: ['brands', 'categories'],
        attributes: ['id', 'name', 'description']
      }
    ).then(products => {
        return res.json({ 
            info: {
              count: products.length,
              countByCategory: "",
            },
            results: products 
          });
      });
    },

  detail: (req, res) => {
    Product.findByPk(req.params.id, 
      {
        include: ['images']
      })
      .then(product => {
        return res.json({ product });
      })
  }
};

module.exports = productsController;