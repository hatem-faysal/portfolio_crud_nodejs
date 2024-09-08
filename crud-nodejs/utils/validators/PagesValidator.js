const {
    check
} = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getOneValidator = [
    check('id').isMongoId().withMessage("Invalid page id format"),
    validatorMiddleware,
];

exports.createOneValidator = [
    check('name')
    .notEmpty()
    .withMessage('name required')
    .isLength({
        min: 3
    })
    .withMessage('Too short name')
    .isLength({
        max: 200
    })
    .withMessage('Too long name'),
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