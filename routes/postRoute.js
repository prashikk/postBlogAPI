//routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authenticateUser = require('../middleware/authMiddleware');
const authorizeAdmin = require('../middleware/authorizeMiddleware');

// Search posts by tags
router.get('/posts/search', postController.searchPostsByTags);

// Filter posts by date range, author, or tags
router.get('/posts/filter', postController.filterPosts);

// Protected routes requiring authentication
router.get('/posts', authenticateUser, postController.getAllPosts);

// Protected route requiring admin access
router.delete('/posts/:postId', authenticateUser, authorizeAdmin, postController.deletePost);

// Route for creating a post
router.post('/posts', authenticateUser, postController.createPost);

module.exports = router;
