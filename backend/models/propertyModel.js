const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter property name'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please enter property description'],
        trim: true
    },
    size: {
        type: Number,
        required: [true, 'Please enter property size'],
        trim: true
    }
});

module.exports = mongoose.model('property', propertySchema);