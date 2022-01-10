const express = require('express');
const { addProperty, deleteProperty } = require('../controller/propertyController');
const router = express.Router();

router.route('/add').post(addProperty);
router.route('/delete/:id').delete(deleteProperty);

module.exports = router;