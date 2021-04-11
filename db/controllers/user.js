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
  retrieve(req, res) {
    return User
      .findAll({
        where: {
          email: req.body.email
        },
        rejectOnEmpty: true
      })
      .then(Users => res.status(200).send(Users[0]))
      .catch(error => res.status(404).send({
        message: 'User Not Found',
      }));
  }
};