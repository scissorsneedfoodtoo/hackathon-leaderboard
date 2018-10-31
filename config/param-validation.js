const Joi = require('joi');

module.exports = {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/)
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/)
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  },

  // POST /api/github/view
  viewWebhookResponse: {
    body: {
      obj: Joi.object()
    }
  },
  
  // POST /api/github
  team: {
    body: {
      teamName: Joi.string(),
      repository: Joi.string(),
      siteURL: Joi.string(),
      contributors: Joi.array(),
      isOnlineHackathon: Joi.boolean()
    }
  }
};
