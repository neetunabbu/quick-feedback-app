const express = require('express');
const router = express.Router();

const feedbackRoutes = require('./feedbackRoutes');

// Register all route modules here
router.use('/feedback', feedbackRoutes); // /api/feedback

module.exports = router;
