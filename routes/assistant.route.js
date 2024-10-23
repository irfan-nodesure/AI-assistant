const express = require('express');
const assistantController = require('../controllers/assistant.controller');

// Route for assistant controller.
const router = express.Router();

router.post(
  '/ask',
  assistantController.askAssistant,
);

module.exports = router;
