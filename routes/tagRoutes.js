// routes/tagRoutes.js
const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

router.post('/posts/:postId/tags', tagController.addTag);
router.put('/tags/:tagId', tagController.editTag);
router.delete('/tags/:tagId', tagController.deleteTag);

module.exports = router;
