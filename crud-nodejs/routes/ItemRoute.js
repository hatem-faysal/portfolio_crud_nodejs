const express = require('express');

const router = express.Router({mergeParams: true});
const {
    getOneValidator,
    createOneValidator,
    updateOneValidator,
    deleteOneValidator
} = require("../utils/validators/ItemsValidator");
const {
    getAll,
    createOne,
    getOne,
    updateOne,
    deleteOne,
    uploadBrandImage,
    resizeImage,
    deleteImage
} = require('../controller/ItemsService');




router
    .route('/')
    .get(getAll)
    .post(uploadBrandImage,resizeImage,createOneValidator, createOne)
router
    .route('/:id')
    .get(getOneValidator, getOne)
    .put(uploadBrandImage,resizeImage,updateOneValidator, updateOne)
    .delete(deleteImage,deleteOneValidator,deleteOne);

module.exports = router;