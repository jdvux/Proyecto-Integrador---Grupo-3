const multer  = require('multer');
const path = require('path');

const storageProductImages = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/products'));
    },

    filename: function (req, file, cb) {
      let name = 'productImages' + Date.now() + path.extname(file.originalname);
      return cb(null, name);
    }
  })

const storageUserImages = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/images/users'));
  },

  filename: function (req, file, cb) {
    let name = 'userImages' + Date.now() + path.extname(file.originalname);
    return cb(null, name);
  }
});

const uploadProductImages = multer({ storage: storageProductImages });
const uploadUserImages = multer({ storage: storageUserImages });

module.exports = uploadProductImages;
module.exports = uploadUserImages;