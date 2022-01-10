const express = require('express');
const { addProperty, deleteProperty, getAllProperties } = require('../controller/propertyController');
const router = express.Router();

router.route('/add').post(addProperty);
router.route('/delete/:id').delete(deleteProperty);
router.route('/get').get(getAllProperties);

module.exports = router;