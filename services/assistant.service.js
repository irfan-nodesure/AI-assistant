const OpenAI = require('openai');
const { getProductInfo, checkStock } = require('./product.service');

// Initializing OPEN AI assistant.
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Calling the OPEN AI assistant and sending the prompt and calling the function according to the message requirement.
async function callOpenAIAssistant(message) {
    try {
        const assistant = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: `From the user's message, identify the keywords 'knife', 'smartphone', 'wireless headphones', 'laptop', and 'pen'. If any synonyms or related terms are found for these products, map them back to the specific product names ('knife', 'smartphone', etc.) before passing them as the productName in the function.`,
                },
                {
                    role: 'user',
                    content: message,
                },
            ],
            functions: [
                {
                    name: 'getProductInfo',
                    description: 'Retrieve information about products.',
                    parameters: {
                        type: 'object',
                        properties: {
                            productName: {
                                type: 'string',
                                description: 'Name of the product',
                            },
                        },
                        required: ['productName'],
                    },
                },
                {
                    name: 'checkStock',
                    description: 'Checks if the product is in stock.',
                    parameters: {
                        type: 'object',
                        properties: {
                            productName: {
                                type: 'string',
                                description: 'Name of the product',
                            },
                        },
                        required: ['productName'],
                    },
                }
            ],
            function_call: 'auto',
        });

        const result = assistant.choices[0].message;
        if (result.function_call) {
            const functionName = result.function_call.name;
            const functionArgs = JSON.parse(result.function_call.arguments);

            if (functionName === 'getProductInfo') {
                return getProductInfo(functionArgs.productName);
            } else if (functionName === 'checkStock') {
                return checkStock(functionArgs.productName);
            }
        }

        return result.content;
    } catch (error) {
        console.error('Error with OpenAI API:', error);
        return 'Something went wrong. Please try again later.';
    }
}

module.exports = {
    callOpenAIAssistant,
};
