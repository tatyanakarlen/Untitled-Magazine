const Article = require('../models/article');
const Contributer = require('../models/contributor')

module.exports = {
    create,
    index,
  };


  async function index(req,res) {
    try {
        let allArticles = await Article.find()
        res.status(200).json(allArticles)
        console.log(allArticles)
    } catch(err) {
        res.status(400).json("Couldn't get posts")
    }
}



    async function create(req, res) {
     const author = await Contributer.findOne({ name: req.body.article.contributor}).exec()
     const authorId = author._id
     console.log(authorId)
 
      try {
        
        const article = await Article.create({
           title: req.body.article.title, 
           contributor: req.body.article.contributor, 
           body: req.body.article.body, 
           tags: req.body.article.tags, 
           postedBy: req.body.article.postedBy, 
           contributorId: authorId,

        })
           author.articles.push(article._id)
           await author.save()
      
       res.status(200).json('ok. submissions added to DB!')
     } catch(err) {
       res.json(err)
     }
    }