const express = require('express');
const router = express.Router();
const resortsCtrl = require('../../controllers/api/resorts');

// GET to /api/resorts
router.get('/', resortsCtrl.index)

module.exports = router