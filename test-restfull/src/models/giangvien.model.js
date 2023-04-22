const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const giangvienSchema = mongoose.Schema(
  {
    magv: {
      type: String,
      required: true,
      trim: true,
    },
    hoten: {
      type: String,
    },
    diachi: {
      type: String,
    },
    sodienthoai: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
giangvienSchema.plugin(toJSON);
giangvienSchema.plugin(paginate);

/**
 * @typedef Giangvien
 */
const Giangvien = mongoose.model('Giangvien', giangvienSchema);

module.exports = Giangvien;
