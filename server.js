const express = require('express');
const app = express();
const mysql = require('mysql');
const userrouter = require('./app/router/user.roter')

require('./config/connection')

app.use(express.json());
app.use(userrouter);

app.listen(5001, (err) => {
    console.log('Server is running on port 5001');
})