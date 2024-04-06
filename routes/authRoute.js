//routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for logging in as an admin
router.post('/login/admin', authController.loginAdmin);

// Route for logging in as another user
router.post('/login/user', authController.loginUser);

module.exports = router;
