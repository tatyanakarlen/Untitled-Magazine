const Article = require('../models/article');
const Contributer = require('../models/contributor')

module.exports = {
    create,
  };

  // await Adventure.findOne({ country: 'Croatia' }).exec();

//   title: {
//     type: String, 
//     required: true
// }, 
// contributor: {
//     type: Schema.Types.String,
//     required: true,
//     ref: 'Contributor',
// }, 
// body: {type: String, required: true}, 
// tags: {type: String, required: true}, 
// postedBy: {type: String, required: true},

  

  async function create(req, res) {
    console.log(req.body.article.contributor)
    // let contrib = req.body.contributor

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