const User = require('../models').User;
const sequelize = require('sequelize');

module.exports = {
  create(req, res) {
    return User
      .create({
        email: req.body.email,
        tickers: req.body.tickers ? req.body.tickers : ''
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(409).send({
        message: 'Duplicate User',
      }));
  },
  retrieveOrCreate(email) {
    return User
      .findOrCreate({
        where: {
          email: email
        }
      })
      .then(user => user)
      .catch(error => null);
  }
};