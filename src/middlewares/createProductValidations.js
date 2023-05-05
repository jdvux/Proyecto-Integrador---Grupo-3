const { body } = require('express-validator');
const { parse } = require('path');

const createProductValidations = [
    body("productNameCreate")
        .isLength({ min: 5 }).withMessage("El nombre debe tener al menos 5 caracteres"),
    
    body("productDescriptionCreate")
        .isLength({ min: 20 }).withMessage("La descripción debe tener al menos 20 caracteres"),
    
    body("productImagesCreate")
        .custom((value, { req }) => {
            if (!(req.files).length || (req.files).length === 0) { throw new Error ("Debes subir al menos una imagen") };
            return true;
        }),
    
    body("productSizeCreate")
        .isLength({ min: 2, max: 2 }).withMessage("El talle debe contener dos números").bail()
        .isNumeric().withMessage("El talle debe ser ingresado en números"),
        
    body("productCategoryIdCreate")
    .notEmpty().withMessage("Debes escoger una categoría para el producto").bail(),

    body("productBrandIdCreate")
    .notEmpty().withMessage("Debes escoger una marca para el producto").bail(),
        
    body("priceWithNoDiscount")
        .notEmpty().withMessage("Debes ingresar el precio del producto").bail()
        .isNumeric().withMessage("El precio original debe estar expresado en números").bail()
        .isLength({ min: 5 }).withMessage("El precio original no puede ser menor a 10000"),
        
    body("price")
        .isNumeric().withMessage("El precio en descuento debe estar expresado en números").bail()
        .isLength({ min: 5 }).withMessage("El precio en descuento no puede ser menor a 10000").bail()
        .custom((price, { req }) => {
            if (parseInt(price) >= parseInt(req.body.priceWithNoDiscount)) {
                console.log(productDiscountPriceCreate, req.body.priceWithNoDiscount)
                throw new Error("El precio en descuento no puede ser mayor o igual al precio original");
            };
            return true;
        })
];

module.exports = createProductValidations;