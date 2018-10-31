const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const ghWebhookCtrl = require('./gh-webhook.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  // /** GET /api/users - Get list of users */
  // .get(userCtrl.list)

  /** POST /api/users - Create new user */
  .post(validate(paramValidation.team), ghWebhookCtrl.update);

// router.route('/:userId')
//   /** GET /api/users/:userId - Get user */
//   .get(userCtrl.get)

//   /** PUT /api/users/:userId - Update user */
//   .put(validate(paramValidation.updateUser), userCtrl.update)

//   /** DELETE /api/users/:userId - Delete user */
//   .delete(userCtrl.remove);

// /** Load user when API with userId route parameter is hit */
// router.param('userId', userCtrl.load);

router.route('/teams')

  /** GET /api/github/teams - Get list of teams */
  .get(ghWebhookCtrl.list)


module.exports = router;
