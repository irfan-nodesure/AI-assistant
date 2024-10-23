# Installation Guide
1. Clone the GitHub Repository and unzip the codebase to your local machine.
2. Install Node.js to your local machine.
3. Open the codebase into VS Code or open terminal in your project directory and run command `npm install`.
4. If you face any issue in installing the node modules, execute `npm install express dotenv nodemon openai`.
5. And then run `npm run dev` to run the application locally.

# Testing Guide
1. Install Postman to make request to the API created in this application.
2. Add url as `http://localhost:3000/api/assistant/ask`, also add a req.body (Body > raw > JSON) which contains a message.
3. Example cURL:
curl --location 'http://localhost:3000/api/assistant/ask' \
--header 'Content-Type: application/json' \
--data '{
    "message": "Do you have some kind of earphone in stock?"
  }'
