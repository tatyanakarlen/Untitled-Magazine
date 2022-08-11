const express = require('express');
const router = express.Router();
const contributorsCtrl = require('../../controllers/contributors');

router.post('/', contributorsCtrl.create)

module.exports = router;