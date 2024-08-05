const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const config = require('./config');
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', bookRoutes);

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Could not connect to MongoDB', err);
});

// Start the server
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
