const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { giangvienService } = require('../services');

const createGiangvien = catchAsync(async (req, res) => {
  const giangvien = await giangvienService.createGiangvien(req.body);
  res.status(httpStatus.CREATED).send(giangvien);
});

const getGiangviens = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await giangvienService.queryGiangviens(filter, options);
  res.send(result);
});

const getGiangvien = catchAsync(async (req, res) => {
  const giangvien = await giangvienService.getGiangvienById(req.params.id);
  if (!giangvien) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Giangvien not found');
  }
  res.send(giangvien);
});

const updateGiangvien = catchAsync(async (req, res) => {
  const giangvien = await giangvienService.updateGiangvienById(req.params.id, req.body);
  res.send(giangvien);
});

const deleteGiangvien = catchAsync(async (req, res) => {
  await giangvienService.deleteGiangvienById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createGiangvien,
  getGiangviens,
  getGiangvien,
  updateGiangvien,
  deleteGiangvien,
};