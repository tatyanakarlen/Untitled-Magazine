const Contributor = require('../models/contributor');
const user = require('../models/user');

module.exports = {
    create,
  };

  async function create(req, res) {
    console.log('this is req.user id ' + req.body.contributor.postedBy)
      let obj = (req.body.contributor)
    //   console.log(req.body.postedBy)
      try {
      // await SubmissionModel.create({submission: req.body.submission})
    //   const user = await user.findById(req.body.contributor.postedBy)
    //   console.log('this is user ' + user)
    //   const contributor = await Contributor.create({
    //       name: req.body.contributor.name, 
    //       email: req.body.contributor.email, 
    //       city: req.body.contributor.city, 
    //       country: req.body.contributor.country, 
    //       postedBy: req.body.contributor.postedBy,
    //   })
      await Contributor.create(obj)
      res.status(200).json('ok. submissions added to DB!' + req.body.contributor)
    } catch(err) {
      res.json(err)
    }
  }