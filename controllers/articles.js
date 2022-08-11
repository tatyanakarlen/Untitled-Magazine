const Article = require('../models/article');
// const user = require('../models/user');

module.exports = {
    create,
  };

  async function create(req, res) {
    console.log(req.body.article)
      let obj = (req.body.article)
//     //   console.log(req.body.postedBy)
      try {
//       // await SubmissionModel.create({submission: req.body.submission})
//     //   const user = await user.findById(req.body.contributor.postedBy)
//     //   console.log('this is user ' + user)
//     //   const contributor = await Contributor.create({
//     //       name: req.body.contributor.name, 
//     //       email: req.body.contributor.email, 
//     //       city: req.body.contributor.city, 
//     //       country: req.body.contributor.country, 
//     //       postedBy: req.body.contributor.postedBy,
//     //   })
      await Article.create(obj)
      res.status(200).json('ok. submissions added to DB!' + req.body.contributor)
    } catch(err) {
      res.json(err)
    }
  }