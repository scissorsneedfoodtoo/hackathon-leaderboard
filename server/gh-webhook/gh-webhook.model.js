const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * Team Schema
 */
const TeamSchema = new mongoose.Schema({
  teamName: {
    type: String
  },
  teamRepo: {
    type: String
  },
  siteURL: {
    type: String
  },
  contributors: {
    type: Array
  },
  isOnlineHackathon: {
    type: Boolean
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
TeamSchema.method({
});

/**
 * Statics
 */
TeamSchema.statics = {
  // /**
  //  * Get user
  //  * @param {ObjectId} id - The objectId of user.
  //  * @returns {Promise<User, APIError>}
  //  */
  // get(id) {
  //   return this.findById(id)
  //     .exec()
  //     .then((user) => {
  //       if (user) {
  //         return user;
  //       }
  //       const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
  //       return Promise.reject(err);
  //     });
  // },

  /**
   * List teams in descending order of 'teamName'.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<User[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ teamName: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Team
 */
module.exports = mongoose.model('Team', TeamSchema);
