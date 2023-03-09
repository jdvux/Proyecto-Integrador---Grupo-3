const multer  = require('multer');
const path = require('path');
let name;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/users'));
      },

    filename: function (req, file, cb) {
        name = 'usersImages' + Date.now() + path.extname(file.originalname);
        return cb(null, name);
    }
  });

const uploadUsers = multer({ 
  storage,
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|png|gif|avif/;
    const mimetype = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimetype && extname) { 
      return cb(null, true);
    }
    return cb("Sólo puedes subir imágenes válidas");
  }
});

module.exports = uploadUsers;