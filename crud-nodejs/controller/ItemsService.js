const Item = require('../models/ItemModel');
const factory = require('../services/handlersFactory');
const { uploadSingleImage  } = require('../middlewares/uploadImageMiddleware');
const asyncHandler = require('express-async-handler');
const { v4: uuidv4 } = require('uuid');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


// Upload single image
exports.uploadBrandImage = uploadSingleImage('image');
exports.resizeImage = asyncHandler(async (req, res, next) => {
  const filename = `item-${uuidv4()}-${Date.now()}.jpeg`;
  
  await sharp(req.file.buffer)
    .resize(600, 600).toFormat('jpeg').jpeg({ quality: 95 }).toFile(`uploads/items/${filename}`);

   if(req.params.id){
      const data = await Item.findById(req.params.id);
      if(data.image){
        fs.unlink(path.join('uploads/items/', data.image), (err) => {
          if (err) {
            console.error(`Error deleting ${data.image}: ${err}`);
          } else {
            console.log(`Deleted ${data.image} successfully.`);
          }
        });  
      }
   }
  // Save image into our db 
   req.body.image = filename;
  next();
});

// Image processing
exports.deleteImage = asyncHandler(async (req, res, next) => {
   if(req.params.id){
      const data = await Item.findById(req.params.id);
      if(data.image){
        fs.unlink(path.join('uploads/items/', data.image), (err) => {
          if (err) {
            console.error(`Error deleting ${data.image}: ${err}`);
          } else {
            console.log(`Deleted ${data.image} successfully.`);
          }
        });  
      }
   }
  next();
});
// Image processing


//@desc   Get list of Item
//@route  Get /api/v1/Item
//@access Public
exports.getAll = factory.getAll(Item);

//@desc  Get specific Item by id
//@route GET /api/v1/Item/:id
//@access Public
exports.getOne = factory.getOne(Item);

//@desc    store Item
//@route   POST /api/v1/Item
//@access  Private
exports.createOne = factory.createOne(Item);


//@desc   Update specific Item
//@route  Put /api/v1/Item/:id
//@access Private
exports.updateOne = factory.updateOne(Item);

//@desc   Delete specific Item
//@route  DELETE /api/v1/Item/:id
//@access Private
exports.deleteOne = factory.deleteOne(Item);