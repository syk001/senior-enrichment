'use strict';

var Sequelize = require('sequelize')
var db = require('../index.js')


var Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = Campus;
