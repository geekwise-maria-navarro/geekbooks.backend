const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('dotenv').config();

// const port = process.env.PORT || 5000;
 // bodyparser Middleware
 app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

//database config
const db_url = process.env.MONGODB_URL || require('./keys').mongoURI;

//connect to mongoDB
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

//Use Routes
app.use('/api/user', cors(), require('./routes/api/user'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});