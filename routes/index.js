const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Define route for capturing screenshot
router.post('/replyMessage', controller.replyMessage);

module.exports = router;