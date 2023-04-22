const httpStatus = require('http-status');
const { Giangvien } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a giangvien
 * @param {Object} giangvienBody
 * @returns {Promise<Giangvien>}
 */
const createGiangvien = async (giangvienBody) => {
  return Giangvien.create(giangvienBody);
};

/**
 * Query for giangviens
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryGiangviens = async (filter, options) => {
  const giangviens = await Giangvien.paginate(filter, options);
  return giangviens;
};

/**
 * Get giangvien by id
 * @param {ObjectId} id
 * @returns {Promise<Giangvien>}
 */
const getGiangvienById = async (id) => {
  return Giangvien.findById(id);
};

/**
 * Get giangvien by email
 * @param {string} email
 * @returns {Promise<Giangvien>}
 */
const getGiangvienByEmail = async (email) => {
  return Giangvien.findOne({ email });
};

/**
 * Update giangvien by id
 * @param {ObjectId} giangvienId
 * @param {Object} updateBody
 * @returns {Promise<Giangvien>}
 */
const updateGiangvienById = async (giangvienId, updateBody) => {
  const giangvien = await getGiangvienById(giangvienId);
  Object.assign(giangvien, updateBody);
  await giangvien.save();
  return giangvien;
};

/**
 * Delete giangvien by id
 * @param {ObjectId} giangvienId
 * @returns {Promise<Giangvien>}
 */
const deleteGiangvienById = async (giangvienId) => {
  const giangvien = await getGiangvienById(giangvienId);
  if (!giangvien) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Giangvien not found');
  }
  await giangvien.remove();
  return giangvien;
};

module.exports = {
  createGiangvien,
  queryGiangviens,
  getGiangvienById,
  getGiangvienByEmail,
  updateGiangvienById,
  deleteGiangvienById,
};
