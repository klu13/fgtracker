const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

// Setting up the main server app
const app = express();

// Prints incoming server requests to the console
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configure the CORs middleware
app.use(cors());

// Require Route
const api = require('./routes/routes');
const axios = require('axios')
// Configure app to use route
app.use('/api', api);

app.get('/achievements', async (req, res) => {
    let achievements = await axios({
        method: 'get',
        url: 'https://fallguysapi.tk/api/achievements'
    })
    if (achievements.status == 200) {
        res.status(200).json({
            body: achievements.data
        })
    } else {
        res.status(500)
    }
})

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

// Configure our server to listen to port 5000
app.listen(process.env.PORT, () => console.log(`Server started on port 5000...`));