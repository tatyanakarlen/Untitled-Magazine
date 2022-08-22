const express = require('express');
const router = express.Router();
const articlesCtrl = require('../../controllers/articles');


router.patch('/update/:id', articlesCtrl.update)
router.get('/allArticles', articlesCtrl.index)


router.post('/', articlesCtrl.create)
router.delete('/delete/:id', articlesCtrl.deleteArticle)



module.exports = router;