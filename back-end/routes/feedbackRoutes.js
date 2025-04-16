const express = require('express');
const router = express.Router();
const { saveFeedback, getAllFeedbacks } = require('../controllers/feedbackController');

router.get('/', getAllFeedbacks);
router.post('/', saveFeedback);

module.exports = router;
