const Article = require('../models/article');
const Contributer = require('../models/contributor')

module.exports = {
    create,
    index,
    update,
    deleteArticle, 
  };

  

  async function index(req,res) {
    try {
        let allArticles = await Article.find().sort({createdAt: 'desc'})
        res.status(200).json(allArticles)
  
    } catch(err) {
        res.status(400).json("Couldn't get posts")
    }
}



    async function create(req, res) {
    console.log(req.body.article.contributor)
     const author = await Contributer.findOne({ name: req.body.article.contributor}).exec()
     const authorId = author._id
     console.log('this is author ID' + authorId)
     
     
     console.log(req.body)
 
      try {

        
        
        const article = await Article.create({
           title: req.body.article.title, 
           contributor: req.body.article.contributor, 
           body: req.body.article.body, 
           tags: req.body.article.tags, 
           headline: req.body.article.headline, 
           image: req.body.article.image,
           postedBy: req.body.article.postedBy, 
           contributorId: authorId,
           user: req.body.userId,
          

        })
           author.articles.push(article._id)
           await author.save()
      
       res.status(200).json('ok. submissions added to DB!')
     } catch(err) {
       res.json(err)
     }
    }

    async function update(req,res) {
   
      const articleId = req.params.id
       try{
        let article = await Article.findByIdAndUpdate(articleId, req.body.selectedArticle)
        res.status(200).json({'data': article})
       } catch(err) {
        res.status(500).json({'error': err.message})
       }
    }

    async function deleteArticle(req,res) {

      const articleId = req.params.id
      try{
        let article = await Article.deleteOne({_id: articleId})
        res.status(200).json({'data': article})
      } catch(err) {
        res.status(500).json({'error': err.message})
      }
  }
      