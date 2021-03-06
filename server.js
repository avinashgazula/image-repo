const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotenv.config({ path: './config/config.env' })

const images = require('./routes/images');
const users = require('./routes/users')
const connectDB = require('./config/db')

const app = express();
app.use(express.json())

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var cors = require('cors')

app.use(cors()) 

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
}

connectDB();

app.use('/api/files', images);
app.use('/api/users', users)

const PORT = process.env.PORT || 5000;

app.listen(5000);
console.log(`Server running in ${process.env.NODE_ENV} environment on port ${PORT}`.blue.bold);