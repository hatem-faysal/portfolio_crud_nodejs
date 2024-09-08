const mongoose = require('mongoose');
// 1- Create Schema
const pageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parent_id: {
      type: Number,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// 2- Create model
const PageModel = mongoose.model('pages', pageSchema);

module.exports = PageModel;