// const fs = require('fs');
// const path = require('path');
// const productsFilePath = path.join(__dirname, '../data/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// const { validationResult } = require('express-validator');
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
    
    try {
      
      const newProduct = await Product.create({
      name: req.body.productNameCreate,
      description: req.body.productDescriptionCreate,
      size: req.body.productSizeCreate,
      price: req.body.productOriginalPriceCreate,
      discount_percentage: req.body.productDiscountPercentageCreate,
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
  // let errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.render('products/createProduct', {
  //     errors: errors.mapped(), 
  //     old: req.body
  //   });
  // }
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
    try {
      let productId = req.params.id;
      console.log(productId);
      
      await Product.update({
        name: req.body.productNameEdit,
        description: req.body.productDescriptionEdit,
        size: req.body.productSizeEdit,
        price: req.body.productOriginalPriceEdit,
        discount_percentage: req.body.productDiscountPercentageEdit,
        category_id: req.body.productCategoryEdit,
        brand_id: req.body.productBrandEdit
      },
      {
        where: {id: productId}
      })
      let newProduct = await Product.findByPk(productId)
      console.log(newProduct);
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
      
      res.redirect('/products')
    } catch (error) {
      console.log(error);
    }

    
  
    // let id = req.params.id;
    // let product = products.find(product => product.id === id);
    // let errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.render('products/editProduct', {
    //     product,
    //     errors: errors.mapped(), 
    //     old: req.body
    //   });
    // };

  //   let images = [];

  //   products.forEach(product => {
  //     if (product.id == id) {
  //     product.name = req.body.productNameEdit;
  //     product.description = req.body.productDescriptionEdit;
  //     product.size = req.body.productSizeEdit;
  //     product.category = req.body.productCateogryEdit;
  //     product.originalPrice = req.body.productOriginalPriceEdit;
  //     product.discountPrice = req.body.productDiscountPriceEdit;
  //     if ((req.files).length) {
  //       req.files.forEach(file => {
  //         images.push(file.filename);
  //       });
  //      product.images = images;
  //     };
  //   }
  // });
  
  // fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
  // res.redirect('/products');
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
      })
    // let id = req.params.id;
    // let product = products.find(product => product.id == id);
    
    },
// },

destroyProduct: async(req, res) => {
  try {
    let productId = req.params.id;
    console.log(productId);
    let imageDestroy = await Image.destroy({
      where: {id: productId},
      force: true
    })
    console.log(imageDestroy);
    let deletedProduct = await Product.destroy({
      where: {id: productId}, 
      force: true
    })
      console.log(deletedProduct);
      return res.redirect('/products');
      
    } catch (error) {
      console.log(error);
    }
    
    
    // let newProducts = products.filter(product => product.id !== id); 

    // fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
    // res.redirect('/products');
  }
}

module.exports = productsController;
