const express = require('express');
const app = express();
const mysql = require('mysql');
const userrouter = require('./app/router/user.roter');
const adminrouter = require('./app/router/admin.router');
const cors = require('cors');

require('./config/connection');

app.use(express.json());

app.use(cors({ credentials: true, origin: true }));

app.use(userrouter);
app.use(adminrouter);

app.all('*', (req, res) => {
    return res.status(404).send("URL not found server.js")
})

app.listen(5001, (err) => {
    console.log('Server is running on port 5001');
})