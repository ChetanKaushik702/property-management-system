const express = require('express');

const app = express();

app.use(express.json());

// routes
const property = require('./routes/propertyRoutes');

app.use('/api/v1/property', property);

module.exports = app;