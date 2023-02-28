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
    let mimetype = file.mimetype;
        if (mimetype !== 'image/png' || mimetype !== 'image/jpg' || mimetype !== 'image/gif' || mimetype !== 'image/jpeg' || mimetype !== 'image/avif') {
            return cb(new Error('Sólo puedes subir imágenes'), false);
        }
        callback(null, true);
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