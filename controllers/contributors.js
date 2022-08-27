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

    } catch(err) {
        res.status(400).json("Couldn't get posts")
    }
}


  async function create(req, res) {
    console.log('this is req.user id ', req.user)
      let obj = (req.body.contributor)
    
      try {
     
      const newContributor = await Contributor.create(obj)
      res.status(200).json(newContributor)
    } catch(err) {
      res.json(err)
    }
  }


  

async function update(req,res) {
   
  
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

