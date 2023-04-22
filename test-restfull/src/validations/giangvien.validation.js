const Joi = require('joi');

const createGiangvien = {
  body: Joi.object().keys({
    magv: Joi.string().required(),
    hoten: Joi.string().optional(),
    diachi: Joi.string().optional(),
    sodienthoai: Joi.number().optional(),
  }),
};

const getGiangviens = {
  query: Joi.object().keys({
    magv: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getGiangvien = {
  params: Joi.object().keys({
    magv: Joi.string().required(),
  }),
};

const updateGiangvien = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      hoten: Joi.string().optional(),
      diachi: Joi.string().optional(),
      sodienthoai: Joi.number().optional(),
    })
    .min(1),
};

const deleteGiangvien = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createGiangvien,
  getGiangviens,
  getGiangvien,
  updateGiangvien,
  deleteGiangvien,
};