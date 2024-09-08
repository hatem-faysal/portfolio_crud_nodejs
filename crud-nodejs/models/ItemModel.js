const mongoose = require('mongoose');
// 1- Create Schema
const ItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    description_two: {
      type: String,
      required: false,
    },
    description_three: {
      type: String,
      required: false,
    },
    list: {
      type: Object,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    count: {
      type: Number,
      required: false,
      integer: true
    },
    image: {
      type: String,
      required: false,
    },
    order: {
      type: Number,
      required: false,
      integer: true
    },
    page_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'pages',
        required: [true]
    },
  },
  { timestamps: true }
);

// 2- Create model
const ItemModel = mongoose.model('items', ItemSchema);

module.exports = ItemModel;