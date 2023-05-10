const { validationResult } = require('express-validator');
const {Product, Image, ProductBrands, ProductCategories} = require('../database/models');

const productsController = {
  products: (req, res) => {  
    Product.findAll(
      {
        include: ['images', 'brands']
      }
    )
      .then( products => {
        return res.render('products/products', {products});
      });
    },

  productDetail: (req, res) => {
    Product.findByPk(req.params.id, 
      {
        include: ['images']
      })
      .then(products => {
        return res.render('products/productDetail', {products});
      })
  },

  productCart: (req, res) => {
    Product.findAll(
    {
      include: ['images']
    }
    )
      .then(products => {
        res.render('products/cart', {products});
      })
  },
  
  create: async(req, res) => {
    try {
      const brands = await ProductBrands.findAll()
      const categories = await ProductCategories.findAll()
      res.render('products/createProduct', {brands, categories});
    } catch (error) {
      console.log(error);
    }
    },

  store: async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('products/createProduct', {
        errors: errors.mapped(), 
        old: req.body
      });
    }
    
    try {
      
      const newProduct = await Product.create({
      name: req.body.productNameCreate,
      description: req.body.productDescriptionCreate,
      size: req.body.productSizeCreate,
      price: req.body.price,
      price_with_no_discount: req.body.priceWithNoDiscount,
      category_id: req.body.productCategoryIdCreate,
      brand_id: req.body.productBrandIdCreate
      })
      
      const files = (req.files).map(file => ({  
      name: file.filename,
      product_id: newProduct.id
    }));
    await Image.bulkCreate(files)
    
    res.redirect('/products');
    
  } catch (error) {
    console.log(error);
  }
},

  edit: async(req, res) => {
    try {
      const brands = await ProductBrands.findAll()
      const categories = await ProductCategories.findAll()
      Product.findByPk(req.params.id, 
        {
          include: ['images', 'brands', 'categories']
        })
        .then(products => {
          return res.render('products/editProduct', {products, brands, categories});
        })
      
    } catch (error) {
      console.log(error);
    }
  },
  
  update: async(req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('products/editProduct', {
        errors: errors.mapped(), 
        old: req.body
      });
    }

    try {
      let productId = req.params.id;
      console.log(productId);
      
      await Product.update({
        name: req.body.productNameEdit,
        description: req.body.productDescriptionEdit,
        size: req.body.productSizeEdit,
        price: req.body.price,
        price_with_no_discount: req.body.priceWithNoDiscount,
        category_id: req.body.productCategoryEdit,
        brand_id: req.body.productBrandEdit
      },
      {
        where: {id: productId}
      })
      let newProduct = await Product.findByPk(productId)
      console.log(newProduct);

      if (req.files.value) {
      const files = (req.files).map(file => ({  
        name: file.filename,
        product_id: newProduct.id
      }));
      let imageDestroy = await Image.destroy({
        where: {
          product_id: productId
        }
      })
      await Image.bulkCreate(files)
    };
      
      res.redirect('/products')
    } catch (error) {
      console.log(error);
    }
  },

  deleteProduct: (req, res) => {
    Product.findByPk(req.params.id, 
      {
        include: ['images', 'brands', 'categories']
      })
      .then(products => {
        return res.render('products/deleteProduct', {
          products,
          title: 'Eliminar producto'});
      });
    },

destroyProduct: async(req, res) => {
  try {
    let productId = req.params.id;
    console.log(productId);
    let imageDestroy = await Image.destroy({
      where: {product_id: productId},
      force: true
    })
    console.log(imageDestroy);
    let deletedProduct = await Product.destroy({
      where: {id: productId}, 
      force: true
    });
      console.log(deletedProduct);
      return res.redirect('/products');
      
    } catch (error) {
      console.log(error);
    };
  }
};

module.exports = productsController;
