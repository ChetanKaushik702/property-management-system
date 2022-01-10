const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

// routes
const property = require('./routes/propertyRoutes');

app.use('/api/v1/property', property);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
})

module.exports = app;