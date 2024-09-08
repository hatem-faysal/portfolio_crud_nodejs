const {
    check
} = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getOneValidator = [
    check('id').isMongoId().withMessage("Invalid page id format"),
    validatorMiddleware,
];

exports.createOneValidator = [
  check('page_id')
    .notEmpty()
    .withMessage('page must be belong to item')
    .isMongoId()
    .withMessage('Invalid page id format'),
    validatorMiddleware
];

exports.updateOneValidator = [
    check('id').isMongoId().withMessage("Invalid page id format"),
    validatorMiddleware
];

exports.deleteOneValidator = [
    check('id').isMongoId().withMessage("Invalid page id format"),
    validatorMiddleware
];