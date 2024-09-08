const express = require('express');

const router = express.Router();
const {
    getOneValidator,
    createOneValidator,
    updateOneValidator,
    deleteOneValidator
} = require("../utils/validators/PagesValidator");
const {
    getAll,
    createOne,
    getOne,
    updateOne,
    deleteOne
} = require('../controller/PagesService');





router
    .route('/')
    .get(getAll)
    .post(createOneValidator, createOne)
router
    .route('/:id')
    .get(getOneValidator, getOne)
    .put(updateOneValidator, updateOne)
    .delete(deleteOneValidator, deleteOne);

module.exports = router;