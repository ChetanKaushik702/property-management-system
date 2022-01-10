const Property = require('../models/propertyModel');
const AsyncErrorHandler = require('../middleware/asyncErrorHandler');

// adding a property to DB
const addProperty = AsyncErrorHandler(async (req, res, next) => {
    const { name, description, size } = req.body;
    // console.log(req.body);
    const property = await Property.create({name, description, size});

    res.status(201).json({
        success: true,
        property
    });
})

// delete property from DB
const deleteProperty = AsyncErrorHandler(async (req, res, next) => {
    const { id } = req.params;

    await Property.findByIdAndDelete(id);

    res.status(200).json({
        success: true
    });
})

module.exports = {
    addProperty,
    deleteProperty
}