const express = require('express');
const router = express.Router();

// Import the admin routes
const adminRoutes = require('./adminRoutes');

// Mount admin routes under /admin
router.use('/admin', adminRoutes);

module.exports = router;
