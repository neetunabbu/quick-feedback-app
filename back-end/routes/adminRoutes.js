// In your backend, this should be correct
const express = require('express');
const router = express.Router();

router.post('/admin-login', (req, res) => {
  const { username, password } = req.body;
  const adminUsername = 'admin';  // Example admin username
  const adminPassword = 'admin123';  // Example admin password

  if (username === adminUsername && password === adminPassword) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false });
  }
});

module.exports = router;
