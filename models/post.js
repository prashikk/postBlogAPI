// models/post.js
const Sequelize = require('sequelize');
const sequelize = require('../controllers/database');

const Post = sequelize.define('post', {
  title: Sequelize.STRING,
  content: Sequelize.TEXT
});

module.exports = Post;
