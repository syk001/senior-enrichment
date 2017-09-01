'use strict';

var Sequelize = require('sequelize')
var db = require('../index.js')


const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  }
})

module.exports = Student;

