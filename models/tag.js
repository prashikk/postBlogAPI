// models/tag.js
const Sequelize = require('sequelize');
const sequelize = require('../controllers/database');

const Tag = sequelize.define('tag', {
  name: Sequelize.STRING
});

module.exports = Tag;