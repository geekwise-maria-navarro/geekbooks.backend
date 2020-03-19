const express = require('express');
const cores = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cores());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});