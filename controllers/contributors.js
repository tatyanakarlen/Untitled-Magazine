const Contributor = require('../models/contributor');
const user = require('../models/user');

module.exports = {
    create,
    index,
    update, 
    deleteContributor, 
  };


  async function index(req,res) {
    try {
        let allContributors = await Contributor.find().sort({ _id: 'desc'})
        res.status(200).json(allContributors)
        console.log(allContributors)
    } catch(err) {
        res.status(400).json("Couldn't get posts")
    }
}


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


  // updates item

async function update(req,res) {
   
  //  let contribId = req.body.selectedContributor.contributerId
  const contribId = req.params.id
   try{
    let contributor = await Contributor.findByIdAndUpdate(contribId, req.body.selectedContributor)
    res.status(200).json({'data': contributor})
   } catch(err) {
    res.status(500).json({'error': err.message})
   }
}
  
  
  // delete item 
  
  async function deleteContributor(req,res) {

      const contribId = req.params.id
      try{
        let contributor = await Contributor.deleteOne({_id: contribId})
        res.status(200).json({'data': contributor})
      } catch(err) {
        res.status(500).json({'error': err.message})
      }
  }

