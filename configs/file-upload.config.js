const multer = require('multer');
const cloudinary = require('cloudinary');
const multerStorageCloudinary = require('multer-storage-cloudinary');

const storage = new multerStorageCloudinary.CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: 'lab-file-upload'
  }
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
