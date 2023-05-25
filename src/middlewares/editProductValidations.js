const { body } = require('express-validator');

const editProductValidations = [
    body("productNameEdit")
        .isLength({ min: 5 }).withMessage("El nombre debe tener al menos 5 caracteres"),
    
    body("productDescriptionEdit")
        .isLength({ min: 20 }).withMessage("La descripción debe tener al menos 20 caracteres"),

    body("productSizeEdit")
        .isLength({ min: 2, max: 2 }).withMessage("El talle debe contener dos números").bail()
        .isNumeric().withMessage("El talle debe ser ingresado en números"),
    
    body("productCategoryEdit")
        .notEmpty().withMessage("Debes escoger una categoría para el producto").bail(),

    body("productBrandEdit")
        .notEmpty().withMessage("Debes escoger una marca para el producto").bail(),
    
    
        
    body("price")
        .isNumeric().withMessage("El precio en descuento debe estar expresado en números").bail()
        .isLength({ min: 5 }).withMessage("El precio en descuento no puede ser menor a 10000").bail()
        .custom((price, { req }) => {
            if (parseInt(price) >= parseInt(req.body.priceWithNoDiscount)) {
                throw new Error("El precio en descuento no puede ser mayor o igual al precio original");
            }
            return true;
        })
];

module.exports = editProductValidations;