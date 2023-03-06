const { body } = require('express-validator');

const editProductValidations = [
    body("productNameEdit")
        .isLength({ min: 2 }).withMessage("El nombre debe tener al menos dos caracteres"),
    
    body("productDescriptionEdit")
        .isLength({ min: 10 }).withMessage("La descripción debe tener al menos 10 caracteres"),

    body("productSizeEdit")
        .isLength({ min: 2, max: 2 }).withMessage("El talle debe contener dos números").bail()
        .isNumeric().withMessage("El talle debe ser ingresado en números"),
    
    body("productCateogryEdit")
        .isLength({ min: 4 }).withMessage("El nombre de la categoría debe tener al menos 4 caracteres").bail()
        .isAlpha().withMessage("La categoría sólo debe contener letras"),
    
    body("productOriginalPriceEdit")
        .isNumeric().withMessage("El precio original debe estar expresado en números").bail()
        .isLength({ min: 5 }).withMessage("El precio original no puede ser menor a 10000"),
        
    body("productDiscountPriceEdit")
        .isNumeric().withMessage("El precio en descuento debe estar expresado en números").bail()
        .isLength({ min: 5 }).withMessage("El precio en descuento no puede ser menor a 10000").bail()
        .custom((productDiscountPriceEdit, { req }) => {
            if (productDiscountPriceEdit >= req.body.productOriginalPriceEdit) {
                throw new Error("El precio en descuento no puede ser mayor o igual al precio original");
            }
            return true;
        })
];

module.exports = editProductValidations;