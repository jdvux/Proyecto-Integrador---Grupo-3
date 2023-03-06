const { body } = require('express-validator');
const { parse } = require('path');

const createProductValidations = [
    body("productNameCreate")
        .isLength({ min: 8 }).withMessage("El nombre debe tener al menos 8 caracteres"),
    
    body("productDescriptionCreate")
        .isLength({ min: 10 }).withMessage("La descripción debe tener al menos 10 caracteres"),
    
    body("productImagesCreate")
        .custom((value, { req }) => {
            if (!(req.files).length || (req.files).length === 0) { throw new Error ("Debes subir al menos una imagen") };
            return true;
        }),

    body("productSizeCreate")
        .isLength({ min: 2, max: 2 }).withMessage("El talle debe contener dos números").bail()
        .isNumeric().withMessage("El talle debe ser ingresado en números"),
        
    body("productCateogryCreate")
        .isLength({ min: 4 }).withMessage("El nombre de la categoría debe tener al menos 4 caracteres").bail()
        .isAlpha().withMessage("La categoría sólo debe contener letras"),
        
    body("productOriginalPriceCreate")
        .notEmpty().withMessage("Debes ingresar el precio del producto").bail()
        .isNumeric().withMessage("El precio original debe estar expresado en números").bail()
        .isLength({ min: 5 }).withMessage("El precio original no puede ser menor a 10000"),
        
    body("productDiscountPriceCreate")
        .isNumeric().withMessage("El precio en descuento debe estar expresado en números").bail()
        .isLength({ min: 5 }).withMessage("El precio en descuento no puede ser menor a 10000").bail()
        .custom((productDiscountPriceCreate, { req }) => {
            if (parseInt(productDiscountPriceCreate) >= parseInt(req.body.productOriginalPriceCreate)) {
                console.log(productDiscountPriceCreate, req.body.productOriginalPriceCreate)
                throw new Error("El precio en descuento no puede ser mayor o igual al precio original");
            };
            return true;
        })
];

module.exports = createProductValidations;