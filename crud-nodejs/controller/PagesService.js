const Page = require('../models/PageModel');
const factory = require('../services/handlersFactory');
//@desc   Get list of Page
//@route  Get /api/v1/Page
//@access Public
exports.getAll = factory.getAll(Page);

//@desc  Get specific Page by id
//@route GET /api/v1/Page/:id
//@access Public
exports.getOne = factory.getOne(Page);

//@desc    store Page
//@route   POST /api/v1/Page
//@access  Private
exports.createOne = factory.createOne(Page);


//@desc   Update specific Page
//@route  Put /api/v1/Page/:id
//@access Private
exports.updateOne = factory.updateOne(Page);

//@desc   Delete specific Page
//@route  DELETE /api/v1/Page/:id
//@access Private
exports.deleteOne = factory.deleteOne(Page);