//controllers/postController.js -
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');
const Post = require('../models/post');
const Tag = require('../models/tag');
const { body } = require('express-validator');

// Validation rules
const validateRules = [
    body('title').notEmpty().withMessage('Title is required'),
    body('content').notEmpty().withMessage('Content is required')
  ];


  const createPost = async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Validation passed, continue with post creation logic
    const { title, content } = req.body;

    try {
        // Create a new post
        const post = await Post.create({ title, content });

        // Send the newly created post as a response
        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const searchPostsByTags = async (req, res) => {
    const { tags } = req.query;
  
    try {
      // Find posts by tags
      const posts = await Post.findAll({
        include: [{
          model: Tag,
          where: {
            name: {
              [Op.in]: tags.split(',')
            }
          }
        }]
      });
  
      res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

const filterPosts = async (req, res) => {
  const { startDate, endDate, author, tags } = req.query;
  const whereClause = {};

  if (startDate && endDate) {
    whereClause.createdAt = {
      [Op.between]: [startDate, endDate]
    };
  }

  if (author) {
    whereClause.author = author;
  }

  if (tags) {
    whereClause['$tags.name$'] = {
      [Op.in]: tags.split(',')
    };
  }

  try {
    // Find posts based on filter criteria
    const posts = await Post.findAll({
      where: whereClause,
      include: [{
        model: Tag,
        attributes: [],
        through: { attributes: [] }
      }]
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const getAllPosts = async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.find();

    // Send the posts as a response
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    // If an error occurs, send a 500 Internal Server Error response
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deletePost = async (req, res) => {
  try {
    // Implement logic to delete a post
    const postId = req.params.postId;

    // Example: Delete post from the database using the postId
    await Post.findByIdAndDelete(postId);

    // Send a success response
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    // If an error occurs, send a 500 Internal Server Error response
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
    createPost,
    searchPostsByTags,
    filterPosts,
    getAllPosts,
    deletePost,
  };