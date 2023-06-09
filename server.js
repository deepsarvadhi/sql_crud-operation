const express = require('express');
const app = express();
const mysql = require('mysql');
const userrouter = require('./app/router/user.roter');
const adminrouter = require('./app/router/admin.router');

require('./config/connection');

app.use(express.json());
app.use(userrouter);
app.use(adminrouter);

app.listen(5001, (err) => {
    console.log('Server is running on port 5001');
})