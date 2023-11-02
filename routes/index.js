const express = require('express');
const router = express.Router();

const { index } = require('../controllers/index');

router.get('^\/$|index(.html)?', index);

module.exports = router;