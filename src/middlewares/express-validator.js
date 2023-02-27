const { body } = require("express-validator");

const userValidations = (req, res, next) => {
    console.log("validating...");
    
    if (req.body.nameRegister) {
        body("nameRegister")
            .isAlpha().withMessage("El nombre sólo puede contener letras").bail()
            .isLength({ min: 2 }).withMessage("El nombre debe tener al menos dos caracteres")
    }

    if (req.body.lastNameRegister) {
        body("lastNameRegister")
            .isAlpha().withMessage("El apellido sólo puede contener letras").bail()
            .isLength({ min: 2 }).withMessage("El apellido debe tener al menos dos caracteres")
    }

    if (req.body.emailRegister) {
        body("emailRegister")
        .notEmpty().withMessage("Debes escribir tu correo electrónico").bail()
        .isEmail().withMessage("El del correo formato debe ser correo@correo.xxx")
    }
    
    if (req.body.passwordRegister) {
        body("passwordRegister")
            .isLength({ min: 8 }).withMessage("La contraseña debe contener al menos 8 caracteres").bail()
            .isAlphanumeric().withMessage("La contraseña debe contener al menos una letra y un número")
    }

    if (req.body.passwordLogin) {
        body("passwordLogin")
            .isEmail().withMessage("Debes ingresar tu correo electrónico").bail(),

        body("passwordLogin")
            .notEmpty().withMessage("Debes ingresar tu contraseña").bail()
    }
    next();
}

const productValidations = (req, res, next) => {
    console.log("validating...");
    
    if (req.body.productNameCreate) {
        body("productNameCreate")
            .isLength({ min: 8 }).withMessage("El nombre debe tener al menos 8 caracteres")
    }

    if (req.body.productDescriptionCreate) {
        body("productDescriptionCreate")
            .isLength({ min: 10 }).withMessage("La descripción debe tener al menos 10 caracteres")
    }

    if (req.body.productImagesCreate) {
        body("productImagesCreate")
            .custom((productImagesCreate, { req }) => {
                if (req.files.length < 1) return false;
                    return true;
            }).withMessage("Debes subir al menos una imagen").bail()

            .custom((productImagesCreate, { req }) => {
                if (req.files.mimetype === "image/jpeg" || "image/jpeg" || "image/jpg" || "image/png" || "image/gif") 
                { return true } else { return false };
            }).withMessage("Sólo puedes subir imágenes o GIFs")
    }

    if (req.body.productSizeCreate) {    
        body("productSizeCreate")
            .isNumeric().withMessage("El talle debe ser ingresado en números").bail()
            .isLength({ min: 2, max: 2 }).withMessage("El talle debe contener dos números")
    }

    if (req.body.productCateogryCreate) {    
        body("productCateogryCreate")
            .isAlpha().withMessage("La categoría sólo debe contener letras").bail()
            .isLength({ min: 4 }).withMessage("El nombre de la categoría debe tener al menos 4 caracteres")
    }

    if (req.body.productOriginalPriceCreate) {    
        body("productOriginalPriceCreate")
            .notEmpty().withMessage("Debes ingresar el precio del producto").bail()
            .isNumeric().withMessage("El precio original debe estar expresado en números").bail()
            .isLength({ min: 5 }).withMessage("El precio original no puede ser menor a 10000")
    }

    if (req.body.productDiscountPriceCreate) {    
        body("productDiscountPriceCreate")
            .isNumeric().withMessage("El precio en descuento debe estar expresado en números").bail()
            .isLength({ min: 5 }).withMessage("El precio en descuento no puede ser menor a 10000").bail()
            .custom((price, { req }) => {
                if (price >= req.body.oldPrice) { return false };
                return true;
            }).withMessage("El precio en descuento no puede ser mayor o igual al precio original")
    }

    if (req.body.productNameEdit) {
        body("productNameEdit")
            .isLength({ min: 2 }).withMessage("El nombre debe tener al menos dos caracteres")
    }

    if (req.body.productDescriptionEdit) {
        body("productDescriptionEdit")
            .isLength({ min: 10 }).withMessage("La descripción debe tener al menos 10 caracteres")
    }

    if (req.body.productImagesEdit) {
        body("productImagesEdit")
            .custom((productImagesEdit, { req }) => {
                if (req.files.mimetype === "image/jpeg" || "image/jpeg" || "image/jpg" || "image/png" || "image/gif") 
                { return true } else { return false };
            }).withMessage("Sólo puedes subir imágenes o GIFs")
    }

    if (req.body.productSizeEdit) {
        body("productSizeEdit")
            .isNumeric().withMessage("El talle debe ser ingresado en números")
            .isLength({ min: 2, max: 2 }).withMessage("El talle debe contener dos números")
    }

    if (req.body.productCateogryEdit) {
        body("productCateogryEdit")
            .isAlpha().withMessage("La categoría sólo debe contener letras").bail()
            .isLength({ min: 4 }).withMessage("El nombre de la categoría debe tener al menos 4 caracteres")
    }

    if (req.body.productCateogryEdit) {
        body("productCateogryEdit")
            .isNumeric().withMessage("El precio original debe estar expresado en números").bail()
            .isLength({ min: 5 }).withMessage("El precio original no puede ser menor a 10000")
    }

    if (req.body.productDiscountPriceEdit) {    
            body("productDiscountPriceEdit")
            .isNumeric().withMessage("El precio en descuento debe estar expresado en números").bail()
            .isLength({ min: 5 }).withMessage("El precio en descuento no puede ser menor a 10000").bail()
            .custom((price, { req }) => {
                if (price >= req.body.oldPrice) { return false };
                return true;
            }).withMessage("El precio en descuento no puede ser mayor o igual al precio original")  
    }
    next();
}

module.exports = userValidations;
module.exports = productValidations;
