const express = require('express');
const router = express.Router();
const articlesCtrl = require('../../controllers/articles');

router.post('/', articlesCtrl.create)
router.patch('/update/:id', articlesCtrl.update)
router.get('/allArticles', articlesCtrl.index)
router.delete('/delete/:id', articlesCtrl.deleteArticle)



module.exports = router;