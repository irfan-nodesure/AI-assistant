require('dotenv').config();
const express = require('express');
const assistantRoutes = require('./routes/assistant.route');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/assistant', assistantRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
