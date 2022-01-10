const Property = require('../models/propertyModel');
const AsyncErrorHandler = require('../middleware/asyncErrorHandler');

// adding a property to DB
const addProperty = AsyncErrorHandler(async (req, res, next) => {
    const { name, description, size } = req.body;
    
    await Property.create({name, description, size});
    const properties = await Property.find();
    res.status(201).json({
        success: true,
        properties
    });
})

// delete property from DB
const deleteProperty = AsyncErrorHandler(async (req, res, next) => {
    const { id } = req.params;
    await Property.findByIdAndDelete(id);
    const properties = await Property.find();
    
    res.status(200).json({
        success: true,
        properties
    });
})

// get all properties
const getAllProperties = AsyncErrorHandler(async(req, res, next) => {
    const properties = await Property.find();
    res.status(200).json({
        success: true,
        properties
    })
})

module.exports = {
    addProperty,
    deleteProperty,
    getAllProperties
}