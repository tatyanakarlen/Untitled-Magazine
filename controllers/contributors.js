const Contributor = require('../models/contributor');

module.exports = {
    create,
  };

  async function create(req, res) {
    console.log(req.body.contributor)
    // console.log(req.user.id)
      let obj = (req.body.contributor)
      try {
      // await SubmissionModel.create({submission: req.body.submission})
      await Contributor.create(obj)
      res.status(200).json('ok. submissions added to DB!' + req.body.contributor)
    } catch(err) {
      res.json(err)
    }
  }