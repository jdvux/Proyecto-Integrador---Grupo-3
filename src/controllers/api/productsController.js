const {Product, Image, ProductBrands, ProductCategories} = require('../../database/models');

const productsController = {
  list: (req, res) => {  
    Product.findAll(
      {
        include: ['images', 'brands']
      }
    ).then(products => {
        return res.json({ 
            count: products.length,
            products });
      });
    },

  detail: (req, res) => {
    Product.findByPk(req.params.id, 
      {
        include: ['images']
      })
      .then(products => {
        return res.json({ products });
      })
  }
};

module.exports = productsController;