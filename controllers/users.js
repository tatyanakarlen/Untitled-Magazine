const User = require('../models/user');
const jwt = require('jsonwebtoken'); // import the jwt library
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6

module.exports = {
  create,
  login
};

async function create(req, res) {
    
    try {
    //  lets create a new user
      // NOTE: here we are storing a plaintext password. VERY VERY DANGEROUS. We will replace this in a second:
      console.log(req.body)
      const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
      const user = await User.create({name: req.body.name, email:req.body.email, password:hashedPassword,})
      console.log(req.body)
      // creating a jwt: 
      // the first parameter specifies what we want to put into the token (in this case, our user document)
      // the second parameter is a "secret" code. This lets our server verify if an incoming jwt is legit or not.
      const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
      console.log(token)
      console.log(user)
      console.log(req.body)
      res.status(200).json(token); // send it to the frontend
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async function login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      // check password. if it's bad throw an error.
      // if (req.body.password !== user.password) throw new Error();
      if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();
  
      // if we got to this line, password is ok. give user a new token.
      const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
      res.status(200).json(token)
    } catch {
      res.status(400).json('Bad Credentials');
    }
  }