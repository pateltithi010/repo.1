// src/routes/testRoute.js
const express = require('express');
const router = express.Router();

// GET /api/test
router.get('/', (req, res) => {
  res.json({ success: true, message: 'Test route OK' });
});

module.exports = router;