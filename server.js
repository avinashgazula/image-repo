const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotenv.config({ path: './config/config.env' })

const app = express();
app.use(express.json())

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 5000;

app.listen(5000);
console.log(`Server running in ${process.env.NODE_ENV} environment on port ${PORT}`.blue.bold);