const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (file.fieldname === "productImagesCreate" || file.fieldname === "productImagesEdit") {
        cb(null, path.join(__dirname, '../../public/images/products'));
      } else if (file.fieldname === "avatar") {
        cb(null, path.join(__dirname, '../../public/images/users'));
      }
    },

    filename: function (req, file, cb) {
      let name;
      if (file.fieldname === "productImagesCreate" || file.fieldname === "productImagesEdit") {
        name = 'productImages' + Date.now() + path.extname(file.originalname);
      } else if (file.fieldname === "avatar") {
        name = 'usersImages' + Date.now() + path.extname(file.originalname);
      }
      return cb(null, name);
    }
  });

const upload = multer({ 
  storage,
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|png|gif|avif/;
    const mimetype = fileTypes.test(file.mimetype);
    if (!mimetype) {
     return cb("Error: Sólo puedes subir imágenes");
    } 
    return cb(null, true);
  }
}).fields([
  {
    name: "avatar",
    maxCount: 1
  },
  {
    name: "productImagesCreate",
    maxCount: 8
  },
  {
    name: "productImagesEdit",
    maxCount: 8
  }
]);

module.exports = upload;