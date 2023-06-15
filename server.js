import express  from 'express';
const app = express();
import userrouter from './app/router/user.roter.js';
import adminrouter from'./app/router/admin.router.js';
// import cors from 'cors';

import './config/connection.js';

app.use(express.json());

// app.use(cors({ credentials: true, origin: true }));

app.use(userrouter);
app.use(adminrouter);

app.all('*', (req, res) => {
    return res.status(404).send("URL not found server.js")
})

app.listen(5001, (err) => {
    console.log('Server is running on port 5001');
})