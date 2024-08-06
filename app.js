const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const config = require('./config');
const app = express();

app.use(bodyParser.json());

app.use('/api', bookRoutes);

mongoose.connect(config.mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Could not connect to MongoDB', err);
    });

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});