const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/products'));
    },
    filename: function (req, file, cb) {
      const name = 'uploadProduct' + Date.now() + path.extname(file.originalname)

      return cb(null, name);
    }
  })
  
  const upload = multer({ storage: storage });

  module.exports = upload;