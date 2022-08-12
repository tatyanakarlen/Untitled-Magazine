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
      // let obj = (req.body.article)
//     //   console.log(req.body.postedBy)
      try {
        
        const article = await Article.create({
           title: req.body.article.title, 
           contributor: req.body.article.contributor, 
           body: req.body.article.body, 
           tags: req.body.article.tags, 
           postedBy: req.body.article.postedBy, 
           contributorId: authorId,

        })
      
//     //   const user = await user.findById(req.body.contributor.postedBy)
//     //   console.log('this is user ' + user)
//     //   const contributor = await Contributor.create({
//     //       name: req.body.contributor.name, 
//     //       email: req.body.contributor.email, 
//     //       city: req.body.contributor.city, 
//     //       country: req.body.contributor.country, 
//     //       postedBy: req.body.contributor.postedBy,
//     //   })
      // await Article.create(obj)
      res.status(200).json('ok. submissions added to DB!' + req.body.contributor)
    } catch(err) {
      res.json(err)
    }
  }