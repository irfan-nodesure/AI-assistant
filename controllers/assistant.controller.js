const assistantService = require('../services/assistant.service');

// Creating a controller which will further call the callOpenAIAssistant and send the messager as parameter in it.
const askAssistant = async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({
      error: 'Message is required.',
    });
  }

  try {
    const response = await assistantService.callOpenAIAssistant(userMessage);
    res.status(200).json({
      response: response,
    });
  } catch (error) {
    console.error('Error in assistant controller:', error);
    res.status(500).json({
      error: 'An internal error occurred.',
    });
  }
};

module.exports = {
  askAssistant,
};
