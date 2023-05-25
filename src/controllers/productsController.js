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
    const cartProducts = req.session.cartProducts || [];
    let totalPrice = 0;
  
    // Calcular el total sumando los precios de los productos en el carrito
    cartProducts.forEach(product => {
      totalPrice += product.price;
    });
  
    res.render('products/cart', { cartProducts, totalPrice });
  },
  
  buyProducts: (req, res) => {
    // Lógica para realizar la compra (puede ser almacenar en una base de datos, enviar un correo electrónico, etc.)
  
    // Vaciar el carrito después de la compra
    req.session.cartProducts = [];
  
    // Mostrar un mensaje de agradecimiento
    res.send('Gracias por tu compra');
  },
  
  emptyCart: (req, res) => {
    // Vaciar el carrito
    req.session.cartProducts = [];
  
    res.redirect('/products/productCart'); // Redirigir a la página del carrito
  },

  // Agregar un producto al carrito
  addToCart: (req, res) => {
    const productId = req.params.id;
  
    // Buscar el producto por su ID y obtener los detalles, incluyendo las imágenes
    Product.findByPk(productId, { include: ['images'] })
      .then(product => {
        if (!product) {
          // Manejar el caso si el producto no se encuentra
          return res.status(404).send('Producto no encontrado');
        }
  
        // Obtener los productos almacenados en la sesión o inicializar un array vacío
        const cartProducts = req.session.cartProducts || [];
        // Agregar el nuevo producto al array
        cartProducts.push(product);
        
        // Almacenar el array actualizado en la sesión
        req.session.cartProducts = cartProducts;
        
        res.redirect('/products/productCart'); // Redirigir a la página del carrito
      })
      .catch(error => {
        // Manejar cualquier error de búsqueda del producto
        console.log(error);
        res.status(500).send('Error al agregar el producto al carrito');
      });
  },
  
  
  create: async(req, res) => {
    try {
      const brands = await ProductBrands.findAll();
      const categories = await ProductCategories.findAll();
      res.render('products/createProduct', {brands, categories});
    } catch (error) {
      console.log(error);
    }
    },

  store: async (req, res) => {
    const brands = await ProductBrands.findAll();
    const categories = await ProductCategories.findAll();
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('products/createProduct', {
        errors: errors.mapped(), 
        old: req.body,
        categories, 
        brands
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
  
  update: async (req, res) => {
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
  
      await Product.update(
        {
          name: req.body.productNameEdit,
          description: req.body.productDescriptionEdit,
          size: req.body.productSizeEdit,
          price: req.body.price,
          price_with_no_discount: req.body.priceWithNoDiscount,
          category_id: req.body.productCategoryEdit,
          brand_id: req.body.productBrandEdit
        },
        {
          where: { id: productId }
        }
      );
  
      if (req.files && req.files.length > 0) {
        // Eliminar las imágenes existentes
        await Image.destroy({
          where: {
            product_id: productId
          }
        });
  
        // Crear las nuevas imágenes
        const files = req.files.map(file => ({
          name: file.filename,
          product_id: productId
        }));
        await Image.bulkCreate(files);
      }
  
      res.redirect('/products');
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
