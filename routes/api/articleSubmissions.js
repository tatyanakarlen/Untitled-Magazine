const express = require('express');
const router = express.Router();
const articlesCtrl = require('../../controllers/articles');

router.post('/', articlesCtrl.create)
router.get('/allArticles', articlesCtrl.index)


module.exports = router;